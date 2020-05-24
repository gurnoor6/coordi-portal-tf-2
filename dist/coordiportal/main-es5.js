function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-animations.ts":
  /*!***********************************!*\
    !*** ./src/app/app-animations.ts ***!
    \***********************************/

  /*! exports provided: translateRight, navAnimation, footerAnimation */

  /***/
  function srcAppAppAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateRight", function () {
      return translateRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "navAnimation", function () {
      return navAnimation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footerAnimation", function () {
      return footerAnimation;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var translateRight = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('tR', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show=>hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(50px)",
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(-100px)",
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(-50px)",
      opacity: "0.5",
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(0px)",
      offset: 1
    })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hide=>show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      transform: "translateX(-50px)",
      offset: 0.1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(100px)",
      offset: 0.4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(50px)",
      opacity: "0.5",
      offset: 0.6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      transform: "translateX(0px)",
      offset: 1
    })])))]);
    var navAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('navAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(-200px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(-160px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(-80px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      transform: "translateY(-30px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })])))]);
    var footerAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('footerAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.5s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateY(200px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(160px)",
      offset: 0.2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateY(80px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.7",
      transform: "translateY(30px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateY(0px)",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/departments/departments.component.ts");
    /* harmony import */


    var _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./departmentdetail/departmentdetail.component */
    "./src/app/departmentdetail/departmentdetail.component.ts");
    /* harmony import */


    var _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./managerdetail/managerdetail.component */
    "./src/app/managerdetail/managerdetail.component.ts");
    /* harmony import */


    var _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./coordimemories/coordimemories.component */
    "./src/app/coordimemories/coordimemories.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'departments',
      component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentsComponent"]
    }, {
      path: 'departmentdetail',
      component: _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentdetailComponent"]
    }, {
      path: 'managerdetail/:dep',
      component: _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_5__["ManagerdetailComponent"]
    }, {
      path: 'memories',
      component: _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_6__["CoordimemoriesComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app-animations */
    "./src/app/app-animations.ts");
    /* harmony import */


    var _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./currentscreen.service */
    "./src/app/currentscreen.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AppComponent_div_30_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESULT OF REVERSE VIDEO CHALLENGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_30_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "RESULT OF REVERSE VIDEO CHALLENGE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_30_div_1_Template, 4, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_30_div_7_Template, 4, 0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@footerAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.smallWidth);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.smallWidth);
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cs) {
        _classCallCheck(this, AppComponent);

        this.cs = cs;
        this.title = 'coordiportal';
        this.smallWidth = false;
        this.stateRegister = 'show';
        this.footer = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            _this.changeOrder();
          });
        }
      }, {
        key: "changeOrder",
        value: function changeOrder() {
          window.innerWidth < 992 ? this.smallWidth = true : this.smallWidth = false;
          if (window.location.href.includes('managerdetail') || window.location.href.includes('memories')) this.footer = false;

          if (window.location.href.includes('memories')) {
            var navlinks = document.querySelectorAll('.nav-link');
            navlinks.forEach(function (item) {
              item.classList.remove('active');
            });
            document.querySelector('#memories').classList.add('active');
          }

          if (window.location.href.includes('department')) {
            var _navlinks = document.querySelectorAll('.nav-link');

            _navlinks.forEach(function (item) {
              item.classList.remove('active');
            });

            document.querySelector('#departments').classList.add('active');
          }
        }
      }, {
        key: "changeScreen",
        value: function changeScreen(event, name) {
          console.log(name);
          this.cs.setCurrentScreen(name);
          var navlinks = document.querySelectorAll('.nav-link');
          navlinks.forEach(function (item) {
            item.classList.remove('active');
          });
          event.target.classList.add('active');
        }
      }, {
        key: "toggleTrigger",
        value: function toggleTrigger() {
          this.stateRegister == 'hide' ? this.stateRegister = 'show' : this.stateRegister = 'hide';
        }
      }, {
        key: "log",
        value: function log(e) {
          console.log(e);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 31,
      vars: 3,
      consts: [[1, "main-container"], [1, "navbar", "navbar-expand-lg", "bg-dark", "navbar-dark", "transparent-nav"], ["href", "/", 1, "navbar-brand"], ["src", "assets/logo.png", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse", "main-container-mobile"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["href", "#", 1, "nav-link", "active", 3, "click"], ["href", "#", 1, "nav-link", 3, "click"], ["href", "/departments", "id", "departments", 1, "nav-link"], ["href", "/memories", "id", "memories", 1, "nav-link"], [1, "blur-div", 3, "mouseenter", "mouseleave"], [1, "blur"], ["href", "#", "id", "register", 1, "nav-link", 2, "min-height", "100%", "width", "100%", "position", "absolute"], [1, "blur-text"], [1, "nav-link"], [1, "main-container-mobile"], ["class", "footer row", 4, "ngIf"], [1, "footer", "row"], ["class", "col-12 col-lg-6", 4, "ngIf"], [1, "col-12", "col-lg-6", "text-center", "text-lg-left"], [1, "fa", "fa-twitter"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-facebook"], [1, "fa", "fa-instagram"], [1, "col-12", "col-lg-6"], [1, "footer-text", "text-lg-right", "text-center"], [1, "underline-footer", "d-inline-block", 2, "overflow-x", "hidden"], [1, "underline-footer", "d-inline-block", 2, "overflow-x", "hidden", "font-weight", "bolder"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener($event) {
            return ctx.changeScreen($event, "home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "HOME");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener($event) {
            return ctx.changeScreen($event, "whytf");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "WHY TF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DEPARTMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "COORDIE MEMORIES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function AppComponent_Template_div_mouseenter_22_listener() {
            return ctx.toggleTrigger();
          })("mouseleave", function AppComponent_Template_div_mouseleave_22_listener() {
            return ctx.toggleTrigger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function AppComponent_Template_a_animation_tR_done_26_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "REGISTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AppComponent_div_30_Template, 8, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@navAnimation", undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx.stateRegister);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footer);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".blur-div[_ngcontent-%COMP%]{\n\tposition:relative;\n\tcursor: pointer;\n}\n.blur[_ngcontent-%COMP%]{\n\twidth:110%;\n\ttransform: translateX(-5%);\n\tposition:absolute;\n\tmin-height:100%;\n\tbackground-color: #fff;\n\t-webkit-filter:blur(1px);\n\t        filter:blur(1px);\n\topacity:0.2;\n\tborder-radius: 25px;\n}\n\n.logo[_ngcontent-%COMP%]{\n\twidth:300px;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\n.transparent-nav[_ngcontent-%COMP%]{\n\tbackground-color: transparent !important;\n}\n\n.nav-link[_ngcontent-%COMP%]::after{\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #fff;\n    transition: width .2s;\n}\n.nav-link[_ngcontent-%COMP%]:hover::after {\n    width: 100%;\n    transition: width .4s;\n}\n.nav-item[_ngcontent-%COMP%]:last-child   .nav-link[_ngcontent-%COMP%]:hover::after{\n\twidth:0;\n}\n.nav-link.active[_ngcontent-%COMP%]::after {\n    width: 100%;\n    transition: width .4s;\n}\n\nbody[_ngcontent-%COMP%]{\n\tbackground: url(\"/assets/backg.jpg\");\n\t background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n   min-height:100vh;\n  \tmax-width:100vw;\n  \toverflow-x:hidden;\n}\n@media screen and (min-width:1400px){\n\tbody[_ngcontent-%COMP%]{\n\t\t\n\t}\n}\n@media screen and (min-width:992px){\n\tbody[_ngcontent-%COMP%]{\n\t\tmin-height: 100vh;\n\t}\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\topacity: 1;\n\tfont-size: 20px;\n}\n.nav-item[_ngcontent-%COMP%]{\n\tpadding-left:12px;\n\tpadding-right:12px ;\n}\n.navbar-toggler[_ngcontent-%COMP%]:focus{\n\toutline: none;\n\tbox-shadow: none;\n}\n.main-container[_ngcontent-%COMP%]{\n\tpadding-left: 5vw;\n\tpadding-right: 5vw;\n}\n.footer-text[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tmargin-top:16px;\n\tfont-size: 20px;\n}\n.fa[_ngcontent-%COMP%]{\n\tfont-size: 32px;\n\tcolor:#ffffff;\n\tborder:1px solid #ffffff;\n\tborder-radius: 100%; \n\theight:56px; \n\twidth:56px; \n\ttext-align: center;\n\tpadding-top:10px;\n\tmargin-right:24px;\n\topacity:0.5;\n}\n.fa[_ngcontent-%COMP%]:nth-child(1){\n\tmargin-left:32px;\n}\n\n.underline-footer[_ngcontent-%COMP%]::after{\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #fff;\n    transition: width .2s;\n    -webkit-animation: underline 5s infinite;\n            animation: underline 5s infinite\n}\n@-webkit-keyframes underline{\n\t0%{\n\t\twidth:100%;\n\t}\n\n\t50%{\n\t\twidth:100%;\n\t\ttransform: translateX(500px);\n\t\topacity:0;\n\t}\n\t51%{\n\t\twidth:100%;\n\t\ttransform: translateX(-400px);\n\t\topacity:0;\n\t}\n\n\t52%{\n\t\topacity:1;\n\t}\n\n\t100%{\n\t\twidth:100%;\n\t\ttransform: translateX(0);\n\t}\n}\n@keyframes underline{\n\t0%{\n\t\twidth:100%;\n\t}\n\n\t50%{\n\t\twidth:100%;\n\t\ttransform: translateX(500px);\n\t\topacity:0;\n\t}\n\t51%{\n\t\twidth:100%;\n\t\ttransform: translateX(-400px);\n\t\topacity:0;\n\t}\n\n\t52%{\n\t\topacity:1;\n\t}\n\n\t100%{\n\t\twidth:100%;\n\t\ttransform: translateX(0);\n\t}\n}\n\n@media screen and (max-width:675px){\n\t.main-container[_ngcontent-%COMP%]{\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n\n\t.main-container-mobile[_ngcontent-%COMP%]{\n\t\tpadding-left: 24px;\n\t\tpadding-right: 24px;\n\t}\n\n\t.logo[_ngcontent-%COMP%]{\n\t\twidth:200px;\n\t}\n\n\t.footer[_ngcontent-%COMP%]{\n\t\tpadding-bottom:16px;\n\t}\n\n\t.fa[_ngcontent-%COMP%]{\n\t\tfont-size: 24px;\n\t\tcolor:#ffffff;\n\t\tborder:1px solid #ffffff;\n\t\tborder-radius: 100%; \n\t\theight:42px; \n\t\twidth:42px; \n\t\ttext-align: center;\n\t\tpadding-top:7.5px;\n\t\tmargin-right:18px;\n\t\topacity:0.5;\n\t}\n\n\t.fa[_ngcontent-%COMP%]:nth-child(1){\n\t\tmargin-left:0px;\n\t}\n\n\t.fa[_ngcontent-%COMP%]:last-child{\n\t\tmargin-right: 0;\n\t}\n\n}\n@media screen and (max-width:1225px){\n\t.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n\t\tfont-size: 20px;\n\t}\n\n\n\t.nav-item[_ngcontent-%COMP%]{\n\t\tpadding-left:0px;\n\t\tpadding-right:0px ;\n\t}\n}\n@media screen and (min-width:992px){\n\t.footer[_ngcontent-%COMP%]{\n\t\tposition:fixed;\n\t\tbottom:0;\n\t\tpadding-bottom: 20px;\n\t\twidth:90vw;\n\t}\n}\n@media screen and (max-width:1100px) and (min-width:675px){\n\t.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\n\t\tfont-size: 16px;\n\t}\n\n\n\t.nav-item[_ngcontent-%COMP%]{\n\t\tpadding-left:0px;\n\t\tpadding-right:0px ;\n\t}\n}\n@media screen and (max-width:675px){\n\t.footer[_ngcontent-%COMP%]{\n\t\tmargin-top: 32px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUJBQXVCO0FBQ3ZCO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFVBQVU7Q0FDViwwQkFBMEI7Q0FDMUIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsd0JBQWdCO1NBQWhCLGdCQUFnQjtDQUNoQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCO0FBRUEsc0JBQXNCO0FBR3RCO0NBQ0MsV0FBVztDQUNYLG9CQUFpQjtJQUFqQixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLHdDQUF3QztBQUN6QztBQUVBLDBCQUEwQjtBQUMxQjtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCO0FBRUE7Q0FDQyxPQUFPO0FBQ1I7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7QUFFQSwwQkFBMEI7QUFFMUI7Q0FDQyxvQ0FBb0M7RUFDbkMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0dBQ3JCLGdCQUFnQjtHQUNoQixlQUFlO0dBQ2YsaUJBQWlCO0FBQ3BCO0FBR0E7Q0FDQztFQUNDLG9CQUFvQjtDQUNyQjtBQUNEO0FBRUE7Q0FDQztFQUNDLGlCQUFpQjtDQUNsQjtBQUNEO0FBRUEsMkJBQTJCO0FBQzNCO0NBQ0MsYUFBYTtDQUNiLFVBQVU7Q0FDVixlQUFlO0FBQ2hCO0FBR0E7Q0FDQyxpQkFBaUI7Q0FDakIsbUJBQW1CO0FBQ3BCO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBSUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0NBQ3hCLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxRQUFRO0lBQ1IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsd0NBQStCO1lBQS9CO0FBQ0o7QUFHQTtDQUNDO0VBQ0MsVUFBVTtDQUNYOztDQUVBO0VBQ0MsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixTQUFTO0NBQ1Y7Q0FDQTtFQUNDLFVBQVU7RUFDViw2QkFBNkI7RUFDN0IsU0FBUztDQUNWOztDQUVBO0VBQ0MsU0FBUztDQUNWOztDQUVBO0VBQ0MsVUFBVTtFQUNWLHdCQUF3QjtDQUN6QjtBQUNEO0FBeEJBO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLFNBQVM7Q0FDVjtDQUNBO0VBQ0MsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxTQUFTO0NBQ1Y7O0NBRUE7RUFDQyxVQUFVO0VBQ1Ysd0JBQXdCO0NBQ3pCO0FBQ0Q7QUFFQSwrQkFBK0I7QUFHL0I7Q0FDQztFQUNDLGlCQUFpQjtFQUNqQixrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsV0FBVztDQUNaOztDQUVBO0VBQ0MsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztDQUNaOztDQUVBO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0FBRUQ7QUFHQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7O0NBR0E7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7QUFFQTtDQUNDO0VBQ0MsY0FBYztFQUNkLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsVUFBVTtDQUNYO0FBQ0Q7QUFFQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7O0NBR0E7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKip4cGVyaW1lbnRhbCoqKioqL1xuLmJsdXItZGl2e1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYmx1cntcblx0d2lkdGg6MTEwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHRtaW4taGVpZ2h0OjEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGZpbHRlcjpibHVyKDFweCk7XG5cdG9wYWNpdHk6MC4yO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbi5sb2dve1xuXHR3aWR0aDozMDBweDtcblx0b2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi50cmFuc3BhcmVudC1uYXZ7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi8qKioqVW5kZXJsaW5lIEVmZmVjdCoqKioqL1xuLm5hdi1saW5rOjphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcbn1cblxuLm5hdi1saW5rOmhvdmVyOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjRzO1xufVxuXG4ubmF2LWl0ZW06bGFzdC1jaGlsZCAubmF2LWxpbms6aG92ZXI6OmFmdGVye1xuXHR3aWR0aDowO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggLjRzO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuYm9keXtcblx0YmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iYWNrZy5qcGdcIik7XG5cdCBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICBtaW4taGVpZ2h0OjEwMHZoO1xuICBcdG1heC13aWR0aDoxMDB2dztcbiAgXHRvdmVyZmxvdy14OmhpZGRlbjtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDBweCl7XG5cdGJvZHl7XG5cdFx0LypvdmVyZmxvdzogaGlkZGVuOyovXG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7XG5cdGJvZHl7XG5cdFx0bWluLWhlaWdodDogMTAwdmg7XG5cdH1cbn1cblxuLyoqKioqKioqTkFWQkFSKioqKioqKioqKioqL1xuLm5hdi1pdGVtIC5uYXYtbGlua3tcblx0Y29sb3I6I2ZmZmZmZjtcblx0b3BhY2l0eTogMTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi5uYXYtaXRlbXtcblx0cGFkZGluZy1sZWZ0OjEycHg7XG5cdHBhZGRpbmctcmlnaHQ6MTJweCA7XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpmb2N1c3tcblx0b3V0bGluZTogbm9uZTtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxuLm1haW4tY29udGFpbmVye1xuXHRwYWRkaW5nLWxlZnQ6IDV2dztcblx0cGFkZGluZy1yaWdodDogNXZ3O1xufVxuXG5cblxuLmZvb3Rlci10ZXh0e1xuXHRjb2xvcjojZmZmZmZmO1xuXHRtYXJnaW4tdG9wOjE2cHg7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZhe1xuXHRmb250LXNpemU6IDMycHg7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdGJvcmRlcjoxcHggc29saWQgI2ZmZmZmZjtcblx0Ym9yZGVyLXJhZGl1czogMTAwJTsgXG5cdGhlaWdodDo1NnB4OyBcblx0d2lkdGg6NTZweDsgXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6MTBweDtcblx0bWFyZ2luLXJpZ2h0OjI0cHg7XG5cdG9wYWNpdHk6MC41O1xufVxuXG4uZmE6bnRoLWNoaWxkKDEpe1xuXHRtYXJnaW4tbGVmdDozMnB4O1xufVxuXG4vKioqKioqRm9vdGVyIFVuZGVybGluZSoqKioqKioqKi9cbi51bmRlcmxpbmUtZm9vdGVyOjphZnRlcntcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4ycztcbiAgICBhbmltYXRpb246IHVuZGVybGluZSA1cyBpbmZpbml0ZVxufVxuXG5cbkBrZXlmcmFtZXMgdW5kZXJsaW5le1xuXHQwJXtcblx0XHR3aWR0aDoxMDAlO1xuXHR9XG5cblx0NTAle1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwMHB4KTtcblx0XHRvcGFjaXR5OjA7XG5cdH1cblx0NTEle1xuXHRcdHdpZHRoOjEwMCU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MDBweCk7XG5cdFx0b3BhY2l0eTowO1xuXHR9XG5cblx0NTIle1xuXHRcdG9wYWNpdHk6MTtcblx0fVxuXG5cdDEwMCV7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3NXB4KXtcblx0Lm1haW4tY29udGFpbmVye1xuXHRcdHBhZGRpbmctbGVmdDogMHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDBweDtcblx0fVxuXG5cdC5tYWluLWNvbnRhaW5lci1tb2JpbGV7XG5cdFx0cGFkZGluZy1sZWZ0OiAyNHB4O1xuXHRcdHBhZGRpbmctcmlnaHQ6IDI0cHg7XG5cdH1cblxuXHQubG9nb3tcblx0XHR3aWR0aDoyMDBweDtcblx0fVxuXG5cdC5mb290ZXJ7XG5cdFx0cGFkZGluZy1ib3R0b206MTZweDtcblx0fVxuXG5cdC5mYXtcblx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0Y29sb3I6I2ZmZmZmZjtcblx0XHRib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMTAwJTsgXG5cdFx0aGVpZ2h0OjQycHg7IFxuXHRcdHdpZHRoOjQycHg7IFxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRwYWRkaW5nLXRvcDo3LjVweDtcblx0XHRtYXJnaW4tcmlnaHQ6MThweDtcblx0XHRvcGFjaXR5OjAuNTtcblx0fVxuXG5cdC5mYTpudGgtY2hpbGQoMSl7XG5cdFx0bWFyZ2luLWxlZnQ6MHB4O1xuXHR9XG5cblx0LmZhOmxhc3QtY2hpbGR7XG5cdFx0bWFyZ2luLXJpZ2h0OiAwO1xuXHR9XG5cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMjVweCl7XG5cdC5uYXYtaXRlbSAubmF2LWxpbmt7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHR9XG5cblxuXHQubmF2LWl0ZW17XG5cdFx0cGFkZGluZy1sZWZ0OjBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OjBweCA7XG5cdH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCl7XG5cdC5mb290ZXJ7XG5cdFx0cG9zaXRpb246Zml4ZWQ7XG5cdFx0Ym90dG9tOjA7XG5cdFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdFx0d2lkdGg6OTB2dztcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjExMDBweCkgYW5kIChtaW4td2lkdGg6Njc1cHgpe1xuXHQubmF2LWl0ZW0gLm5hdi1saW5re1xuXHRcdGZvbnQtc2l6ZTogMTZweDtcblx0fVxuXG5cblx0Lm5hdi1pdGVte1xuXHRcdHBhZGRpbmctbGVmdDowcHg7XG5cdFx0cGFkZGluZy1yaWdodDowcHggO1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6Njc1cHgpe1xuXHQuZm9vdGVye1xuXHRcdG1hcmdpbi10b3A6IDMycHg7XG5cdH1cbn0iXX0= */"],
      data: {
        animation: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["translateRight"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["footerAnimation"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css'],
          animations: [_app_animations__WEBPACK_IMPORTED_MODULE_1__["translateRight"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["navAnimation"], _app_animations__WEBPACK_IMPORTED_MODULE_1__["footerAnimation"]]
        }]
      }], function () {
        return [{
          type: _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./departments/departments.component */
    "./src/app/departments/departments.component.ts");
    /* harmony import */


    var _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./departmentdetail/departmentdetail.component */
    "./src/app/departmentdetail/departmentdetail.component.ts");
    /* harmony import */


    var _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./managerdetail/managerdetail.component */
    "./src/app/managerdetail/managerdetail.component.ts");
    /* harmony import */


    var _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./coordimemories/coordimemories.component */
    "./src/app/coordimemories/coordimemories.component.ts");
    /* harmony import */


    var ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-useful-swiper */
    "./node_modules/ngx-useful-swiper/__ivy_ngcc__/fesm2015/ngx-useful-swiper.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var ngx_glide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-glide */
    "./node_modules/ngx-glide/__ivy_ngcc__/fesm2015/ngx-glide.js");

    var DEFAULT_SWIPER_CONFIG = {
      direction: 'horizontal',
      slidesPerView: 'auto'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"],
        useValue: DEFAULT_SWIPER_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"], _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentdetailComponent"], _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__["ManagerdetailComponent"], _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__["CoordimemoriesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"], _departmentdetail_departmentdetail_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentdetailComponent"], _managerdetail_managerdetail_component__WEBPACK_IMPORTED_MODULE_8__["ManagerdetailComponent"], _coordimemories_coordimemories_component__WEBPACK_IMPORTED_MODULE_9__["CoordimemoriesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_useful_swiper__WEBPACK_IMPORTED_MODULE_10__["NgxUsefulSwiperModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"], ngx_glide__WEBPACK_IMPORTED_MODULE_12__["NgxGlideModule"]],
          providers: [{
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/coordimemories/coordie-memories.ts":
  /*!****************************************************!*\
    !*** ./src/app/coordimemories/coordie-memories.ts ***!
    \****************************************************/

  /*! exports provided: memories */

  /***/
  function srcAppCoordimemoriesCoordieMemoriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "memories", function () {
      return memories;
    });

    var memories = [{
      id: 1,
      name: '-Sudarshan Wadajkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://pluspng.com/img-png/download-happy-person-png-images-transparent-gallery-advertisement-275.png'
    }, {
      id: 2,
      name: 'Sudarshan Wadajkar-',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://pluspng.com/img-png/download-happy-person-png-images-transparent-gallery-advertisement-275.png'
    }, {
      id: 3,
      name: '-Sudarshan Wadajkar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: 'https://pluspng.com/img-png/download-happy-person-png-images-transparent-gallery-advertisement-275.png'
    }];
    /***/
  },

  /***/
  "./src/app/coordimemories/coordimemories.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/coordimemories/coordimemories.component.ts ***!
    \************************************************************/

  /*! exports provided: CoordimemoriesComponent */

  /***/
  function srcAppCoordimemoriesCoordimemoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoordimemoriesComponent", function () {
      return CoordimemoriesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _coordie_memories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./coordie-memories */
    "./src/app/coordimemories/coordie-memories.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CoordimemoriesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", m_r1.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", m_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CoordimemoriesComponent = /*#__PURE__*/function () {
      function CoordimemoriesComponent() {
        _classCallCheck(this, CoordimemoriesComponent);

        this.memories_list = _coordie_memories__WEBPACK_IMPORTED_MODULE_1__["memories"];
      }

      _createClass(CoordimemoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CoordimemoriesComponent;
    }();

    CoordimemoriesComponent.ɵfac = function CoordimemoriesComponent_Factory(t) {
      return new (t || CoordimemoriesComponent)();
    };

    CoordimemoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CoordimemoriesComponent,
      selectors: [["app-coordimemories"]],
      decls: 2,
      vars: 1,
      consts: [[1, "container"], ["class", "row mb-5 memory-row", 4, "ngFor", "ngForOf"], [1, "row", "mb-5", "memory-row"], [1, "col-12", "col-md-3", "text-center", "left-image"], [1, "coordi-image", 3, "src"], [1, "col-12", "col-md-9", "coordi-text"], [1, "description-text"], [1, "name"], [1, "col-12", "col-md-3", "text-center", "right-image"]],
      template: function CoordimemoriesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CoordimemoriesComponent_div_1_Template, 10, 4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.memories_list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".coordi-image[_ngcontent-%COMP%]{\n\twidth:90%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\tmax-height:250px;\n\t-o-object-position: top;\n\t   object-position: top;\n}\n\n.coordi-text[_ngcontent-%COMP%]{\n\tborder-top:2px solid #fff;\n\tpadding-top:8px;\n}\n\n.description-text[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\tfont-size: 24px;\n}\n\n.name[_ngcontent-%COMP%]{\n\tcolor:#fff;\n\tfont-size: 24px;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(even)   .left-image[_ngcontent-%COMP%]{\n\tdisplay: none;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .name[_ngcontent-%COMP%]{\n\ttext-align: right;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(even)   .description-text[_ngcontent-%COMP%]{\n\ttext-align: right;\n}\n\n.memory-row[_ngcontent-%COMP%]:nth-child(odd)   .right-image[_ngcontent-%COMP%]{\n\tdisplay: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vcmRpbWVtb3JpZXMvY29vcmRpbWVtb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7Q0FDVCxvQkFBaUI7SUFBakIsaUJBQWlCO0NBQ2pCLGdCQUFnQjtDQUNoQix1QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29vcmRpbWVtb3JpZXMvY29vcmRpbWVtb3JpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb29yZGktaW1hZ2V7XG5cdHdpZHRoOjkwJTtcblx0b2JqZWN0LWZpdDogY292ZXI7XG5cdG1heC1oZWlnaHQ6MjUwcHg7XG5cdG9iamVjdC1wb3NpdGlvbjogdG9wO1xufVxuXG4uY29vcmRpLXRleHR7XG5cdGJvcmRlci10b3A6MnB4IHNvbGlkICNmZmY7XG5cdHBhZGRpbmctdG9wOjhweDtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHR7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm5hbWV7XG5cdGNvbG9yOiNmZmY7XG5cdGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm1lbW9yeS1yb3c6bnRoLWNoaWxkKGV2ZW4pIC5sZWZ0LWltYWdle1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4ubWVtb3J5LXJvdzpudGgtY2hpbGQob2RkKSAubmFtZXtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tZW1vcnktcm93Om50aC1jaGlsZChldmVuKSAuZGVzY3JpcHRpb24tdGV4dHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tZW1vcnktcm93Om50aC1jaGlsZChvZGQpIC5yaWdodC1pbWFnZXtcblx0ZGlzcGxheTogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoordimemoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-coordimemories',
          templateUrl: './coordimemories.component.html',
          styleUrls: ['./coordimemories.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/currentscreen.service.ts":
  /*!******************************************!*\
    !*** ./src/app/currentscreen.service.ts ***!
    \******************************************/

  /*! exports provided: CurrentscreenService */

  /***/
  function srcAppCurrentscreenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CurrentscreenService", function () {
      return CurrentscreenService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CurrentscreenService = /*#__PURE__*/function () {
      function CurrentscreenService() {
        _classCallCheck(this, CurrentscreenService);

        this.currentscreen = 'home';
      }

      _createClass(CurrentscreenService, [{
        key: "setCurrentScreen",
        value: function setCurrentScreen(screen) {
          this.currentscreen = screen;
        }
      }, {
        key: "getCurrentScreen",
        value: function getCurrentScreen() {
          return this.currentscreen;
        }
      }]);

      return CurrentscreenService;
    }();

    CurrentscreenService.ɵfac = function CurrentscreenService_Factory(t) {
      return new (t || CurrentscreenService)();
    };

    CurrentscreenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CurrentscreenService,
      factory: CurrentscreenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentscreenService, [{
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
  "./src/app/departmentdetail/departmentdetail.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/departmentdetail/departmentdetail.component.ts ***!
    \****************************************************************/

  /*! exports provided: DepartmentdetailComponent */

  /***/
  function srcAppDepartmentdetailDepartmentdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentdetailComponent", function () {
      return DepartmentdetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./events */
    "./src/app/departmentdetail/events.ts");
    /* harmony import */


    var _app_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-animations */
    "./src/app/app-animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DepartmentdetailComponent = /*#__PURE__*/function () {
      function DepartmentdetailComponent(route) {
        _classCallCheck(this, DepartmentdetailComponent);

        this.route = route;
        this.events = _events__WEBPACK_IMPORTED_MODULE_1__["events"];
        this.current_event = _events__WEBPACK_IMPORTED_MODULE_1__["events"][0];
        this.stateRegister = 'show';
      }

      _createClass(DepartmentdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.route.params.subscribe(function (params) {
            console.log(params['dep']);
          });
        }
      }, {
        key: "showActive",
        value: function showActive(event, index) {
          var items = document.querySelectorAll('.indicators p');
          items.forEach(function (item) {
            item.classList.remove('active');
          });
          event.target.classList.add('active');
          this.current_event = this.events[index];
        }
      }, {
        key: "toggleTrigger",
        value: function toggleTrigger() {
          this.stateRegister == 'hide' ? this.stateRegister = 'show' : this.stateRegister = 'hide';
        }
      }, {
        key: "log",
        value: function log(e) {
          console.log(e);
        }
      }, {
        key: "redirectTo",
        value: function redirectTo(name) {
          window.location.href = name;
        }
      }]);

      return DepartmentdetailComponent;
    }();

    DepartmentdetailComponent.ɵfac = function DepartmentdetailComponent_Factory(t) {
      return new (t || DepartmentdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    DepartmentdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentdetailComponent,
      selectors: [["app-departmentdetail"]],
      decls: 28,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "col-md-4"], ["src", "https://2.bp.blogspot.com/-o2SQ5ese8LE/TsffylIGjoI/AAAAAAAAAMo/NEi1qkJDkf8/s1600/DSC_0464.JPG", 2, "width", "100%", "object-fit", "cover", "margin-top", "20%"], [1, "col-12", "col-md-7"], [1, "text"], [1, "row", 2, "border-bottom", "2px solid white", "padding-bottom", "0", "margin-bottom", "16px"], [1, "col-10"], [1, "head", "text-uppercase", 2, "margin-bottom", "0"], [1, "col-2", "text-right"], ["src", "/assets/cross.png", 1, "cross"], [1, "description"], [1, "blur-div", 2, "text-align", "right", 3, "mouseenter", "mouseleave"], [1, "blur"], ["id", "register", 1, "nav-link", 2, "min-height", "100%", "width", "100%", "position", "absolute"], [1, "blur-text"], [1, "text-uppercase", "text-white", "button-text"], [1, "col-md-1", "d-none", "d-md-block", "indicators"], [1, "circle", "active", 3, "click"], [1, "circle", 3, "click"]],
      template: function DepartmentdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DepartmentdetailComponent_Template_div_mouseenter_15_listener() {
            return ctx.toggleTrigger();
          })("mouseleave", function DepartmentdetailComponent_Template_div_mouseleave_15_listener() {
            return ctx.toggleTrigger();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@tR.done", function DepartmentdetailComponent_Template_a_animation_tR_done_19_listener($event) {
            return ctx.log($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Your manager peeps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_22_listener($event) {
            return ctx.showActive($event, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_23_listener($event) {
            return ctx.showActive($event, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_24_listener($event) {
            return ctx.showActive($event, 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_25_listener($event) {
            return ctx.showActive($event, 3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_26_listener($event) {
            return ctx.showActive($event, 4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentdetailComponent_Template_p_click_27_listener($event) {
            return ctx.showActive($event, 5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.current_event.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.current_event.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tR", ctx.stateRegister);
        }
      },
      styles: [".head[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size: 64px;\n\tfont-weight: bold;\n\t\n}\n\n.head[_ngcontent-%COMP%]:before{\n  content: '\\2807';\n  font-size: 64px;\n}\n\n.description[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size:28px; \n}\n\n.circle[_ngcontent-%COMP%]{\n\tbackground-color:rgba(128,128,128,1); \n\tborder-radius: 100%;\n\theight:15px;\n\twidth:15px;\n\tmargin-left:40px;\n}\n\n.circle.active[_ngcontent-%COMP%]{\n\tbackground-color:#fff;\n\theight:20px;\n\twidth:20px;\n\tmargin-left:37.5px;\n}\n\n.indicators[_ngcontent-%COMP%]{\n\tpadding-top: 10%;\n}\n\n.blur-div[_ngcontent-%COMP%]{\n\tposition:relative;\n\tcursor: pointer;\n}\n\n.blur[_ngcontent-%COMP%]{\n\twidth:43%;\n\ttransform: translateX(-5%);\n\tposition:absolute;\n\t\n\tleft:62%;\n\tmin-height:120%;\n\tbottom:-10%;\n\tbackground-color: #fff;\n\t-webkit-filter:blur(1px);\n\t        filter:blur(1px);\n\topacity:0.2;\n\tborder-radius: 25px;\n}\n\n.button-text[_ngcontent-%COMP%]{\n\tfont-size:24px;\n}\n\n.cross[_ngcontent-%COMP%]{\n\theight:30px;\n\twidth:30px;\n\ttext-align: right;\n\tmargin-top:35%;\n\ttransform: rotate(0);\n\ttransition: 0.5s;\n}\n\n.cross[_ngcontent-%COMP%]:hover{\n\ttransform: rotate(90deg);\n\ttransition: 0.5s;\n}\n\n@media screen and (max-width:675px){\n\t.head[_ngcontent-%COMP%], .head[_ngcontent-%COMP%]:before{\n\t\tmargin-top: 16px;\n\t\tfont-size: 32px;\n\t}\n\n\t.cross[_ngcontent-%COMP%]{\n\t\theight:20px;\n\t\twidth:20px;\n\t\ttext-align: right;\n\t\tmargin-top:32px;\n\t\ttransform: rotate(0);\n\t\ttransition: 0.5s;\n\t}\n\n\t.description[_ngcontent-%COMP%]{\n\t\tfont-size:16px; \n\t\ttext-align: center;\n\t}\n\n\t.blur-text[_ngcontent-%COMP%]{\n\t\ttext-align: center;\n\t}\n\n\t.blur[_ngcontent-%COMP%]{\n\t\twidth:105%;\n\t\ttransform: translateX(-62%);\n\t\tposition:absolute;\n\t\tmin-height:120%;\n\t\tbottom:-10%;\n\t\tbackground-color: #fff;\n\t\t-webkit-filter:blur(1px);\n\t\t        filter:blur(1px);\n\t\topacity:0.2;\n\t\tborder-radius: 25px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudGRldGFpbC9kZXBhcnRtZW50ZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixtQ0FBbUM7QUFDcEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsMEJBQTBCO0NBQzFCLGlCQUFpQjtDQUNqQiwwQkFBMEI7Q0FDMUIsUUFBUTtDQUNSLGVBQWU7Q0FDZixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLHdCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msd0JBQXdCO0NBQ3hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0VBQ0MsZ0JBQWdCO0VBQ2hCLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLGNBQWM7RUFDZCxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7O0NBRUE7RUFDQyxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0Qix3QkFBZ0I7VUFBaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxtQkFBbUI7Q0FDcEI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRkZXRhaWwvZGVwYXJ0bWVudGRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWR7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdGZvbnQtc2l6ZTogNjRweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdC8qYm9yZGVyLWJvdHRvbToycHggc29saWQgI2ZmZmZmZjsqL1xufVxuXG4uaGVhZDpiZWZvcmV7XG4gIGNvbnRlbnQ6ICdcXDI4MDcnO1xuICBmb250LXNpemU6IDY0cHg7XG59XG5cbi5kZXNjcmlwdGlvbntcblx0Y29sb3I6I2ZmZmZmZjtcblx0Zm9udC1zaXplOjI4cHg7IFxufVxuXG4uY2lyY2xle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTI4LDEyOCwxMjgsMSk7IFxuXHRib3JkZXItcmFkaXVzOiAxMDAlO1xuXHRoZWlnaHQ6MTVweDtcblx0d2lkdGg6MTVweDtcblx0bWFyZ2luLWxlZnQ6NDBweDtcbn1cblxuLmNpcmNsZS5hY3RpdmV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0aGVpZ2h0OjIwcHg7XG5cdHdpZHRoOjIwcHg7XG5cdG1hcmdpbi1sZWZ0OjM3LjVweDtcbn1cblxuLmluZGljYXRvcnN7XG5cdHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5ibHVyLWRpdntcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJsdXJ7XG5cdHdpZHRoOjQzJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01JSk7XG5cdHBvc2l0aW9uOmFic29sdXRlO1xuXHQvKmJvcmRlcjoycHggc29saWQgZ3JlZW47Ki9cblx0bGVmdDo2MiU7XG5cdG1pbi1oZWlnaHQ6MTIwJTtcblx0Ym90dG9tOi0xMCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGZpbHRlcjpibHVyKDFweCk7XG5cdG9wYWNpdHk6MC4yO1xuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG4uYnV0dG9uLXRleHR7XG5cdGZvbnQtc2l6ZToyNHB4O1xufVxuXG4uY3Jvc3N7XG5cdGhlaWdodDozMHB4O1xuXHR3aWR0aDozMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bWFyZ2luLXRvcDozNSU7XG5cdHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uY3Jvc3M6aG92ZXJ7XG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0dHJhbnNpdGlvbjogMC41cztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG5cdC5oZWFkLC5oZWFkOmJlZm9yZXtcblx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdGZvbnQtc2l6ZTogMzJweDtcblx0fVxuXG5cdC5jcm9zc3tcblx0XHRoZWlnaHQ6MjBweDtcblx0XHR3aWR0aDoyMHB4O1xuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6MzJweDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcblx0XHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG5cblx0LmRlc2NyaXB0aW9ue1xuXHRcdGZvbnQtc2l6ZToxNnB4OyBcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQuYmx1ci10ZXh0e1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXG5cdC5ibHVye1xuXHRcdHdpZHRoOjEwNSU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC02MiUpO1xuXHRcdHBvc2l0aW9uOmFic29sdXRlO1xuXHRcdG1pbi1oZWlnaHQ6MTIwJTtcblx0XHRib3R0b206LTEwJTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdGZpbHRlcjpibHVyKDFweCk7XG5cdFx0b3BhY2l0eTowLjI7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0fVxufVxuXG4iXX0= */"],
      data: {
        animation: [_app_animations__WEBPACK_IMPORTED_MODULE_2__["translateRight"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-departmentdetail',
          templateUrl: './departmentdetail.component.html',
          styleUrls: ['./departmentdetail.component.css'],
          animations: [_app_animations__WEBPACK_IMPORTED_MODULE_2__["translateRight"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/departmentdetail/events.ts":
  /*!********************************************!*\
    !*** ./src/app/departmentdetail/events.ts ***!
    \********************************************/

  /*! exports provided: events */

  /***/
  function srcAppDepartmentdetailEventsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "events", function () {
      return events;
    });

    var events = [{
      image: '',
      name: 'TECHNOHOLIX',
      description: 'After a day full of competitions and workshops, it is time to let loose with Technoholix. As a Technoholix coordie, you will plan night shows as well as the grand gymkhana concert night which will be catering to a crowd of 20k+. Not only this, but you will also interact with a alot of international artists!'
    }, {
      image: '',
      name: 'creatives',
      description: 'After a day full of competitions and workshops, it is time to let loose with Technoholix. As a Technoholix coordie, you will plan night shows as well as the grand gymkhana concert night which will be catering to a crowd of 20k+. Not only this, but you will also interact with a alot of international artists!'
    }, {
      image: '',
      name: 'robowars',
      description: 'After a day full of competitions and workshops, it is time to let loose with Technoholix. As a Technoholix coordie, you will plan night shows as well as the grand gymkhana concert night which will be catering to a crowd of 20k+. Not only this, but you will also interact with a alot of international artists!'
    }];
    /***/
  },

  /***/
  "./src/app/departments/departments.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/departments/departments.component.ts ***!
    \******************************************************/

  /*! exports provided: DepartmentsComponent */

  /***/
  function srcAppDepartmentsDepartmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function () {
      return DepartmentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @glidejs/glide */
    "./node_modules/@glidejs/glide/dist/glide.esm.js");

    var DepartmentsComponent = /*#__PURE__*/function () {
      function DepartmentsComponent() {
        _classCallCheck(this, DepartmentsComponent);
      }

      _createClass(DepartmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var config = {
            type: 'carousel',
            perView: 3,
            gap: 64,
            breakpoints: {
              675: {
                perView: 1
              }
            }
          };
          new _glidejs_glide__WEBPACK_IMPORTED_MODULE_1__["default"]('.glide', config).mount();
        }
      }, {
        key: "zoomIn",
        value: function zoomIn(event) {
          console.log(event);
          var element_description = event['path'][2].children[2];
          var element_num = event['path'][2].children[1];
          element_description.classList.add('text-name-hover');
          element_num.classList.add('border-white');
        }
      }, {
        key: "zoomOut",
        value: function zoomOut(event) {
          var element_description = event['path'][2].children[2];
          var element_num = event['path'][2].children[1];
          element_description.classList.remove('text-name-hover');
          element_num.classList.remove('border-white');
        }
      }, {
        key: "redirect",
        value: function redirect(link) {
          window.location.href = link;
        }
      }]);

      return DepartmentsComponent;
    }();

    DepartmentsComponent.ɵfac = function DepartmentsComponent_Factory(t) {
      return new (t || DepartmentsComponent)();
    };

    DepartmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DepartmentsComponent,
      selectors: [["app-departments"]],
      decls: 37,
      vars: 0,
      consts: [[1, "container", "glide-container", "mt-4"], [1, "glide"], ["data-glide-el", "track", 1, "glide__track"], [1, "glide__slides"], [1, "glide__slide"], [1, "d-image"], ["src", "/assets/nature-1.jpg", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], [1, "text-num", "text-center", "text-uppercase"], [1, "text-name", "text-center", "text-uppercase"], ["src", "/assets/nature-2.jpg", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/nature-3.jpg", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["src", "/assets/nature-4.jpg", 1, "glide-img", 3, "click", "mouseenter", "mouseleave"], ["data-glide-el", "controls[nav]", 1, "glide__bullets"], ["data-glide-dir", "=1", 1, "glide__bullet"], ["data-glide-dir", "=2", 1, "glide__bullet"], ["data-glide-dir", "=3", 1, "glide__bullet"], ["data-glide-dir", "=4", 1, "glide__bullet"]],
      template: function DepartmentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_6_listener() {
            return ctx.redirect("managerdetail/events");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_6_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_6_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 01 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " events ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_13_listener() {
            return ctx.redirect("managerdetail/creatives");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_13_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_13_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 02 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " creatives ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_20_listener() {
            return ctx.redirect("managerdetail/web");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_20_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_20_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 03 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " web ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentsComponent_Template_img_click_27_listener() {
            return ctx.redirect("managerdetail/infrastructure");
          })("mouseenter", function DepartmentsComponent_Template_img_mouseenter_27_listener($event) {
            return ctx.zoomIn($event);
          })("mouseleave", function DepartmentsComponent_Template_img_mouseleave_27_listener($event) {
            return ctx.zoomOut($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 04 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " infrastructure ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".image[_ngcontent-%COMP%]{\n\n  height: 250px;\n  width:100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.image[_ngcontent-%COMP%]:nth-child(odd){\n  \n}\n\n.index[_ngcontent-%COMP%]{\n  font-size: 24px;\n\n}\n\n.index[_ngcontent-%COMP%]{\n  border-bottom:1px solid #ffffff;\n}\n\n.name[_ngcontent-%COMP%]{\n  font-size: 32px;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.box-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.box-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 800px;\n  height: 500px;\n  max-width: 90%;\n  max-height: 90%;\n  padding: 24px;\n  margin: 24px auto;\n  border-radius: 4px;\n\n  color: #555;\n  background-color: #eee;\n  box-shadow:\n    0 6px 20px rgba(0, 0, 0, 0.18),\n    0 6px 6px rgba(0, 0, 0, 0.25);\n}\n\n.info-container[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n\n  line-height: 24px;\n}\n\n.action-container[_ngcontent-%COMP%], .content-container[_ngcontent-%COMP%] {\n  position: relative;\n\n  overflow: auto;\n  height: 300px;\n  min-height: 0;\n  margin: 8px 16px;\n  border-radius: 4px;\n\n  background-color: #fff;\n}\n\n.action-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.vertical-container[_ngcontent-%COMP%], .horizontal-container[_ngcontent-%COMP%] {\n  min-height: 0 !important;\n}\n\n.action-button[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: calc(100% - 16px);\n  min-height: 35px;\n  padding: 4px 16px;\n  margin: 8px;\n  border: 1px solid #555;\n  border-radius: 4px;\n\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 14px;\n  text-align: center;\n}\n\n.action-button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #555;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.swiper-slide[_ngcontent-%COMP%] {\n  color: #aaa;\n  background-color: #eee;\n}\n\n.swiper-slide-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #aaa;\n}\n\n.d-image[_ngcontent-%COMP%]{\n  overflow: hidden;\n}\n\n.glide-img[_ngcontent-%COMP%]{\n  width:100%;\n  transition: 0.25s ease-in;\n  transform: scale(1);\n}\n\n.glide-img[_ngcontent-%COMP%]:hover{\n  transform: scale(1.1);\n  transition: 0.25s ease-out;\n\n}\n\n.glide-container[_ngcontent-%COMP%]{\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  height:400px;\n  width:100%;\n}\n\n.text-num[_ngcontent-%COMP%]{\n  color:white;\n  font-size: 24px;\n  border-bottom: 1px solid rgb(128,128,128);\n  padding-bottom: 8px;\n  padding-top: 8px;\n  transition:0.2s ease-in;\n}\n\n.text-name[_ngcontent-%COMP%]{\n  color:#ffffff;\n  font-size: 28px;\n  padding-top: 8px;\n  transition:0.2s ease-in;\n}\n\n.text-name-hover[_ngcontent-%COMP%]{\n  transform: translateY(8px);\n  transition:0.2s ease-out;\n}\n\n.border-white[_ngcontent-%COMP%]{\n  border-bottom: 1px solid white;\n  transition:0.2s ease-out;\n}\n\n\n\n.glide[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box; }\n\n.glide[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    box-sizing: inherit; }\n\n.glide__track[_ngcontent-%COMP%] {\n    overflow: hidden; }\n\n.glide__slides[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    list-style: none;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transform-style: preserve-3d;\n    touch-action: pan-Y;\n    overflow: hidden;\n    padding: 0;\n    white-space: nowrap;\n    display: flex;\n    flex-wrap: nowrap;\n    will-change: transform; }\n\n.glide__slides--dragging[_ngcontent-%COMP%] {\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n\n.glide__slide[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    flex-shrink: 0;\n    white-space: normal;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    -webkit-touch-callout: none;\n    -webkit-tap-highlight-color: transparent; }\n\n.glide__slide[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      -webkit-user-select: none;\n              user-select: none;\n      -webkit-user-drag: none;\n      -moz-user-select: none;\n      -ms-user-select: none; }\n\n.glide__arrows[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.glide__bullets[_ngcontent-%COMP%] {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.glide--rtl[_ngcontent-%COMP%] {\n    direction: rtl; }\n\n\n\n.glide__arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 45%;\n  z-index: 2;\n  color: white;\n  text-transform: uppercase;\n  padding: 9px 12px;\n  background-color: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n  border-radius: 4px;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  text-shadow: 0 0.25em 0.5em rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  cursor: pointer;\n  transition: opacity 150ms ease, border 300ms ease-in-out;\n  transform: translateY(-50%);\n  line-height: 1; }\n\n.glide__arrow[_ngcontent-%COMP%]:focus {\n    outline: none; }\n\n.glide__arrow[_ngcontent-%COMP%]:hover {\n    border-color: white; }\n\n.glide__arrow--left[_ngcontent-%COMP%] {\n    left: 2em; }\n\n.glide__arrow--right[_ngcontent-%COMP%] {\n    right: 2em; }\n\n.glide__arrow--disabled[_ngcontent-%COMP%] {\n    opacity: 0.33; }\n\n.glide__bullets[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  bottom: -1em;\n  left: 50%;\n  display: inline-flex;\n  list-style: none;\n  transform: translateX(-50%); }\n\n.glide__bullet[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  width: 9px;\n  height: 9px;\n  padding: 0;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  transition: all 300ms ease-in-out;\n  cursor: pointer;\n  line-height: 0;\n  box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.1);\n  margin: 0 0.25em; }\n\n.glide__bullet[_ngcontent-%COMP%]:focus {\n    outline: none; }\n\n.glide__bullet[_ngcontent-%COMP%]:hover, .glide__bullet[_ngcontent-%COMP%]:focus {\n    border: 2px solid white;\n    background-color: rgba(255, 255, 255, 0.5); }\n\n.glide__bullet--active[_ngcontent-%COMP%] {\n    background-color: white; }\n\n.glide--swipeable[_ngcontent-%COMP%] {\n  cursor: grab;\n  cursor: -webkit-grab; }\n\n.glide--dragging[_ngcontent-%COMP%] {\n  cursor: grabbing;\n  cursor: -webkit-grabbing; }\n\n\n\n@media screen and (max-width:675px){\n    .glide__bullets[_ngcontent-%COMP%]{\n      bottom:0em;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxlQUFlOztBQUVqQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBSUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7O0VBRWxCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEI7O2lDQUUrQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjs7RUFFbEIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7RUFFbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztBQUNUOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7O0FBRTVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix3QkFBd0I7QUFDMUI7O0FBSUEsNkJBQTZCOztBQUM3QjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCLEVBQUU7O0FBQ3hCO0lBQ0UsbUJBQW1CLEVBQUU7O0FBQ3ZCO0lBQ0UsZ0JBQWdCLEVBQUU7O0FBQ3BCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCLEVBQUU7O0FBQ3hCO01BQ0UseUJBQWlCO1NBQWpCLHNCQUFpQjtVQUFqQixxQkFBaUI7Y0FBakIsaUJBQWlCLEVBQUU7O0FBQ3ZCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0Isd0NBQXdDLEVBQUU7O0FBQzFDO01BQ0UseUJBQWlCO2NBQWpCLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLHFCQUFxQixFQUFFOztBQUMzQjtJQUNFLDJCQUEyQjtJQUMzQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBRTs7QUFDckI7SUFDRSwyQkFBMkI7SUFDM0IseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUU7O0FBQ3JCO0lBQ0UsY0FBYyxFQUFFOztBQUNwQix5Q0FBeUM7O0FBRXpDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyw4Q0FBOEM7RUFDOUMsVUFBVTtFQUNWLGVBQWU7RUFDZix3REFBd0Q7RUFDeEQsMkJBQTJCO0VBQzNCLGNBQWMsRUFBRTs7QUFDaEI7SUFDRSxhQUFhLEVBQUU7O0FBQ2pCO0lBQ0UsbUJBQW1CLEVBQUU7O0FBQ3ZCO0lBQ0UsU0FBUyxFQUFFOztBQUNiO0lBQ0UsVUFBVSxFQUFFOztBQUNkO0lBQ0UsYUFBYSxFQUFFOztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQixFQUFFOztBQUUvQjtFQUNFLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsY0FBYztFQUNkLCtDQUErQztFQUMvQyxnQkFBZ0IsRUFBRTs7QUFDbEI7SUFDRSxhQUFhLEVBQUU7O0FBQ2pCO0lBQ0UsdUJBQXVCO0lBQ3ZCLDBDQUEwQyxFQUFFOztBQUM5QztJQUNFLHVCQUF1QixFQUFFOztBQUU3QjtFQUNFLFlBQVk7RUFFWixvQkFBb0IsRUFBRTs7QUFFeEI7RUFDRSxnQkFBZ0I7RUFFaEIsd0JBQXdCLEVBQUU7O0FBRTFCLDJCQUEyQjs7QUFFM0I7SUFDRTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXtcblxuICBoZWlnaHQ6IDI1MHB4O1xuICB3aWR0aDoxMDAlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltYWdlOm50aC1jaGlsZChvZGQpe1xuICAvKnRyYW5zZm9ybTogcm90YXRlM2QoNjBkZWcsNjBkZWcgLDMwZGVnKTsqL1xufVxuXG4uaW5kZXh7XG4gIGZvbnQtc2l6ZTogMjRweDtcblxufVxuXG4uaW5kZXh7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5uYW1le1xuICBmb250LXNpemU6IDMycHg7XG59XG5cblxuXG4uYXBwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYm94LWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAyNHB4IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBjb2xvcjogIzU1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm94LXNoYWRvdzpcbiAgICAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOCksXG4gICAgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5pbmZvLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcblxuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmFjdGlvbi1jb250YWluZXIsXG4uY29udGVudC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi52ZXJ0aWNhbC1jb250YWluZXIsXG4uaG9yaXpvbnRhbC1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb24tYnV0dG9uIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiA0cHggMTZweDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hY3Rpb24tYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5zd2lwZXItc2xpZGUge1xuICBjb2xvcjogI2FhYTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLnN3aXBlci1zbGlkZS1hY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbn1cblxuLmQtaW1hZ2V7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZ2xpZGUtaW1ne1xuICB3aWR0aDoxMDAlO1xuICB0cmFuc2l0aW9uOiAwLjI1cyBlYXNlLWluO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uZ2xpZGUtaW1nOmhvdmVye1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuMjVzIGVhc2Utb3V0O1xuXG59XG5cbi5nbGlkZS1jb250YWluZXJ7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDo0MDBweDtcbiAgd2lkdGg6MTAwJTtcbn1cblxuLnRleHQtbnVte1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDEyOCwxMjgsMTI4KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW47XG59XG5cbi50ZXh0LW5hbWV7XG4gIGNvbG9yOiNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2UtaW47XG59XG5cbi50ZXh0LW5hbWUtaG92ZXJ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICB0cmFuc2l0aW9uOjAuMnMgZWFzZS1vdXQ7XG59XG5cbi5ib3JkZXItd2hpdGV7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgdHJhbnNpdGlvbjowLjJzIGVhc2Utb3V0O1xufVxuXG5cblxuLyoqKioqKkdsaWRlIGNvcmUgY3NzKioqKioqKiovXG4uZ2xpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5nbGlkZSAqIHtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XG4gIC5nbGlkZV9fdHJhY2sge1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLmdsaWRlX19zbGlkZXMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRvdWNoLWFjdGlvbjogcGFuLVk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtOyB9XG4gICAgLmdsaWRlX19zbGlkZXMtLWRyYWdnaW5nIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5nbGlkZV9fc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgLmdsaWRlX19zbGlkZSBhIHtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyB9XG4gIC5nbGlkZV9fYXJyb3dzIHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgLmdsaWRlX19idWxsZXRzIHtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cbiAgLmdsaWRlLS1ydGwge1xuICAgIGRpcmVjdGlvbjogcnRsOyB9XG4vKioqKioqKioqKkdsaWRlIFRoZW1lIENTUyoqKioqKioqKioqKioqKi9cblxuLmdsaWRlX19hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogNDUlO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmc6IDlweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMC4yNWVtIDAuNWVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB0ZXh0LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZSwgYm9yZGVyIDMwMG1zIGVhc2UtaW4tb3V0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxpbmUtaGVpZ2h0OiAxOyB9XG4gIC5nbGlkZV9fYXJyb3c6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmdsaWRlX19hcnJvdzpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuICAuZ2xpZGVfX2Fycm93LS1sZWZ0IHtcbiAgICBsZWZ0OiAyZW07IH1cbiAgLmdsaWRlX19hcnJvdy0tcmlnaHQge1xuICAgIHJpZ2h0OiAyZW07IH1cbiAgLmdsaWRlX19hcnJvdy0tZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuMzM7IH1cblxuLmdsaWRlX19idWxsZXRzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBib3R0b206IC0xZW07XG4gIGxlZnQ6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxuXG4uZ2xpZGVfX2J1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiA5cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMDtcbiAgYm94LXNoYWRvdzogMCAwLjI1ZW0gMC41ZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbjogMCAwLjI1ZW07IH1cbiAgLmdsaWRlX19idWxsZXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLmdsaWRlX19idWxsZXQ6aG92ZXIsIC5nbGlkZV9fYnVsbGV0OmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IH1cbiAgLmdsaWRlX19idWxsZXQtLWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLmdsaWRlLS1zd2lwZWFibGUge1xuICBjdXJzb3I6IGdyYWI7XG4gIGN1cnNvcjogLW1vei1ncmFiO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjsgfVxuXG4uZ2xpZGUtLWRyYWdnaW5nIHtcbiAgY3Vyc29yOiBncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7IH1cblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NzVweCl7XG4gICAgLmdsaWRlX19idWxsZXRze1xuICAgICAgYm90dG9tOjBlbTtcbiAgICB9XG4gIH1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-departments',
          templateUrl: './departments.component.html',
          styleUrls: ['./departments.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home-animations.ts":
  /*!*****************************************!*\
    !*** ./src/app/home/home-animations.ts ***!
    \*****************************************/

  /*! exports provided: fade, slide, animateHead, animateContent */

  /***/
  function srcAppHomeHomeAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fade", function () {
      return fade;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "slide", function () {
      return slide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animateHead", function () {
      return animateHead;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "animateContent", function () {
      return animateContent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var fade = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.5",
      offset: 0.3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.1",
      offset: 0.9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      display: "none",
      offset: 1.0
    })])))]);
    var slide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('slide', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(300px)",
      offset: 0.7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    var animateHead = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateHead', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(-600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(-600px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(-300px)",
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    var animateContent = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('animateContent', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0",
      transform: "translateX(600px)",
      offset: 0.5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "0.3",
      transform: "translateX(300px)",
      offset: 0.65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
      opacity: "1",
      transform: "translateX(0px)",
      offset: 1.0
    })])))]);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home-animations */
    "./src/app/home/home-animations.ts");
    /* harmony import */


    var _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../currentscreen.service */
    "./src/app/currentscreen.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_0_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WHY TECHFEST?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);
      }
    }

    function HomeComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_0_p_2_Template, 2, 1, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Techfest is the annual science and technology festival of Indian Institute of Technology Bombay. It also refers to the independent body of students who organize this event along with many other social initiatives and outreach programs around the year. Techfest is known for hosting a variety of events that include competitions, exhibitions, lectures as well as workshops.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.screen == "whytf");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateContent", undefined);
      }
    }

    function HomeComponent_div_1_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);
      }
    }

    function HomeComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_1_p_2_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Techfest is the annual science and technology festival of Indian Institute of Technology Bombay. It also refers to the independent body of students who organize this event along with many other social initiatives and outreach programs around the year. Techfest is known for hosting a variety of events that include competitions, exhibitions, lectures as well as workshops.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.screen == "home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateHead", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@animateContent", undefined);
      }
    }

    function HomeComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(cs) {
        _classCallCheck(this, HomeComponent);

        this.cs = cs;
        this.screen = 'home';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setInterval(function () {
            _this2.setScreen();
          });
        }
      }, {
        key: "setScreen",
        value: function setScreen() {
          this.screen = this.cs.getCurrentScreen();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 3,
      vars: 3,
      consts: [["class", "row justify-content-center main-div", 4, "ngIf"], [1, "row", "justify-content-center", "main-div"], [1, "col-12", "col-sm-10", "col-md-8"], ["class", "head text-center text-md-left", "id", "whytf", 4, "ngIf"], [1, "row"], [1, "col-2", "divi", "text-md-right", "d-none", "d-md-inline-block"], [1, "line"], [1, "col-12", "col-md-10", "text-center", "text-md-left"], [1, "description-text"], ["id", "whytf", 1, "head", "text-center", "text-md-left"], ["class", "head text-center text-md-left", 4, "ngIf"], [1, "head", "text-center", "text-md-left"], ["src", "assets/cp_title.png", "id", "cpimg"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 9, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 9, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 1, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "whytf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.screen == "departments");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".head[_ngcontent-%COMP%]{\n\tfont-size: 64px;\n\tcolor: #ffffff;\n\tfont-weight:bold;\n}\n\n.main-div[_ngcontent-%COMP%]{\n\tmargin-top:48px;\n}\n\n.description-text[_ngcontent-%COMP%]{\n\tcolor:#ffffff;\n\tfont-size:24px;\n}\n\n.line[_ngcontent-%COMP%]{\n\t\n\tborder-left:64px solid #ffffff;\n\theight:2px;\n\tmargin-top: 16px;\n\tdisplay: inline-block;\n}\n\n#cpimg[_ngcontent-%COMP%]{\n\theight:68px;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n}\n\n#whytf[_ngcontent-%COMP%]:before{\n  content: '\\2807';\n  font-size: 64px;\n}\n\n@media screen and (max-width:1080px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\theight:56px;\n\t}\n}\n\n@media screen and (max-width:900px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\theight:48px;\n\t}\n}\n\n@media screen and (max-width:900px){\n\t#cpimg[_ngcontent-%COMP%]{\n\t\twidth:100%;\n\t\t-o-object-fit: contain;\n\t\t   object-fit: contain;\n\t}\n}\n\n@media screen and (max-width:675px){\n\t.head[_ngcontent-%COMP%], #whytf[_ngcontent-%COMP%]:before{\n\t\tfont-size: 32px;\n\t}\n\n\t.description-text[_ngcontent-%COMP%]{\n\t\tfont-size:16px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsY0FBYztBQUNmOztBQUNBO0NBQ0MsY0FBYztDQUNkLDhCQUE4QjtDQUM5QixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxvQkFBaUI7SUFBakIsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7Q0FDQztFQUNDLFdBQVc7Q0FDWjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtFQUNWLHNCQUFtQjtLQUFuQixtQkFBbUI7Q0FDcEI7QUFDRDs7QUFJQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjs7Q0FFQTtFQUNDLGNBQWM7Q0FDZjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZHtcblx0Zm9udC1zaXplOiA2NHB4O1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLm1haW4tZGl2e1xuXHRtYXJnaW4tdG9wOjQ4cHg7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0e1xuXHRjb2xvcjojZmZmZmZmO1xuXHRmb250LXNpemU6MjRweDtcbn1cbi5saW5le1xuXHQvKndpZHRoOjIwcHg7Ki9cblx0Ym9yZGVyLWxlZnQ6NjRweCBzb2xpZCAjZmZmZmZmO1xuXHRoZWlnaHQ6MnB4O1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNjcGltZ3tcblx0aGVpZ2h0OjY4cHg7XG5cdG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jd2h5dGY6YmVmb3Jle1xuICBjb250ZW50OiAnXFwyODA3JztcbiAgZm9udC1zaXplOiA2NHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwODBweCl7XG5cdCNjcGltZ3tcblx0XHRoZWlnaHQ6NTZweDtcblx0fVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjkwMHB4KXtcblx0I2NwaW1ne1xuXHRcdGhlaWdodDo0OHB4O1xuXHR9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpe1xuXHQjY3BpbWd7XG5cdFx0d2lkdGg6MTAwJTtcblx0XHRvYmplY3QtZml0OiBjb250YWluO1xuXHR9XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3NXB4KXtcblx0LmhlYWQsI3doeXRmOmJlZm9yZXtcblx0XHRmb250LXNpemU6IDMycHg7XG5cdH1cblxuXHQuZGVzY3JpcHRpb24tdGV4dHtcblx0XHRmb250LXNpemU6MTZweDtcblx0fVxufVxuXG4iXX0= */"],
      data: {
        animation: [_home_animations__WEBPACK_IMPORTED_MODULE_1__["fade"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["slide"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateHead"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateContent"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css'],
          animations: [_home_animations__WEBPACK_IMPORTED_MODULE_1__["fade"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["slide"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateHead"], _home_animations__WEBPACK_IMPORTED_MODULE_1__["animateContent"]]
        }]
      }], function () {
        return [{
          type: _currentscreen_service__WEBPACK_IMPORTED_MODULE_2__["CurrentscreenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/managerdetail/managerdetail.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/managerdetail/managerdetail.component.ts ***!
    \**********************************************************/

  /*! exports provided: ManagerdetailComponent */

  /***/
  function srcAppManagerdetailManagerdetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManagerdetailComponent", function () {
      return ManagerdetailComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManagerdetailComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Creatives manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_0_Template_img_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "rahul shanbag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "9090909090");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ManagerdetailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Events manager");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManagerdetailComponent_div_1_Template_img_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.redirectTo("departments");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Krishnakant Suryavanshi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "9090909090");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "rahul shanbag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "9090909090");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "rahul shanbag");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9090909090");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ManagerdetailComponent = /*#__PURE__*/function () {
      function ManagerdetailComponent(route) {
        _classCallCheck(this, ManagerdetailComponent);

        this.route = route;
        this.managers = "events";
      }

      _createClass(ManagerdetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.subscribe(function (params) {
            _this3.managers = params['dep'];
          });
        }
      }, {
        key: "redirectTo",
        value: function redirectTo(name) {
          window.location.href = name;
        }
      }]);

      return ManagerdetailComponent;
    }();

    ManagerdetailComponent.ɵfac = function ManagerdetailComponent_Factory(t) {
      return new (t || ManagerdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ManagerdetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManagerdetailComponent,
      selectors: [["app-managerdetail"]],
      decls: 2,
      vars: 2,
      consts: [["class", "container", 4, "ngIf"], ["class", "container-fluid", 4, "ngIf"], [1, "container"], [1, "row", "text-center", "head-row"], [1, "col-11"], [1, "text-uppercase", "text-center", "head-text", 2, "width", "100%", "transform", "translateX(5%)"], [1, "col-1"], ["src", "/assets/cross.png", 1, "cross", 3, "click"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-4"], [1, "row"], [1, "col-12", "manager-col"], ["src", "https://clipartart.com/images/clipart-project-manager-4.jpg", 1, "manager-img"], [1, "manager-name", "text-uppercase", "text-center"], [1, "manager-num", "text-center"], [1, "row", "mt-4", 2, "padding-bottom", "32px"], [1, "col-12", "text-center", "icons"], [1, "fa", "fa-twitter"], [1, "fa", "fa-linkedin"], [1, "fa", "fa-facebook"], [1, "fa", "fa-instagram"], [1, "container-fluid"], [1, "col-10", "col-md-11"], [1, "col-2", "col-md-1"], [1, "row", "justify-content-around"], [1, "col-12", "col-md-3"], [1, "manager-name", "text-center"]],
      template: function ManagerdetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ManagerdetailComponent_div_0_Template, 23, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManagerdetailComponent_div_1_Template, 51, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "creatives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.managers == "events");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".head-text[_ngcontent-%COMP%]{\n\tfont-size:64px;\n\tcolor:#fff;\n\tmargin-bottom:0;\n}\n\n.head-row[_ngcontent-%COMP%]{\n\tborder-bottom:2px solid #fff;\n}\n\n.cross[_ngcontent-%COMP%]{\n\theight:30px;\n\twidth:30px;\n\ttext-align: right;\n\tmargin-top:50%;\n\ttransform: rotate(0);\n\ttransition: 0.5s;\n\tcursor:pointer;\n}\n\n.cross[_ngcontent-%COMP%]:hover{\n\ttransform: rotate(90deg);\n\ttransition: 0.5s;\n}\n\n.manager-img[_ngcontent-%COMP%]{\n\twidth:100%;\n\t-o-object-fit:cover;\n\t   object-fit:cover;\n\t-o-object-position: top;\n\t   object-position: top;\n\tmax-height: 300px;\n\tmargin-top: 32px;\n}\n\n.manager-name[_ngcontent-%COMP%], .manager-num[_ngcontent-%COMP%]{\n\tfont-size:24px;\n\tcolor:#ffffff;\n}\n\n.manager-name[_ngcontent-%COMP%]{\n\tfont-weight: bold;\n\tmargin-bottom: 0;\n}\n\n.manager-col[_ngcontent-%COMP%]{\n\tborder-bottom:2px solid #fff;\n}\n\n.fa[_ngcontent-%COMP%]{\n\tfont-size: 32px;\n\tcolor:#ffffff;\n\tborder:1px solid #ffffff;\n\tborder-radius: 100%; \n\theight:56px; \n\twidth:56px; \n\ttext-align: center;\n\tpadding-top:10px;\n\tmargin-right:14px;\n\topacity:0.8;\n}\n\n.fa[_ngcontent-%COMP%]:last-child{\n\tmargin-right: 0;\n}\n\n@media screen and (max-width:675px){\n\t.head-text[_ngcontent-%COMP%]{\n\t\tfont-size:20px;\n\t}\n\n\t.cross[_ngcontent-%COMP%]{\n\t\theight:16px;\n\t\twidth:16px;\n\t\tmargin-top:10%;\n\t}\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlcmRldGFpbC9tYW5hZ2VyZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2Qsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3QkFBd0I7Q0FDeEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLG1CQUFnQjtJQUFoQixnQkFBZ0I7Q0FDaEIsdUJBQW9CO0lBQXBCLG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUdBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7O0NBRUE7RUFDQyxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7Q0FDZjs7QUFFRCIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXJkZXRhaWwvbWFuYWdlcmRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWQtdGV4dHtcblx0Zm9udC1zaXplOjY0cHg7XG5cdGNvbG9yOiNmZmY7XG5cdG1hcmdpbi1ib3R0b206MDtcbn1cblxuLmhlYWQtcm93e1xuXHRib3JkZXItYm90dG9tOjJweCBzb2xpZCAjZmZmO1xufVxuXG4uY3Jvc3N7XG5cdGhlaWdodDozMHB4O1xuXHR3aWR0aDozMHB4O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0bWFyZ2luLXRvcDo1MCU7XG5cdHRyYW5zZm9ybTogcm90YXRlKDApO1xuXHR0cmFuc2l0aW9uOiAwLjVzO1xuXHRjdXJzb3I6cG9pbnRlcjtcbn1cblxuLmNyb3NzOmhvdmVye1xuXHR0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG5cdHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5tYW5hZ2VyLWltZ3tcblx0d2lkdGg6MTAwJTtcblx0b2JqZWN0LWZpdDpjb3Zlcjtcblx0b2JqZWN0LXBvc2l0aW9uOiB0b3A7XG5cdG1heC1oZWlnaHQ6IDMwMHB4O1xuXHRtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ubWFuYWdlci1uYW1lLC5tYW5hZ2VyLW51bXtcblx0Zm9udC1zaXplOjI0cHg7XG5cdGNvbG9yOiNmZmZmZmY7XG59XG5cbi5tYW5hZ2VyLW5hbWV7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWFuYWdlci1jb2x7XG5cdGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmY7XG59XG5cbi5mYXtcblx0Zm9udC1zaXplOiAzMnB4O1xuXHRjb2xvcjojZmZmZmZmO1xuXHRib3JkZXI6MXB4IHNvbGlkICNmZmZmZmY7XG5cdGJvcmRlci1yYWRpdXM6IDEwMCU7IFxuXHRoZWlnaHQ6NTZweDsgXG5cdHdpZHRoOjU2cHg7IFxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOjEwcHg7XG5cdG1hcmdpbi1yaWdodDoxNHB4O1xuXHRvcGFjaXR5OjAuODtcbn1cblxuLmZhOmxhc3QtY2hpbGR7XG5cdG1hcmdpbi1yaWdodDogMDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjY3NXB4KXtcblx0LmhlYWQtdGV4dHtcblx0XHRmb250LXNpemU6MjBweDtcblx0fVxuXG5cdC5jcm9zc3tcblx0XHRoZWlnaHQ6MTZweDtcblx0XHR3aWR0aDoxNnB4O1xuXHRcdG1hcmdpbi10b3A6MTAlO1xuXHR9XG5cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagerdetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-managerdetail',
          templateUrl: './managerdetail.component.html',
          styleUrls: ['./managerdetail.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/gurnoor/Downloads/Computer Science/HTML/Angular/coordiportal/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map