<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
    <div class="container-fluid">
      <span class="navbar-brand">Demo</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample04"
        aria-controls="navbarsExample04"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <router-link :to="{ name: 'a' }" class="nav-link">One</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="two">Two</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="dropdown06"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdown06">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form>
          <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
        </form>
      </div>
    </div>
  </nav>
  <p></p>
  <router-view @increment="increment()" @decrement="decrement()" :count="count" />
</template>

<script lang="ts">
import { onMounted } from "vue"
import TestComposition from "./components/TestComposition"
export default {
  setup() {
    const { count, double, increment, decrement } = TestComposition()

    function testFunc() {
      increment()
      //console.log(count.value)
      //console.log(double.value)
    }

    onMounted(() => {
      testFunc()
    })

    return {
      count,
      double,
      increment,
      decrement,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: gray;
  margin-top: 60px;
}
a {
  color: black;
  padding: 0.5em;
  display: inline-block;
  border: 1px dotted black;
  margin: 0.5em;
}
.router-link-active {
  font-weight: bold;
}
</style>
