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
        filters: {
            get() {
                return this.$store.state[this.stateName].filters;
            },
            set(value) {
                this.$store.commit(`${this.stateName}/setFilters`, value);
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

        submitFormData(newformagain = false, createFunction = () => {
        }) {
            this.$refs.formRef.validate().then(success => {
                if (success) {
                    this.modelData = this.formData;

                    this.createData(newformagain, createFunction);
                }
            });
        },
        createData(newformagain, createFunction) {
            this.$store
                .dispatch(`${this.stateName}/store`)
                .then(res => {
                    this.cancelFormDialog();
                    this.fetchPaged();
                    this.$q.notify({
                        message: this.title + this.$t("message.created"),
                        timeout: 3000,
                        color: "positive"
                    });
                    if (newformagain) {
                        createFunction();
                        this.$refs.formRef.reset();
                    }
                })
                .catch(error => {

                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }

                    this.$q.notify({
                        message: error.response.data.message,
                        timeout: 3000,
                        color: "negative"
                    });

                });
        },

        confirmDelete(item) {
            this.$q
                .dialog({
                    title: this.$t("label.confirm"),
                    ok: this.$t("button.ok"),
                    cancel: this.$t("button.cancel"),
                    message: this.$t("message.delete_title"),
                    // cancel: true,
                    persistent: true
                })
                .onOk(() => {
                    // this.selected.push(item);
                    this.$store
                        .dispatch(`${this.stateName}/delete`, {item: item})
                        .then(res => {
                            this.fetchPaged();
                            this.selected = [];
                            this.$q.notify({
                                message: this.title + this.$t("message.deleted"),
                                timeout: 3000,
                                color: "positive"
                            });
                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
                .onCancel(() => {
                    console.log(">>>> Cancel");
                });
        },



        initialData() {
            this.formData = {};
            this.errors = [];
        },
    }
};
