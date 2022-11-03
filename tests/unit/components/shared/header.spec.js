import { shallowMount } from '@vue/test-utils'
import Header from '@/components/shared/Header.vue'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Header)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

})