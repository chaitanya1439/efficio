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
                                <a href="/home">
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
                                <a href="#">
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

                <div class="vel">
                    <ul
                        style="float: left;justify-content: center;align-items: flex-start;position: relative;flex-direction: column;display: flex;list-style: none;text-decoration: none;padding: 10px;background-color: rgba(255, 255, 255, 1);border-radius: 20px;box-shadow: rgba(255, 255, 255, 0.5) 35px 35px 68px 0px, inset rgba(255, 255, 255, 0.6) -8px -8px 16px 0px, inset rgb(255, 255, 255) 0px 11px 28px 0px;">
                        <li style="width: 250px;">
                            <a href="#" style="float: left;"><span class="material-symbols-outlined" style="color: gray;">
                                    person
                                </span><span class="hai">Account</span></a>
                        </li>
                        <li style="width: 250px;"><a href="#" style="float: left;"><span class="material-symbols-outlined"
                                    style="color: gray;">
                                    verified_user
                                </span><span class="hai">Privacy</span></a></li>
                        <li style="width: 250px;"><a href="#" style="float: left;"><span class="material-symbols-outlined"
                                    style="color: gray;">
                                    notifications
                                </span><span class="hai">Notification</span></a></li>
                        <li style="width: 250px;"><a href="#" style="float: left;"><span class="material-symbols-outlined"
                                    style="color: gray;">
                                    language
                                </span><span class="hai">App Language</span></a></li>
                        <li style="width: 250px;"><a href="#" style="float: left;">
                                <span class="material-symbols-outlined" style="color: gray;">
                                    help
                                </span><span class="hai">Help</span></a></li>
                        <li style="width: 250px;"><a v-on:click="logout" href="#" style="float: left;">
                                <span class="material-symbols-outlined" style="color: gray;">
                                    logout
                                </span><span class="hai">Log Out</span></a></li>

                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'settings',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'login' })
        }
    },
    mounted() {
        let usr = localStorage.getItem('usr-info');
        this.first_name = JSON.parse(usr).first_name;
        if (!usr) {
            this.$router.push({ name: 'signup' })
        }
        console.warn(this.$route.params.id)

    },
}
</script>
<style>
.hai {
    text-decoration: none;
    align-items: center;
    list-style: none;
    color: gray;
}</style>