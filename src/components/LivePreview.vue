<script setup>
const { data } = defineProps(['data'])

const valcustom = (section) => {
  for (let i = 0; i < section.parts.length; i++) {
    if (section.parts[i].title.trim() !== '') {
      return true
    }
  }
  return false
}

const valskills = (skills) => {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].category.trim() !== '') {
      return true
    }
  }
  return false
}

const valexp = (exps) => {
  for (let i = 0; i < exps.length; i++) {
    if (exps[i].name.trim() !== '') {
      return true
    }
  }
  return false
}

const valstudies = (studies) => {
  for (let i = 0; i < studies.length; i++) {
    if (studies[i].name.trim() !== '') {
      return true
    }
  }
  return false
}
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
      <div v-show="ext.link.trim() !== ''">
        <div>{{ ext.title + ' : ' + ext.link }}</div>
      </div>
    </div>
  </div>

  <div v-show="valstudies(data.education)">
    <h2>Education</h2>
    <hr />
    <div v-for="(study, index) in data.education" :key="`study_${index}`">
      <div v-show="study.name.trim() !== ''">
        <div>
          <div>{{ study.name }}</div>
          <div>{{ study.from + ' - ' + study.to }}</div>
        </div>
        <div>
          <div>{{ study.title + ' - ' + study.grade }}</div>
          <div>{{ study.location }}</div>
        </div>
      </div>
    </div>
  </div>

  <div v-show="valexp(data.experience)">
    <h2>Experience</h2>
    <hr />
    <div v-for="(exp, index) in data.experience" :key="`exp_${index}`">
      <div v-show="exp.name.trim() !== ''">
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
    </div>
  </div>

  <div v-for="(section, index) in data.custom" :key="`cust_${index}`">
    <div v-show="valcustom(section)">
      <h2>{{ section.name }}</h2>
      <hr />
    </div>
    <div v-for="(part, i) in section.parts" :key="`par_${i}`">
      <div v-show="part.title.trim() !== ''">{{ part.title + ': ' + part.point }}</div>
    </div>
  </div>

  <div v-show="valskills(data.skills)">
    <h2>Skills</h2>
    <hr />
    <div v-for="(field, index) in data.skills" :key="`field_${index}`">
      <div v-show="field.category.trim() !== ''">
        {{ field.category + ': ' + field.skill }}
      </div>
    </div>
  </div>
</template>
