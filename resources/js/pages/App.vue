<template>
    <div>

        <el-container style="height:100%; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246); height:900px">

                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        background-color="#B3C0D1"
                >

                    <div v-for="(menu,i) in menu_lists" :key="i">
                        <el-menu-item :index="(i+1).toString()" v-if="!menu.sub_lists" @click="routeTo(menu.route)">
                            <i :class="menu.icon"></i>
                            <span>{{menu.label}}</span>
                        </el-menu-item>
                        <el-submenu :index="(i+1).toString()" v-else>
                        <template slot="title">
                            <i :class="menu.icon"></i>
                            <span>{{menu.label}}</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item :index="(i+1)+'-'+(sub_idx+1)" v-for="(item,sub_idx) in menu.sub_lists" @click="routeTo(item.route)" :key="sub_idx">
                                <i :class="item.icon"></i>
                                {{item.label}}
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </div>
                </el-menu>

            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>Profile</el-dropdown-item>
                            <el-dropdown-item>Settings</el-dropdown-item>
                            <el-dropdown-item>Log out</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>John Doe</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

    </div>
</template>

<script>

    export default {
        name: "App",
        data() {
            return {
                menu_lists: [
                    {
                        label: "Dashboard",
                        icon: "el-icon-menu",
                        route:"Dashboard"
                    },
                    {
                        label: "User Management",
                        icon: "el-icon-location",
                        sub_lists :[{
                            label: "User",
                            icon: "el-icon-user",
                            route:"User",
                        },]
                    },
                ]
            }
        },
        mounted() {

        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            routeTo(route_name) {
                this.$router.push({name: route_name});
            }
        }

    }
</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.15.3/lib/theme-chalk/index.css");

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }


</style>