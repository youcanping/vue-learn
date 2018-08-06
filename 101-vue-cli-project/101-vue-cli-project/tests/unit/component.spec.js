import { shallowMount } from "@vue/test-utils";
import component from "@/components/component.vue";

describe("component.vue", () => {
	it("renders props.msg when passed", () => {
		const msg = "new message";
		const wrapper = shallowMount(component, {
			propsData: { msg }
		});
		expect(wrapper.text()).toMatch(msg);
	});
});
