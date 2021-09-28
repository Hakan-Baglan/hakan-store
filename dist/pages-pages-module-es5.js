function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["ngx-about"]],
      decls: 2,
      vars: 0,
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/add-product/add-product.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/add-product/add-product.component.ts ***!
    \************************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppPagesAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/pages/services/product.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var AddProductComponent =
    /*#__PURE__*/
    function () {
      function AddProductComponent(productService, fb) {
        _classCallCheck(this, AddProductComponent);

        this.productService = productService;
        this.fb = fb;
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            image: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            content: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "postProduct",
        value: function postProduct() {
          if (this.form.invalid) {
            this.form.markAllAsTouched();
          }

          this.productService.postProduct(this.form.value).subscribe(function (post) {
            alert('Kayıt Başarılı');
          });
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ɵfac = function AddProductComponent_Factory(t) {
      return new (t || AddProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    AddProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddProductComponent,
      selectors: [["ngx-add-product"]],
      decls: 15,
      vars: 1,
      consts: [[3, "formGroup"], [1, "my-5"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Foto\u011Fraf", "formControlName", "image", "shape", "round"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Ba\u015Fl\u0131k", "formControlName", "title", "shape", "round"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "i\xE7erik", "formControlName", "content", "shape", "round"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Fiyat", "formControlName", "price", "shape", "round"], [1, "float-right"], ["type", "submit", "status", "success", "nbButton", "", 3, "click"]],
      template: function AddProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \xDCr\xFCn Ekle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProductComponent_Template_button_click_13_listener() {
            return ctx.postProduct();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \xDCr\xFCn\xFC Ekle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-add-product',
          templateUrl: './add-product.component.html',
          styleUrls: ['./add-product.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/blog/blog.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/blog/blog.component.ts ***!
    \**********************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppPagesBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["ngx-blog"]],
      decls: 2,
      vars: 0,
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/category/category.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/category/category.component.ts ***!
    \******************************************************/

  /*! exports provided: CategoryComponent */

  /***/
  function srcAppPagesCategoryCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryComponent", function () {
      return CategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/category.service */
    "./src/app/pages/services/category.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CategoryComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", item_r1, "\n");
      }
    }

    var CategoryComponent =
    /*#__PURE__*/
    function () {
      function CategoryComponent(categoryService) {
        var _this = this;

        _classCallCheck(this, CategoryComponent);

        this.categoryService = categoryService;
        categoryService.getcategory().subscribe(function (res) {
          _this.categories = res;
        });
      }

      _createClass(CategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoryComponent;
    }();

    CategoryComponent.ɵfac = function CategoryComponent_Factory(t) {
      return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]));
    };

    CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryComponent,
      selectors: [["ngx-category"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function CategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-category',
          templateUrl: './category.component.html',
          styleUrls: ['./category.component.scss']
        }]
      }], function () {
        return [{
          type: _services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["ngx-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/pages/services/product.service.ts");
    /* harmony import */


    var _services_shop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shop.service */
    "./src/app/pages/services/shop.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    function DashboardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_10_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var product_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.adToShop(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xDCr\xFCn\xFC \u0130ncele");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 3, product_r1.price, "\u20BA "));
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(productService, router, shopService, authService) {
        _classCallCheck(this, DashboardComponent);

        this.productService = productService;
        this.router = router;
        this.shopService = shopService;
        this.authService = authService;
        this.filterText = "";
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getLimitProduct();
        }
      }, {
        key: "getLimitProduct",
        value: function getLimitProduct() {
          var _this2 = this;

          this.productService.productLimit().subscribe(function (res) {
            _this2.products = res;
          });
        }
      }, {
        key: "adToShop",
        value: function adToShop(item) {
          this.shopService.add(item);
          this.router.navigate(['pages', 'product', item.id]);
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          return this.router.navigateByUrl("pages/addproduct");
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["ngx-dashboard"]],
      decls: 11,
      vars: 1,
      consts: [[1, "menu"], [1, "row"], [1, "container"], [1, "row", "justify-content-center"], ["class", "card d-flex mx-3", "style", "width: 249px;", 4, "ngFor", "ngForOf"], [1, "card", "d-flex", "mx-3", 2, "width", "249px"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "pb-3"], [1, "card-title"], [1, "card-text"], ["nbButton", "", "fullWidth", "", "status", "success", 2, "margin-bottom", "0px", 3, "click"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Store.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " En sevdi\u011Finiz \xFCr\xFCnleri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sat\u0131n alman\u0131n en iyi yolu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 10, 6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["@charset \"UTF-8\";\n.menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 550px;\n  background-color: rgba(236, 236, 235, 0.49);\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 74px;\n  padding-left: 131px;\n  font-size: xx-large;\n  color: #8a8c8c;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: black;\n}\n.aa[_ngcontent-%COMP%] {\n  padding-top: 74px;\n}\n.card[_ngcontent-%COMP%] {\n  align-items: center;\n  margin-top: 100px;\n  box-shadow: 0px 0px 5px 0px #524b49;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 14px;\n  width: 10rem;\n  height: 150px;\n}\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  padding: 10px;\n  max-width: 230px;\n  overflow: hidden;\n  \n  white-space: nowrap;\n  \n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7QURFSjtBQ0FBO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBREdKO0FDRkk7RUFDSSxZQUFBO0FESVI7QUNEQTtFQUNJLGlCQUFBO0FESUo7QUNEQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBRElKO0FDRkk7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FESVI7QUNGSTtFQUNJLGFBQUE7RUFDRSxnQkFBQTtFQUNGLGdCQUFBO0VBQWtCLG9CQUFBO0VBQ2xCLG1CQUFBO0VBQXFCLHdCQUFBO0VBQ3JCLHVCQUFBO0FETVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm1lbnUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzUsIDAuNDkpO1xufVxuXG4uY29udGFpbmVyIGgyIHtcbiAgcGFkZGluZy10b3A6IDc0cHg7XG4gIHBhZGRpbmctbGVmdDogMTMxcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiAjOGE4YzhjO1xufVxuLmNvbnRhaW5lciBoMiBiIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYWEge1xuICBwYWRkaW5nLXRvcDogNzRweDtcbn1cblxuLmNhcmQge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICM1MjRiNDk7XG59XG4uY2FyZCBpbWcge1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuLmNhcmQgaDUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiB0YcWfYW5sYXLEsSBnaXpsZSAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBhbHQgc2F0xLFyYSBoacOnIGlubWUgKi9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59IiwiLm1lbnUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNSAvIDQ5JSk7XHJcbn1cclxuLmNvbnRhaW5lciBoMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzRweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTMxcHg7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgY29sb3I6ICM4YThjOGM7XHJcbiAgICBiIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuLmFhe1xyXG4gICAgcGFkZGluZy10b3A6IDc0cHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjNTI0YjQ5O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDg0cHg7XHJcbiAgICAmIGltZyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICBoNXtcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIHRhxZ9hbmxhcsSxIGdpemxlICovXHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogYWx0IHNhdMSxcmEgaGnDpyBpbm1lICovXHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_shop_service__WEBPACK_IMPORTED_MODULE_4__["ShopService"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _product_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product.pipe */
    "./src/app/pages/dashboard/product.pipe.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _product_pipe__WEBPACK_IMPORTED_MODULE_5__["ProductPipe"]],
        imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbDatepickerModule"]],
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _product_pipe__WEBPACK_IMPORTED_MODULE_5__["ProductPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/product.pipe.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/dashboard/product.pipe.ts ***!
    \*************************************************/

  /*! exports provided: ProductPipe */

  /***/
  function srcAppPagesDashboardProductPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductPipe", function () {
      return ProductPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductPipe =
    /*#__PURE__*/
    function () {
      function ProductPipe() {
        _classCallCheck(this, ProductPipe);
      }

      _createClass(ProductPipe, [{
        key: "transform",
        value: function transform(value, filterText) {
          filterText = filterText ? filterText.toLocaleLowerCase() : null;
          var filtred = filterText ? value.filter(function (p) {
            var _a;

            return (_a = p.title) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(filterText);
          }) : value; // console.log(value, ' - ', filterText);
          // console.log('filtred:', filtred);

          return filtred;
        }
      }]);

      return ProductPipe;
    }();

    ProductPipe.ɵfac = function ProductPipe_Factory(t) {
      return new (t || ProductPipe)();
    };

    ProductPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "product",
      type: ProductPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'product'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/form/form.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/form/form.component.ts ***!
    \**********************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppPagesFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var FormComponent =
    /*#__PURE__*/
    function () {
      function FormComponent(fb, authService) {
        _classCallCheck(this, FormComponent);

        this.fb = fb;
        this.authService = authService;
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            gender: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            companyName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            participationType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            department: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            aboutUs: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "postForm",
        value: function postForm() {
          if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
          }

          this.authService.postForm(this.form.value).subscribe(function (put) {
            console.log('kayıt başarılı-', put);
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.form.get("name");
        }
      }, {
        key: "mail",
        get: function get() {
          return this.form.get("mail");
        }
      }, {
        key: "gender",
        get: function get() {
          return this.form.get("gender");
        }
      }, {
        key: "companyName",
        get: function get() {
          return this.form.get("companyName");
        }
      }, {
        key: "department",
        get: function get() {
          return this.form.get("title");
        }
      }, {
        key: "address",
        get: function get() {
          return this.form.get("address");
        }
      }, {
        key: "participationType",
        get: function get() {
          return this.form.get("participationType");
        }
      }, {
        key: "aboutUs",
        get: function get() {
          return this.form.get("title");
        }
      }, {
        key: "phone",
        get: function get() {
          return this.form.get("phone");
        }
      }, {
        key: "title",
        get: function get() {
          return this.form.get("title");
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ɵfac = function FormComponent_Factory(t) {
      return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormComponent,
      selectors: [["ngx-form"]],
      decls: 74,
      vars: 1,
      consts: [[2, "background-color", "blanchedalmond"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "gappx"], [3, "formGroup"], [1, "form-group"], ["type", "text", "formControlName", "name", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "email", "formControlName", "mail", "shape", "round", 1, "form-control", "w-75", "float-right"], ["formControlName", "gender", "aria-label", ".form-select-sm example", 1, "form-control", "form-select-sm", "w-75", "float-right"], ["selected", ""], ["value", "Erkek"], ["value", "Kad\u0131n"], [2, "background-color", "blanchedalmond", "font-size", "medium", "height", "45px", "margin-left", "10px"], [1, "pl-2", "pt-2"], ["type", "text", "formControlName", "companyName", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "text", "formControlName", "title", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "text", "formControlName", "address", "shape", "round", 1, "form-control", "w-75", "float-right"], ["formControlName", "participationType", "aria-label", ".form-select-sm example", 1, "form-control", "form-select-sm", "w-75", "float-right"], ["type", "text", "formControlName", "phone", "placeholder", "(5xx) xxx xx xx", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "text", "formControlName", "department", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "text", "formControlName", "aboutUs", "shape", "round", 1, "form-control", "w-75", "float-right"], ["type", "submit", 1, "btn", "btn-secondary", "btn-lg", "btn-block", 3, "click"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Ki\u015Fisel Bilgiler - Personal Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0130sim Soyad - Name Surname *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Cinsiyet - Gender *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Belirtmek \u0130stemiyorum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Erkek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Kad\u0131n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kurumsal Bilgiler - Corporate Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Kurum Ad\u0131 / Firma - Company *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "G\xF6rev / Unvan - Title *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Adres - Address *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Kat\u0131l\u0131m Tipi - Participation Type *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\xD6\u011Frenci");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "M\xFChendis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Doktor");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u015E\xF6f\xF6r");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Pilot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Astronot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Telefon - Phone *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Departman - Department *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Bizi nerden duydunuz? How did ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " you hear about us? *");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_button_click_72_listener() {
            return ctx.postForm();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Bigileri Kaydet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.ng-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #10be3b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcZm9ybVxcZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsaUJBQUE7QUNDQTs7QURDQTtFQUNJLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuLm5nLWludmFsaWQ6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigxNiwgMTkwLCA1OSkgIWltcG9ydGFudDtcclxufSIsIi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cblxuLm5nLWludmFsaWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxMGJlM2IgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authService, fb, router) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.fb = fb;
        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.intForm();
        }
      }, {
        key: "intForm",
        value: function intForm() {
          this.form = this.fb.group({
            username: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remember_me: false
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
          }

          this.authService.login(this.form.value).subscribe(function (res) {
            console.log('Login Başarılı.');
            console.log('Login response:', res); // tokeni kaydet
            // kullanıcıyı anasayfaya yönlendir.
            // res.accces_token
            // res['accces_token']

            Object.keys(res).forEach(function (key) {
              localStorage.setItem(key, JSON.stringify(res[key]));
            });

            _this3.authService.getUser().subscribe(function (usr) {
              _this3.authService.user = usr;
              ;
            });

            _this3.router.navigate(['pages', 'anasayfa']);
          });
        }
      }, {
        key: "mapRegister",
        value: function mapRegister() {
          this.router.navigate(['pages', 'register']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ngx-login"]],
      decls: 16,
      vars: 1,
      consts: [[1, "col-6", "container", 3, "formGroup"], [1, "my-3"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Kullan\u0131c\u0131 Ad\u0131", "shape", "round", "formControlName", "username"], ["type", "password", "nbInput", "", "fullWidth", "", "placeholder", "\u015Eifre", "shape", "round", "formControlName", "password"], ["type", "submit", "status", "success", "nbButton", "", 3, "click"], ["type", "button", 2, "color", "blue", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Giri\u015F yap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Giri\u015F Yap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hesab\u0131n yokmu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() {
            return ctx.mapRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Kay\u0131t Ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"]],
      styles: [".ng-touched[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%] {\n  border-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdG91Y2hlZCAubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59IiwiLm5nLXRvdWNoZWQgLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages-menu.ts":
  /*!*************************************!*\
    !*** ./src/app/pages/pages-menu.ts ***!
    \*************************************/

  /*! exports provided: MENU_ITEMS */

  /***/
  function srcAppPagesPagesMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function () {
      return MENU_ITEMS;
    });

    var MENU_ITEMS = [{
      title: 'Anasayfa',
      icon: 'home-outline',
      link: '/pages/anasayfa',
      home: true
    }, {
      title: 'Kategoriler',
      icon: 'layout-outline',
      link: '/pages/kategori',
      home: true
    }, {
      title: 'blok',
      icon: 'pie-chart-outline',
      link: '/pages/blok',
      home: true
    }, {
      title: 'İletişim',
      icon: 'phone-outline',
      link: '/pages/iletisim',
      home: true
    }, {
      title: 'Hakımızda',
      icon: 'people-outline',
      link: '/pages/hakimizda',
      home: true
    }];
    /***/
  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/pages/add-product/add-product.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/pages/shop/shop.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/pages/form/form.component.ts");
    /* harmony import */


    var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../profil/profil.component */
    "./src/app/profil/profil.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/pages/category/category.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/pages/blog/blog.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/pages/product-detail/product-detail.component.ts");

    var routes = [{
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
      children: [{
        path: 'anasayfa',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
      }, {
        path: 'addproduct',
        component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_6__["AddProductComponent"]
      }, {
        path: 'shop',
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_7__["ShopComponent"]
      }, {
        path: 'kategori',
        component: _category_category_component__WEBPACK_IMPORTED_MODULE_10__["CategoryComponent"]
      }, {
        path: 'blok',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_12__["BlogComponent"]
      }, {
        path: 'iletisim',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"]
      }, {
        path: 'hakimizda',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
      }, {
        path: 'product/:id',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailComponent"]
      }, {
        path: 'form',
        component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"]
      }, {
        path: 'profil',
        component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"]
      }, {
        path: '',
        redirectTo: 'anasayfa',
        pathMatch: 'full'
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages-menu */
    "./src/app/pages/pages-menu.ts");
    /* harmony import */


    var _theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@theme/layouts/one-column/one-column.layout */
    "./src/app/@theme/layouts/one-column/one-column.layout.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PagesComponent = function PagesComponent() {
      _classCallCheck(this, PagesComponent);

      this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
    };

    PagesComponent.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)();
    };

    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["ngx-pages"]],
      decls: 3,
      vars: 1,
      consts: [[3, "items"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-one-column-layout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-menu", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menu);
        }
      },
      directives: [_theme_layouts_one_column_one_column_layout__WEBPACK_IMPORTED_MODULE_2__["OneColumnLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: [".nb-theme-default   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@-webkit-keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-corporate   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-material-dark   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.nb-theme-material-light   [_nghost-%COMP%]     router-outlet + * {\n  display: block;\n  -webkit-animation: fade 1s;\n          animation: fade 1s;\n}\n@keyframes fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxfdGhlbWluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXF9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFxjb3JlXFxfZnVuY3Rpb25zLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcX3ZhcmlhbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfbWFwcGluZy5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9yZWdpc3Rlci5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXGNvcmVcXHRoZW1pbmdcXF9pbnN0YWxsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcY29yZVxcdGhlbWluZ1xcX2dldC12YWx1ZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL25vZGVfbW9kdWxlc1xcQG5lYnVsYXJcXHRoZW1lXFxzdHlsZXNcXHRoZW1lc1xcX2RlZmF1bHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9ub2RlX21vZHVsZXNcXEBuZWJ1bGFyXFx0aGVtZVxcc3R5bGVzXFx0aGVtZXNcXF9kYXJrLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29zbWljLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvbm9kZV9tb2R1bGVzXFxAbmVidWxhclxcdGhlbWVcXHN0eWxlc1xcdGhlbWVzXFxfY29ycG9yYXRlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvc3JjXFxhcHBcXEB0aGVtZVxcc3R5bGVzXFxtYXRlcmlhbFxcX21hdGVyaWFsLWRhcmsuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9zcmNcXGFwcFxcQHRoZW1lXFxzdHlsZXNcXG1hdGVyaWFsXFxfbWF0ZXJpYWwtbGlnaHQuc2NzcyIsInNyYy9hcHAvcGFnZXMvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9zcmNcXGFwcFxccGFnZXNcXHBhZ2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUFBO0FBTUE7OztFQUFBO0FDTkE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QUNsTUE7Ozs7RUFBQTtBQ0FBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDRUE7Ozs7RUFBQTtBQ0ZBOzs7O0VBQUE7QUNBQTs7OztFQUFBO0FDQUE7Ozs7RUFBQTtBTkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVNsTUE7Ozs7RUFBQTtBUkFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUWxNQTs7OztFQUFBO0FQQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FPbE1BOzs7O0VBQUE7QU5BQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVVsTUE7Ozs7RUFBQTtBVEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBT2xNQTs7OztFQUFBO0FOQUE7Ozs7RUFBQTtBREFBOzs7O0VBQUE7QUF3S0E7Ozs7RUFBQTtBQTBCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FXbE1BOzs7O0VBQUE7QVZBQTs7OztFQUFBO0FEQUE7Ozs7RUFBQTtBQXdLQTs7OztFQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVlsTUE7Ozs7RUFBQTtBWEFBOzs7O0VBQUE7QURBQTs7OztFQUFBO0FBd0tBOzs7O0VBQUE7QUEwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBS3ZISTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FReEVGO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUN1Z0RKO0FEcmdESTtFQUNFO0lBQ0UsVUFBQTtFQ3VnRE47RURwZ0RJO0lBQ0UsVUFBQTtFQ3NnRE47QUFDRjtBRDdnREk7RUFDRTtJQUNFLFVBQUE7RUN1Z0ROO0VEcGdESTtJQUNFLFVBQUE7RUNzZ0ROO0FBQ0Y7QVR6OENJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVF4RUY7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ3dpREo7QUR0aURJO0VBQ0U7SUFDRSxVQUFBO0VDd2lETjtFRHJpREk7SUFDRSxVQUFBO0VDdWlETjtBQUNGO0FUMStDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FReEVGO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUN5a0RKO0FEdmtESTtFQUNFO0lBQ0UsVUFBQTtFQ3lrRE47RUR0a0RJO0lBQ0UsVUFBQTtFQ3drRE47QUFDRjtBVDNnREk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtBUXhFRjtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0FDMG1ESjtBRHhtREk7RUFDRTtJQUNFLFVBQUE7RUMwbUROO0VEdm1ESTtJQUNFLFVBQUE7RUN5bUROO0FBQ0Y7QVQ1aURJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7QVF4RUY7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQzJvREo7QUR6b0RJO0VBQ0U7SUFDRSxVQUFBO0VDMm9ETjtFRHhvREk7SUFDRSxVQUFBO0VDMG9ETjtBQUNGO0FUN2tESTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0FReEVGO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QUM0cURKO0FEMXFESTtFQUNFO0lBQ0UsVUFBQTtFQzRxRE47RUR6cURJO0lBQ0UsVUFBQTtFQzJxRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG4vKlxuICBEZWNsYXJlIHZhcmlhYmxlcyBiZWZvcmUgbWFraW5nIHRoZW0gZ2xvYmFsLlxuICBkYXJ0LXNhc3MgZG9lc24ndCBhbGxvdyB0byBkZWNsYXJlIHZhcmlhYmxlIHdpdGggIWdsb2JhbC5cbiAqL1xuJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXM6IGZhbHNlICFkZWZhdWx0O1xuJG5iLWVuYWJsZWQtdGhlbWVzOiAoKTtcbiRuYi10aGVtZXM6ICgpO1xuJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogbnVsbDtcbiRuYi10aGVtZS1uYW1lOiAnZGVmYXVsdCc7XG4kbmItdGhlbWU6ICgpO1xuJG5iLXByb2Nlc3NlZC10aGVtZTogKCk7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFkZWZhdWx0O1xuJG5iLXRoZW1lcy1leHBvcnQ6ICgpO1xuXG4vLyBwdWJsaWMgdmFyaWFibGVzXG4kbmItZW5hYmxlLWNzcy1jdXN0b20tcHJvcGVydGllczogZmFsc2UgIWdsb2JhbCAhZGVmYXVsdDtcbiRuYi1lbmFibGVkLXRoZW1lczogKCkgIWdsb2JhbDtcbiRuYi10aGVtZXM6ICgpICFnbG9iYWw7XG5cbi8vIHByaXZhdGUgdmFyaWFibGVzXG4kbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAnbGF6eS1wcm9jZXNzJyAhZ2xvYmFsO1xuJG5iLXRoZW1lLW5hbWU6IG51bGwgIWdsb2JhbDtcbiRuYi10aGVtZTogKCkgIWdsb2JhbDtcbiRuYi1wcm9jZXNzZWQtdGhlbWU6ICgpICFnbG9iYWw7XG4kbmItdGhlbWUtZXhwb3J0LW1vZGU6IGZhbHNlICFnbG9iYWwgIWRlZmF1bHQ7XG4kbmItdGhlbWVzLWV4cG9ydDogKCkgIWdsb2JhbDtcblxuQGltcG9ydCAnY29yZS9taXhpbnMnO1xuQGltcG9ydCAnY29yZS9mdW5jdGlvbnMnO1xuQGltcG9ydCAnY29yZS92YXJpYW50cyc7XG5AaW1wb3J0ICdjb3JlL3RoZW1pbmcvcmVnaXN0ZXInO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2luc3RhbGwnO1xuQGltcG9ydCAnY29yZS90aGVtaW5nL2dldC12YWx1ZSc7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBtaXhpbiBuYi1zY3JvbGxiYXJzKCRmZywgJGJnLCAkc2l6ZSwgJGJvcmRlci1yYWRpdXM6ICRzaXplIC8gMikge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJGZnO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kOiAkYmc7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmVcbiAgLy8gRm9yIEludGVybmV0IEV4cGxvcmVyXG4gIHNjcm9sbGJhci1mYWNlLWNvbG9yOiAkZmc7XG4gIHNjcm9sbGJhci10cmFjay1jb2xvcjogJGJnO1xufVxuXG5AbWl4aW4gbmItaGVhZGluZ3MoJGZyb206IDEsICR0bzogNikge1xuICBAZm9yICRpIGZyb20gJGZyb20gdGhyb3VnaCAkdG8ge1xuICAgIGgjeyRpfSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBuYi1vdXRsaW5lKCRvdXRsaW5lLXdpZHRoLCAkb3V0bGluZS1jb2xvciwgJGluc2V0LXNoYWRvdy1sZW5ndGg6IDApIHtcbiAgJG91dHNldC1zaGFkb3c6IDAgMCAwICRvdXRsaW5lLXdpZHRoICRvdXRsaW5lLWNvbG9yO1xuICBib3gtc2hhZG93OiAkb3V0c2V0LXNoYWRvdztcblxuICBAaWYgKCRpbnNldC1zaGFkb3ctbGVuZ3RoICE9IDApIHtcbiAgICAmOm5vdCg6aG92ZXIpOm5vdCg6YWN0aXZlKSB7XG4gICAgICAkaW5zZXQtc2hhZG93OiBpbnNldCAkaW5zZXQtc2hhZG93LWxlbmd0aCAkb3V0bGluZS1jb2xvcjtcbiAgICAgIGJveC1zaGFkb3c6ICRvdXRzZXQtc2hhZG93LCAkaW5zZXQtc2hhZG93O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUsXG4gICY6aG92ZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjZW50ZXItaG9yaXpvbnRhbC1hYnNvbHV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gIGxlZnQ6IDUwJTtcbn1cblxuQG1peGluIGluc3RhbGwtdGh1bWIoKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci10aHVtYidcbiAgICAnOjotbW96LXJhbmdlLXRodW1iJ1xuICAgICc6Oi1tcy10aHVtYidcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtdHJhY2soKSB7XG4gICR0aHVtYi1zZWxlY3RvcnM6IChcbiAgICAnOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjaydcbiAgICAnOjotbW96LXJhbmdlLXRyYWNrJ1xuICAgICc6Oi1tcy10cmFjaydcbiAgKTtcblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHRodW1iLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGluc3RhbGwtcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eTogMSkge1xuICAkcGxhY2Vob2xkZXItc2VsZWN0b3JzOiAoXG4gICAgJzo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcidcbiAgICAnOjotbW96LXBsYWNlaG9sZGVyJ1xuICAgICc6LW1vei1wbGFjZWhvbGRlcidcbiAgICAnOi1tcy1pbnB1dC1wbGFjZWhvbGRlcidcbiAgKTtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIoJGNvbG9yLCAkZm9udC1zaXplLCAkb3BhY2l0eSk7XG4gIH1cblxuICBAZWFjaCAkc2VsZWN0b3IgaW4gJHBsYWNlaG9sZGVyLXNlbGVjdG9ycyB7XG4gICAgJiN7JHNlbGVjdG9yfSB7XG4gICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOmZvY3VzI3skc2VsZWN0b3J9IHtcbiAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyLWZvY3VzKCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IsICRmb250LXNpemUsICRvcGFjaXR5KSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgb3BhY2l0eTogJG9wYWNpdHk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyLWZvY3VzKCkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuQG1peGluIG5iLWNvbXBvbmVudC1hbmltYXRpb24oJHByb3BlcnRpZXMuLi4pIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4xNXM7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6ICRwcm9wZXJ0aWVzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbn1cblxuQG1peGluIGFuaW1hdGlvbigkYW5pbWF0ZS4uLikge1xuICAkbWF4OiBsZW5ndGgoJGFuaW1hdGUpO1xuICAkYW5pbWF0aW9uczogJyc7XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkbWF4IHtcbiAgICAkYW5pbWF0aW9uczogI3skYW5pbWF0aW9ucyArIG50aCgkYW5pbWF0ZSwgJGkpfTtcblxuICAgIEBpZiAkaSA8ICRtYXgge1xuICAgICAgJGFuaW1hdGlvbnM6ICN7JGFuaW1hdGlvbnMgKyAnLCAnfTtcbiAgICB9XG4gIH1cbiAgLXdlYmtpdC1hbmltYXRpb246ICRhbmltYXRpb25zO1xuICAtbW96LWFuaW1hdGlvbjogICAgJGFuaW1hdGlvbnM7XG4gIC1vLWFuaW1hdGlvbjogICAgICAkYW5pbWF0aW9ucztcbiAgYW5pbWF0aW9uOiAgICAgICAgICRhbmltYXRpb25zO1xufVxuXG5AbWl4aW4ga2V5ZnJhbWVzKCRhbmltYXRpb25OYW1lKSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyAjeyRhbmltYXRpb25OYW1lfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQC1tb3ota2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBALW8ta2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAa2V5ZnJhbWVzICN7JGFuaW1hdGlvbk5hbWV9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgbWl4aW4gZ2VuZXJhdGVzIGtleWZhbWVzLlxuICogQmVjYXVzZSBvZiBhbGwga2V5ZnJhbWVzIGNhbid0IGJlIHNjb3BlZCxcbiAqIHdlIG5lZWQgdG8gcHV0cyB1bmlxdWUgbmFtZSBpbiBlYWNoIGJ0bi1wdWxzZSBjYWxsLlxuICovXG5AbWl4aW4gYnRuLXB1bHNlKCRuYW1lLCAkY29sb3IpIHtcbiAgJi5idG4tcHVsc2Uge1xuICAgIEBpbmNsdWRlIGFuaW1hdGlvbihidG4tI3skbmFtZX0tcHVsc2UgMS41cyBpbmZpbml0ZSk7XG4gIH1cblxuICBAaW5jbHVkZSBrZXlmcmFtZXMoYnRuLSN7JG5hbWV9LXB1bHNlKSB7XG4gICAgMCUge1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIG9wYWNpdHk6IG5iLXRoZW1lKGJ0bi1kaXNhYmxlZC1vcGFjaXR5KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxcmVtIDAgJGNvbG9yO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICBvcGFjaXR5OiBuYi10aGVtZShidG4tZGlzYWJsZWQtb3BhY2l0eSk7XG4gICAgfVxuICB9XG59XG5cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cblxuQG1peGluIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJHNlbGVjdG9yLCAkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gICN7JHNlbGVjdG9yfSAmIHtcbiAgICBAaWYgJHByb3AgIT0gbnVsbCB7XG4gICAgICAjeyRwcm9wfTogJHZhbHVlO1xuICAgIH1cblxuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBuYi1sdHIoJHByb3A6IG51bGwsICR2YWx1ZTogbnVsbCkge1xuICBAaW5jbHVkZSBfcHJlcGVuZC13aXRoLXNlbGVjdG9yKCdbZGlyPWx0cl0nLCAkcHJvcCwgJHZhbHVlKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG5iLXJ0bCgkcHJvcDogbnVsbCwgJHZhbHVlOiBudWxsKSB7XG4gIEBpbmNsdWRlIF9wcmVwZW5kLXdpdGgtc2VsZWN0b3IoJ1tkaXI9cnRsXScsICRwcm9wLCAkdmFsdWUpIHtcbiAgICBAY29udGVudDtcbiAgfTtcbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuLy8vIFNsaWdodGx5IGxpZ2h0ZW4gYSBjb2xvclxuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8gQHBhcmFtIHtDb2xvcn0gJGNvbG9yIC0gY29sb3IgdG8gdGludFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkcGVyY2VudGFnZSAtIHBlcmNlbnRhZ2Ugb2YgYCRjb2xvcmAgaW4gcmV0dXJuZWQgY29sb3Jcbi8vLyBAcmV0dXJuIHtDb2xvcn1cbkBmdW5jdGlvbiB0aW50KCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgod2hpdGUsICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG4vLy8gU2xpZ2h0bHkgZGFya2VuIGEgY29sb3Jcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vIEBwYXJhbSB7Q29sb3J9ICRjb2xvciAtIGNvbG9yIHRvIHNoYWRlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRwZXJjZW50YWdlIC0gcGVyY2VudGFnZSBvZiBgJGNvbG9yYCBpbiByZXR1cm5lZCBjb2xvclxuLy8vIEByZXR1cm4ge0NvbG9yfVxuQGZ1bmN0aW9uIHNoYWRlKCRjb2xvciwgJHBlcmNlbnRhZ2UpIHtcbiAgQHJldHVybiBtaXgoYmxhY2ssICRjb2xvciwgJHBlcmNlbnRhZ2UpO1xufVxuXG5AZnVuY3Rpb24gbWFwLXNldCgkbWFwLCAka2V5LCAkdmFsdWU6IG51bGwpIHtcbiAgJG5ldzogKCRrZXk6ICR2YWx1ZSk7XG4gIEByZXR1cm4gbWFwLW1lcmdlKCRtYXAsICRuZXcpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AZnVuY3Rpb24gbmItZ2V0LXN0YXR1c2VzKCkge1xuICBAcmV0dXJuICdiYXNpYycsICdwcmltYXJ5JywgJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdkYW5nZXInLCAnaW5mbycsICdjb250cm9sJztcbn1cblxuQGZ1bmN0aW9uIG5iLWdldC1zaXplcygpIHtcbiAgQHJldHVybiAndGlueScsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnLCAnZ2lhbnQnO1xufVxuXG5AZnVuY3Rpb24gbmItZ2V0LXNoYXBlcygpIHtcbiAgQHJldHVybiAncmVjdGFuZ2xlJywgJ3NlbWktcm91bmQnLCAncm91bmQnO1xufVxuXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbiRldmEtbWFwcGluZzogKFxuXG4gIC8qIENvbXBvbmVudHMgbWFwcGluZ3MgLSBtYXBzIHRoZW1lIHZhcmlhYmxlcyBvbnRvIGNvbXBvbmVudCB2YXJpYWJsZXMgKi9cblxuICBsaW5rLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgbGluay10ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSxcbiAgbGluay10ZXh0LWZvY3VzLWNvbG9yOiB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3IsXG4gIGxpbmstdGV4dC1ob3Zlci1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuXG4gIGNhcmQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBjYXJkLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNhcmQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNhcmQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2FyZC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2FyZC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgY2FyZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgY2FyZC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhcmQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY2FyZC1wYWRkaW5nOiAxcmVtIDEuNXJlbSxcbiAgY2FyZC1zaGFkb3c6IG5vbmUsXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FyZC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBjYXJkLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG5cbiAgY2FyZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcbiAgY2FyZC1oZWFkZXItdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBjYXJkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYXJkLWhlYWRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuXG4gIGNhcmQtaGVhZGVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FyZC1oZWFkZXItYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FyZC1oZWFkZXItcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2FyZC1oZWFkZXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FyZC1oZWFkZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjYXJkLWhlYWRlci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNhcmQtaGVhZGVyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhcmQtaGVhZGVyLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjYXJkLWhlYWRlci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjYXJkLWhlaWdodC10aW55OiAxMy41cmVtLFxuICBjYXJkLWhlaWdodC1zbWFsbDogMjEuMTg3NXJlbSxcbiAgY2FyZC1oZWlnaHQtbWVkaXVtOiAyOC44NzVyZW0sXG4gIGNhcmQtaGVpZ2h0LWxhcmdlOiAzNi41NjI1cmVtLFxuICBjYXJkLWhlaWdodC1naWFudDogNDQuMjVyZW0sXG4gIGNhcmQtbWFyZ2luLWJvdHRvbTogMS44NzVyZW0sXG5cbiAgY2FyZC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgY2FyZC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGNhcmQtc2Nyb2xsYmFyLXdpZHRoOiBzY3JvbGxiYXItd2lkdGgsXG5cbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBoZWFkZXItaGVpZ2h0OiA0Ljc1cmVtLFxuICBoZWFkZXItcGFkZGluZzogMS4yNXJlbSxcbiAgaGVhZGVyLXNoYWRvdzogc2hhZG93LFxuXG4gIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGZvb3Rlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBmb290ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGZvb3Rlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBmb290ZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGZvb3Rlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBmb290ZXItaGVpZ2h0OiA0LjcyNXJlbSxcbiAgZm9vdGVyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIGZvb3Rlci1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBmb290ZXItZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgZm9vdGVyLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGZvb3Rlci1zaGFkb3c6IHNoYWRvdyxcblxuICBsYXlvdXQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbGF5b3V0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBsYXlvdXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGF5b3V0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBsYXlvdXQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGxheW91dC1taW4taGVpZ2h0OiAxMDB2aCxcbiAgbGF5b3V0LWNvbnRlbnQtd2lkdGg6IDkwMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtbWluLXdpZHRoOiAzMDBweCxcbiAgbGF5b3V0LXdpbmRvdy1tb2RlLW1heC13aWR0aDogMTkyMHB4LFxuICBsYXlvdXQtd2luZG93LW1vZGUtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBsYXlvdXQtd2luZG93LW1vZGUtcGFkZGluZy10b3A6IDQuNzVyZW0sXG4gIGxheW91dC13aW5kb3ctc2hhZG93OiBzaGFkb3csXG4gIGxheW91dC1wYWRkaW5nOiAyLjI1cmVtIDIuMjVyZW0gMC43NXJlbSxcbiAgbGF5b3V0LW1lZGl1bS1wYWRkaW5nOiAxLjVyZW0gMS41cmVtIDAuNXJlbSxcbiAgbGF5b3V0LXNtYWxsLXBhZGRpbmc6IDFyZW0gMXJlbSAwLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBsYXlvdXQtc2Nyb2xsYmFyLWNvbG9yOiBzY3JvbGxiYXItY29sb3IsXG4gIGxheW91dC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2lkZWJhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzaWRlYmFyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzaWRlYmFyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNpZGViYXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNpZGViYXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHNpZGViYXItaGVpZ2h0OiAxMDB2aCxcbiAgc2lkZWJhci13aWR0aDogMTZyZW0sXG4gIHNpZGViYXItd2lkdGgtY29tcGFjdDogMy41cmVtLFxuICBzaWRlYmFyLXBhZGRpbmc6IDEuMjVyZW0sXG4gIHNpZGViYXItaGVhZGVyLWhlaWdodDogMy41cmVtLFxuICBzaWRlYmFyLWZvb3Rlci1oZWlnaHQ6IDMuNXJlbSxcbiAgc2lkZWJhci1zaGFkb3c6IHNoYWRvdyxcbiAgc2lkZWJhci1tZW51LWl0ZW0taGlnaGxpZ2h0LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNpZGViYXItc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3I6IHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBzaWRlYmFyLXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuXG4gIG1lbnUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIG1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIG1lbnUtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBtZW51LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcblxuICBtZW51LWdyb3VwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBtZW51LWl0ZW0tYm9yZGVyLXJhZGl1czogMCxcbiAgbWVudS1pdGVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcblxuICBtZW51LWl0ZW0taG92ZXItYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LWl0ZW0taG92ZXItY3Vyc29yOiBwb2ludGVyLFxuICBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogbWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3IsXG5cbiAgbWVudS1pdGVtLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBtZW51LWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3I6IG1lbnUtaXRlbS1hY3RpdmUtdGV4dC1jb2xvcixcblxuICBtZW51LWl0ZW0taWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBtZW51LWl0ZW0taWNvbi1tYXJnaW46IDAgMC41cmVtIDAgMCxcbiAgbWVudS1pdGVtLWljb24td2lkdGg6IDEuMjVyZW0sXG5cbiAgbWVudS1pdGVtLWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIG1lbnUtaXRlbS1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICBtZW51LWl0ZW0tZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICBtZW51LXN1Ym1lbnUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgbWVudS1zdWJtZW51LW1hcmdpbjogMCxcbiAgbWVudS1zdWJtZW51LXBhZGRpbmc6IDAgMS4yNXJlbSxcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3I6IG1lbnUtc3VibWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItd2lkdGg6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLWJvcmRlci1yYWRpdXM6IDAsXG4gIG1lbnUtc3VibWVudS1pdGVtLXBhZGRpbmc6IG1lbnUtaXRlbS1wYWRkaW5nLFxuXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtYmFja2dyb3VuZC1jb2xvcixcbiAgbWVudS1zdWJtZW51LWl0ZW0taG92ZXItYm9yZGVyLWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ib3JkZXItY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLXRleHQtY29sb3I6IG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWhvdmVyLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogbWVudS1iYWNrZ3JvdW5kLWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS10ZXh0LWNvbG9yOiBtZW51LWl0ZW0tYWN0aXZlLXRleHQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWljb24tYWN0aXZlLWNvbG9yOiBtZW51LWl0ZW0taWNvbi1hY3RpdmUtY29sb3IsXG5cbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci10ZXh0LWNvbG9yOiBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yLFxuICBtZW51LXN1Ym1lbnUtaXRlbS1pY29uLWFjdGl2ZS1ob3Zlci1jb2xvcjogbWVudS1zdWJtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcixcblxuICB0YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICB0YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgdGFic2V0LXRhYi1hY3RpdmUtdW5kZXJsaW5lLWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIHRhYnNldC10YWItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRhYnNldC10YWItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWZvY3VzLXVuZGVybGluZS1jb2xvcjogdGV4dC1wcmltYXJ5LWZvY3VzLWNvbG9yLFxuICB0YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB0YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LXRhYi1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICB0YWJzZXQtdGFiLWRpc2FibGVkLXVuZGVybGluZS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgdGFic2V0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHRhYnNldC1kaXZpZGVyLXN0eWxlOiBkaXZpZGVyLXN0eWxlLFxuICB0YWJzZXQtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcblxuICB0YWJzZXQtY29udGVudC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdGFic2V0LWNvbnRlbnQtcGFkZGluZzogMXJlbSAycmVtLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0YWJzZXQtY29udGVudC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdGFic2V0LWNvbnRlbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHRhYnNldC1jb250ZW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICB0YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICByb3V0ZS10YWJzZXQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC1ib3JkZXItcmFkaXVzOiAwLFxuICByb3V0ZS10YWJzZXQtc2hhZG93OiBub25lLFxuXG4gIHJvdXRlLXRhYnNldC10YWItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJvdXRlLXRhYnNldC10YWItcGFkZGluZzogMXJlbSAycmVtLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbWVkaXVtLWZvbnQtc2l6ZSxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgcm91dGUtdGFic2V0LXRhYi10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIHJvdXRlLXRhYnNldC10YWItdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgcm91dGUtdGFic2V0LXRhYi11bmRlcmxpbmUtd2lkdGg6IDAuMjVyZW0sXG4gIHJvdXRlLXRhYnNldC10YWItdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcm91dGUtdGFic2V0LXRhYi1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICByb3V0ZS10YWJzZXQtdGFiLWFjdGl2ZS11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1mb2N1cy11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXRhYi1ob3Zlci11bmRlcmxpbmUtY29sb3I6IHRleHQtcHJpbWFyeS1ob3Zlci1jb2xvcixcblxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByb3V0ZS10YWJzZXQtdGFiLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJvdXRlLXRhYnNldC10YWItZGlzYWJsZWQtdW5kZXJsaW5lLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICByb3V0ZS10YWJzZXQtZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgcm91dGUtdGFic2V0LWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIHJvdXRlLXRhYnNldC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIHJvdXRlLXRhYnNldC1zY3JvbGxiYXItY29sb3I6IHNjcm9sbGJhci1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgcm91dGUtdGFic2V0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICByb3V0ZS10YWJzZXQtdGFiLXRleHQtaGlkZS1icmVha3BvaW50OiAzNnJlbSxcblxuICB1c2VyLXBpY3R1cmUtYm94LWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICB1c2VyLXBpY3R1cmUtYm94LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTMsXG4gIHVzZXItcGljdHVyZS1ib3gtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHVzZXItaW5pdGlhbHMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1pbml0aWFscy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgdXNlci1uYW1lLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItbmFtZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdXNlci1uYW1lLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB1c2VyLXRpdGxlLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHVzZXItdGl0bGUtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LWZhbWlseSxcbiAgdXNlci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuNXJlbSxcbiAgdXNlci1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuNzVyZW0sXG4gIHVzZXItcm91bmQtYm9yZGVyLXJhZGl1czogNTAlLFxuXG4gIHVzZXItdGlueS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHVzZXItdGlueS13aWR0aDogMS4yNXJlbSxcbiAgdXNlci10aW55LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXRpbnktaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLWZvbnQtc2l6ZSxcbiAgdXNlci10aW55LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXRpbnktdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItdGlueS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWNhcHRpb24tbGluZS1oZWlnaHQsXG5cbiAgdXNlci1zbWFsbC1oZWlnaHQ6IDEuNXJlbSxcbiAgdXNlci1zbWFsbC13aWR0aDogMS41cmVtLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdXNlci1zbWFsbC1uYW1lLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0LFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWNhcHRpb24tZm9udC1zaXplLFxuICB1c2VyLXNtYWxsLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLW1lZGl1bS1oZWlnaHQ6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0td2lkdGg6IDIuNXJlbSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0taW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItbWVkaXVtLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1tZWRpdW0tbmFtZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgdXNlci1tZWRpdW0tdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHVzZXItbWVkaXVtLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcblxuICB1c2VyLWxhcmdlLWhlaWdodDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS13aWR0aDogMy4yNXJlbSxcbiAgdXNlci1sYXJnZS1pbml0aWFscy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWxhcmdlLWluaXRpYWxzLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLW5hbWUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS1uYW1lLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICB1c2VyLWxhcmdlLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZSxcbiAgdXNlci1sYXJnZS10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWxpbmUtaGVpZ2h0LFxuXG4gIHVzZXItZ2lhbnQtaGVpZ2h0OiA0cmVtLFxuICB1c2VyLWdpYW50LXdpZHRoOiA0cmVtLFxuICB1c2VyLWdpYW50LWluaXRpYWxzLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHVzZXItZ2lhbnQtaW5pdGlhbHMtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtbmFtZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB1c2VyLWdpYW50LW5hbWUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHVzZXItZ2lhbnQtdGl0bGUtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgdXNlci1naWFudC10aXRsZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBwb3BvdmVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHBvcG92ZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIHBvcG92ZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgcG9wb3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgcG9wb3Zlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgcG9wb3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcG9wb3Zlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwb3BvdmVyLXNoYWRvdzogc2hhZG93LFxuICBwb3BvdmVyLWFycm93LXNpemU6IDAuNjg3NXJlbSxcbiAgcG9wb3Zlci1wYWRkaW5nOiAwLjc1cmVtIDFyZW0sXG5cbiAgY29udGV4dC1tZW51LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgY29udGV4dC1tZW51LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNvbnRleHQtbWVudS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXdpZHRoOiAwLFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgY29udGV4dC1tZW51LXRleHQtYWxpZ246IGNlbnRlcixcbiAgY29udGV4dC1tZW51LW1pbi13aWR0aDogMTByZW0sXG4gIGNvbnRleHQtbWVudS1tYXgtd2lkdGg6IDE1cmVtLFxuICBjb250ZXh0LW1lbnUtc2hhZG93OiBzaGFkb3csXG5cbiAgYWN0aW9ucy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYWN0aW9ucy1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBhY3Rpb25zLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGFjdGlvbnMtZGl2aWRlci13aWR0aDogZGl2aWRlci13aWR0aCxcbiAgYWN0aW9ucy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGFjdGlvbnMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWN0aW9ucy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWJ1dHRvbi1mb250LWZhbWlseSxcbiAgYWN0aW9ucy10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgYWN0aW9ucy10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG5cbiAgYWN0aW9ucy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBhY3Rpb25zLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYWN0aW9ucy10aW55LWhlaWdodDogMXJlbSxcbiAgYWN0aW9ucy10aW55LWljb24taGVpZ2h0OiBhY3Rpb25zLXRpbnktaGVpZ2h0LFxuICBhY3Rpb25zLXRpbnktcGFkZGluZzogMCAxLjI1cmVtLFxuICBhY3Rpb25zLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBhY3Rpb25zLXNtYWxsLWhlaWdodDogMS41cmVtLFxuICBhY3Rpb25zLXNtYWxsLWljb24taGVpZ2h0OiBhY3Rpb25zLXNtYWxsLWhlaWdodCxcbiAgYWN0aW9ucy1zbWFsbC1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1tZWRpdW0taGVpZ2h0OiAyLjI1cmVtLFxuICBhY3Rpb25zLW1lZGl1bS1pY29uLWhlaWdodDogYWN0aW9ucy1tZWRpdW0taGVpZ2h0LFxuICBhY3Rpb25zLW1lZGl1bS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBhY3Rpb25zLWxhcmdlLWhlaWdodDogMy41cmVtLFxuICBhY3Rpb25zLWxhcmdlLWljb24taGVpZ2h0OiBhY3Rpb25zLWxhcmdlLWhlaWdodCxcbiAgYWN0aW9ucy1sYXJnZS1wYWRkaW5nOiAwIDEuMjVyZW0sXG4gIGFjdGlvbnMtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgYWN0aW9ucy1naWFudC1oZWlnaHQ6IDRyZW0sXG4gIGFjdGlvbnMtZ2lhbnQtaWNvbi1oZWlnaHQ6IGFjdGlvbnMtZ2lhbnQtaGVpZ2h0LFxuICBhY3Rpb25zLWdpYW50LXBhZGRpbmc6IDAgMS4yNXJlbSxcbiAgYWN0aW9ucy1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tZ2lhbnQtZm9udC1zaXplLFxuXG4gIHNlYXJjaC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHNlYXJjaC1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBzZWFyY2gtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgc2VhcmNoLWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNlYXJjaC1leHRyYS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHNlYXJjaC10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWFyY2gtdGV4dC1mb250LWZhbWlseTogdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHksXG4gIHNlYXJjaC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplLFxuICBzZWFyY2gtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTEtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodCxcbiAgc2VhcmNoLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VhcmNoLWluZm8tdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWFyY2gtaW5mby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHNlYXJjaC1pbmZvLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlYXJjaC1pbmZvLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtaGVhZGVyLWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzbWFydC10YWJsZS1oZWFkZXItZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1oZWFkZXItZmc6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWhlYWRlci1iZzogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuXG4gIHNtYXJ0LXRhYmxlLWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIHNtYXJ0LXRhYmxlLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc21hcnQtdGFibGUtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBzbWFydC10YWJsZS1mZzogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmc6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcblxuICBzbWFydC10YWJsZS1iZy1ldmVuOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNtYXJ0LXRhYmxlLWZnLXNlY29uZGFyeTogdGV4dC1iYXNpYy1jb2xvcixcbiAgc21hcnQtdGFibGUtYmctYWN0aXZlOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNtYXJ0LXRhYmxlLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG4gIHNtYXJ0LXRhYmxlLWZpbHRlci1wYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW0sXG4gIHNtYXJ0LXRhYmxlLXNlcGFyYXRvcjogZGl2aWRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcblxuICBzbWFydC10YWJsZS1hY3Rpb24tYWRkLWVkaXQtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1hY3Rpb24tY2FuY2VsLWRlbGV0ZS1ob3Zlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcblxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi10ZXh0LWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtYWRkLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24taG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1hZGQtYnV0dG9uLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBidXR0b24tZmlsbGVkLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3IsXG4gIHNtYXJ0LXRhYmxlLWFkZC1idXR0b24tYWN0aXZlLWJvcmRlci1jb2xvcjogYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3IsXG5cbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtZmFtaWx5OiBidXR0b24tdGV4dC1mb250LWZhbWlseSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWZvbnQtc2l6ZTogYnV0dG9uLW1lZGl1bS10ZXh0LWZvbnQtc2l6ZSxcbiAgc21hcnQtdGFibGUtcGFnaW5nLWxpbmUtaGVpZ2h0OiBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1ib3JkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIHNtYXJ0LXRhYmxlLXBhZ2luZy1mZy1hY3RpdmU6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWJnLWFjdGl2ZTogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXI6IHRyYW5zcGFyZW50LFxuICBzbWFydC10YWJsZS1wYWdpbmctaG92ZXItYm9yZGVyLWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWhvdmVyLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcixcbiAgc21hcnQtdGFibGUtcGFnaW5nLXBhZ2UtdGV4dC1jb2xvcjogYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy1ib3JkZXItY29sb3I6IGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yLFxuICBzbWFydC10YWJsZS1wYWdpbmctcGFnZS1mb2N1cy10ZXh0LWNvbG9yOiBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3IsXG5cbiAgdG9hc3RyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHRvYXN0ci1ib3JkZXItd2lkdGg6IDFweCxcbiAgdG9hc3RyLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHRvYXN0ci1wYWRkaW5nOiAxcmVtLFxuICB0b2FzdHItc2hhZG93OiBzaGFkb3csXG5cbiAgdG9hc3RyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLTItZm9udC1mYW1pbHksXG4gIHRvYXN0ci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtMi1mb250LXNpemUsXG4gIHRvYXN0ci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtMi1saW5lLWhlaWdodCxcbiAgdG9hc3RyLXRpdGxlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHRvYXN0ci10aXRsZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0b2FzdHItdGl0bGUtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICB0b2FzdHItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2FzdHItYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgdG9hc3RyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1pY29uLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9hc3RyLWljb24tYmFzaWMtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuXG4gIHRvYXN0ci1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvYXN0ci1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuXG4gIHRvYXN0ci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvYXN0ci1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24tc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuXG4gIHRvYXN0ci1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHRvYXN0ci1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24taW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuXG4gIHRvYXN0ci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvYXN0ci13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9hc3RyLWljb24td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuXG4gIHRvYXN0ci1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9hc3RyLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvYXN0ci1pY29uLWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvYXN0ci1kZXN0cm95YWJsZS1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICB0b2FzdHItZGVzdHJveWFibGUtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuXG4gIHRvYXN0ci1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9hc3RyLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWljb24tY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHRvYXN0ci1pY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgdG9hc3RyLWRlc3Ryb3lhYmxlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuXG4gIGJ1dHRvbi1jdXJzb3I6IHBvaW50ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBidXR0b24tb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgYnV0dG9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBidXR0b24tdGV4dC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGJ1dHRvbi1kaXNhYmxlZC1jdXJzb3I6IGRlZmF1bHQsXG5cbiAgYnV0dG9uLXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXRpbnktZm9udC1zaXplLFxuICBidXR0b24tdGlueS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tdGlueS1pY29uLXNpemU6IDAuNzVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi10aW55LWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZSxcbiAgYnV0dG9uLXNtYWxsLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLXNtYWxsLWxpbmUtaGVpZ2h0LFxuICBidXR0b24tc21hbGwtaWNvbi1zaXplOiAxcmVtLFxuICBidXR0b24tc21hbGwtaWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLXNtYWxsLWljb24tb2Zmc2V0OiAwLjM3NXJlbSxcblxuICBidXR0b24tbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBidXR0b24tbWVkaXVtLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLXNpemU6IDEuMjVyZW0sXG4gIGJ1dHRvbi1tZWRpdW0taWNvbi12ZXJ0aWNhbC1tYXJnaW46IC0wLjEyNXJlbSxcbiAgYnV0dG9uLW1lZGl1bS1pY29uLW9mZnNldDogMC41cmVtLFxuXG4gIGJ1dHRvbi1sYXJnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tbGFyZ2UtZm9udC1zaXplLFxuICBidXR0b24tbGFyZ2UtdGV4dC1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGJ1dHRvbi1sYXJnZS1pY29uLXNpemU6IDEuNXJlbSxcbiAgYnV0dG9uLWxhcmdlLWljb24tdmVydGljYWwtbWFyZ2luOiAtMC4xMjVyZW0sXG4gIGJ1dHRvbi1sYXJnZS1pY29uLW9mZnNldDogMC43NXJlbSxcblxuICBidXR0b24tZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZSxcbiAgYnV0dG9uLWdpYW50LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBidXR0b24tZ2lhbnQtaWNvbi1zaXplOiAxLjVyZW0sXG4gIGJ1dHRvbi1naWFudC1pY29uLXZlcnRpY2FsLW1hcmdpbjogLTAuMTI1cmVtLFxuICBidXR0b24tZ2lhbnQtaWNvbi1vZmZzZXQ6IDAuNzVyZW0sXG5cbiAgYnV0dG9uLXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBidXR0b24tc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBidXR0b24tcm91bmQtYm9yZGVyLXJhZGl1czogMS41cmVtLFxuXG4gIGJ1dHRvbi1maWxsZWQtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWZpbGxlZC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLWZpbGxlZC10ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlLFxuXG4gIGJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjMxMjVyZW0gMC42MjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuICBidXR0b24tZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXG4gIGJ1dHRvbi1maWxsZWQtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24tb3V0bGluZS1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLW91dGxpbmUtZm9jdXMtaW5zZXQtc2hhZG93LWxlbmd0aDogMCAwIDAgMTAwdm1heCxcblxuICBidXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMzEyNXJlbSAwLjYyNXJlbSxcbiAgYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDEuMTI1cmVtLFxuICBidXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMS4xMjVyZW0sXG4gIGJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWhvdmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktYWN0aXZlLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3ZlcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWhvdmVyLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgYnV0dG9uLW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLW91dGxpbmUtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1pbmZvLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWZvY3VzLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctaG92ZXItdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctYWN0aXZlLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtZGFuZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBidXR0b24tb3V0bGluZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1kYW5nZXItY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cyxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWZvY3VzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtYWN0aXZlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBidXR0b24tb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGJ1dHRvbi1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYm9yZGVyLXN0eWxlOiBzb2xpZCxcbiAgYnV0dG9uLWdob3N0LWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBidXR0b24tZ2hvc3QtdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSxcbiAgYnV0dG9uLWdob3N0LWZvY3VzLWluc2V0LXNoYWRvdy1sZW5ndGg6IDAgMCAwIDEwMHZtYXgsXG5cbiAgYnV0dG9uLWdob3N0LXRpbnktcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtLFxuICBidXR0b24tZ2hvc3Qtc21hbGwtcGFkZGluZzogMC40Mzc1cmVtIDAuODc1cmVtLFxuICBidXR0b24tZ2hvc3QtbWVkaXVtLXBhZGRpbmc6IDAuNjg3NXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWxhcmdlLXBhZGRpbmc6IDAuODEyNXJlbSAxLjEyNXJlbSxcbiAgYnV0dG9uLWdob3N0LWdpYW50LXBhZGRpbmc6IDAuOTM3NXJlbSAxLjM3NXJlbSxcblxuICBidXR0b24tZ2hvc3QtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1mb2N1cy10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtaG92ZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtYmFzaWMtYWN0aXZlLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxuICBidXR0b24tZ2hvc3QtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWhvdmVyLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC01MDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWZvY3VzLXRleHQtY29sb3I6IHRleHQtc3VjY2Vzcy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXN1Y2Nlc3MtY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1zdWNjZXNzLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWdob3N0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWluZm8tY29sb3IsXG4gIGJ1dHRvbi1naG9zdC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8taG92ZXItdGV4dC1jb2xvcjogdGV4dC1pbmZvLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWluZm8tYWN0aXZlLXRleHQtY29sb3I6IHRleHQtaW5mby1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtaW5mby1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZm9jdXMtdGV4dC1jb2xvcjogdGV4dC13YXJuaW5nLWNvbG9yLFxuICBidXR0b24tZ2hvc3Qtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWhvdmVyLXRleHQtY29sb3I6IHRleHQtd2FybmluZy1jb2xvcixcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LXdhcm5pbmctY29sb3IsXG4gIGJ1dHRvbi1naG9zdC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtZGFuZ2VyLWNvbG9yLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24tZ2hvc3QtZGFuZ2VyLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWRhbmdlci1jb2xvcixcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGJ1dHRvbi1naG9zdC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZm9jdXMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24tZ2hvc3QtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWhvdmVyLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWFjdGl2ZS10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJ1dHRvbi1naG9zdC1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWdob3N0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBidXR0b24taGVyby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBidXR0b24taGVyby1ib3JkZXItd2lkdGg6IDAsXG4gIGJ1dHRvbi1oZXJvLXRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UsXG5cbiAgYnV0dG9uLWhlcm8tdGlueS1wYWRkaW5nOiAwLjM3NXJlbSAwLjY4NzVyZW0sXG4gIGJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNXJlbSAwLjkzNzVyZW0sXG4gIGJ1dHRvbi1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjc1cmVtIDEuMTg3NXJlbSxcbiAgYnV0dG9uLWhlcm8tbGFyZ2UtcGFkZGluZzogMC44NzVyZW0gMS4xODc1cmVtLFxuICBidXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDEuNDM3NXJlbSxcblxuICBidXR0b24taGVyby1zaGFkb3c6IDAgMCB0cmFuc3BhcmVudCxcbiAgYnV0dG9uLWhlcm8tdGV4dC1zaGFkb3c6IHNoYWRvdyxcbiAgYnV0dG9uLWhlcm8tYmV2ZWwtc2l6ZTogMCAwIDAgMCxcbiAgYnV0dG9uLWhlcm8tZ2xvdy1zaXplOiAwIDAgMCAwLFxuICBidXR0b24taGVyby1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBidXR0b24taGVyby1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYmV2ZWwtY29sb3I6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1iYXNpYy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBidXR0b24taGVyby1iYXNpYy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTMwMCxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYmV2ZWwtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWdsb3ctY29sb3I6IGNvbG9yLXByaW1hcnktNzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBidXR0b24taGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgYnV0dG9uLWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBidXR0b24taGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBidXR0b24taGVyby1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1iZXZlbC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZ2xvdy1jb2xvcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBidXR0b24taGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1hY3RpdmUtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kaXNhYmxlZCxcbiAgYnV0dG9uLWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWluZm8tdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1pbmZvLWJldmVsLWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1nbG93LWNvbG9yOiBjb2xvci1pbmZvLTcwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxuICBidXR0b24taGVyby1pbmZvLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgYnV0dG9uLWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBidXR0b24taGVyby1pbmZvLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8taW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuICBidXR0b24taGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgYnV0dG9uLWhlcm8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYmV2ZWwtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWdsb3ctY29sb3I6IGNvbG9yLXdhcm5pbmctNzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBidXR0b24taGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgYnV0dG9uLWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBidXR0b24taGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICBidXR0b24taGVyby13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBidXR0b24taGVyby1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBidXR0b24taGVyby1kYW5nZXItYmV2ZWwtY29sb3I6IGNvbG9yLWRhbmdlci02MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1nbG93LWNvbG9yOiBjb2xvci1kYW5nZXItNzAwLFxuICBidXR0b24taGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBidXR0b24taGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci01MDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci0zMDAsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1hY3RpdmUtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBidXR0b24taGVyby1kYW5nZXItYWN0aXZlLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG4gIGJ1dHRvbi1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBidXR0b24taGVyby1jb250cm9sLWJldmVsLWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZ2xvdy1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuICBidXR0b24taGVyby1jb250cm9sLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBidXR0b24taGVyby1jb250cm9sLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBidXR0b24taGVyby1jb250cm9sLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtYWN0aXZlLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxuICBidXR0b24taGVyby1jb250cm9sLWFjdGl2ZS1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgYnV0dG9uLWhlcm8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGJ1dHRvbi1oZXJvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpY29uLWJ1dHRvbi1maWxsZWQtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjY4NzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1maWxsZWQtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZmlsbGVkLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tb3V0bGluZS10aW55LXBhZGRpbmc6IDAuNDM3NXJlbSAwLjMxMjVyZW0sXG4gIGljb24tYnV0dG9uLW91dGxpbmUtc21hbGwtcGFkZGluZzogMC41NjI1cmVtIDAuNDM3NXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjgxMjVyZW0gMC42ODc1cmVtLFxuICBpY29uLWJ1dHRvbi1vdXRsaW5lLWdpYW50LXBhZGRpbmc6IDEuMDYyNXJlbSAwLjkzNzVyZW0sXG5cbiAgaWNvbi1idXR0b24tZ2hvc3QtdGlueS1wYWRkaW5nOiAwLjQzNzVyZW0gMC4zMTI1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1zbWFsbC1wYWRkaW5nOiAwLjU2MjVyZW0gMC40Mzc1cmVtLFxuICBpY29uLWJ1dHRvbi1naG9zdC1tZWRpdW0tcGFkZGluZzogMC42ODc1cmVtIDAuNTYyNXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtbGFyZ2UtcGFkZGluZzogMC44MTI1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24tZ2hvc3QtZ2lhbnQtcGFkZGluZzogMS4wNjI1cmVtIDAuOTM3NXJlbSxcblxuICBpY29uLWJ1dHRvbi1oZXJvLXRpbnktcGFkZGluZzogMC41cmVtIDAuMzc1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLXNtYWxsLXBhZGRpbmc6IDAuNTYyNXJlbSAwLjVyZW0sXG4gIGljb24tYnV0dG9uLWhlcm8tbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMC41NjI1cmVtLFxuICBpY29uLWJ1dHRvbi1oZXJvLWxhcmdlLXBhZGRpbmc6IDAuODc1cmVtIDAuNjg3NXJlbSxcbiAgaWNvbi1idXR0b24taGVyby1naWFudC1wYWRkaW5nOiAxLjA2MjVyZW0gMXJlbSxcblxuICBpbnB1dC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcbiAgaW5wdXQtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgaW5wdXQtb3V0bGluZS13aWR0aDogb3V0bGluZS13aWR0aCxcbiAgaW5wdXQtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGlucHV0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHksXG5cbiAgaW5wdXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtYmFzaWMtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaW5wdXQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBpbnB1dC1zdWNjZXNzLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXN1Y2Nlc3MtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1zdWNjZXNzLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgaW5wdXQtc3VjY2Vzcy1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgaW5wdXQtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgaW5wdXQtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMyxcbiAgaW5wdXQtaW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8taG92ZXItYm9yZGVyLFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBpbnB1dC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBpbnB1dC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgaW5wdXQtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaW5wdXQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgaW5wdXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGlucHV0LWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGlucHV0LWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBpbnB1dC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBpbnB1dC1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgaW5wdXQtZGFuZ2VyLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIGlucHV0LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgaW5wdXQtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgaW5wdXQtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwLFxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDAsXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBpbnB1dC1jb250cm9sLWRpc2FibGVkLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjc1cmVtLFxuICBpbnB1dC1yb3VuZC1ib3JkZXItcmFkaXVzOiAxLjVyZW0sXG5cbiAgaW5wdXQtdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBpbnB1dC10aW55LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC10aW55LXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LXRpbnktcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LXRpbnktcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGlucHV0LXNtYWxsLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcbiAgaW5wdXQtc21hbGwtcGFkZGluZzogMC4xODc1cmVtIDFyZW0sXG4gIGlucHV0LXNtYWxsLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGlucHV0LW1lZGl1bS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1tZWRpdW0tcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgaW5wdXQtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBpbnB1dC1sYXJnZS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgaW5wdXQtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtLFxuICBpbnB1dC1sYXJnZS1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC1zaXplOiB0ZXh0LWhlYWRpbmctNi1mb250LXNpemUsXG4gIGlucHV0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBpbnB1dC1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgaW5wdXQtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIGlucHV0LWdpYW50LXBsYWNlaG9sZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuICBpbnB1dC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcbiAgaW5wdXQtZ2lhbnQtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBjaGVja2JveC1oZWlnaHQ6IDEuMjVyZW0sXG4gIGNoZWNrYm94LXdpZHRoOiAxLjI1cmVtLFxuICBjaGVja2JveC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBjaGVja2JveC1ib3JkZXItd2lkdGg6IDFweCxcbiAgY2hlY2tib3gtYm9yZGVyLXJhZGl1czogM3B4LFxuICBjaGVja2JveC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBjaGVja2JveC1vdXRsaW5lLWNvbG9yOiBvdXRsaW5lLWNvbG9yLFxuICBjaGVja2JveC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIGNoZWNrYm94LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBjaGVja2JveC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIGNoZWNrYm94LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgY2hlY2tib3gtdGV4dC1zcGFjZTogMC42ODc1cmVtLFxuICBjaGVja2JveC1wYWRkaW5nOiAwLFxuICBjaGVja2JveC1mb2N1cy1pbnNldC1zaGFkb3ctbGVuZ3RoOiAwIDAgMCAxMDB2bWF4LFxuXG4gIGNoZWNrYm94LWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtYmFzaWMtaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoZWNrYm94LWJhc2ljLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIGNoZWNrYm94LWJhc2ljLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNoZWNrYm94LWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LWJhc2ljLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1iYXNpYy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgY2hlY2tib3gtcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC1wcmltYXJ5LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgY2hlY2tib3gtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWNoZWNrZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taW5kZXRlcm1pbmF0ZS1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8tZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxuICBjaGVja2JveC1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjaGVja2JveC1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtaW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNoZWNrYm94LWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICBjaGVja2JveC1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWluZm8tZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICBjaGVja2JveC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWluZGV0ZXJtaW5hdGUtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgY2hlY2tib3gtd2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgY2hlY2tib3gtd2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjaGVja2JveC13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgY2hlY2tib3gtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICBjaGVja2JveC13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgY2hlY2tib3gtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1jaGVja2VkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItaW5kZXRlcm1pbmF0ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgY2hlY2tib3gtZGFuZ2VyLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIGNoZWNrYm94LWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtZGFuZ2VyLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBjaGVja2JveC1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgY2hlY2tib3gtZGFuZ2VyLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBjaGVja2JveC1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIGNoZWNrYm94LWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGNoZWNrYm94LWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtY2hlY2tlZC1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1pbmRldGVybWluYXRlLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBjaGVja2JveC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMsXG4gIGNoZWNrYm94LWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2hlY2tib3gtY29udHJvbC1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2hlY2tib3gtY29udHJvbC1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1hY3RpdmUsXG4gIGNoZWNrYm94LWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXIsXG4gIGNoZWNrYm94LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBjaGVja2JveC1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgY2hlY2tib3gtY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIGJhZGdlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGJhZGdlLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBiYWRnZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1idXR0b24tdGlueS1mb250LXNpemUsXG4gIGJhZGdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBiYWRnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBiYWRnZS1wYWRkaW5nOiAwLjI1cmVtIDAuNHJlbSxcblxuICBiYWRnZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGJhZGdlLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGJhZGdlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBiYWRnZS1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2Utc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGJhZGdlLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgYmFkZ2UtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGJhZGdlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBiYWRnZS13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYmFkZ2UtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBiYWRnZS1kYW5nZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBiYWRnZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgYmFkZ2UtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG5cbiAgcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMsXG4gIHByb2dyZXNzLWJhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBwcm9ncmVzcy1iYXItdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS1mb250LWZhbWlseSxcblxuICBwcm9ncmVzcy1iYXItdGlueS1oZWlnaHQ6IDFyZW0sXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLWhlaWdodDogMS4yNXJlbSxcbiAgcHJvZ3Jlc3MtYmFyLXNtYWxsLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLTItZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItc21hbGwtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0LFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLWhlaWdodDogMS4zNzVyZW0sXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHByb2dyZXNzLWJhci1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLWhlaWdodDogMS41cmVtLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBwcm9ncmVzcy1iYXItbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgcHJvZ3Jlc3MtYmFyLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIHByb2dyZXNzLWJhci1naWFudC1oZWlnaHQ6IDEuNzVyZW0sXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIHByb2dyZXNzLWJhci1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBwcm9ncmVzcy1iYXItZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcblxuICBwcm9ncmVzcy1iYXItYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBwcm9ncmVzcy1iYXItYmFzaWMtZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItNCxcbiAgcHJvZ3Jlc3MtYmFyLWJhc2ljLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItaW5mby1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBwcm9ncmVzcy1iYXItd2FybmluZy1maWxsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItd2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgcHJvZ3Jlc3MtYmFyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1kYW5nZXItZmlsbGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBwcm9ncmVzcy1iYXItZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBwcm9ncmVzcy1iYXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLWZpbGxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHByb2dyZXNzLWJhci1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBhbGVydC1ib3R0b20tbWFyZ2luOiAxLjVyZW0sXG4gIGFsZXJ0LXBhZGRpbmc6IDFyZW0gMS4xMjVyZW0sXG4gIGFsZXJ0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBhbGVydC1zY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcjogc2Nyb2xsYmFyLWJhY2tncm91bmQtY29sb3IsXG4gIGFsZXJ0LXNjcm9sbGJhci13aWR0aDogc2Nyb2xsYmFyLXdpZHRoLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFsZXJ0LXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBhbGVydC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGFsZXJ0LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGFsZXJ0LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgYWxlcnQtY2xvc2FibGUtc3RhcnQtcGFkZGluZzogM3JlbSxcblxuICBhbGVydC10aW55LWhlaWdodDogNC41cmVtLFxuICBhbGVydC1zbWFsbC1oZWlnaHQ6IDUuNzVyZW0sXG4gIGFsZXJ0LW1lZGl1bS1oZWlnaHQ6IDdyZW0sXG4gIGFsZXJ0LW1lZGl1bS1wYWRkaW5nOiAxcmVtIDEuMTI1cmVtLFxuICBhbGVydC1sYXJnZS1oZWlnaHQ6IDguMjVyZW0sXG4gIGFsZXJ0LWdpYW50LWhlaWdodDogOS41cmVtLFxuXG4gIGFsZXJ0LWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgYWxlcnQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWxlcnQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGFsZXJ0LXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgYWxlcnQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgYWxlcnQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGFsZXJ0LXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBhbGVydC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGFsZXJ0LWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGFsZXJ0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBhbGVydC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBhbGVydC1hY2NlbnQtYmFzaWMtY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhbGVydC1hY2NlbnQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBhbGVydC1hY2NlbnQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgYWxlcnQtYWNjZW50LWNvbnRyb2wtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcblxuICBhbGVydC1vdXRsaW5lLXdpZHRoOiAxcHgsXG4gIGFsZXJ0LW91dGxpbmUtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgYWxlcnQtb3V0bGluZS1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cy1ib3JkZXIsXG4gIGFsZXJ0LW91dGxpbmUtY29udHJvbC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG5cbiAgY2hhdC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYm9yZGVyOiBub25lLFxuICBjaGF0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoYXQtc2hhZG93OiBzaGFkb3csXG4gIGNoYXQtcGFkZGluZzogMXJlbSAxLjI1cmVtLFxuICBjaGF0LXNjcm9sbGJhci1jb2xvcjogc2Nyb2xsYmFyLWNvbG9yLFxuICBjaGF0LXNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBzY3JvbGxiYXItYmFja2dyb3VuZC1jb2xvcixcbiAgY2hhdC1zY3JvbGxiYXItd2lkdGg6IHNjcm9sbGJhci13aWR0aCxcblxuICBjaGF0LXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGNoYXQtdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGNoYXQtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgY2hhdC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgY2hhdC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjaGF0LWhlYWRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNoYXQtaGVhZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNoYXQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2hhdC10aW55LWhlaWdodDogMTMuNXJlbSxcbiAgY2hhdC1zbWFsbC1oZWlnaHQ6IDIxcmVtLFxuICBjaGF0LW1lZGl1bS1oZWlnaHQ6IDI4LjVyZW0sXG4gIGNoYXQtbGFyZ2UtaGVpZ2h0OiAzNnJlbSxcbiAgY2hhdC1naWFudC1oZWlnaHQ6IDQzLjVyZW0sXG5cbiAgY2hhdC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNoYXQtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2hhdC1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgY2hhdC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgY2hhdC1zdWNjZXNzLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgY2hhdC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgY2hhdC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNoYXQtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2hhdC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgY2hhdC1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcblxuICBjaGF0LWRpdmlkZXItY29sb3I6IGRpdmlkZXItY29sb3IsXG4gIGNoYXQtZGl2aWRlci1zdHlsZTogZGl2aWRlci1zdHlsZSxcbiAgY2hhdC1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuXG4gIGNoYXQtbWVzc2FnZS1iYWNrZ3JvdW5kOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNoYXQtbWVzc2FnZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1yZXBseS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjaGF0LW1lc3NhZ2UtYXZhdGFyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTUwMCxcbiAgY2hhdC1tZXNzYWdlLXNlbmRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIGNoYXQtbWVzc2FnZS1xdW90ZS10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIGNoYXQtbWVzc2FnZS1maWxlLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2hhdC1tZXNzYWdlLWZpbGUtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzcGlubmVyLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBzcGlubmVyLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBzcGlubmVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBzcGlubmVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcblxuICBzcGlubmVyLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1iYXNpYy1jaXJjbGUtZmlsbGVkLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNwaW5uZXItYmFzaWMtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzcGlubmVyLXByaW1hcnktY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzcGlubmVyLWluZm8tY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzcGlubmVyLXN1Y2Nlc3MtY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWZpbGxlZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzcGlubmVyLXdhcm5pbmctY2lyY2xlLWVtcHR5LWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBzcGlubmVyLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIHNwaW5uZXItZGFuZ2VyLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzcGlubmVyLWRhbmdlci1jaXJjbGUtZW1wdHktY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIHNwaW5uZXItY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1maWxsZWQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgc3Bpbm5lci1jb250cm9sLWNpcmNsZS1lbXB0eS1jb2xvcjogdHJhbnNwYXJlbnQsXG5cbiAgc3Bpbm5lci1oZWlnaHQtdGlueTogMXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtc21hbGw6IDEuMjVyZW0sXG4gIHNwaW5uZXItaGVpZ2h0LW1lZGl1bTogMS41cmVtLFxuICBzcGlubmVyLWhlaWdodC1sYXJnZTogMS43NXJlbSxcbiAgc3Bpbm5lci1oZWlnaHQtZ2lhbnQ6IDJyZW0sXG5cbiAgc3RlcHBlci1zdGVwLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC1mYW1pbHk6IHRleHQtcGFyYWdyYXBoLWZvbnQtZmFtaWx5LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc3RlcHBlci1zdGVwLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzdGVwcGVyLXN0ZXAtdGV4dC1saW5lLWhlaWdodDogdGV4dC1wYXJhZ3JhcGgtbGluZS1oZWlnaHQsXG4gIHN0ZXBwZXItc3RlcC1hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcixcbiAgc3RlcHBlci1zdGVwLWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXG5cbiAgc3RlcHBlci1zdGVwLWluZGV4LWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC1ib3JkZXItcmFkaXVzOiA1MCUsXG4gIHN0ZXBwZXItc3RlcC1pbmRleC13aWR0aDogMnJlbSxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBzdGVwcGVyLXN0ZXAtaW5kZXgtY29tcGxldGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc3RlcHBlci1zdGVwLWluZGV4LWNvbXBsZXRlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc3RlcHBlci1jb25uZWN0b3ItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzdGVwcGVyLWNvbm5lY3Rvci1jb21wbGV0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzdGVwcGVyLWhvcml6b250YWwtY29ubmVjdG9yLW1hcmdpbjogMXJlbSxcbiAgc3RlcHBlci12ZXJ0aWNhbC1jb25uZWN0b3ItbWFyZ2luOiAxcmVtLFxuXG4gIHN0ZXBwZXItc3RlcC1jb250ZW50LXBhZGRpbmc6IDEuMjVyZW0sXG5cbiAgYWNjb3JkaW9uLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGFjY29yZGlvbi1wYWRkaW5nOiAxLjI1cmVtLFxuICBhY2NvcmRpb24tc2hhZG93OiBzaGFkb3csXG4gIGFjY29yZGlvbi1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgYWNjb3JkaW9uLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGFjY29yZGlvbi1oZWFkZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgYWNjb3JkaW9uLWhlYWRlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0zLFxuICBhY2NvcmRpb24taGVhZGVyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGFjY29yZGlvbi1oZWFkZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIGFjY29yZGlvbi1pdGVtLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgYWNjb3JkaW9uLWl0ZW0tdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC1zaXplOiB0ZXh0LXBhcmFncmFwaC1mb250LXNpemUsXG4gIGFjY29yZGlvbi1pdGVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBhY2NvcmRpb24taXRlbS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBsaXN0LWl0ZW0tZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgbGlzdC1pdGVtLWRpdmlkZXItc3R5bGU6IGRpdmlkZXItc3R5bGUsXG4gIGxpc3QtaXRlbS1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBsaXN0LWl0ZW0tcGFkZGluZzogMXJlbSxcbiAgbGlzdC1pdGVtLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIGxpc3QtaXRlbS1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG4gIGxpc3QtaXRlbS1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgbGlzdC1pdGVtLWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgbGlzdC1pdGVtLWxpbmUtaGVpZ2h0OiB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci13aWR0aDogMjAuNjI1cmVtLFxuICBjYWxlbmRhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGNhbGVuZGFyLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIGNhbGVuZGFyLWJvcmRlci1zdHlsZTogc29saWQsXG4gIGNhbGVuZGFyLWJvcmRlci13aWR0aDogMC4wNjI1cmVtLFxuICBjYWxlbmRhci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBjYWxlbmRhci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItcGlja2VyLXBhZGRpbmctdG9wOiAwLjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1ib3R0b206IDAuNjI1cmVtLFxuICBjYWxlbmRhci1waWNrZXItcGFkZGluZy1zdGFydDogMC42MjVyZW0sXG4gIGNhbGVuZGFyLXBpY2tlci1wYWRkaW5nLWVuZDogMC42MjVyZW0sXG5cbiAgY2FsZW5kYXItbmF2aWdhdGlvbi10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRleHQtZm9udC1mYW1pbHk6IHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1tZWRpdW0tZm9udC1zaXplLFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1uYXZpZ2F0aW9uLXRpdGxlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLW1lZGl1bS1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItbmF2aWdhdGlvbi1wYWRkaW5nOiAwLjYyNXJlbSAwLjI1cmVtLFxuXG4gIGNhbGVuZGFyLWNlbGwtaW5hY3RpdmUtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIGNhbGVuZGFyLWNlbGwtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBjYWxlbmRhci1jZWxsLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci1ib3JkZXItY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1ob3Zlci10ZXh0LWZvbnQtd2VpZ2h0OiBjYWxlbmRhci10ZXh0LWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci1jZWxsLWhvdmVyLXRleHQtbGluZS1oZWlnaHQ6IGNhbGVuZGFyLXRleHQtbGluZS1oZWlnaHQsXG5cbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtYWN0aXZlLXRleHQtZm9udC1zaXplOiBjYWxlbmRhci10ZXh0LWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1hY3RpdmUtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWZvbnQtc2l6ZTogY2FsZW5kYXItdGV4dC1mb250LXNpemUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktdGV4dC1mb250LXdlaWdodDogY2FsZW5kYXItdGV4dC1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS10ZXh0LWxpbmUtaGVpZ2h0OiBjYWxlbmRhci10ZXh0LWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1ob3Zlci1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1zZWxlY3RlZC1hY3RpdmUtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcblxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgY2FsZW5kYXItY2VsbC10b2RheS1pbi1yYW5nZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWhvdmVyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLWNlbGwtdG9kYXktaW4tcmFuZ2UtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXRvZGF5LWluLXJhbmdlLWFjdGl2ZS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1mb250LXNpemU6IGNhbGVuZGFyLXRleHQtZm9udC1zaXplLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLXRleHQtZm9udC13ZWlnaHQ6IGNhbGVuZGFyLXRleHQtZm9udC13ZWlnaHQsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtdGV4dC1saW5lLWhlaWdodDogY2FsZW5kYXItdGV4dC1saW5lLWhlaWdodCxcbiAgY2FsZW5kYXItY2VsbC1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIGNhbGVuZGFyLWNlbGwtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICBjYWxlbmRhci1jZWxsLXNlbGVjdGVkLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcblxuICBjYWxlbmRhci1kYXktY2VsbC13aWR0aDogMi43NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtaGVpZ2h0OiAyLjc1cmVtLFxuICBjYWxlbmRhci1tb250aC1jZWxsLXdpZHRoOiA0LjgxMjVyZW0sXG4gIGNhbGVuZGFyLW1vbnRoLWNlbGwtaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXllYXItY2VsbC13aWR0aDogY2FsZW5kYXItbW9udGgtY2VsbC13aWR0aCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWhlaWdodDogY2FsZW5kYXItbW9udGgtY2VsbC1oZWlnaHQsXG5cbiAgY2FsZW5kYXItd2Vla2RheS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCxcbiAgY2FsZW5kYXItd2Vla2RheS1kaXZpZGVyLWNvbG9yOiBkaXZpZGVyLWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LWRpdmlkZXItd2lkdGg6IGRpdmlkZXItd2lkdGgsXG4gIGNhbGVuZGFyLXdlZWtkYXktdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgY2FsZW5kYXItd2Vla2RheS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICBjYWxlbmRhci13ZWVrZGF5LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktaG9saWRheS10ZXh0LWNvbG9yOiBjYWxlbmRhci13ZWVrZGF5LXRleHQtY29sb3IsXG4gIGNhbGVuZGFyLXdlZWtkYXktaGVpZ2h0OiBjYWxlbmRhci1kYXktY2VsbC1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtkYXktd2lkdGg6IGNhbGVuZGFyLWRheS1jZWxsLXdpZHRoLFxuXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItYmFja2dyb3VuZDogdHJhbnNwYXJlbnQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItZGl2aWRlci1jb2xvcjogZGl2aWRlci1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci1kaXZpZGVyLXdpZHRoOiBkaXZpZGVyLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS1mb250LXNpemUsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBjYWxlbmRhci13ZWVrbnVtYmVyLWhlaWdodDogY2FsZW5kYXItd2Vla2RheS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItd2lkdGg6IGNhbGVuZGFyLXdlZWtkYXktd2lkdGgsXG5cbiAgY2FsZW5kYXItbGFyZ2Utd2lkdGg6IDIyLjM3NXJlbSxcbiAgY2FsZW5kYXItZGF5LWNlbGwtbGFyZ2Utd2lkdGg6IDNyZW0sXG4gIGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodDogM3JlbSxcbiAgY2FsZW5kYXItd2Vla2RheS1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLXdpZHRoOiBjYWxlbmRhci1kYXktY2VsbC1sYXJnZS1oZWlnaHQsXG4gIGNhbGVuZGFyLXdlZWtudW1iZXItbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci13ZWVrZGF5LWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXItd2Vla251bWJlci1sYXJnZS13aWR0aDogY2FsZW5kYXItd2Vla2RheS1sYXJnZS13aWR0aCxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS13aWR0aDogNS4yNXJlbSxcbiAgY2FsZW5kYXItbW9udGgtY2VsbC1sYXJnZS1oZWlnaHQ6IGNhbGVuZGFyLWRheS1jZWxsLWxhcmdlLWhlaWdodCxcbiAgY2FsZW5kYXIteWVhci1jZWxsLWxhcmdlLXdpZHRoOiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLXdpZHRoLFxuICBjYWxlbmRhci15ZWFyLWNlbGwtbGFyZ2UtaGVpZ2h0OiBjYWxlbmRhci1tb250aC1jZWxsLWxhcmdlLWhlaWdodCxcblxuICBvdmVybGF5LWJhY2tkcm9wLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSksXG5cbiAgdG9vbHRpcC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTMsXG4gIHRvb2x0aXAtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1ib3JkZXItc3R5bGU6IGRhc2hlZCxcbiAgdG9vbHRpcC1ib3JkZXItd2lkdGg6IDAsXG4gIHRvb2x0aXAtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgdG9vbHRpcC1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgdG9vbHRpcC10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcbiAgdG9vbHRpcC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LWNhcHRpb24tZm9udC1mYW1pbHksXG4gIHRvb2x0aXAtdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi1mb250LXNpemUsXG4gIHRvb2x0aXAtdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLWZvbnQtd2VpZ2h0LFxuICB0b29sdGlwLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi1saW5lLWhlaWdodCxcbiAgdG9vbHRpcC1pY29uLWhlaWdodDogMXJlbSxcbiAgdG9vbHRpcC1pY29uLXdpZHRoOiAxcmVtLFxuICB0b29sdGlwLW1heC13aWR0aDogMTZyZW0sXG5cbiAgdG9vbHRpcC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHRvb2x0aXAtYmFzaWMtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b29sdGlwLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b29sdGlwLXByaW1hcnktYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC1wcmltYXJ5LXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9vbHRpcC1pbmZvLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtaW5mby10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvb2x0aXAtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvb2x0aXAtc3VjY2Vzcy1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50LFxuICB0b29sdGlwLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b29sdGlwLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b29sdGlwLXdhcm5pbmctYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgdG9vbHRpcC13YXJuaW5nLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRvb2x0aXAtZGFuZ2VyLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9vbHRpcC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgdG9vbHRpcC1jb250cm9sLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRvb2x0aXAtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHRvb2x0aXAtc2hhZG93OiBzaGFkb3csXG5cbiAgb3B0aW9uLWxpc3QtbWF4LWhlaWdodDogMjByZW0sXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogbm9uZSxcbiAgb3B0aW9uLWxpc3QtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tbGlzdC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBvcHRpb24tbGlzdC1ib3JkZXItd2lkdGg6IDAuMDYyNXJlbSxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgb3B0aW9uLWxpc3QtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgb3B0aW9uLWxpc3QtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBvcHRpb24tbGlzdC1ib3JkZXItY29sb3IsXG4gIG9wdGlvbi1saXN0LWFkamFjZW50LWJvcmRlci1zdHlsZTogb3B0aW9uLWxpc3QtYm9yZGVyLXN0eWxlLFxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItd2lkdGg6IG9wdGlvbi1saXN0LWJvcmRlci13aWR0aCxcblxuICBvcHRpb24tZ3JvdXAtdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBvcHRpb24tZ3JvdXAtdGlueS1zdGFydC1wYWRkaW5nOiAxLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtc21hbGwtc3RhcnQtcGFkZGluZzogMS43NXJlbSxcbiAgb3B0aW9uLWdyb3VwLW1lZGl1bS1zdGFydC1wYWRkaW5nOiAyLjI1cmVtLFxuICBvcHRpb24tZ3JvdXAtbGFyZ2Utc3RhcnQtcGFkZGluZzogMi4yNXJlbSxcbiAgb3B0aW9uLWdyb3VwLWdpYW50LXN0YXJ0LXBhZGRpbmc6IDIuNzVyZW0sXG5cbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgb3B0aW9uLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIG9wdGlvbi10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIG9wdGlvbi1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgb3B0aW9uLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIG9wdGlvbi1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgb3B0aW9uLXNlbGVjdGVkLWFjdGl2ZS10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBvcHRpb24tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBvcHRpb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1jYXB0aW9uLTItZm9udC1zaXplLFxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LWNhcHRpb24tMi1mb250LXdlaWdodCxcbiAgb3B0aW9uLXRpbnktdGV4dC1saW5lLWhlaWdodDogdGV4dC1jYXB0aW9uLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi10aW55LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLXRpbnktcGFkZGluZyxcblxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1zbWFsbC1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nLFxuXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgb3B0aW9uLW1lZGl1bS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1tZWRpdW0tcGFkZGluZyxcblxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS1mb250LXdlaWdodCxcbiAgb3B0aW9uLWxhcmdlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG4gIG9wdGlvbi1sYXJnZS1wYWRkaW5nOiBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nLFxuXG4gIG9wdGlvbi1naWFudC10ZXh0LWZvbnQtc2l6ZTogdGV4dC1oZWFkaW5nLTYtZm9udC1zaXplLFxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXdlaWdodDogdGV4dC1oZWFkaW5nLTYtZm9udC13ZWlnaHQsXG4gIG9wdGlvbi1naWFudC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodCxcbiAgb3B0aW9uLWdpYW50LXBhZGRpbmc6IHNlbGVjdC1vdXRsaW5lLWdpYW50LXBhZGRpbmcsXG5cbiAgc2VsZWN0LWN1cnNvcjogcG9pbnRlcixcbiAgc2VsZWN0LWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcbiAgc2VsZWN0LW1pbi13aWR0aDogMTNyZW0sXG4gIHNlbGVjdC1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICBzZWxlY3Qtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgc2VsZWN0LWljb24tb2Zmc2V0OiAycmVtLFxuXG4gIHNlbGVjdC10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICBzZWxlY3QtcGxhY2Vob2xkZXItdGV4dC1mb250LWZhbWlseTogdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHksXG5cbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXNpemU6IHRleHQtY2FwdGlvbi0yLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogdGV4dC1jYXB0aW9uLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC10aW55LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtdGlueS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcbiAgc2VsZWN0LXRpbnktbWF4LXdpZHRoOiAyMHJlbSxcblxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtMi1mb250LXNpemUsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3Qtc21hbGwtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1zbWFsbC1tYXgtd2lkdGg6IDIwcmVtLFxuXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1mb250LXNpemU6IHRleHQtc3VidGl0bGUtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1tZWRpdW0tdGV4dC1saW5lLWhlaWdodDogdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodCxcbiAgc2VsZWN0LW1lZGl1bS1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtbWVkaXVtLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbWVkaXVtLW1heC13aWR0aDogMjByZW0sXG5cbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLWxpbmUtaGVpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtcGxhY2Vob2xkZXItdGV4dC1mb250LXNpemU6IHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWxhcmdlLXBsYWNlaG9sZGVyLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtbGFyZ2UtbWF4LXdpZHRoOiAzMHJlbSxcblxuICBzZWxlY3QtZ2lhbnQtdGV4dC1mb250LXNpemU6IHRleHQtaGVhZGluZy02LWZvbnQtc2l6ZSxcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtaGVhZGluZy02LWZvbnQtd2VpZ2h0LFxuICBzZWxlY3QtZ2lhbnQtdGV4dC1saW5lLWhlaWdodDogdGV4dC1oZWFkaW5nLTYtbGluZS1oZWlnaHQsXG4gIHNlbGVjdC1naWFudC1wbGFjZWhvbGRlci10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICBzZWxlY3QtZ2lhbnQtcGxhY2Vob2xkZXItdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXG4gIHNlbGVjdC1naWFudC1tYXgtd2lkdGg6IDMwcmVtLFxuXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgc2VsZWN0LXNlbWktcm91bmQtYm9yZGVyLXJhZGl1czogMC43NXJlbSxcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDEuNXJlbSxcblxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBzZWxlY3Qtb3V0bGluZS1ib3JkZXItd2lkdGg6IDFweCxcblxuICBzZWxlY3Qtb3V0bGluZS10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1zbWFsbC1wYWRkaW5nOiAwLjE4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtbWVkaXVtLXBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtLFxuICBzZWxlY3Qtb3V0bGluZS1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LW91dGxpbmUtZ2lhbnQtcGFkZGluZzogMC45Mzc1cmVtIDFyZW0sXG5cbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaWNvbi1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci00LFxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtaW5mby1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWljb24tY29sb3I6IHRleHQtaGludC1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTMsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMCxcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuXG4gIHNlbGVjdC1vdXRsaW5lLWFkamFjZW50LWJvcmRlci1zdHlsZTogc2VsZWN0LW91dGxpbmUtYm9yZGVyLXN0eWxlLFxuICBzZWxlY3Qtb3V0bGluZS1hZGphY2VudC1ib3JkZXItd2lkdGg6IHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aCxcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXByaW1hcnktYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3Mtb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWluZm8tYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtaW5mby1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctb3Blbi1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctYm9yZGVyLWNvbG9yLFxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtd2FybmluZy1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWRhbmdlci1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWFkamFjZW50LWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJvcmRlci1jb2xvcixcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1vcGVuLWJvcmRlci1jb2xvcjogc2VsZWN0LW91dGxpbmUtY29udHJvbC1ib3JkZXItY29sb3IsXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtYWRqYWNlbnQtYm9yZGVyLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWJvcmRlci1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJvcmRlci1zdHlsZTogc29saWQsXG4gIHNlbGVjdC1maWxsZWQtYm9yZGVyLXdpZHRoOiAxcHgsXG5cbiAgc2VsZWN0LWZpbGxlZC10aW55LXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLXNtYWxsLXBhZGRpbmc6IDAuMTg3NXJlbSAxcmVtLFxuICBzZWxlY3QtZmlsbGVkLW1lZGl1bS1wYWRkaW5nOiAwLjQzNzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1sYXJnZS1wYWRkaW5nOiAwLjY4NzVyZW0gMXJlbSxcbiAgc2VsZWN0LWZpbGxlZC1naWFudC1wYWRkaW5nOiAwLjkzNzVyZW0gMXJlbSxcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1pY29uLWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtaGludC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtYmFzaWMtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1zdWNjZXNzLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWluZm8tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby1mb2N1cyxcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1mb2N1cy1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1maWxsZWQtaW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWluZm8tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtd2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWhvdmVyLFxuICBzZWxlY3QtZmlsbGVkLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHNlbGVjdC1maWxsZWQtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWZpbGxlZC1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQtYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtaWNvbi1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtZmlsbGVkLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWZpbGxlZC1jb250cm9sLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1maWxsZWQtY29udHJvbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXRpbnktcGFkZGluZzogMC4yNXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1zbWFsbC1wYWRkaW5nOiAwLjI1cmVtIDFyZW0sXG4gIHNlbGVjdC1oZXJvLW1lZGl1bS1wYWRkaW5nOiAwLjVyZW0gMXJlbSxcbiAgc2VsZWN0LWhlcm8tbGFyZ2UtcGFkZGluZzogMC43NXJlbSAxcmVtLFxuICBzZWxlY3QtaGVyby1naWFudC1wYWRkaW5nOiAxcmVtIDFyZW0sXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICBzZWxlY3QtaGVyby1iYXNpYy1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWhpbnQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tYmFzaWMtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0zMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTQwMCxcbiAgc2VsZWN0LWhlcm8tYmFzaWMtaG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBzZWxlY3QtaGVyby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktNDAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS01MDAsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tcHJpbWFyeS1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktMzAwLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby1wcmltYXJ5LWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWljb24tY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLTUwMCxcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1mb2N1cy1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICBzZWxlY3QtaGVyby1zdWNjZXNzLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy0zMDAsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtaG92ZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNlbGVjdC1oZXJvLXN1Y2Nlc3MtZGlzYWJsZWQtaWNvbi1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgc2VsZWN0LWhlcm8tc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWluZm8tbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTQwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWluZm8taWNvbi1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgc2VsZWN0LWhlcm8taW5mby1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8taW5mby1mb2N1cy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tNTAwLFxuICBzZWxlY3QtaGVyby1pbmZvLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHNlbGVjdC1oZXJvLWluZm8taG92ZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLTMwMCxcbiAgc2VsZWN0LWhlcm8taW5mby1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8taW5mby1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8td2FybmluZy1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctNDAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLXBsYWNlaG9sZGVyLXRleHQtY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcblxuICBzZWxlY3QtaGVyby13YXJuaW5nLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy01MDAsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgc2VsZWN0LWhlcm8td2FybmluZy1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctMzAwLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0yLFxuICBzZWxlY3QtaGVyby13YXJuaW5nLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBzZWxlY3QtaGVyby1kYW5nZXItbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxuICBzZWxlY3QtaGVyby1kYW5nZXItcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1pY29uLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1wbGFjZWhvbGRlci10ZXh0LWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG5cbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWZvY3VzLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLWxlZnQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLTMwMCxcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWhvdmVyLXJpZ2h0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tZGFuZ2VyLWRpc2FibGVkLWljb24tY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHNlbGVjdC1oZXJvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBzZWxlY3QtaGVyby1jb250cm9sLWljb24tY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy04MDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtcGxhY2Vob2xkZXItdGV4dC1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtbGVmdC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXG4gIHNlbGVjdC1oZXJvLWNvbnRyb2wtZm9jdXMtcmlnaHQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cyxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1sZWZ0LWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1ob3Zlci1yaWdodC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLWhvdmVyLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcbiAgc2VsZWN0LWhlcm8tY29udHJvbC1kaXNhYmxlZC1pY29uLWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICBzZWxlY3QtaGVyby1jb250cm9sLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgZGF0ZXBpY2tlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIGRhdGVwaWNrZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgZGF0ZXBpY2tlci1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICBkYXRlcGlja2VyLWJvcmRlci13aWR0aDogMCxcbiAgZGF0ZXBpY2tlci1ib3JkZXItcmFkaXVzOiBib3JkZXItcmFkaXVzLFxuICBkYXRlcGlja2VyLXNoYWRvdzogbm9uZSxcblxuICByYWRpby13aWR0aDogMS4yNXJlbSxcbiAgcmFkaW8taGVpZ2h0OiAxLjI1cmVtLFxuICByYWRpby1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICByYWRpby1ib3JkZXItd2lkdGg6IDFweCxcbiAgcmFkaW8tdGV4dC1mb250LWZhbWlseTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtZmFtaWx5LFxuICByYWRpby10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgcmFkaW8tdGV4dC1mb250LXdlaWdodDogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtd2VpZ2h0LFxuICByYWRpby10ZXh0LWxpbmUtaGVpZ2h0OiB0ZXh0LXN1YnRpdGxlLTItbGluZS1oZWlnaHQsXG4gIHJhZGlvLW91dGxpbmUtY29sb3I6IG91dGxpbmUtY29sb3IsXG4gIHJhZGlvLW91dGxpbmUtd2lkdGg6IG91dGxpbmUtd2lkdGgsXG5cbiAgcmFkaW8tYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tYmFzaWMtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tYmFzaWMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICByYWRpby1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgcmFkaW8tYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tYmFzaWMtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1iYXNpYy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgcmFkaW8tYmFzaWMtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWJhc2ljLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8tcHJpbWFyeS10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1wcmltYXJ5LWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXByaW1hcnktY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICByYWRpby1wcmltYXJ5LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHJhZGlvLXByaW1hcnktaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXByaW1hcnktYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1wcmltYXJ5LWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1wcmltYXJ5LWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tcHJpbWFyeS1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLXN1Y2Nlc3MtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgcmFkaW8tc3VjY2Vzcy1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICByYWRpby1zdWNjZXNzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcbiAgcmFkaW8tc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICByYWRpby1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICByYWRpby1zdWNjZXNzLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcbiAgcmFkaW8tc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1zdWNjZXNzLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLXN1Y2Nlc3MtZGlzYWJsZWQtY2hlY2tlZC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcblxuICByYWRpby1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHJhZGlvLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8taW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1pbmZvLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICByYWRpby1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHJhZGlvLWluZm8tZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8taW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8taW5mby1mb2N1cy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHJhZGlvLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgcmFkaW8taW5mby1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1pbmZvLWhvdmVyLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgcmFkaW8taW5mby1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcixcbiAgcmFkaW8taW5mby1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHJhZGlvLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1pbmZvLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1pbmZvLWFjdGl2ZS1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICByYWRpby1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG4gIHJhZGlvLWluZm8tZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8taW5mby1kaXNhYmxlZC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuICByYWRpby1pbmZvLWRpc2FibGVkLWNoZWNrZWQtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgcmFkaW8td2FybmluZy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby13YXJuaW5nLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHJhZGlvLXdhcm5pbmctY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWZvY3VzLFxuICByYWRpby13YXJuaW5nLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHJhZGlvLXdhcm5pbmctaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby13YXJuaW5nLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby13YXJuaW5nLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8td2FybmluZy1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWRhbmdlci10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICByYWRpby1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICByYWRpby1kYW5nZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cyxcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcixcbiAgcmFkaW8tZGFuZ2VyLWZvY3VzLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICByYWRpby1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLFxuICByYWRpby1kYW5nZXItaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICByYWRpby1kYW5nZXItaG92ZXItaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHJhZGlvLWRhbmdlci1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50LFxuICByYWRpby1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgcmFkaW8tZGFuZ2VyLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICByYWRpby1kYW5nZXItYWN0aXZlLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuICByYWRpby1kYW5nZXItZGlzYWJsZWQtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG4gIHJhZGlvLWRhbmdlci1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHJhZGlvLWNvbnRyb2wtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICByYWRpby1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgcmFkaW8tY29udHJvbC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICByYWRpby1jb250cm9sLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1mb2N1cy1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZm9jdXMtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWZvY3VzLFxuICByYWRpby1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1pbm5lci1jaXJjbGUtY29sb3I6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXG4gIHJhZGlvLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLFxuICByYWRpby1jb250cm9sLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcixcbiAgcmFkaW8tY29udHJvbC1hY3RpdmUtaW5uZXItY2lyY2xlLWNvbG9yOiBjb2xvci1jb250cm9sLWFjdGl2ZSxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICByYWRpby1jb250cm9sLWRpc2FibGVkLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHJhZGlvLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgcmFkaW8tY29udHJvbC1kaXNhYmxlZC1jaGVja2VkLWlubmVyLWNpcmNsZS1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxuXG4gIHRyZWUtZ3JpZC1jZWxsLWJvcmRlci13aWR0aDogMXB4LFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItc3R5bGU6IHNvbGlkLFxuICB0cmVlLWdyaWQtY2VsbC1ib3JkZXItY29sb3I6IGJvcmRlci1iYXNpYy1jb2xvci0yLFxuICB0cmVlLWdyaWQtcm93LW1pbi1oZWlnaHQ6IDJyZW0sXG4gIHRyZWUtZ3JpZC1jZWxsLXBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW0sXG5cbiAgdHJlZS1ncmlkLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLWZvbnQtZmFtaWx5LFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1zaXplOiB0ZXh0LXN1YnRpdGxlLWZvbnQtc2l6ZSxcbiAgdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXN1YnRpdGxlLWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtaGVhZGVyLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtbGluZS1oZWlnaHQsXG5cbiAgdHJlZS1ncmlkLWZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLWZvb3Rlci10ZXh0LWZvbnQtZmFtaWx5OiB0cmVlLWdyaWQtaGVhZGVyLXRleHQtZm9udC1mYW1pbHksXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXNpemU6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1mb250LXNpemUsXG4gIHRyZWUtZ3JpZC1mb290ZXItdGV4dC1mb250LXdlaWdodDogdHJlZS1ncmlkLWhlYWRlci10ZXh0LWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtZm9vdGVyLXRleHQtbGluZS1oZWlnaHQ6IHRyZWUtZ3JpZC1oZWFkZXItdGV4dC1saW5lLWhlaWdodCxcblxuICB0cmVlLWdyaWQtcm93LWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy1ldmVuLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdHJlZS1ncmlkLXJvdy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRyZWUtZ3JpZC1yb3ctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXBhcmFncmFwaC1mb250LWZhbWlseSxcbiAgdHJlZS1ncmlkLXJvdy10ZXh0LWZvbnQtc2l6ZTogdGV4dC1wYXJhZ3JhcGgtZm9udC1zaXplLFxuICB0cmVlLWdyaWQtcm93LXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxuICB0cmVlLWdyaWQtcm93LXRleHQtbGluZS1oZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWxpbmUtaGVpZ2h0LFxuXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXG4gIHRyZWUtZ3JpZC1zb3J0LWhlYWRlci1idXR0b24tYm9yZGVyOiBub25lLFxuICB0cmVlLWdyaWQtc29ydC1oZWFkZXItYnV0dG9uLXBhZGRpbmc6IDAsXG5cbiAgaWNvbi1mb250LXNpemU6IDEuMjVyZW0sXG4gIGljb24tbGluZS1oZWlnaHQ6IDEsXG4gIGljb24td2lkdGg6IDFlbSxcbiAgaWNvbi1oZWlnaHQ6IDFlbSxcbiAgaWNvbi1zdmctdmVydGljYWwtYWxpZ246IHRvcCxcbiAgaWNvbi1iYXNpYy1jb2xvcjogdGV4dC1oaW50LWNvbG9yLFxuICBpY29uLXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgaWNvbi1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGljb24tc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxuICBpY29uLXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcbiAgaWNvbi1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxuICBpY29uLWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcblxuICB0b2dnbGUtaGVpZ2h0OiAxLjg3NXJlbSxcbiAgdG9nZ2xlLXdpZHRoOiAzLjEyNXJlbSxcbiAgdG9nZ2xlLWJvcmRlci13aWR0aDogMXB4LFxuICB0b2dnbGUtYm9yZGVyLXJhZGl1czogMTAwcHgsXG4gIHRvZ2dsZS1vdXRsaW5lLXdpZHRoOiBvdXRsaW5lLXdpZHRoLFxuICB0b2dnbGUtb3V0bGluZS1jb2xvcjogb3V0bGluZS1jb2xvcixcbiAgdG9nZ2xlLXN3aXRjaGVyLXNpemU6IDEuNzVyZW0sXG4gIHRvZ2dsZS1zd2l0Y2hlci1pY29uLXNpemU6IDAuNzVyZW0sXG4gIHRvZ2dsZS10ZXh0LWZvbnQtZmFtaWx5OiB0ZXh0LXN1YnRpdGxlLTItZm9udC1mYW1pbHksXG4gIHRvZ2dsZS10ZXh0LWZvbnQtc2l6ZTogdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZSxcbiAgdG9nZ2xlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1mb250LXdlaWdodCxcbiAgdG9nZ2xlLXRleHQtbGluZS1oZWlnaHQ6IHRleHQtc3VidGl0bGUtMi1saW5lLWhlaWdodCxcbiAgdG9nZ2xlLWN1cnNvcjogcG9pbnRlcixcbiAgdG9nZ2xlLWRpc2FibGVkLWN1cnNvcjogZGVmYXVsdCxcblxuICB0b2dnbGUtYmFzaWMtdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1iYXNpYy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtYmFzaWMtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcbiAgdG9nZ2xlLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWZvY3VzLFxuICB0b2dnbGUtYmFzaWMtZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1iYXNpYy1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1iYXNpYy1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdG9nZ2xlLWJhc2ljLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtYmFzaWMtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLWJhc2ljLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXByaW1hcnktdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxuICB0b2dnbGUtcHJpbWFyeS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS1wcmltYXJ5LWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdG9nZ2xlLXByaW1hcnktZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1wcmltYXJ5LWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxuICB0b2dnbGUtcHJpbWFyeS1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1wcmltYXJ5LWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtcHJpbWFyeS1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXByaW1hcnktZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtc3VjY2Vzcy10ZXh0LWNvbG9yOiB0ZXh0LWJhc2ljLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIHRvZ2dsZS1zdWNjZXNzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1jaGVja2VkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMSxcbiAgdG9nZ2xlLXN1Y2Nlc3MtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cyxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtZm9jdXMtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0b2dnbGUtc3VjY2Vzcy1mb2N1cy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWhvdmVyLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1ib3JkZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXN1Y2Nlc3MtYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIHRvZ2dsZS1zdWNjZXNzLWFjdGl2ZS1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZCxcbiAgdG9nZ2xlLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1zdWNjZXNzLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuICB0b2dnbGUtc3VjY2Vzcy1kaXNhYmxlZC10ZXh0LWNvbG9yOiB0ZXh0LWRpc2FibGVkLWNvbG9yLFxuXG4gIHRvZ2dsZS1pbmZvLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcbiAgdG9nZ2xlLWluZm8tY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtaW5mby1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0b2dnbGUtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtaW5mby1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRvZ2dsZS1pbmZvLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8taG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxuICB0b2dnbGUtaW5mby1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtaW5mby1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcbiAgdG9nZ2xlLWluZm8tYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtaW5mby1kaXNhYmxlZC1ib3JkZXItY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcixcbiAgdG9nZ2xlLWluZm8tZGlzYWJsZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1pbmZvLWRpc2FibGVkLXRleHQtY29sb3I6IHRleHQtZGlzYWJsZWQtY29sb3IsXG5cbiAgdG9nZ2xlLXdhcm5pbmctdGV4dC1jb2xvcjogdGV4dC1iYXNpYy1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxuICB0b2dnbGUtd2FybmluZy1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctY2hlY2tlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTEsXG4gIHRvZ2dsZS13YXJuaW5nLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdG9nZ2xlLXdhcm5pbmctZm9jdXMtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1ob3Zlci1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWhvdmVyLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtYm9yZGVyLWNvbG9yOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS13YXJuaW5nLWFjdGl2ZS1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxuICB0b2dnbGUtd2FybmluZy1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS13YXJuaW5nLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtd2FybmluZy1kaXNhYmxlZC1zd2l0Y2hlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IHRleHQtY29udHJvbC1jb2xvcixcbiAgdG9nZ2xlLXdhcm5pbmctZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtZGFuZ2VyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQsXG4gIHRvZ2dsZS1kYW5nZXItYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xLFxuICB0b2dnbGUtZGFuZ2VyLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcbiAgdG9nZ2xlLWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1kYW5nZXItZm9jdXMtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxuICB0b2dnbGUtZGFuZ2VyLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWRhbmdlci1ob3Zlci1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRvZ2dsZS1kYW5nZXItaG92ZXItY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1kYW5nZXItYWN0aXZlLWNoZWNrZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdG9nZ2xlLWRhbmdlci1hY3RpdmUtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuICB0b2dnbGUtZGFuZ2VyLWRpc2FibGVkLWNoZWNrZWQtc3dpdGNoZXItY2hlY2ttYXJrLWNvbG9yOiB0ZXh0LWNvbnRyb2wtY29sb3IsXG4gIHRvZ2dsZS1kYW5nZXItZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICB0b2dnbGUtY29udHJvbC10ZXh0LWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRvZ2dsZS1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdCxcbiAgdG9nZ2xlLWNvbnRyb2wtY2hlY2tlZC1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWNoZWNrZWQtc3dpdGNoZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICB0b2dnbGUtY29udHJvbC1jaGVja2VkLXN3aXRjaGVyLWNoZWNrbWFyay1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1mb2N1cy1jaGVja2VkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXMsXG4gIHRvZ2dsZS1jb250cm9sLWZvY3VzLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcixcbiAgdG9nZ2xlLWNvbnRyb2wtaG92ZXItY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLFxuICB0b2dnbGUtY29udHJvbC1ob3Zlci1jaGVja2VkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWFjdGl2ZS1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyLFxuICB0b2dnbGUtY29udHJvbC1hY3RpdmUtY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZSxcbiAgdG9nZ2xlLWNvbnRyb2wtYWN0aXZlLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLWJvcmRlci1jb2xvcjogY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXIsXG4gIHRvZ2dsZS1jb250cm9sLWRpc2FibGVkLXN3aXRjaGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtY2hlY2tlZC1zd2l0Y2hlci1jaGVja21hcmstY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdG9nZ2xlLWNvbnRyb2wtZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1jb250cm9sLWNvbG9yLFxuXG4gIGZvcm0tZmllbGQtYWRkb24tYmFzaWMtdGV4dC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWJhc2ljLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1wcmltYXJ5LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXByaW1hcnktaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXByaW1hcnktNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXN1Y2Nlc3MtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGZvcm0tZmllbGQtYWRkb24tc3VjY2Vzcy1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3Itc3VjY2Vzcy02MDAsXG4gIGZvcm0tZmllbGQtYWRkb24taW5mby10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTUwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1pbmZvLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1pbmZvLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi13YXJuaW5nLXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLXdhcm5pbmctaGlnaGxpZ2h0LXRleHQtY29sb3I6IGNvbG9yLXdhcm5pbmctNjAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci10ZXh0LWNvbG9yOiBjb2xvci1kYW5nZXItNTAwLFxuICBmb3JtLWZpZWxkLWFkZG9uLWRhbmdlci1oaWdobGlnaHQtdGV4dC1jb2xvcjogY29sb3ItZGFuZ2VyLTYwMCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLXRleHQtY29sb3I6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcbiAgZm9ybS1maWVsZC1hZGRvbi1jb250cm9sLWhpZ2hsaWdodC10ZXh0LWNvbG9yOiBjb2xvci1jb250cm9sLWRlZmF1bHQsXG4gIGZvcm0tZmllbGQtYWRkb24tZGlzYWJsZWQtdGV4dC1jb2xvcjogdGV4dC1kaXNhYmxlZC1jb2xvcixcblxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktaGVpZ2h0OiAxLjVyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tdGlueS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi10aW55LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWljb24tc2l6ZTogYnV0dG9uLXRpbnktaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi10aW55LWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi10aW55LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXRpbnktZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWhlaWdodDogMnJlbSxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tc21hbGwtaWNvbi1zaXplOiBidXR0b24tc21hbGwtaWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWZvbnQtc2l6ZTogdGV4dC1idXR0b24tc21hbGwtZm9udC1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLXNtYWxsLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1zbWFsbC1saW5lLWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1zbWFsbC1mb250LXdlaWdodDogdGV4dC1idXR0b24tZm9udC13ZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWhlaWdodDogMi41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS13aWR0aDogZm9ybS1maWVsZC1hZGRvbi1tZWRpdW0taGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1pY29uLXNpemU6IGJ1dHRvbi1tZWRpdW0taWNvbi1zaXplLFxuICBmb3JtLWZpZWxkLWFkZG9uLW1lZGl1bS1mb250LXNpemU6IHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWxpbmUtaGVpZ2h0OiB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbWVkaXVtLWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1oZWlnaHQ6IDNyZW0sXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2Utd2lkdGg6IGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWxhcmdlLWljb24tc2l6ZTogYnV0dG9uLWxhcmdlLWljb24tc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1mb250LXNpemU6IHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZSxcbiAgZm9ybS1maWVsZC1hZGRvbi1sYXJnZS1saW5lLWhlaWdodDogdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQsXG4gIGZvcm0tZmllbGQtYWRkb24tbGFyZ2UtZm9udC13ZWlnaHQ6IHRleHQtYnV0dG9uLWZvbnQtd2VpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodDogMy41cmVtLFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LXdpZHRoOiBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWhlaWdodCxcbiAgZm9ybS1maWVsZC1hZGRvbi1naWFudC1pY29uLXNpemU6IGJ1dHRvbi1naWFudC1pY29uLXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtZm9udC1zaXplOiB0ZXh0LWJ1dHRvbi1naWFudC1mb250LXNpemUsXG4gIGZvcm0tZmllbGQtYWRkb24tZ2lhbnQtbGluZS1oZWlnaHQ6IHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0LFxuICBmb3JtLWZpZWxkLWFkZG9uLWdpYW50LWZvbnQtd2VpZ2h0OiB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodCxcbik7XG4iLCJAaW1wb3J0ICcuLi8uLi90aGVtZXMvbWFwcGluZyc7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWdldC1lbmFibGVkLXRoZW1lcygpIHtcblxuICBAaWYgKGxlbmd0aCgkbmItZW5hYmxlZC10aGVtZXMpID09IDApIHtcbiAgICBAZWFjaCAkdGhlbWUtbmFtZSwgJHRoZW1lIGluICRuYi10aGVtZXMge1xuICAgICAgJG5iLWVuYWJsZWQtdGhlbWVzOiBhcHBlbmQoJG5iLWVuYWJsZWQtdGhlbWVzLCAkdGhlbWUtbmFtZSkgIWdsb2JhbDtcbiAgICB9XG4gIH1cbiAgQHJldHVybiAkbmItZW5hYmxlZC10aGVtZXM7XG59XG5cbkBmdW5jdGlvbiBnZXQtbGFzdC1lbmFibGVkLXRoZW1lKCkge1xuICAkdGhlbWVzOiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKTtcbiAgQHJldHVybiBudGgoJHRoZW1lcywgbGVuZ3RoKCR0aGVtZXMpKTtcbn1cblxuQGZ1bmN0aW9uIG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZTogbnVsbCkge1xuXG4gICRwYXJlbnQtdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcy1leHBvcnQsICRwYXJlbnQtbmFtZSk7XG4gIEBpZiAoJHBhcmVudC10aGVtZSAhPSBudWxsKSB7XG4gICAgJHRoZW1lOiBtYXAtbWVyZ2UobWFwLWdldCgkcGFyZW50LXRoZW1lLCBkYXRhKSwgJHRoZW1lKTtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoXG4gICAgZGF0YTogJHRoZW1lLFxuICAgIHBhcmVudDogJHBhcmVudC1uYW1lLFxuICApO1xuICBAcmV0dXJuIG1hcC1zZXQoJG5iLXRoZW1lcy1leHBvcnQsICRuYW1lLCAkdGhlbWUtZGF0YSk7XG59XG5cbkBmdW5jdGlvbiBuYi1nZXQtcmVnaXN0ZXJlZC10aGVtZSgkbmFtZSkge1xuICAkdGhlbWU6IG1hcC1nZXQoJG5iLXRoZW1lcywgJG5hbWUpO1xuXG4gIC8vIFRPRE86IGNoZWNrIGlmIG9wdGltYWwgcGxhY2VcbiAgQGlmICgkdGhlbWUgPT0gbnVsbCkge1xuICAgIEBlcnJvciAnTmVidWxhciBUaGVtZTogdGhlbWUgYCcgKyAkbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIHdpdGggYG5iLXJlZ2lzdGVyLXRoZW1lYCBmdW5jdGlvbi4nO1xuICB9XG5cbiAgQHJldHVybiAkdGhlbWU7XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBSZWdpc3RlcnMgYSBuZXcgdGhlbWVcbkBmdW5jdGlvbiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsICRuYW1lLCAkcGFyZW50LW5hbWU6IG51bGwpIHtcblxuICBAaWYgKCRuYi10aGVtZS1leHBvcnQtbW9kZSA9PSB0cnVlKSB7XG4gICAgJG5iLXRoZW1lcy1leHBvcnQ6IG5iLXNldC1mb3ItZXhwb3J0KCR0aGVtZSwgJG5hbWUsICRwYXJlbnQtbmFtZSkgIWdsb2JhbDtcbiAgfVxuXG4gICR0aGVtZS1kYXRhOiAoKTtcblxuICBAaWYgKCRwYXJlbnQtbmFtZSAhPSBudWxsKSB7XG4gICAgJHBhcmVudC10aGVtZTogbWFwLWdldCgkbmItdGhlbWVzLCAkcGFyZW50LW5hbWUpO1xuICAgIEBpZiAoJHBhcmVudC10aGVtZSA9PSBudWxsKSB7XG4gICAgICBAZXJyb3IgJ05lYnVsYXIgVGhlbWU6IHBhcmVudCB0aGVtZSBgJyArICRwYXJlbnQtbmFtZSArICdgIGlzIG5vdCByZWdpc3RlcmVkIG9yIGltcG9ydGVkLic7XG4gICAgfVxuICAgICR0aGVtZTogbWFwLW1lcmdlKCRwYXJlbnQtdGhlbWUsICR0aGVtZSk7XG4gIH1cbiAgJHRoZW1lOiBtYXAtbWVyZ2UoJGV2YS1tYXBwaW5nLCAkdGhlbWUpO1xuICAkbmItdGhlbWVzOiBtYXAtc2V0KCRuYi10aGVtZXMsICRuYW1lLCAkdGhlbWUpICFnbG9iYWw7XG5cbiAgQHJldHVybiAkbmItdGhlbWVzO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AbWl4aW4gbmItZm9yLXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgPT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZm9yLXRoZW1lcygkbmFtZXMuLi4pIHtcbiAgQGVhY2ggJG5hbWUgaW4gJG5hbWVzIHtcbiAgICBAaW5jbHVkZSBuYi1mb3ItdGhlbWUoJG5hbWUpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gIEBpZiAoJG5iLXRoZW1lLW5hbWUgIT0gJG5hbWUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItZXhjZXB0LWZvci10aGVtZXMoJG5hbWVzLi4uKSB7XG4gIEBlYWNoICRuYW1lIGluICRuYW1lcyB7XG4gICAgQGluY2x1ZGUgbmItZXhjZXB0LXRoZW1lKCRuYW1lKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtY3NzLXByb3BlcnRpZXMoJHRoZW1lLW5hbWUsICR0aGVtZSkge1xuICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0ge1xuXG4gICAgQGVhY2ggJHZhciwgJHZhbHVlIGluICR0aGVtZSB7XG4gICAgICBAaWYgKHR5cGUtb2YoJHZhbHVlKSA9PSAnc3RyaW5nJyBhbmQgbWFwLWdldCgkdGhlbWUsICR2YWx1ZSkpIHtcbiAgICAgICAgLS0jeyR2YXJ9OiB2YXIoLS0jeyR2YWx1ZX0pO1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIC0tI3skdmFyfTogI3skdmFsdWV9O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbmItcHJlLXByb2Nlc3MtY29udGV4dCgkdGhlbWUtbmFtZSkge1xuICAkbmItdGhlbWUtcHJvY2Vzcy1tb2RlOiAncHJlLXByb2Nlc3MnICFnbG9iYWw7XG5cbiAgJG5iLXRoZW1lLW5hbWU6ICR0aGVtZS1uYW1lICFnbG9iYWw7XG4gICRuYi1wcm9jZXNzZWQtdGhlbWU6IG5iLXByb2Nlc3MtdGhlbWUobmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbmItbGF6eS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpIHtcbiAgJG5iLXRoZW1lLXByb2Nlc3MtbW9kZTogJ2xhenktcHJvY2VzcycgIWdsb2JhbDtcblxuICAkbmItdGhlbWUtbmFtZTogJHRoZW1lLW5hbWUgIWdsb2JhbDtcbiAgJG5iLXByb2Nlc3NlZC10aGVtZTogKCkgIWdsb2JhbDtcbn1cblxuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAvLyBAYnJlYWtpbmctY2hhbmdlIDUuMC4wXG4gIDpob3N0IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICRlbmFibGVkLXRoZW1lczogbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCk7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gJGVuYWJsZWQtdGhlbWVzIHtcblxuICAgIEBpbmNsdWRlIG5iLWxhenktcHJvY2Vzcy1jb250ZXh0KCR0aGVtZS1uYW1lKTtcblxuICAgIC8qXG4gICAgICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICAgICAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gICAgICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gICAgICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAgICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAgICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgICAgIC4uLlxuICAgICAgICB9XG5cbiAgICAgIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gICAgICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4gICAgKi9cbiAgICAubmItdGhlbWUtI3skdGhlbWUtbmFtZX0gOmhvc3Qge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIEVudHJ5IHBvaW50XG4vLyBJbnN0YWxscyBjb21wb25lbnQgc3R5bGVzIGJhc2VkIG9uIHJlZ2lzdGVyZWQgdGhlbWVzXG4vLyBUT0RPOiB3ZSBoaWRlIDpob3N0IGluc2lkZSBvZiBpdCB3aGljaCBpcyBub3Qgb2J2aW91c1xuQG1peGluIG5iLWluc3RhbGwtY29tcG9uZW50KCkge1xuXG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcblxuICAgIEBpbmNsdWRlIG5iLWluc3RhbGwtY29tcG9uZW50LXdpdGgtY3NzLXByb3BzKCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuXG4gIH0gQGVsc2Uge1xuXG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jb21wb25lbnQtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG5iLWluc3RhbGwtZ2xvYmFsLXdpdGgtY3NzLXByb3BzKCkge1xuICBAY29udGVudDtcblxuICBAZWFjaCAkdGhlbWUtbmFtZSBpbiBuYi1nZXQtZW5hYmxlZC10aGVtZXMoKSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1jc3MtcHJvcGVydGllcygkdGhlbWUtbmFtZSwgbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJHRoZW1lLW5hbWUpKTtcbiAgfVxufVxuXG5AbWl4aW4gbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG5cbiAgQGVhY2ggJHRoZW1lLW5hbWUgaW4gbmItZ2V0LWVuYWJsZWQtdGhlbWVzKCkge1xuICAgIEBpbmNsdWRlIG5iLXByZS1wcm9jZXNzLWNvbnRleHQoJHRoZW1lLW5hbWUpO1xuXG4gICAgLm5iLXRoZW1lLSN7JHRoZW1lLW5hbWV9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBFbnRyeSBwb2ludFxuLy8gSW5zdGFsbHMgZ2xvYmFsIHN0eWxlcyBiYXNlZCBvbiByZWdpc3RlcmVkIHRoZW1lc1xuQG1peGluIG5iLWluc3RhbGwoKSB7XG4gIEBpZiAoJG5iLWVuYWJsZS1jc3MtY3VzdG9tLXByb3BlcnRpZXMpIHtcbiAgICBAaW5jbHVkZSBuYi1pbnN0YWxsLWdsb2JhbC13aXRoLWNzcy1wcm9wcygpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGluY2x1ZGUgbmItaW5zdGFsbC1nbG9iYWwtd2l0aC1zY3NzLXZhcnMoKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuQGZ1bmN0aW9uIG5iLWRlZXAtZmluZC12YWx1ZSgkdGhlbWUsICRrZXksICR2YWx1ZSkge1xuICAkcGFyZW50LXZhbHVlOiBtYXAtZ2V0KCR0aGVtZSwgJHZhbHVlKTtcblxuICBAaWYgKCRwYXJlbnQtdmFsdWUgIT0gbnVsbCkge1xuICAgIEByZXR1cm4gbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJHZhbHVlLCAkcGFyZW50LXZhbHVlKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5AZnVuY3Rpb24gbmItcHJvY2Vzcy10aGVtZSgkdGhlbWUpIHtcbiAgJHByb2Nlc3NlZC10aGVtZTogKCk7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGhlbWUge1xuICAgICRwcm9jZXNzZWQtdGhlbWU6IG1hcC1zZXQoJHByb2Nlc3NlZC10aGVtZSwgJGtleSwgbmItZGVlcC1maW5kLXZhbHVlKCR0aGVtZSwgJGtleSwgJHZhbHVlKSk7XG4gIH1cbiAgQHJldHVybiAkcHJvY2Vzc2VkLXRoZW1lO1xufVxuXG5AZnVuY3Rpb24gZ2V0LWN1cnJlbnQtdGhlbWUtbmFtZSgpIHtcbiAgQGlmICgkbmItdGhlbWUtbmFtZSAhPSBudWxsKSB7XG4gICAgQHJldHVybiAkbmItdGhlbWUtbmFtZTtcbiAgfVxuXG4gIEByZXR1cm4gZ2V0LWxhc3QtZW5hYmxlZC10aGVtZSgpO1xufVxuXG5AZnVuY3Rpb24gbmItdGhlbWUoJGtleSkge1xuXG4gICR2YWx1ZTogKCk7XG5cbiAgLy8gaW4gY2FzZSBvZiBjc3MgY3VzdG9tIHByb3BlcnRpZXMgLSBqdXN0IHJldHVybnMgdmFyKC0tdmFyLW5hbWUpIC0gdGhlIHJlc3QgaXMgYSBicm93c2VyIGpvYlxuICBAaWYgKCRuYi1lbmFibGUtY3NzLWN1c3RvbS1wcm9wZXJ0aWVzID09IHRydWUpIHtcbiAgICAvLyB0aGVyZSBpcyBubyB3YXkgdG8gY2hlY2sgaWYgdmFyaWFibGUgZXhpc3RzIGFzIGN1cnJlbnQgZXhlY3V0aW9uIGNvbnRleHQgaXMgb3V0c2lkZSBvZiBwYXJ0aWN1bGFyIHRoZW1lXG4gICAgLy8gYmVjYXVzZSB3ZSBwcm9jZXNzIGNzcyBpbiB0aGlzIG1vZGUgb25seSBvbmNlISAoYW5kIG5vdCBmb3IgZWFjaCB0aGVtZSlcbiAgICAkdmFsdWU6IHZhcigtLSN7JGtleX0pO1xuICB9IEBlbHNlIHtcbiAgICAvLyBpbiBhIHByZXByb2Nlc3MgbW9kZSAobmItaW5zdGFsbC1nbG9iYWwgY2FsbCkgZ2V0IHJlYWR5IHZhbHVlIGZyb20gJG5iLXByb2Nlc3NlZC10aGVtZSB2YXJpYWJsZVxuICAgIEBpZiAoJG5iLXRoZW1lLXByb2Nlc3MtbW9kZSA9PSAncHJlLXByb2Nlc3MnKSB7XG4gICAgICAkdmFsdWU6IG1hcC1nZXQoJG5iLXByb2Nlc3NlZC10aGVtZSwgJGtleSk7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGxhemlseSBzZWFyY2ggZm9yIHZhcmlhYmxlIHZhbHVlXG4gICAgQGlmICgkbmItdGhlbWUtcHJvY2Vzcy1tb2RlID09ICdsYXp5LXByb2Nlc3MnKSB7XG5cbiAgICAgICRuYi10aGVtZS1uYW1lOiBnZXQtY3VycmVudC10aGVtZS1uYW1lKCk7XG5cbiAgICAgICR0aGVtZTogbmItZ2V0LXJlZ2lzdGVyZWQtdGhlbWUoJG5iLXRoZW1lLW5hbWUpO1xuICAgICAgJHZhbHVlOiBuYi1kZWVwLWZpbmQtdmFsdWUoJHRoZW1lLCAka2V5LCBtYXAtZ2V0KCR0aGVtZSwgJGtleSkpO1xuICAgIH1cbiAgfVxuXG4gIEBpZiAoJHZhbHVlID09IG51bGwpIHtcbiAgICBAd2FybiAnTmVidWxhciBUaGVtZTogYG5iLXRoZW1lKClgIGNhbm5vdCBmaW5kIHZhbHVlIGZvciBrZXkgYCcgKyAka2V5ICsgJ2AgZm9yIHRoZW1lIGAnKyAkbmItdGhlbWUtbmFtZSArJ2AnO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcblxuJHRoZW1lOiAoXG5cbiAgLyoqXG4gICAqIFNhc3MgbWFwIGNvbnRhaW5zIGEgbGlzdCBvZiBhbGwgVGhlbWUgdmFyaWFibGVzIGFuZCBhbHNvIHRoZWlyIG1hcHBpbmdzIGludG8gQ29tcG9uZW50IHZhcmlhYmxlc1xuICAgKiBBIHRoZW1lIGNvbnNpc3RzIG9mIGEgbGlzdCBvZiBjb2xvcnMsIGJhY2tncm91bmRzLCBib3JkZXJzLCB0ZXh0IHN0eWxlcyBhbmQgc3VwcG9ydGluZyB2YXJpYWJsZXMuXG4gICAqL1xuXG5cbiAgLyogU3RhdHVzIGNvbG9yczogcHJpbWFyeSwgc3VjY2VzcywgaW5mbywgd2FybmluZywgZGFuZ2VyIC0gZm9yIGNvbG9yZWQgZWxlbWVudHMgKGJ1dHRvbnMsIGV0YykgKi9cblxuICBjb2xvci1wcmltYXJ5LTEwMDogI2YyZjZmZixcbiAgY29sb3ItcHJpbWFyeS0yMDA6ICNkOWU0ZmYsXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjYTZjMWZmLFxuICBjb2xvci1wcmltYXJ5LTQwMDogIzU5OGJmZixcbiAgY29sb3ItcHJpbWFyeS01MDA6ICMzMzY2ZmYsXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjMjc0YmRiLFxuICBjb2xvci1wcmltYXJ5LTcwMDogIzFhMzRiOCxcbiAgY29sb3ItcHJpbWFyeS04MDA6ICMxMDI2OTQsXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjMDkxYzdhLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4wOCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4yNCksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC4zMiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDUxLCAxMDIsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoNTEsIDEwMiwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci1zdWNjZXNzLTEwMDogI2YwZmZmNSxcbiAgY29sb3Itc3VjY2Vzcy0yMDA6ICNjY2ZjZTMsXG4gIGNvbG9yLXN1Y2Nlc3MtMzAwOiAjOGNmYWM3LFxuICBjb2xvci1zdWNjZXNzLTQwMDogIzJjZTY5YixcbiAgY29sb3Itc3VjY2Vzcy01MDA6ICMwMGQ2OGYsXG4gIGNvbG9yLXN1Y2Nlc3MtNjAwOiAjMDBiODg3LFxuICBjb2xvci1zdWNjZXNzLTcwMDogIzAwOTk3YSxcbiAgY29sb3Itc3VjY2Vzcy04MDA6ICMwMDdkNmMsXG4gIGNvbG9yLXN1Y2Nlc3MtOTAwOiAjMDA0YTQ1LFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjA4KSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuMTYpLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAyMTQsIDE0MywgMC4yNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjMyKSxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMjE0LCAxNDMsIDAuNCksXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjQ4KSxcblxuICBjb2xvci1pbmZvLTEwMDogI2YyZjhmZixcbiAgY29sb3ItaW5mby0yMDA6ICNjN2UyZmYsXG4gIGNvbG9yLWluZm8tMzAwOiAjOTRjYmZmLFxuICBjb2xvci1pbmZvLTQwMDogIzQyYWFmZixcbiAgY29sb3ItaW5mby01MDA6ICMwMDk1ZmYsXG4gIGNvbG9yLWluZm8tNjAwOiAjMDA2ZmQ2LFxuICBjb2xvci1pbmZvLTcwMDogIzAwNTdjMixcbiAgY29sb3ItaW5mby04MDA6ICMwMDQxYTgsXG4gIGNvbG9yLWluZm8tOTAwOiAjMDAyODg1LFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjA4KSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuMTYpLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTMwMDogcmdiYSgwLCAxNDksIDI1NSwgMC4yNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjMyKSxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoMCwgMTQ5LCAyNTUsIDAuNCksXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDAsIDE0OSwgMjU1LCAwLjQ4KSxcblxuICBjb2xvci13YXJuaW5nLTEwMDogI2ZmZmRmMixcbiAgY29sb3Itd2FybmluZy0yMDA6ICNmZmYxYzIsXG4gIGNvbG9yLXdhcm5pbmctMzAwOiAjZmZlNTllLFxuICBjb2xvci13YXJuaW5nLTQwMDogI2ZmYzk0ZCxcbiAgY29sb3Itd2FybmluZy01MDA6ICNmZmFhMDAsXG4gIGNvbG9yLXdhcm5pbmctNjAwOiAjZGI4YjAwLFxuICBjb2xvci13YXJuaW5nLTcwMDogI2I4NmUwMCxcbiAgY29sb3Itd2FybmluZy04MDA6ICM5NDU0MDAsXG4gIGNvbG9yLXdhcm5pbmctOTAwOiAjNzAzYzAwLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjA4KSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuMTYpLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE3MCwgMCwgMC4yNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjMyKSxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNzAsIDAsIDAuNCksXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjQ4KSxcblxuICBjb2xvci1kYW5nZXItMTAwOiAjZmZmMmYyLFxuICBjb2xvci1kYW5nZXItMjAwOiAjZmZkNmQ5LFxuICBjb2xvci1kYW5nZXItMzAwOiAjZmZhOGI0LFxuICBjb2xvci1kYW5nZXItNDAwOiAjZmY3MDhkLFxuICBjb2xvci1kYW5nZXItNTAwOiAjZmYzZDcxLFxuICBjb2xvci1kYW5nZXItNjAwOiAjZGIyYzY2LFxuICBjb2xvci1kYW5nZXItNzAwOiAjYjgxZDViLFxuICBjb2xvci1kYW5nZXItODAwOiAjOTQxMjRlLFxuICBjb2xvci1kYW5nZXItOTAwOiAjNzAwOTQwLFxuXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjA4KSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuMTYpLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgNjEsIDExMywgMC4yNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjMyKSxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDYxLCAxMTMsIDAuNCksXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCA2MSwgMTEzLCAwLjQ4KSxcblxuICAvKiBCYXNpYyBjb2xvcnMgLSBmb3IgYmFja2dyb3VuZHMgYW5kIGJvcmRlcnMgYW5kIHRleHRzICovXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y5ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2VkZjFmNyxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTRlOWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjNWNlZTAsXG4gIGNvbG9yLWJhc2ljLTYwMDogIzhmOWJiMyxcbiAgY29sb3ItYmFzaWMtNzAwOiAjMmUzYTU5LFxuICBjb2xvci1iYXNpYy04MDA6ICMyMjJiNDUsXG4gIGNvbG9yLWJhc2ljLTkwMDogIzE5MjAzOCxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzE1MWEzMCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEwMTQyNixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE0MywgMTU1LCAxNzksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNDMsIDE1NSwgMTc5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTQzLCAxNTUsIDE3OSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYpLFxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KSxcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpLFxuXG4gIC8qIFN0YXR1cyBjb2xvcnMgc3RhdGVzIC0gZm9jdXMsIGhvdmVyLCBkZWZhdWx0LCBhY3RpdmUsIGRpc2FibGVkICAqL1xuXG4gIGNvbG9yLWJhc2ljLWZvY3VzOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlOiBjb2xvci1iYXNpYy00MDAsXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1iYXNpYy1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLWhvdmVyLFxuICBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcbiAgY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtYWN0aXZlLFxuICBjb2xvci1iYXNpYy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRpc2FibGVkLFxuXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNjAwLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdDogY29sb3ItcHJpbWFyeS01MDAsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCxcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LWZvY3VzLWJvcmRlcjogY29sb3ItcHJpbWFyeS03MDAsXG4gIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlLWJvcmRlcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxuXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1ob3ZlcjogY29sb3Itc3VjY2Vzcy00MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCxcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxuXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1pbmZvLWZvY3VzOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXG4gIGNvbG9yLWluZm8tYWN0aXZlOiBjb2xvci1pbmZvLTYwMCxcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby03MDAsXG4gIGNvbG9yLWluZm8taG92ZXItYm9yZGVyOiBjb2xvci1pbmZvLWhvdmVyLFxuICBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLWRlZmF1bHQsXG4gIGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1pbmZvLWRpc2FibGVkLFxuXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdDogY29sb3Itd2FybmluZy01MDAsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCxcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLWZvY3VzLWJvcmRlcjogY29sb3Itd2FybmluZy03MDAsXG4gIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlLWJvcmRlcjogY29sb3Itd2FybmluZy1hY3RpdmUsXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxuXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcblxuICBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1ob3ZlcjogY29sb3ItZGFuZ2VyLTQwMCxcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLFxuICBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0LWJvcmRlcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLFxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXG5cbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXM6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxuICBjb2xvci1jb250cm9sLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTEwMCxcbiAgY29sb3ItY29udHJvbC1hY3RpdmU6IGNvbG9yLWJhc2ljLTMwMCxcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuICBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxuICBjb2xvci1jb250cm9sLWhvdmVyLWJvcmRlcjogY29sb3ItY29udHJvbC1ob3ZlcixcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxuICBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxuICBjb2xvci1jb250cm9sLWRpc2FibGVkLWJvcmRlcjogY29sb3ItY29udHJvbC1kaXNhYmxlZCxcblxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxuXG4gIC8qIEJhY2tncm91bmRzIGFuZCBib3JkZXJzIC0gYmFzaWMsIGFsdGVybmF0aXZlIGFuZCBwcmltYXJ5ICAqL1xuXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci0xOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLXByaW1hcnktNjAwLFxuICBiYWNrZ3JvdW5kLXByaW1hcnktY29sb3ItMzogY29sb3ItcHJpbWFyeS03MDAsXG4gIGJhY2tncm91bmQtcHJpbWFyeS1jb2xvci00OiBjb2xvci1wcmltYXJ5LTgwMCxcblxuICBib3JkZXItcHJpbWFyeS1jb2xvci0xOiBjb2xvci1iYXNpYy01MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLWJhc2ljLTYwMCxcbiAgYm9yZGVyLXByaW1hcnktY29sb3ItMzogY29sb3ItYmFzaWMtNzAwLFxuICBib3JkZXItcHJpbWFyeS1jb2xvci00OiBjb2xvci1iYXNpYy04MDAsXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTU6IGNvbG9yLWJhc2ljLTkwMCxcblxuICAvKiBUZXh0IGNvbG9ycyAtIGdlbmVyYWwgYW5kIHN0YXR1cyAqL1xuXG4gIHRleHQtYmFzaWMtY29sb3I6IGNvbG9yLWJhc2ljLTgwMCxcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcbiAgdGV4dC1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXG4gIHRleHQtZGlzYWJsZWQtY29sb3I6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMCxcbiAgdGV4dC1oaW50LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXG5cbiAgdGV4dC1wcmltYXJ5LWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXG4gIHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcbiAgdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxuICB0ZXh0LXByaW1hcnktYWN0aXZlLWNvbG9yOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcbiAgdGV4dC1wcmltYXJ5LWRpc2FibGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcblxuICB0ZXh0LXN1Y2Nlc3MtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcbiAgdGV4dC1zdWNjZXNzLWZvY3VzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxuICB0ZXh0LXN1Y2Nlc3MtaG92ZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXG4gIHRleHQtc3VjY2Vzcy1hY3RpdmUtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxuICB0ZXh0LXN1Y2Nlc3MtZGlzYWJsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxuXG4gIHRleHQtaW5mby1jb2xvcjogY29sb3ItaW5mby1kZWZhdWx0LFxuICB0ZXh0LWluZm8tZm9jdXMtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXG4gIHRleHQtaW5mby1ob3Zlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcbiAgdGV4dC1pbmZvLWFjdGl2ZS1jb2xvcjogY29sb3ItaW5mby1hY3RpdmUsXG4gIHRleHQtaW5mby1kaXNhYmxlZC1jb2xvcjogY29sb3ItaW5mby00MDAsXG5cbiAgdGV4dC13YXJuaW5nLWNvbG9yOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXG4gIHRleHQtd2FybmluZy1mb2N1cy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcbiAgdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxuICB0ZXh0LXdhcm5pbmctYWN0aXZlLWNvbG9yOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcbiAgdGV4dC13YXJuaW5nLWRpc2FibGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcblxuICB0ZXh0LWRhbmdlci1jb2xvcjogY29sb3ItZGFuZ2VyLWRlZmF1bHQsXG4gIHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXG4gIHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXG4gIHRleHQtZGFuZ2VyLWFjdGl2ZS1jb2xvcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcbiAgdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXG5cbiAgLyogRm9udHMgYW5kIHRleHQgc3R5bGVzIC0gaGVhZGluZ3MsIHN1YnRpdGxlcywgcGFyYWdyYXBocywgY2FwdGlvbnMsIGJ1dHRvbiAqL1xuXG4gIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ09wZW4gU2Fucywgc2Fucy1zZXJpZicpLFxuICBmb250LWZhbWlseS1zZWNvbmRhcnk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG5cbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTEtZm9udC1zaXplOiAyLjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctMS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctMS1saW5lLWhlaWdodDogM3JlbSxcblxuICB0ZXh0LWhlYWRpbmctMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctMi1mb250LXNpemU6IDJyZW0sXG4gIHRleHQtaGVhZGluZy0yLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtaGVhZGluZy0yLWxpbmUtaGVpZ2h0OiAyLjVyZW0sXG5cbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXNlY29uZGFyeSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC1zaXplOiAxLjg3NXJlbSxcbiAgdGV4dC1oZWFkaW5nLTMtZm9udC13ZWlnaHQ6IDcwMCxcbiAgdGV4dC1oZWFkaW5nLTMtbGluZS1oZWlnaHQ6IDIuNXJlbSxcblxuICB0ZXh0LWhlYWRpbmctNC1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXNpemU6IDEuNjI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNC1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNC1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNS1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXNpemU6IDEuMzc1cmVtLFxuICB0ZXh0LWhlYWRpbmctNS1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNS1saW5lLWhlaWdodDogMnJlbSxcblxuICB0ZXh0LWhlYWRpbmctNi1mb250LWZhbWlseTogZm9udC1mYW1pbHktc2Vjb25kYXJ5LFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXNpemU6IDEuMTI1cmVtLFxuICB0ZXh0LWhlYWRpbmctNi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWhlYWRpbmctNi1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtc3VidGl0bGUtZm9udC1zaXplOiAwLjkzNzVyZW0sXG4gIHRleHQtc3VidGl0bGUtZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS1saW5lLWhlaWdodDogMS41cmVtLFxuXG4gIHRleHQtc3VidGl0bGUtMi1mb250LWZhbWlseTogZm9udC1mYW1pbHktcHJpbWFyeSxcbiAgdGV4dC1zdWJ0aXRsZS0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXN1YnRpdGxlLTItZm9udC13ZWlnaHQ6IDYwMCxcbiAgdGV4dC1zdWJ0aXRsZS0yLWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgdGV4dC1wYXJhZ3JhcGgtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtcGFyYWdyYXBoLWZvbnQtc2l6ZTogMC45Mzc1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodDogNDAwLFxuICB0ZXh0LXBhcmFncmFwaC1saW5lLWhlaWdodDogMS4yNXJlbSxcblxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtc2l6ZTogMC44MTI1cmVtLFxuICB0ZXh0LXBhcmFncmFwaC0yLWZvbnQtd2VpZ2h0OiA0MDAsXG4gIHRleHQtcGFyYWdyYXBoLTItbGluZS1oZWlnaHQ6IDEuMTI1cmVtLFxuXG4gIHRleHQtbGFiZWwtZm9udC1mYW1pbHk6IGZvbnQtZmFtaWx5LXByaW1hcnksXG4gIHRleHQtbGFiZWwtZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWxhYmVsLWZvbnQtd2VpZ2h0OiA3MDAsXG4gIHRleHQtbGFiZWwtbGluZS1oZWlnaHQ6IDFyZW0sXG5cbiAgdGV4dC1jYXB0aW9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tZm9udC1zaXplOiAwLjc1cmVtLFxuICB0ZXh0LWNhcHRpb24tZm9udC13ZWlnaHQ6IDQwMCxcbiAgdGV4dC1jYXB0aW9uLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWNhcHRpb24tMi1mb250LXNpemU6IDAuNzVyZW0sXG4gIHRleHQtY2FwdGlvbi0yLWZvbnQtd2VpZ2h0OiA2MDAsXG4gIHRleHQtY2FwdGlvbi0yLWxpbmUtaGVpZ2h0OiAxcmVtLFxuXG4gIHRleHQtYnV0dG9uLWZvbnQtZmFtaWx5OiBmb250LWZhbWlseS1wcmltYXJ5LFxuICB0ZXh0LWJ1dHRvbi1mb250LXdlaWdodDogNzAwLFxuICB0ZXh0LWJ1dHRvbi10aW55LWZvbnQtc2l6ZTogMC42MjVyZW0sXG4gIHRleHQtYnV0dG9uLXRpbnktbGluZS1oZWlnaHQ6IDAuNzVyZW0sXG4gIHRleHQtYnV0dG9uLXNtYWxsLWZvbnQtc2l6ZTogMC43NXJlbSxcbiAgdGV4dC1idXR0b24tc21hbGwtbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLW1lZGl1bS1mb250LXNpemU6IDAuODc1cmVtLFxuICB0ZXh0LWJ1dHRvbi1tZWRpdW0tbGluZS1oZWlnaHQ6IDFyZW0sXG4gIHRleHQtYnV0dG9uLWxhcmdlLWZvbnQtc2l6ZTogMXJlbSxcbiAgdGV4dC1idXR0b24tbGFyZ2UtbGluZS1oZWlnaHQ6IDEuMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWZvbnQtc2l6ZTogMS4xMjVyZW0sXG4gIHRleHQtYnV0dG9uLWdpYW50LWxpbmUtaGVpZ2h0OiAxLjVyZW0sXG5cbiAgLyogU3VwcG9ydGluZyB2YXJpYWJsZXMgLSBib3JkZXIgcmFkaXVzLCBvdXRsaW5lLCBzaGFkb3csIGRpdmlkZXIgKi9cblxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxuXG4gIG91dGxpbmUtd2lkdGg6IDAuMzc1cmVtLFxuICBvdXRsaW5lLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXG5cbiAgc2Nyb2xsYmFyLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTQsXG4gIHNjcm9sbGJhci1iYWNrZ3JvdW5kLWNvbG9yOiBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTIsXG4gIHNjcm9sbGJhci13aWR0aDogMC4zMTI1cmVtLFxuXG4gIHNoYWRvdzogMCAwLjVyZW0gMXJlbSAwIHJnYmEoNDQsIDUxLCA3MywgMC4xKSxcblxuICBkaXZpZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItMyxcbiAgZGl2aWRlci1zdHlsZTogc29saWQsXG4gIGRpdmlkZXItd2lkdGg6IDFweCxcbik7XG5cbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgZGVmYXVsdCk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy04MDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTEwMDAsXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItNDogY29sb3ItYmFzaWMtMTEwMCxcblxuICBib3JkZXItYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxuXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcbiAgYmFja2dyb3VuZC1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxuXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0zMDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXG5cbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtMTAwLFxuICB0ZXh0LWFsdGVybmF0ZS1jb2xvcjogY29sb3ItYmFzaWMtOTAwLFxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXG5cbiAgc2hhZG93OiAwIDAuNXJlbSAxcmVtIDAgIzFhMWYzMyxcbiAgb3V0bGluZS1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxuKTtcblxuLy8gcmVnaXN0ZXIgdGhlIHRoZW1lXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGRhcmssIGRlZmF1bHQpO1xuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5AaW1wb3J0ICcuLi9jb3JlL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICcuLi9jb3JlL21peGlucyc7XG5AaW1wb3J0ICdkYXJrJztcblxuJHRoZW1lOiAoXG5cbiAgY29sb3ItcHJpbWFyeS0xMDA6ICNmYWY3ZmYsXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZWNlM2ZmLFxuICBjb2xvci1wcmltYXJ5LTMwMDogI2Q1YmZmZixcbiAgY29sb3ItcHJpbWFyeS00MDA6ICNiMThhZmYsXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjYTE2ZWZmLFxuICBjb2xvci1wcmltYXJ5LTYwMDogIzdiNTFkYixcbiAgY29sb3ItcHJpbWFyeS03MDA6ICM1YTM3YjgsXG4gIGNvbG9yLXByaW1hcnktODAwOiAjM2UyNDk0LFxuICBjb2xvci1wcmltYXJ5LTkwMDogIzI5MTU3YSxcblxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjA4KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC4xNiksXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE2MSwgMTEwLCAyNTUsIDAuMjQpLFxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNjEsIDExMCwgMjU1LCAwLjMyKSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40KSxcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoMTYxLCAxMTAsIDI1NSwgMC40OCksXG5cbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxuICBjb2xvci1iYXNpYy0yMDA6ICNmN2Y3ZmMsXG4gIGNvbG9yLWJhc2ljLTMwMDogI2YwZjBmYSxcbiAgY29sb3ItYmFzaWMtNDAwOiAjZTFlMWYyLFxuICBjb2xvci1iYXNpYy01MDA6ICNjZWNlZWIsXG4gIGNvbG9yLWJhc2ljLTYwMDogI2I0YjRkYixcbiAgY29sb3ItYmFzaWMtNzAwOiAjNmE2YTk0LFxuICBjb2xvci1iYXNpYy04MDA6ICMzMjMyNTksXG4gIGNvbG9yLWJhc2ljLTkwMDogIzI1MjU0NyxcbiAgY29sb3ItYmFzaWMtMTAwMDogIzFiMWIzOCxcbiAgY29sb3ItYmFzaWMtMTEwMDogIzEzMTMyYixcblxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4wOCksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjE2KSxcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE4MCwgMTgwLCAyMTksIDAuMjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC4zMiksXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxODAsIDE4MCwgMjE5LCAwLjQpLFxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDA6IHJnYmEoMTgwLCAxODAsIDIxOSwgMC40OCksXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvc21pYywgZGFyayk7XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5cbkBpbXBvcnQgJy4uL2NvcmUvZnVuY3Rpb25zJztcbkBpbXBvcnQgJy4uL2NvcmUvbWl4aW5zJztcbkBpbXBvcnQgJ2RlZmF1bHQnO1xuXG4kdGhlbWU6IChcbiAgYm9yZGVyLXJhZGl1czogMC4xN3JlbSxcbiAgc2hhZG93OiBub25lLFxuXG4gIGJ1dHRvbi1oZXJvLWdsb3ctc2l6ZTogMCAwIDIwcHggMCxcblxuICBjYXJkLWJvcmRlci13aWR0aDogMXB4LFxuICBjYXJkLWJvcmRlci1jb2xvcjogYm9yZGVyLWJhc2ljLWNvbG9yLTQsXG5cbiAgY29udGV4dC1tZW51LWJvcmRlci13aWR0aDogMXB4LFxuICBjb250ZXh0LW1lbnUtYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzLXNlbGVjdGVkOiBjb2xvci1wcmltYXJ5LTUwMCxcbiAgdGFicy1zZWxlY3RlZC1zZWNvbmQtY29sb3I6IGNvbG9yLXByaW1hcnktNTAwLFxuXG4gIHBvcG92ZXItYm9yZGVyLXdpZHRoOiAxcHgsXG4gIHBvcG92ZXItYm9yZGVyLWNvbG9yOiBib3JkZXItYmFzaWMtY29sb3ItNCxcblxuICB0YWJzZXQtYm9yZGVyLXJhZGl1czogYm9yZGVyLXJhZGl1cyxcbiAgcm91dGUtdGFic2V0LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIHVzZXItcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIGNoZWNrYm94LWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG4gIG1vZGFsLWJvcmRlci1yYWRpdXM6IGJvcmRlci1yYWRpdXMsXG5cbiAgdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgcm91dGUtdGFic2V0LXNoYWRvdzogbm9uZSxcbiAgYnV0dG9uLWhlcm8tc2hhZG93OiBub25lLFxuICBhbGVydC1zaGFkb3c6IG5vbmUsXG4gIGFjY29yZGlvbi1zaGFkb3c6IG5vbmUsXG4pO1xuXG4kbmItdGhlbWVzOiBuYi1yZWdpc3Rlci10aGVtZSgkdGhlbWUsIGNvcnBvcmF0ZSwgZGVmYXVsdCk7XG4iLCIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuXHJcbkBpbXBvcnQgJ35AbmVidWxhci90aGVtZS9zdHlsZXMvY29yZS9mdW5jdGlvbnMnO1xyXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvbWl4aW5zJztcclxuXHJcbiR0aGVtZTogKFxyXG4gIGNvbG9yLXByaW1hcnktMTAwOiAjZmZmMmY3LFxyXG4gIGNvbG9yLXByaW1hcnktMjAwOiAjZmZkNGUzLFxyXG4gIGNvbG9yLXByaW1hcnktMzAwOiAjZmM5YWJjLFxyXG4gIGNvbG9yLXByaW1hcnktNDAwOiAjZjI0NjgxLFxyXG4gIGNvbG9yLXByaW1hcnktNTAwOiAjZTkxZDYzLFxyXG4gIGNvbG9yLXByaW1hcnktNjAwOiAjYzcxNDUxLFxyXG4gIGNvbG9yLXByaW1hcnktNzAwOiAjYTgwZDQzLFxyXG4gIGNvbG9yLXByaW1hcnktODAwOiAjODcwOTM1LFxyXG4gIGNvbG9yLXByaW1hcnktOTAwOiAjNzAwNjJhLFxyXG5cclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC4wOCksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuMTYpLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDIzMywgMjksIDk5LCAwLjI0KSxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTQwMDogcmdiYSgyMzMsIDI5LCA5OSwgMC4zMiksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuNCksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC02MDA6IHJnYmEoMjMzLCAyOSwgOTksIDAuNDgpLFxyXG5cclxuICBjb2xvci1zdWNjZXNzLTEwMDogI2VkZmJkMSxcclxuICBjb2xvci1zdWNjZXNzLTIwMDogI2Q3ZjdhNixcclxuICBjb2xvci1zdWNjZXNzLTMwMDogI2I0ZTc3NSxcclxuICBjb2xvci1zdWNjZXNzLTQwMDogIzhmY2Y1MCxcclxuICBjb2xvci1zdWNjZXNzLTUwMDogIzYwYWYyMCxcclxuICBjb2xvci1zdWNjZXNzLTYwMDogIzQ5OTYxNyxcclxuICBjb2xvci1zdWNjZXNzLTcwMDogIzM1N2QxMCxcclxuICBjb2xvci1zdWNjZXNzLTgwMDogIzI0NjUwYSxcclxuICBjb2xvci1zdWNjZXNzLTkwMDogIzE3NTMwNixcclxuXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMDgpLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjE2KSxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4yNCksXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC00MDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMzIpLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjQpLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjQ4KSxcclxuXHJcbiAgY29sb3ItaW5mby0xMDA6ICNjY2Y3ZmUsXHJcbiAgY29sb3ItaW5mby0yMDA6ICM5OWU5ZmQsXHJcbiAgY29sb3ItaW5mby0zMDA6ICM2NmQzZjksXHJcbiAgY29sb3ItaW5mby00MDA6ICM0MGJiZjQsXHJcbiAgY29sb3ItaW5mby01MDA6ICMwNDk1ZWUsXHJcbiAgY29sb3ItaW5mby02MDA6ICMwMjczY2MsXHJcbiAgY29sb3ItaW5mby03MDA6ICMwMjU2YWIsXHJcbiAgY29sb3ItaW5mby04MDA6ICMwMTNkOGEsXHJcbiAgY29sb3ItaW5mby05MDA6ICMwMDJiNzIsXHJcblxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjA4KSxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTIwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4xNiksXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMjQpLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjMyKSxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTUwMDogcmdiYSg0LCAxNDksIDIzOCwgMC40KSxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTYwMDogcmdiYSg0LCAxNDksIDIzOCwgMC40OCksXHJcblxyXG4gIGNvbG9yLXdhcm5pbmctMTAwOiAjZmZmM2NkLFxyXG4gIGNvbG9yLXdhcm5pbmctMjAwOiAjZmZlNDliLFxyXG4gIGNvbG9yLXdhcm5pbmctMzAwOiAjZmZkMTY5LFxyXG4gIGNvbG9yLXdhcm5pbmctNDAwOiAjZmZiZTQzLFxyXG4gIGNvbG9yLXdhcm5pbmctNTAwOiAjZmY5ZjA1LFxyXG4gIGNvbG9yLXdhcm5pbmctNjAwOiAjZGI4MDAzLFxyXG4gIGNvbG9yLXdhcm5pbmctNzAwOiAjYjc2MzAyLFxyXG4gIGNvbG9yLXdhcm5pbmctODAwOiAjOTM0YTAxLFxyXG4gIGNvbG9yLXdhcm5pbmctOTAwOiAjN2EzODAwLFxyXG5cclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4wOCksXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMTYpLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjI0KSxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4zMiksXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuNCksXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC02MDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuNDgpLFxyXG5cclxuICBjb2xvci1kYW5nZXItMTAwOiAjZmJkMmM4LFxyXG4gIGNvbG9yLWRhbmdlci0yMDA6ICNmNzllOTQsXHJcbiAgY29sb3ItZGFuZ2VyLTMwMDogI2U3NWQ1YyxcclxuICBjb2xvci1kYW5nZXItNDAwOiAjY2YzMzQxLFxyXG4gIGNvbG9yLWRhbmdlci01MDA6ICNiMDAwMjAsXHJcbiAgY29sb3ItZGFuZ2VyLTYwMDogIzk3MDAyOSxcclxuICBjb2xvci1kYW5nZXItNzAwOiAjN2UwMDJlLFxyXG4gIGNvbG9yLWRhbmdlci04MDA6ICM2NjAwMmYsXHJcbiAgY29sb3ItZGFuZ2VyLTkwMDogIzU0MDAyZixcclxuXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjA4KSxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMTYpLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4yNCksXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTQwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjMyKSxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuNCksXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjQ4KSxcclxuXHJcbiAgY29sb3ItYmFzaWMtMTAwOiAjZmZmZmZmLFxyXG4gIGNvbG9yLWJhc2ljLTIwMDogI2Y1ZjVmNSxcclxuICBjb2xvci1iYXNpYy0zMDA6ICNmNWY1ZjUsXHJcbiAgY29sb3ItYmFzaWMtNDAwOiAjZDRkNGQ0LFxyXG4gIGNvbG9yLWJhc2ljLTUwMDogI2IzYjNiMyxcclxuICBjb2xvci1iYXNpYy02MDA6ICM4MDgwODAsXHJcbiAgY29sb3ItYmFzaWMtNzAwOiAjNDA0MDQwLFxyXG4gIGNvbG9yLWJhc2ljLTgwMDogIzM1MzUzNSxcclxuICBjb2xvci1iYXNpYy05MDA6ICMzMDMwMzAsXHJcbiAgY29sb3ItYmFzaWMtMTAwMDogIzFmMWYxZixcclxuICBjb2xvci1iYXNpYy0xMTAwOiAjMTQxNDE0LFxyXG5cclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4wOCksXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMTYpLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI0KSxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC00MDA6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zMiksXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNCksXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDgpLFxyXG5cclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTEwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSxcclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2KSxcclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KSxcclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTQwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyKSxcclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTUwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpLFxyXG4gIGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpLFxyXG5cclxuICBjb2xvci1iYXNpYy1mb2N1czogY29sb3ItYmFzaWMtNDAwLFxyXG4gIGNvbG9yLWJhc2ljLWhvdmVyOiBjb2xvci1iYXNpYy0yMDAsXHJcbiAgY29sb3ItYmFzaWMtZGVmYXVsdDogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGNvbG9yLWJhc2ljLWFjdGl2ZTogY29sb3ItYmFzaWMtNDAwLFxyXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItYmFzaWMtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItYmFzaWMtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy1ob3ZlcixcclxuICBjb2xvci1iYXNpYy1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtZGVmYXVsdCxcclxuICBjb2xvci1iYXNpYy1hY3RpdmUtYm9yZGVyOiBjb2xvci1iYXNpYy1hY3RpdmUsXHJcbiAgY29sb3ItYmFzaWMtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci1wcmltYXJ5LWZvY3VzOiBjb2xvci1wcmltYXJ5LTYwMCxcclxuICBjb2xvci1wcmltYXJ5LWhvdmVyOiBjb2xvci1wcmltYXJ5LTQwMCxcclxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGNvbG9yLXByaW1hcnktYWN0aXZlOiBjb2xvci1wcmltYXJ5LTYwMCxcclxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItcHJpbWFyeS1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNzAwLFxyXG4gIGNvbG9yLXByaW1hcnktaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxyXG4gIGNvbG9yLXByaW1hcnktZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcclxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxyXG4gIGNvbG9yLXByaW1hcnktZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLXN1Y2Nlc3MtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtNjAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1zdWNjZXNzLWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy03MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXHJcbiAgY29sb3Itc3VjY2Vzcy1kZWZhdWx0LWJvcmRlcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxyXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXHJcbiAgY29sb3Itc3VjY2Vzcy1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3ItaW5mby1mb2N1czogY29sb3ItaW5mby02MDAsXHJcbiAgY29sb3ItaW5mby1ob3ZlcjogY29sb3ItaW5mby00MDAsXHJcbiAgY29sb3ItaW5mby1kZWZhdWx0OiBjb2xvci1pbmZvLTUwMCxcclxuICBjb2xvci1pbmZvLWFjdGl2ZTogY29sb3ItaW5mby02MDAsXHJcbiAgY29sb3ItaW5mby1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWluZm8tZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTcwMCxcclxuICBjb2xvci1pbmZvLWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby1ob3ZlcixcclxuICBjb2xvci1pbmZvLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1pbmZvLWRlZmF1bHQsXHJcbiAgY29sb3ItaW5mby1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLWFjdGl2ZSxcclxuICBjb2xvci1pbmZvLWRpc2FibGVkLWJvcmRlcjogY29sb3ItaW5mby1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1mb2N1czogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItaW5mby10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItaW5mby01MDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby01MDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1pbmZvLTUwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci13YXJuaW5nLWZvY3VzOiBjb2xvci13YXJuaW5nLTYwMCxcclxuICBjb2xvci13YXJuaW5nLWhvdmVyOiBjb2xvci13YXJuaW5nLTQwMCxcclxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctYWN0aXZlOiBjb2xvci13YXJuaW5nLTYwMCxcclxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itd2FybmluZy1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNzAwLFxyXG4gIGNvbG9yLXdhcm5pbmctaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLWhvdmVyLFxyXG4gIGNvbG9yLXdhcm5pbmctZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcclxuICBjb2xvci13YXJuaW5nLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxyXG4gIGNvbG9yLXdhcm5pbmctZGlzYWJsZWQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLWRhbmdlci1mb2N1czogY29sb3ItZGFuZ2VyLTYwMCxcclxuICBjb2xvci1kYW5nZXItaG92ZXI6IGNvbG9yLWRhbmdlci00MDAsXHJcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQ6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgY29sb3ItZGFuZ2VyLWFjdGl2ZTogY29sb3ItZGFuZ2VyLTYwMCxcclxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1kYW5nZXItZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNzAwLFxyXG4gIGNvbG9yLWRhbmdlci1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci1ob3ZlcixcclxuICBjb2xvci1kYW5nZXItZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxyXG4gIGNvbG9yLWRhbmdlci1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItYWN0aXZlLFxyXG4gIGNvbG9yLWRhbmdlci1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWRhbmdlci1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItZGFuZ2VyLTUwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci1jb250cm9sLWZvY3VzOiBjb2xvci1iYXNpYy0zMDAsXHJcbiAgY29sb3ItY29udHJvbC1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdDogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlOiBjb2xvci1iYXNpYy0zMDAsXHJcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtZm9jdXMtYm9yZGVyOiBjb2xvci1iYXNpYy01MDAsXHJcbiAgY29sb3ItY29udHJvbC1ob3Zlci1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtaG92ZXIsXHJcbiAgY29sb3ItY29udHJvbC1kZWZhdWx0LWJvcmRlcjogY29sb3ItY29udHJvbC1kZWZhdWx0LFxyXG4gIGNvbG9yLWNvbnRyb2wtYWN0aXZlLWJvcmRlcjogY29sb3ItY29udHJvbC1hY3RpdmUsXHJcbiAgY29sb3ItY29udHJvbC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGJhY2tncm91bmQtYmFzaWMtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwMCxcclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTEwMDAsXHJcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy05MDAsXHJcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxyXG5cclxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcclxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTQwMCxcclxuXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcclxuICBib3JkZXItYmFzaWMtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxyXG5cclxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0yOiBjb2xvci1iYXNpYy0yMDAsXHJcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTM6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItNDogY29sb3ItYmFzaWMtNDAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy01MDAsXHJcblxyXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTE6IGNvbG9yLXByaW1hcnktNTAwLFxyXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTI6IGNvbG9yLXByaW1hcnktNjAwLFxyXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTM6IGNvbG9yLXByaW1hcnktNzAwLFxyXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTQ6IGNvbG9yLXByaW1hcnktODAwLFxyXG4gIGJvcmRlci1wcmltYXJ5LWNvbG9yLTU6IGNvbG9yLXByaW1hcnktOTAwLFxyXG5cclxuICBib3JkZXItc3VjY2Vzcy1jb2xvci0xOiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBib3JkZXItc3VjY2Vzcy1jb2xvci0yOiBjb2xvci1zdWNjZXNzLTYwMCxcclxuICBib3JkZXItc3VjY2Vzcy1jb2xvci0zOiBjb2xvci1zdWNjZXNzLTcwMCxcclxuICBib3JkZXItc3VjY2Vzcy1jb2xvci00OiBjb2xvci1zdWNjZXNzLTgwMCxcclxuICBib3JkZXItc3VjY2Vzcy1jb2xvci01OiBjb2xvci1zdWNjZXNzLTkwMCxcclxuXHJcbiAgYm9yZGVyLWluZm8tY29sb3ItMTogY29sb3ItaW5mby01MDAsXHJcbiAgYm9yZGVyLWluZm8tY29sb3ItMjogY29sb3ItaW5mby02MDAsXHJcbiAgYm9yZGVyLWluZm8tY29sb3ItMzogY29sb3ItaW5mby03MDAsXHJcbiAgYm9yZGVyLWluZm8tY29sb3ItNDogY29sb3ItaW5mby04MDAsXHJcbiAgYm9yZGVyLWluZm8tY29sb3ItNTogY29sb3ItaW5mby05MDAsXHJcblxyXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTE6IGNvbG9yLXdhcm5pbmctNTAwLFxyXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTI6IGNvbG9yLXdhcm5pbmctNjAwLFxyXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTM6IGNvbG9yLXdhcm5pbmctNzAwLFxyXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTQ6IGNvbG9yLXdhcm5pbmctODAwLFxyXG4gIGJvcmRlci13YXJuaW5nLWNvbG9yLTU6IGNvbG9yLXdhcm5pbmctOTAwLFxyXG5cclxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTE6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgYm9yZGVyLWRhbmdlci1jb2xvci0yOiBjb2xvci1kYW5nZXItNjAwLFxyXG4gIGJvcmRlci1kYW5nZXItY29sb3ItMzogY29sb3ItZGFuZ2VyLTcwMCxcclxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTQ6IGNvbG9yLWRhbmdlci04MDAsXHJcbiAgYm9yZGVyLWRhbmdlci1jb2xvci01OiBjb2xvci1kYW5nZXItOTAwLFxyXG5cclxuICB0ZXh0LWJhc2ljLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgdGV4dC1hbHRlcm5hdGUtY29sb3I6IGNvbG9yLWJhc2ljLTkwMCxcclxuICB0ZXh0LWNvbnRyb2wtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcclxuICB0ZXh0LWRpc2FibGVkLWNvbG9yOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC02MDAsXHJcbiAgdGV4dC1oaW50LWNvbG9yOiBjb2xvci1iYXNpYy02MDAsXHJcblxyXG4gIHRleHQtcHJpbWFyeS1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxyXG4gIHRleHQtcHJpbWFyeS1mb2N1cy1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcclxuICB0ZXh0LXByaW1hcnktaG92ZXItY29sb3I6IGNvbG9yLXByaW1hcnktaG92ZXIsXHJcbiAgdGV4dC1wcmltYXJ5LWFjdGl2ZS1jb2xvcjogY29sb3ItcHJpbWFyeS1hY3RpdmUsXHJcbiAgdGV4dC1wcmltYXJ5LWRpc2FibGVkLWNvbG9yOiBjb2xvci1wcmltYXJ5LTQwMCxcclxuXHJcbiAgdGV4dC1zdWNjZXNzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWRlZmF1bHQsXHJcbiAgdGV4dC1zdWNjZXNzLWZvY3VzLWNvbG9yOiBjb2xvci1zdWNjZXNzLWZvY3VzLFxyXG4gIHRleHQtc3VjY2Vzcy1ob3Zlci1jb2xvcjogY29sb3Itc3VjY2Vzcy1ob3ZlcixcclxuICB0ZXh0LXN1Y2Nlc3MtYWN0aXZlLWNvbG9yOiBjb2xvci1zdWNjZXNzLWFjdGl2ZSxcclxuICB0ZXh0LXN1Y2Nlc3MtZGlzYWJsZWQtY29sb3I6IGNvbG9yLXN1Y2Nlc3MtNDAwLFxyXG5cclxuICB0ZXh0LWluZm8tY29sb3I6IGNvbG9yLWluZm8tZGVmYXVsdCxcclxuICB0ZXh0LWluZm8tZm9jdXMtY29sb3I6IGNvbG9yLWluZm8tZm9jdXMsXHJcbiAgdGV4dC1pbmZvLWhvdmVyLWNvbG9yOiBjb2xvci1pbmZvLWhvdmVyLFxyXG4gIHRleHQtaW5mby1hY3RpdmUtY29sb3I6IGNvbG9yLWluZm8tYWN0aXZlLFxyXG4gIHRleHQtaW5mby1kaXNhYmxlZC1jb2xvcjogY29sb3ItaW5mby00MDAsXHJcblxyXG4gIHRleHQtd2FybmluZy1jb2xvcjogY29sb3Itd2FybmluZy1kZWZhdWx0LFxyXG4gIHRleHQtd2FybmluZy1mb2N1cy1jb2xvcjogY29sb3Itd2FybmluZy1mb2N1cyxcclxuICB0ZXh0LXdhcm5pbmctaG92ZXItY29sb3I6IGNvbG9yLXdhcm5pbmctaG92ZXIsXHJcbiAgdGV4dC13YXJuaW5nLWFjdGl2ZS1jb2xvcjogY29sb3Itd2FybmluZy1hY3RpdmUsXHJcbiAgdGV4dC13YXJuaW5nLWRpc2FibGVkLWNvbG9yOiBjb2xvci13YXJuaW5nLTQwMCxcclxuXHJcbiAgdGV4dC1kYW5nZXItY29sb3I6IGNvbG9yLWRhbmdlci1kZWZhdWx0LFxyXG4gIHRleHQtZGFuZ2VyLWZvY3VzLWNvbG9yOiBjb2xvci1kYW5nZXItZm9jdXMsXHJcbiAgdGV4dC1kYW5nZXItaG92ZXItY29sb3I6IGNvbG9yLWRhbmdlci1ob3ZlcixcclxuICB0ZXh0LWRhbmdlci1hY3RpdmUtY29sb3I6IGNvbG9yLWRhbmdlci1hY3RpdmUsXHJcbiAgdGV4dC1kYW5nZXItZGlzYWJsZWQtY29sb3I6IGNvbG9yLWRhbmdlci00MDAsXHJcblxyXG4gIGZvbnQtZmFtaWx5LXByaW1hcnk6IHVucXVvdGUoJ1JvYm90bywgc2Fucy1zZXJpZicpLFxyXG5cclxuICBzaGFkb3c6IHVucXVvdGUoXHJcbiAgICAnMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSdcclxuICAgICksXHJcbiAgY2FyZC1zaGFkb3c6IHNoYWRvdyxcclxuICBoZWFkZXItc2hhZG93OiB1bnF1b3RlKFxyXG4gICAgJzBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSdcclxuICApLFxyXG5cclxuICBoZWFkZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxyXG4gIGZvb3Rlci1iYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXHJcbiAgaGVhZGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXHJcbiAgZm9vdGVyLXRleHQtY29sb3I6IHRleHQtYmFzaWMtY29sb3IsXHJcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBmb290ZXItdGV4dC1jb2xvcixcclxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcclxuXHJcbiAgbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodDogNDAwLFxyXG4gIG1lbnUtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBtZW51LXRleHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICBtZW51LWl0ZW0taG92ZXItdGV4dC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpLFxyXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KSxcclxuXHJcbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICBtZW51LWl0ZW0taWNvbi1ob3Zlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG5cclxuICBtZW51LXN1Ym1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpLFxyXG4gIG1lbnUtc3VibWVudS1pdGVtLWFjdGl2ZS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSksXHJcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSksXHJcblxyXG4gIGNhcmQtYm9yZGVyLXN0eWxlOiBub25lLFxyXG4gIGNhcmQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxyXG4gIGNhcmQtZGl2aWRlci1jb2xvcjogY29sb3ItYmFzaWMtNzAwLFxyXG5cclxuICBpbnB1dC1ib3JkZXItd2lkdGg6IDFweCxcclxuICBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSxcclxuICBpbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXHJcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXHJcbiAgaW5wdXQtYmFzaWMtaG92ZXItYm9yZGVyLWNvbG9yOiBpbnB1dC1iYXNpYy1ib3JkZXItY29sb3IsXHJcbiAgaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsXHJcbiAgaW5wdXQtcmVjdGFuZ2xlLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXHJcbiAgaW5wdXQtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtLFxyXG4gIGlucHV0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXHJcbiAgaW5wdXQtbWVkaXVtLXBhZGRpbmc6IDAuNzVyZW0gMXJlbSxcclxuICBpbnB1dC1sYXJnZS1wYWRkaW5nOiAxcmVtIDFyZW0sXHJcbiAgaW5wdXQtc21hbGwtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXHJcbiAgaW5wdXQtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxyXG4gIGlucHV0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IHRleHQtcGFyYWdyYXBoLWZvbnQtd2VpZ2h0LFxyXG4gIGlucHV0LXByaW1hcnktYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1wcmltYXJ5LWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtcHJpbWFyeS1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1pbmZvLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtaW5mby1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1pbmZvLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1zdWNjZXNzLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtc3VjY2Vzcy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC13YXJuaW5nLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtd2FybmluZy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1kYW5nZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1kYW5nZXItZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1kYW5nZXItZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1kYW5nZXItaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1jb250cm9sLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtY29udHJvbC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWNvbnRyb2wtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcblxyXG4gIHNlbGVjdC10aW55LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LXNtYWxsLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LW1lZGl1bS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIHNlbGVjdC1sYXJnZS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIHNlbGVjdC1naWFudC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIHNlbGVjdC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMCxcclxuICBzZWxlY3Qtc2VtaS1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLFxyXG4gIHNlbGVjdC1yb3VuZC1ib3JkZXItcmFkaXVzOiAwLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJvcmRlci13aWR0aDogMCAwIDFweCAwLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogc2hhZG93LFxyXG4gIG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZTogbm9uZSxcclxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG5vbmUsXHJcbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTcwMCxcclxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YSxcclxuICBvcHRpb24tZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICM1MjUyNTIsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IG9wdGlvbi1zZWxlY3RlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxyXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLWZvY3VzLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcclxuICBvcHRpb24tdGlueS10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIG9wdGlvbi1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiBtYXRlcmlhbC1yZWd1bGFyLWZvbnQtd2VpZ2h0LFxyXG4gIG9wdGlvbi1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBvcHRpb24tbGFyZ2UtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBvcHRpb24tZ2lhbnQtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodFxyXG4pO1xyXG5cclxuJG5iLXRoZW1lczogbmItcmVnaXN0ZXItdGhlbWUoJHRoZW1lLCBtYXRlcmlhbC1kYXJrLCBkYXJrKTtcclxuIiwiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICovXHJcblxyXG5AaW1wb3J0ICd+QG5lYnVsYXIvdGhlbWUvc3R5bGVzL2NvcmUvZnVuY3Rpb25zJztcclxuQGltcG9ydCAnfkBuZWJ1bGFyL3RoZW1lL3N0eWxlcy9jb3JlL21peGlucyc7XHJcblxyXG4kdGhlbWU6IChcclxuICBjb2xvci1wcmltYXJ5LTEwMDogI2U4Y2JmZSxcclxuICBjb2xvci1wcmltYXJ5LTIwMDogI2NlOTdmZCxcclxuICBjb2xvci1wcmltYXJ5LTMwMDogI2FlNjNmOSxcclxuICBjb2xvci1wcmltYXJ5LTQwMDogIzkwM2RmNCxcclxuICBjb2xvci1wcmltYXJ5LTUwMDogIzYyMDBlZSxcclxuICBjb2xvci1wcmltYXJ5LTYwMDogIzRiMDBjYyxcclxuICBjb2xvci1wcmltYXJ5LTcwMDogIzM4MDBhYixcclxuICBjb2xvci1wcmltYXJ5LTgwMDogIzI3MDA4YSxcclxuICBjb2xvci1wcmltYXJ5LTkwMDogIzFiMDA3MixcclxuXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0xMDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4wOCksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4xNiksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4yNCksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC00MDA6IHJnYmEoOTgsIDAsIDIzOCwgMC4zMiksXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC01MDA6IHJnYmEoOTgsIDAsIDIzOCwgMC40KSxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTYwMDogcmdiYSg5OCwgMCwgMjM4LCAwLjQ4KSxcclxuXHJcbiAgY29sb3Itc3VjY2Vzcy0xMDA6ICNlZGZiZDEsXHJcbiAgY29sb3Itc3VjY2Vzcy0yMDA6ICNkN2Y3YTYsXHJcbiAgY29sb3Itc3VjY2Vzcy0zMDA6ICNiNGU3NzUsXHJcbiAgY29sb3Itc3VjY2Vzcy00MDA6ICM4ZmNmNTAsXHJcbiAgY29sb3Itc3VjY2Vzcy01MDA6ICM2MGFmMjAsXHJcbiAgY29sb3Itc3VjY2Vzcy02MDA6ICM0OTk2MTcsXHJcbiAgY29sb3Itc3VjY2Vzcy03MDA6ICMzNTdkMTAsXHJcbiAgY29sb3Itc3VjY2Vzcy04MDA6ICMyNDY1MGEsXHJcbiAgY29sb3Itc3VjY2Vzcy05MDA6ICMxNzUzMDYsXHJcblxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjA4KSxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC4xNiksXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC0zMDA6IHJnYmEoOTYsIDE3NSwgMzIsIDAuMjQpLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDk2LCAxNzUsIDMyLCAwLjMyKSxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTUwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC40KSxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTYwMDogcmdiYSg5NiwgMTc1LCAzMiwgMC40OCksXHJcblxyXG4gIGNvbG9yLWluZm8tMTAwOiAjY2NmN2ZlLFxyXG4gIGNvbG9yLWluZm8tMjAwOiAjOTllOWZkLFxyXG4gIGNvbG9yLWluZm8tMzAwOiAjNjZkM2Y5LFxyXG4gIGNvbG9yLWluZm8tNDAwOiAjNDBiYmY0LFxyXG4gIGNvbG9yLWluZm8tNTAwOiAjMDQ5NWVlLFxyXG4gIGNvbG9yLWluZm8tNjAwOiAjMDI3M2NjLFxyXG4gIGNvbG9yLWluZm8tNzAwOiAjMDI1NmFiLFxyXG4gIGNvbG9yLWluZm8tODAwOiAjMDEzZDhhLFxyXG4gIGNvbG9yLWluZm8tOTAwOiAjMDAyYjcyLFxyXG5cclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTEwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4wOCksXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC0yMDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuMTYpLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDQsIDE0OSwgMjM4LCAwLjI0KSxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LTQwMDogcmdiYSg0LCAxNDksIDIzOCwgMC4zMiksXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC01MDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuNCksXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC02MDA6IHJnYmEoNCwgMTQ5LCAyMzgsIDAuNDgpLFxyXG5cclxuICBjb2xvci13YXJuaW5nLTEwMDogI2ZmZjNjZCxcclxuICBjb2xvci13YXJuaW5nLTIwMDogI2ZmZTQ5YixcclxuICBjb2xvci13YXJuaW5nLTMwMDogI2ZmZDE2OSxcclxuICBjb2xvci13YXJuaW5nLTQwMDogI2ZmYmU0MyxcclxuICBjb2xvci13YXJuaW5nLTUwMDogI2ZmOWYwNSxcclxuICBjb2xvci13YXJuaW5nLTYwMDogI2RiODAwMyxcclxuICBjb2xvci13YXJuaW5nLTcwMDogI2I3NjMwMixcclxuICBjb2xvci13YXJuaW5nLTgwMDogIzkzNGEwMSxcclxuICBjb2xvci13YXJuaW5nLTkwMDogIzdhMzgwMCxcclxuXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMDgpLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtMjAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjE2KSxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTMwMDogcmdiYSgyNTUsIDE1OSwgNSwgMC4yNCksXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAxNTksIDUsIDAuMzIpLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNTAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjQpLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtNjAwOiByZ2JhKDI1NSwgMTU5LCA1LCAwLjQ4KSxcclxuXHJcbiAgY29sb3ItZGFuZ2VyLTEwMDogI2ZiZDJjOCxcclxuICBjb2xvci1kYW5nZXItMjAwOiAjZjc5ZTk0LFxyXG4gIGNvbG9yLWRhbmdlci0zMDA6ICNlNzVkNWMsXHJcbiAgY29sb3ItZGFuZ2VyLTQwMDogI2NmMzM0MSxcclxuICBjb2xvci1kYW5nZXItNTAwOiAjYjAwMDIwLFxyXG4gIGNvbG9yLWRhbmdlci02MDA6ICM5NzAwMjksXHJcbiAgY29sb3ItZGFuZ2VyLTcwMDogIzdlMDAyZSxcclxuICBjb2xvci1kYW5nZXItODAwOiAjNjYwMDJmLFxyXG4gIGNvbG9yLWRhbmdlci05MDA6ICM1NDAwMmYsXHJcblxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4wOCksXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjE2KSxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtMzAwOiByZ2JhKDE3NiwgMCwgMzIsIDAuMjQpLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC00MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC4zMiksXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxNzYsIDAsIDMyLCAwLjQpLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC02MDA6IHJnYmEoMTc2LCAwLCAzMiwgMC40OCksXHJcblxyXG4gIGNvbG9yLWJhc2ljLTEwMDogI2ZmZmZmZixcclxuICBjb2xvci1iYXNpYy0yMDA6ICNmNWY1ZjUsXHJcbiAgY29sb3ItYmFzaWMtMzAwOiAjZWJlYmViLFxyXG4gIGNvbG9yLWJhc2ljLTQwMDogI2UwZTBlMCxcclxuICBjb2xvci1iYXNpYy01MDA6ICNiM2IzYjMsXHJcbiAgY29sb3ItYmFzaWMtNjAwOiAjODM4MzgzLFxyXG4gIGNvbG9yLWJhc2ljLTcwMDogIzYzNjM2MyxcclxuICBjb2xvci1iYXNpYy04MDA6ICM0MjQyNDIsXHJcbiAgY29sb3ItYmFzaWMtOTAwOiAjMjQyNDI0LFxyXG4gIGNvbG9yLWJhc2ljLTEwMDA6ICMxYjFiMWIsXHJcbiAgY29sb3ItYmFzaWMtMTEwMDogIzAwMDAwMCxcclxuXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMTAwOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMDgpLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjE2KSxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDA6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC4yNCksXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNDAwOiByZ2JhKDEzMSwgMTMxLCAxMzEsIDAuMzIpLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTUwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQpLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTYwMDogcmdiYSgxMzEsIDEzMSwgMTMxLCAwLjQ4KSxcclxuXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0xMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCksXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0yMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNiksXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC0zMDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCksXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC00MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMiksXHJcbiAgY29sb3ItYmFzaWMtY29udHJvbC10cmFuc3BhcmVudC01MDA6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcclxuICBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTYwMDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KSxcclxuXHJcbiAgY29sb3ItYmFzaWMtZm9jdXM6IGNvbG9yLWJhc2ljLTQwMCxcclxuICBjb2xvci1iYXNpYy1ob3ZlcjogY29sb3ItYmFzaWMtMjAwLFxyXG4gIGNvbG9yLWJhc2ljLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBjb2xvci1iYXNpYy1hY3RpdmU6IGNvbG9yLWJhc2ljLTQwMCxcclxuICBjb2xvci1iYXNpYy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWJhc2ljLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWJhc2ljLWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtaG92ZXIsXHJcbiAgY29sb3ItYmFzaWMtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLWRlZmF1bHQsXHJcbiAgY29sb3ItYmFzaWMtYWN0aXZlLWJvcmRlcjogY29sb3ItYmFzaWMtYWN0aXZlLFxyXG4gIGNvbG9yLWJhc2ljLWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTUwMCxcclxuICBjb2xvci1iYXNpYy10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3ItcHJpbWFyeS1mb2N1czogY29sb3ItcHJpbWFyeS02MDAsXHJcbiAgY29sb3ItcHJpbWFyeS1ob3ZlcjogY29sb3ItcHJpbWFyeS00MDAsXHJcbiAgY29sb3ItcHJpbWFyeS1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBjb2xvci1wcmltYXJ5LWFjdGl2ZTogY29sb3ItcHJpbWFyeS02MDAsXHJcbiAgY29sb3ItcHJpbWFyeS1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXByaW1hcnktZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTcwMCxcclxuICBjb2xvci1wcmltYXJ5LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS1ob3ZlcixcclxuICBjb2xvci1wcmltYXJ5LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWRlZmF1bHQsXHJcbiAgY29sb3ItcHJpbWFyeS1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LWFjdGl2ZSxcclxuICBjb2xvci1wcmltYXJ5LWRpc2FibGVkLWJvcmRlcjogY29sb3ItcHJpbWFyeS1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1mb2N1czogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1ob3ZlcjogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXByaW1hcnktdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3ItcHJpbWFyeS01MDAsXHJcbiAgY29sb3ItcHJpbWFyeS10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBjb2xvci1wcmltYXJ5LXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci1zdWNjZXNzLWZvY3VzOiBjb2xvci1zdWNjZXNzLTYwMCxcclxuICBjb2xvci1zdWNjZXNzLWhvdmVyOiBjb2xvci1zdWNjZXNzLTQwMCxcclxuICBjb2xvci1zdWNjZXNzLWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtYWN0aXZlOiBjb2xvci1zdWNjZXNzLTYwMCxcclxuICBjb2xvci1zdWNjZXNzLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNzAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLWhvdmVyLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtZGVmYXVsdCxcclxuICBjb2xvci1zdWNjZXNzLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtYWN0aXZlLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3Itc3VjY2Vzcy10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtaG92ZXItYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1zdWNjZXNzLTUwMCxcclxuICBjb2xvci1zdWNjZXNzLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLXN1Y2Nlc3MtNTAwLFxyXG4gIGNvbG9yLXN1Y2Nlc3MtdHJhbnNwYXJlbnQtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcblxyXG4gIGNvbG9yLWluZm8tZm9jdXM6IGNvbG9yLWluZm8tNjAwLFxyXG4gIGNvbG9yLWluZm8taG92ZXI6IGNvbG9yLWluZm8tNDAwLFxyXG4gIGNvbG9yLWluZm8tZGVmYXVsdDogY29sb3ItaW5mby01MDAsXHJcbiAgY29sb3ItaW5mby1hY3RpdmU6IGNvbG9yLWluZm8tNjAwLFxyXG4gIGNvbG9yLWluZm8tZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1pbmZvLWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby03MDAsXHJcbiAgY29sb3ItaW5mby1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8taG92ZXIsXHJcbiAgY29sb3ItaW5mby1kZWZhdWx0LWJvcmRlcjogY29sb3ItaW5mby1kZWZhdWx0LFxyXG4gIGNvbG9yLWluZm8tYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby1hY3RpdmUsXHJcbiAgY29sb3ItaW5mby1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWluZm8tZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZm9jdXM6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdDogY29sb3ItaW5mby10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1hY3RpdmU6IGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1pbmZvLXRyYW5zcGFyZW50LWZvY3VzLWJvcmRlcjogY29sb3ItaW5mby01MDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGNvbG9yLWluZm8tdHJhbnNwYXJlbnQtYWN0aXZlLWJvcmRlcjogY29sb3ItaW5mby01MDAsXHJcbiAgY29sb3ItaW5mby10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3Itd2FybmluZy1mb2N1czogY29sb3Itd2FybmluZy02MDAsXHJcbiAgY29sb3Itd2FybmluZy1ob3ZlcjogY29sb3Itd2FybmluZy00MDAsXHJcbiAgY29sb3Itd2FybmluZy1kZWZhdWx0OiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBjb2xvci13YXJuaW5nLWFjdGl2ZTogY29sb3Itd2FybmluZy02MDAsXHJcbiAgY29sb3Itd2FybmluZy1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG4gIGNvbG9yLXdhcm5pbmctZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTcwMCxcclxuICBjb2xvci13YXJuaW5nLWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy1ob3ZlcixcclxuICBjb2xvci13YXJuaW5nLWRlZmF1bHQtYm9yZGVyOiBjb2xvci13YXJuaW5nLWRlZmF1bHQsXHJcbiAgY29sb3Itd2FybmluZy1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLWFjdGl2ZSxcclxuICBjb2xvci13YXJuaW5nLWRpc2FibGVkLWJvcmRlcjogY29sb3Itd2FybmluZy1kaXNhYmxlZCxcclxuXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1mb2N1czogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1ob3ZlcjogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0OiBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LTEwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3Itd2FybmluZy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kaXNhYmxlZDogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMjAwLFxyXG4gIGNvbG9yLXdhcm5pbmctdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1kZWZhdWx0LWJvcmRlcjogY29sb3Itd2FybmluZy01MDAsXHJcbiAgY29sb3Itd2FybmluZy10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBjb2xvci13YXJuaW5nLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBjb2xvci1kYW5nZXItZm9jdXM6IGNvbG9yLWRhbmdlci02MDAsXHJcbiAgY29sb3ItZGFuZ2VyLWhvdmVyOiBjb2xvci1kYW5nZXItNDAwLFxyXG4gIGNvbG9yLWRhbmdlci1kZWZhdWx0OiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGNvbG9yLWRhbmdlci1hY3RpdmU6IGNvbG9yLWRhbmdlci02MDAsXHJcbiAgY29sb3ItZGFuZ2VyLWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0zMDAsXHJcbiAgY29sb3ItZGFuZ2VyLWZvY3VzLWJvcmRlcjogY29sb3ItZGFuZ2VyLTcwMCxcclxuICBjb2xvci1kYW5nZXItaG92ZXItYm9yZGVyOiBjb2xvci1kYW5nZXItaG92ZXIsXHJcbiAgY29sb3ItZGFuZ2VyLWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcclxuICBjb2xvci1kYW5nZXItYWN0aXZlLWJvcmRlcjogY29sb3ItZGFuZ2VyLWFjdGl2ZSxcclxuICBjb2xvci1kYW5nZXItZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1kYW5nZXItZGlzYWJsZWQsXHJcblxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1mb2N1czogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtaG92ZXI6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC0xMDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWFjdGl2ZTogY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1kYW5nZXItdHJhbnNwYXJlbnQtZm9jdXMtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1ob3Zlci1ib3JkZXI6IGNvbG9yLWRhbmdlci01MDAsXHJcbiAgY29sb3ItZGFuZ2VyLXRyYW5zcGFyZW50LWRlZmF1bHQtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1hY3RpdmUtYm9yZGVyOiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGNvbG9yLWRhbmdlci10cmFuc3BhcmVudC1kaXNhYmxlZC1ib3JkZXI6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuXHJcbiAgY29sb3ItY29udHJvbC1mb2N1czogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXI6IGNvbG9yLWJhc2ljLTIwMCxcclxuICBjb2xvci1jb250cm9sLWRlZmF1bHQ6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBjb2xvci1jb250cm9sLWFjdGl2ZTogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQ6IGNvbG9yLWJhc2ljLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1jb250cm9sLWZvY3VzLWJvcmRlcjogY29sb3ItYmFzaWMtNTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtaG92ZXItYm9yZGVyOiBjb2xvci1jb250cm9sLWhvdmVyLFxyXG4gIGNvbG9yLWNvbnRyb2wtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtZGVmYXVsdCxcclxuICBjb2xvci1jb250cm9sLWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWNvbnRyb2wtYWN0aXZlLFxyXG4gIGNvbG9yLWNvbnRyb2wtZGlzYWJsZWQtYm9yZGVyOiBjb2xvci1jb250cm9sLWRpc2FibGVkLFxyXG5cclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWZvY3VzOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTIwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRlZmF1bHQ6IGNvbG9yLWJhc2ljLWNvbnRyb2wtdHJhbnNwYXJlbnQtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtYWN0aXZlOiBjb2xvci1iYXNpYy1jb250cm9sLXRyYW5zcGFyZW50LTMwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkOiBjb2xvci1iYXNpYy10cmFuc3BhcmVudC0yMDAsXHJcbiAgY29sb3ItY29udHJvbC10cmFuc3BhcmVudC1mb2N1cy1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWhvdmVyLWJvcmRlcjogY29sb3ItYmFzaWMtMTAwLFxyXG4gIGNvbG9yLWNvbnRyb2wtdHJhbnNwYXJlbnQtZGVmYXVsdC1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWFjdGl2ZS1ib3JkZXI6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBjb2xvci1jb250cm9sLXRyYW5zcGFyZW50LWRpc2FibGVkLWJvcmRlcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtMzAwLFxyXG5cclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTMwMCxcclxuICBiYWNrZ3JvdW5kLWJhc2ljLWNvbG9yLTM6ICNmYWZhZmEsXHJcbiAgYmFja2dyb3VuZC1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXHJcblxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMTogY29sb3ItYmFzaWMtODAwLFxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxyXG4gIGJhY2tncm91bmQtYWx0ZXJuYXRpdmUtY29sb3ItMzogY29sb3ItYmFzaWMtMTAwMCxcclxuICBiYWNrZ3JvdW5kLWFsdGVybmF0aXZlLWNvbG9yLTQ6IGNvbG9yLWJhc2ljLTExMDAsXHJcblxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci0xOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTI6IGNvbG9yLWJhc2ljLTIwMCxcclxuICBib3JkZXItYmFzaWMtY29sb3ItMzogY29sb3ItYmFzaWMtMzAwLFxyXG4gIGJvcmRlci1iYXNpYy1jb2xvci00OiBjb2xvci1iYXNpYy00MDAsXHJcbiAgYm9yZGVyLWJhc2ljLWNvbG9yLTU6IGNvbG9yLWJhc2ljLTUwMCxcclxuXHJcbiAgYm9yZGVyLWFsdGVybmF0aXZlLWNvbG9yLTE6IGNvbG9yLWJhc2ljLTgwMCxcclxuICBib3JkZXItYWx0ZXJuYXRpdmUtY29sb3ItMjogY29sb3ItYmFzaWMtOTAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci0zOiBjb2xvci1iYXNpYy0xMDAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci00OiBjb2xvci1iYXNpYy0xMTAwLFxyXG4gIGJvcmRlci1hbHRlcm5hdGl2ZS1jb2xvci01OiBjb2xvci1iYXNpYy0xMTAwLFxyXG5cclxuICBib3JkZXItcHJpbWFyeS1jb2xvci0xOiBjb2xvci1wcmltYXJ5LTUwMCxcclxuICBib3JkZXItcHJpbWFyeS1jb2xvci0yOiBjb2xvci1wcmltYXJ5LTYwMCxcclxuICBib3JkZXItcHJpbWFyeS1jb2xvci0zOiBjb2xvci1wcmltYXJ5LTcwMCxcclxuICBib3JkZXItcHJpbWFyeS1jb2xvci00OiBjb2xvci1wcmltYXJ5LTgwMCxcclxuICBib3JkZXItcHJpbWFyeS1jb2xvci01OiBjb2xvci1wcmltYXJ5LTkwMCxcclxuXHJcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMTogY29sb3Itc3VjY2Vzcy01MDAsXHJcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMjogY29sb3Itc3VjY2Vzcy02MDAsXHJcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItMzogY29sb3Itc3VjY2Vzcy03MDAsXHJcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItNDogY29sb3Itc3VjY2Vzcy04MDAsXHJcbiAgYm9yZGVyLXN1Y2Nlc3MtY29sb3ItNTogY29sb3Itc3VjY2Vzcy05MDAsXHJcblxyXG4gIGJvcmRlci1pbmZvLWNvbG9yLTE6IGNvbG9yLWluZm8tNTAwLFxyXG4gIGJvcmRlci1pbmZvLWNvbG9yLTI6IGNvbG9yLWluZm8tNjAwLFxyXG4gIGJvcmRlci1pbmZvLWNvbG9yLTM6IGNvbG9yLWluZm8tNzAwLFxyXG4gIGJvcmRlci1pbmZvLWNvbG9yLTQ6IGNvbG9yLWluZm8tODAwLFxyXG4gIGJvcmRlci1pbmZvLWNvbG9yLTU6IGNvbG9yLWluZm8tOTAwLFxyXG5cclxuICBib3JkZXItd2FybmluZy1jb2xvci0xOiBjb2xvci13YXJuaW5nLTUwMCxcclxuICBib3JkZXItd2FybmluZy1jb2xvci0yOiBjb2xvci13YXJuaW5nLTYwMCxcclxuICBib3JkZXItd2FybmluZy1jb2xvci0zOiBjb2xvci13YXJuaW5nLTcwMCxcclxuICBib3JkZXItd2FybmluZy1jb2xvci00OiBjb2xvci13YXJuaW5nLTgwMCxcclxuICBib3JkZXItd2FybmluZy1jb2xvci01OiBjb2xvci13YXJuaW5nLTkwMCxcclxuXHJcbiAgYm9yZGVyLWRhbmdlci1jb2xvci0xOiBjb2xvci1kYW5nZXItNTAwLFxyXG4gIGJvcmRlci1kYW5nZXItY29sb3ItMjogY29sb3ItZGFuZ2VyLTYwMCxcclxuICBib3JkZXItZGFuZ2VyLWNvbG9yLTM6IGNvbG9yLWRhbmdlci03MDAsXHJcbiAgYm9yZGVyLWRhbmdlci1jb2xvci00OiBjb2xvci1kYW5nZXItODAwLFxyXG4gIGJvcmRlci1kYW5nZXItY29sb3ItNTogY29sb3ItZGFuZ2VyLTkwMCxcclxuXHJcbiAgdGV4dC1iYXNpYy1jb2xvcjogY29sb3ItYmFzaWMtODAwLFxyXG4gIHRleHQtYWx0ZXJuYXRlLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgdGV4dC1jb250cm9sLWNvbG9yOiBjb2xvci1iYXNpYy0xMDAsXHJcbiAgdGV4dC1kaXNhYmxlZC1jb2xvcjogY29sb3ItYmFzaWMtdHJhbnNwYXJlbnQtNjAwLFxyXG4gIHRleHQtaGludC1jb2xvcjogY29sb3ItYmFzaWMtNjAwLFxyXG5cclxuICB0ZXh0LXByaW1hcnktY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcclxuICB0ZXh0LXByaW1hcnktZm9jdXMtY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXHJcbiAgdGV4dC1wcmltYXJ5LWhvdmVyLWNvbG9yOiBjb2xvci1wcmltYXJ5LWhvdmVyLFxyXG4gIHRleHQtcHJpbWFyeS1hY3RpdmUtY29sb3I6IGNvbG9yLXByaW1hcnktYWN0aXZlLFxyXG4gIHRleHQtcHJpbWFyeS1kaXNhYmxlZC1jb2xvcjogY29sb3ItcHJpbWFyeS00MDAsXHJcblxyXG4gIHRleHQtc3VjY2Vzcy1jb2xvcjogY29sb3Itc3VjY2Vzcy1kZWZhdWx0LFxyXG4gIHRleHQtc3VjY2Vzcy1mb2N1cy1jb2xvcjogY29sb3Itc3VjY2Vzcy1mb2N1cyxcclxuICB0ZXh0LXN1Y2Nlc3MtaG92ZXItY29sb3I6IGNvbG9yLXN1Y2Nlc3MtaG92ZXIsXHJcbiAgdGV4dC1zdWNjZXNzLWFjdGl2ZS1jb2xvcjogY29sb3Itc3VjY2Vzcy1hY3RpdmUsXHJcbiAgdGV4dC1zdWNjZXNzLWRpc2FibGVkLWNvbG9yOiBjb2xvci1zdWNjZXNzLTQwMCxcclxuXHJcbiAgdGV4dC1pbmZvLWNvbG9yOiBjb2xvci1pbmZvLWRlZmF1bHQsXHJcbiAgdGV4dC1pbmZvLWZvY3VzLWNvbG9yOiBjb2xvci1pbmZvLWZvY3VzLFxyXG4gIHRleHQtaW5mby1ob3Zlci1jb2xvcjogY29sb3ItaW5mby1ob3ZlcixcclxuICB0ZXh0LWluZm8tYWN0aXZlLWNvbG9yOiBjb2xvci1pbmZvLWFjdGl2ZSxcclxuICB0ZXh0LWluZm8tZGlzYWJsZWQtY29sb3I6IGNvbG9yLWluZm8tNDAwLFxyXG5cclxuICB0ZXh0LXdhcm5pbmctY29sb3I6IGNvbG9yLXdhcm5pbmctZGVmYXVsdCxcclxuICB0ZXh0LXdhcm5pbmctZm9jdXMtY29sb3I6IGNvbG9yLXdhcm5pbmctZm9jdXMsXHJcbiAgdGV4dC13YXJuaW5nLWhvdmVyLWNvbG9yOiBjb2xvci13YXJuaW5nLWhvdmVyLFxyXG4gIHRleHQtd2FybmluZy1hY3RpdmUtY29sb3I6IGNvbG9yLXdhcm5pbmctYWN0aXZlLFxyXG4gIHRleHQtd2FybmluZy1kaXNhYmxlZC1jb2xvcjogY29sb3Itd2FybmluZy00MDAsXHJcblxyXG4gIHRleHQtZGFuZ2VyLWNvbG9yOiBjb2xvci1kYW5nZXItZGVmYXVsdCxcclxuICB0ZXh0LWRhbmdlci1mb2N1cy1jb2xvcjogY29sb3ItZGFuZ2VyLWZvY3VzLFxyXG4gIHRleHQtZGFuZ2VyLWhvdmVyLWNvbG9yOiBjb2xvci1kYW5nZXItaG92ZXIsXHJcbiAgdGV4dC1kYW5nZXItYWN0aXZlLWNvbG9yOiBjb2xvci1kYW5nZXItYWN0aXZlLFxyXG4gIHRleHQtZGFuZ2VyLWRpc2FibGVkLWNvbG9yOiBjb2xvci1kYW5nZXItNDAwLFxyXG5cclxuICBmb250LWZhbWlseS1wcmltYXJ5OiB1bnF1b3RlKCdSb2JvdG8sIHNhbnMtc2VyaWYnKSxcclxuXHJcbiAgc2hhZG93OiB1bnF1b3RlKCcwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4xMiknKSxcclxuICBjYXJkLXNoYWRvdzogc2hhZG93LFxyXG4gIGhlYWRlci1zaGFkb3c6IHVucXVvdGUoXHJcbiAgICAnMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMiknXHJcbiAgKSxcclxuXHJcbiAgaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLXByaW1hcnktZGVmYXVsdCxcclxuICBmb290ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItcHJpbWFyeS1kZWZhdWx0LFxyXG4gIGhlYWRlci10ZXh0LWNvbG9yOiB0ZXh0LWFsdGVybmF0ZS1jb2xvcixcclxuICBmb290ZXItdGV4dC1jb2xvcjogdGV4dC1hbHRlcm5hdGUtY29sb3IsXHJcbiAgZm9vdGVyLXRleHQtaGlnaGxpZ2h0LWNvbG9yOiBmb290ZXItdGV4dC1jb2xvcixcclxuICBzaWRlYmFyLWJhY2tncm91bmQtY29sb3I6IGJhY2tncm91bmQtYmFzaWMtY29sb3ItMixcclxuXHJcbiAgbWVudS10ZXh0LWZvbnQtd2VpZ2h0OiA0MDAsXHJcbiAgbWVudS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpLFxyXG4gIG1lbnUtaXRlbS1ob3Zlci10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpLFxyXG4gIG1lbnUtaXRlbS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpLFxyXG4gIG1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KSxcclxuXHJcbiAgbWVudS1pdGVtLWljb24tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NyksXHJcbiAgbWVudS1pdGVtLWljb24taG92ZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NyksXHJcblxyXG4gIG1lbnUtc3VibWVudS1pdGVtLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCksXHJcbiAgbWVudS1zdWJtZW51LWl0ZW0tYWN0aXZlLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICBtZW51LXN1Ym1lbnUtaXRlbS1hY3RpdmUtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA4KSxcclxuXHJcbiAgY2FyZC1ib3JkZXItc3R5bGU6IG5vbmUsXHJcbiAgY2FyZC1kaXZpZGVyLWNvbG9yOiBjb2xvci1iYXNpYy0yMDAsXHJcblxyXG4gIGlucHV0LWJvcmRlci13aWR0aDogMXB4LFxyXG4gIGlucHV0LWJhc2ljLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSxcclxuICBpbnB1dC1iYXNpYy1mb2N1cy1ib3JkZXItY29sb3I6IGNvbG9yLXByaW1hcnktZm9jdXMsXHJcbiAgaW5wdXQtYmFzaWMtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpLFxyXG4gIGlucHV0LWJhc2ljLWhvdmVyLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKSxcclxuICBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBpbnB1dC1yZWN0YW5nbGUtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcclxuICBpbnB1dC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAuMjVyZW0sXHJcbiAgaW5wdXQtcm91bmQtYm9yZGVyLXJhZGl1czogMC4yNXJlbSxcclxuICBpbnB1dC1tZWRpdW0tcGFkZGluZzogMC43NXJlbSAxcmVtLFxyXG4gIGlucHV0LWxhcmdlLXBhZGRpbmc6IDFyZW0gMXJlbSxcclxuICBpbnB1dC1zbWFsbC10ZXh0LWZvbnQtd2VpZ2h0OiB0ZXh0LXBhcmFncmFwaC1mb250LXdlaWdodCxcclxuICBpbnB1dC1tZWRpdW0tdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXHJcbiAgaW5wdXQtbGFyZ2UtdGV4dC1mb250LXdlaWdodDogdGV4dC1wYXJhZ3JhcGgtZm9udC13ZWlnaHQsXHJcbiAgaW5wdXQtcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXByaW1hcnktZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtcHJpbWFyeS1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWluZm8tYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtaW5mby1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWluZm8taG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtc3VjY2Vzcy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXN1Y2Nlc3MtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LXdhcm5pbmctZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtd2FybmluZy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWRhbmdlci1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWNvbnRyb2wtYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBpbnB1dC1jb250cm9sLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IGlucHV0LWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgaW5wdXQtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBpbnB1dC1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIGlucHV0LWNvbnRyb2wtaG92ZXItYmFja2dyb3VuZC1jb2xvcjogaW5wdXQtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuXHJcbiAgc2VsZWN0LXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBzZWxlY3Qtc21hbGwtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBzZWxlY3QtbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgc2VsZWN0LXJlY3RhbmdsZS1ib3JkZXItcmFkaXVzOiAwLFxyXG4gIHNlbGVjdC1zZW1pLXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsXHJcbiAgc2VsZWN0LXJvdW5kLWJvcmRlci1yYWRpdXM6IDAsXHJcbiAgc2VsZWN0LW91dGxpbmUtYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDAsXHJcbiAgc2VsZWN0LW91dGxpbmUtYmFzaWMtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJvcmRlci1jb2xvcjogY29sb3ItcHJpbWFyeS1mb2N1cyxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1ib3JkZXItY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJvcmRlci1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCxcclxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtcHJpbWFyeS1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXByaW1hcnktaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1wcmltYXJ5LWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXN1Y2Nlc3MtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1zdWNjZXNzLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtc3VjY2Vzcy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1pbmZvLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtaW5mby1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWluZm8tZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtd2FybmluZy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLXdhcm5pbmctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtaG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS13YXJuaW5nLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWZvY3VzLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWZvY3VzLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtZGFuZ2VyLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWRpc2FibGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIHNlbGVjdC1vdXRsaW5lLWNvbnRyb2wtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogc2VsZWN0LW91dGxpbmUtYmFzaWMtZm9jdXMtYmFja2dyb3VuZC1jb2xvcixcclxuICBzZWxlY3Qtb3V0bGluZS1jb250cm9sLWhvdmVyLWJhY2tncm91bmQtY29sb3I6IHNlbGVjdC1vdXRsaW5lLWJhc2ljLWhvdmVyLWJhY2tncm91bmQtY29sb3IsXHJcbiAgc2VsZWN0LW91dGxpbmUtY29udHJvbC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yOiBzZWxlY3Qtb3V0bGluZS1iYXNpYy1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yLFxyXG4gIG9wdGlvbi1saXN0LXNoYWRvdzogc2hhZG93LFxyXG4gIG9wdGlvbi1saXN0LWJvcmRlci1zdHlsZTogbm9uZSxcclxuICBvcHRpb24tbGlzdC1hZGphY2VudC1ib3JkZXItc3R5bGU6IG5vbmUsXHJcbiAgb3B0aW9uLWJhY2tncm91bmQtY29sb3I6IGNvbG9yLWJhc2ljLTEwMCxcclxuICBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMjAwLFxyXG4gIG9wdGlvbi1mb2N1cy1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24taG92ZXItYmFja2dyb3VuZC1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcjogY29sb3ItYmFzaWMtMzAwLFxyXG4gIG9wdGlvbi1zZWxlY3RlZC1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiBvcHRpb24tc2VsZWN0ZWQtYmFja2dyb3VuZC1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtZm9jdXMtYmFja2dyb3VuZC1jb2xvcjogb3B0aW9uLXNlbGVjdGVkLWJhY2tncm91bmQtY29sb3IsXHJcbiAgb3B0aW9uLXNlbGVjdGVkLXRleHQtY29sb3I6IHRleHQtcHJpbWFyeS1jb2xvcixcclxuICBvcHRpb24tc2VsZWN0ZWQtaG92ZXItdGV4dC1jb2xvcjogdGV4dC1wcmltYXJ5LWNvbG9yLFxyXG4gIG9wdGlvbi1zZWxlY3RlZC1mb2N1cy10ZXh0LWNvbG9yOiB0ZXh0LXByaW1hcnktY29sb3IsXHJcbiAgb3B0aW9uLXRpbnktdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBvcHRpb24tc21hbGwtdGV4dC1mb250LXdlaWdodDogbWF0ZXJpYWwtcmVndWxhci1mb250LXdlaWdodCxcclxuICBvcHRpb24tbWVkaXVtLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgb3B0aW9uLWxhcmdlLXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHQsXHJcbiAgb3B0aW9uLWdpYW50LXRleHQtZm9udC13ZWlnaHQ6IG1hdGVyaWFsLXJlZ3VsYXItZm9udC13ZWlnaHRcclxuKTtcclxuXHJcbiRuYi10aGVtZXM6IG5iLXJlZ2lzdGVyLXRoZW1lKCR0aGVtZSwgbWF0ZXJpYWwtbGlnaHQsIGRlZmF1bHQpO1xyXG4iLCJAaW1wb3J0ICcuLi9AdGhlbWUvc3R5bGVzL3RoZW1lcyc7XHJcblxyXG5AaW5jbHVkZSBuYi1pbnN0YWxsLWNvbXBvbmVudCgpIHtcclxuICA6Om5nLWRlZXAgcm91dGVyLW91dGxldCArICoge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBhbmltYXRpb246IGZhZGUgMXM7XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlIHtcclxuICAgICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuLypcbiAgRGVjbGFyZSB2YXJpYWJsZXMgYmVmb3JlIG1ha2luZyB0aGVtIGdsb2JhbC5cbiAgZGFydC1zYXNzIGRvZXNuJ3QgYWxsb3cgdG8gZGVjbGFyZSB2YXJpYWJsZSB3aXRoICFnbG9iYWwuXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbi8qKlxuICogVGhpcyBtaXhpbiBnZW5lcmF0ZXMga2V5ZmFtZXMuXG4gKiBCZWNhdXNlIG9mIGFsbCBrZXlmcmFtZXMgY2FuJ3QgYmUgc2NvcGVkLFxuICogd2UgbmVlZCB0byBwdXRzIHVuaXF1ZSBuYW1lIGluIGVhY2ggYnRuLXB1bHNlIGNhbGwuXG4gKi9cbi8qXG5cbkFjY29yZGluZyB0byB0aGUgc3BlY2lmaWNhdGlvbiAoaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzcy1zY29waW5nLTEvI2hvc3Qtc2VsZWN0b3IpXG46aG9zdCBhbmQgOmhvc3QtY29udGV4dCBhcmUgcHNldWRvLWNsYXNzZXMuIFNvIHdlIGFzc3VtZSB0aGV5IGNvdWxkIGJlIGNvbWJpbmVkLFxubGlrZSBvdGhlciBwc2V1ZG8tY2xhc3NlcywgZXZlbiBzYW1lIG9uZXMuXG5Gb3IgZXhhbXBsZTogJzpudGgtb2YtdHlwZSgybik6bnRoLW9mLXR5cGUoZXZlbiknLlxuXG5JZGVhbCBzb2x1dGlvbiB3b3VsZCBiZSB0byBwcmVwZW5kIGFueSBzZWxlY3RvciB3aXRoIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKS5cblRoZW4gbmVidWxhciBjb21wb25lbnRzIHdpbGwgYmVoYXZlIGFzIGFuIGh0bWwgZWxlbWVudCBhbmQgcmVzcG9uZCB0byBbZGlyXSBhdHRyaWJ1dGUgb24gYW55IGxldmVsLFxuc28gZGlyZWN0aW9uIGNvdWxkIGJlIG92ZXJyaWRkZW4gb24gYW55IGNvbXBvbmVudCBsZXZlbC5cblxuSW1wbGVtZW50YXRpb24gY29kZTpcblxuQG1peGluIG5iLXJ0bCgpIHtcbiAgLy8gYWRkICMgdG8gc2NzcyBpbnRlcnBvbGF0aW9uIHN0YXRlbWVudC5cbiAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gIEBhdC1yb290IHtzZWxlY3Rvci1hcHBlbmQoJzpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKScsICYpfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQW5kIHdoZW4gd2UgY2FsbCBpdCBzb21ld2hlcmU6XG5cbjpob3N0IHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuOmhvc3QtY29udGV4dCguLi4pIHtcbiAgLnNvbWUtY2xhc3Mge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHtcbiAgICAgIC4uLlxuICAgIH1cbiAgfVxufVxuXG5SZXN1bHQgd2lsbCBsb29rIGxpa2U6XG5cbjpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0IC5zb21lLWNsYXNzIHtcbiAgLi4uXG59XG46aG9zdC1jb250ZXh0KFtkaXI9cnRsXSk6aG9zdC1jb250ZXh0KC4uLikgLnNvbWUtY2xhc3Mge1xuICAuLi5cbn1cblxuKlxuICBTaWRlIG5vdGU6XG4gIDpob3N0LWNvbnRleHQoKTpob3N0IHNlbGVjdG9yIGFyZSB2YWxpZC4gaHR0cHM6Ly9saXN0cy53My5vcmcvQXJjaGl2ZXMvUHVibGljL3d3dy1zdHlsZS8yMDE1RmViLzAzMDUuaHRtbFxuXG4gIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKTpob3N0LWNvbnRleHQoLi4uKSBzaG91bGQgbWF0Y2ggYW55IHBlcm11dGF0aW9uLFxuICBzbyBvcmRlciBpcyBub3QgaW1wb3J0YW50LlxuKlxuXG5cbkN1cnJlbnRseSwgdGhlcmUncmUgdHdvIHByb2JsZW1zIHdpdGggdGhpcyBhcHByb2FjaDpcblxuRmlyc3QsIGlzIHRoYXQgd2UgY2FuJ3QgY29tYmluZSA6aG9zdCwgOmhvc3QtY29udGV4dC4gQW5ndWxhciBidWdzICMxNDM0OSwgIzE5MTk5LlxuRm9yIHRoZSBtb21lbnQgb2Ygd3JpdGluZywgdGhlIG9ubHkgcG9zc2libGUgd2F5IGlzOlxuOmhvc3Qge1xuICA6aG9zdC1jb250ZXh0KC4uLikge1xuICAgIC4uLlxuICB9XG59XG5JdCBkb2Vzbid0IHdvcmsgZm9yIHVzIGJlY2F1c2UgbWl4aW4gY291bGQgYmUgY2FsbGVkIHNvbWV3aGVyZSBkZWVwZXIsIGxpa2U6XG46aG9zdCB7XG4gIHAge1xuICAgIEBpbmNsdWRlIG5iLXJ0bCgpIHsgLi4uIH1cbiAgfVxufVxuV2UgYXJlIG5vdCBhYmxlIHRvIGdvIHVwIHRvIDpob3N0IGxldmVsIHRvIHBsYWNlIGNvbnRlbnQgcGFzc2VkIHRvIG1peGluLlxuXG5UaGUgc2Vjb25kIHByb2JsZW0gaXMgdGhhdCB3ZSBvbmx5IGNhbiBiZSBzdXJlIHRoYXQgd2UgYXBwZW5kaW5nIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB0byBhbm90aGVyXG46aG9zdC86aG9zdC1jb250ZXh0IHBzZXVkby1jbGFzcyB3aGVuIGNhbGxlZCBpbiB0aGVtZSBmaWxlcyAoKi50aGVtZS5zY3NzKS5cbiAgKlxuICAgIFNpZGUgbm90ZTpcbiAgICBDdXJyZW50bHksIG5iLWluc3RhbGwtY29tcG9uZW50IHVzZXMgYW5vdGhlciBhcHByb2FjaCB3aGVyZSA6aG9zdCBwcmVwZW5kZWQgd2l0aCB0aGUgdGhlbWUgbmFtZVxuICAgIChodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNWI5NjA3ODYyNGIwYTQ3NjBmMmRiY2Y2ZmRmMGJkNjI3OTFiZTViYi9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxKSxcbiAgICBidXQgaXQgd2FzIG1hZGUgdG8gYmUgYWJsZSB0byB1c2UgY3VycmVudCByZWFsaXphdGlvbiBvZiBydGwgYW5kIGl0IGNhbiBiZSByZXdyaXR0ZW4gYmFjayB0b1xuICAgIDpob3N0LWNvbnRleHQoJHRoZW1lKSBvbmNlIHdlIHdpbGwgYmUgYWJsZSB0byB1c2UgbXVsdGlwbGUgc2hhZG93IHNlbGVjdG9ycy5cbiAgKlxuQnV0IHdoZW4gaXQncyBjYWxsZWQgaW4gKi5jb21wb25lbnQuc2NzcyB3ZSBjYW4ndCBiZSBzdXJlLCB0aGF0IHNlbGVjdG9yIHN0YXJ0cyB3aXRoIDpob3N0Lzpob3N0LWNvbnRleHQsXG5iZWNhdXNlIGFuZ3VsYXIgYWxsb3dzIG9taXR0aW5nIHBzZXVkby1jbGFzc2VzIGlmIHdlIGRvbid0IG5lZWQgdG8gc3R5bGUgOmhvc3QgY29tcG9uZW50IGl0c2VsZi5cbldlIGNhbiBicmVhayBzdWNoIHNlbGVjdG9ycywgYnkganVzdCBhcHBlbmRpbmcgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIHRvIHRoZW0uXG4gICoqKlxuICAgIFBvc3NpYmxlIHNvbHV0aW9uXG4gICAgY2hlY2sgaWYgd2UgaW4gdGhlbWUgYnkgc29tZSB0aGVtZSB2YXJpYWJsZXMgYW5kIGlmIHNvIGFwcGVuZCwgb3RoZXJ3aXNlIG5lc3QgbGlrZVxuICAgIEBhdC1yb290IDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSB7XG4gICAgICAvLyBhZGQgIyB0byBzY3NzIGludGVycG9sYXRpb24gc3RhdGVtZW50LlxuICAgICAgLy8gaXQgd29ya3MgaW4gY29tbWVudHMgYW5kIHdlIGNhbid0IHVzZSBpdCBoZXJlXG4gICAgICB7Jn0ge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gICAgV2hhdCBpZiA6aG9zdCBzcGVjaWZpZWQ/IENhbiB3ZSBhZGQgc3BhY2UgaW4gOmhvc3QtY29udGV4dCguLi4pIDpob3N0P1xuICAgIE9yIG1heWJlIGFkZCA6aG9zdCBzZWxlY3RvciBhbnl3YXk/IElmIG11bHRpcGxlIDpob3N0IHNlbGVjdG9ycyBhcmUgYWxsb3dlZFxuICAqKipcblxuXG5Qcm9ibGVtcyB3aXRoIHRoZSBjdXJyZW50IGFwcHJvYWNoLlxuXG4xLiBEaXJlY3Rpb24gY2FuIGJlIGFwcGxpZWQgb25seSBvbiBkb2N1bWVudCBsZXZlbCwgYmVjYXVzZSBtaXhpbiBwcmVwZW5kcyB0aGVtZSBjbGFzcyxcbndoaWNoIHBsYWNlZCBvbiB0aGUgYm9keS5cbjIuICouY29tcG9uZW50LnNjc3Mgc3R5bGVzIHNob3VsZCBiZSBpbiA6aG9zdCBzZWxlY3Rvci4gT3RoZXJ3aXNlIGFuZ3VsYXIgd2lsbCBhZGQgaG9zdFxuYXR0cmlidXRlIHRvIFtkaXI9cnRsXSBhdHRyaWJ1dGUgYXMgd2VsbC5cblxuXG5HZW5lcmFsIHByb2JsZW1zLlxuXG5MdHIgaXMgZGVmYXVsdCBkb2N1bWVudCBkaXJlY3Rpb24sIGJ1dCBmb3IgcHJvcGVyIHdvcmsgb2YgbmItbHRyIChtZWFucyBsdHIgb25seSksXG5bZGlyPWx0cl0gc2hvdWxkIGJlIHNwZWNpZmllZCBhdCBsZWFzdCBzb21ld2hlcmUuICc6bm90KFtkaXI9cnRsXScgbm90IGFwcGxpY2FibGUgaGVyZSxcbmJlY2F1c2UgaXQncyBzYXRpc2Z5IGFueSBwYXJlbnQsIHRoYXQgZG9uJ3QgaGF2ZSBbZGlyPXJ0bF0gYXR0cmlidXRlLlxuUHJldmlvdXMgYXBwcm9hY2ggd2FzIHRvIHVzZSBzaW5nbGUgcnRsIG1peGluIGFuZCByZXNldCBsdHIgcHJvcGVydGllcyB0byBpbml0aWFsIHZhbHVlLlxuQnV0IHNvbWV0aW1lcyBpdCdzIGhhcmQgdG8gZmluZCwgd2hhdCB0aGUgcHJldmlvdXMgdmFsdWUgc2hvdWxkIGJlLiBBbmQgc3VjaCBtaXhpbiBjYWxsIGxvb2tzIHRvbyB2ZXJib3NlLlxuKi9cbi8qXG4gIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgIC4uLlxuICAgICAgfVxuICAgIH1cbiAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLi4uXG4gICAgfVxuXG4gIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiovXG4ubmItdGhlbWUtZGVmYXVsdCA6aG9zdCA6Om5nLWRlZXAgcm91dGVyLW91dGxldCArICoge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYW5pbWF0aW9uOiBmYWRlIDFzO1xufVxuQGtleWZyYW1lcyBmYWRlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4vKlxuICA6aG9zdCBjYW4gYmUgcHJlZml4ZWRcbiAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzhkMGVlMzQ5MzlmMTRjMDc4NzZkMjIyYzI1YjQwNWVkNDU4YTM0ZDMvcGFja2FnZXMvY29tcGlsZXIvc3JjL3NoYWRvd19jc3MudHMjTDQ0MVxuXG4gIFdlIGhhdmUgdG8gdXNlIDpob3N0IGluc3RlYWQgb2YgOmhvc3QtY29udGV4dCgkdGhlbWUpLCB0byBiZSBhYmxlIHRvIHByZWZpeCB0aGVtZSBjbGFzc1xuICB3aXRoIHNvbWV0aGluZyBkZWZpbmVkIGluc2lkZSBvZiBAY29udGVudCwgYnkgcHJlZml4aW5nICYuXG4gIEZvciBleGFtcGxlIHRoaXMgc2NzcyBjb2RlOlxuICAgIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgIC5zb21lLXNlbGVjdG9yICYge1xuICAgICAgICAuLi5cbiAgICAgIH1cbiAgICB9XG4gIFdpbGwgcmVzdWx0IGluIG5leHQgY3NzOlxuICAgIC5zb21lLXNlbGVjdG9yIC5uYi10aGVtZS1kZWZhdWx0IHtcbiAgICAgIC4uLlxuICAgIH1cblxuICBJdCBkb2Vzbid0IHdvcmsgd2l0aCA6aG9zdC1jb250ZXh0IGJlY2F1c2UgYW5ndWxhciBzcGxpdHRpbmcgaXQgaW4gdHdvIHNlbGVjdG9ycyBhbmQgcmVtb3Zlc1xuICBwcmVmaXggaW4gb25lIG9mIHRoZSBzZWxlY3RvcnMuXG4qL1xuLm5iLXRoZW1lLWRhcmsgOmhvc3QgOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogZmFkZSAxcztcbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLypcbiAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgLi4uXG4gICAgICB9XG4gICAgfVxuICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuLi5cbiAgICB9XG5cbiAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuKi9cbi5uYi10aGVtZS1jb3NtaWMgOmhvc3QgOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogZmFkZSAxcztcbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLypcbiAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgLi4uXG4gICAgICB9XG4gICAgfVxuICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuLi5cbiAgICB9XG5cbiAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuKi9cbi5uYi10aGVtZS1jb3Jwb3JhdGUgOmhvc3QgOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogZmFkZSAxcztcbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLypcbiAgOmhvc3QgY2FuIGJlIHByZWZpeGVkXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi84ZDBlZTM0OTM5ZjE0YzA3ODc2ZDIyMmMyNWI0MDVlZDQ1OGEzNGQzL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9zaGFkb3dfY3NzLnRzI0w0NDFcblxuICBXZSBoYXZlIHRvIHVzZSA6aG9zdCBpbnN0ZWFkIG9mIDpob3N0LWNvbnRleHQoJHRoZW1lKSwgdG8gYmUgYWJsZSB0byBwcmVmaXggdGhlbWUgY2xhc3NcbiAgd2l0aCBzb21ldGhpbmcgZGVmaW5lZCBpbnNpZGUgb2YgQGNvbnRlbnQsIGJ5IHByZWZpeGluZyAmLlxuICBGb3IgZXhhbXBsZSB0aGlzIHNjc3MgY29kZTpcbiAgICAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuc29tZS1zZWxlY3RvciAmIHtcbiAgICAgICAgLi4uXG4gICAgICB9XG4gICAgfVxuICBXaWxsIHJlc3VsdCBpbiBuZXh0IGNzczpcbiAgICAuc29tZS1zZWxlY3RvciAubmItdGhlbWUtZGVmYXVsdCB7XG4gICAgICAuLi5cbiAgICB9XG5cbiAgSXQgZG9lc24ndCB3b3JrIHdpdGggOmhvc3QtY29udGV4dCBiZWNhdXNlIGFuZ3VsYXIgc3BsaXR0aW5nIGl0IGluIHR3byBzZWxlY3RvcnMgYW5kIHJlbW92ZXNcbiAgcHJlZml4IGluIG9uZSBvZiB0aGUgc2VsZWN0b3JzLlxuKi9cbi5uYi10aGVtZS1tYXRlcmlhbC1kYXJrIDpob3N0IDo6bmctZGVlcCByb3V0ZXItb3V0bGV0ICsgKiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbmltYXRpb246IGZhZGUgMXM7XG59XG5Aa2V5ZnJhbWVzIGZhZGUge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi8qXG4gIDpob3N0IGNhbiBiZSBwcmVmaXhlZFxuICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvOGQwZWUzNDkzOWYxNGMwNzg3NmQyMjJjMjViNDA1ZWQ0NThhMzRkMy9wYWNrYWdlcy9jb21waWxlci9zcmMvc2hhZG93X2Nzcy50cyNMNDQxXG5cbiAgV2UgaGF2ZSB0byB1c2UgOmhvc3QgaW5zdGVhZCBvZiA6aG9zdC1jb250ZXh0KCR0aGVtZSksIHRvIGJlIGFibGUgdG8gcHJlZml4IHRoZW1lIGNsYXNzXG4gIHdpdGggc29tZXRoaW5nIGRlZmluZWQgaW5zaWRlIG9mIEBjb250ZW50LCBieSBwcmVmaXhpbmcgJi5cbiAgRm9yIGV4YW1wbGUgdGhpcyBzY3NzIGNvZGU6XG4gICAgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLnNvbWUtc2VsZWN0b3IgJiB7XG4gICAgICAgIC4uLlxuICAgICAgfVxuICAgIH1cbiAgV2lsbCByZXN1bHQgaW4gbmV4dCBjc3M6XG4gICAgLnNvbWUtc2VsZWN0b3IgLm5iLXRoZW1lLWRlZmF1bHQge1xuICAgICAgLi4uXG4gICAgfVxuXG4gIEl0IGRvZXNuJ3Qgd29yayB3aXRoIDpob3N0LWNvbnRleHQgYmVjYXVzZSBhbmd1bGFyIHNwbGl0dGluZyBpdCBpbiB0d28gc2VsZWN0b3JzIGFuZCByZW1vdmVzXG4gIHByZWZpeCBpbiBvbmUgb2YgdGhlIHNlbGVjdG9ycy5cbiovXG4ubmItdGhlbWUtbWF0ZXJpYWwtbGlnaHQgOmhvc3QgOjpuZy1kZWVwIHJvdXRlci1vdXRsZXQgKyAqIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGFuaW1hdGlvbjogZmFkZSAxcztcbn1cbkBrZXlmcmFtZXMgZmFkZSB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-pages',
          styleUrls: ['pages.component.scss'],
          template: "\n    <ngx-one-column-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      \n      <router-outlet></router-outlet>\n    </ngx-one-column-layout>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");
    /* harmony import */


    var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.module */
    "./src/app/pages/dashboard/dashboard.module.ts");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/pages/services/product.service.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/pages/add-product/add-product.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/pages/shop/shop.component.ts");
    /* harmony import */


    var _category_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./category/category.component */
    "./src/app/pages/category/category.component.ts");
    /* harmony import */


    var _form_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./form/form.component */
    "./src/app/pages/form/form.component.ts");
    /* harmony import */


    var _profil_profilemodule_profilemodule_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../profil/profilemodule/profilemodule.module */
    "./src/app/profil/profilemodule/profilemodule.module.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/pages/blog/blog.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./product-detail/product-detail.component */
    "./src/app/pages/product-detail/product-detail.component.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]],
      imports: [[_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _profil_profilemodule_profilemodule_module__WEBPACK_IMPORTED_MODULE_16__["ProfilemoduleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"]],
        imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _profil_profilemodule_profilemodule_module__WEBPACK_IMPORTED_MODULE_16__["ProfilemoduleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbMenuModule"], _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["DashboardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbSelectModule"], _profil_profilemodule_profilemodule_module__WEBPACK_IMPORTED_MODULE_16__["ProfilemoduleModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardModule"]],
          declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_12__["AddProductComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_13__["ShopComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_14__["CategoryComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_15__["FormComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["BlogComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailComponent"]],
          providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_product_service__WEBPACK_IMPORTED_MODULE_11__["ProductService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/product-detail/product-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/product-detail/product-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: ProductDetailComponent */

  /***/
  function srcAppPagesProductDetailProductDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function () {
      return ProductDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/pages/services/product.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductDetailComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Geliyor...\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ProductDetailComponent =
    /*#__PURE__*/
    function () {
      function ProductDetailComponent(productService, route) {
        var _this4 = this;

        _classCallCheck(this, ProductDetailComponent);

        this.productService = productService;
        this.route = route;
        var id = route.snapshot.paramMap.get('id');
        console.log(id);
        productService.getProductById(id).subscribe(function (el) {
          return _this4.productDetail = el;
        });
      }

      _createClass(ProductDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductDetailComponent;
    }();

    ProductDetailComponent.ɵfac = function ProductDetailComponent_Factory(t) {
      return new (t || ProductDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ProductDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDetailComponent,
      selectors: [["ngx-product-detail"]],
      decls: 91,
      vars: 5,
      consts: [[4, "ngIf"], [1, "mb-5"], [1, "row"], [1, "col-md-6", "mb-4", "mb-md-0"], ["id", "mdb-lightbox-ui"], [1, "mdb-lightbox"], [1, "row", "product-gallery", "mx-1"], [1, "col-12", "mb-0"], [1, "view", "overlay", "rounded", "z-depth-1", "main-img"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", "data-size", "710x823"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg", 1, "img-fluid", "z-depth-1"], [1, "view", "overlay", "rounded", "z-depth-1", 2, "visibility", "hidden"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", "data-size", "710x823"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", 1, "img-fluid", "z-depth-1"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", "data-size", "710x823"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg", 1, "img-fluid", "z-depth-1"], ["href", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", "data-size", "710x823"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg", 1, "img-fluid", "z-depth-1"], [1, "col-12"], [1, "col-3"], [1, "view", "overlay", "rounded", "z-depth-1", "gallery-item"], ["src", "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg", 1, "img-fluid"], [1, "mask", "rgba-white-slight"], [1, "col-md-6"], ["id", "title"], [1, "mb-2", "text-muted", "text-uppercase", "small"], [1, "rating"], [1, "fas", "fa-star", "fa-sm", "text-primary"], [1, "far", "fa-star", "fa-sm", "text-primary"], [1, "mr-1"], [1, "pt-1"], [1, "table-responsive"], [1, "table", "table-sm", "table-borderless", "mb-0"], ["scope", "row", 1, "pl-0", "w-25"], [1, "table-responsive", "mb-2"], [1, "table", "table-sm", "table-borderless"], [1, "pl-0", "pb-0", "w-25"], [1, "pb-0"], [1, "pl-0"], [1, "def-number-input", "number-input", "safari_only", "mb-0"], ["onclick", "this.parentNode.querySelector('input[type=number]').stepDown()", 1, "minus"], ["min", "0", "name", "quantity", "value", "1", "type", "number", 1, "quantity"], ["onclick", "this.parentNode.querySelector('input[type=number]').stepUp()", 1, "plus"], [1, "mt-1"], [1, "form-check", "form-check-inline", "pl-0"], ["type", "radio", "id", "small", "name", "materialExampleRadios", "checked", "", 1, "form-check-input"], ["for", "small", 1, "form-check-label", "small", "text-uppercase", "card-link-secondary"], ["type", "radio", "id", "medium", "name", "materialExampleRadios", 1, "form-check-input"], ["for", "medium", 1, "form-check-label", "small", "text-uppercase", "card-link-secondary"], ["type", "radio", "id", "large", "name", "materialExampleRadios", 1, "form-check-input"], ["for", "large", 1, "form-check-label", "small", "text-uppercase", "card-link-secondary"], ["type", "button", 1, "btn", "btn-primary", "btn-md", "mr-1", "mb-2"], ["type", "button", 1, "btn", "btn-light", "btn-md", "mr-1", "mb-2"], [1, "fas", "fa-shopping-cart", "pr-2"]],
      template: function ProductDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailComponent_ng_container_2_Template, 2, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shirts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam. Distinctio, officia quis dolore quos sapiente tempore alias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "table", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "table", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Select size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Medium");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Large");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Buy now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetail == null ? null : ctx.productDetail.title, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.productDetail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetail == null ? null : ctx.productDetail.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetail == null ? null : ctx.productDetail.price);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetail == null ? null : ctx.productDetail.description);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: ["@charset \"UTF-8\";\n#title[_ngcontent-%COMP%] {\n  max-width: 230px;\n  overflow: hidden;\n  \n  white-space: nowrap;\n  \n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtZGV0YWlsL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvc3JjXFxhcHBcXHBhZ2VzXFxwcm9kdWN0LWRldGFpbFxccHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUFrQixvQkFBQTtFQUNsQixtQkFBQTtFQUFxQix3QkFBQTtFQUNyQix1QkFBQTtBRElKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4jdGl0bGUge1xuICBtYXgtd2lkdGg6IDIzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiB0YcWfYW5sYXLEsSBnaXpsZSAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBhbHQgc2F0xLFyYSBoacOnIGlubWUgKi9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59IiwiI3RpdGxle1xyXG4gICAgbWF4LXdpZHRoOiAyMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIHRhxZ9hbmxhcsSxIGdpemxlICovXHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBhbHQgc2F0xLFyYSBoacOnIGlubWUgKi9cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-product-detail',
          templateUrl: './product-detail.component.html',
          styleUrls: ['./product-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_ng_container_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bu Alan Zorunlu. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_6_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.firstname == null ? null : ctx_r0.firstname.errors == null ? null : ctx_r0.firstname.errors.required);
      }
    }

    function RegisterComponent_ng_container_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bu Alan Zorunlu. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_9_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.lastname == null ? null : ctx_r1.lastname.errors == null ? null : ctx_r1.lastname.errors.required);
      }
    }

    function RegisterComponent_ng_container_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bu Alan Zorunlu. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_12_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.user == null ? null : ctx_r2.user.errors == null ? null : ctx_r2.user.errors.required);
      }
    }

    function RegisterComponent_ng_container_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bu Alan Zorunlu ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_15_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ge\xE7ersiz Email. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_15_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RegisterComponent_ng_container_15_div_2_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors == null ? null : ctx_r3.email.errors.required);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.email == null ? null : ctx_r3.email.errors == null ? null : ctx_r3.email.errors.email);
      }
    }

    function RegisterComponent_ng_container_18_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Bir \u015Eifre Girin. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_18_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.password == null ? null : ctx_r4.password.errors == null ? null : ctx_r4.password.errors.required);
      }
    }

    function RegisterComponent_ng_container_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u015Eifreyi Onayla. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegisterComponent_ng_container_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RegisterComponent_ng_container_21_div_1_Template, 2, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.onayla == null ? null : ctx_r5.onayla.errors == null ? null : ctx_r5.onayla.errors.required);
      }
    }

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      // countries: Phone[]=[
      //   {id:'+90', name:'Türkiye'},
      //   {id:'+12', name:'Azerbaycan'},
      //   {id:'+88', name:'Türkmenistan'}
      // ];
      function RegisterComponent(authService, router, fb) {
        _classCallCheck(this, RegisterComponent);

        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.initForm();
      }

      _createClass(RegisterComponent, [{
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            firstName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "register",
        value: function register() {
          var _this5 = this;

          this.form.markAllAsTouched();
          this.authService.register(this.form.value).subscribe(function (res) {
            console.log('Kayıt başarılı:', res);
            alert('Kayıt başarılı. Yönlendiriliyorsunuz.');

            _this5.router.navigate(['pages', 'login']);
          });
        }
      }, {
        key: "date",
        get: function get() {
          return this.form.get("date");
        }
      }, {
        key: "user",
        get: function get() {
          return this.form.get("username");
        }
      }, {
        key: "email",
        get: function get() {
          return this.form.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.form.get("password");
        }
      }, {
        key: "onayla",
        get: function get() {
          return this.form.get("password");
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.form.get("firstName");
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.form.get("lastName");
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["ngx-register"]],
      decls: 26,
      vars: 7,
      consts: [[1, "col-6", "container", 3, "formGroup"], [1, "my-3"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Ad\u0131n", "formControlName", "firstName", "shape", "round"], [4, "ngIf"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Soyad\u0131n", "formControlName", "lastName", "shape", "round"], ["type", "text", "nbInput", "", "fullWidth", "", "placeholder", "Kullan\u0131c\u0131 Ad\u0131", "formControlName", "username", "shape", "round"], ["type", "email", "nbInput", "", "fullWidth", "", "placeholder", "E-posta", "formControlName", "email", "shape", "round"], ["type", "password", "nbInput", "", "fullWidth", "", "placeholder", "\u015Eifre", "formControlName", "password", "shape", "round"], ["type", "password", "nbInput", "", "fullWidth", "", "placeholder", "Onayla", "formControlName", "password", "shape", "round"], [1, "float-right"], ["type", "submit", "status", "success", "nbButton", "", 3, "click"], ["icon", "person-outline"], ["style", "color:brown", 4, "ngIf"], [2, "color", "brown"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Kay\u0131t Ol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegisterComponent_ng_container_6_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_ng_container_9_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RegisterComponent_ng_container_12_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_ng_container_15_Template, 3, 2, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_ng_container_18_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_ng_container_21_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_23_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "nb-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Kay\u0131t Ol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.firstname == null ? null : ctx.firstname.dirty) || (ctx.firstname == null ? null : ctx.firstname.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.lastname == null ? null : ctx.lastname.dirty) || (ctx.lastname == null ? null : ctx.lastname.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.user == null ? null : ctx.user.dirty) || (ctx.user == null ? null : ctx.user.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.dirty) || (ctx.email == null ? null : ctx.email.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.dirty) || (ctx.password == null ? null : ctx.password.touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.onayla == null ? null : ctx.onayla.dirty) || (ctx.onayla == null ? null : ctx.onayla.touched));
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]],
      styles: ["input[_ngcontent-%COMP%]:invalid {\n  border: 1px solid #CB000F;\n  color: red;\n}\n\n.ng-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #10be3b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxNYWNoaW5lXFxEZXNrdG9wXFxHaXRodWJcXEZyb250ZW5kXFxoYWthbi1zdG9yZS9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBQTtFQUNBLFVBQUE7QUNDRDs7QURDQTtFQUNJLGdDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0OmludmFsaWQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNDQjAwMEY7XHJcblx0Y29sb3I6IHJlZFxyXG59XHJcbi5uZy1pbnZhbGlkOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMTYsIDE5MCwgNTkpICFpbXBvcnRhbnQ7XHJcbn0iLCJpbnB1dDppbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NCMDAwRjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLm5nLWludmFsaWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxMGJlM2IgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/category.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/services/category.service.ts ***!
    \****************************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppPagesServicesCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
      }

      _createClass(CategoryService, [{
        key: "getcategory",
        value: function getcategory() {
          var token = 'Bearer ' + localStorage.getItem('access_token');
          return this.http.get(this.url + '/products/categories', {
            headers: {
              authorization: token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = "";

          if (err.error instanceof ErrorEvent) {
            errorMessage = "Bir hata oluştu" + err.error.message;
          } else {
            errorMessage = "Sistemsel Bir Hata Oluştu";
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ɵfac = function CategoryService_Factory(t) {
      return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    CategoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CategoryService,
      factory: CategoryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CategoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/product.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/services/product.service.ts ***!
    \***************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppPagesServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
      }

      _createClass(ProductService, [{
        key: "product",
        value: function product() {
          var token = 'Bearer ' + localStorage.getItem('access_token');
          return this.http.get(this.apiUrl + '/products', {
            headers: {
              authorization: token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "postProduct",
        value: function postProduct(products) {
          return this.http.post(this.apiUrl + '/products', products);
        }
      }, {
        key: "productLimit",
        value: function productLimit() {
          var token = 'Bearer ' + localStorage.getItem('access_token');
          return this.http.get(this.apiUrl + '/products/category/electronics?limit=4', {
            headers: {
              authorization: token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getProductById",
        value: function getProductById(id) {
          var token = 'Bearer ' + localStorage.getItem('access_token');
          return this.http.get(this.apiUrl + '/products/' + id, {
            headers: {
              authorization: token
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            return console.log();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage = "";

          if (err.error instanceof ErrorEvent) {
            errorMessage = "Bir hata oluştu" + err.error.message;
          } else {
            errorMessage = "Sistemsel Bir Hata Oluştu";
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return ProductService;
    }();

    ProductService.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
    };

    ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/shop.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/services/shop.service.ts ***!
    \************************************************/

  /*! exports provided: ShopService */

  /***/
  function srcAppPagesServicesShopServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopService", function () {
      return ShopService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ShopService =
    /*#__PURE__*/
    function () {
      function ShopService() {
        _classCallCheck(this, ShopService);

        this.products = [];
        this.products = this.getProduct();
      }

      _createClass(ShopService, [{
        key: "getProduct",
        value: function getProduct() {
          return JSON.parse(localStorage.getItem('basket'));
        }
      }, {
        key: "add",
        value: function add(product) {
          var _a;

          this.products = (_a = this.getProduct(), _a !== null && _a !== void 0 ? _a : []);
          var item = this.products.find(function (el) {
            return el.product.title == product.title;
          });

          if (item) {
            item.quantity++;
          } else {
            var basketItem = {
              product: product,
              quantity: 1
            };
            this.products.push(basketItem);
          }

          this.saveProducts();
        }
      }, {
        key: "remove",
        value: function remove(id) {
          this.products = this.products.filter(function (el) {
            return el.product.title !== id;
          });
          this.saveProducts();
        }
      }, {
        key: "increase",
        value: function increase(title) {
          var item = this.products.find(function (el) {
            return el.product.title === title;
          });

          if (item) {
            item.quantity++;
            console.log(this.products);
            this.saveProducts();
          }
        }
      }, {
        key: "decrease",
        value: function decrease(title) {
          var item = this.products.find(function (el) {
            return el.product.title === title;
          });

          if (item && item.quantity > 1) {
            item.quantity--;
            this.saveProducts();
          }
        }
      }, {
        key: "saveProducts",
        value: function saveProducts() {
          localStorage.setItem('basket', JSON.stringify(this.products));
        }
      }]);

      return ShopService;
    }();

    ShopService.ɵfac = function ShopService_Factory(t) {
      return new (t || ShopService)();
    };

    ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShopService,
      factory: ShopService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/shop/shop.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/shop/shop.component.ts ***!
    \**********************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppPagesShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/product.service */
    "./src/app/pages/services/product.service.ts");
    /* harmony import */


    var _services_shop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shop.service */
    "./src/app/pages/services/shop.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ShopComponent_tr_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_24_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.changeQuantity(item_r1.product.title, false);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_24_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.changeQuantity(item_r1.product.title, true);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sat\u0131n Al");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_tr_24_Template_button_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.itemDelete(item_r1.product.title);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "nb-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.product.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, item_r1.product.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disbled", item_r1.quantity < 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.quantity, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 9, item_r1.quantity * item_r1.product.price));
      }
    }

    var ShopComponent =
    /*#__PURE__*/
    function () {
      function ShopComponent(productService, fb, shopService) {
        _classCallCheck(this, ShopComponent);

        this.productService = productService;
        this.fb = fb;
        this.shopService = shopService;
        this.products = shopService.getProduct();
        ;
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            image: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            content: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            slug: [, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "postProduct",
        value: function postProduct() {
          this.form.markAllAsTouched();
          this.productService.postProduct(this.form.value).subscribe(function (post) {
            console.log('Kayıt başarılı:', post);
            alert('Kayıt başarılı.');
          });
        }
      }, {
        key: "product",
        value: function product(item) {
          this.shopService.add(item);
        }
      }, {
        key: "changeQuantity",
        value: function changeQuantity(title, isIncrease) {
          if (isIncrease) {
            this.shopService.increase(title);
          } else {
            this.shopService.decrease(title);
          }

          console.log(this.shopService.products);
          this.products = this.shopService.getProduct();
        }
      }, {
        key: "itemDelete",
        value: function itemDelete(id) {
          this.shopService.remove(id);
          this.products = this.shopService.getProduct();
        }
      }]);

      return ShopComponent;
    }();

    ShopComponent.ɵfac = function ShopComponent_Factory(t) {
      return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]));
    };

    ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShopComponent,
      selectors: [["ngx-shop"]],
      decls: 25,
      vars: 1,
      consts: [[1, "alert", "alert-success", "text-center"], [1, "table"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], ["scope", "row"], [2, "width", "150px", "height", "100px", "object-fit", "contain", 3, "src"], [2, "text-align", "center"], ["nbButton", "", "ghost", "", 3, "disbled", "click"], [2, "color", "crimson", "font-size", "large"], [1, "mx-1"], ["nbButton", "", "ghost", "", 3, "click"], [2, "color", "chartreuse", "font-size", "large"], ["nbButton", ""], ["nbButton", "", "ghost", "", "status", "danger", 3, "click"], ["icon", "trash-outline"]],
      template: function ShopComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sepetim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nb-card-body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xDCr\xFCn ad\u0131");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Fiyat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Miktar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Toplam Fiyat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0130\u015Flem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ShopComponent_tr_24_Template, 32, 11, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]],
      styles: ["td[_ngcontent-%COMP%] {\n  vertical-align: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2hvcC9DOlxcVXNlcnNcXE1hY2hpbmVcXERlc2t0b3BcXEdpdGh1YlxcRnJvbnRlbmRcXGhha2FuLXN0b3JlL3NyY1xcYXBwXFxwYWdlc1xcc2hvcFxcc2hvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2hvcC9zaG9wLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Nob3Avc2hvcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwidGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-shop',
          templateUrl: './shop.component.html',
          styleUrls: ['./shop.component.scss']
        }]
      }], function () {
        return [{
          type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_shop_service__WEBPACK_IMPORTED_MODULE_3__["ShopService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profil/profil.component.ts":
  /*!********************************************!*\
    !*** ./src/app/profil/profil.component.ts ***!
    \********************************************/

  /*! exports provided: ProfilComponent */

  /***/
  function srcAppProfilProfilComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilComponent", function () {
      return ProfilComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pages/services/auth.service */
    "./src/app/pages/services/auth.service.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var ProfilComponent =
    /*#__PURE__*/
    function () {
      function ProfilComponent(authService) {
        _classCallCheck(this, ProfilComponent);

        this.authService = authService;
      }

      _createClass(ProfilComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfilComponent;
    }();

    ProfilComponent.ɵfac = function ProfilComponent_Factory(t) {
      return new (t || ProfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    ProfilComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfilComponent,
      selectors: [["ngx-profil"]],
      decls: 26,
      vars: 1,
      consts: [[1, "row"], [1, "container"], [1, "profil"], [1, "container", "d-flex", "justify-content-center", "pt-4"], ["src", "assets\\images\\jack.png", "alt", "", 1, "avatar"], [1, ""], [1, "title", "tada", "mt-4"], ["nbButton", "", 1, "container"], ["nbButton", "", 1, "ml-2"], ["placeholder", "Select Showcase", 1, "ml-2"], ["value", ""], ["value", "0"], ["value", "1"], ["value", "2"]],
      template: function ProfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Biyografi Ekle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "G\xF6nderiler");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hak\u0131nda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nb-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nb-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Arkada\u015Flar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nb-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Foto\u011Fraflar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nb-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hikaye Ar\u015Fivi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nb-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Videolar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.authService.user == null ? null : ctx.authService.user.username, " ");
        }
      },
      directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbOptionComponent"]],
      styles: ["nb-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 650px;\n  background-repeat: no-repeat;\n  background-position: center right;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  transition: box-shadow 2s;\n  transition: transform 2s;\n}\n\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 20px 3px #554c4c96;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 2rem;\n  padding: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsL0M6XFxVc2Vyc1xcTWFjaGluZVxcRGVza3RvcFxcR2l0aHViXFxGcm9udGVuZFxcaGFrYW4tc3RvcmUvc3JjXFxhcHBcXHByb2ZpbFxccHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUNDRjs7QURDQTtFQUNFLHNDQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWwvcHJvZmlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmItY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA2NTBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAycztcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMnM7XHJcbn1cclxuLmNvbnRhaW5lciBpbWc6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzcHggIzU1NGM0Yzk2O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuIiwibmItY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDY1MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQ7XG59XG5cbi5jb250YWluZXIgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzO1xufVxuXG4uY29udGFpbmVyIGltZzpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAzcHggIzU1NGM0Yzk2O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMTJweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-profil',
          templateUrl: './profil.component.html',
          styleUrls: ['./profil.component.scss']
        }]
      }], function () {
        return [{
          type: _pages_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profil/profilemodule/profilemodule.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/profil/profilemodule/profilemodule.module.ts ***!
    \**************************************************************/

  /*! exports provided: ProfilemoduleModule */

  /***/
  function srcAppProfilProfilemoduleProfilemoduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilemoduleModule", function () {
      return ProfilemoduleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _profil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profil.component */
    "./src/app/profil/profil.component.ts");

    var ProfilemoduleModule = function ProfilemoduleModule() {
      _classCallCheck(this, ProfilemoduleModule);
    };

    ProfilemoduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfilemoduleModule
    });
    ProfilemoduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfilemoduleModule_Factory(t) {
        return new (t || ProfilemoduleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfilemoduleModule, {
        declarations: [_profil_component__WEBPACK_IMPORTED_MODULE_3__["ProfilComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilemoduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profil_component__WEBPACK_IMPORTED_MODULE_3__["ProfilComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbCardModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbInputModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map