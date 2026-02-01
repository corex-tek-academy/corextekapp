<template>
    <section class="enrollment bubble-bg" aria-labelledby="hero-heading">
        <div class="enrollment-inner container">
            <div class="entrollment-content">

                <h1 id="enrollment-heading">Your Tech Career Starts Here, Enroll <br> Now and Strat Learning</h1>
                    
                <p class="lead">
                Corex Tek-Academy equips beginners with hands-on skills and real-world projects that open doors to top tech roles.
                </p>
            </div>
            <div class="key_highllight">
                <span class=" highlight">Beginner-friendly <i class="bi bi-box-fill"></i></span>
                <span class=" highlight">Mentorship & coaching <i class="bi bi-award"></i></span>
                <span class=" highlight">Project-based learning <i class="bi bi-cpu"></i></span>
            </div>

            <div class="enrollment-actions">
                <a href="#form" class="btn btn--primary" role="button"> Registration is open <i class="bi bi-arrow-down" aria-hidden="true"></i></a>

            </div>
        </div>
    </section>
    <section class="cohort container">
        <div class="cohort-inner">
            <div class="cohort-content">
                <div class="visual">
                    <h1 id="cohort-heading">Cohort 1 Starts 9th febuary 2026!</h1>
    
                    <img :src="img5" alt="Cohort 1 Image">
                    
                </div>
                <div class="whyjoin">
                    <h2>Why Join Cohort 1?</h2>

                    <p>Corex Tek-Academy Cohort 1 is a beginner-friendly web development program that takes you from zero experience to real-world readiness. Through hands-on projects, structured lessons, and mentorship, you’ll build strong foundations, confidence, and job-ready skills.
                    </p>
                    
                    <p><strong>Our programs are structured to help beginners grow confidently through:</strong></p>

                    <div class="list">
                        <div class="items">
                            <i class="bi bi-check-circle"></i>
                            <h6>Step-by-step guided learning</h6>
                        </div>
                       
                        <div class="items">
                            <i class="bi bi-check-circle"></i>
                            <h6>Real-world projects</h6>
                        </div>
                        
                        <div class="items">
                            <i class="bi bi-check-circle"></i>
                            <h6>Mentor support</h6>
                        </div>
                       
                        <div class="items">
                            <i class="bi bi-check-circle"></i>
                            <h6>A supportive learning community</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>

    </section>

    <section class="register container">
        <div class="form_cont" id="form">
            <form @submit.prevent="submitForm" id="corex-form">
                <div class="header">
                    <h2>Register Here</h2>
                    <p class="sub-head">Fill out the form below to register for the program.</p>
                </div>

                <!-- Success/Error Messages -->
                <div v-if="showSuccess" class="form-message form-message--success">
                    Registration submitted successfully! 🎉
                </div>
                <div v-if="errorMessage" class="form-message form-message--error">
                    {{ errorMessage }}
                </div>

                <!-- Step Indicator -->
                <div class="step-indicator">
                    <div class="step-item" :class="{ 'active': currentStep === 1, 'completed': currentStep > 1 }">
                        <div class="step-number">1</div>
                        <div class="step-label">Personal Information</div>
                    </div>
                    <div class="step-connector" :class="{ 'completed': currentStep > 1 }"></div>
                    <div class="step-item" :class="{ 'active': currentStep === 2, 'completed': currentStep > 2 }">
                        <div class="step-number">2</div>
                        <div class="step-label">Additional Details</div>
                    </div>
                </div>

                <!-- Step 1: Personal Information -->
                <div v-show="currentStep === 1" class="form-step" ref="formContainer">
                    <div class="form_divide">
                        <!-- Course of Interest -->
                        <div class="form-group ">
                            <label for="courseInterest">
                                Course of Interest <span class="required">*</span>
                            </label>
                            <select id="courseInterest" v-model="formData.courseInterest" @change="fieldErrors.courseInterest = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.courseInterest }" required>
                                <option value="">Select a course</option>
                                <option value="frontend">Front-End Developer</option>
                                <option value="backend">Back-End Developer</option>
                                <option value="fullstack">Full-Stack Developer</option>
                                <option value="mobile">Mobile App Developer</option>
                                <option value="data-science">Data Science</option>
                                <option value="cybersecurity">Cybersecurity</option>
                                <option value="cloud">Cloud Computing</option>
                                <option value="devops">DevOps Engineering</option>
                                <option value="ai">Artificial Intelligence</option>
                                <option value="ml">Machine Learning</option>
                            </select>
                            <span v-if="fieldErrors.courseInterest" class="field-error">{{ fieldErrors.courseInterest }}</span>
                        </div>

                        <!-- Full Name -->
                        <div class="form-group">
                            <label for="fullName">
                                Full Name <span class="required">*</span>
                            </label>
                            <input 
                                type="text" 
                                id="fullName" 
                                v-model="formData.fullName" 
                                @input="fieldErrors.fullName = ''"
                                class="form-control" 
                                :class="{ 'form-control--error': fieldErrors.fullName }"
                                placeholder="Enter your full name" 
                                required
                            />
                            <span v-if="fieldErrors.fullName" class="field-error">{{ fieldErrors.fullName }}</span>
                        </div>

                        <!-- Email Address -->
                        <div class="form-group">
                            <label for="email">
                                Email Address <span class="required">*</span>
                            </label>
                            <input 
                                type="email" 
                                id="email" 
                                v-model="formData.email" 
                                @input="fieldErrors.email = ''"
                                class="form-control" 
                                :class="{ 'form-control--error': fieldErrors.email }"
                                placeholder="your.email@example.com" 
                                required
                            />
                            <span v-if="fieldErrors.email" class="field-error">{{ fieldErrors.email }}</span>
                        </div>

                        <!-- Phone / WhatsApp Number -->
                        <div class="form-group">
                            <label for="phone">
                                Phone / WhatsApp Number <span class="required">*</span>
                            </label>
                            <input 
                                type="tel" 
                                id="phone" 
                                v-model="formData.phone" 
                                @input="fieldErrors.phone = ''"
                                class="form-control" 
                                :class="{ 'form-control--error': fieldErrors.phone }"
                                placeholder="+1234567890" 
                                required
                            />
                            <span v-if="fieldErrors.phone" class="field-error">{{ fieldErrors.phone }}</span>
                        </div>

                        <!-- Gender -->
                        <div class="form-group">
                            <label for="gender">
                                Gender <span class="required">*</span>
                            </label>
                            <select id="gender" v-model="formData.gender" @change="fieldErrors.gender = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.gender }" required>
                                <option value="">Select gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                
                            </select>
                            <span v-if="fieldErrors.gender" class="field-error">{{ fieldErrors.gender }}</span>
                        </div>

                        <!-- Age Range -->
                        <div class="form-group">
                            <label for="ageRange">
                                Age Range <span class="required"></span>
                            </label>
                            <select id="ageRange" v-model="formData.ageRange" class="form-control" >
                                <option value="">Select age range</option>
                                <option value="<16">&lt;16</option>
                                <option value="16-20">16–20</option>
                                <option value="21-25">21–25</option>
                                <option value="26-30">26–30</option>
                                <option value="31-40">31–40</option>
                                <option value="40+">40+</option>
                            </select>
                        </div>

                        <!-- Country -->
                        <div class="form-group">
                            <label for="country">
                                Country <span class="required"></span>
                            </label>
                            <select id="country" v-model="formData.country" class="form-control" >
                                <option value="">Select country</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="ghana">Ghana</option>
                                <option value="kenya">Kenya</option>
                                <option value="south-africa">South Africa</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <!-- State -->
                        <div class="form-group">
                            <label for="state">
                                State <span class="required"></span>
                            </label>
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
                            <label for="learningTrack">
                                Preferred Learning Track <span class="required">*</span>
                            </label>
                            <select id="learningTrack" v-model="formData.learningTrack" @change="fieldErrors.learningTrack = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.learningTrack }" required>
                                <option value="">Select learning track</option>
                                <option value="beginner">Beginner Track</option>
                                <option value="intermediate">Intermediate Track</option>
                                <option value="advanced">Advanced Track</option>
                                <option value="specialized">Specialized Track</option>
                            </select>
                            <span v-if="fieldErrors.learningTrack" class="field-error">{{ fieldErrors.learningTrack }}</span>
                        </div>

                        <!-- Availability -->
                        <div class="form-group">
                            <label for="availability">
                                Availability <span class="required">*</span>
                            </label>
                            <select id="availability" v-model="formData.availability" @change="fieldErrors.availability = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.availability }" required>
                                <option value="">Select availability</option>
                                <option value="weekday">Weekday</option>
                                <option value="weekend">Weekend</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="self-paced">Self-paced</option>
                            </select>
                            <span v-if="fieldErrors.availability" class="field-error">{{ fieldErrors.availability }}</span>
                        </div>
                    </div>
                </div>

                <!-- Step 2: Additional Details -->
                <div v-show="currentStep === 2" class="form-step" ref="formContainer">
                    <div class="form_divide">
                        <!-- Laptop Access -->
                        <div class="form-group">
                            <label for="laptopAccess">
                                Laptop Access <span class="required"></span>
                            </label>
                            <select id="laptopAccess" v-model="formData.laptopAccess" class="form-control" >
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <!-- Internet Access Quality -->
                        <div class="form-group">
                            <label for="internetQuality">
                                Internet Access Quality <span class="required"></span>
                            </label>
                            <select id="internetQuality" v-model="formData.internetQuality" class="form-control" >
                                <option value="">Select quality</option>
                                <option value="poor">Poor</option>
                                <option value="fair">Fair</option>
                                <option value="good">Good</option>
                                <option value="excellent">Excellent</option>
                            </select>
                        </div>

                        <!-- Highest Level of Education -->
                        <div class="form-group">
                            <label for="education">
                                Highest Level of Education <span class="required"></span>
                            </label>
                            <select id="education" v-model="formData.education" class="form-control" >
                                <option value="">Select education level</option>
                                <option value="high-school">High School</option>
                                <option value="diploma">Diploma</option>
                                <option value="bachelor">Bachelor's Degree</option>
                                <option value="master">Master's Degree</option>
                                <option value="phd">PhD</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <!-- Prior Tech Experience -->
                        <div class="form-group ">
                            <label for="techExperience">
                                Prior Tech Experience? <span class="required">*</span>
                            </label>
                            <select id="techExperience" v-model="formData.techExperience" @change="fieldErrors.techExperience = ''; fieldErrors.techExperienceDetails = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.techExperience }" required>
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <span v-if="fieldErrors.techExperience" class="field-error">{{ fieldErrors.techExperience }}</span>
                            <!-- Conditional field for tech experience details -->
                            <div v-if="formData.techExperience === 'yes'" class="form-group form-group--nested">
                                <label for="techExperienceDetails">Please describe your tech experience</label>
                                <textarea 
                                    id="techExperienceDetails" 
                                    v-model="formData.techExperienceDetails" 
                                    @input="fieldErrors.techExperienceDetails = ''"
                                    class="form-control" 
                                    :class="{ 'form-control--error': fieldErrors.techExperienceDetails }"
                                    placeholder="Describe your prior tech experience..."
                                    rows="3"
                                ></textarea>
                                <span v-if="fieldErrors.techExperienceDetails" class="field-error">{{ fieldErrors.techExperienceDetails }}</span>
                            </div>
                        </div>

                        <!-- Why join program -->
                        <div class="form-group">
                            <label for="whyJoin">
                                Why do you want to join this program? <span class="required"></span>
                            </label>
                            <textarea 
                                id="whyJoin" 
                                v-model="formData.whyJoin" 
                                class="form-control" 
                                placeholder="Tell us why you're interested in joining..."
                                rows="3"
                                
                            ></textarea>
                        </div>

                        <!-- Main goal after program -->
                        <div class="form-group ">
                            <label for="mainGoal">
                                Main goal after the program? <span class="required"></span>
                            </label>
                            <textarea 
                                id="mainGoal" 
                                v-model="formData.mainGoal" 
                                class="form-control" 
                                placeholder="What are your goals after completing the program?"
                                rows="3"
                                
                            ></textarea>
                        </div>

                        <!-- How did you hear about us -->
                        <div class="form-group ">
                            <label for="referralSource">
                                How did you hear about Corex Tek-Academy? <span class="required">*</span>
                            </label>
                            <select id="referralSource" v-model="formData.referralSource" @change="fieldErrors.referralSource = ''; fieldErrors.referralOther = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.referralSource }" required>
                                <option value="">Select an option</option>
                                <option value="social-media">Social Media</option>
                                <option value="friend">Friend/Referral</option>
                                <option value="google">Google Search</option>
                                <option value="website">Website</option>
                                <option value="event">Event/Conference</option>
                                <option value="other">Other</option>
                            </select>
                            <span v-if="fieldErrors.referralSource" class="field-error">{{ fieldErrors.referralSource }}</span>
                            <!-- Conditional field for "Other" referral source -->
                            <div v-if="formData.referralSource === 'other'" class="form-group form-group--nested">
                                <label for="referralOther">Please specify</label>
                                <input 
                                    type="text" 
                                    id="referralOther" 
                                    v-model="formData.referralOther" 
                                    @input="fieldErrors.referralOther = ''"
                                    class="form-control" 
                                    :class="{ 'form-control--error': fieldErrors.referralOther }"
                                    placeholder="How did you hear about us?"
                                />
                                <span v-if="fieldErrors.referralOther" class="field-error">{{ fieldErrors.referralOther }}</span>
                            </div>
                        </div>

                        <!-- Payment Status -->
                        <div class="form-group ">
                            <label for="paymentMade">
                                Have you made payment? <span class="required">*</span>
                            </label>
                            <select id="paymentMade" v-model="formData.paymentMade" @change="fieldErrors.paymentMade = ''; fieldErrors.paymentEvidence = ''" class="form-control" :class="{ 'form-control--error': fieldErrors.paymentMade }" required>
                                <option value="">Select an option</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                            <span v-if="fieldErrors.paymentMade" class="field-error">{{ fieldErrors.paymentMade }}</span>
                            <!-- Conditional file upload field -->
                            <div v-if="formData.paymentMade === 'yes'" class="form-group form-group--nested">
                                <label for="paymentEvidence">
                                    Upload Payment Evidence <span class="required">*</span>
                                </label>
                                <input 
                                    type="file" 
                                    id="paymentEvidence" 
                                    ref="paymentFileInput"
                                    @change="handleFileUpload"
                                    accept="image/*,.pdf"
                                    class="form-control form-control--file"
                                    :class="{ 'form-control--error': fieldErrors.paymentEvidence }"
                                    :required="formData.paymentMade === 'yes'"
                                />
                                <span v-if="fieldErrors.paymentEvidence" class="field-error">{{ fieldErrors.paymentEvidence }}</span>
                                <p class="form-help">Accepted formats: JPG, PNG, PDF (Max 5MB)</p>
                            </div>
                        </div>
                    </div>
                    <div class="form-group form-group--fill">
                        <div class="bankdetails">
                            <!-- <p>MAKE PAYMENT NOW</p> -->
                            <div class="bankinfo">
                                <p><strong>Registration fee :</strong> ₦1,500</p>
                                <p><strong>Account Number:</strong> 6542304832</p>
                            </div>
                            <div class="bankinfo">
                                <p><strong>Bank Name:</strong>MONIEPOINT</p>
                                <p><strong>Account Name:</strong> OGBONNA JENNIFER .C</p>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="form-navigation">
                    <button 
                        v-if="currentStep > 1" 
                        type="button" 
                        @click="previousStep" 
                        class="btn btn--secondary"
                    >
                        <i class="bi bi-arrow-left"></i> Back
                    </button>
                    <button 
                        v-if="currentStep < 2" 
                        type="button" 
                        @click="nextStep" 
                        class="btn btn--primary"
                    >
                        Continue <i class="bi bi-arrow-right"></i>
                    </button>
                    <button 
                        v-if="currentStep === 2" 
                        type="submit" 
                        class="btn btn--primary" 
                        :disabled="isSubmitting"
                    >
                        {{ isSubmitting ? 'Submitting...' : 'Submit Registration' }}
                    </button>
                </div>
            </form>
        </div>
    </section>

    <section class="video container">
        <h1>Corex Tek-Academy Video</h1>
        <div class="video_inner">
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
    </section>

 

    <!-- =====modal======== -->
    <div v-if="showModal" class="modal-overlay">
        <div class="modal-content">
            <div class="modal-icon">
            <span v-if="modalType === 'success'" class="icon-success"><i class="bi bi-patch-check"></i></span>
            <span v-else class="icon-error">✕</span>
            </div>
            <p class="modal-message">{{ modalMessage }}</p>
            <button class="modal-close" @click="showModal = false">Close</button>
        </div>
    </div>

    <section>
        <Testimonial />
    </section>

</template >

<script setup>
import { ref, reactive } from 'vue'
const loading = ref(false)
import { supabase } from '@/lib/supabase'
import img5 from '/src/assets/image/img5.png'
import Testimonial from '@/components/Testimonial.vue'

//for modal
const showModal = ref(false)
const modalType = ref('success') // 'success' | 'error'
const modalMessage = ref('')

// Form data state
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

// UI state
const currentStep = ref(1)
const isSubmitting = ref(false)
const showSuccess = ref(false)
const errorMessage = ref('')
const fieldErrors = reactive({})
const paymentFileInput = ref(null)

// Clear field errors helper
const clearFieldErrors = () => {
    Object.keys(fieldErrors).forEach(key => {
        fieldErrors[key] = ''
    })
}

// Set field error helper
const setFieldError = (fieldName, message) => {
    fieldErrors[fieldName] = message
}

// Handle file upload
const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        // Validate file size (5MB max)
        if (file.size > 5 * 1024 * 1024) {
            setFieldError('paymentEvidence', 'File size must be less than 5MB')
            errorMessage.value = 'File size must be less than 5MB'
            event.target.value = ''
            formData.paymentEvidence = null
            return
        }
        formData.paymentEvidence = file
        fieldErrors.paymentEvidence = ''
        errorMessage.value = ''
    }
}

// Email validation helper
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// Validate Step 1 fields (only required fields)
const validateStep1 = () => {
    clearFieldErrors()
    errorMessage.value = ''
    let hasErrors = false

    // Course of Interest (required)
    if (!formData.courseInterest) {
        setFieldError('courseInterest', 'Please select a course')
        hasErrors = true
    }

    // Full Name (required)
    if (!formData.fullName?.trim()) {
        setFieldError('fullName', 'Please enter your full name')
        hasErrors = true
    }

    // Email Address (required)
    if (!formData.email?.trim()) {
        setFieldError('email', 'Please enter your email address')
        hasErrors = true
    } else if (!isValidEmail(formData.email)) {
        setFieldError('email', 'Please enter a valid email address')
        hasErrors = true
    }

    // Phone / WhatsApp Number (required)
    if (!formData.phone?.trim()) {
        setFieldError('phone', 'Please enter your phone number')
        hasErrors = true
    }

    // Gender (required)
    if (!formData.gender) {
        setFieldError('gender', 'Please select your gender')
        hasErrors = true
    }

    // Preferred Learning Track (required)
    if (!formData.learningTrack) {
        setFieldError('learningTrack', 'Please select a learning track')
        hasErrors = true
    }

    // Availability (required)
    if (!formData.availability) {
        setFieldError('availability', 'Please select your availability')
        hasErrors = true
    }

    if (hasErrors) {
        errorMessage.value = 'Please fill in all required fields marked with *'
        return false
    }

    return true
}

// Validate Step 2 fields (only required fields)
const validateStep2 = () => {
    clearFieldErrors()
    errorMessage.value = ''
    let hasErrors = false

    // Prior Tech Experience (required)
    if (!formData.techExperience) {
        setFieldError('techExperience', 'Please select an option')
        hasErrors = true
    } else if (formData.techExperience === 'yes' && !formData.techExperienceDetails?.trim()) {
        setFieldError('techExperienceDetails', 'Please describe your tech experience')
        hasErrors = true
    }

    // How did you hear about us (required)
    if (!formData.referralSource) {
        setFieldError('referralSource', 'Please select how you heard about us')
        hasErrors = true
    } else if (formData.referralSource === 'other' && !formData.referralOther?.trim()) {
        setFieldError('referralOther', 'Please specify how you heard about us')
        hasErrors = true
    }

    // Payment Status (required)
    if (!formData.paymentMade) {
        setFieldError('paymentMade', 'Please select payment status')
        hasErrors = true
    } else if (formData.paymentMade === 'yes' && !formData.paymentEvidence) {
        setFieldError('paymentEvidence', 'Please upload payment evidence')
        hasErrors = true
    }

    if (hasErrors) {
        errorMessage.value = 'Please fill in all required fields marked with *'
        return false
    }

    return true
}

// Navigation functions
const formContainer = ref(null)
const nextStep = () => {
    if (validateStep1()) {
        clearFieldErrors()
        errorMessage.value = ''
        currentStep.value = 2
        // window.scrollTo({ top: 0, behavior: 'smooth' })
        if (formContainer.value) {
            formContainer.value.scrollIntoView({ top: 0, behavior: 'smooth', block: 'start' })
        }
    } else {
        // Scroll to first error field
        const firstErrorField = Object.keys(fieldErrors).find(key => fieldErrors[key])
        if (firstErrorField) {
            const fieldElement = document.getElementById(firstErrorField)
            if (fieldElement) {
                fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
                fieldElement.focus()
            }
        }
    }
}
// Go to previous step
const previousStep = () => {
    clearFieldErrors()
    errorMessage.value = ''
    currentStep.value = 1
    if (formContainer.value) {
        formContainer.value.scrollIntoView({ top: 0, behavior: 'smooth', block: 'start' })
    }
    // window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Final form validation (called before submission)
const validateForm = () => {
    errorMessage.value = ''

    // Validate step 1
    if (!validateStep1()) {
        currentStep.value = 1
        return false
    }

    // Validate step 2
    if (!validateStep2()) {
        return false
    }

    return true
}

// Upload payment evidence to Supabase Storage
const uploadPaymentEvidence = async () => {
  if (!formData.paymentEvidence) return null

  const file = formData.paymentEvidence
  const fileName = `receipt-${Date.now()}-${file.name}`

  const { data, error } = await supabase
    .storage
    .from('payments')
    .upload(fileName, file)

  if (error) {
    console.error('Upload failed:', error)
    return null
  }

  return data.path // we store this in the DB
}

// Reset form
const resetForm = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = key === 'paymentEvidence' ? null : ''
  })
}


//Submit form to Supabase
const submitForm = async () => {
  try {
    loading.value = true

    let paymentUrl = null
    if (formData.paymentMade === 'yes') {
      paymentUrl = await uploadPaymentEvidence()
    }

    const payload = {
      ...formData,
      paymentEvidence: paymentUrl
    }

    // Remove raw file from payload
    delete payload.paymentEvidenceFile

    const { error } = await supabase
      .from('cohort1_reg_tb')
      .insert([payload])

    if (error) throw error

    modalType.value = 'success'
    modalMessage.value = 'Registration submitted successfully! 🎉'
    showModal.value = true

    resetForm()

  } catch (err) {
    console.log('SUPABASE ERROR:', err)

    modalType.value = 'error'
    modalMessage.value = 'Submission failed. Please try again.'
    showModal.value = true
    
  } finally {
    loading.value = false
  }
}


// ================testimonial script=============

  
</script>

<style scoped>

    .enrollment{
        margin-top: 91px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 12px;
        background: radial-gradient(circle at 10% 20%,  #0256ff27 10%, transparent 30%),
        radial-gradient(circle at 100% 30%,  #019c9a27 10%, transparent 30%);
    }


    .enrollment-inner{
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: 32px;
        padding: 36px var(--container-padding-x);
        align-items: center;
        text-align: center;
    }
    .enrollment-inner h1{
        font-size: 44px;
        line-height: 1.1;
        color: var(--text);
        font-weight: 700;
        letter-spacing: -0.02em;
        max-width: 54ch;
        margin-left: auto;
        margin-right: auto;
    }
    .lead{
        opacity: 0.92;
        font-size: clamp(0.95rem, 1.6vw, 1rem);
       
        margin: 0.6rem auto 0 auto;
        line-height: 1.4;
        font-weight: normal;
    }
    .entrollment-content{
        animation: slideUpFade 520ms cubic-bezier(.2,.9,.2,1) both;
        display: flex;
        flex-direction: column;
        /* gap: 8px; */
    }
    .key_highllight{
        display: flex;
        gap: 12px;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 16px;
    }
    .highlight{
        color: #fff;
        padding: 10px 12px;
        font-size: 0.875rem;
        border-radius: 20px;
        font-weight: 500;
    }
    .highlight:nth-child(1){
        background-color: #af02ff13;
        color: #af02ff; 
    }
    .highlight:nth-child(2){
        background-color: #ff5f0213;
        color: #ff5f02; 
    }
    .highlight:nth-child(3){
        background-color: #02ffab13;
        color: #019c9a; 
    }

    @media (min-width: 1024px){
        .enrollment-inner h1{
            max-width: 80%;
        }
        .lead{
            max-width: 50%;
        }
    }
    @media (max-width: 768px){
        .enrollment{
            margin-top: 70px;
            padding: 40px 16px;
        }
        .enrollment-content{
            gap: 16px;
        }
        .enrollment-inner h1{
            max-width: 100%;
            font-size: 32px;
        }
        .lead{
            max-width: 100%;
        }
        
    }
    @media (max-width: 426px){
        .enrollment-inner h1{
            
            line-height: 1.2;
        }
        .enrollment-inner{
            padding: 28px 0px;
        }
        .lead{
            font-size: 16px;
        }
        
    }
    @media (max-width: 375.9px){

        .key_highllight{

            gap: 4px;

        }
    
    }
    .enrollment-inner span{
        line-height: 1.03;
        font-weight: 500;
        color: #0257FF;
        letter-spacing: -0.02em;
    }
    .btn{
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 16px;
        border-radius: 8px;
        text-decoration: none;
        cursor: pointer;
        transition: transform 160ms cubic-bezier(.2,.9,.2,1), box-shadow 160ms ease, opacity 160ms ease;
    }
    .btn--primary{
        background-color: var(--primary);
        color: var(--light);
        border: 0;
        padding: 12px 44px 12px 44px;
        box-shadow: 0 10px 30px rgba(2,87,255,0.12);
    }

    .btn--primary:hover{ 
        transform: translateY(-3px); 
        box-shadow: 0 16px 40px rgba(2,87,255,0.14); 
    }
    .btn .bi{ 
        margin-left: 8px; 
        transition: transform 160ms ease;
         display:inline-block; 
        }
    .btn--primary:hover .bi{ 
        transform: translateX(4px); 
    }
    /* ----------------------------video section----------------------------- */
    .video{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 16px;
        gap: 16px;
    }
  
    video h1{
        text-align: center;
        font-size: 32px;
        line-height: 1.1;
        color: var(--text);
        letter-spacing: -0.02em;
        margin-bottom: 24px;
    }
    .video_inner{
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }
    iframe{
        border-radius: 16px;

    }
    @media (max-width: 426px){
        .video_inner iframe{
            height: 250px;
        }
        .video{
         margin-top: 20pxpx;
        }
        .video h1{
            font-size: 24px;
        }
    }

/* ------------------------------cohort section----------------------------- */ 
    .cohort{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 40px 16px;
    }
    .cohort-inner{
        margin: 0 auto;
        width: 100%;
        padding: 24px;
        background-color: var(--light);
        border-radius: 16px;
    }
    .visual{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;
    }
    img{
        width: 70%;
        height: auto;
        border-radius: 12px;
        margin-top: 16px;
        object-fit: cover;box-sizing: border-box;
    }

    .cohort-content{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        padding: 36px var(--container-padding-x);
        align-items: center;
        justify-content: center;
    }
    .cohort-content h1{
        font-size: 36px;
        line-height: 1.1;
        color: #28a745;
        font-weight: 700;
        letter-spacing: -0.02em;
        max-width: 54ch;
        margin-left: auto;
        margin-right: auto;
    }
    .cohort-content h2{
        font-size: 28px;
        line-height: 1.2;
        color: var(--text);
        font-weight: 600;
        margin-bottom: 16px;
    }
    .cohort-content p{
        opacity: 0.92;
        font-size: clamp(0.95rem, 1.6vw, 1rem);
        line-height: 1.4;
        font-weight: normal;
    }
    .whyjoin .list{
        display: flex;
        flex-direction: column;
        margin-top: 16px;
    }
    .whyjoin .items{
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .whyjoin .items p, .items h6{
        margin: 0;
    }
    .whyjoin .items i{
        font-size: 20px;
        color: #28a745;
    }
  
    @media (max-width: 768px){
        .cohort{
            /* margin-top: 70px; */
            padding: 40px 16px;
        }
        .cohort-content{
            grid-template-columns: 1fr;
            gap: 24px;
        }        
    }
    


    /* --------------Registration form--------------------- */
    /* Container */
    
    .form_cont{
        margin: auto;
        max-width: 900px;
        padding: 32px 24px;
        /* background-color: #0257FF04; */
        background-color: var(--light);
        border-radius: 14px;
        color: var(--primary);
        border: 1px solid #0257FF23;
    }

    /* Step Indicator */
    .step-indicator{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 32px;
        padding: 0 20px;
    }

    .step-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .step-number{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #e0e0e0;
        color: #999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        border: 2px solid #e0e0e0;
    }

    .step-item.active .step-number{
        background-color: var(--primary);
        color: #fff;
        border-color: var(--primary);
        box-shadow: 0 0 0 4px rgba(2, 87, 255, 0.1);
    }

    .step-item.completed .step-number{
        background-color: #28a745;
        color: #fff;
        border-color: #28a745;
    }

    .step-label{
        font-size: 0.85rem;
        color: #666;
        font-weight: 500;
        text-align: center;
        max-width: 120px;
    }

    .step-item.active .step-label{
        color: var(--primary);
        font-weight: 600;
    }

    .step-item.completed .step-label{
        color: #28a745;
    }

    .step-connector{
        width: 80px;
        height: 2px;
        background-color: #e0e0e0;
        margin: 0 10px;
        transition: background-color 0.3s ease;
    }

    .step-connector.completed{
        background-color: #28a745;
    }

    .form-step{
        min-height: 400px;
    }
   
    form .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 24px 0;
    }
    form .header h2{
        text-align: center;
        /* font-size: 24px; */
        line-height: 1.1;
        color: var(--primary);
        font-weight: 700;
        letter-spacing: -0.02em;
        margin-bottom: 0px;
    }
    form .header .sub-head{
        color: var(--text);
        opacity: 0.8;
        font-size: 0.95rem;
    }
 
    form label{
        color: var(--text) !important;
        font-weight: 500;
        display: block;
        margin-bottom: 8px;
        font-size: 0.90rem;
    }
    
    .required{
        color: #dc3545;
        font-weight: 600;
    }

    /* Form Layout */
    .form_divide{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 24px;
    }

    .form-group{
        display: flex;
        flex-direction: column;
    }

    .form-group--full{
        grid-column: 1 / -1;
    }

    .form-group--nested{
        margin-top: 16px;
        padding-left: 16px;
        border-left: 2px solid var(--primary-50);
    }

    /* Form Controls */
    .form-control{
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #ccd7e0;
        border-radius: 8px;
        font-size: 1rem;
        background: #fff;
        color: var(--text);
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        font-family: inherit;
    }

    .form-control:focus{
        outline: none;
        border-color: var(--primary);
        box-shadow: 0 0 0 3px rgba(2, 87, 255, 0.1);
    }

    .form-control--error{
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
    }

    .form-control--error:focus{
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.2);
    }

    .field-error{
        display: block;
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 6px;
        font-weight: 500;
    }

    .form-control--file{
        padding: 8px;
        cursor: pointer;
    }

    .form-control--file::-webkit-file-upload-button{
        padding: 8px 16px;
        background-color: var(--primary-50);
        color: var(--primary);
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        margin-right: 12px;
        transition: background-color 0.2s ease;
    }

    .form-control--file::-webkit-file-upload-button:hover{
        background-color: var(--primary);
        color: #fff;
    }

    textarea.form-control{
        resize: vertical;
        min-height: 100px;
        font-family: inherit;
    }

    select.form-control{
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23333' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 16px center;
        padding-right: 40px;
    }

    /* Form Messages */
    .form-message{
        padding: 14px 16px;
        border-radius: 8px;
        margin-bottom: 24px;
        font-size: 0.95rem;
        font-weight: 500;
    }

    .form-message--success{
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
    }

    .form-message--error{
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
    }

    /* Form Help Text */
    .form-help{
        margin-top: 6px;
        font-size: 0.85rem;
        color: var(--small--text);
        opacity: 0.8;
    }

    /* Navigation Buttons */
    .form-navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 32px;
        padding-top: 24px;
        border-top: 1px solid #0257FF23;
        gap: 16px;
    }

    .form-navigation .btn{
        min-width: 140px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .form-navigation .btn:disabled{
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
    }

    .btn--secondary{
        background-color: #6c757d;
        color: #fff;
        border: 0;
        padding: 12px 24px;
        box-shadow: 0 4px 12px rgba(108, 117, 125, 0.2);
    }

    .btn--secondary:hover{
        background-color: #5a6268;
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(108, 117, 125, 0.3);
    }

    /* Responsive Design */
    @media (max-width: 768px){
        .form_cont{
            padding: 24px 16px;
            max-width: 100%;
        }

        .form_divide{
            grid-template-columns: 1fr;
            gap: 16px;
        }

        .form-group--full{
            grid-column: 1;
        }

        form .header h3{
            font-size: 22px;
        }

        .step-indicator{
            padding: 0;
        }

        .step-connector{
            width: 40px;
            margin: 0 5px;
        }

        .step-label{
            font-size: 0.75rem;
            max-width: 80px;
        }

        .step-number{
            width: 32px;
            height: 32px;
            font-size: 0.9rem;
        }

        .form-navigation{
            flex-direction: column-reverse;
        }

        .form-navigation .btn{
            width: 100%;
            min-width: auto;
        }
    }

    @media (max-width: 426px){
        .form_cont{
            padding: 20px 12px;
        }

        .form-group--nested{
            padding-left: 12px;
        }

        .form-control{
            padding: 10px 14px;
            font-size: 0.95rem;
        }
    }
   

    /* ==========bank account details======== */ 
    .bankdetails{
        background-color: #01ffb73f;
        border: 1px solid #0257FF23;
        border-radius: 12px;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .bankinfo p{
        margin: 0;
        font-size: 16px;
        color: var(--text);
    }
    input::placeholder {
        color: #999;
    }

   /* ==========modal styles======== */ 

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background-color: #fff;
        padding: 2rem;
        border-radius: 12px;
        width: 90%;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 4px 16px rgba(0,0,0,0.25);
    }

    .modal-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .icon-success {
        color: green;
    }

    .icon-error {
        color: red;
    }

    .modal-message {
        margin-bottom: 1.5rem;
        font-size: 1.1rem;
    }

    .modal-close {
        padding: 0.5rem 1.5rem;
        background-color: #007BFF;
        color: #fff;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
    }

    .modal-close:hover {
        background-color: #0056b3;
    }


   

</style>