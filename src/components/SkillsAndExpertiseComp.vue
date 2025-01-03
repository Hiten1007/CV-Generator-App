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
  <form @submit.prevent="handleSubmit">
    <h1>Skills and Expertise</h1>
    <h3>Showcase Your Superpowers.</h3>
    <li v-for="(s, index) in data.skills" :key="index">
      <legend>Field {{ index + 1 }}</legend>
      <div>
        <div>
          <label :for="s.category + { index }">Category</label>
          <input type="text" v-bind:id="s.category + { index }" v-model="s.category" />
        </div>
        <div>
          <label :for="s.skill + { index }">Skills</label>
          <input type="text" v-bind:id="s.skill + { index }" v-model="s.skill" />
        </div>
      </div>
    </li>
    <button class="addfield" type="button" @click.prevent="addField">+</button>

    <button type="button" @click.prevent="handlePrev">Back</button>
    <button type="submit">Next</button>
  </form>
</template>
