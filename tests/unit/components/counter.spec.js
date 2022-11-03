import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {

        wrapper = shallowMount(Counter)

    });

    test('Debe de hacer mach con el snapshot', () => {

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('Etiqueta h1 debe de tener el valor por defecto "Counter: 10"', () => {

        expect(wrapper.find('h1').exists()).toBeTruthy()

        const h1Value = wrapper.find('h1').text()

        expect(h1Value).toBe('Counter: 10')

    })

    test('El valor por defecto debe ser 10 en el h3', () => {

        const h3 = wrapper.find('[data-testid="counter"]')

        expect(h3.exists()).toBeTruthy()

        expect(h3.text()).toBe('10')

    })

    test('El Valor del counter debe incrementarse y decrementarse', async () => {

        let value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('10')

        const [decreseBtn, incriseBtn] = wrapper.findAll('button')

        await incriseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('11')

        await decreseBtn.trigger('click')
        await decreseBtn.trigger('click')

        value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('9')

    })

    test('Debe de establecer el valor por defecto', () => {

        const h1Value = wrapper.find('h1').text()

        const title = wrapper.props('title')

        const start = wrapper.props('start')

        expect(h1Value).toBe(`${title}: ${start}`)

    })

    test('Debe de mostrar las propeties enviadas', () => {

        const title = 'Prueba'

        const start = 20

        const wrapper = shallowMount(Counter, {
            props: {
                title,
                start
            }
        })

        const h1Value = wrapper.find('h1').text()

        expect(h1Value).toBe('Prueba: 20')

    })


})