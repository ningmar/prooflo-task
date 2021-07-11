import AddDataDialog from "../components/form/AddDataDialog";


export const commonListMixin = {
    data() {
        return {

            stateName: "CommonList",
            title: "",
            filterData: {},
            formDialog: false,
            formData: {},
            errors: [],
        };
    },
    components: {
        AddDataDialog,
    },
    computed: {
        all: {
            get() {
                return this.$store.state[this.stateName].all;
            }
        },
        loading: {
            get() {
                return this.$store.state[this.stateName].loading;
            }
        },
        model: {
            get() {
                return this.$store.state[this.stateName].model;
            }
        },
        query: {
            get() {
                return this.$store.state[this.stateName].query;
            },
            set(value) {
                this.$store.commit(`${this.stateName}/setQuery`, value);
            }
        },

        modelData: {
            get() {
                return {};
            },
            set(value) {
                this.$store.commit(`${this.stateName}/setModelData`, value);
            }
        },
        serverPagination: {
            get() {
                return this.$store.state[this.stateName].serverPagination;
            },
            set(value) {
                this.$store.commit(`${this.stateName}/setServerPagination`, value);
            }
        },

    },
    methods: {

        openFormDialog() {
            this.initialData();
            this.formDialog = true;
        },

        cancelFormDialog() {
            this.formDialog = false;
            this.initialData();
        },
        openEditFormDialog(item) {
            this.formData = item;
            this.formDialog = true;
        },
        buildFormData(formData, data, parentKey) {
            if (
                data &&
                typeof data === "object" &&
                !(data instanceof Date) &&
                !(data instanceof File)
            ) {
                Object.keys(data).forEach(key => {
                    this.buildFormData(
                        formData,
                        data[key],
                        parentKey ? `${parentKey}[${key}]` : key
                    );
                });
            } else {
                const value = data == null ? "" : data;

                formData.append(parentKey, value);
            }
        },
        fetchPaged() {
            this.$store.dispatch(`${this.stateName}/fetchPaged`);
        },
        resetState() {
            this.$store.dispatch(`${this.stateName}/resetState`);
        },

        submitFormData() {
            this.errors = [];
            this.$refs.formRef.validate((valid) => {
                if (valid) {
                    this.modelData = this.formData;

                    this.createData();
                }
                else {
                    return false;
                }
            });
        },
        createData() {
            this.$store
                .dispatch(`${this.stateName}/create`)
                .then(res => {
                    this.cancelFormDialog();
                    this.fetchPaged();
                    this.$notify({
                        title: 'Success',
                        message: res.data.message,
                        type: 'success'
                    });
                })
                .catch(error => {

                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;

                    }
                    this.$notify({
                        title: 'Error',
                        message: error.response.data.message,
                        type: 'error'
                    });
                });
        },

        confirmDelete(item) {

            this.$confirm('This will permanently delete the data. Continue?', 'Warning', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                // this.selected.push(item);
                this.$store
                    .dispatch(`${this.stateName}/delete`, {item})
                    .then(res => {
                        this.fetchPaged();
                        this.$notify({
                            title: 'Success',
                            message: res.data.message,
                            type: 'success'
                        });
                    })
                    .catch(error => {
                        this.$notify({
                            title: 'Error',
                            message: error.response.data.message,
                            type: 'error'
                        });
                    });
            }).catch(() => {
                console.log(">>>> Cancel");
            });
        },



        initialData() {
            this.formData = {};
            this.errors = [];
        },
    }
};
