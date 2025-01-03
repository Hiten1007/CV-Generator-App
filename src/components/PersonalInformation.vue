<script setup>
const data = defineModel('data')

const emit = defineEmits(['next'])

const handleSubmit = () => {
  emit('next')
}
const addlink = () => {
  data.value.personalInfo.additionalLinks.push({ title: '', link: '' })
}
</script>

<template>
  <form class="headers" @submit.prevent="handleSubmit">
    <h1 class="mainhead">Personal Information</h1>
    <h3 class="subhead1">Tell Us About Yourself.</h3>

    <div class="imp">
      <div class="maininfo">
        <label for="names" class ="labels">Name</label>
        <input type="text" name="names" id="names" v-model="data.personalInfo.name" class="input" />
      </div>
      <div class="maininfo">
        <label for="phone" class ="labels">Phone No.</label>
        <input type="number" name="phone" id="phone" v-model="data.personalInfo.phone" class="input" />
      </div>
      <div class="maininfo">
        <label for="emails" class ="labels">E-mail</label>
        <input type="email" name="emails" id="emails" v-model="data.personalInfo.email" class="input" />
      </div>
      <div class="maininfo">
        <label for="attrs" class ="labels">Attributes</label>
        <input type="text" name="attrs" id="attrs" v-model="data.personalInfo.attributes" class="input" />
      </div>
    </div>
    <div>
      <legend class="linkhead">Additional Links</legend>
      <div v-for="(adlink, index) in data.personalInfo.additionalLinks" :key="index" >
        <div class="links">
          <input type="text" v-bind:id="adlink.title" v-model="adlink.title" class="input linkname" />: 
          <input type="text" v-bind:id="adlink.link" v-model="adlink.link" class="input " />
        </div>
      </div>
      <button class="addlink" type="button" @click="addlink">+</button>
    </div>

    <button type="submit" class="next1">Next</button>
  </form>
</template>

<style scoped>
.next1{
  margin:1.5rem 0 0 30rem;
padding: 0.8rem 2.5rem;

/* M3/label/large */
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;

display: flex;
align-items: center;
letter-spacing: 0.1px;

color: #FFFFFF;



background: #000000;
box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
border-radius: 100px;
border:none

}
.addlink{
background-color: black;
  border-radius: 4rem;
  text-align: center;
  margin-top: 0.5rem;

  width: 3.7rem;
  height: 3.7rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 1.8rem;

  color: #ffffff;
  border: none;

  /* icon */


}
.links{
  margin:0.3rem;
}
.linkname{
  background-color: #D9D9D9;
  width:5rem;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1rem;
line-height: 1.5rem;

color: #000000;


}

.headers {
  margin-top: 0;
  padding: 2.4rem 10rem 0 3.5rem;
}

.mainhead {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 1.6rem;
  line-height: 2rem;

  color: #000000;
}

.subhead1 {
  /* Tell Us About Yourself. */
  margin-top: 0.2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;

  color: #000000;
}

.imp{
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  margin-top: 2.1rem;
  gap:6rem;
  row-gap: 1.5rem;
}

.maininfo{
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.labels{

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1rem;
line-height: 1.5rem;

color: #000000;

}


.input{
  outline:none;
  border: none;
}

.linkhead{
  margin:1rem 0 0.7rem;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1.3rem;
line-height: 1.8rem;

color: #000000;


}
</style>
