<template>
    <head>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>
    <!-- container start -->
    <div class="container">
        <!-- left start -->
        <div class="left">
            <!-- header start -->
            <header>
                <!-- logo start -->
                <div class="logo">
                    <h2>Efficio</h2>
                    <div class="close">
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                </div>
                <!-- nav start -->
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <span class="material-symbols-outlined">
                                    home
                                </span>
                                <span class="title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    task
                                </span>
                                <span class="title">Task</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="material-symbols-outlined">
                                    search
                                </span>
                                <span class="title">Search</span>
                            </a>
                        </li>
                        <li>
                            <a href="/settings">
                                <span class="material-symbols-outlined">
                                    settings
                                </span>
                                <span class="title">settings</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- nav end -->
            </header>
            <!-- header end -->
            <!-- upgrade start -->
            <div class="upgrade">
                <h4>Upgrade to <bold>PRO</bold> for<br> more features</h4>
                <div class="upBtn">
                    <button>Upgrade</button>
                </div>
            </div>
            <!-- upgrade end -->
        </div>
        <!-- left end -->
        <!-- right start -->

        <div class="right">
            <!-- top start -->
            <div class="top">
                <!-- searchBx start -->
                <div class="searchBx">
                    <h2>Dashboard</h2>
                    <div class="inputBx">
                        <span class="material-symbols-outlined searchOpen">
                            search
                        </span>
                        <input type="text" placeholder="Search...">
                        <span class="material-symbols-outlined searchClose">
                            close
                        </span>
                    </div>
                </div>
                <!-- searchBx end -->
                <!-- user start -->
                <div class="user">
                    <span class="material-symbols-outlined">
                        notifications
                    </span>
                    <div class="userImg">
                        <span class="material-symbols-outlined">
                            person
                        </span>
                    </div>
                    <h2>{{ first_name }}<br><span>Administrator</span></h2>
                    <div class="arrow">
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </div>
                    <div class="toggle">
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                        <span class="material-symbols-outlined">
                            close
                        </span>
                    </div>
                </div>
                <!-- user end -->
            </div>
            <main>
                <div v-for="todo in todos" :key="todo.id">
                            <Todo :todo="todo" @delete-todo="deleteTodo" @toggle-todo="toggleTodo" />
                        </div>
            </main>
        </div>
    </div>
</template>
<script>
import Todo from '~/components/Todo.vue';

export default {
    components: {
        Todo
    },
    data() {
        return {
            newTodoText: '',
            todos: [],
            nextId: 1,
            first_name:''
        };
    },
    methods: {
        deleteTodo(todo) {
            this.todos = this.todos.filter(t => t.id !== todo.id);
        },
        toggleTodo(todo) {
            const found = this.todos.find(t => t.id === todo.id);
            if (found) {
                found.done = !found.done;
            }
        }
    },
    mounted() {
        let usr = localStorage.getItem('usr-info');
        this.first_name = JSON.parse(usr).first_name;
        if (!usr) {
            this.$router.push({ name: 'signup' })
        }
        console.warn(this.$route.params.id)
    }
}
</script>