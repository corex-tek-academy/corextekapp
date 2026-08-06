<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/lib/supabase'
import BillingCard from '@/components/BillingCard.vue'

const route = useRoute()

const emit = defineEmits(['register-success', 'register-error'])

// Form Data state
const formData = reactive({
  courseInterest: '',
  fullName: '',
  email: '',
  phone: '',
  gender: '',
  ageRange: '',
  country: '',
  state: '',
  learningTrack: '',
  availability: '',
  laptopAccess: '',
  internetQuality: '',
  education: '',
  techExperience: '',
  techExperienceDetails: '',
  whyJoin: '',
  mainGoal: '',
  referralSource: '',
  referralOther: '',
  paymentMade: '',
  paymentEvidence: null
})

onMounted(() => {
  if (route.query.course) {
    setTimeout(() => {
      const formEl = document.getElementById('register-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 500)
  }
})

// UI Interaction State
const currentStep = ref(1)
const isSubmitting = ref(false)

// Field Errors validation state
const fieldErrors = reactive({
  courseInterest: '',
  fullName: '',
  email: '',
  phone: '',
  gender: '',
  learningTrack: '',
  availability: '',
  techExperience: '',
  techExperienceDetails: '',
  referralSource: '',
  referralOther: '',
  paymentMade: '',
  paymentEvidence: ''
})

// Pre-select course based on query parameter from Programs click
if (route.query.course) {
  const matchedCourse = ['frontend', 'backend', 'fullstack', 'mobile', 'data-science', 'cybersecurity', 'cloud', 'devops', 'ai', 'ml']
    .find(c => c === route.query.course)
  if (matchedCourse) {
    formData.courseInterest = matchedCourse
  }
}

// File Upload handler with validation
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    if (file.size > 5 * 1024 * 1024) {
      fieldErrors.paymentEvidence = 'File size must be less than 5MB'
      event.target.value = ''
      formData.paymentEvidence = null
      return
    }
    formData.paymentEvidence = file
    fieldErrors.paymentEvidence = ''
  }
}

// Email syntax validator
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const clearFieldErrors = () => {
  Object.keys(fieldErrors).forEach(key => {
    fieldErrors[key] = ''
  })
}

// Validate Step 1 (Required Details only)
const validateStep1 = () => {
  clearFieldErrors()
  let hasErrors = false

  if (!formData.courseInterest) {
    fieldErrors.courseInterest = 'Please select a course of interest'
    hasErrors = true
  }
  if (!formData.fullName?.trim()) {
    fieldErrors.fullName = 'Please enter your full name'
    hasErrors = true
  }
  if (!formData.email?.trim()) {
    fieldErrors.email = 'Please enter your email address'
    hasErrors = true
  } else if (!isValidEmail(formData.email)) {
    fieldErrors.email = 'Please enter a valid email address'
    hasErrors = true
  }
  if (!formData.phone?.trim()) {
    fieldErrors.phone = 'Please enter your phone/WhatsApp number'
    hasErrors = true
  }
  if (!formData.gender) {
    fieldErrors.gender = 'Please select your gender'
    hasErrors = true
  }
  if (!formData.learningTrack) {
    fieldErrors.learningTrack = 'Please select a learning track'
    hasErrors = true
  }
  if (!formData.availability) {
    fieldErrors.availability = 'Please select your availability'
    hasErrors = true
  }

  return !hasErrors
}

// Validate Step 2 (Background & Payment Details)
const validateStep2 = () => {
  clearFieldErrors()
  let hasErrors = false

  if (!formData.techExperience) {
    fieldErrors.techExperience = 'Please select prior experience status'
    hasErrors = true
  } else if (formData.techExperience === 'yes' && !formData.techExperienceDetails?.trim()) {
    fieldErrors.techExperienceDetails = 'Please provide details on your prior experience'
    hasErrors = true
  }

  if (!formData.referralSource) {
    fieldErrors.referralSource = 'Please select how you heard about us'
    hasErrors = true
  } else if (formData.referralSource === 'other' && !formData.referralOther?.trim()) {
    fieldErrors.referralOther = 'Please specify referral details'
    hasErrors = true
  }

  if (!formData.paymentMade) {
    fieldErrors.paymentMade = 'Please select payment status'
    hasErrors = true
  } else if (formData.paymentMade === 'yes' && !formData.paymentEvidence) {
    fieldErrors.paymentEvidence = 'Please upload your proof of payment receipt'
    hasErrors = true
  }

  return !hasErrors
}

// Stepper controls
const scrollToForm = () => {
  const formEl = document.getElementById('register-form')
  if (formEl) {
    formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scrollToError = () => {
  setTimeout(() => {
    const errorEl = document.querySelector('.field-error-text')
    if (errorEl) {
      errorEl.previousElementSibling?.focus()
      errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, 100)
}

const nextStep = () => {
  if (validateStep1()) {
    currentStep.value = 2
    scrollToForm()
  } else {
    scrollToError()
  }
}

const previousStep = () => {
  currentStep.value = 1
  scrollToForm()
}

// Upload receipt file helper
const uploadPaymentEvidence = async () => {
  if (!formData.paymentEvidence) return null

  const file = formData.paymentEvidence
  const fileExt = file.name.split('.').pop()
  const fileName = `receipts/receipt-${Date.now()}.${fileExt}`

  const { data, error } = await supabase
    .storage
    .from('payments')
    .upload(fileName, file)

  if (error) {
    console.error('Storage Upload Error:', error)
    throw new Error('Failed to upload proof of payment file to storage.')
  }

  return fileName
}

const resetForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = key === 'paymentEvidence' ? null : ''
  })
  currentStep.value = 1
}

// Submit flow to Supabase DB
const submitForm = async () => {
  if (!validateStep2()) {
    scrollToError()
    return
  }

  try {
    isSubmitting.value = true
    let paymentStoragePath = null

    // 1. If payment is made, upload file to Supabase storage
    if (formData.paymentMade === 'yes') {
      paymentStoragePath = await uploadPaymentEvidence()
    }

    // 2. Prepare payload
    const payload = { ...formData }
    payload.paymentEvidence = paymentStoragePath

    // 3. Insert record into database table
    const { error } = await supabase
      .from('cohort1_reg_tb')
      .insert([payload])

    if (error) throw error

    // 4. Emit success
    emit('register-success')
    resetForm()

  } catch (err) {
    console.error('Form submission error:', err)
    emit('register-error', err.message || 'An error occurred during submission. Please verify your connection details and try again.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="register-section container" id="register-form">
    <div class="form-container glass-panel">
      <div class="form-header">
        <h2>Student Registration</h2>
        <p>Complete the details below to secure your seat in our upcoming cohort.</p>
      </div>

      <!-- Step Progress Stepper -->
      <div class="stepper">
        <div class="step-item" :class="{ 'active': currentStep === 1, 'completed': currentStep > 1 }">
          <div class="step-icon">
            <span v-if="currentStep > 1"><i class="bi bi-check-lg"></i></span>
            <span v-else>1</span>
          </div>
          <span class="step-label">Personal Details</span>
        </div>
        <div class="step-line-wrapper">
          <div class="step-line-progress" :style="{ width: currentStep > 1 ? '100%' : '0%' }"></div>
        </div>
        <div class="step-item" :class="{ 'active': currentStep === 2, 'completed': currentStep > 2 }">
          <div class="step-icon">
            <span v-if="currentStep > 2"><i class="bi bi-check-lg"></i></span>
            <span v-else>2</span>
          </div>
          <span class="step-label">Additional Info</span>
        </div>
      </div>

      <!-- Form Element -->
      <form @submit.prevent="submitForm" id="corex-enrollment-form">
        <!-- STEP 1: Personal Information -->
        <div v-show="currentStep === 1" class="form-step-pane">
          <div class="fields-grid">
            <div class="form-group">
              <label for="courseInterest" class="form-label">Course of Interest <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="courseInterest"
                  v-model="formData.courseInterest"
                  @change="fieldErrors.courseInterest = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.courseInterest }"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="frontend">Front-End Developer</option>
                  <option value="backend">Back-End Developer</option>
                  <option value="fullstack">Full-Stack Developer</option>
                  <option value="mobile">Mobile App Developer</option>
                  <option value="data-science">Data Science & Analytics</option>
                  <option value="cybersecurity">Cybersecurity Principles</option>
                  <option value="cloud">Cloud Computing Architecture</option>
                  <option value="devops">DevOps Engineering</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="ml">Machine Learning Basics</option>
                </select>
              </div>
              <span v-if="fieldErrors.courseInterest" class="field-error-text">{{ fieldErrors.courseInterest }}</span>
            </div>

            <div class="form-group">
              <label for="fullName" class="form-label">Full Name <span class="required">*</span></label>
              <input
                type="text"
                id="fullName"
                v-model="formData.fullName"
                @input="fieldErrors.fullName = ''"
                class="form-control"
                :class="{ 'error': fieldErrors.fullName }"
                placeholder="Enter your full name"
                required
              />
              <span v-if="fieldErrors.fullName" class="field-error-text">{{ fieldErrors.fullName }}</span>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address <span class="required">*</span></label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                @input="fieldErrors.email = ''"
                class="form-control"
                :class="{ 'error': fieldErrors.email }"
                placeholder="yourname@domain.com"
                required
              />
              <span v-if="fieldErrors.email" class="field-error-text">{{ fieldErrors.email }}</span>
            </div>

            <div class="form-group">
              <label for="phone" class="form-label">Phone / WhatsApp Number <span class="required">*</span></label>
              <input
                type="tel"
                id="phone"
                v-model="formData.phone"
                @input="fieldErrors.phone = ''"
                class="form-control"
                :class="{ 'error': fieldErrors.phone }"
                placeholder="e.g., +234 803 123 4567"
                required
              />
              <span v-if="fieldErrors.phone" class="field-error-text">{{ fieldErrors.phone }}</span>
            </div>

            <div class="form-group">
              <label for="gender" class="form-label">Gender <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="gender"
                  v-model="formData.gender"
                  @change="fieldErrors.gender = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.gender }"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <span v-if="fieldErrors.gender" class="field-error-text">{{ fieldErrors.gender }}</span>
            </div>

            <div class="form-group">
              <label for="ageRange" class="form-label">Age Range</label>
              <div class="select-wrapper">
                <select id="ageRange" v-model="formData.ageRange" class="form-control">
                  <option value="">Select age range</option>
                  <option value="<16">&lt;16</option>
                  <option value="16-20">16–20</option>
                  <option value="21-25">21–25</option>
                  <option value="26-30">26–30</option>
                  <option value="31-40">31–40</option>
                  <option value="40+">40+</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="country" class="form-label">Country</label>
              <div class="select-wrapper">
                <select id="country" v-model="formData.country" class="form-control">
                  <option value="">Select country</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                  <option value="kenya">Kenya</option>
                  <option value="south-africa">South Africa</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="state" class="form-label">State / Province</label>
              <input
                type="text"
                id="state"
                v-model="formData.state"
                class="form-control"
                placeholder="Enter your state"
              />
            </div>

            <div class="form-group">
              <label for="learningTrack" class="form-label">Preferred Learning Track <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="learningTrack"
                  v-model="formData.learningTrack"
                  @change="fieldErrors.learningTrack = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.learningTrack }"
                  required
                >
                  <option value="">Select learning track</option>
                  <option value="beginner">Beginner Track (Zero Experience)</option>
                  <option value="intermediate">Intermediate Track</option>
                  <option value="advanced">Advanced Track</option>
                  <option value="specialized">Specialized Track</option>
                </select>
              </div>
              <span v-if="fieldErrors.learningTrack" class="field-error-text">{{ fieldErrors.learningTrack }}</span>
            </div>

            <div class="form-group">
              <label for="availability" class="form-label">Availability <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="availability"
                  v-model="formData.availability"
                  @change="fieldErrors.availability = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.availability }"
                  required
                >
                  <option value="">Select availability</option>
                  <option value="weekday">Weekdays (Mon - Fri)</option>
                  <option value="weekend">Weekends (Sat - Sun)</option>
                  <option value="hybrid">Hybrid Track</option>
                  <option value="self-paced">Self-Paced Track</option>
                </select>
              </div>
              <span v-if="fieldErrors.availability" class="field-error-text">{{ fieldErrors.availability }}</span>
            </div>
          </div>
        </div>

        <!-- STEP 2: Technical Background & Payments -->
        <div v-show="currentStep === 2" class="form-step-pane">
          <div class="fields-grid">
            <div class="form-group">
              <label for="laptopAccess" class="form-label">Do you have personal laptop access?</label>
              <div class="select-wrapper">
                <select id="laptopAccess" v-model="formData.laptopAccess" class="form-control">
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I have a laptop</option>
                  <option value="no">No, I do not have one</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="internetQuality" class="form-label">Internet Connection Quality</label>
              <div class="select-wrapper">
                <select id="internetQuality" v-model="formData.internetQuality" class="form-control">
                  <option value="">Select quality</option>
                  <option value="poor">Poor / Intermittent</option>
                  <option value="fair">Fair / Stable</option>
                  <option value="good">Good / High-Speed</option>
                  <option value="excellent">Excellent / Fibre</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="education" class="form-label">Highest Level of Education</label>
              <div class="select-wrapper">
                <select id="education" v-model="formData.education" class="form-control">
                  <option value="">Select education level</option>
                  <option value="high-school">High School / Secondary</option>
                  <option value="diploma">Diploma / Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="techExperience" class="form-label">Prior Tech/Programming Experience? <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="techExperience"
                  v-model="formData.techExperience"
                  @change="fieldErrors.techExperience = ''; fieldErrors.techExperienceDetails = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.techExperience }"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I have built basic code/apps</option>
                  <option value="no">No, I am a complete beginner</option>
                </select>
              </div>
              <span v-if="fieldErrors.techExperience" class="field-error-text">{{ fieldErrors.techExperience }}</span>
              <transition name="expand">
                <div v-if="formData.techExperience === 'yes'" class="nested-field">
                  <label for="techExperienceDetails" class="form-label">Describe your experience</label>
                  <textarea
                    id="techExperienceDetails"
                    v-model="formData.techExperienceDetails"
                    @input="fieldErrors.techExperienceDetails = ''"
                    class="form-control"
                    :class="{ 'error': fieldErrors.techExperienceDetails }"
                    placeholder="List languages, projects, or tools you have worked with..."
                    rows="3"
                  ></textarea>
                  <span v-if="fieldErrors.techExperienceDetails" class="field-error-text">{{ fieldErrors.techExperienceDetails }}</span>
                </div>
              </transition>
            </div>

            <div class="form-group form-group--span-2">
              <label for="whyJoin" class="form-label">Why do you want to join this program?</label>
              <textarea
                id="whyJoin"
                v-model="formData.whyJoin"
                class="form-control"
                placeholder="Share your motivations and what you hope to achieve..."
                rows="3"
              ></textarea>
            </div>

            <div class="form-group form-group--span-2">
              <label for="mainGoal" class="form-label">What is your primary goal after completing the program?</label>
              <textarea
                id="mainGoal"
                v-model="formData.mainGoal"
                class="form-control"
                placeholder="e.g. Get a junior developer job, launch a tech startup, work as a freelancer..."
                rows="3"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="referralSource" class="form-label">How did you hear about Corex Tek-Academy? <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="referralSource"
                  v-model="formData.referralSource"
                  @change="fieldErrors.referralSource = ''; fieldErrors.referralOther = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.referralSource }"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media (Twitter/LinkedIn/FB)</option>
                  <option value="friend">Friend / Referral</option>
                  <option value="google">Google Search</option>
                  <option value="website">Our Main Website</option>
                  <option value="event">Tech Event / Webinar</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <span v-if="fieldErrors.referralSource" class="field-error-text">{{ fieldErrors.referralSource }}</span>
              <transition name="expand">
                <div v-if="formData.referralSource === 'other'" class="nested-field">
                  <label for="referralOther" class="form-label">Please specify</label>
                  <input
                    type="text"
                    id="referralOther"
                    v-model="formData.referralOther"
                    @input="fieldErrors.referralOther = ''"
                    class="form-control"
                    :class="{ 'error': fieldErrors.referralOther }"
                    placeholder="Please specify how..."
                  />
                  <span v-if="fieldErrors.referralOther" class="field-error-text">{{ fieldErrors.referralOther }}</span>
                </div>
              </transition>
            </div>

            <div class="form-group">
              <label for="paymentMade" class="form-label">Have you made the registration payment? <span class="required">*</span></label>
              <div class="select-wrapper">
                <select
                  id="paymentMade"
                  v-model="formData.paymentMade"
                  @change="fieldErrors.paymentMade = ''; fieldErrors.paymentEvidence = ''"
                  class="form-control"
                  :class="{ 'error': fieldErrors.paymentMade }"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes, I have made payment</option>
                  <option value="no">No, not yet</option>
                </select>
              </div>
              <span v-if="fieldErrors.paymentMade" class="field-error-text">{{ fieldErrors.paymentMade }}</span>
              <transition name="expand">
                <div v-if="formData.paymentMade === 'yes'" class="nested-field file-upload-group">
                  <label for="paymentEvidence" class="form-label">Upload Proof of Payment <span class="required">*</span></label>
                  <div class="file-dropzone" :class="{ 'has-file': formData.paymentEvidence }">
                    <i class="bi bi-cloud-arrow-up-fill" v-if="!formData.paymentEvidence"></i>
                    <i class="bi bi-file-earmark-check-fill text-success" v-else></i>
                    <div class="dropzone-text" v-if="!formData.paymentEvidence">
                      <span>Click to upload image or PDF</span>
                      <p class="help-text">Max size 5MB (JPG, PNG, PDF)</p>
                    </div>
                    <div class="dropzone-text" v-else>
                      <span class="file-name">{{ formData.paymentEvidence.name }}</span>
                      <p class="success-text">File ready for upload ({{ (formData.paymentEvidence.size / (1024 * 1024)).toFixed(2) }} MB)</p>
                    </div>
                    <input
                      type="file"
                      id="paymentEvidence"
                      ref="paymentFileInput"
                      @change="handleFileUpload"
                      accept="image/*,.pdf"
                      class="file-input-overlay"
                      :required="formData.paymentMade === 'yes'"
                    />
                  </div>
                  <span v-if="fieldErrors.paymentEvidence" class="field-error-text">{{ fieldErrors.paymentEvidence }}</span>
                </div>
              </transition>
            </div>
          </div>

          <!-- Premium Billing Card -->
          <BillingCard />
        </div>

        <!-- Wizard Footer Navigation -->
        <div class="form-nav-bar">
          <button
            v-if="currentStep > 1"
            type="button"
            @click="previousStep"
            class="btn btn-wizard-sec"
          >
            <i class="bi bi-arrow-left"></i>
            <span>Back</span>
          </button>
          <div v-else></div>

          <button
            v-if="currentStep < 2"
            type="button"
            @click="nextStep"
            class="btn btn-wizard-prim"
          >
            <span>Continue</span>
            <i class="bi bi-arrow-right"></i>
          </button>

          <button
            v-if="currentStep === 2"
            type="submit"
            class="btn btn-wizard-prim submit-btn"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">
              <i class="bi bi-arrow-clockwise animate-spin"></i>
              Submitting Registration...
            </span>
            <span v-else>
              <span>Submit Registration</span>
              <i class="bi bi-check-circle-fill"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
/* Registration Form wizard container */
.register-section {
  margin-top: 60px;
  padding: 0 24px;
}

.form-container {
  max-width: 960px;
  margin: 0 auto;
  background: var(--color-surface);
  padding: 48px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
}

.form-header {
  text-align: center;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-header h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--primary-text);
}

.form-header p {
  color: var(--text-secondary);
  font-size: 0.975rem;
}

/* Stepper Indicator styling */
.stepper {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 520px;
  margin: 0 auto 48px auto;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 10;
}

.step-icon {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--color-surface-raised);
  border: 2px solid var(--color-border);
  color: var(--text-tertiary);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.step-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-tertiary);
  white-space: nowrap;
}

.step-item.active .step-icon {
  background: var(--primary);
  border-color: var(--primary);
  color: var(--light);
  box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
}

.step-item.active .step-label {
  color: var(--primary-text);
  font-weight: 700;
}

.step-item.completed .step-icon {
  background: #10b981;
  border-color: #10b981;
  color: var(--light);
}

.step-item.completed .step-label {
  color: #10b981;
}

.step-line-wrapper {
  flex-grow: 1;
  height: 3px;
  background-color: var(--color-border);
  margin: 0 -10px 18px -10px;
  position: relative;
}

.step-line-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #10b981;
  transition: width 0.4s ease;
}

/* Fields Grid & Form Controls */
.fields-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 30px;
  text-align: left;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group--span-2 {
  grid-column: span 2;
}

.form-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
}

.required {
  color: #ef4444;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--text);
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
}

.form-control::placeholder {
  color: var(--text-tertiary);
}

.form-control:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-control.error {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.select-wrapper select {
  appearance: none;
  cursor: pointer;
  padding-right: 40px;
}

.select-wrapper::after {
  content: '\F2E7';
  font-family: "bootstrap-icons";
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-tertiary);
  font-size: 0.85rem;
}

textarea.form-control {
  resize: vertical;
  min-height: 96px;
}

.field-error-text {
  font-size: 0.8rem;
  font-weight: 600;
  color: #ef4444;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nested-field {
  margin-top: 12px;
  padding: 16px;
  background: var(--color-background-soft);
  border-left: 3px solid var(--primary);
  border-radius: 0 12px 12px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* File dropzone styling */
.file-dropzone {
  border: 2px dashed var(--color-border);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  position: relative;
  background: var(--color-background-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.file-dropzone:hover {
  border-color: var(--primary);
  background: var(--primary-light);
}

.file-dropzone.has-file {
  border-color: #10b981;
  background-color: rgba(16, 185, 129, 0.02);
}

.file-dropzone i {
  font-size: 2rem;
  color: var(--primary-text);
}

.dropzone-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropzone-text span {
  font-weight: 600;
  font-size: 0.9rem;
}

.dropzone-text .help-text {
  font-size: 0.75rem;
  color: var(--text-tertiary);
}

.dropzone-text .success-text {
  font-size: 0.8rem;
  color: #10b981;
  font-weight: 600;
}

.file-name {
  font-weight: 600;
  color: var(--text);
  max-width: 260px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-input-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 5;
}

/* Wizard Navigation Bar */
.form-nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 30px;
  border-top: 1px solid var(--color-border);
}

.btn-wizard-prim {
  background: var(--primary-gradient);
  color: var(--light);
  border: none;
  padding: 12px 28px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-wizard-prim:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(59, 130, 246, 0.3);
}

.btn-wizard-prim:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-wizard-prim.submit-btn {
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
}

.btn-wizard-prim.submit-btn:hover:not(:disabled) {
  background: var(--secondary-gradient);
  box-shadow: 0 15px 30px rgba(13, 148, 136, 0.3);
}

.btn-wizard-sec {
  background: transparent;
  color: var(--text);
  border: 1px solid var(--color-border);
  padding: 12px 24px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.btn-wizard-sec:hover {
  background-color: var(--color-background-soft);
  border-color: var(--color-border-hover);
}

/* Spinner */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  display: inline-block;
  animation: spin 1s linear infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .form-container {
    padding: 32px 24px;
    border-radius: 20px;
  }

  .fields-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .form-group--span-2 {
    grid-column: span 1;
  }

  .stepper {
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 24px 16px;
  }
  .stepper {
    max-width: 280px;
  }
  .step-label {
    display: none;
  }
  .step-line-wrapper {
    margin-bottom: 0;
  }
  .form-nav-bar {
    flex-direction: column-reverse;
    gap: 12px;
  }
  .form-nav-bar .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
