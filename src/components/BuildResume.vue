<script setup>
import { ref } from 'vue'
import Step1 from './PersonalInformation.vue'
import Step2 from './EducationComp.vue'
import Step3 from './ExperienceComp.vue'
import Step4 from './SkillsAndExpertiseComp.vue'
import Step5 from './CustomSectionComp.vue'
import LivePreview from './LivePreview.vue'

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
  custom: [{ name: 'Custom Section 1', parts: [{ title: '', point: '' }] }],
})

const next = () => {
  if (currentStep.value < 5) {
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
      />
      <h1 class="previewheader" style="margin: 0; padding: 0">Live Preview</h1>
    </div>
    <hr />
    <div class="content">
      <div class="bar">
        <div class="steps">
          <div class="fullstep">
            <div class="step">1</div>
            <h2 hidden class="stepText">Personal Information</h2>
          </div>
          <hr class="line" />
        </div>
        <div class="steps">
          <div class="fullstep">
            <div class="step">2</div>
            <h2 hidden class="stepText">Education</h2>
          </div>
          <hr class="line" />
        </div>
        <div class="steps">
          <div class="fullstep">
            <div class="step">3</div>
            <h2 hidden class="stepText">Experience</h2>
          </div>
          <hr class="line" />
        </div>
        <div class="steps">
          <div class="fullstep">
            <div class="step">4</div>
            <h2 hidden class="stepText">Skills</h2>
          </div>
          <hr class="line" />
        </div>
        <div class="steps">
          <div class="fullstep">
            <div class="step">5</div>
            <h2 hidden class="stepText">Custom Section</h2>
          </div>
          <hr class="line" />
        </div>
        <div class="steps">
          <div class="fullstep">
            <div class="step">6</div>
            <h2 hidden class="stepText">Finalize</h2>
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
            }[currentStep]
          "
          v-model:data="resumeData"
          @next="next"
          @prev="prev"
        />
      </div>
      <div class="previewArea">
        <div>
          <LivePreview :data="resumeData" />
        </div>
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
  width: 35.75%;
}
.formArea {
  width: 55%;
  height: 100vh;

  background: #d9d9d9;
}
.fullstep {
  display: flex;
}

.line {
  margin: 1rem 0 0 1rem;
  transform: rotate(90deg);
  width: 2rem;
}
.bar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  background-color: black;
  height: 100vh;
  width: 8rem;
  gap: 1rem;
}

.step {
  background-color: white;
  border-radius: 4rem;
  text-align: center;
  padding-top: 1.5rem;

  width: 4rem;
  height: 4rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.2rem;

  color: #000000;
}

.stepText {
  /* Personal Information */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.1rem;
  line-height: 2rem;

  color: #ffffff;
  padding-top: 1.1rem;
  padding-left: 1.8rem;
}

.stephovered {
  color: white;
  background-color: black;
  border-color: white;
  border-style: solid;
  padding-top: 1.3rem;
}

.barhovered {
  width: 22rem;
}
</style>
