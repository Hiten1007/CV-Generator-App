<script setup>
import { ref } from 'vue'
import Step1 from './PersonalInformation.vue'
import Step2 from './EducationComp.vue'
import Step3 from './ExperienceComp.vue'
import Step4 from './SkillsAndExpertiseComp.vue'
import Step5 from './CustomSectionComp.vue'
import LivePreview from './LivePreview.vue'
import Step6 from './FinalComp.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const goToHome = () => {
  router.push('/')
}

let currentStep = ref(1)

const resumeData = ref({
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    attributes: '',
    additionalLinks: [
      { title: 'LinkedIn', link: '' },
      { title: 'Github', link: '' },
    ],
  },
  education: [{ name: '', title: '', grade: '', location: '', from: '', to: '' }],
  experience: [{ name: '', position: '', location: '', from: '', to: '', description: '' }],
  skills: [{ category: '', skill: '' }],
  custom: [{ name: 'Section 1', parts: [{ title: '', point: '' }] }],
})

const next = () => {
  if (currentStep.value < 6) {
    currentStep.value++
  }
}

const prev = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}
</script>

<template>
  <div>
    <div style="display: flex; justify-content: space-between; width: 90%">
      <img
        src="../assets/image copy.png"
        height="30rem"
        width="30rem"
        style="margin: 0.25rem 0.5rem"
        @click="goToHome"
      />
      <h1 class="previewheader" style="margin: 0; padding: 0">Live Preview</h1>
    </div>
    <hr />
    <div class="content">
      <div class="bar">
        <div class="steps">
          <div class="fullstep">
            <div class="step">1</div>
            <h2 class="stepText">Personal Information</h2>
          </div>
        </div>
        <hr class="line" />
        <div class="steps">
          <div class="fullstep">
            <div class="step">2</div>
            <h2 class="stepText">Education</h2>
          </div>
        </div>
        <hr class="line" />
        <div class="steps">
          <div class="fullstep">
            <div class="step">3</div>
            <h2 class="stepText">Experience</h2>
          </div>
        </div>
        <hr class="line" />
        <div class="steps">
          <div class="fullstep">
            <div class="step">4</div>
            <h2 class="stepText">Skills</h2>
          </div>
        </div>
        <hr class="line" />
        <div class="steps">
          <div class="fullstep">
            <div class="step">5</div>
            <h2 class="stepText">Custom Section</h2>
          </div>
        </div>
        <hr class="line" />
        <div class="steps">
          <div class="fullstep">
            <div class="step">6</div>
            <h2 class="stepText">Finalize</h2>
          </div>
        </div>
      </div>

      <div class="formArea">
        <component
          :is="
            {
              1: Step1,
              2: Step2,
              3: Step3,
              4: Step4,
              5: Step5,
              6: Step6,
            }[currentStep]
          "
          v-model:data="resumeData"
          @next="next"
          @prev="prev"
        />
      </div>
      <div class="previewArea" id="cv-preview">
        <LivePreview :data="resumeData" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.previewheader {
  /* Live Preview */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.5rem;

  color: #79747e;
}
.content {
  display: flex;
  gap: 0px;
}
.previewArea {
  width: 38%;
  min-height: 100vh;
  padding: 2rem;
}
.formArea {
  width: 53%;
  min-height: 100vh;

  background: #d9d9d9;
}
.bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  background-color: black;
  min-height: 100vh;
  width: 8rem; /* Initial width */
  gap: 1rem;
  position: relative; /* Allow overlap */
  transition: width 0.4s ease; /* Smooth expand */
  overflow: hidden; /* Hide content during collapse */
}

.bar:hover {
  width: 35rem; /* Expanded width */
}

.steps {
  display: flex;
  align-items: center;
}

.fullstep {
  display: flex;
  align-items: center;
}

.line {
  margin: 0 0 0 1rem;
  transform: rotate(90deg);
  width: 2rem;
}

.step {
  background-color: white;
  border-radius: 4rem;
  text-align: center;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
  color: #000000;
  transition:
    background-color 0.4s ease,
    color 0.4s ease; /* Smooth color transition */
}

.stepText {
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1.1rem;
  line-height: 2rem;
  color: #ffffff;
  margin-left: 1.5rem;
  max-width: 0; /* Hidden initially */
  overflow: hidden;
  opacity: 0; /* Fully invisible */
  white-space: nowrap; /* Prevent wrapping */
  transition:
    max-width 0.4s ease,
    opacity 0.4s ease; /* Smooth reveal */
}

.bar:hover .stepText {
  max-width: 15rem; /* Adjust to fit content */
  opacity: 1; /* Fade in */
}

.bar:hover .step {
  background-color: black;
  color: white;
  border: 2px solid white; /* Optional for hover effect */
}
</style>
