<script setup>
const data = defineModel('data')

const emit = defineEmits(['next', 'prev'])

const handleSubmit = () => {
  emit('next')
}

const handlePrev = () => {
  emit('prev')
}
const addPart = (section) => {
  section.parts.push({ title: '', point: '' })
}

const addSection = () => {
  data.value.custom.push({
    name: `Section ${data.value.custom.length + 1}`,
    parts: [{ title: '', point: '' }],
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="headers">
    <h1 class="custommainh">Custom Section</h1>
    <h3 class="customsubh">Add a Personal Touch.</h3>
    <div v-for="(section, index) in data.custom" :key="`section_${index}`" class="sect">
      <div>
        <input type="text" v-model="section.name" class="secttext" />
      </div>
      <div>
        <div v-for="(part, i) in section.parts" :key="`section_${index}_part_${i}`" class="pimp">
          <div class="pbox">
            <label :for="`part_${index}_${i}_title`" class="label">Title</label>
            <input
              type="text"
              :id="`part_${index}_${i}_title`"
              v-model="part.title"
              class="input"
              style="width: 15rem; height: 1.5rem"
              placeholder=" (Type here to make it appear)"
            />
          </div>
          <div class="pbox">
            <label :for="`part_${index}_${i}_point`" class="label">Description</label>
            <textarea
              :id="`part_${index}_${i}_point`"
              v-model="part.point"
              class="input"
              style="height: 5rem"
            ></textarea>
          </div>
        </div>
      </div>
      <button type="button" @click="addPart(section)" class="addpart">
        Add <span class="addsign">+</span>
      </button>
    </div>
    <div><button class="addcustom" type="button" @click.prevent="addSection">+</button></div>

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
.addcustom {
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

.addsign {
  font-size: 1.2rem;
  margin-left: 0.5rem;
}

.addpart {
  margin: 2rem 2rem;

  padding: 0.5rem 1.5rem;

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
.input {
  border: none;
  outline: none;
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
.pbox {
  display: flex;
  flex-direction: column;
}

.pimp {
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 4rem;
  row-gap: 1rem;
}
.sect {
  padding: 1rem;
}

.secttext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 2.2rem;

  color: #000000;
  background-color: #d9d9d9;
  border: none;
  outline: none;
}
.headers {
  margin-top: 0;
  padding: 2.4rem 10rem 0 3.5rem;
}

.custommainh {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
}

.customsubh {
  margin-top: 0.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #000000;
}
</style>
