Vue.component('repeater', {
    template: `
        <div class="repeater">
            <div v-for="(item, index) in items" class="repeater-data" :key="item">
                <div v-if="index != 0" class="remove" @click="deleteItem(item)">X</div>
                <slot></slot>
            </div>
            <div class="add" @click="repeaterItem">Add</div>
        </div>
    `,
    data(){
        return {
            items: [0]
        }
    },
    methods: {
        repeaterItem: function(){
            this.items.push(this.items + 1)
        },
        deleteItem: function(val){
            this.items = this.items.filter(item => item != val)
        }
    }
});

Vue.component('repeater-item', {
    template:  `
        <div class="single-repeater-item">
            <slot></slot>
        </div>
    `,
})


new Vue({
    el: "#root"
});