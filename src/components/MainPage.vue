<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import LoginorSignUp from './LoginorSignUp.vue'

const hover = ref(false)

const openModal = function () {
  const modal = document.getElementById('modal')
  modal.style.display = 'flex'
}

const router = useRouter()

const goToContact = () => {
  router.push({ hash: '#contactus' })
}

const goToFAQ = () => {
  router.push({ hash: '#faqid' })
}

const goToBuildResume = () => {
  router.push('/build-resume')
}

const clicked = (id) => {
  const slide = document.querySelector('#s' + id)
  const answer = document.querySelector('#a' + id)

  const triangle = document.querySelector('#t' + id)

  slide.classList.toggle('slideclicked')

  triangle.classList.toggle('triangleclicked')

  // Toggle visibility and sliding effect
  if (answer.classList.contains('visible')) {
    answer.classList.remove('visible')
    setTimeout(() => {
      answer.classList.add('hidden') // Hide it completely after sliding up
    }, 0) // Match the transition duration
  } else {
    answer.classList.remove('hidden') // Show it before sliding down
    setTimeout(() => {
      answer.classList.add('visible')
    }, 0) // Trigger the animation
  }
}
</script>
<template>
  <div class="main">
    <div class="nav">
      <div class="navbar">
        <img
          src="../assets/image.png"
          height="40rem"
          width="40rem"
          style="margin: 0.5rem 0.75rem 0 0.75rem; padding: 0.25rem"
        />
        <div class="headB"><button class="headt">Home</button></div>
        <div><button class="headt" @click="goToBuildResume">Build Resume</button></div>
        <div><button class="headt" @click="goToContact">Contact Us</button></div>
        <div><button class="headt" @click="goToFAQ">FAQs</button></div>
        <div><button class="headt" id="openModalBtn" @click="openModal">Login/Sign Up</button></div>
      </div>
    </div>

    <div class="headers">
      <div class="mainh">
        <h1 class="head">Career Canvas</h1>
        <img src="../assets/image copy.png" height="35rem" width="35rem" />
      </div>
      <h3 class="subhead">Launch your career to new heights.</h3>
    </div>
    <div class="startBbox">
      <button
        class="startB"
        @click="goToBuildResume"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        <h5 class="starth">Get Started</h5>
        <img v-show="!hover" src="../assets/image copy 2.png" height="14rem" width="14rem" />
        <img
          v-show="hover"
          src="../assets/external-link-svgrepo-com.svg"
          height="14rem"
          width="14rem"
        />
      </button>
    </div>
  </div>

  <LoginorSignUp />

  <div class="mainC">
    <div>
      <h1 class="adhead">Your first impression matters – let us help you make it unforgettable.</h1>
      <div style="margin-top: 1.5rem">
        <div class="points">
          <div class="point"></div>
          <h5 class="adtext">
            Choose from 20+ professionally designed templates tailored to your career goals.
          </h5>
        </div>
        <div class="points">
          <div class="point"></div>
          <h5 class="adtext">Lightning-fast CV creation – finish in under 5 minutes!</h5>
        </div>
        <div class="points">
          <div class="point"></div>
          <h5 class="adtext">100% data security guaranteed – your information stays private.</h5>
        </div>
        <div class="points">
          <div class="point"></div>
          <h5 class="adtext">
            Built with cutting-edge design and career intelligence to give you an edge.
          </h5>
        </div>
      </div>
    </div>
    <img
      src="../assets/image copy 3.png"
      height="300rem"
      width="300rem"
      style="margin-top: 4.8rem"
    />
  </div>

  <hr />

  <div class="faqs" style="margin-bottom: 4rem">
    <div class="faqw" id="faqid">
      <h1 class="Faq">FAQs</h1>
    </div>
    <div class="faq" @click="clicked(1)">
      <div class="slide" id="s1">
        <div class="faqt" id="f1">Q. Do I need to sign up to use the app?</div>
        <div class="triangle" id="t1"></div>
      </div>

      <div class="answer hidden" id="a1">
        A. No, you can start using the app without signing up. However, signing up lets you save
        your CVs for future edits and access advanced features.
      </div>
    </div>
    <div class="faq" @click="clicked(2)">
      <div class="slide" id="s2">
        <div class="faqt" id="f2">Q. How do I choose the right template?</div>
        <div class="triangle" id="t2"></div>
      </div>

      <div class="answer hidden" id="a2">
        A. Select a template that aligns with your industry and the role you are applying for. For
        example, use a formal template for corporate jobs and a creative one for design or marketing
        roles.
      </div>
    </div>
    <div class="faq" @click="clicked(3)">
      <div class="slide" id="s3">
        <div class="faqt" id="f3">Q. What should I include in my CV?</div>
        <div class="triangle" id="t3"></div>
      </div>

      <div class="answer hidden" id="a3">
        A. Your CV should include: Contact information, A professional summary, Work experience,
        Education details, Skills relevant to the job, Additional sections like certifications or
        projects, if applicable.
      </div>
    </div>
    <div class="faq" @click="clicked(4)">
      <div class="slide" id="s4">
        <div class="faqt" id="f4" style="padding-top: 0.3rem">
          Q. How do I use the CV generator app to create a personalized and professional CV, and
          what features does it offer to enhance the process?
        </div>
        <div class="triangle" id="t4" style="margin-top: 0.5rem"></div>
      </div>

      <div class="answer hidden" id="a4">
        A. The CV generator app guides you through a simple process to create a personalized CV. You
        enter your details, choose from industry-specific templates, and customize sections like
        skills, education, and experience. Features like drag-and-drop section reordering, keyword
        optimization, and live previews ensure your CV looks professional and is tailored to the
        role you're applying for.
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="contactBox" id="contactus">
      <h2 class="contactHead" @click="goToContact">Contact Us</h2>
      <div class="contacts">
        <div class="contact">
          <img
            src="../assets/image copy 4.png"
            height="35rem"
            width="38rem"
            style="margin-top: 0.8rem"
          />
          <p class="contactText">+91-8293472819</p>
        </div>
        <div class="contact">
          <img
            src="../assets/image copy 6.png"
            height="35rem"
            width="38rem"
            style="margin-top: 0.8rem"
          />
          <p class="contactText">1234 Elm Street, Apt 56B, Springfield, IL 62701, United States</p>
        </div>
        <div class="contact">
          <img
            src="../assets/image copy 5.png"
            height="25rem"
            width="45rem"
            style="margin-top: 0.7rem"
          />
          <p class="contactText">example12@mocknet.com</p>
        </div>
      </div>
      <div class="connections">
        <p class="connect">Connect with Us :</p>
        <div class="icons">
          <img src="../assets/image copy 7.png" alt="" class="icon" />
          <img src="../assets/image copy 8.png" alt="" class="icon" />
          <img src="../assets/image copy 9.png" alt="" class="icon" />
          <img
            src="../assets/image copy 10.png"
            alt=""
            height="30rem"
            width="32rem"
            style="padding-top: 0.11rem"
          />
        </div>
      </div>
    </div>
    <div class="copyrightBox">
      <div class="copyright">© 2024 Hiten Gupta. All rights reserved.</div>
    </div>
  </div>
</template>

<style scope>
html {
  scroll-behavior: smooth;
}
.copyrightBox {
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
}
.copyright {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration-line: underline;

  color: #000000;
}
.icons {
  display: flex;
  gap: 1rem;
}
.icon {
  height: 1.2rem;
  width: 1.2rem;
  margin-top: 0.4rem;
}
.connect {
  /* Connect with us : */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 4rem;
  line-height: 5rem;

  color: #ffffff;
}
.connections {
  display: flex;
  margin-left: 3rem;
  gap: 1rem;
}
.connect {
  /* Connect with us : */

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  /* identical to box height, or 227% */

  color: #ffffff;
}
.contact {
  display: flex;
  gap: 1rem;
}
.contactText {
  width: 22rem;
  height: 2rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 3rem;
  text-decoration: underline;
  text-underline-offset: 0.8rem;
  color: #79747e;
  letter-spacing: 0.15rem;
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  margin: 3rem 4rem;
}
.contactHead {
  width: 20rem;
  height: 4rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 2.8rem;
  text-decoration-line: underline;

  color: #79747e;
  margin: 1rem 2rem;
  padding-top: 2rem;
}
.contactBox {
  background-color: black;
  padding-bottom: 2.5rem;
}
.hidden {
  display: none;
}

.answer {
  margin: 0 10rem;
  padding: 0.35rem 1rem 1rem;
  background-color: white;
  border-bottom-right-radius: 2.5rem;
  border-bottom-left-radius: 2.5rem;
  color: #6b6666;
  border-color: #6b6666;
  border-style: solid;
  border-width: 0.01rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.4rem;
}

.answer {
  max-height: 0; /* Initially hidden */
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.answer.visible {
  max-height: 30rem; /* Large enough to fit the tallest answer */
}

.line {
  margin: 0 10rem;
}

.faqt {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: #6b6666;
  width: 50rem;
}

.slide {
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 10rem 0;
  padding: 1rem;
  border: 1px solid #6b6666;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  cursor: pointer;
}

.triangle {
  border-left: 0.5rem solid transparent;
  border-right: 0.5rem solid transparent;
  border-bottom: 1rem solid #000000;
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

.slideclicked {
  padding: 1rem 1rem 0.35rem;
  background-color: white;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.triangleclicked {
  transform: rotate(180deg);

  margin-top: 0.25rem;
  transition: transform 0.3s ease;
}

.navbar {
  color: white;
  display: flex;
}
.headt {
  font-size: 1.1rem;
  font-family: 'Inter', serif;
  font-weight: 500;
  margin: 0;
  border-radius: 0;

  padding: 0;
  height: 3.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.headt:hover {
  background-color: white;
  color: black;
}
.headB {
  height: 3.5rem;
}

.nav {
  background-color: black;
  height: 3.5rem;
  padding-right: 38rem;
}
.main {
  background-image: url('../assets/top-view-desk-concept-with-gray-background.jpg');
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.headers {
  margin: 12rem 0 0 0;
}

.mainh {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
}
.head {
  padding-top: 0.325rem;
  font-size: 2rem;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-size: 2.5rem;
  line-height: 2rem;
  width: 18rem;
  color: #000000;
}

.subhead {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 19px;

  color: #000000;
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}

.startBbox {
  margin: 10rem 0 0 0;
  display: flex;
  justify-content: center;
}

.startB {
  height: 3rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;
  transition: background-color 0.3s ease;
}

.starth {
  padding-right: 0.5rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: #ffffff;
  transition: color 0.3s ease;
}

.startB:hover {
  background-color: #ffffff;
}

.startB:hover .starth {
  color: #000000;
}
.point {
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background: #000000;
  margin-right: 1.5rem;
  margin-top: 0.2rem;
}

.points {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 47rem;
}

.mainC {
  display: flex;
  justify-content: space-around;
  padding: 4.5rem 4.5rem;

  height: 100vh;
}

.adtext {
  width: 50rem;
  height: 46px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5rem;

  color: #000000;
}

.adhead {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 2.8rem;
  width: 50rem;

  color: #000000;
}

.Faq {
  padding: 0.75rem 2.65rem 0.75rem 2.65rem;
  margin-top: 1rem;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 1rem;
  line-height: 1rem;

  color: #ffffff;

  background: #000000;
  box-shadow: 0px 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
  border-radius: 10rem;
}

.faqw {
  display: flex;
  justify-content: center;
}
</style>
