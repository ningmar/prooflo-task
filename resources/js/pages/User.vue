<template>
    <div id="user">
        <el-row :gutter="20">
            <el-col :span="6">Users</el-col>

            <el-col :span="2" :offset="16"><el-button type="primary" icon="el-icon-plus" circle
            @click="openFormDialog"></el-button></el-col>
        </el-row>
        <el-container>

<!--            <el-table :data="tableData">-->
<!--                <el-table-column prop="date" label="Date" width="140">-->
<!--                </el-table-column>-->
<!--                <el-table-column prop="name" label="Name" width="120">-->
<!--                </el-table-column>-->
<!--                <el-table-column prop="address" label="Address">-->
<!--                </el-table-column>-->
<!--            </el-table>-->

        </el-container>

        <add-data-dialog
        :form-visible="formDialog"
        @form-cancel="cancelFormDialog"
        @save="submitFormData"
        :title="formData.id?'Edit ':'Add New '+'User'"
        >
            <template slot="body">
                <el-form ref="form" :model="formData" label-width="120px">
                    <el-form-item label="Activity name">
                        <el-input v-model="formData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Activity zone">
                        <el-select v-model="formData.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"></el-option>
                            <el-option label="Zone two" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Activity time">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="formData.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker placeholder="Pick a time" v-model="formData.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Instant delivery">
                        <el-switch v-model="formData.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="Activity type">
                        <el-checkbox-group v-model="formData.type">
                            <el-checkbox label="Online activities" name="type"></el-checkbox>
                            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                            <el-checkbox label="Offline activities" name="type"></el-checkbox>
                            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="Resources">
                        <el-radio-group v-model="formData.resource">
                            <el-radio label="Sponsor"></el-radio>
                            <el-radio label="Venue"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="Activity form">
                        <el-input type="textarea" v-model="formData.desc"></el-input>
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
        mixins:[commonListMixin]
    }
</script>

<style scoped>

</style>