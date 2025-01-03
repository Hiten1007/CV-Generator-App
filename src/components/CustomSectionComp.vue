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
    name: `Custom Section ${data.value.custom.length + 1}`,
    parts: [{ title: '', point: '' }],
  })
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <h1>Custom Section</h1>
    <h3>Add a Personal Touch.</h3>
    <li v-for="(section, index) in data.custom" :key="`section_${index}`">
      <div>
        <input type="text" v-model="section.name" />
      </div>
      <fieldset>
        <li v-for="(part, i) in section.parts" :key="`section_${index}_part_${i}`">
          <div>
            <label :for="`part_${index}_${i}_title`">Title</label>
            <input type="text" :id="`part_${index}_${i}_title`" v-model="part.title" />
          </div>
          <div>
            <label :for="`part_${index}_${i}_point`">Description</label>
            <textarea :id="`part_${index}_${i}_point`" v-model="part.point"></textarea>
          </div>
        </li>
      </fieldset>
      <button type="button" @click="addPart(section)">Add Part +</button>
    </li>
    <button class="addcustom" type="button" @click="addSection">+ Add Section</button>
    <button type="button" @click="handlePrev">Back</button>
    <button type="submit">Next</button>
  </form>
</template>
