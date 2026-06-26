<template>
  <div class="enrollment-page">
    <!-- Top Hero Banner -->
    <section class="enrollment-hero" aria-labelledby="enrollment-heading">
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="badge-pill badge-pill--primary animate-fade-in-up">
            <i class="bi bi-person-plus-fill"></i>
            Cohort 1 Registration
          </span>
          <h1 id="enrollment-heading" class="animate-fade-in-up">
            Your Tech Career Starts Here. <br />
            <span class="text-gradient">Enroll Now</span> & Start Learning.
          </h1>
          <p class="lead animate-fade-in-up">
            Corex Tek-Academy equips beginners with hands-on skills, dedicated mentorship, and real-world projects that open doors to top tech roles.
          </p>
        </div>
      </div>
    </section>

    <!-- Cohort Information Section -->
    <section class="cohort-info container">
      <div class="cohort-card glass-panel">
        <div class="cohort-grid">
          <div class="cohort-visual">
            <span class="status-badge">
              <i class="bi bi-calendar-event-fill"></i>
              Starts Feb 9, 2026
            </span>
            <div class="img-wrapper">
              <img :src="img5" alt="Corex Tek-Academy class onboarding representation">
            </div>
          </div>
          <div class="cohort-details">
            <h2>Why Join Cohort 1?</h2>
            <p class="description">
              Corex Tek-Academy Cohort 1 is a beginner-friendly web development program that takes you from zero programming experience to real-world career readiness. Through structured lessons, hands-on portfolio development, and personal mentorship, you will build strong foundations, confidence, and in-demand skills.
            </p>
            <div class="why-join-list">
              <div class="why-join-item">
                <div class="icon-circle"><i class="bi bi-compass"></i></div>
                <div>
                  <h4>Step-by-Step Guided Paths</h4>
                  <p>No assumptions. We teach you from the absolute ground up, block by block.</p>
                </div>
              </div>
              <div class="why-join-item">
                <div class="icon-circle"><i class="bi bi-folder-check"></i></div>
                <div>
                  <h4>Production-Grade Projects</h4>
                  <p>Work on actual apps and build a portfolio that commands recruiter attention.</p>
                </div>
              </div>
              <div class="why-join-item">
                <div class="icon-circle"><i class="bi bi-people-fill"></i></div>
                <div>
                  <h4>Industry Mentorship</h4>
                  <p>Get direct support, code reviews, and career counseling from active tech pros.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Wizard Section -->
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
              <!-- Course of Interest -->
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

              <!-- Full Name -->
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

              <!-- Email Address -->
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

              <!-- Phone / WhatsApp Number -->
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

              <!-- Gender -->
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

              <!-- Age Range -->
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

              <!-- Country -->
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

              <!-- State -->
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

              <!-- Preferred Learning Track -->
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

              <!-- Availability -->
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
              <!-- Laptop Access -->
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

              <!-- Internet Access Quality -->
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

              <!-- Highest Level of Education -->
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

              <!-- Prior Tech Experience -->
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
                
                <!-- Conditional Details field -->
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

              <!-- Why Join -->
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

              <!-- Main Goal -->
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

              <!-- Referral Source -->
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
                
                <!-- Conditional Specific Source -->
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

              <!-- Payment Status & Upload -->
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
                
                <!-- Conditional File Upload -->
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
            <div class="billing-card-wrapper animate-fade-in-up">
              <div class="billing-card">
                <div class="card-chip"></div>
                <div class="card-brand">Secure Payment Details</div>
                
                <div class="card-details-grid">
                  <div class="detail-item">
                    <span class="label">REGISTRATION FEE</span>
                    <span class="val fee-highlight">₦1,500</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">BANK NAME</span>
                    <span class="val">MONIEPOINT</span>
                  </div>
                  <div class="detail-item">
                    <span class="label">ACCOUNT NAME</span>
                    <span class="val">OGBONNA JENNIFER .C</span>
                  </div>
                  <div class="detail-item account-number-col">
                    <span class="label">ACCOUNT NUMBER</span>
                    <div class="number-copy-wrapper">
                      <span class="val number">6542304832</span>
                      <button type="button" class="btn-copy" @click="copyAccountNumber" aria-label="Copy Account Number">
                        <i class="bi" :class="copied ? 'bi-check-circle-fill text-success' : 'bi-copy'"></i>
                        <span class="copy-tooltip" v-if="copied">Copied!</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <div v-else></div> <!-- Placeholder for layout alignment -->

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

    <!-- Academy Introductory Video -->
    <section class="video-section container">
      <div class="video-wrapper glass-panel">
        <h2 class="video-heading">Corex Tek-Academy Walkthrough</h2>
        <p class="video-sub">Watch this short introductory video to learn more about our student experience and cohort structure.</p>
        <div class="iframe-container">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/ScMzIvxBSi4" 
            title="Corex Tek-Academy Video Player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Student Testimonials (Cohesion element) -->
    <section class="testimonials-dock">
      <Testimonial />
    </section>

    <!-- Custom Success/Error Modal Dialog -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay" role="dialog" aria-modal="true">
        <div class="modal-card glass-panel animate-scale">
          <button class="modal-close-corner" @click="closeModal" aria-label="Close dialog">✕</button>
          
          <div class="modal-icon-wrapper" :class="modalType">
            <i class="bi bi-patch-check-fill" v-if="modalType === 'success'"></i>
            <i class="bi bi-exclamation-triangle-fill" v-else></i>
          </div>
          
          <h3 class="modal-title">{{ modalType === 'success' ? 'Registration Complete!' : 'Registration Failed' }}</h3>
          <p class="modal-msg-text">{{ modalMessage }}</p>
          
          <button class="btn btn-modal-close" @click="closeModal">
            Close
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/lib/supabase'
import img5 from '/src/assets/image/img5.png'
import Testimonial from '@/components/Testimonial.vue'

const route = useRoute()

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

// UI Interaction State
const currentStep = ref(1)
const isSubmitting = ref(false)
const copied = ref(false)

// Modal Alert State
const showModal = ref(false)
const modalType = ref('success') // 'success' | 'error'
const modalMessage = ref('')

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

onMounted(() => {
  // Pre-select course based on query parameter from Programs click
  if (route.query.course) {
    const matchedCourse = ['frontend', 'backend', 'fullstack', 'mobile', 'data-science', 'cybersecurity', 'cloud', 'devops', 'ai', 'ml']
      .find(c => c === route.query.course)
    if (matchedCourse) {
      formData.courseInterest = matchedCourse
      // Smoothly scroll down to the form container on mount
      setTimeout(() => {
        const formEl = document.getElementById('register-form')
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 500)
    }
  }
})

// Clipboard Helper
function copyAccountNumber() {
  navigator.clipboard.writeText('6542304832').then(() => {
    copied.value = true
    setTimeout(() => copied.value = false, 3000)
  })
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

  // Generate public or clean path URL
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
    payload.paymentEvidence = paymentStoragePath // Replace file with storage path string

    // 3. Insert record into database table
    const { error } = await supabase
      .from('cohort1_reg_tb')
      .insert([payload])

    if (error) throw error

    // 4. Trigger success modal
    modalType.value = 'success'
    modalMessage.value = 'Your registration for Corex Tek-Academy Cohort 1 was submitted successfully! 🎉 Our admissions team will review your payment evidence and contact you via email/WhatsApp shortly.'
    showModal.value = true
    resetForm()

  } catch (err) {
    console.error('Form submission error:', err)
    modalType.value = 'error'
    modalMessage.value = err.message || 'An error occurred during submission. Please verify your connection details and try again.'
    showModal.value = true
  } finally {
    isSubmitting.value = false
  }
}

const closeModal = () => {
  showModal.value = false
}
</script>

<style scoped>
.enrollment-page {
  background: var(--color-background-soft);
  min-height: 100vh;
  padding-bottom: 80px;
}

/* Hero Section */
.enrollment-hero {
  margin-top: 80px;
  padding: 80px 0;
  background: radial-gradient(circle at 10% 10%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
              radial-gradient(circle at 90% 90%, rgba(13, 148, 136, 0.06) 0%, transparent 40%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.03);
}

.hero-inner {
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.hero-content h1 {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 800;
  line-height: 1.15;
  color: var(--text);
}

.hero-content .lead {
  max-width: 680px;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Cohort Information Card */
.cohort-info {
  margin-top: -40px;
  position: relative;
  z-index: 20;
  padding: 0 24px;
}

.cohort-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 48px;
}

.cohort-grid {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 48px;
  align-items: center;
}

.cohort-visual {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
}

.status-badge {
  position: absolute;
  top: 20px;
  left: 20px;
  background: #10b981;
  color: var(--light);
  padding: 6px 14px;
  border-radius: 100px;
  font-size: 0.825rem;
  font-weight: 700;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.cohort-visual .img-wrapper {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.03);
}

.cohort-visual img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.cohort-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  text-align: left;
}

.cohort-details h2 {
  font-size: 1.85rem;
  font-weight: 800;
}

.cohort-details .description {
  color: var(--small--text);
  font-size: 0.975rem;
  line-height: 1.7;
}

.why-join-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.why-join-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.icon-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary-text);
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.why-join-item h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2px;
}

.why-join-item p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

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

/* Inputs and Selects styling */
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
  content: '\F2E7'; /* Bootstrap icon chevron down */
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

/* Nested Fields with transition */
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

/* Premium Billing Card */
.billing-card-wrapper {
  grid-column: span 2;
  margin-top: 12px;
}

.billing-card {
  background: linear-gradient(135deg, #090d16 0%, #172554 100%);
  color: var(--light);
  border-radius: 20px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  overflow: hidden;
}

.billing-card::before {
  content: '';
  position: absolute;
  top: -50px;
  right: -50px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  pointer-events: none;
}

.card-chip {
  width: 44px;
  height: 32px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  border-radius: 6px;
  position: relative;
}

.card-brand {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.card-details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item.account-number-col {
  grid-column: span 3;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
  margin-top: 8px;
}

.detail-item .label {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 700;
  letter-spacing: 0.05em;
}

.detail-item .val {
  font-size: 0.95rem;
  font-weight: 600;
  color: #ffffff;
}

.detail-item .fee-highlight {
  font-size: 1.15rem;
  color: #10b981;
  font-weight: 800;
}

.number-copy-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.detail-item .number {
  font-size: 1.5rem !important;
  font-weight: 800 !important;
  letter-spacing: 0.05em;
  font-family: monospace;
}

.btn-copy {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: var(--light);
  transition: all 0.2s ease;
  position: relative;
}

.btn-copy:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--light);
}

.copy-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 8px;
  background: #10b981;
  color: white;
  padding: 4px 8px;
  font-size: 0.75rem;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 700;
  pointer-events: none;
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

/* Video walkthrough section */
.video-section {
  margin-top: 80px;
  padding: 0 24px;
}

.video-wrapper {
  max-width: 960px;
  margin: 0 auto;
  background: var(--color-surface);
  padding: 48px;
  border: 1px solid var(--color-border);
  border-radius: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.video-heading {
  font-size: 1.85rem;
  font-weight: 800;
  color: var(--text);
}

.video-sub {
  color: var(--text-secondary);
  max-width: 600px;
  font-size: 0.975rem;
  margin-bottom: 8px;
}

.iframe-container {
  width: 100%;
  aspect-ratio: 16/9;
  max-width: 800px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-border);
}

.testimonials-dock {
  margin-top: 40px;
}

/* Modal Overlay Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 24px;
}

.modal-card {
  max-width: 440px;
  width: 100%;
  background: var(--color-surface-raised);
  border: 1px solid var(--color-border);
  padding: 40px;
  border-radius: 28px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
}

.modal-close-corner {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background: transparent;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--text-tertiary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: all 0.2s ease;
}

.modal-close-corner:hover {
  background-color: var(--color-background-soft);
  color: var(--text);
}

.modal-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 3rem;
}

.modal-icon-wrapper.success {
  background-color: rgba(16, 185, 129, 0.08);
  color: #10b981;
}

.modal-icon-wrapper.error {
  background-color: rgba(239, 68, 68, 0.08);
  color: #ef4444;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text);
}

.modal-msg-text {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.btn-modal-close {
  background: var(--primary);
  color: var(--light);
  border: none;
  padding: 12px 32px;
  border-radius: 100px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(59, 130, 246, 0.2);
  transition: all 0.3s ease;
}

.btn-modal-close:hover {
  background-color: var(--primary-hover);
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

/* Spinner Rotate Keyframes */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  display: inline-block;
  animation: spin 1s linear infinite;
}

/* Vue Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-scale {
  animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

@keyframes scaleUp {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* Responsive configurations */
@media (max-width: 991px) {
  .cohort-card {
    padding: 32px;
  }
  .cohort-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .cohort-details h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.25rem;
  }
  
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

  .billing-card-wrapper {
    grid-column: span 1;
  }

  .card-details-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .detail-item.account-number-col {
    grid-column: span 1;
  }

  .detail-item .number {
    font-size: 1.2rem !important;
  }

  .stepper {
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .enrollment-hero {
    padding: 60px 0;
  }
  .cohort-info {
    margin-top: -20px;
  }
  .form-container {
    padding: 24px 16px;
  }
  .stepper {
    max-width: 280px;
  }
  .step-label {
    display: none; /* Hide labels on mobile to prevent overlapping */
  }
  .step-line-wrapper {
    margin-bottom: 0;
  }
  .billing-card {
    padding: 24px 16px;
  }
  .form-nav-bar {
    flex-direction: column-reverse;
    gap: 12px;
  }
  .form-nav-bar .btn {
    width: 100%;
    justify-content: center;
  }
  .video-wrapper {
    padding: 24px 16px;
  }
  .video-heading {
    font-size: 1.4rem;
  }
}
</style>