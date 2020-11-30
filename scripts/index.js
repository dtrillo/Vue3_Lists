    import {tReactive, vue2} from '../components/app.js';

    const { createApp } = Vue;
    
    createApp(tReactive).mount('#app');
    createApp(vue2).mount('#app2');