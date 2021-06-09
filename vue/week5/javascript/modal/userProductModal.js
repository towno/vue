export default {
    template: '#userProductModal',
    props: {
        product: {}
    },
    data() {
        return {
            status: {},
            modal: '',
            qty: 1,
        };
    },
    methods: {
        openModal() {
            console.log("openModal~~");
        }
    }, mounted() {
        console.log("mountedmounted999");
    }
}