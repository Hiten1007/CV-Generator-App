<script setup>
const data = defineModel('data')

const emit = defineEmits(['next', 'prev'])

const handleSubmit = () => {
  emit('next')
}

const handlePrev = () => {
  emit('prev')
}

const addExp = () => {
  data.value.experience.push({
    name: '',
    position: '',
    location: '',
    from: '',
    to: '',
    description: '',
  })
}
</script>
<template>
  <form class="headers" @submit.prevent="handleSubmit">
    <h1 class="exmainhead">Experience</h1>
    <h3 class="exsubhead">Your Professional Journey.</h3>
    <div v-for="(exp, index) in data.experience" :key="index" class="experiences">
      <legend class="exptext">Experience {{ index + 1 }}</legend>
      <div class="eimp">
        <div>
          <label :for="exp.name + { index }" class="label">Name Of Organization</label>
          <input
            type="text"
            v-bind:id="exp.name + { index }"
            v-model="exp.name"
            class="input"
            placeholder=" (type here to make it appear)"
          />
        </div>
        <div>
          <label :for="exp.position + { index }" class="label">Position</label>
          <input
            type="text"
            v-bind:id="exp.position + { index }"
            v-model="exp.position"
            class="input"
          />
        </div>
        <div style="padding-top: 0.5rem">
          <label :for="exp.location + { index }" class="label">Location</label>
          <input
            type="text"
            v-bind:id="exp.location + { index }"
            v-model="exp.location"
            class="input"
          />
        </div>
        <div class="dates">
          <div class="date">
            <label :for="exp.from + { index }" class="label">From :</label>
            <input
              type="text"
              v-bind:id="exp.from + { index }"
              v-model="exp.from"
              class="input dinput"
            />
          </div>
          <div class="date">
            <label :for="exp.to + { index }" class="label">To : </label>
            <input
              type="text"
              v-bind:id="exp.to + { index }"
              v-model="exp.to"
              class="input dinput"
            />
          </div>
        </div>
      </div>
      <div class="expdescript">
        <label :for="exp.description + { index }" class="label">Description</label>
        <textarea
          v-bind:id="exp.description + { index }"
          v-model="exp.description"
          class="input"
          style="height: 6rem; width: 32rem"
        >
        </textarea>
      </div>
    </div>
    <div><button class="addexp" type="button" @click.prevent="addExp">+</button></div>

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
.addexp {
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

.expdescript {
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 0 2rem;
}
.dates {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.date {
  display: flex;
  justify-content: space-between;
}

.input {
  border: none;
  outline: none;
  height: 1rem;
  width: 14rem;
}

.dinput {
  width: 8rem;
  margin-right: 2rem;
}
.headers {
  margin-top: 0;
  padding: 2.4rem 10rem 0 3.5rem;
}
.exmainhead {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
}

.exsubhead {
  margin-top: 0.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #000000;
}

.experiences {
  padding: 1rem;
}

.exptext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.2rem;

  color: #000000;
}

.eimp {
  padding: 0 2rem;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1.2fr 1fr;
  margin-top: 0.5rem;
  gap: 4rem;
  row-gap: 1rem;
}

.label {
  padding-bottom: 0.5rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.2rem;

  color: #000000;
}
</style>
