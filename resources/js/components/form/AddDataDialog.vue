<template>

    <el-dialog :visible.sync="formVisible" @close="cancelForm"
               :close-on-click-modal="false"
               :show-close="false"
    >
        <span slot="title">
            {{ title }}
        </span>
        <hr>
        <slot name="body"></slot>
        <hr>
        <span slot="footer" class="dialog-footer">
            <el-button @click="cancelForm">Cancel</el-button>
            <el-button type="primary" @click="save">Save</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "EditBtn",
        props:{
            formVisible:{
                type: Boolean,
                default: false
            },
            title: {
                type:String,
                default: "Modal Title"
            }
        },
        methods: {
            cancelForm(){
                this.$emit('form-cancel');
            },
            save() {
                this.$emit('save');
            }
        }
    }
</script>

<style scoped>

</style>