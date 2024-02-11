<template>
    <head>
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    </head>

    <body>
        <div class="container">
            <div class="left">
                <header>
                    <div class="logo">
                        <h2 style="margin-left: 40px;">Efficio</h2>
                        <div class="close">
                            <span class="material-symbols-outlined">
                                close
                            </span>
                        </div>
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <a href="#">
                                    <span class="material-symbols-outlined">
                                        home
                                    </span>
                                    <span class="title">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="/task">
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
                </header>
                <div class="upgrade">
                    <h4>Upgrade to <bold>PRO</bold> for<br> more features</h4>
                    <div class="upBtn">
                        <button>Upgrade</button>
                    </div>
                </div>
            </div>

            <div class="right">
                <div class="top">
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
                </div>
                <main>
                    <div>
                        <h1 style="margin-left: 250px;">Task List</h1>
                        <input type="text" v-model="newTodoText" @keyup.enter="addTodo" style="margin-left: 200px;">
                        <button @click="addTodo" style="margin-top: 20px;">Add ToDo</button>
                        <div v-for="todo in todos" :key="todo.id">
                            <Todo :todo="todo" @delete-todo="deleteTodo" @toggle-todo="toggleTodo" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </body>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Todo from '~/components/Todo.vue';

export default defineComponent({
    components: {
        Todo
    },
    data() {
        return {
            newTodoText: '',
            todos: [] as { id: number; text: string; done: boolean }[],
            nextId: 1,
            first_name: ''
        };
    },
    methods: {
        addTodo() {
            if (this.newTodoText.trim()) {
                this.todos.push({ id: this.nextId++, text: this.newTodoText, done: false });
                this.newTodoText = '';
            }
        },
        deleteTodo(todo: { id: number; text: string; done: boolean }) {
            this.todos = this.todos.filter(t => t.id !== todo.id);
        },
        toggleTodo(todo: { id: number; text: string; done: boolean }) {
            const found = this.todos.find(t => t.id === todo.id);
            if (found) {
                found.done = !found.done;
            }
        }
    },
    mounted() {
        const usr = localStorage.getItem('usr-info');
        if (usr) {
            this.first_name = JSON.parse(usr).first_name;
        } else {
            this.$router.push({ name: 'signup' });
        }
        console.warn(this.$route.params.id);
    }
});
</script>
<style>
body {
    display: flex;
    align-items: center;
    min-height: 100vh;
    justify-content: center;
    background: linear-gradient(#f4dbfb, #d8dbfe);
}

.full {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48
}

.container {
    position: relative;
    width: 95%;
    height: 95vh;
    background: rgba(255, 255, 255, .2);
    border-radius: 25px;
    backdrop-filter: blur(10px);
    border: 5px solid #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, .1),
        0 0 10px rgba(0, 0, 0, .2),
        0 0 15px rgba(0, 0, 0, .2);
    padding: 20px;
    display: flex;
    gap: 20px;
    overflow: hidden;
}

.container .left {
    position: relative;
    width: 250px;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    box-shadow: rgba(255, 255, 255, 0.5) 35px 35px 68px 0px,
        inset rgba(255, 255, 255, 0.6) -8px -8px 16px 0px,
        inset rgb(255, 255, 255) 0px 11px 28px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 20px 0;
}

.container .left header {
    position: relative;
    width: 100%;
}

.container .left header .logo {
    position: relative;
    margin-bottom: 15px;
    padding-left: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.container .left header .logo h2 {
    font-size: 1.2em;
    font-weight: 500;
    cursor: pointer;
    color: #000;
}

.container .left header .logo .close {
    position: relative;
    left: -20px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    display: none;
    cursor: pointer;
}

.container .left header nav {
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
}

.container .left header nav ul {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
}

.container .left header nav ul li {
    position: relative;
    width: 100%;
    height: 50px;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .left header nav ul li a {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: .3s ease;
}

.container .left header nav ul li a:hover {
    transition: 0s;
    background: #f1f3ff;
}

.container .left header nav ul li a::before {
    content: '';
    position: absolute;
    right: 0;
    width: 0;
    height: 100%;
    background: #6577ff;
    transition: .3s ease;
}

.container .left header nav ul li a:hover::before {
    width: 4px;
}

.container .left header nav ul li a .material-symbols-outlined {
    color: #999;
    font-size: 1.7em;
    margin-right: 10px;
}

.container .left header nav ul li a .title {
    color: #999;
    font-size: 1.1em;
}

.container .left header nav ul li a:hover .material-symbols-outlined,
.container .left header nav ul li a:hover .title {
    color: #6577ff;
}

.container .upgrade {
    position: relative;
    width: calc(100% - 30px);
    height: 180px;
    background: linear-gradient(145deg, #d488ea, #8389f9);
    border-radius: 20px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    z-index: -1;
    overflow: hidden;
}

.container .upgrade h4 {
    color: #fff;
    font-size: 1.2em;
    font-weight: 400;
    margin-top: 25px;
}

.container .upgrade .upBtn {
    position: relative;
    width: 100%;
    height: 40px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
}

.container .upgrade .upBtn button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    outline: none;
    border: none;
    font-size: 1.2em;
    color: #000;
    font-weight: 500;
    cursor: pointer;
}

.container .right {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.container .right .top {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
}

/* searchBx start */
.container .right .top .searchBx {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.container .right .top .searchBx h2 {
    color: #000;
    font-size: 1.4em;
    cursor: pointer;
}

.container .right .top .searchBx .inputBx {
    position: relative;
    width: 250px;
    height: 40px;
    background: #f8f2fe;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    gap: 10px;
    overflow: hidden;
}

.container .right .top .searchBx .input span {
    color: #999;
    cursor: pointer;
}

.container .right .top .searchBx .inputBx input {
    position: relative;
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    background: transparent;
    margin-right: 10px;
    font-size: 1.2em;
    color: #000;
}

.container .right .top .searchBx .inputBx span.searchClose {
    position: absolute;
    right: 10px;
    cursor: pointer;
    display: none;
}

.container .right .top .user {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.container .right .top .user span {
    color: #000;
    cursor: pointer;
}

.container .right .top .user .userImg {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    cursor: pointer;
}

.container .right .top .user .userImg .material-symbols-outlined {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.container .right .top .user h2 {
    font-size: 1.1em;
    line-height: 18px;
    white-space: nowrap;
    cursor: pointer;
}

.container .right .top .user h2 span {
    color: #999;
    font-size: 0.8em;
}

.container .right .top .user .arrow {
    position: relative;
    width: 40px;
    height: 40px;
    border: 3px solid #999;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .right .top .user .arrow span {
    color: #000;
    font-size: 2em;
    font-weight: 600;
    transition: all .3s ease;
}

.container .right .top .user .arrow:hover span {
    transform: scale(1.2);
}

.container .right .top .user .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    border: 3px solid #999;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 50px;
    display: none;
}

.container .right .top .user .toggle span {
    color: #000;
    font-size: 1.5em;
    font-weight: 900;
    transition: .3s ease, opacity 0s, visibility 0s;
}

.container .right .top .user .toggle:hover span {
    transform: scale(1.1);
}

.container .right .top .user .toggle span:last-child {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
}

.container .right .top .user .toggle.active span:first-child {
    opacity: 0;
    visibility: hidden;
}

.container .right .top .user .toggle.active span:last-child {
    opacity: 1;
    visibility: visible;
}

.container .right main {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
    