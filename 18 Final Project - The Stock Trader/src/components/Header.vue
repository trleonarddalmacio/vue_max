<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                    class="nav-item"
                    to="/portfolio" activeClass="active">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link
                    class="nav-item"
                    to="/stocks" activeClass="active">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>
