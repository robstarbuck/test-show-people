webpackJsonp([1,4],{

/***/ 290:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 290;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(404);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        _super.apply(this, arguments);
        this.genderOptions = ['', 'Male', 'Female'];
        this.ascend = true;
        this.gender = '';
        this.genderFilter = '';
        this.genderFilterIndex = 0;
        this.peopleSet = []; // TODO typeset peopleSet by class
        this.selectedUser = undefined;
        this.showSearch = true;
        this.sort = 'fullname';
        this.sortName = true;
    }
    AppComponent.prototype.getIcon = function (column) {
        if (this.sort === column) {
            return this.ascend ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
        }
        return '';
    };
    AppComponent.prototype.resetSearch = function (arr) {
        arr.map(function (a) { return ''; });
    };
    AppComponent.prototype.genderToggle = function () {
        ++this.genderFilterIndex;
        // reset if outside of range
        if (this.genderFilterIndex >= this.genderOptions.length) {
            this.genderFilterIndex = 0;
        }
        this.genderFilter = this.genderOptions[this.genderFilterIndex];
    };
    AppComponent.prototype.scrollTop = function () {
        // Offloading to web-api ensures call-stack is complete
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    };
    AppComponent.prototype.setFocus = function (e) {
        // HACK setTimeout is required else the transition will not complete
        setTimeout(function () {
            e.focus();
        }, 200);
    };
    AppComponent.prototype.sortBy = function (column) {
        // Invert ascend when already sorting by column else reset
        if (this.sort === column) {
            this.ascend = !this.ascend;
        }
        else {
            this.ascend = true;
        }
        this.sort = column;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genderFilter = this.genderOptions[this.genderFilterIndex];
        var loadPeople = function (people) {
            _this.peopleSet = people;
        };
        var showError = function (error) {
            // TODO 
            // Include error handling, ordinarily this would be prioritised
        };
        // ng will have built-in for this
        // purely a demonstration of a promise
        var promise = new Promise(function (fulfill, reject) {
            var request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (request.readyState == 4) {
                    try {
                        fulfill(JSON.parse(request.responseText));
                    }
                    catch (error) {
                        reject(error);
                    }
                }
            };
            request.open('GET', 'assets/data/data.json', true);
            request.send(null);
        });
        promise.then(loadPeople, showError);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Component */])({
            selector: 'sp-root',
            template: __webpack_require__(460),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* OnInit */]));
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__people_filter_pipe__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__people_sorter_pipe__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_sticky_kit_ng2_sticky_kit__ = __webpack_require__(399);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__people_filter_pipe__["a" /* PeopleFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_6__people_sorter_pipe__["a" /* PeopleSorterPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_sticky_kit_ng2_sticky_kit__["a" /* StickyModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleFilterPipe = (function () {
    function PeopleFilterPipe() {
    }
    PeopleFilterPipe.prototype.transform = function (people, name, email, gender) {
        var filterArr = [];
        if (people.length === 0) {
            return people;
        }
        name = name.replace(/[^a-z ]/g, '');
        email = email.replace(/[^\w@]/g, '');
        // Filter First Name
        if (name !== '') {
            var namesArr = name.split(/\s/);
            // Filter name
            if (namesArr[0] !== '') {
                filterArr.push({
                    key: 'first_name',
                    regex: new RegExp('^' + namesArr[0] + '.*', 'i')
                });
                if (namesArr.length > 1) {
                    filterArr.push({
                        key: 'last_name',
                        regex: new RegExp('^' + namesArr[namesArr.length - 1] + '.*', 'i')
                    });
                }
            }
        }
        // Filter email
        if (email !== '') {
            var emailArr = email.split(/@/);
            var regexStr = emailArr[0];
            if (emailArr.length > 1) {
                regexStr = regexStr + '[^@]*@' + ("" + emailArr[1]) + '.*';
            }
            filterArr.push({
                key: 'email',
                regex: new RegExp(regexStr, 'i')
            });
        }
        // Filter sex
        if (gender.trim() !== '') {
            filterArr.push({
                key: 'gender',
                regex: new RegExp(gender)
            });
        }
        // if filters have been applied
        if (filterArr.length) {
            // IMPORTANT NOTE filtering of people occurs once
            // rather than iterating people each time we filter
            // people is iterated only once
            // filters are dequeued against each person making for better performance
            people = people.filter(function (person) {
                // `every` ensures we do not continue matching if filter is applied
                return filterArr.every(function (rgxF) {
                    if (rgxF.regex.test(person[rgxF.key])) {
                        return true;
                    }
                    ;
                    return false;
                });
            });
        }
        return people;
    };
    PeopleFilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
            name: 'peopleFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleFilterPipe);
    return PeopleFilterPipe;
}());
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/people-filter.pipe.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleSorterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PeopleSorterPipe = (function () {
    function PeopleSorterPipe() {
        this.customFields = {
            'fullname': function (obj) {
                return (obj.first_name + obj.last_name).toLowerCase();
            }
        };
    }
    PeopleSorterPipe.prototype.transform = function (people, sortby, ascending) {
        var _this = this;
        people.sort(function (a, b) {
            var aVal, bVal;
            // customFields functions mean we can sort by dirived values
            // EG fullname = first_name and last_name concatenated
            if (_this.customFields[sortby]) {
                aVal = _this.customFields[sortby](a);
                bVal = _this.customFields[sortby](b);
            }
            else {
                aVal = a[sortby].toLowerCase();
                bVal = b[sortby].toLowerCase();
            }
            // swapping around variables (ES6 destructuring)
            // reverses the order of the sort
            if (!ascending) {
                _a = [bVal, aVal], aVal = _a[0], bVal = _a[1];
            }
            return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
            var _a;
        });
        return people;
    };
    PeopleSorterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({
            name: 'peopleSorter'
        }), 
        __metadata('design:paramtypes', [])
    ], PeopleSorterPipe);
    return PeopleSorterPipe;
}());
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/people-sorter.pipe.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/robertstarbuck/Sites/angular2/show-people/src/environment.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(190)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!selectedUser\">\n\n\t<div class=\"edge\">\n\t\t<h2>People List</h2>\n\t</div>\n\t<div id=\"people\">\n\t\t<sticky sticky-width=\"100%\">\n\t\t\t<div class=\"edge\">\n\t\t\t\t<header [ngClass]=\"{ 'toggle':!showSearch }\">\n\n\t\t\t\t\t<table role=\"radiogroup\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<button role=\"radio\" class=\"glass- icn\" (click)=\"sortBy('fullname')\">\n\t\t\t\t\t\t\t\t\t\t<span>Name</span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">{{getIcon('fullname')}}</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<button role=\"radio\" class=\"glass- icn\" (click)=\"sortBy('email')\">\n\t\t\t\t\t\t\t\t\t\t<span>Email</span>\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">{{getIcon('email')}}</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<div style=\"height:100%\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"glass- icn\" (click)=\"sortBy('gender')\">\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">wc</i>\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">{{getIcon('gender')}}</i>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<button role=\"radio\" (click)=\"showSearch=! showSearch;setFocus(nameFilter);\" class=\"search icn\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">search</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t</table>\n\n\t\t\t\t\t<table role=\"search\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<input #nameFilter type=\"text\" placeholder=\"Name\" (keyup)=\"0\">\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<input #emailFilter type=\"email\" placeholder=\"Email\" (keyup)=\"0\">\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t\t\t<div style=\"height:100%\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"filter icn tt-center\" (click)=\"genderToggle()\">\n\t\t\t\t\t\t\t\t\t\t\t{{genderFilter[0] || '*' }}\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<!-- TODO Move logic out of template -->\n\t\t\t\t\t\t\t\t\t<button (click)=\"nameFilter.value='' ;emailFilter.value='' ;genderFilter='' ;showSearch=! showSearch; \" class=\"glass- icn\">\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">clear</i>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t</table>\n\n\t\t\t\t</header>\n\t\t\t</div>\n\t\t</sticky>\n\t\t<div class=\"edge\">\n\t\t\t<div id=\"sticky-body\">\n\t\t\t\t<table role=\"table\">\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<!-- TODO split to lines, ide is inlining markup -->\n\n\t\t\t\t\t\t<!-- IMPORTANT NOTE sort should be applied after filters -->\n\t\t\t\t\t\t<!-- pointless to sort something that's going to be filtered -->\n\n\t\t\t\t\t\t<tr *ngFor=\"let person of peopleSet | peopleFilter: nameFilter.value : emailFilter.value : genderFilter | peopleSorter: sort : ascend\" (click)=\"selectedUser = person;scrollTop();\">\n\t\t\t\t\t\t\t<td>{{person.first_name}} {{person.last_name}}</td>\n\t\t\t\t\t\t\t<td>{{person.email}}</td>\n\t\t\t\t\t\t\t<td><span>{{person.gender}}</span></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div *ngIf=\"selectedUser\" class=\"edge cf\">\n\t<div id=\"crumbs\">\n\t\t<button class=\"glass- nav- icn\" (click)=\"selectedUser = undefined\">\n\t\t\t<i class=\"material-icons\">keyboard_arrow_left</i> People List\n\t\t</button>\n\t</div>\n\t<h2> {{selectedUser.first_name}} {{selectedUser.last_name}} <span class=\"ft0\">{{selectedUser.email}}</span></h2>\n\t<hr>\n\t<h5>Friends of {{selectedUser.first_name}}…</h5>\n\t<div id=\"friends\" class=\"flt cf\">\n\t\t<div *ngFor=\"let friend of selectedUser.friends\" [ngStyle]=\"{'background-image': 'url(' + friend.picture + ')'}\">\n\t\t\t<p class=\"_\"><span>{{friend.first_name}} {{friend.last_name}}</span></p>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);


/***/ })

},[473]);
//# sourceMappingURL=main.bundle.js.map