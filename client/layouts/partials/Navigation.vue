<template>
<nav class="navbar is-white">
    <div class="container">
        <div class="navbar-brand">
            <nuxt-link :to="{ name : 'index'}"  class="navbar-item">
            Tabtracker
            </nuxt-link>
            <div class="navbar-burger burger" data-target="nav">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="nav" class="navbar-menu">
            <div class="navbar-end">
                <template v-if="authenticated">
                    <div class="navbar-item is-hoverable has-dropdown">
                            <a href="#" class="navbar-link">{{ user.name }}</a>
                        <div class="navbar-dropdown">
                            <a href="#"  class="navbar-item" @click.prevent="logout">Logout</a>
                        </div>
                    </div>

                </template>
                <template v-else>
                    <nuxt-link :to="{ name : 'auth-register'}" class="navbar-item">
                        Register
                    </nuxt-link>
                    <nuxt-link :to="{ name : 'auth-login'}" class="navbar-item">
                        Login
                    </nuxt-link>

                </template>
            </div>
        </div>
    </div>
</nav>
</template>
<script>
export default {
};
</script>
<style>
</style>