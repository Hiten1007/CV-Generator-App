<script setup></script>

<template>
  <form class="headers">
    <h1>Personal Information</h1>
    <h3>Tell Us About Yourself.</h3>

    <fieldset>
        <div class="maininfo">
          <label for="names">Name</label>
          <input type="text" name="names" id ="names" required>
        </div>
        <div class="maininfo">
          <label for="phone">Phone No.</label>
          <input type="number" name="phone" id="phone" required>
        </div>
        <div class="maininfo">
          <label for="emails">E-mail</label>
          <input type="email" name="emails" id="emails" required>
        </div>
        <div class="maininfo">
          <label for="attrs">Attributes</label>
          <input type="text" name="attrs" id="attrs" required></div>
    </fieldset>
    <fieldset>
      <legend>Additional Links</legend>
      <div>
        <div>
          <div>LinkedIn : </div>
          <input type="text">
        </div>
        <div>
          <div>GitHub : </div>
          <input type="text">
        </div>
        <button class="addlink">+</button>
      </div>
     
    </fieldset>

    <button>Next</button>
  </form>
</template>
