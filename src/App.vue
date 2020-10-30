<template>
<HelloWorld msg="Testing" />
</template>

<script lang="ts">
import {
    onMounted
} from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import TestComposition from './components/TestComposition';
export default ({
    name: 'App',
    components: {
        HelloWorld
    },
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
    background-color: blue;
    margin-top: 60px;
}
</style>
