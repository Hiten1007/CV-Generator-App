<script setup>
const data = defineModel('data')
const emit = defineEmits(['next', 'prev'])

const handleSubmit = () => {
  emit('next')
}

const handlePrev = () => {
  emit('prev')
}

const addField = () => {
  data.value.skills.push({ category: '', skill: '' })
}
</script>
<template>
  <form @submit.prevent="handleSubmit" class="headers">
    <h1 class="skillmain">Skills and Expertise</h1>
    <h3 class="skillsub">Showcase Your Superpowers.</h3>
    <div v-for="(s, index) in data.skills" :key="index" class="skills">
      <legend class="skilltext">Field {{ index + 1 }}</legend>
      <div class="skillimp">
        <div class="field">
          <label :for="s.category + { index }" class="label">Category</label>
          <input
            type="text"
            v-bind:id="s.category + { index }"
            v-model="s.category"
            class="input"
            style="width: 15rem; height: 1.5rem"
            placeholder=" (Type here to make it appear)"
          />
        </div>
        <div class="field">
          <label :for="s.skill + { index }" class="label">Skills</label>
          <textarea
            type="text"
            v-bind:id="s.skill + { index }"
            v-model="s.skill"
            class="input"
            style="height: 3.5rem"
          ></textarea>
        </div>
      </div>
    </div>
    <div><button class="addfield" type="button" @click.prevent="addField">+</button></div>

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
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.navbutton:hover {
  background-color: white;
  color: black;
}
.navbuttons1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38rem;
}
.addfield {
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
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.addfield:hover {
  background-color: white;
  color: black;
}

.label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;

  color: #000000;
}

.input {
  border: none;
  outline: none;
  margin-top: 0.5rem;
}
.headers {
  margin-top: 0;
  padding: 2.4rem 10rem 0 3.5rem;
}

.skillmain {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
}

.skillsub {
  margin-top: 0.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #000000;
}

.skills {
  padding: 1rem;
}

.skilltext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.2rem;

  color: #000000;
}

.skillimp {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 4rem;
  row-gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
}
</style>
