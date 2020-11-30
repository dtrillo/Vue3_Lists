import addNew from "./addnew.js";
const { reactive } = Vue;

const lists_def = ["uno", "dos"];
const template = `
<div>
  <h1>{{title}}</h1>
  <ul v-for="(i, index) in lists" key="index">
    <li>{{ i }}</li>
  </ul>
  <addNew @nuevo="nuevo"></addNew>
</div>
`;

const tReactive =  {
    name: 'tReactive',
    components: { addNew }, 
    setup() {
        const title = "List with Vue 3 Composition API";
        let lists = reactive([...lists_def]);        
        const nuevo = val => {
          lists.push(val);
          console.log(lists);
        }
        return { title, lists, nuevo };
    },
    template: template,
};

const vue2 = {
  components: { addNew  },
  data() {
    return {
      title: "List with Vue3",
      lists: [...lists_def],
    }
  },
  methods: {
    nuevo(val) { this.lists.push(val)  }
  },
  template: template,
}
export { tReactive, vue2} ;