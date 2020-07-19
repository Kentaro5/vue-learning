var TodoList = {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <template v-for="todo in todos">
            <!-- v-bindディレクティブでtodoを親コンポーネントにわたす -->
            <slot :todo="todo">
                <li :key="todo.id">
                    {{ todo.text }}
                </li>
            </slot>
        </template>
    </ul>
    `
}

new Vue({
    el: '#app',
    data: function () {
        return {
            todos: [
                { id: 1, text: 'C++' },
                { id: 2, text: 'JavaScrip' },
                { id: 3, text: 'Java' },
                { id: 4, text: 'Perl' },
                { id: 5, text: 'Ruby' },
                { id: 6, text: 'PHP' },
            ]
        }
    },
    components: {
        TodoList: TodoList
    }
})