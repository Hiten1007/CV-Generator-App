<script setup>



import CustomSectionComp from './CustomSectionComp.vue';

</script>

<template>
  <div>
    <img
      src="../assets/image copy.png"
      height="30rem"
      width="30rem"
      style="margin: 0.25rem 0.5rem"
    />
    <hr />
    <div>
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
    </div>

    <div class="formArea">
      <CustomSectionComp />
    </div>
  </div>
</template>

<style scoped>
.formArea {
  margin-left: 8rem;

  width: 60%;
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
  position: absolute;
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
