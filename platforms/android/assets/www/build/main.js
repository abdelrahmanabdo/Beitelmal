webpackJsonp([0],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FcmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FcmProvider = /** @class */ (function () {
    function FcmProvider(firebaseNative, afs, platform) {
        this.firebaseNative = firebaseNative;
        this.afs = afs;
        this.platform = platform;
    }
    // Get permission from the user
    FcmProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.platform.is('android')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.platform.is('ios')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.firebaseNative.getToken()];
                    case 3:
                        token = _a.sent();
                        return [4 /*yield*/, this.firebaseNative.grantPermission()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, token];
                }
            });
        });
    };
    // Save the token to firestore
    FcmProvider.prototype.saveTokenToFirestore = function (token) {
        if (!token)
            return;
        var devicesRef = this.afs.collection('devices');
        var docData = {
            token: token,
            userId: 'testUser',
        };
        return devicesRef.doc(token).set(docData);
    };
    // Listen to incoming FCM messages
    FcmProvider.prototype.listenToNotifications = function () {
        return this.firebaseNative.onNotificationOpen();
    };
    FcmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */]])
    ], FcmProvider);
    return FcmProvider;
}());

//# sourceMappingURL=fcm.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.serverURL = 'https://beitelmal.info';
        console.log('Hello ApiProvider Provider');
    }
    ApiProvider.prototype.login = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append('email', email);
            urlSearchParams.append('password', password);
            var body = urlSearchParams.toString();
            console.log(headers);
            _this.http.post(_this.serverURL + '/api/v1/' + 'auth/login', body, { headers: headers }).
                subscribe(function (res) {
                console.log(res);
                resolve(res.json());
            }, function (err) {
                reject('error' + err);
            });
        });
    };
    ApiProvider.prototype.register = function (name, email, phone, country_id, member_type, package_id, password, stock_type) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', '*');
            headers.append('Access-Control-Allow-Headers', '*');
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append('name', name);
            urlSearchParams.append('email', email);
            urlSearchParams.append('phone', phone);
            urlSearchParams.append('country_id', country_id);
            urlSearchParams.append('member_type', member_type);
            urlSearchParams.append('package', '');
            urlSearchParams.append('password', password);
            urlSearchParams.append('stock_type', stock_type);
            var body = urlSearchParams.toString();
            console.log(headers);
            _this.http.post(_this.serverURL + '/api/v1/' + 'auth/register', body, { headers: headers }).
                subscribe(function (res) {
                console.log(res);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.freeRegister = function (name, email, phone, package_id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Access-Control-Allow-Methods', '*');
            headers.append('Access-Control-Allow-Headers', '*');
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var urlSearchParams = new URLSearchParams();
            urlSearchParams.append('name', name);
            urlSearchParams.append('email', email);
            urlSearchParams.append('phone', phone);
            urlSearchParams.append('package', package_id);
            var body = urlSearchParams.toString();
            _this.http.post(_this.serverURL + '/api/v1/' + 'auth/freeregister', body, { headers: headers }).
                subscribe(function (res) {
                console.log(res);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.registerFormData = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/auth/formData').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.about = function () {
        //console.log(this.serverURL+'/api/'+'v1/about');
        return this.http.get(this.serverURL + '/api/' + 'v1/about').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.package = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/package', { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.reports = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/reports', { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.recommendations = function (id, rec_type, stock_type_id, sector_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/recommendations?id=' + id + '&rec_type=' + rec_type + '&stock_type_id=' + stock_type_id + '&sector_id=' + sector_id, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.shortRecommendations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/short', { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.longRecommendations = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long', { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.longRecommendationsMonth = function (year) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long/month?year=' + year, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.longRecommendationsDay = function (month, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Headers', '*');
        return this.http.get(this.serverURL + '/api/' + 'v1/evaluation/long/day?month=' + month + '&id=' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.sectors = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/sectors').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.services = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/services').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.uploads = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        return this.http.get(this.serverURL + '/api/' + 'v1/uploads').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.contactInfo = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/contactInfo').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.terms = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        return this.http.get(this.serverURL + '/api/' + 'v1/terms', { headers: headers }).map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.policy = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/policy').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.respons = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/respons').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.backMoney = function () {
        return this.http.get(this.serverURL + '/api/' + 'v1/backmoney').map(function (res) { return res.json(); });
    };
    ApiProvider.prototype.remainingDays = function (email) {
        return this.http.get(this.serverURL + '/api/' + 'v1/remaining?email=' + email).map(function (res) { return res.json(); });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the RegisterationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterationPage = /** @class */ (function () {
    function RegisterationPage(toastCtrl, apiProvider, navCtrl, navParams, menu) {
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.packages = [];
        this.countries = [];
        this.registerFormData();
        this.package_id = '';
    }
    RegisterationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterationPage');
    };
    RegisterationPage.prototype.openMenu = function () {
        this.menu.open();
    };
    RegisterationPage.prototype.registerFormData = function () {
        var _this = this;
        this.apiProvider.registerFormData().subscribe(function (res) {
            console.log(res);
            if (res['status'] == 1) {
                _this.packages = res['packages'];
                _this.countries = res['countries'];
                console.log(_this.packages);
                console.log(_this.countries);
                // loading.dismiss();
            }
        });
    };
    RegisterationPage.prototype.freeRegister = function (name, email, phone, package_id) {
        var _this = this;
        this.apiProvider.freeRegister(name, email, phone, package_id).then(function (result) {
            console.log(result);
            if (result['STATUS'] == 1) {
                var toast = _this.toastCtrl.create({
                    message: result['MESSAGE'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'لإتمام التسجيل رجاء التأكد من صحة البيانات وعدم التسجيل بها من قبل',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
        });
    };
    RegisterationPage.prototype.register = function (name, email, phone, country_id, member_type, package_id, password, stock_type) {
        var _this = this;
        this.apiProvider.register(name, email, phone, country_id, member_type, package_id, password, stock_type).then(function (result) {
            console.log(result);
            if (result['STATUS'] == 1) {
                var toast = _this.toastCtrl.create({
                    message: result['MESSAGE'],
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    _this.navCtrl.remove(0, index);
                });
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: 'لإتمام التسجيل رجاء التأكد من صحة البيانات وعدم التسجيل بها من قبل',
                    duration: 3000,
                    position: 'bottom'
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
        });
    };
    RegisterationPage.prototype.loginPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    RegisterationPage.prototype.homePage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    RegisterationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registeration',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/registeration/registeration.html"*/'<!--\n  Generated template for the RegisterationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>تسجيل حساب جديد</h1>\n    </div>\n  </section>\n\n  <div class="cd-form is-visible">\n\n    <div class="cd-plan-info">\n      <!-- content will be loaded using jQuery - according to the selected plan -->\n    </div>\n\n    <div class="cd-more-info">\n      <h3>تحتاج مساعدة؟</h3>\n      <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن ال</p>\n    </div>\n\n    <form action="">\n      <fieldset>\n        <!-- <legend>تسجيل حساب جديد</legend> -->\n\n        <div class="half-width">\n          <label for="userName">إسم المستخدم</label>\n          <input type="text" [(ngModel)]=\'name\' [ngModelOptions]="{ standalone :true}" id="userName" name="userName">\n        </div>\n\n        <div class="half-width">\n          <label for="userEmail">البريد الإلكترونى</label>\n          <input type="email" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="userEmail" name="userEmail">\n        </div>\n\n        <div class="half-width">\n          <label for="userPhone">رقم الهاتف</label>\n          <input type="text" [(ngModel)]=\'phone\' [ngModelOptions]="{ standalone :true}" id="userPhone" name="userPhone">\n        </div>\n\n        <!-- <div class="half-width">\n          <label for="packages">إختر الباقة</label>\n          <span class="cd-select">\n            <select name="packages" [(ngModel)]=\'package_id\' [ngModelOptions]="{ standalone :true}" id="packages">\n              <option value="0" disabled selected> أختر الباقة</option>\n              <option *ngFor="let package of packages;" value="{{package.id}}">{{ package.name }} - {{ package.price }}$</option>\n\n            </select>\n          </span>\n        </div> -->\n\n        <!-- <div class="half-width">\n          <label for="shareStatu">اختر نوع الإشتراك</label>\n          <span class="cd-select">\n            <select name="stock_type" [(ngModel)]=\'stock_type\' [ngModelOptions]="{ standalone :true}" id="packages">\n              <option value="0" disabled selected>اختر نوع الإشتراك</option>\n              <option value="0">الأسهم الشرعية فقط</option>\n              <option value="1">كل الأسهم</option>\n            </select>\n          </span>\n        </div> -->\n\n        <!-- <div class="half-width">\n          <label for="country">البلد</label>\n          <span class="cd-select">\n            <select name="country" [(ngModel)]=\'country_id\' [ngModelOptions]="{ standalone :true}" id="country">\n              <option value="0" disabled selected> أختر  البلد</option>\n              <option *ngFor="let country of countries;" value="{{country.id}}">{{ country.name }}</option>\n\n            </select>\n          </span>\n        </div> -->\n\n        <!-- <div class="half-width">\n          <label for="country">نوع العميل</label>\n          <span class="cd-select">\n            <select name="member_type" [(ngModel)]=\'member_type\' [ngModelOptions]="{ standalone :true}" id="country">\n              <option value="0" disabled selected>اختر نوع العميل</option>\n              <option value="r">عميل توصيات</option>\n              <option value="w">ادارة حافظة</option>\n            </select>\n          </span>\n        </div> -->\n\n        <!-- <div class="half-width">\n          <label for="userPassword">كلمة المرور</label>\n          <input type="password" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="userPassword" name="userPassword">\n        </div>\n\n        <div class="half-width">\n          <label for="userPasswordRepeat">تأكيد كلمة المرور</label>\n          <input type="password" [(ngModel)]=\'password_confirm\' [ngModelOptions]="{ standalone :true}" id="userPasswordRepeat" name="userPasswordRepeat">\n        </div> -->\n\n      </fieldset>\n\n      <fieldset>\n        <div>\n          <input (click)="freeRegister(name, email, phone, package_id)" type="submit" value="إنشاء حساب" style="margin-right: 7%;">\n          <input  (click)="homePage()" type="submit" value="رجوع" style="margin-right: 28%;">\n        </div>\n\n      </fieldset>\n    </form>\n\n  </div> <!-- .cd-form -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/registeration/registeration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], RegisterationPage);
    return RegisterationPage;
}());

//# sourceMappingURL=registeration.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_fcm_fcm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(apiProvider, navCtrl, navParams, toastCtrl, fcm, _notificationService, menu) {
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fcm = fcm;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.timer = 0;
        this.loggedIn = "0";
        this.subscriber = "0";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openMenu = function () {
        this.menu.open();
    };
    LoginPage.prototype.homePage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log(this.email + " " + this.password);
        this.apiProvider.login(this.email, this.password).then(function (result) {
            console.log(result);
            if (result['STATUS'] == 1) {
                _this.getRemainingDays();
                _this.userData = result['USER'];
                localStorage.setItem('loggedIn', "1");
                localStorage.setItem('id', JSON.stringify(_this.userData['id']));
                localStorage.setItem('email', JSON.stringify(_this.userData['email']));
                localStorage.setItem('name', JSON.stringify(_this.userData['name']));
                localStorage.setItem('role', JSON.stringify(_this.userData['role']));
                localStorage.setItem('phone', JSON.stringify(_this.userData['phone']));
                localStorage.setItem('package', JSON.stringify(_this.userData['package']));
                localStorage.setItem('subscriber', JSON.stringify(_this.userData['subscriber']));
                _this.fcm.getToken().then(function (token) {
                    console.log('token' + token);
                    _this._notificationService.addUserToken(_this.userData['id'], token).subscribe(function (res) {
                        console.log('result' + JSON.stringify(res));
                    });
                });
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
                    var index = _this.navCtrl.getActive().index;
                    console.log(_this.navCtrl.getActive());
                    _this.navCtrl.remove(0, index);
                });
            }
            else {
                console.log(result);
                _this.tmp = result['ERRORS'];
                if (_this.tmp['email'] && _this.tmp['password']) {
                    _this.tmp = _this.tmp['email'][0] + "\n" + _this.tmp['password'][0];
                }
                else if (_this.tmp['email']) {
                    _this.tmp = _this.tmp['email'][0];
                }
                else if (_this.tmp['password']) {
                    _this.tmp = _this.tmp['password'][0];
                }
                var toast = _this.toastCtrl.create({
                    message: _this.tmp,
                    duration: 3000,
                    position: 'bottom'
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.getRemainingDays = function () {
        var _this = this;
        console.log(JSON.parse(localStorage.getItem('email')));
        this.apiProvider.remainingDays(JSON.parse(localStorage.getItem('email'))).subscribe(function (data) {
            if (data['STATUS'] == 1)
                _this.timer = data['TIMER'];
            console.log(data);
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/login/login.html"*/'\n\n<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>تسجيل الدخول</h1>\n    </div>\n  </section>\n\n  <div class="cd-form is-visible">\n\n    <div class="cd-plan-info">\n      <!-- content will be loaded using jQuery - according to the selected plan -->\n    </div>\n\n\n    <form action="">\n      <fieldset>\n        <!-- <legend>تسجيل حساب جديد</legend> -->\n\n        <div class="half-width">\n          <label for="userEmail">البريد الإلكترونى</label>\n          <input type="email" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="userEmail" name="userEmail">\n        </div>\n\n        <div class="half-width">\n          <label for="userPassword">كلمة المرور</label>\n          <input type="password" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="userPassword" name="userPassword">\n        </div>\n\n\n\n      </fieldset>\n\n      <fieldset>\n        <div>\n          <input (click)="login()" type="submit" value="تسجيل الدخول" style="float: right;">\n          <input (click)="homePage()" type="submit" value="رجوع" style="float: left;">\n        </div>\n      </fieldset>\n    </form>\n\n  </div> <!-- .cd-form -->\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/login/login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_fcm_fcm__["a" /* FcmProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ReportsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportsPage = /** @class */ (function () {
    function ReportsPage(alert, transfer, file, menu, loadingCtrl, apiProvider, navCtrl, navParams, platform, _notificationService) {
        this.alert = alert;
        this.transfer = transfer;
        this.file = file;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this._notificationService = _notificationService;
        this.reports = [];
        this.loggedIn = "0";
        this.subscriber = "0";
        this.getReports();
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
        // console.log(encodeURI("yes no as"));
    }
    ReportsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportsPage');
    };
    ReportsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ReportsPage.prototype.askForDownload = function (file) {
        var _this = this;
        var download = this.alert.create({
            title: 'تحميل الملف',
            message: "هل ترغب في تحميل هذا الملف ؟",
            buttons: [{
                    text: 'نعم',
                    handler: function (data) {
                        loading.present();
                        var fileTransfer = _this.transfer.create();
                        if (_this.platform.is('android')) {
                            _this.file.checkDir(_this.file.dataDirectory, 'Downloads').then(function (response) {
                                console.log('Directory exists' + response);
                            }).catch(function (err) {
                                console.log('Directory doesn\'t exist' + JSON.stringify(err));
                                _this.file.createDir(_this.file.dataDirectory, 'Downloads', false).then(function (response) {
                                    console.log('Directory create' + response);
                                }).catch(function (err) {
                                    console.log('Directory no create' + JSON.stringify(err));
                                });
                            });
                        }
                        fileTransfer.download('http://zplankton.net/beit/public/reports-files/' + encodeURI(file), 'file:///storage/emulated/0/Downloads/' + file).then(function (success) {
                            alert("تم تحميل الملف بنجاح");
                            loading.dismiss();
                        }).catch(function (err) {
                            loading.dismiss();
                            // alert(err.body);
                            // alert(err.target);
                            // alert(err.exception);
                            alert('فشل تحميل الملف');
                        });
                    }
                },
                {
                    text: 'لا',
                    role: 'cancel'
                }
            ],
        });
        download.present();
        var loading = this.loadingCtrl.create({
            showBackdrop: false
        });
    };
    ReportsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ReportsPage.prototype.getReports = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.reports().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.reports = res['REPORTS']['data'];
            }
            loading.dismiss();
        });
    };
    ReportsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reports',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/reports/reports.html"*/'<!--\n  Generated template for the ReportsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>تقارير</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n		<div class="container">\n			<div class="public-recos">\n				<div *ngFor="let report of reports;" class="public-recos-item">\n					<div class="img"><img src="assets/images/3.jpg"></div>\n					<div class="context">\n						<h5>{{ report.description }}</h5>\n						<a href="#">{{ report.file }}</a>\n					</div>\n					<div (click)="askForDownload(report.file)" class="dwnlod"><a href="#"><img src="assets/images/download.svg"></a></div>\n				</div> <!-- //public-recos-item -->\n			</div>\n		</div>\n	</main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a href="#0" class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/reports/reports.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */]])
    ], ReportsPage);
    return ReportsPage;
}());

//# sourceMappingURL=reports.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurRecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__long_recommendations_long_recommendations__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the OurRecommendationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OurRecommendationsPage = /** @class */ (function () {
    function OurRecommendationsPage(loadingCtrl, apiProvider, navCtrl, alertCtrl, navParams, _notificationService, menu) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.recentOurRecommendations = [];
        this.loggedIn = "0";
        this.subscriber = "0";
        this.sectors = [];
        this.rec_type = "";
        this.stock_type_id = "";
        this.sector_id = "";
        // this.ourRecommendations();
        this.getAllSectors();
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = JSON.parse(localStorage.getItem('subscriber'));
        this.package = JSON.parse(localStorage.getItem('package'));
        if (this.subscriber != '1') {
            var alert_1 = this.alertCtrl.create({
                title: 'اشتراكك غير صالح',
                message: 'رجاء التأكد من صلاحية اشتراكك بالباقة المدفوعة',
                buttons: [
                    {
                        text: 'التوصيات المغلقة',
                        handler: function () {
                            console.log('Cancel clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__long_recommendations_long_recommendations__["a" /* LongRecommendationsPage */]).then(function () {
                                var index = _this.navCtrl.getActive().index;
                                _this.navCtrl.remove(0, index);
                            });
                        }
                    },
                    {
                        text: 'تواصل معنا',
                        handler: function () {
                            console.log('Buy clicked');
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__["a" /* ContactUsPage */]).then(function () {
                                var index = _this.navCtrl.getActive().index;
                                _this.navCtrl.remove(0, index);
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.ourRecommendations();
        }
    }
    OurRecommendationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OurRecommendationsPage');
        this.selectOptions = {
            // title: 'Pizza Toppings',
            // subTitle: 'Select your toppings',
            cancelText: 'الغاء',
            okText: 'موافق'
        };
    };
    OurRecommendationsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    OurRecommendationsPage.prototype.getAllSectors = function () {
        var _this = this;
        this.apiProvider.sectors().subscribe(function (res) {
            console.log(res);
            _this.sectors = res['SECTORS'];
        });
    };
    OurRecommendationsPage.prototype.ourRecommendations = function () {
        var _this = this;
        this.recentOurRecommendations = [];
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present(); //recommendations(id, rec_type, stock_type_id, sector_id)
        // if(this.package == '11'){
        //   if(this.rec_type != '0'){
        //     this.rec_type = "";
        //   }
        // }
        console.log(localStorage.getItem('id'), "", "", "");
        this.apiProvider.recommendations(localStorage.getItem('id'), this.rec_type, this.stock_type_id, this.sector_id).subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != undefined && _this.package == '11') {
                _this.recentOurRecommendations = res['RECOMMENDATIONS']['data'];
                // this.recentOurRecommendations = res['RECOMMENDATIONS']['data'].slice(0, 1);
                console.log(_this.recentOurRecommendations);
                loading.dismiss();
            }
            else if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != undefined) {
                _this.recentOurRecommendations = res['RECOMMENDATIONS']['data'];
                loading.dismiss();
            }
            else {
                _this.recentOurRecommendations = [];
                loading.dismiss();
            }
        });
    };
    OurRecommendationsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    OurRecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-our-recommendations',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/our-recommendations/our-recommendations.html"*/'<!--\n  Generated template for the OurRecommendationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>توصياتنا</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <ion-title *ngIf="package != 11">نوع التوصية</ion-title>\n      <ion-list *ngIf="package != 11" radio-group [(ngModel)]="rec_type" (ngModelChange)="ourRecommendations()">\n        <ion-item>\n          <ion-label>مضاربية</ion-label>\n          <ion-radio *ngIf="package == \'11\'" value="0" checked></ion-radio>\n          <ion-radio *ngIf="package != \'11\'" value="0"></ion-radio>\n        </ion-item>\n        <ion-item *ngIf="package != \'11\' && package != \'7\'">\n          <ion-label>قصيرة المدى</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n        <ion-item *ngIf="package != \'11\' && package != \'7\'">\n          <ion-label>استثمارية</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n\n      </ion-list>\n\n      <ion-list *ngIf="package != 11" class="choose-sector">\n        <ion-item>\n          <ion-label>القطاع</ion-label>\n          <ion-select [(ngModel)]="sector_id" [selectOptions]="selectOptions" (ngModelChange)="ourRecommendations()" okText="موافق" cancelText="الغاء">\n            <ion-option value="">كل القطاعات</ion-option>\n            <ion-option *ngFor="let sector of sectors;" value="{{sector.id}}">{{ sector.name }}</ion-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>درجة الشرعية</ion-label>\n          <ion-select [(ngModel)]="stock_type_id" [selectOptions]="selectOptions" (ngModelChange)="ourRecommendations()" okText="موافق" cancelText="الغاء">\n            <ion-option value="">كل درجات الشرعية</ion-option>\n            <ion-option value="0">شرعى قائمة الفوزان</ion-option>\n            <ion-option value="1">شرعى قائمة الراجحى</ion-option>\n            <ion-option value="2">شرعى قائمة البلاد</ion-option>\n            <ion-option value="3">غير شرعى</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <section class="blocks">\n        <div *ngFor="let recommend of recentOurRecommendations; let i = index;" class="block">\n          <ul>\n            <div id="results">\n              <div class="col-rec">\n                <div class="rec_box">\n                  <header class="equal_rec">\n                    <h5 *ngIf="recommend.status == 0">جديد <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 1">رابح <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 2">وقف خسائر <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 3">البيع بقرب سعر الشراء <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 4">معدله <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                  </header>\n\n                  <ul class="box_body">\n                    <li>\n                      <img src="assets/images/business.svg">\n                      <strong>السهم:</strong>\n                      <span>{{ recommend.recommendation_name }}</span></li>\n                    <li>\n                      <img src="assets/images/world.svg">\n                      <strong> السوق : </strong>\n                      <span>{{ recommend.country }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/maintenance.svg">\n                      <strong> درجة الشرعية : </strong>\n                      <span *ngIf="recommend.stock_type_id == \'0\'">شرعى قائمة الفوزان</span>\n                      <span *ngIf="recommend.stock_type_id == \'1\'">شرعى قائمة الراجحى</span>\n                      <span *ngIf="recommend.stock_type_id == \'2\'">شرعى قائمة البلاد</span>\n                      <span *ngIf="recommend.stock_type_id == \'3\'">غير شرعى</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/analytics.svg">\n                      <strong> القطاع : </strong>\n                      <span>{{ recommend.sector }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/payment.svg">\n                      <strong>سعر الشراء:</strong>\n                      <span>{{ recommend.buyPrice }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/report.svg">\n                      <strong>سعر البيع :</strong>\n                      <span>{{ recommend.sellPrice }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/legal.svg">\n                      <strong>سعر وقف الخسارة :</strong>\n                      <span>{{ recommend.stopLoss }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/calendar.svg">\n                      <strong>تاريخ الإنشاء :</strong>\n                      <span>{{ recommend.created2_at }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/time.svg">\n                      <strong> تاريخ اّخر تعديل : </strong>\n                      <span>{{ recommend.updated2_at }}</span>\n                    </li>\n                    <li>\n                      <!-- <strong> معلومات عن التوصية</strong> -->\n                      <span>{{ recommend.description }}</span>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </ul>\n        </div>\n      </section>\n    </div>\n  </main>\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/our-recommendations/our-recommendations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], OurRecommendationsPage);
    return OurRecommendationsPage;
}());

//# sourceMappingURL=our-recommendations.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(apiProvider, navCtrl, navParams, loadingCtrl, _notificationService, menu) {
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.info = {
            'address': '',
            'work_time': '',
            'email': '',
            'mobile': '',
            'phone': ''
        };
        this.loggedIn = "0";
        this.subscriber = "0";
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
        this.contactInfo();
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ContactUsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ContactUsPage.prototype.contactInfo = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.contactInfo().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.info.address = res['CONTACTINFO'][0].address;
                _this.info.email = res['CONTACTINFO'][0].email;
                _this.info.mobile = res['CONTACTINFO'][0].mobile;
                _this.info.phone = res['CONTACTINFO'][0].phone;
                _this.info.work_time = res['CONTACTINFO'][0].work_time;
                loading.dismiss();
            }
        });
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/contact-us/contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>اتصل بنا</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <ul class="contact">\n        <h3>معلومات التواصل</h3>\n        <li>\n          <img src="assets/images/phone-call.svg">\n          <a href="tel:{{ info.mobile }}">{{ info.mobile }}</a>\n        </li>\n        <li>\n          <img src="assets/images/location.svg">\n          <a href="#">{{ info.address }}</a>\n        </li>\n        <li>\n          <img src="assets/images/mail.svg">\n          <a href="mailto:{{ info.email }}">{{ info.email }}</a>\n        </li>\n      </ul>\n\n      <div class="contact-form">\n        <h3>نهتم برأيك أو إستفسارك</h3>\n        <form>\n          <div class="fieldset">\n            <label>الإسم</label>\n            <input name="name" id="name" type="text">\n          </div>\n          <div class="fieldset">\n            <label>البريد الإلكترونى</label>\n            <input name="email" id="email" type="email">\n          </div>\n          <div class="fieldset">\n            <label>رقم الهاتف</label>\n            <input name="phone" id="phone" type="text" placeholder="">\n          </div>\n          <div class="fieldset">\n            <label>الرسالة</label>\n            <textarea name="message" placeholder="نهتم برأيك او مشكلتك"></textarea>\n          </div>\n          <input name="submit" type="submit" id="submit" value="إرسال">\n        </form>\n      </div>\n\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p (click)="login()" class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/contact-us/contact-us.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LongRecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LongRecommendationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LongRecommendationsPage = /** @class */ (function () {
    function LongRecommendationsPage(navCtrl, navParams, apiProvider, _notificationService, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.year = "0";
        this.month = "0";
        this.years = [];
        this.data = {
            "monthName": "",
            "days1": 0,
            "days2": 0,
            "days3": 0,
            "recommendations_lose": 0,
            "average_profit": 0,
            "average_profit_per_unit": 0,
            "win_rate": 0,
            "lose_rate": 0
        };
        this.months = [];
        this.longRecom = [];
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
    }
    LongRecommendationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LongRecommendationsPage');
        this.longRecommendations();
        // this.longRecommendationsDay();
        // this.longRecommendationsMonth();
    };
    LongRecommendationsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    LongRecommendationsPage.prototype.clearData = function () {
        this.longRecommendations();
        this.longRecom = [];
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#result').hide();
        this.data = {
            "monthName": "",
            "days1": 0,
            "days2": 0,
            "days3": 0,
            "recommendations_lose": 0,
            "average_profit": 0,
            "average_profit_per_unit": 0,
            "win_rate": 0,
            "lose_rate": 0
        };
    };
    LongRecommendationsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    LongRecommendationsPage.prototype.longRecommendations = function () {
        var _this = this;
        this.month = "0";
        this.apiProvider.longRecommendations().subscribe(function (res) {
            _this.years = res['DATA'];
            console.log(res);
        });
    };
    LongRecommendationsPage.prototype.longRecommendationsMonth = function ($event) {
        var _this = this;
        console.log($event);
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#selectMonth').prop("disabled", false);
        this.apiProvider.longRecommendationsMonth($event).subscribe(function (res) {
            _this.months = res['MONTHS'];
            console.log(res);
        });
    };
    LongRecommendationsPage.prototype.longRecommendationsDay = function ($event) {
        var _this = this;
        this.longRecom = [];
        console.log($event);
        if ($event.length == 1)
            $event = this.year + "-0" + $event;
        else
            $event = this.year + "-" + $event;
        console.log($event, this.rec_type);
        this.apiProvider.longRecommendationsDay($event, this.rec_type).subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#result').show();
                _this.data.average_profit = res['average_profit'];
                _this.data.days1 = res['days1'];
                _this.data.days2 = res['days2'];
                _this.data.days3 = res['days3'];
                _this.data.monthName = res['monthName'];
                _this.data.recommendations_lose = res['recommendations_lose'];
                _this.data.average_profit_per_unit = Math.round(res['average_profit'] * 100) / 100 * 2;
                _this.longRecom = res['DAYS'];
                console.log(_this.data);
            }
        });
    };
    LongRecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-long-recommendations',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/long-recommendations/long-recommendations.html"*/'<!--\n  Generated template for the LongRecommendationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>معدل الأداء</h1>\n    </div>\n  </section>\n\n\n\n  <main class="main-content">\n    <div class="container">\n\n      <ion-list radio-group [(ngModel)]="rec_type" (ngModelChange)="clearData()">\n        <ion-item>\n          <ion-label>توصيات مضاربية</ion-label>\n          <ion-radio value="0"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>توصيات قصيرة المدى</ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>توصيات استثمارية</ion-label>\n          <ion-radio value="2"></ion-radio>\n        </ion-item>\n      </ion-list>\n\n      <h3>حدد تاريخ البحث</h3>\n      <span class="flat-input flat-select">\n        <select name="year" [(ngModel)]="year" [ngModelOptions]="{ standalone :true}" (ngModelChange)="longRecommendationsMonth($event)" class="valid">\n          <option value="0" disabled selected> العام </option>\n          <option *ngFor="let year of years;" value="{{year}}"> {{ year }} </option>\n        </select>\n      </span>\n\n      <span class="flat-input flat-select">\n        <select id="selectMonth" [(ngModel)]="month" [ngModelOptions]="{ standalone :true}" (ngModelChange)="longRecommendationsDay($event)" name="month" class="valid" disabled="disabled">\n          <option value="0" disabled selected> الشهر </option>\n          <option *ngFor="let month of months; let i = index;" value="{{i+1}}"> {{ month }} </option>\n        </select>\n      </span>\n\n      <div id="result" class="result" style="display: none; margin-bottom: 15px;">\n        <h3> نتائج توصيات شهر {{ data.monthName }}</h3>\n        <ul>\n          <li><span>إجمالي عدد التوصيات: <strong> {{ data.days1 }} </strong> توصية</span></li>\n          <li><span>عدد التوصيات المحققة: <strong>{{ data.days3 }}</strong> توصية</span></li>\n          <li><span>عدد التوصيات ايقاف الخسارة: <strong>{{ data.recommendations_lose }}</strong> توصية</span></li>\n          <li *ngIf="data.average_profit == 0"><span>متوسط ربح التوصية الواحدة: 0</span></li>\n          <li *ngIf="data.average_profit != 0"><span>متوسط ربح التوصية الواحدة: <strong>{{ data.average_profit_per_unit }}</strong> % </span></li>\n          <!-- <li><span>عدد التوصيات المفتوحة: 0 توصية</span></li> -->\n        </ul>\n      </div>\n\n      <section class="blocks">\n        <div *ngFor="let recommend of longRecom; let i = index;" class="block">\n          <div id="results">\n            <div class="col-rec">\n              <div class="rec_box">\n                <ul class="box_body">\n                  <li>\n                    <img src="assets/images/id.svg">\n                    <strong>#:</strong>\n                    <span>{{ i + 1 }}</span>\n                  </li>\n                  <li>\n                    <img src="assets/images/business.svg">\n                    <strong> السهم : </strong>\n                    <span>{{ recommend.recommendation_name }} - {{ recommend.id }}</span>\n                  </li>\n                  <li>\n                    <img src="assets/images/hash.svg">\n                    <strong> كود السهم : </strong>\n                    <span>{{ recommend.code_name }}</span>\n                  </li>\n                  <li>\n                    <img src="assets/images/calendar.svg">\n                    <strong> تاريخ الشراء : </strong>\n                    <span>{{ recommend.created2_at }}</span>\n                  </li>\n                  <li>\n                    <img src="assets/images/payment.svg">\n                    <strong>سعر الشراء:</strong>\n                    <span>{{ recommend.buyPrice }}</span>\n                  </li>\n                  <li>\n                      <img src="assets/images/calendar.svg">\n                      <strong> تاريخ البيع : </strong>\n                      <span>{{ recommend.created2_at }}</span>\n                    </li>\n                  <li>\n                    <img src="assets/images/payment.svg">\n                    <strong>سعر البيع :</strong>\n                    <span *ngIf="recommend.status == 1">{{ recommend.sellPrice }}</span>\n                    <span *ngIf="recommend.status == 2">{{ recommend.stopLoss }}</span>\n                  </li>\n                  <li>\n                    <img src="assets/images/status.svg">\n                    <strong>الحالة :</strong>\n                    <span *ngIf="recommend.status == 1">رابحة</span>\n                    <span *ngIf="recommend.status == 2">وقف خسارة</span>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- <div id="no-more-tables">\n        <table class="col-md-12 table-bordered table-striped table-condensed cf full-tb">\n          <thead class="cf">\n            <tr>\n              <th class="text-center">#</th>\n              <th class="text-center">السهم</th>\n              <th class="text-center">كود السهم</th>\n              <th class="numeric text-center">تاريخ الشراء</th>\n              <th class="numeric text-center">سعر الشراء</th>\n              <th class="numeric text-center">تاريخ البيع</th>\n              <th class="numeric text-center">سعر البيع</th>\n              <th class="text-center">الحالة</th>\n              <th class="numeric text-center"> نسبة الربح / الخسارة</th>\n              <th class="text-center">المزيد</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor="let recommend of longRecom; let i = index;" class="mrgn-b-10">\n              <td data-title="#">\n                {{ i + 1 }}\n              </td>\n              <td data-title="السهم">\n                {{ recommend.recommendation_name }} - {{ recommend.id }}\n              </td>\n              <td data-title="كود السهم">\n                {{ recommend.code_name }}\n              </td>\n              <td data-title="تاريخ الشراء">\n                {{ recommend.created2_at }}\n              </td>\n              <td data-title="سعر الشراء">\n                {{ recommend.buyPrice }}\n              </td>\n              <td data-title="تاريخ البيع">\n                {{ recommend.updated2_at }}\n              </td>\n              <td *ngIf="recommend.status == 1" data-title="سعر البيع">\n                {{ recommend.sellPrice }}\n              </td>\n              <td *ngIf="recommend.status == 2" data-title="سعر البيع">\n                {{ recommend.stopLoss }}\n              </td>\n              <td data-title="الحالة">\n                <span *ngIf="recommend.status == 1"  class="statu win"><i class="fa fa-arrow-up" aria-hidden="true"></i> رابحة</span>\n                <span *ngIf="recommend.status == 2"  class="statu win"><i class="fa fa-arrow-up" aria-hidden="true"></i> وقف خسارة</span>\n              </td>\n              <td data-title="نسبة الربح / الخسارة">\n                <span class="win">+2\n				        %</span>\n              </td>\n              <td data-title="المزيد">\n                <a class="btn btn-default expand">+</a>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n      </div> -->\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p (click)="login()" class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/long-recommendations/long-recommendations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], LongRecommendationsPage);
    return LongRecommendationsPage;
}());

//# sourceMappingURL=long-recommendations.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registeration_registeration__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_reports__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recommendations_recommendations__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__our_recommendations_our_recommendations__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_fcm_fcm__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(app, navCtrl, apiProvider, menu, loadingCtrl, fcm, _notificationService) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.fcm = fcm;
        this._notificationService = _notificationService;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.recentPublicRecommendations = [];
        this.recentReports = [];
        this.recentOurRecommendations = [];
        this.publicRecommendations();
        this.menu.enable(true);
        this.reports();
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = JSON.parse(localStorage.getItem('subscriber'));
        this.package = JSON.parse(localStorage.getItem('package'));
        console.log(this.package);
        this.ourRecommendations();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.openMenu = function () {
        this.menu.open();
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        // this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe((res) => {
        //   console.log(res)
        // });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(HomePage_1).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.publicRecommendations = function () {
        var _this = this;
        this.apiProvider.uploads().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.recentPublicRecommendations = res['UPLOADS'].slice(0, 3);
                console.log(_this.recentPublicRecommendations);
            }
        });
    };
    HomePage.prototype.reports = function () {
        var _this = this;
        this.apiProvider.reports().subscribe(function (res) {
            if (res['STATUS'] == 1) {
                _this.recentReports = res['REPORTS']['data'].slice(0, 3);
                console.log(_this.recentReports);
            }
        });
    };
    HomePage.prototype.ourRecommendations = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        if (this.package == '11') {
            this.apiProvider.recommendations(localStorage.getItem('id'), "", "", "").subscribe(function (res) {
                console.log(res);
                if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != []) {
                    console.log(res);
                    if (res['RECOMMENDATIONS']['data'].slice(0, 1)[0])
                        _this.recentOurRecommendations = res['RECOMMENDATIONS']['data'].slice(0, 3);
                    console.log(_this.recentOurRecommendations);
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                }
            });
        }
        else {
            this.apiProvider.recommendations(localStorage.getItem('id'), 0, "", "").subscribe(function (res) {
                console.log(res);
                if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != []) {
                    console.log(res);
                    if (res['RECOMMENDATIONS']['data'].slice(0, 1)[0])
                        _this.recentOurRecommendations = res['RECOMMENDATIONS']['data'].slice(0, 1);
                    console.log(_this.recentOurRecommendations);
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                }
            });
            this.apiProvider.recommendations(localStorage.getItem('id'), 1, "", "").subscribe(function (res) {
                console.log(res);
                if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != []) {
                    console.log(res);
                    if (res['RECOMMENDATIONS']['data'].slice(0, 1)[0])
                        _this.recentOurRecommendations.push(res['RECOMMENDATIONS']['data'].slice(0, 1)[0]);
                    console.log(_this.recentOurRecommendations);
                }
            });
            this.apiProvider.recommendations(localStorage.getItem('id'), 2, "", "").subscribe(function (res) {
                console.log(res);
                if (res['STATUS'] == 1 && res['RECOMMENDATIONS'] != []) {
                    console.log(res);
                    if (res['RECOMMENDATIONS']['data'].slice(0, 1)[0])
                        _this.recentOurRecommendations.push(res['RECOMMENDATIONS']['data'].slice(0, 1)[0]);
                    console.log(_this.recentOurRecommendations);
                }
            });
        }
    };
    HomePage.prototype.ourRecommendationsPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__our_recommendations_our_recommendations__["a" /* OurRecommendationsPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.loginPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.homePage = function () {
        var _this = this;
        this.navCtrl.push(HomePage_1).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.reportsPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reports_reports__["a" /* ReportsPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.recommendationsPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__recommendations_recommendations__["a" /* RecommendationsPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage.prototype.RegisterationPage = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__registeration_registeration__["a" /* RegisterationPage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            console.log(_this.navCtrl.getActive());
            _this.navCtrl.remove(0, index);
        });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/home/home.html"*/'\n<ion-content>\n\n  <section class="intro">\n    <div class="intro-box">\n      <img src="assets/images/lg-logo.png" alt="">\n      <h1>دليلك الاول و مستشارك الخاص <br> في عالم الاسواق الماليه و التداول.</h1>\n      <p>\n        يقدم موقع بيت المال توصيات البيع والشراء للمستثمر في سوق الأسهم السعودية، من خلال مجموعة متميزة من الخبراء العالميين في هذا المجال، اعتمادا علي رؤية موقع بيت المال وقراءته الاحترافية لمعطيات السوق واتجاهاته وما قد يطرأ عليه من مؤثرات سلبية أو إيجابية\n      </p>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <section class="blocks">\n        <div *ngIf="loggedIn == \'1\' && subscriber == \'1\' && package != \'10\'" class="block">\n          <a href="recommend.html" class="absolut-link"></a>\n          <h2>أحدث التوصيات</h2>\n          <div *ngFor="let recommend of recentOurRecommendations; let i = index;">\n              <div class="" id="results">\n                <div class="rec_box">\n                  <header class="equal_rec">\n                    <h5 *ngIf="recommend.status == 0">جديد <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 1">رابح <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 2">وقف خسائر <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 3">البيع بقرب سعر الشراء <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                    <h5 *ngIf="recommend.status == 4">معدله <i class="fa fa-minus" aria-hidden="true"></i></h5>\n                  </header>\n\n                  <ul class="box_body">\n                    <li>\n                      <img src="assets/images/business.svg">\n                      <strong>السهم:</strong>\n                      <span>{{ recommend.recommendation_name }}</span>\n                    </li>\n                    <li>\n                        <img src="assets/images/world.svg">\n                      <strong> السوق : </strong>\n                      <span>{{ recommend.country }}</span>\n                    </li>\n                    <li>\n                        <img src="assets/images/maintenance.svg">\n                      <strong> درجة الشرعية : </strong>\n                      <span *ngIf="recommend.stock_type_id == \'0\'">شرعى قائمة الفوزان</span>\n                      <span *ngIf="recommend.stock_type_id == \'1\'">شرعى قائمة الراجحى</span>\n                      <span *ngIf="recommend.stock_type_id == \'2\'">شرعى قائمة البلاد</span>\n                      <span *ngIf="recommend.stock_type_id == \'3\'">غير شرعى</span>\n                    </li>\n                    <li>\n                        <img src="assets/images/analytics.svg">\n                      <strong> القطاع : </strong>\n                      <span>{{ recommend.sector }}</span>\n                    </li>\n                    <li>\n                      <img src="assets/images/payment.svg">\n                      <strong>سعر الشراء:</strong>\n                       <span>{{ recommend.buyPrice }}</span>\n                      </li>\n                    <li>\n                        <img src="assets/images/report.svg">\n                      <strong>سعر البيع :</strong>\n                      <span>{{ recommend.sellPrice }}</span>\n                    </li>\n                    <li>\n                        <img src="assets/images/legal.svg">\n                      <strong>سعر وقف الخسارة :</strong>\n                       <span>{{ recommend.stopLoss }}</span>\n                      </li>\n                    <li>\n                        <img src="assets/images/calendar.svg">\n                      <strong>تاريخ الإنشاء :</strong>\n                      <span>{{ recommend.created2_at }}</span>\n                    </li>\n                    <li>\n                        <img src="assets/images/time.svg">\n                      <strong> تاريخ اّخر تعديل : </strong>\n                      <span>{{ recommend.updated2_at }}</span>\n                    </li>\n                    <li>\n                        <span>{{ recommend.description }}</span>\n                      </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          <a (click)="ourRecommendationsPage()" class="read-more">إقرأ المزيد</a>\n        </div>\n        <!-- //block -->\n        <div *ngIf="loggedIn == \'1\'" class="block recom">\n          <a href="recommend.html" class="absolut-link"></a>\n          <h2>أحدث  التقارير</h2>\n          <ul>\n            <li *ngFor="let report of recentReports; let i = index;">{{ report.description }}</li>\n          </ul>\n          <a (click)="reportsPage()" class="read-more">إقرأ المزيد</a>\n        </div>\n        <!-- //block -->\n        <div class="block recom">\n          <a href="recommend.html" class="absolut-link"></a>\n          <h2>تحليلات فنية</h2>\n            <ul>\n            <li *ngFor="let recommend of recentPublicRecommendations; let i = index;">\n              {{ recommend.description }}\n            </li>\n          </ul>\n          <a (click)="recommendationsPage()" class="read-more">إقرأ المزيد</a>\n        </div>\n      </section>\n      <div *ngIf="loggedIn != \'1\'" class="subscribe">\n        <a (click)="loginPage()">تسجيل الدخول لحسابك</a>\n        <h3>أو</h3>\n        <a (click)="RegisterationPage()">إشترك مجانا الأن\n        </a>\n      </div>\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p (click)="login()" class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_8__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_fcm_fcm__["a" /* FcmProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_fcm_fcm__["a" /* FcmProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_notifications_notifications__["a" /* NotificationsProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 239:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 239;

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NotificationsProvider = /** @class */ (function () {
    function NotificationsProvider(http) {
        var _this = this;
        this.http = http;
        //   serverURL = 'http://beitelmal.com/api/v1/notification/'
        this.serverURL = 'https://beitelmal.info/api/v1/notification/';
        this.addUserToken = function (user_id, device_id) {
            return _this.http.post(_this.serverURL + "set", { 'user_id': user_id, 'device_id': device_id });
        };
        this.getUserToken = function (user_id) {
            return _this.http.get(_this.serverURL + "get?user_id=" + user_id);
        };
        this.deleteUserToken = function (user_id) {
            return _this.http.delete(_this.serverURL + "delete?user_id=" + user_id);
        };
    }
    NotificationsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], NotificationsProvider);
    return NotificationsProvider;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 282:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 282;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the RecommendationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecommendationsPage = /** @class */ (function () {
    function RecommendationsPage(alert, transfer, file, navCtrl, navParams, apiProvider, menu, loadingCtrl, _notificationService, platform) {
        this.alert = alert;
        this.transfer = transfer;
        this.file = file;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this._notificationService = _notificationService;
        this.platform = platform;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.recentPublicRecommendations = [];
        this.publicRecommendations();
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
    }
    RecommendationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecommendationsPage');
    };
    RecommendationsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    RecommendationsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    RecommendationsPage.prototype.publicRecommendations = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.uploads().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.recentPublicRecommendations = res['UPLOADS'];
                console.log(_this.recentPublicRecommendations);
                loading.dismiss();
            }
        });
    };
    RecommendationsPage.prototype.askForDownload = function (file) {
        var _this = this;
        var download = this.alert.create({
            title: 'تحميل الملف',
            message: "هل ترغب في تحميل هذا الملف ؟",
            buttons: [{
                    text: 'نعم',
                    handler: function (data) {
                        loading.present();
                        var fileTransfer = _this.transfer.create();
                        if (_this.platform.is('android')) {
                            _this.file.checkDir(_this.file.dataDirectory, 'Downloads').then(function (response) {
                                console.log('Directory exists' + response);
                            }).catch(function (err) {
                                console.log('Directory doesn\'t exist' + JSON.stringify(err));
                                _this.file.createDir(_this.file.dataDirectory, 'Downloads', false).then(function (response) {
                                    console.log('Directory create' + response);
                                }).catch(function (err) {
                                    console.log('Directory no create' + JSON.stringify(err));
                                });
                            });
                        }
                        fileTransfer.download('http://zplankton.net/beit/public/uploads-files/' + encodeURI(file), 'file:///storage/emulated/0/Downloads/' + file).then(function (success) {
                            alert("تم تحميل الملف بنجاح");
                            loading.dismiss();
                        }).catch(function (err) {
                            loading.dismiss();
                            // alert(err);
                            alert('فشل تحميل الملف');
                        });
                    }
                },
                {
                    text: 'لا',
                    role: 'cancel'
                }
            ],
        });
        download.present();
        var loading = this.loadingCtrl.create({
            showBackdrop: false
        });
    };
    RecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recommendations',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/recommendations/recommendations.html"*/'<!--\n  Generated template for the RecommendationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n		<div class="intro-box">\n			<h1>تحليلات فنية</h1>\n		</div>\n	</section>\n\n	<!-- <main class="main-content">\n		<div class="container">\n			<section class="blocks" >\n				<div *ngFor="let recommend of recentPublicRecommendations;" class="block recommend">\n					<ul>\n						<li><span>{{ recommend.description }}</span></li>\n            <li><h4>{{ recommend.file }}</h4></li>\n					</ul>\n				</div>\n			</section>\n		</div>\n	</main> -->\n\n  <main class="main-content">\n    <div class="container">\n      <div class="public-recos">\n        <div *ngFor="let recommend of recentPublicRecommendations;" class="public-recos-item">\n          <div class="img"><img src="assets/images/3.jpg"></div>\n          <div class="context">\n            <h5>{{  recommend.description }}</h5>\n            <a href="#">{{ recommend.file }}</a>\n          </div>\n          <div (click)="askForDownload(recommend.file)" class="dwnlod"><a href="#"><img src="assets/images/download.svg"></a></div>\n        </div> <!-- //public-recos-item -->\n      </div>\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p (click)="login()" class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/recommendations/recommendations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], RecommendationsPage);
    return RecommendationsPage;
}());

//# sourceMappingURL=recommendations.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(loadingCtrl, apiProvider, navCtrl, navParams, menu, _notificationService) {
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this._notificationService = _notificationService;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AboutUsPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        this.apiProvider.about().subscribe(function (data) {
            console.log(data);
            _this.aboutText = data['ABOUT'][0].description;
            console.log(data);
            loading.dismiss();
        });
    };
    AboutUsPage.prototype.openMenu = function () {
        this.getRemainingDays();
        this.menu.open();
    };
    AboutUsPage.prototype.getRemainingDays = function () {
        this.apiProvider.remainingDays(JSON.parse(localStorage.getItem('email'))).subscribe(function (data) {
            if (data['STATUS'] == 1)
                // timer = data['TIMER'];
                console.log(data);
        });
    };
    AboutUsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/about-us/about-us.html"*/'\n<ion-content>\n\n	<section class="intro-pages">\n		<div class="intro-box">\n			<h1>عن بيت المال</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n			<p class="jstfy" innerHTML="{{ aboutText }}">\n			</p>\n\n		</div>\n	</main>\n\n	<div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'email\' [ngModelOptions]="{ standalone :true}" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" [(ngModel)]=\'password\' [ngModelOptions]="{ standalone :true}" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p (click)="login()" class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n	<!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/about-us/about-us.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(apiProvider, navCtrl, navParams, loadingCtrl, _notificationService, menu) {
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.services = [];
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
        this.getServices();
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ServicesPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ServicesPage.prototype.getServices = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.services().subscribe(function (res) {
            console.log(res);
            _this.services = res['SERVICES'];
            loading.dismiss();
        });
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/services/services.html"*/'\n\n<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>خدماتنا</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <div class="col-md-12">\n        <div class="missions">\n          <h3>تتلخص بعض مهام الشركه فيما يلي</h3>\n          <div class="services">\n            <div class="service">\n              <div *ngFor="let service of services;" class="context-serv">\n                <div class="serv-img">\n                  image\n                </div>\n                <h5>{{ service.service }}</h5>\n                <span>{{ service.description }}</span>\n              </div>\n            </div>\n          </div>\n          \n          <!-- <ul>\n            <li>تقديم توصيات وخدمات مالية احترافية لسوق الأسهم .</li>\n            <li>دراسة سوق الأسهم المالية بصورة فنية متخصصة .</li>\n            <li>تأمين استثمارات ومدخرات عملائها والحفاظ عليها في نموٍ دائم .</li>\n            <li>الاحترافية المهنية والتقنية في تناول خدمة العملاء .</li>\n            <li>ادارة المحافظ بأفضل الاساليب الفنيه و التي تضمن افضل نسب ربح مقارنة بأداء السوق .</li>\n          </ul> -->\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n            </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n            </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n            </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a href="#0" class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/services/services.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = /** @class */ (function () {
    function TermsPage(navCtrl, navParams, menu, loadingCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.terms = [];
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TermsPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        this.apiProvider.terms().subscribe(function (data) {
            if (data['STATUS'] == 1)
                _this.terms = data['TERMS'];
            console.log(data);
            loading.dismiss();
        });
    };
    TermsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    TermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/terms/terms.html"*/'<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n		<div class="intro-box">\n			<h1>الشروط والأحكام</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n      <div *ngFor="let term of terms;">\n        <div [innerHTML]="term.description"></div>\n      </div>\n		</div>\n	</main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/terms/terms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TermsPage);
    return TermsPage;
}());

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PolicyPage = /** @class */ (function () {
    function PolicyPage(navCtrl, navParams, apiProvider, menu, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.policies = [];
    }
    PolicyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad PolicyPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        this.apiProvider.policy().subscribe(function (data) {
            if (data['STATUS'] == 1)
                _this.policies = data['POLICY'];
            console.log(data);
            loading.dismiss();
        });
    };
    PolicyPage.prototype.openMenu = function () {
        this.menu.open();
    };
    PolicyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-policy',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/policy/policy.html"*/'<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content>\n\n  <section class="intro-pages">\n		<div class="intro-box">\n			<h1>سياسية الموقع</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n      <div *ngFor="let policy of policies;">\n        <div [innerHTML]="policy.description"></div>\n      </div>\n		</div>\n	</main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/policy/policy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], PolicyPage);
    return PolicyPage;
}());

//# sourceMappingURL=policy.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackMoneyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BackMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackMoneyPage = /** @class */ (function () {
    function BackMoneyPage(loadingCtrl, apiProvider, navCtrl, navParams, menu, _notificationService) {
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this._notificationService = _notificationService;
        this.backMoneyText = "";
        this.loggedIn = "0";
        this.subscriber = "0";
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
    }
    BackMoneyPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BackMoneyPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        this.apiProvider.backMoney().subscribe(function (data) {
            console.log(data);
            _this.backMoneyText = data['BACKMONEY'][0].description;
            console.log(data);
            loading.dismiss();
        });
    };
    BackMoneyPage.prototype.openMenu = function () {
        this.getRemainingDays();
        this.menu.open();
    };
    BackMoneyPage.prototype.getRemainingDays = function () {
        this.apiProvider.remainingDays(JSON.parse(localStorage.getItem('email'))).subscribe(function (data) {
            if (data['STATUS'] == 1)
                // timer = data['TIMER'];
                console.log(data);
        });
    };
    BackMoneyPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    BackMoneyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-back-money',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/back-money/back-money.html"*/'\n<ion-content>\n\n	<section class="intro-pages">\n		<div class="intro-box">\n			<h1>سياسية رد الأموال</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n			<p class="jstfy" innerHTML="{{ backMoneyText }}">\n			</p>\n\n		</div>\n	</main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/back-money/back-money.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]])
    ], BackMoneyPage);
    return BackMoneyPage;
}());

//# sourceMappingURL=back-money.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ResponsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResponsPage = /** @class */ (function () {
    function ResponsPage(navCtrl, navParams, menu, loadingCtrl, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.respons = [];
    }
    ResponsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ResponsPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        this.apiProvider.respons().subscribe(function (data) {
            if (data['STATUS'] == 1)
                _this.respons = data['RESPONS'];
            console.log(data);
            loading.dismiss();
        });
    };
    ResponsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ResponsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-respons',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/respons/respons.html"*/'<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n		<div class="intro-box">\n			<h1>إخلاء المسؤلية</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n      <div *ngFor="let respon of respons;">\n        <div [innerHTML]="respon.description"></div>\n      </div>\n		</div>\n	</main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/respons/respons.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], ResponsPage);
    return ResponsPage;
}());

//# sourceMappingURL=respons.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionsPage = /** @class */ (function () {
    function TermsAndConditionsPage(navCtrl, navParams, menu, loadingCtrl, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.apiProvider = apiProvider;
        this.terms = [];
        this.acceptanceCheckbox = false;
        // Go to home page after accept terms
        this.goToHomePage = function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        };
    }
    TermsAndConditionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad TermsPage');
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        loading.present();
        console.log('before');
        this.apiProvider.terms().subscribe(function (data) {
            console.log('in api');
            console.log('data', data);
            if (data['STATUS'] == 1)
                _this.terms = data['TERMS'];
            console.log(data);
            loading.dismiss();
        });
    };
    TermsAndConditionsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-terms-and-conditions',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/terms-and-conditions/terms-and-conditions.html"*/'<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n\n  <section class="intro-pages">\n		<div class="intro-box">\n			<h1>الشروط والأحكام</h1>\n		</div>\n	</section>\n\n	<main class="main-content">\n		<div class="container">\n      <div *ngFor="let term of terms;">\n        <div [innerHTML]="term.description"></div>\n      </div>\n    </div>\n    <ion-item class="acceptTerms">\n      <ion-label>أوافق علي الشروط والأحكام</ion-label>\n      <ion-checkbox color="dark" [(ngModel)]="acceptanceCheckbox"></ion-checkbox>\n    </ion-item>\n    <div class="acceptTermsButton">\n      <button ion-button large full  color="dark"  class="text-primary font-weight-bold text-capitalize" (click)="goToHomePage()" [disabled]="!acceptanceCheckbox">التالي</button>\n    </div>\n	</main>\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/terms-and-conditions/terms-and-conditions.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=terms-and-conditions.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(479);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_packages_packages__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_services_services__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_long_recommendations_long_recommendations__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_short_recommendations_short_recommendations__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_our_recommendations_our_recommendations__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_recommendations_recommendations__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reports_reports__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_registeration_registeration__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_policy_policy__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_back_money_back_money__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_respons_respons__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_firebase__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_fcm_fcm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser_ngx__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var firebase = {
    apiKey: "AIzaSyA3c35y6ub6yinAtudtzj1jLgWVUTCKqcE",
    authDomain: "beitelmal-9a894.firebaseapp.com",
    databaseURL: "https://beitelmal-9a894.firebaseio.com",
    projectId: "beitelmal-9a894",
    storageBucket: "",
    messagingSenderId: "763611652195"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_packages_packages__["a" /* PackagesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_long_recommendations_long_recommendations__["a" /* LongRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_recommendations_recommendations__["a" /* RecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_registeration_registeration__["a" /* RegisterationPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_respons_respons__["a" /* ResponsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_policy_policy__["a" /* PolicyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_back_money_back_money__["a" /* BackMoneyPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_short_recommendations_short_recommendations__["a" /* ShortRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_our_recommendations_our_recommendations__["a" /* OurRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2__["AngularFireModule"].initializeApp(firebase),
                __WEBPACK_IMPORTED_MODULE_31_angularfire2_firestore__["AngularFirestoreModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_packages_packages__["a" /* PackagesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_services_services__["a" /* ServicesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_long_recommendations_long_recommendations__["a" /* LongRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_recommendations_recommendations__["a" /* RecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_reports_reports__["a" /* ReportsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_respons_respons__["a" /* ResponsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_terms_terms__["a" /* TermsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_policy_policy__["a" /* PolicyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_back_money_back_money__["a" /* BackMoneyPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_registeration_registeration__["a" /* RegisterationPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_short_recommendations_short_recommendations__["a" /* ShortRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_our_recommendations_our_recommendations__["a" /* OurRecommendationsPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_push__["a" /* Push */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_notifications_notifications__["a" /* NotificationsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_firebase__["a" /* Firebase */],
                __WEBPACK_IMPORTED_MODULE_32__providers_fcm_fcm__["a" /* FcmProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_services__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_policy_policy__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_back_money_back_money__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_respons_respons__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_long_recommendations_long_recommendations__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_our_recommendations_our_recommendations__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_notifications_notifications__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_fcm_fcm__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_terms_and_conditions_terms_and_conditions__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser_ngx__ = __webpack_require__(355);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};























var MyApp = /** @class */ (function () {
    function MyApp(http, platform, iab, apiProvider, menu, _notificationService, statusBar, splashScreen, push, alertCtrl, fcm, toastCtrl) {
        var _this = this;
        this.http = http;
        this.iab = iab;
        this.apiProvider = apiProvider;
        this.menu = menu;
        this._notificationService = _notificationService;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.fcm = fcm;
        this.toastCtrl = toastCtrl;
        this.rootPage = localStorage.getItem('firstTime') == 'true' ? __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] : __WEBPACK_IMPORTED_MODULE_20__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */];
        this.loggedIn = "0";
        this.name = "";
        this.counter = 0;
        this.timer = 0;
        this.shownGroup = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.loggedIn = localStorage.getItem('loggedIn');
            _this.name = localStorage.getItem('name');
            statusBar.styleDefault();
            splashScreen.hide();
            _this.getRemainingDays();
            platform.registerBackButtonAction(function () {
                if (_this.counter == 0) {
                    _this.counter++;
                    _this.presentToast();
                    setTimeout(function () { _this.counter = 0; }, 3000);
                }
                else {
                    // console.log("exitapp");
                    platform.exitApp();
                }
            }, 0);
        });
        this.pages = [
            { title: 'الرئيسية', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], login: false },
            // { title: 'عن بيت المال', component: null, login: false },
            { title: 'الخدمات', component: __WEBPACK_IMPORTED_MODULE_9__pages_services_services__["a" /* ServicesPage */], login: false },
            { title: 'توصياتنا', component: __WEBPACK_IMPORTED_MODULE_15__pages_our_recommendations_our_recommendations__["a" /* OurRecommendationsPage */], login: true },
            { title: 'تقارير', component: __WEBPACK_IMPORTED_MODULE_16__pages_reports_reports__["a" /* ReportsPage */], login: true },
            { title: 'معدل الأداء', component: __WEBPACK_IMPORTED_MODULE_14__pages_long_recommendations_long_recommendations__["a" /* LongRecommendationsPage */], login: false },
            // { title: 'توصيات قصيرة المدى', component: ShortRecommendationsPage, login: true },
            // { title: 'توصيات استثمارية', component: RecommendationsPage, login: false },
            { title: 'اتصل بنا', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__["a" /* ContactUsPage */], login: false },
        ];
        this.subPages = [
            { title: 'من نحن', component: __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */], login: false },
            { title: 'الشروط والأحكام', component: __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__["a" /* TermsPage */], login: false },
            { title: 'سياسة الموقع', component: __WEBPACK_IMPORTED_MODULE_11__pages_policy_policy__["a" /* PolicyPage */], login: false },
            { title: 'إخلاء المسؤلية', component: __WEBPACK_IMPORTED_MODULE_13__pages_respons_respons__["a" /* ResponsPage */], login: false },
            { title: 'سياسة رد الأموال', component: __WEBPACK_IMPORTED_MODULE_12__pages_back_money_back_money__["a" /* BackMoneyPage */], login: false },
        ];
    }
    MyApp.prototype.getLoggedIn = function () {
        return localStorage.getItem('loggedIn');
    };
    MyApp.prototype.getPackage = function () {
        return JSON.parse(localStorage.getItem('package'));
    };
    MyApp.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    MyApp.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    MyApp.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: "اضغط مرة أخري للخروج",
            duration: 3000,
            position: "middle"
        });
        toast.present();
    };
    MyApp.prototype.openPage = function (page) {
        if (page != null) {
            if (page.title == "تسجيل الخروج") {
                this.logout();
            }
            if (page.title == "توصياتنا") {
            }
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.openMenu = function () {
        this.menu.open();
    };
    MyApp.prototype.openBrowser = function () {
        var name = this.loggedIn == '1' ? this.name : "";
        var browser = this.iab.create('https://beitelmal.info/packages/payment?username=' + name);
        browser.on('exit').subscribe(function () {
            console.log('browser closed');
        }, function (err) {
            console.error(err);
        });
        browser.close();
    };
    MyApp.prototype.ngOnInit = function () {
        if (!localStorage.getItem('firstTime'))
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
        else
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_20__pages_terms_and_conditions_terms_and_conditions__["a" /* TermsAndConditionsPage */]);
        localStorage.setItem('firstTime', "true");
        localStorage.setItem('loggedIn', "0");
    };
    MyApp.prototype.logout = function () {
        // this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe((res) => {
        //   console.log(res)
        // });
        this.timer = 0;
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.getRemainingDays = function () {
        var _this = this;
        this.apiProvider.remainingDays(JSON.parse(localStorage.getItem('email'))).subscribe(function (data) {
            console.info('data remainng ', data);
            if (data['STATUS'] == 1)
                _this.timer = data['TIMER'];
            console.log(data);
        });
    };
    // initPushNotification() {
    //   // to check if we have permission
    //   this.push.hasPermission()
    //     .then((res: any) => {
    //       if (res.isEnabled) {
    //         //alert('We have permission to send push notifications');
    //       } else {
    //         //  alert('We don\'t have permission to send push notifications');
    //       }
    //     });
    //   // to initialize push notifications
    //   const options: PushOptions = {
    //     android: {
    //       senderID: '452821725792',
    //       sound: true,
    //       vibrate: true
    //     },
    //     ios: {
    //       alert: 'true',
    //       badge: true,
    //       sound: 'true'
    //     },
    //     windows: {}
    //   };
    //   const pushObject: PushObject = this.push.init(options);
    //   pushObject.on('notification').subscribe((notification: any) => {
    //     //alert('Received a notification: ' + notification);
    //     //Notification Display Section
    //     let confirmAlert = this.alertCtrl.create({
    //       title: 'New Notification',
    //       message: JSON.stringify(notification),
    //       buttons: [{
    //         text: 'Ignore',
    //         role: 'cancel'
    //       }, {
    //         text: 'View',
    //         handler: () => {
    //           //TODO: Your logic here
    //           //self.nav.push(DetailsPage, {message: data.message});
    //           //alert("hi");
    //         }
    //       }]
    //     });
    //     confirmAlert.present();
    //     //
    //   });
    //   pushObject.on('registration').subscribe((registration: any) => {
    //     console.log('Device registered', registration);
    //     //alert(JSON.stringify(registration));
    //     this.saveDeviceToken(registration.registrationId);
    //   });
    //   pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
    // }
    MyApp.prototype.saveDeviceToken = function (t) {
        this.http.get('https://beitelmal.info/api/v1/auth/saveToken?id=' + t)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
        }, function (err) {
            //alert("Oops!");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/app/app.html"*/'<ion-menu side="right" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n\n      <!-- <ion-title *ngIf="timer != 0" style="text-align:center">باقي {{ timer }} يوم علي تجديد الباقة</ion-title> -->\n      <ion-title *ngIf="timer == 0" style="text-align:center">بيت المال</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n      <div class="" style="min-height:17px;background-size: cover;">\n        </div>\n        <div class="menu_items">\n            <div class="container">\n               <ion-list class="m-b-0">\n                 <div *ngFor="let p of pages">\n                   <button menuClose ion-item  class="menu_items" *ngIf="p.login == false || (getLoggedIn() == \'1\' && p.login == true) && (getPackage() != \'10\')"  (click)="openPage(p)">\n                    <span>{{ p.title }}</span>\n                 </button>\n                </div>\n              </ion-list>\n\n              <ion-list style="width: 100%;">\n                <ion-item text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n                  <ion-row>\n                    <ion-col col-11>عن بيت المال</ion-col>\n                    <!-- <ion-col col-1 *ngIf="sublevel"></ion-col> -->\n                  </ion-row>\n                  <ion-row *ngIf="isGroupShown(i)">\n                    <ion-list>\n                      <div *ngFor="let p of subPages">\n                        <button menuClose ion-item class="menu_items"  (click)="openPage(p)">\n                          <span>{{p.title}}</span>\n                        </button>\n                      </div>\n                    </ion-list>\n                  </ion-row>\n                </ion-item>\n                <div class="logout-btn">\n                  <button menuClose ion-item  class="menu_items" *ngIf="getLoggedIn() == \'1\'" (click)="logout()">\n                   <span>تسجيل الخروج</span>\n                </button>\n               </div>\n              </ion-list>\n              <img style="width: 120px; margin : 0px 10px;" (click)="openBrowser()" src="assets/images/pay-btn.png" />\n            </div>\n          </div>\n  </ion-content>\n</ion-menu>\n\n<header class="header">\n  <a (click)="openMenu()" class="primary-nav-trigger">\n      <span class="menu-icon"></span>\n    </a>\n  <div class="logo"><a><img src="assets/images/logo.png" alt="Logo"></a></div>\n  <div class="remaining">\n    <span class="sand-watch" *ngIf="timer != 0"> <time>{{ timer }}</time> <img src="assets/images/sand-watch.svg" /></span>\n    <!-- <ion-title *ngIf="timer == 0" style="text-align:center"></ion-title> -->\n  </div>\n</header>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_17__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_18__providers_fcm_fcm__["a" /* FcmProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_19__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_17__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_18__providers_fcm_fcm__["a" /* FcmProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registeration_registeration__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the PackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PackagesPage = /** @class */ (function () {
    function PackagesPage(apiProvider, navCtrl, navParams, loadingCtrl, _notificationService, menu) {
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.packages = [];
        this.loggedIn = "0";
        this.subscriber = "0";
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
        console.log(this.loggedIn);
        this.getPackages();
    }
    PackagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PackagesPage');
    };
    PackagesPage.prototype.openMenu = function () {
        this.menu.open();
    };
    PackagesPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    PackagesPage.prototype.getPackages = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.package().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.packages = res['PACKAGES'];
                loading.dismiss();
            }
            else {
                loading.dismiss();
            }
        });
    };
    PackagesPage.prototype.registerationPage = function (package_id) {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__registeration_registeration__["a" /* RegisterationPage */], {
            package: package_id
        }).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    PackagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-packages',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/packages/packages.html"*/'<ion-content>\n\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>الباقات</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <ul *ngFor="let package of packages;" class="cd-pricing">\n        <li>\n          <header class="cd-pricing-header">\n            <h2>{{ package.name }}</h2>\n          </header> <!-- .cd-pricing-header -->\n          <div class="cd-pricing-features">\n            <div class="cd-price">\n              <span><small>SAR</small> {{ package.price }}</span>\n            </div>\n            <ul>\n              <li><em>{{ package.description }}</em></li>\n            </ul>\n          </div> <!-- .cd-pricing-features -->\n          <footer *ngIf="loggedIn == \'0\'" class="cd-pricing-footer">\n            <a (click)="registerationPage(package.id)">تسجيل حساب</a>\n          </footer> <!-- .cd-pricing-footer -->\n        </li>\n\n      </ul> <!-- .cd-pricing -->\n\n      <div class="cd-form">\n\n        <div class="cd-plan-info">\n          <!-- content will be loaded using jQuery - according to the selected plan -->\n        </div>\n\n        <div class="cd-more-info">\n          <h3>تحتاج مساعدة؟</h3>\n          <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن ال</p>\n        </div>\n\n\n        <a href="#0" class="cd-close"></a>\n      </div> <!-- .cd-form -->\n      <div class="cd-overlay"></div> <!-- shadow layer -->\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n            </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n            </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n            </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a href="#0" class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/packages/packages.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], PackagesPage);
    return PackagesPage;
}());

//# sourceMappingURL=packages.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShortRecommendationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ShortRecommendationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShortRecommendationsPage = /** @class */ (function () {
    function ShortRecommendationsPage(apiProvider, navCtrl, navParams, loadingCtrl, _notificationService, menu) {
        this.apiProvider = apiProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this._notificationService = _notificationService;
        this.menu = menu;
        this.loggedIn = "0";
        this.subscriber = "0";
        this.recommendations = [];
        this.results = {
            'recommendations_all': '',
            'recommendations_win': '',
            'recommendations_lose': '',
            'average_profit': '',
            'recommendations_open': ''
        };
        this.loggedIn = localStorage.getItem('loggedIn');
        this.subscriber = localStorage.getItem('subscriber');
        this.getShortRecommendations();
    }
    ShortRecommendationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShortRecommendationsPage');
    };
    ShortRecommendationsPage.prototype.openMenu = function () {
        this.menu.open();
    };
    ShortRecommendationsPage.prototype.logout = function () {
        var _this = this;
        this._notificationService.deleteUserToken(localStorage.getItem('id')).subscribe(function (res) {
            console.log(res);
        });
        localStorage.clear();
        localStorage.setItem('loggedIn', '0');
        localStorage.setItem('subscriber', '0');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]).then(function () {
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
        });
    };
    ShortRecommendationsPage.prototype.getShortRecommendations = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles"
        });
        loading.present();
        this.apiProvider.shortRecommendations().subscribe(function (res) {
            console.log(res);
            if (res['STATUS'] == 1) {
                _this.recommendations = res['DATA']['recommendations'];
                _this.results.average_profit = res['DATA'].average_profit;
                _this.results.recommendations_all = res['DATA'].recommendations_all;
                _this.results.recommendations_win = res['DATA'].recommendations_win;
                _this.results.recommendations_lose = res['DATA'].recommendations_lose;
                _this.results.recommendations_open = res['DATA'].recommendations_open;
                loading.dismiss();
            }
        });
    };
    ShortRecommendationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-short-recommendations',template:/*ion-inline-start:"/Users/macbook/Desktop/beitelmal-R2/src/pages/short-recommendations/short-recommendations.html"*/'<!--\n  Generated template for the ShortRecommendationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <section class="intro-pages">\n    <div class="intro-box">\n      <h1>توصيات قصيرة المدى</h1>\n    </div>\n  </section>\n\n  <main class="main-content">\n    <div class="container">\n      <div class="col-sm-6 block">\n        <div class="result">\n          <h3>نتائج توصيات شهر May</h3>\n          <ul>\n            <li><span>إجمالي عدد التوصيات : </span>{{ results.recommendations_all }}</li>\n            <li><span>عدد التوصيات المحققة : </span>{{ results.recommendations_win }}</li>\n            <li><span>عدد التوصيات ايقاف الخسارة : </span>{{ results.recommendations_lose }}</li>\n            <li><span>متوسط ربح التوصية الواحدة : </span>{{ results.average_profit }}</li>\n            <li><span>عدد التوصيات المفتوحة : </span>{{ results.recommendations_open }}</li>\n          </ul>\n        </div>\n      </div>\n      <div *ngFor="let recommend of recommendations; let i = index;" id="no-more-tables">\n        <table class="col-md-12 table-bordered table-striped table-condensed cf">\n          <thead class="cf">\n            <tr>\n              <th>#</th>\n              <th>السهم</th>\n              <th class="numeric">كود السهم</th>\n              <th class="numeric">تاريخ الشراء</th>\n              <th class="numeric">سعر الشراء</th>\n              <th class="numeric">تاريخ البيع</th>\n              <th class="numeric">يعر البيع</th>\n              <th class="numeric">الحاله</th>\n              <th class="numeric">نسبة الربح / الخسارة</th>\n              <th class="numeric">المزيد</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td data-title="#">{{ i + 1 }}</td>\n              <td data-title="السهم">{{ recommend.recommendation_name }}</td>\n              <td data-title="كود السهم" class="numeric">{{ recommend.code_name }}</td>\n              <td data-title="تاريخ الشراء" class="numeric">{{ recommend.created2_at }}</td>\n              <td data-title="سعر الشراء" class="numeric">{{ recommend.buyPrice }}</td>\n              <td data-title="تاريخ البيع" class="numeric">{{ recommend.updated2_at }}</td>\n              <td data-title="سعر البيع" class="numeric">{{ recommend.sellPrice }}</td>\n              <!-- <td data-title="الحاله" class="numeric">{{  }}</td> -->\n              <!-- <td data-title="نسبة الربح / الخسارة" class="numeric">+6.32 %</td> -->\n              <td data-title="المزيد" class="numeric"><a class="btn-show-hide">+</a></td>\n            </tr>\n          </tbody>\n        </table>\n\n      </div>\n      <div class="hidden-info">\n        <div id="no-more-tables">\n          <table class="col-md-12 table-bordered table-striped table-condensed cf">\n            <thead class="cf">\n              <tr>\n                <th>الدولة</th>\n                <th>النوع</th>\n                <th class="numeric">القطاع</th>\n                <th class="numeric">الوصف</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td data-title="الدولة">السعودية</td>\n                <td data-title="النوع">شرعى</td>\n                <td data-title="الوصف" class="numeric">البنوك</td>\n                <td data-title="الوصف">محتوى تفصيلى هنا</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <div class="user-modal">\n    <!-- this is the entire modal form, including the background -->\n    <div class="user-modal-container">\n      <!-- this is the container wrapper -->\n      <ul class="switcher">\n        <li><a href="#0">تسجيل دخول </a></li>\n        <li><a href="#0">إنشاء حساب</a></li>\n      </ul>\n\n      <div id="login">\n        <!-- log in form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="signin-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signin-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signin-password">Password</label>\n            <input class="full-width has-padding has-border" id="signin-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">اخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="remember-me" checked>\n            <label for="remember-me">تذكرنى</label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width" type="submit" value="تسجيل دخول">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">نسيت كلمة المرور؟</a></p>\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- login -->\n\n      <div id="signup">\n        <!-- sign up form -->\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace username" for="signup-username">Username</label>\n            <input class="full-width has-padding has-border" id="signup-username" type="text" placeholder="إسم المستخدم">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace email" for="signup-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="signup-email" type="email" placeholder="البريد الإلكترونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <label class="image-replace password" for="signup-password">Password</label>\n            <input class="full-width has-padding has-border" id="signup-password" type="text" placeholder="كلمة المرور">\n            <a href="#0" class="hide-password">إخفاء</a>\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input type="checkbox" id="accept-terms">\n            <label for="accept-terms">موافق على  <a href="#0">الشروط و الأحكام</a></label>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="إنشاء حساب">\n          </p>\n        </form>\n\n        <!-- <a href="#0" class="close-form">Close</a> -->\n      </div>\n      <!-- signup -->\n\n      <div id="reset-password">\n        <!-- reset password form -->\n        <p class="form-message">Lost your password? Please enter your email address. You will receive a link to create a new password.</p>\n        <p class="form-message">نسيت كلمة المرور الخاصة بك؟ برجاء إدخال البريد الإلكترونى الخاص بك و سوف يصلك رابط تحديث كلمة المرور</p>\n        <form class="form">\n          <p class="fieldset">\n            <label class="image-replace email" for="reset-email">E-mail</label>\n            <input class="full-width has-padding has-border" id="reset-email" type="email" placeholder="البريد الإلكرتونى">\n            <span class="error-message">رسالة خطأ هنا!</span>\n          </p>\n\n          <p class="fieldset">\n            <input class="full-width has-padding" type="submit" value="Reset password">\n          </p>\n        </form>\n\n        <p class="form-bottom-message"><a href="#0">عوده لتسجيل الدخول</a></p>\n      </div>\n      <!-- reset-password -->\n      <a href="#0" class="close-form">Close</a>\n    </div>\n    <!-- user-modal-container -->\n  </div>\n  <!-- user-modal -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/macbook/Desktop/beitelmal-R2/src/pages/short-recommendations/short-recommendations.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], ShortRecommendationsPage);
    return ShortRecommendationsPage;
}());

//# sourceMappingURL=short-recommendations.js.map

/***/ })

},[356]);
//# sourceMappingURL=main.js.map