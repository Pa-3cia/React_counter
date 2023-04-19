<script setup>
import useCounter from "../composables/useCounter";
import store from "../store";

const { increment, decrement, reset } = useCounter();
</script>

<template>
  <div class="card">
    <h2>{{ store.state.count }}</h2>

    <div class="button-container">
      <button class="inc-button" type="button" @click="increment">
        Increment Count
      </button>
      <button
        class="dec-button"
        type="button"
        @click="decrement"
        :disabled="store.state.count === 0"
      >
        Decrement Count
      </button>
      <button class="reset-button" type="button" @click="reset">
        Reset Count
      </button>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 60%;
  margin: 10rem auto;
  text-align: center;
  border: 1px solid rgb(139, 139, 15);
  border-radius: 1rem;
  padding: 8rem 1rem;
}

h2 {
  margin: 0rem;
  color: #fff;
}
.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 2rem;
}
button {
  padding: 1rem 3rem;
  cursor: pointer;
  box-shadow: 0px 1px 10px 0px rgba(147, 146, 146, 0.5);
  border-radius: 0.5rem;
  color: #fff;
  transition: 0.8s ease-in;
  border: none;
  font-weight: 500;
  font-size: 1.2rem;
}
button:hover {
  scale: 1.1;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.inc-button {
  background: rgb(49, 137, 49);
}

.dec-button {
  background: rgb(139, 139, 15);
}

.reset-button {
  background: rgb(185, 58, 58);
}

@media only screen and (max-width: 767px) {
  button {
    padding: 1rem;
    width: 14rem;
  }
}
</style>
