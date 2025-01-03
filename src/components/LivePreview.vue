<script setup>
const { data } = defineProps(['data'])
</script>

<template>
  <h1>{{ data.personalInfo.name }}</h1>
  <h2>{{ data.personalInfo.attributes }}</h2>
  <div>
    <div>
      <img src="" alt="" />
      <div>{{ data.personalInfo.phone }}</div>
    </div>
    <div>
      <img src="" alt="" />
      <div>{{ data.personalInfo.email }}</div>
    </div>
    <div v-for="(ext, index) in data.personalInfo.additionalLinks" :key="`link_${index}`">
      <div>{{ ext.title + ' : ' + ext.link }}</div>
    </div>
  </div>

  <h2>Education</h2>
  <hr />
  <div v-for="(study, index) in data.education" :key="`study_${index}`">
    <div>
      <div>{{ study.name }}</div>
      <div>{{ study.from + ' - ' + study.to }}</div>
    </div>
    <div>
      <div>{{ study.title + ' - ' + study.grade }}</div>
      <div>{{ study.location }}</div>
    </div>
  </div>

  <h2>Experience</h2>
  <hr />
  <div v-for="(exp, index) in data.experience" :key="`exp_${index}`">
    <div>
      <div>{{ exp.name }}</div>
      <div>{{ exp.from + ' - ' + exp.to }}</div>
    </div>
    <div>
      <div>{{ exp.position }}</div>
      <div>{{ exp.location }}</div>
    </div>
    <div>{{ exp.description }}</div>
  </div>

  <div v-for="(section, index) in data.custom" :key="`cust_${index}`">
    <h2>{{ section.name }}</h2>
    <hr />
    <div v-for="(part, i) in section.parts" :key="`par_${i}`">
      <div>{{ part.title + ': ' + part.point }}</div>
    </div>
  </div>

  <h2>Skills</h2>
  <div v-for="(field, index) in data.skills" :key="`field_${index}`">
    <div>{{ field.category + ': ' + field.skill }}</div>
  </div>
</template>
