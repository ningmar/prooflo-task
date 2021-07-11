<template>
    <div id="user">
        <el-row :gutter="20">
            <el-col :span="6">Users</el-col>

            <el-col :span="2" :offset="16">

                <el-tooltip content="Add New User" placement="bottom">
                    <el-button type="primary" icon="el-icon-plus" circle @click="openFormDialog">
                    </el-button>
                </el-tooltip>
            </el-col>
        </el-row>
        <el-container>

            <el-table :data="all">
                <el-table-column prop="name" label="Full Name" width="140">
                </el-table-column>
                <el-table-column prop="email" label="Email" width="120">
                </el-table-column>
                <el-table-column prop="mobile_number" label="Mobile">
                </el-table-column>
                <el-table-column prop="gender" label="Gender">
                </el-table-column>
                <el-table-column prop="dob" label="Date of Birth">
                </el-table-column>
                <el-table-column prop="dob" label="Date of Birth">
                </el-table-column>

                <el-table-column
                label="Actions">
                    <template slot-scope="scope">

                        <el-tooltip content="Edit User" placement="bottom">
                        <el-button icon="el-icon-edit" circle
                            @click="openEditFormDialog(scope.row)"
                        ></el-button>
                        </el-tooltip>
                        <el-tooltip content="Delete User" placement="bottom">
                        <el-button icon="el-icon-delete" circle
                            @click="confirmDelete(scope.row.id)"
                        ></el-button>
                        </el-tooltip>
<!--                        <el-button-->
<!--                                size="mini"-->
<!--                                type="danger"-->
<!--                                @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
                    </template>
                </el-table-column>
<!--                <span slot="append">-->
<!--                    <el-button>Prev</el-button>-->
<!--                    <el-button>Next</el-button>-->
<!--                </span>-->
            </el-table>

        </el-container>

        <add-data-dialog
        :form-visible="formDialog"
        @form-cancel="cancelFormDialog"
        @save="submitFormData"
        :title="(formData.id?'Edit ':'Add New ')+'User'"
        >
            <template slot="body">

                <div v-if="errors">
                <el-alert
                        v-for="(error,i) in errors"
                        :key="i"
                        :title="error[0]"
                        type="error"
                        show-icon>
                </el-alert>
                </div>
                <el-form ref="formRef" :model="formData"  :rules="rules" label-width="140px">
                    <el-form-item label="Full name *">
                        <el-input v-model="formData.name"></el-input>
                    </el-form-item>

                    <el-form-item label="Email *">
                        <el-input v-model="formData.email" type="email"></el-input>
                    </el-form-item>
                    <el-form-item label="Mobile Number *">
                        <el-input v-model="formData.mobile_number" type="number"></el-input>
                    </el-form-item>


                    <el-form-item label="Date of Birth *">
                            <el-date-picker type="date" placeholder="Pick a date" format="yyyy-MM-dd"
                                            v-model="formData.dob" style="width: 100%;"></el-date-picker>
                    </el-form-item>

                    <el-form-item label="Gender *">
                        <el-select v-model="formData.gender" placeholder="Select">
                            <el-option
                                    v-for="item in genders"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="Password *">
                        <el-input placeholder="Please input password" v-model="formData.password" show-password></el-input>
                    </el-form-item>
                </el-form>
            </template>
        </add-data-dialog>
    </div>
</template>

<script>
    import {commonListMixin} from "../mixins/comminListMixin";

    export default {
        name: "User",
        data() {
            return {

                genders: [{
                    label: 'Male',
                    value:'MALE'
                },{
                    label: 'Female',
                    value:'FEMALE'
                },{
                    label: 'Other',
                    value:'OTHER'
                }],

                pagination: {
                    itemsPerPage: 10,
                    sortBy: ['created_at'],
                    sortDesc: ['true']
                },
                rules: {
                    name: [
                        { required: true, message: 'Please input Activity name', trigger: 'blur' },
                        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'Please enter Email', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please enter password', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: 'Please pick a gender', trigger: 'change' }
                    ],
                    dob: [
                        { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
                    ],

                }
            }
        },
        mixins:[commonListMixin],

        mounted() {
            this.$store.commit("CommonList/setModel", 'users');
            this.fetchPaged();
        }
    }
</script>

<style scoped>

</style>