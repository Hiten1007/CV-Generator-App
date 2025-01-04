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
  <div ref="previewElement">
    <div class="header">
      <h1 class="mainh">{{ data.personalInfo.name }}</h1>
      <h2 class="subh">{{ data.personalInfo.attributes }}</h2>
    </div>
    <div class="links">
      <div v-show="data.personalInfo.phone" class="link">
        <div style="font-size: 14px">|</div>
        <img src="../assets/phone-icon.png" alt="" height="14rem" width="14em" />
        <div style="font-size: 13px">{{ ': ' + data.personalInfo.phone }}</div>
        <div style="font-size: 14px">|</div>
      </div>
      <div v-show="data.personalInfo.email" class="link">
        <img src="../assets/envelope-icon.png" alt="" height="14rem" width="14rem" />
        <div style="font-size: 14px">{{ ': ' + data.personalInfo.email }}</div>
        <div style="font-size: 14px">|</div>
      </div>
      <div v-for="(ext, index) in data.personalInfo.additionalLinks" :key="`link_${index}`">
        <div v-show="ext.link.trim() !== ''" class="link">
          <div>
            <b style="font-size: 14px">{{ ext.title }}</b> :
          </div>
          <div style="font-size: 14px; padding-top: 0.2rem">
            {{ ext.link }}
          </div>
          <div style="font-size: 14px">|</div>
        </div>
      </div>
    </div>
    <div v-show="valstudies(data.education)">
      <h2 class="allheader">EDUCATION</h2>
      <hr />
      <div v-for="(study, index) in data.education" :key="`study_${index}`">
        <div v-show="study.name.trim() !== ''" class="study">
          <div class="boldedu">
            <div>{{ study.name }}</div>
            <div>{{ study.from + ' - ' + study.to }}</div>
          </div>
          <div class="italicedu">
            <div>{{ study.title + ' - ' + study.grade }}</div>
            <div>{{ study.location }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="valexp(data.experience)">
      <h2 class="allheader">EXPERIENCE</h2>
      <hr />
      <div v-for="(exp, index) in data.experience" :key="`exp_${index}`">
        <div v-show="exp.name.trim() !== ''" class="study">
          <div class="boldedu">
            <div>{{ exp.name }}</div>
            <div>{{ exp.from + ' - ' + exp.to }}</div>
          </div>
          <div class="italicedu">
            <div>
              <u>{{ exp.position }}</u>
            </div>
            <div>{{ exp.location }}</div>
          </div>
          <div class="descript">{{ exp.description }}</div>
        </div>
      </div>
    </div>
    <div v-for="(section, index) in data.custom" :key="`cust_${index}`">
      <div v-show="valcustom(section)">
        <h2 class="allheader">{{ section.name }}</h2>
        <hr />
      </div>
      <div v-for="(part, i) in section.parts" :key="`par_${i}`">
        <div v-show="part.title.trim() !== ''" class="tokens">
          <div>
            <i>
              <b style="font-size: 14px">{{ part.title }}</b> </i
            >:
          </div>
          <div style="font-size: 14px; padding: 0.2rem; overflow: scroll">
            <i>{{ part.point }}</i>
          </div>
        </div>
      </div>
    </div>
    <div v-show="valskills(data.skills)">
      <h2 class="allheader">SKILLS</h2>
      <hr />
      <div v-for="(field, index) in data.skills" :key="`field_${index}`">
        <div v-show="field.category.trim() !== ''" class="tokens">
          <div>
            <span>
              <i>
                <b style="font-size: 14px">{{ field.category }}</b> </i
              >:
            </span>
          </div>
          <div style="font-size: 14px; padding: 0.2rem; overflow: scroll">
            <i>{{ field.skill }}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tokens {
  display: flex;
  justify-content: flex-start;
  gap: 0.2rem;
  margin-bottom: 0.4rem;
}
.descript {
  margin: 2px 0;
  font-size: 12px;
  text-align: justify;
  overflow: scroll;
}

.study {
  margin-bottom: 0.4rem;
}
.header {
  border-bottom: 0.5 solid #000;
  padding-bottom: 3;
}

.mainh {
  font-size: 1.5rem;
  font-family: 'Garamond';
  font-style: normal;
  font-weight: 700;
}

.subh {
  font-size: 12px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  padding-top: 0.2rem;
}

.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  row-gap: 0.1rem;
  padding-top: 0.3rem;
}

.link {
  display: flex;
  justify-content: center;
  gap: 0.2rem;
}

.allheader {
  font-size: 14px;
  font-family: 'Garamond';
  font-style: normal;
  font-weight: 700;
  border-bottom: '0.5 solid #000';
  margin-bottom: 5;
}

.boldedu {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 700;
}

.italicedu {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-style: italic;
}
</style>
