import { shallowMount } from "@vue/test-utils"
import TestComp from "@/components/TestComp.vue"

describe("TestComp.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message"
    const wrapper = shallowMount(TestComp, {
      propsData: { msg },
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
