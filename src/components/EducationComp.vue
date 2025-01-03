<script setup>
const data = defineModel('data')

const emit = defineEmits(['next', 'prev'])

const handleSubmit = () => {
  emit('next')
}

const handlePrev = () => {
  emit('prev')
}

const addStudy = () => {
  data.value.education.push({ name: '', title: '', grade: '', location: '', from: '', to: '' })
}
</script>

<template>
  <form class="headers" @submit.prevent="handleSubmit">
    <h1 class="eheader">Education</h1>
    <h3 class="esubhead">Highlight Your Studies.</h3>
    <div v-for="(study, index) in data.education" :key="index" class="studies">
      <legend class="studytext">Study {{ index + 1 }}</legend>
      <div class="simp">
        <div class="box" style="margin-bottom: 1rem">
          <label :for="study.name + { index }" class="label">Name of Institution : </label>
          <input
            type="text"
            v-bind:id="study.name + { index }"
            v-model="study.name"
            class="input"
            placeholder=" (type here to make it appear)"
          />
        </div>
        <div class="box">
          <label :for="study.title + { index }" class="label">Title Of Study</label>
          <input
            type="text"
            v-bind:id="study.title + { index }"
            v-model="study.title"
            class="input"
          />
        </div>
        <div class="box">
          <label :for="study.grade + { index }" class="label">Percentage/CGPA</label>
          <input
            type="number"
            v-bind:id="study.grade + { index }"
            v-model="study.grade"
            class="input"
          />
        </div>
        <div class="box">
          <label :for="study.location + { index }" class="label">Location</label>
          <input
            type="text"
            v-bind:id="study.location + { index }"
            v-model="study.location"
            class="input"
          />
        </div>

        <div class="box">
          <div class="date">
            <label :for="study.from + { index }" class="label">From : </label>
            <input
              type="text"
              v-bind:id="study.from + { index }"
              v-model="study.from"
              class="input dinput"
            />
          </div>
          <div class="date">
            <label :for="study.to + { index }" class="label">To : </label>
            <input
              type="text"
              v-bind:id="study.to + { index }"
              v-model="study.to"
              class="input dinput"
            />
          </div>
        </div>
      </div>
    </div>
    <div><button class="addstudy" type="button" @click.prevent="addStudy">+</button></div>

    <div class="navbuttons1">
      <button @click.prevent="handlePrev" type="button" class="navbutton">Back</button>
      <button type="submit" class="navbutton">Next</button>
    </div>
  </form>
</template>

<style scoped>
.navbutton {
  margin: 1.5rem 0;
  padding: 0.8rem 2.5rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  color: #ffffff;

  background: #000000;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;
}
.navbuttons1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38rem;
}
.addstudy {
  margin: 2.7rem 0.3rem;
  background-color: black;
  border-radius: 10rem;
  text-align: center;

  width: 3.7rem;
  height: 3.7rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.8rem;

  color: #ffffff;
  border: none;
}
.date {
  display: flex;
  justify-content: space-between;
}
.input {
  outline: none;
  border: none;
  width: 15rem;
}
.dinput {
  width: 8rem;
}
.label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;

  color: #000000;
}

.headers {
  margin-top: 0;
  padding: 2.4rem 10rem 0 3.5rem;
}

.eheader {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
}

.esubhead {
  margin-top: 0.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #000000;
}

.studies {
  padding: 1rem;
}

.studytext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.2rem;

  color: #000000;
}
.simp {
  padding: 0 2rem;
  display: grid;
  grid-template-rows: 1fr 0.7fr 0.7fr;
  grid-template-columns: 1.2fr 1.2fr;
  margin-top: 0.5rem;
  gap: 4rem;
  row-gap: 1rem;
}

.box {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
