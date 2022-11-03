<template>
    <div class="d-flex flex-column">
        <div class="container mt-4">
            <h1>{{ customTitle }}: {{ counter }}</h1>
            <hr>
            <div class="buetons-box d-flex align-items-center">
                <h3>Numero: </h3>
                <button type="button" class="btn btn-primary" @click="decrese()">-1</button>
                <h3 data-testid="counter">{{ counter }}</h3>
                <button type="button" class="btn btn-primary" @click="icrise()">+1</button>
            </div>
            <hr>
            <h3>Numero al cuadrado : {{ counter }} <sup>2</sup> = {{ squereCounter }}</h3>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Couter',
    props: {
        title: {
            type: String,
            default: 'Counter'
        },
        start: {
            type: Number,
            default: 10,
            validator( value ) {
                return value >= 0
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        icrise() {
            this.counter++
        },
        decrese() {
            this.counter--
        }
    },
    computed: {
        squereCounter() {
            return this.counter * this.counter
        },
        customTitle() {
            return this.title
        }
    }
}
</script>

<style scoped>
.btn:hover {
    color: white;
    background-color: #11613e;
    border-color: #11613e;
}

[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled),
button:not(:disabled) {
    cursor: pointer;
}

.btn-primary {
    width: 50px;
    text-align: center;
    margin: 0 10px;
    --bs-btn-color: #fff;
    --bs-btn-bg: #41B783;
    --bs-btn-border-color: #41B783;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #41B783;
    --bs-btn-hover-border-color: #41B783;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #41B783;
    --bs-btn-active-border-color: #41B783;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #41B783;
    --bs-btn-disabled-border-color: #41B783;
}

h3 {
    margin: 0 10px;
    display: inline;
}
</style>