<script setup>
const closeModal = function () {
  const modal = document.getElementById('modal')
  modal.style.display = 'none'
}

window.onclick = function (event) {
  const modal = document.getElementById('modal')
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}

const signUp = function (event) {
  const loginForm = document.getElementById('loginForm')
  const signUpForm = document.getElementById('signUpForm')

  event.preventDefault()
  loginForm.style.display = 'none'
  signUpForm.style.display = 'block'
}

const logIn = function (event) {
  const loginForm = document.getElementById('loginForm')
  const signUpForm = document.getElementById('signUpForm')

  event.preventDefault()
  signUpForm.style.display = 'none'
  loginForm.style.display = 'block'
}
</script>

<template>
  <div id="modal" class="modal">
    <div class="modal-content">
      <span id="closeModalBtn" class="close-btn" @click="closeModal">&times;</span>
      <div id="loginForm">
        <h2 class="header">Login</h2>
        <form id="login" class="boxes">
          <div>
            <label for="username" class="label">Username or Email Address</label>
            <input type="text" id="username" required class="input" />
          </div>
          <div>
            <label for="pass" class="label">Password</label>
            <input type="password" id="pass" required class="input" /><br />
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
        <p style="color: white">
          Don't have an account?
          <a href="#signUp" id="signUpLink" @click="signUp">Sign Up</a>
        </p>
      </div>

      <div id="signUpForm" style="display: none">
        <h2 class="header">Sign Up</h2>
        <form id="signUp">
          <div>
            <label for="email" class="label">Email Address</label>
            <input type="text" id="email" required class="input" />
          </div>
          <div>
            <label for="username" class="label">Username or Email Address</label>
            <input type="text" id="username" required class="input" />
          </div>
          <div>
            <label for="opass" class="label">Enter Password</label>
            <input type="password" id="opass" required class="input" /><br />
          </div>
          <div>
            <label for="cpass" class="label">Confirm Password</label>
            <input type="password" id="cpass" required class="input" /><br />
          </div>
          <button type="submit" class="button">Submit</button>
        </form>
        <p style="color: white">
          Already have an account?
          <a href="#" id="loginLink" @click="logIn">Back to Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  outline: 0;
  border: 0;
  width: 16.5rem;
}
.label {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 39px;

  color: #ffffff;
}

.boxes {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.button {
  margin: 1.5rem 0;
  padding: 0.8rem 2rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  display: flex;
  align-items: center;
  letter-spacing: 0.1px;

  color: black;

  background: white;
  box-shadow: 0px 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  border-radius: 100px;
  border: none;
  transition:
    background-color 0.4s ease,
    color 0.4s ease;
}

.button:hover {
  background-color: black;
  color: white;
}

.header {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;

  color: #ffffff;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: center;
  justify-content: center;
}

/* Modal content box */
.modal-content {
  background-color: black;
  padding: 1.8rem;
  border-radius: 2rem;
  width: 20rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

form input,
form button {
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
