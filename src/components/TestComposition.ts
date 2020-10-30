import { ref, computed } from "vue";
import store from '@/store';

export default function () {
  let count = ref(0);
  const double = computed(() => count.value * 2)
  function increment() {  
    count.value = store.state.count
  }
  return {
    count,
    double,
    increment
  }
}