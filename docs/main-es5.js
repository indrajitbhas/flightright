(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"container\">\r\n  <div class=\"nav-scroller py-1 mb-2\">\r\n      <nav class=\"nav d-flex justify-content-between\">\r\n        <a class=\"p-12 text-muted\" href=\"\">Home</a>\r\n        <a class=\"p-12 text-muted\" href=\"admin\">Admin</a>\r\n      </nav>\r\n  </div>\r\n  <div class=\"row\" style=\"margin-top: 20px\">\r\n\r\n    <div class=\"col-md-12 blog-main\">\r\n      <h3 class=\"pb-4 mb-4 font-italic border-bottom\">\r\n        Flightright Problem 2\r\n      </h3>\r\n      <router-outlet></router-outlet>\r\n      <!-- <app-blob-list></app-blob-list> -->\r\n    </div><!-- /.blog-main -->\r\n\r\n  </div><!-- /.row -->\r\n\r\n</main><!-- /.container -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blob-list/blob-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blob-list/blob-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blog-post\" *ngFor = \"let x of blist\">\n  <h2 class=\"blog-post-title\">{{x.title}}</h2>\n  <p class=\"blog-post-meta\">{{x.date |  date:'fullDate'}} by <a href=\"#\">{{x.writer}}</a></p>\n  <p>{{x.body}}</p>\n  <a href=\"#\" *ngIf=\"!editionMode\" (click)=\"editBlog(x)\">Edit blog</a>\n</div><!-- /.blog-post -->\n<div *ngIf = \"editionMode\" style=\"margin-bottom: 10px\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"id\"><b>Blog Id:</b></label>\n      <span>{{\"  \" + currentBlog.id}}</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input id=\"title\" [(ngModel)]=\"currentBlog.title\" name=\"title\" class=\"form-control\" type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date\">Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"currentBlog.date\" id=\"date\" name=\"date\" type=\"text\"  disabled>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"body\">Blog body</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"currentBlog.body\" name=\"body\" id=\"body\" rows=\"8\" cols=\"80\"></textarea>\n    </div>\n    <div>\n        <button type=\"submit\" (click)=\"cancel()\" class=\"btn btn-primary\">Cancel</button>\n        <button type=\"submit\" (click)=\"save()\" class=\"btn btn-primary\" style=\"margin-left: 10px\">Save</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/blog-admin/blog-admin.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/blog-admin/blog-admin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Author</th>\n      <th scope=\"col\">Title</th>\n      <th scope=\"col\">Date</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let x of blist\">\n      <th scope=\"row\">{{x.id}}</th>\n      <td>{{x.writer}}</td>\n      <td>{{x.title}}</td>\n      <td>{{x.date | date: 'shortDate' }}</td>\n      <td><button type=\"submit\" class=\"btn btn-primary\" (click)=\"remove(x.id)\" [disabled] = \"x.id == 1\">Remove</button><button type=\"submit\" style=\"margin-left:5px\" class=\"btn btn-primary\" (click)=\"editBlog(x)\">Edit</button></td>\n    </tr>\n  </tbody>\n</table>\n<a href=\"#\" *ngIf=\"showCreateBlog\" (click)=\"createBlog($event)\">Create blog</a>\n<div *ngIf=\"editionMode\" style=\"margin-bottom: 10px\">\n  <form>\n    <div class=\"form-group\" *ngIf=\"currentBlog.id\">\n      <label for=\"id\"><b>Blog Id:</b></label>\n      <span>{{\"  \" + currentBlog.id}}</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input id=\"title\" [(ngModel)]=\"currentBlog.title\" name=\"title\" class=\"form-control\" type=\"text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"date\">Date</label>\n      <input class=\"form-control\" [(ngModel)]=\"currentBlog.date\" id=\"date\" name=\"date\" type=\"text\"  disabled>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"body\">Blog body</label>\n      <textarea class=\"form-control\" [(ngModel)]=\"currentBlog.body\" name=\"body\" id=\"body\" rows=\"8\" cols=\"80\"></textarea>\n    </div>\n    <div>\n        <button type=\"submit\" (click)=\"cancel()\" class=\"btn btn-primary\">Cancel</button>\n        <button type=\"submit\" (click)=\"save()\" class=\"btn btn-primary\" style=\"margin-left: 10px\">Save</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'problem2';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blob_list_blob_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blob-list/blob-list.component */ "./src/app/blob-list/blob-list.component.ts");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blogs.service */ "./src/app/blogs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blog_admin_blog_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blog-admin/blog-admin.component */ "./src/app/blog-admin/blog-admin.component.ts");










var appRoutes = [
    { path: 'admin', component: _blog_admin_blog_admin_component__WEBPACK_IMPORTED_MODULE_9__["BlogAdminComponent"] },
    { path: 'Flightright/admin', component: _blob_list_blob_list_component__WEBPACK_IMPORTED_MODULE_6__["BlobListComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _blob_list_blob_list_component__WEBPACK_IMPORTED_MODULE_6__["BlobListComponent"],
                _blog_admin_blog_admin_component__WEBPACK_IMPORTED_MODULE_9__["BlogAdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_blogs_service__WEBPACK_IMPORTED_MODULE_7__["BlogsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blob-list/blob-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/blob-list/blob-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ItbGlzdC9ibG9iLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/blob-list/blob-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blob-list/blob-list.component.ts ***!
  \**************************************************/
/*! exports provided: BlobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlobListComponent", function() { return BlobListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog */ "./src/app/blog.ts");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blogs.service */ "./src/app/blogs.service.ts");




var BlobListComponent = /** @class */ (function () {
    function BlobListComponent(bservice) {
        var _this = this;
        this.editionMode = false;
        bservice.getBlogs().subscribe(function (x) { return _this.blist = x; });
    }
    BlobListComponent.prototype.editBlog = function (blog) {
        this.editionMode = true;
        this.currentBlog = blog;
        this.prevBlogBeforeEdition = new _blog__WEBPACK_IMPORTED_MODULE_2__["Blog"](0, this.currentBlog.writer, this.currentBlog.title, this.currentBlog.body);
    };
    BlobListComponent.prototype.cancel = function () {
        this.currentBlog.writer = this.prevBlogBeforeEdition.writer;
        this.currentBlog.title = this.prevBlogBeforeEdition.title;
        this.currentBlog.body = this.prevBlogBeforeEdition.body;
        this.editionMode = false;
    };
    BlobListComponent.prototype.save = function () {
        this.editionMode = false;
    };
    BlobListComponent.prototype.ngOnInit = function () {
    };
    BlobListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blob-list',
            template: __webpack_require__(/*! raw-loader!./blob-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/blob-list/blob-list.component.html"),
            styles: [__webpack_require__(/*! ./blob-list.component.css */ "./src/app/blob-list/blob-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_3__["BlogsService"]])
    ], BlobListComponent);
    return BlobListComponent;
}());



/***/ }),

/***/ "./src/app/blog-admin/blog-admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/blog-admin/blog-admin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2ctYWRtaW4vYmxvZy1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/blog-admin/blog-admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/blog-admin/blog-admin.component.ts ***!
  \****************************************************/
/*! exports provided: BlogAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogAdminComponent", function() { return BlogAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogs.service */ "./src/app/blogs.service.ts");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../blog */ "./src/app/blog.ts");




var BlogAdminComponent = /** @class */ (function () {
    function BlogAdminComponent(bservice) {
        var _this = this;
        this.editionMode = false;
        this.showCreateBlog = true;
        this.creatingBlog = true;
        this.bservice = bservice;
        bservice.getBlogs().subscribe(function (x) { return _this.blist = x; });
    }
    BlogAdminComponent.prototype.ngOnInit = function () {
    };
    BlogAdminComponent.prototype.editBlog = function (blog) {
        //this.currentBlog.
        this.showCreateBlog = false;
        this.editionMode = true;
        this.currentBlog = blog;
        this.prevBlogBeforeEdition = new _blog__WEBPACK_IMPORTED_MODULE_3__["Blog"](0, this.currentBlog.writer, this.currentBlog.title, this.currentBlog.body);
    };
    BlogAdminComponent.prototype.cancel = function () {
        if (!this.creatingBlog) {
            this.currentBlog.writer = this.prevBlogBeforeEdition.writer;
            this.currentBlog.title = this.prevBlogBeforeEdition.title;
            this.currentBlog.body = this.prevBlogBeforeEdition.body;
        }
        this.editionMode = false;
        this.showCreateBlog = true;
        this.creatingBlog = false;
    };
    BlogAdminComponent.prototype.remove = function (bid) {
        console.log(bid);
        this.bservice.removeBlog(bid);
    };
    BlogAdminComponent.prototype.createBlog = function (e) {
        e.preventDefault();
        this.editionMode = true;
        this.showCreateBlog = false;
        this.currentBlog = new _blog__WEBPACK_IMPORTED_MODULE_3__["Blog"](0, '', '', '');
        this.creatingBlog = true;
    };
    BlogAdminComponent.prototype.save = function () {
        if (this.creatingBlog) {
            this.showCreateBlog = true;
            this.bservice.saveBlog(this.currentBlog);
            this.editionMode = false;
        }
        else {
            this.editionMode = false;
            this.showCreateBlog = true;
        }
        this.creatingBlog = false;
    };
    BlogAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-admin',
            template: __webpack_require__(/*! raw-loader!./blog-admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/blog-admin/blog-admin.component.html"),
            styles: [__webpack_require__(/*! ./blog-admin.component.css */ "./src/app/blog-admin/blog-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_blogs_service__WEBPACK_IMPORTED_MODULE_2__["BlogsService"]])
    ], BlogAdminComponent);
    return BlogAdminComponent;
}());



/***/ }),

/***/ "./src/app/blog.ts":
/*!*************************!*\
  !*** ./src/app/blog.ts ***!
  \*************************/
/*! exports provided: Blog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blog", function() { return Blog; });
var Blog = /** @class */ (function () {
    function Blog(id, writer, title, body) {
        this.id = id || Math.floor(Math.random() * (10000 - 999 + 1) + 999);
        this.writer = writer || "Indra";
        this.title = title || "";
        this.date = new Date();
        this.body = body || "";
    }
    return Blog;
}());



/***/ }),

/***/ "./src/app/blogs.service.ts":
/*!**********************************!*\
  !*** ./src/app/blogs.service.ts ***!
  \**********************************/
/*! exports provided: BlogsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsService", function() { return BlogsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog */ "./src/app/blog.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BlogsService = /** @class */ (function () {
    function BlogsService() {
        this.initialBlogs = [new _blog__WEBPACK_IMPORTED_MODULE_2__["Blog"](1, "Indra", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")];
        this.blogList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.initialBlogs);
        if (localStorage.getItem("blogs")) {
            this.blogList.next(JSON.parse(localStorage.getItem("blogs")));
        }
        else {
            localStorage.setItem('blogs', JSON.stringify(this.initialBlogs));
        }
    }
    BlogsService.prototype.createBlog = function () {
    };
    BlogsService.prototype.getBlogs = function () {
        this.initialBlogs = JSON.parse(localStorage.getItem('blogs'));
        var arr = this.blogList.asObservable();
        return arr;
    };
    BlogsService.prototype.saveBlog = function (b) {
        //this.initialBlogs.push(b);
        var blogs = JSON.parse(localStorage.getItem('blogs'));
        blogs.push(b);
        console.log(blogs);
        this.blogList.next(blogs);
        this.initialBlogs = blogs;
        localStorage.setItem('blogs', JSON.stringify(blogs));
    };
    BlogsService.prototype.removeBlog = function (bid) {
        var blogs = JSON.parse(localStorage.getItem('blogs'));
        blogs.splice(blogs.findIndex(function (x) { return x.id === bid; }), 1);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        this.initialBlogs = blogs;
        this.blogList.next(blogs);
    };
    BlogsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogsService);
    return BlogsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\x2y2s\Desktop\problem2\problem2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map