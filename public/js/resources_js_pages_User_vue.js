(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_User_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditBtn",
  props: {
    formVisible: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": "Modal Title"
    }
  },
  methods: {
    cancelForm: function cancelForm() {
      this.$emit('form-cancel');
    },
    save: function save() {
      this.$emit('save');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_comminListMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/comminListMixin */ "./resources/js/mixins/comminListMixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "User",
  mixins: [_mixins_comminListMixin__WEBPACK_IMPORTED_MODULE_0__.commonListMixin]
});

/***/ }),

/***/ "./resources/js/mixins/comminListMixin.js":
/*!************************************************!*\
  !*** ./resources/js/mixins/comminListMixin.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonListMixin": () => (/* binding */ commonListMixin)
/* harmony export */ });
/* harmony import */ var _components_form_AddDataDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/form/AddDataDialog */ "./resources/js/components/form/AddDataDialog.vue");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


var commonListMixin = {
  data: function data() {
    return {
      stateName: "CommonList",
      title: "",
      filterData: {},
      formDialog: false,
      formData: {},
      errors: []
    };
  },
  components: {
    AddDataDialog: _components_form_AddDataDialog__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    all: {
      get: function get() {
        return this.$store.state[this.stateName].all;
      }
    },
    loading: {
      get: function get() {
        return this.$store.state[this.stateName].loading;
      }
    },
    model: {
      get: function get() {
        return this.$store.state[this.stateName].model;
      }
    },
    query: {
      get: function get() {
        return this.$store.state[this.stateName].query;
      },
      set: function set(value) {
        this.$store.commit("".concat(this.stateName, "/setQuery"), value);
      }
    },
    filters: {
      get: function get() {
        return this.$store.state[this.stateName].filters;
      },
      set: function set(value) {
        this.$store.commit("".concat(this.stateName, "/setFilters"), value);
      }
    },
    modelData: {
      get: function get() {
        return {};
      },
      set: function set(value) {
        this.$store.commit("".concat(this.stateName, "/setModelData"), value);
      }
    },
    serverPagination: {
      get: function get() {
        return this.$store.state[this.stateName].serverPagination;
      },
      set: function set(value) {
        this.$store.commit("".concat(this.stateName, "/setServerPagination"), value);
      }
    }
  },
  methods: {
    openFormDialog: function openFormDialog() {
      this.initialData();
      this.formDialog = true;
    },
    cancelFormDialog: function cancelFormDialog() {
      this.formDialog = false;
      this.initialData();
    },
    buildFormData: function buildFormData(formData, data, parentKey) {
      var _this = this;

      if (data && _typeof(data) === "object" && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(function (key) {
          _this.buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
        });
      } else {
        var value = data == null ? "" : data;
        formData.append(parentKey, value);
      }
    },
    fetchPaged: function fetchPaged() {
      this.$store.dispatch("".concat(this.stateName, "/fetchPaged"));
    },
    resetState: function resetState() {
      this.$store.dispatch("".concat(this.stateName, "/resetState"));
    },
    submitFormData: function submitFormData() {
      var _this2 = this;

      var newformagain = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var createFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      this.$refs.formRef.validate().then(function (success) {
        if (success) {
          _this2.modelData = _this2.formData;

          _this2.createData(newformagain, createFunction);
        }
      });
    },
    createData: function createData(newformagain, createFunction) {
      var _this3 = this;

      this.$store.dispatch("".concat(this.stateName, "/store")).then(function (res) {
        _this3.cancelFormDialog();

        _this3.fetchPaged();

        _this3.$q.notify({
          message: _this3.title + _this3.$t("message.created"),
          timeout: 3000,
          color: "positive"
        });

        if (newformagain) {
          createFunction();

          _this3.$refs.formRef.reset();
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this3.errors = error.response.data.errors;
        }

        _this3.$q.notify({
          message: error.response.data.message,
          timeout: 3000,
          color: "negative"
        });
      });
    },
    confirmDelete: function confirmDelete(item) {
      var _this4 = this;

      this.$q.dialog({
        title: this.$t("label.confirm"),
        ok: this.$t("button.ok"),
        cancel: this.$t("button.cancel"),
        message: this.$t("message.delete_title"),
        // cancel: true,
        persistent: true
      }).onOk(function () {
        // this.selected.push(item);
        _this4.$store.dispatch("".concat(_this4.stateName, "/delete"), {
          item: item
        }).then(function (res) {
          _this4.fetchPaged();

          _this4.selected = [];

          _this4.$q.notify({
            message: _this4.title + _this4.$t("message.deleted"),
            timeout: 3000,
            color: "positive"
          });
        })["catch"](function (error) {
          console.error(error);
        });
      }).onCancel(function () {
        console.log(">>>> Cancel");
      });
    },
    initialData: function initialData() {
      this.formData = {};
      this.errors = [];
    }
  }
};

/***/ }),

/***/ "./resources/js/components/form/AddDataDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/form/AddDataDialog.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true& */ "./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true&");
/* harmony import */ var _AddDataDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddDataDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddDataDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "599ed473",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/AddDataDialog.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/User.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/User.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=99948d58&scoped=true& */ "./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/pages/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "99948d58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDataDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/pages/User.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/pages/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddDataDialog_vue_vue_type_template_id_599ed473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_99948d58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=99948d58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/AddDataDialog.vue?vue&type=template&id=599ed473&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "el-dialog",
    {
      attrs: {
        visible: _vm.formVisible,
        "close-on-click-modal": false,
        "show-close": false
      },
      on: {
        "update:visible": function($event) {
          _vm.formVisible = $event
        },
        close: _vm.cancelForm
      }
    },
    [
      _c("span", { attrs: { slot: "title" }, slot: "title" }, [
        _vm._v("\n        " + _vm._s(_vm.title) + "\n    ")
      ]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm._t("body"),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "span",
        {
          staticClass: "dialog-footer",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c("el-button", { on: { click: _vm.cancelForm } }, [
            _vm._v("Cancel")
          ]),
          _vm._v(" "),
          _c(
            "el-button",
            { attrs: { type: "primary" }, on: { click: _vm.save } },
            [_vm._v("Save")]
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/User.vue?vue&type=template&id=99948d58&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "user" } },
    [
      _c(
        "el-row",
        { attrs: { gutter: 20 } },
        [
          _c("el-col", { attrs: { span: 6 } }, [_vm._v("Users")]),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { span: 2, offset: 16 } },
            [
              _c("el-button", {
                attrs: { type: "primary", icon: "el-icon-plus", circle: "" },
                on: { click: _vm.openFormDialog }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("el-container"),
      _vm._v(" "),
      _c(
        "add-data-dialog",
        {
          attrs: {
            "form-visible": _vm.formDialog,
            title: _vm.formData.id ? "Edit " : "Add New " + "User"
          },
          on: { "form-cancel": _vm.cancelFormDialog, save: _vm.submitFormData }
        },
        [
          _c(
            "template",
            { slot: "body" },
            [
              _c(
                "el-form",
                {
                  ref: "form",
                  attrs: { model: _vm.formData, "label-width": "120px" }
                },
                [
                  _c(
                    "el-form-item",
                    { attrs: { label: "Activity name" } },
                    [
                      _c("el-input", {
                        model: {
                          value: _vm.formData.name,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "name", $$v)
                          },
                          expression: "formData.name"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Activity zone" } },
                    [
                      _c(
                        "el-select",
                        {
                          attrs: { placeholder: "please select your zone" },
                          model: {
                            value: _vm.formData.region,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "region", $$v)
                            },
                            expression: "formData.region"
                          }
                        },
                        [
                          _c("el-option", {
                            attrs: { label: "Zone one", value: "shanghai" }
                          }),
                          _vm._v(" "),
                          _c("el-option", {
                            attrs: { label: "Zone two", value: "beijing" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Activity time" } },
                    [
                      _c(
                        "el-col",
                        { attrs: { span: 11 } },
                        [
                          _c("el-date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: { type: "date", placeholder: "Pick a date" },
                            model: {
                              value: _vm.formData.date1,
                              callback: function($$v) {
                                _vm.$set(_vm.formData, "date1", $$v)
                              },
                              expression: "formData.date1"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { staticClass: "line", attrs: { span: 2 } },
                        [_vm._v("-")]
                      ),
                      _vm._v(" "),
                      _c(
                        "el-col",
                        { attrs: { span: 11 } },
                        [
                          _c("el-time-picker", {
                            staticStyle: { width: "100%" },
                            attrs: { placeholder: "Pick a time" },
                            model: {
                              value: _vm.formData.date2,
                              callback: function($$v) {
                                _vm.$set(_vm.formData, "date2", $$v)
                              },
                              expression: "formData.date2"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Instant delivery" } },
                    [
                      _c("el-switch", {
                        model: {
                          value: _vm.formData.delivery,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "delivery", $$v)
                          },
                          expression: "formData.delivery"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Activity type" } },
                    [
                      _c(
                        "el-checkbox-group",
                        {
                          model: {
                            value: _vm.formData.type,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "type", $$v)
                            },
                            expression: "formData.type"
                          }
                        },
                        [
                          _c("el-checkbox", {
                            attrs: { label: "Online activities", name: "type" }
                          }),
                          _vm._v(" "),
                          _c("el-checkbox", {
                            attrs: {
                              label: "Promotion activities",
                              name: "type"
                            }
                          }),
                          _vm._v(" "),
                          _c("el-checkbox", {
                            attrs: { label: "Offline activities", name: "type" }
                          }),
                          _vm._v(" "),
                          _c("el-checkbox", {
                            attrs: {
                              label: "Simple brand exposure",
                              name: "type"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Resources" } },
                    [
                      _c(
                        "el-radio-group",
                        {
                          model: {
                            value: _vm.formData.resource,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "resource", $$v)
                            },
                            expression: "formData.resource"
                          }
                        },
                        [
                          _c("el-radio", { attrs: { label: "Sponsor" } }),
                          _vm._v(" "),
                          _c("el-radio", { attrs: { label: "Venue" } })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "el-form-item",
                    { attrs: { label: "Activity form" } },
                    [
                      _c("el-input", {
                        attrs: { type: "textarea" },
                        model: {
                          value: _vm.formData.desc,
                          callback: function($$v) {
                            _vm.$set(_vm.formData, "desc", $$v)
                          },
                          expression: "formData.desc"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);