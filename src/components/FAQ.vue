<template>
  <section class="faq container" id="faq">
    <!-- Section Header -->
    <div class="section-header" v-scroll-reveal>
      <span class="badge-pill badge-pill--primary">
        <i class="bi bi-patch-question-fill"></i>
        Common Questions
      </span>
      <h2>Frequently Asked Questions</h2>
      <p>
        Got questions about Corex Tek-Academy? We have answers. If you don't find what you need, contact admissions.
      </p>
    </div>

    <!-- Accordion List -->
    <div class="faq-list" v-scroll-reveal>
      <div 
        class="faq-item glass-card"
        v-for="(item, index) in faqs" 
        :key="index"
        :class="{ 'faq-item--active': activeIndex === index }"
      >
        <button 
          class="faq-trigger" 
          @click="toggleFAQ(index)"
          :aria-expanded="String(activeIndex === index)"
          :aria-controls="'faq-content-' + index"
        >
          <span>{{ item.question }}</span>
          <div class="faq-icon-wrap" aria-hidden="true">
            <i class="bi bi-chevron-down"></i>
          </div>
        </button>

        <div 
          :id="'faq-content-' + index"
          class="faq-content" 
          role="region"
          :style="{ maxHeight: activeIndex === index ? '240px' : '0px' }"
        >
          <div class="faq-inner-text">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const faqs = [
  {
    question: 'Who is Corex Tek-Academy designed for?',
    answer: 'Our programs are custom-tailored for absolute beginners, self-taught coders, and career-changers. No prior programming background is required. We take you block-by-block through fundamentals to production readiness.',
  },
  {
    question: 'Are the training classes virtual or in-person?',
    answer: 'Cohort 1 is fully online with interactive remote sessions, recorded class playbacks, shared coding sandboxes, and continuous Discord mentor channels, allowing flexible study around your schedule.',
  },
  {
    question: 'How does the mentorship matching work?',
    answer: 'Every registered student gets paired with an industry mentor for weekly 1-on-1 check-ins, code reviews, resume profiling, and personal career launch strategy sessions.',
  },
  {
    question: 'Is there a certificate of completion upon graduation?',
    answer: 'Yes! Graduates receive an industry-recognized certificate of completion displaying their skills, direct links to verified projects, and credentials ready for LinkedIn.',
  },
  {
    question: 'What are the tuition payment plans?',
    answer: 'To make education accessible, we offer flexible payment structures including full payment discounts, installment splits (up to 3 parts), and student support packages.',
  },
]

function toggleFAQ(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>

<style scoped>
.faq {
  padding: var(--section-padding-y) var(--container-padding-x);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-radius: var(--radius-md);
  padding: 0;
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: all 0.35s var(--ease-out-expo);
}

.faq-item--active {
  border-color: var(--primary);
  box-shadow: var(--shadow-md);
}

.faq-trigger {
  width: 100%;
  padding: var(--space-5) var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  transition: color 0.3s ease;
}

.faq-trigger:hover {
  color: var(--primary-text);
}

.faq-icon-wrap {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-background-soft);
  display: grid;
  place-items: center;
  color: var(--text-secondary);
  transition: transform 0.35s var(--ease-out-expo);
}

.faq-item--active .faq-icon-wrap {
  transform: rotate(180deg);
  background-color: var(--primary-light);
  color: var(--primary-text);
}

/* Slide content transition */
.faq-content {
  overflow: hidden;
  transition: max-height 0.35s var(--ease-out-expo);
}

.faq-inner-text {
  padding: 0 var(--space-6) var(--space-5) var(--space-6);
  border-top: 1px solid transparent;
}

.faq-inner-text p {
  font-size: clamp(0.875rem, 2.5vw, 0.95rem);
  line-height: 1.65;
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 576px) {
  .faq-trigger {
    padding: var(--space-4) var(--space-4);
    font-size: 0.925rem;
    gap: var(--space-3);
  }
  .faq-inner-text {
    padding: 0 var(--space-4) var(--space-4) var(--space-4);
  }
  .faq-trigger span {
    max-width: 85%;
    line-height: 1.4;
  }
  .faq-icon-wrap {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
  }
}

@media (max-width: 380px) {
  .faq-trigger {
    padding: var(--space-3) var(--space-3);
    font-size: 0.85rem;
  }
  .faq-trigger span {
    max-width: 80%;
  }
}

</style>
