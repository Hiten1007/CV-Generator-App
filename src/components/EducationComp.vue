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
  <form @submit.prevent="handleSubmit">
    <h1>Education</h1>
    <h3>Highlight Your Studies.</h3>
    <ul v-for="(study, index) in data.education" :key="index">
      <legend>Study {{ index + 1 }}</legend>
      <div>
        <div>
          <div>
            <label :for="study.name + { index }">Name of Institution : </label>
            <input type="text" v-bind:id="study.name + { index }" v-model="study.name" />
          </div>
          <div>
            <label :for="study.title + { index }">Title Of Study</label>
            <input type="text" v-bind:id="study.title + { index }" v-model="study.title" />
          </div>
          <div>
            <label :for="study.grade + { index }">Percentage/CGPA</label>
            <input type="number" v-bind:id="study.grade + { index }" v-model="study.grade" />
          </div>
          <div>
            <label :for="study.location + { index }">Location</label>
            <input type="text" v-bind:id="study.location + { index }" v-model="study.location" />
          </div>
        </div>
        <div>
          <div>
            <label :for="study.from + { index }">From : </label>
            <input type="text" v-bind:id="study.from + { index }" v-model="study.from" />
          </div>
          <div>
            <label :for="study.to + { index }">To : </label>
            <input type="text" v-bind:id="study.to + { index }" v-model="study.to" />
          </div>
        </div>
      </div>
    </ul>
    <button class="addstudy" type="button" @click.prevent="addStudy">+</button>

    <button @click.prevent="handlePrev" type="button">Back</button>
    <button type="submit">Next</button>
  </form>
</template>
