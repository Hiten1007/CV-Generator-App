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
  <form @submit.prevent="handleSubmit">
    <h1>Experience</h1>
    <h3>Your Professional Journey.</h3>
    <li v-for="(exp, index) in data.experience" :key="index">
      <legend>Experience {{ index + 1 }}</legend>
      <div>
        <div>
          <label :for="exp.name + { index }">Name Of Organization</label>
          <input type="text" v-bind:id="exp.name + { index }" v-model="exp.name" />
        </div>
        <div>
          <label :for="exp.position + { index }">Position</label>
          <input type="text" v-bind:id="exp.position + { index }" v-model="exp.position" />
        </div>
        <div>
          <label :for="exp.location + { index }">Location</label>
          <input type="text" v-bind:id="exp.location + { index }" v-model="exp.location" />
        </div>
        <div>
          <div>
            <label :for="exp.from + { index }">From :</label>
            <input type="text" v-bind:id="exp.from + { index }" v-model="exp.from" />
          </div>
          <div>
            <label :for="exp.to + { index }">To : </label>
            <input type="text" v-bind:id="exp.to + { index }" v-model="exp.to" />
          </div>
        </div>
      </div>
      <label :for="exp.description + { index }">Description</label>
      <textarea v-bind:id="exp.description + { index }" v-model="exp.description"> </textarea>
    </li>
    <button class="addexp" type="button" @click.prevent="addExp">+</button>

    <button type="button" @click.prevent="handlePrev">Back</button>
    <button type="submit">Next</button>
  </form>
</template>
