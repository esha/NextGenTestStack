<template>
    <p>
        <router-link :to="{ name: 'a' }">One</router-link>
        <router-link to="two">Two</router-link>
    </p>
    <router-view/>
</template>

<script lang="ts">
import {
    onMounted
} from 'vue';
import TestComposition from './components/TestComposition';
export default ({
    name: 'App',
    setup() {
        const {
            count,
            double,
            increment
        } = TestComposition();

        function testFunc() {
            increment();
            console.log(count.value);
            console.log(double.value);
        }

        onMounted(() => {
            testFunc();
        })

        return {
            count,
            double,
            increment
        }
    }
});
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
