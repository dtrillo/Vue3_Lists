export default {
        name: 'addNew',
        data() {
            return {
                tarea:""
            }
        },
        methods: {
            enviar() {
                this.$emit('nuevo', this.tarea);
                this.tarea = "";
            }
        },
        template: `
        <form @submit.prevent="enviar">
            <input v-model,lazy="tarea" />
            <button type="submit">Add</button>
        </form>
        `
};