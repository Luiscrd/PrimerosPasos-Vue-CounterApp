import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/shared/Footer.vue'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Footer)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})