webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main_layout {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    height: 100vh;\n    width: 100%;\n}\n\n.section {\n    margin: 0;\n    padding: 0;\n    display: inline-block;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n\n.v-section {\n    border: none;\n}\n\n#menubar {\n    width: 100%;\n    height: 10%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #1de9b6;\n    overflow: overlay;\n}\n\n#menubar::-webkit-scrollbar {\n    display: none;\n}\n\n#sidebox {\n    width: 30%;\n    height: 90%;\n}\n\n#mainbox {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 70%;\n    height: 90%;\n}\n\n#editor {\n    width: 100%;\n    height: 60%;\n}\n\n#console {\n    width: 100%;\n    height: 40%;\n}\n\n#footer {\n    width: 100%;\n}\n\n@media all and (orientation:portrait) {\n    .section {\n        display: block !important;\n        width: 100% !important;\n    }\n    #mainbox {\n        display: block !important;\n        width: 100% !important;\n    }\n    #footer {\n        display: block !important;\n        width: 100% !important;\n        \n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main_layout\">\n  <div id=\"menubar\" class=\"section z-depth-2 v-section\">\n    <app-toolbar></app-toolbar>\n  </div>\n  <div id=\"sidebox\" class=\"section\">\n    <app-sidebox (parseTableStatus)=\"showParseTable($event)\" (postRHST)=\"getRHST($event)\"></app-sidebox>\n    <app-parse-table [display]=\"parseTableDisplay\" [inputGrammar]=\"productions\" (parseTableStatus)=\"hideParseTable($event)\"\n    (postParseTable)=\"getParseTable($event)\" \n    ></app-parse-table>\n  </div>\n  <div id=\"mainbox\">\n    <div id=\"editor\" class=\"section\">\n      <app-editor [inputGrammar]=\"productions\" [parseTable]=\"parseTable\" (postMessage)=\"getMessage($event)\" (postMessage1)=\"getMessage1($event)\"></app-editor>\n    </div>\n    <div id=\"console\" class=\"section\">\n      <app-console [smessages]=\"smessage\" [pmessages]=\"pmessage\"></app-console>\n    </div>\n  </div>\n  <div id=\"footer\">\n    <app-footer></app-footer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.parseTableDisplay = false;
        this.smessage = [];
        this.pmessage = [];
        this.parseTable = [];
    }
    AppComponent.prototype.showParseTable = function (e) {
        this.parseTableDisplay = true;
    };
    AppComponent.prototype.hideParseTable = function (e) {
        this.parseTableDisplay = false;
    };
    AppComponent.prototype.getRHST = function (e) {
        this.productions = e;
    };
    AppComponent.prototype.getMessage = function (msg) {
        this.smessage = msg;
    };
    AppComponent.prototype.getMessage1 = function (msg) {
        this.pmessage = msg;
    };
    AppComponent.prototype.getParseTable = function (ps) {
        this.parseTable = ps;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidebox_sidebox_component__ = __webpack_require__("../../../../../src/app/components/sidebox/sidebox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_editor_editor_component__ = __webpack_require__("../../../../../src/app/components/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_console_console_component__ = __webpack_require__("../../../../../src/app/components/console/console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_sidebox_production_production_component__ = __webpack_require__("../../../../../src/app/components/sidebox/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_parse_table_parse_table_component__ = __webpack_require__("../../../../../src/app/components/parse-table/parse-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_ace_editor__ = __webpack_require__("../../../../ng2-ace-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__components_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_sidebox_sidebox_component__["a" /* SideboxComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_console_console_component__["a" /* ConsoleComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_sidebox_production_production_component__["a" /* ProductionComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_parse_table_parse_table_component__["a" /* ParseTableComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_ace_editor__["a" /* AceEditorModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/rule.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Production; });
var Production = (function () {
    function Production() {
    }
    return Production;
}());

//# sourceMappingURL=rule.js.map

/***/ }),

/***/ "../../../../../src/app/classes/token.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Token; });
var Token = (function () {
    function Token() {
    }
    return Token;
}());

//# sourceMappingURL=token.js.map

/***/ }),

/***/ "../../../../../src/app/components/console/console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#console-body {\n  padding: 0px 14px;\n  height: calc(100% - (100vh / 20));\n  overflow-y: scroll;\n}\n\n.s-message {\n  word-wrap: break-word;\n  border-radius: 3px;\n  border: 1px solid #64ffda;\n  margin: 10px 0px;\n  padding: 4px 8px;\n}\n\n.p-message {\n  word-wrap: break-word;\n  border-radius: 3px;\n  border: 1px solid green;\n  margin: 10px 0px;\n  padding: 4px 8px;\n}\n\n.scanned-item {\n  color: #f57f17;\n}\n\n.parsed-item {\n  color: green;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/console/console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mi_header\">\n  <label>Console</label>\n</div>\n<div id=\"console-body\">\n  <!-- <ul *ngIf=\"messages.value && messages.value.length > 0\">\n    <li style=\"color: #f57f17\">\n      The scanner result:\n    </li>\n    <li class=\"s-message\" *ngFor=\"let item of messages.value\">\n      <span *ngIf=\"messages.out === 'scanner'\" class=\"scanned-item\">{{item.type}}</span>: {{item.value}}\n    </li>\n  </ul> -->\n  <ul *ngIf=\"messages.value && messages.value.length > 0\">\n    <li style=\"color: #f57f17\">\n      The scanner result:\n    </li>\n    <li *ngFor=\"let item of messages.value\">\n      <span *ngIf=\"messages.out === 'scanner'\">{{item.type}}</span>: {{item.value}}\n    </li>\n  </ul>\n  <ul *ngIf=\"messages.out === 'error'\">\n    <li style=\"color: red\">\n      Error:\n    </li>\n    <li class=\"e-message\">\n      {{messages.message}}\n    </li>\n  </ul>\n  <ul *ngIf=\"messages.out === 'parser'\">\n    <li style=\"color: green\">\n      Parser result:\n    </li>\n    <li class=\"e-message\">\n      {{messages.message}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/console/console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Input } from '@angular/core';

var ConsoleComponent = (function () {
    function ConsoleComponent() {
        this.messages = {};
    }
    ConsoleComponent.prototype.ngOnInit = function () {
    };
    ConsoleComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.smessages.firstChange) {
            this.messages = changes.smessages.currentValue;
            // console.log(this.messages);
        }
    };
    return ConsoleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ConsoleComponent.prototype, "smessages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], ConsoleComponent.prototype, "pmessages", void 0);
ConsoleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-console',
        template: __webpack_require__("../../../../../src/app/components/console/console.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/console/console.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None,
    }),
    __metadata("design:paramtypes", [])
], ConsoleComponent);

//# sourceMappingURL=console.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#editor-parent {\n    position: relative;\n    overflow: hidden;\n    clear: both;\n    height: 100%;\n}\n\n#mi-editor {\n    height: 100px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n#run-btn {\n    color: white;\n    margin: 8px 25px;\n    position: absolute;\n    right: 0;\n    background: #00bfa5;\n}\n\n.mi-icon {\n    color: white;\n    padding: 0 2rem;\n    padding-top: 0px;\n    padding-right: 2rem;\n    padding-bottom: 0px;\n    padding-left: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mi_header\">\n  <label>Editor</label>\n  <!-- <a class=\"waves-effect waves-light btn\" id=\"run-btn\" (click)=\"showParseTable()\">\n    <a class=\"mi mi-play-arrow mi-icon\"></a>\n    Run\n  </a> -->\n  <!-- <a class=\"waves-effect waves-teal btn-flat\">Run</a> -->\n  <!-- <button id=\"run-btn\">Run</button> -->\n  <!-- <a class=\"waves-effect waves-teal btn-flat\" id=\"run-btn\" (click)=\"run()\">\n    RUN\n  </a> -->\n  <a class=\"btn-floating waves-effect waves-light\" id=\"run-btn\" (click)=\"run()\">\n    <i class=\"mi mi-play-arrow\"></i>\n  </a>\n</div>\n<div #ep id=\"editor-parent\">\n  <div #editor ace-editor [(text)]=\"text\" [theme]=\"'xcode'\" [mode]=\"'c_cpp'\" style=\"height: calc(100% - calc(100vh / 20))\">\n  </div>\n</div>\n<!-- [style.height.px]=\"editorHeight\"> -->\n"

/***/ }),

/***/ "../../../../../src/app/components/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_token__ = __webpack_require__("../../../../../src/app/classes/token.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditorComponent = (function () {
    function EditorComponent() {
        this.postMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        // @Output() postMessage1 = new EventEmitter<any>();
        this.text = '';
        this.index = 0;
        this.lineIndex = 1;
        this.editorHeight = 312;
        this.error = false;
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.editorHeight = this.editorParent.nativeElement.offsetHeight - 20;
    };
    EditorComponent.prototype.run = function () {
        // const tokens = this.scanner(this.text);
        // this.parser(tokens);
        this.error = false;
        this.lineIndex = 1;
        if (this.text.indexOf('main') === -1) {
            this.postMessage.emit({
                out: 'error',
                message: 'No main method detected'
            });
            return;
        }
        if (this.text.split('main').length - 1 > 1) {
            this.postMessage.emit({
                out: 'error',
                message: 'Only one main method is valid'
            });
            return;
        }
        this.parser1(this.text);
    };
    EditorComponent.prototype.findTokenType = function (value) {
        switch (value) {
            case 'main':
                return 'KW';
            case 'int':
                return 'KW';
            case 'float':
                return 'KW';
            case 'char':
                return 'KW';
            case 'double':
                return 'KW';
            case 'while':
                return 'KW';
            case 'do':
                return 'KW';
            case 'if':
                return 'KW';
            case 'for':
                return 'KW';
            case '(':
                return 'ST';
            case ')':
                return 'ST';
            case '{':
                return 'ST';
            case '}':
                return 'ST';
            case '||':
                return 'ST';
            case '&&':
                return 'ST';
            case '<=':
                return 'ST';
            case '>=':
                return 'ST';
            case '++':
                return 'ST';
            case '+':
                return 'ST';
            case '*':
                return 'ST';
            case '=':
                return 'ST';
            case ';':
                return 'ST';
            case '|':
                return 'ST';
            case '&':
                return 'ST';
            case '>':
                return 'ST';
            case '<':
                return 'ST';
            default:
                return false;
        }
    };
    EditorComponent.prototype.isNumber = function (str) {
        var flag = true;
        for (var i = 0; i < str.length; i++) {
            if (flag) {
                switch (str[i]) {
                    case '1':
                        flag = true;
                        break;
                    case '2':
                        flag = true;
                        break;
                    case '3':
                        flag = true;
                        break;
                    case '4':
                        flag = true;
                        break;
                    case '5':
                        flag = true;
                        break;
                    case '6':
                        flag = true;
                        break;
                    case '7':
                        flag = true;
                        break;
                    case '8':
                        flag = true;
                        break;
                    case '9':
                        flag = true;
                        break;
                    case '0':
                        flag = true;
                        break;
                    default:
                        flag = false;
                }
            }
        }
        return flag;
    };
    EditorComponent.prototype.parser = function (tokens) {
        var counter = 0;
        var parseStack = [];
        var index = 0;
        parseStack.push('$');
        parseStack.push('P');
        // console.log(this.parseTable);
        while (true) {
            if (counter >= 100) {
                return;
            }
            else {
                counter++;
            }
            var nextToken = tokens[index];
            if (nextToken.value === '$') {
                nextToken = '$';
            }
            else {
                if (nextToken.type === 'id' || nextToken.type === 'num') {
                    nextToken = nextToken.type;
                }
                else {
                    nextToken = nextToken.value;
                }
            }
            var top_ps = parseStack[parseStack.length - 1];
            // console.log('top_ps', top_ps);
            // console.log('nextToken', nextToken);
            // console.log('parseStack', parseStack);
            // console.log('tokens', tokens);
            // console.log('--------');
            if (this.isVariable(top_ps)) {
                var j = this.findVariableIndex(top_ps) + 1;
                var i = this.findTerminalIndex(nextToken) + 1;
                // console.log(j);
                // console.log(i);
                // console.log(this.parseTable[j][i]);
                // console.log(this.inputGrammar.productions[+this.parseTable[j][i] - 1]);
                var vars = this.inputGrammar.productions[+this.parseTable[j][i] - 1].right;
                if (vars === 'λ') {
                    parseStack.pop();
                }
                else {
                    parseStack.pop();
                    vars = vars.split(' ');
                    vars = vars.reverse();
                    vars.forEach(function (v) {
                        parseStack.push(v);
                    });
                }
            }
            else if (top_ps === '$') {
                if (nextToken === '$') {
                    // console.log('Accept');
                    return;
                }
            }
            else if (!this.isVariable(top_ps)) {
                if (top_ps === nextToken) {
                    parseStack.pop();
                    index++;
                }
                else {
                    // console.log('error');
                }
            }
            // return;
        }
    };
    EditorComponent.prototype.findVariableIndex = function (variable) {
        for (var j = 0; j < this.inputGrammar.variables.length; j++) {
            if (this.inputGrammar.variables[j] === variable) {
                return j;
            }
        }
    };
    EditorComponent.prototype.findTerminalIndex = function (terminal) {
        for (var i = 0; i < this.inputGrammar.terminals.length; i++) {
            if (this.inputGrammar.terminals[i] === terminal) {
                return i;
            }
        }
    };
    EditorComponent.prototype.isVariable = function (input) {
        var flag = false;
        // console.log(this.inputGrammar);
        this.inputGrammar.variables.forEach(function (v) {
            // console.log(input);
            // console.log(v);
            if (v === input) {
                flag = true;
            }
        });
        return flag;
    };
    EditorComponent.prototype.parser1 = function (text) {
        this.index = 0;
        this.read();
        var token;
        var tokens = [];
        var parseStack = [];
        parseStack.push('$');
        parseStack.push('P');
        // while (this.index <= this.text.length && !this.error) {
        token = this.scanner1();
        while (true) {
            var top_ps = parseStack[parseStack.length - 1];
            // console.log(top_ps);
            // console.log(token);
            if (parseStack.length === 1) {
                // console.log(2);
                if (token.value && token.value === '$') {
                    console.log('Accept');
                    this.postMessage.emit({
                        out: 'parser',
                        message: 'Code parsed successfully ✌️'
                    });
                    break;
                }
                else {
                    this.postMessage.emit({
                        out: 'error',
                        message: 'Invalid code outside of main scope'
                    });
                    break;
                }
            }
            if (token) {
                console.log(token, parseStack);
                // console.log('token.value', token.value);
                tokens.push(token);
                if (token.type === 'id') {
                    token.value = 'id';
                }
                if (token.type === 'num') {
                    token.value = 'num';
                }
                if (this.isVariable(top_ps)) {
                    // console.log(1);
                    var j = this.findVariableIndex(top_ps) + 1;
                    var i = this.findTerminalIndex(token.value) + 1;
                    if (this.parseTable[j][i] === 0) {
                        this.postMessage.emit({
                            out: 'error',
                            message: 'Invalid expression found in line: ' + this.lineIndex
                        });
                        break;
                    }
                    // console.log('ParseTable', this.parseTable[j][i]);
                    var vars = this.inputGrammar.productions[+this.parseTable[j][i] - 1].right;
                    if (vars === 'λ') {
                        parseStack.pop();
                    }
                    else {
                        parseStack.pop();
                        vars = vars.split(' ');
                        vars = vars.reverse();
                        vars.forEach(function (v) {
                            parseStack.push(v);
                        });
                    }
                }
                else {
                    // console.log(3);
                    if (top_ps === token.value) {
                        parseStack.pop();
                        token = this.scanner1();
                        continue;
                    }
                    // console.log('error');
                    this.postMessage.emit({
                        out: 'error',
                        message: '\"' + top_ps + '\" expected but token is \"' + token.value + '\" in line: ' + this.lineIndex
                    });
                    break;
                }
            }
            else {
                // console.log('else');
                token = this.scanner1();
            }
        }
        // console.log('tokens', tokens);
        // if (!this.error) {
        //   this.postMessage.emit({
        //     out: 'scanner',
        //     value: tokens
        //   });
        // }
    };
    EditorComponent.prototype.scanner1 = function () {
        // tslint:disable-next-line:prefer-const
        var token = new __WEBPACK_IMPORTED_MODULE_1__classes_token__["a" /* Token */]();
        while (this.ch === ' ' || this.ch === '\t' || this.ch === '\n') {
            if (this.ch === '\n') {
                this.lineIndex++;
            }
            this.read();
        }
        if (!this.ch) {
            token.type = 'end';
            token.value = '$';
            return token;
        }
        if (this.ch === '(') {
            token.type = 'ST';
            token.value = '(';
            this.read();
            return token;
        }
        if (this.ch === ')') {
            token.type = 'ST';
            token.value = ')';
            this.read();
            return token;
        }
        if (this.ch === '{') {
            token.type = 'ST';
            token.value = '{';
            this.read();
            return token;
        }
        if (this.ch === '}') {
            token.type = 'ST';
            token.value = '}';
            this.read();
            return token;
        }
        if (this.ch === ';') {
            token.type = 'ST';
            token.value = ';';
            this.read();
            return token;
        }
        if (this.ch === '*') {
            token.type = 'ST';
            token.value = '*';
            this.read();
            return token;
        }
        if (this.ch === '+') {
            token.type = 'ST';
            token.value = '+';
            this.read();
            if (this.ch === '+') {
                token.value = '++';
                this.read();
            }
            return token;
        }
        if (this.ch === '=') {
            token.type = 'ST';
            token.value = '=';
            this.read();
            if (this.ch === '=') {
                token.value = '==';
                this.read();
            }
            return token;
        }
        if (this.ch === '<') {
            this.read();
            if (this.ch === '=') {
                token.type = 'ST';
                token.value = '<=';
                this.read();
            }
            return token;
        }
        if (this.ch === '>') {
            this.read();
            if (this.ch === '=') {
                token.type = 'ST';
                token.value = '>=';
                this.read();
            }
            return token;
        }
        if (this.ch === '&') {
            this.read();
            if (this.ch === '&') {
                token.type = 'ST';
                token.value = '&&';
                this.read();
            }
            return token;
        }
        if (this.ch === '|') {
            this.read();
            if (this.ch === '|') {
                token.type = 'ST';
                token.value = '||';
                this.read();
            }
            return token;
        }
        if (this.isLetter(this.ch)) {
            var value = this.ch;
            this.read();
            while (this.isLetter(this.ch)) {
                value = value + this.ch;
                this.read();
                // console.log(this.ch);
                if (this.ch !== ';' && this.ch !== '=' && this.ch !== ')' && this.ch !== '(' && this.ch !== ' ' &&
                    this.ch !== '\t' && this.ch !== '\n' && !this.isLetter(this.ch)) {
                    this.error = true;
                    this.postMessage.emit({
                        out: 'error',
                        message: 'Invalid identifire in line : ' + this.lineIndex
                    });
                    return;
                }
            }
            if (this.ch !== ';' && this.ch !== '=' && this.ch !== ')' && this.ch !== '(' && this.ch !== ' ' &&
                this.ch !== '*' && this.ch !== '+' && this.ch !== '\t' && this.ch !== '\n' && !this.isLetter(this.ch)) {
                this.error = true;
                this.postMessage.emit({
                    out: 'error',
                    message: 'Invalid identifire declaration in line : ' + this.lineIndex
                });
                return;
            }
            token.type = 'id';
            token.value = value;
            if (this.isKeyWord(value) !== 'false') {
                token.type = 'KW';
            }
            return token;
        }
        if (this.isNumber(this.ch)) {
            var num = this.ch;
            this.read();
            while (this.isNumber(this.ch) || this.ch === '.') {
                num = num + this.ch;
                this.read();
            }
            token.type = 'num';
            token.value = num;
            return token;
        }
        if (this.ch === '/') {
            this.read();
            if (this.ch === '/') {
                this.read();
                while (this.ch !== '\n') {
                    this.read();
                }
                // return;
            }
            else {
                this.error = true;
                this.postMessage.emit({
                    out: 'error',
                    message: 'Invalid comment format'
                });
            }
        }
        // console.log(this.ch);
        this.read();
        // console.log(this.ch);
        this.error = true;
        this.postMessage.emit({
            out: 'error',
            message: 'Invalid symbol found in line : ' + this.lineIndex
        });
    };
    EditorComponent.prototype.read = function () {
        this.ch = this.text[this.index];
        this.index++;
    };
    EditorComponent.prototype.isLetter = function (ch) {
        var flag = false;
        if (ch) {
            if (65 <= ch.charCodeAt(0) && 90 >= ch.charCodeAt(0)) {
                flag = true;
            }
            if (97 <= ch.charCodeAt(0) && 122 >= ch.charCodeAt(0)) {
                flag = true;
            }
        }
        return flag;
    };
    EditorComponent.prototype.isKeyWord = function (str) {
        switch (str) {
            case 'main':
                return 'main';
            case 'int':
                return 'int';
            case 'float':
                return 'float';
            case 'double':
                return 'double';
            case 'char':
                return 'char';
            case 'for':
                return 'for';
            case 'while':
                return 'while';
            case 'do':
                return 'do';
            case 'if':
                return 'if';
            case 'else':
                return 'else';
            default:
                return 'false';
        }
    };
    return EditorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('ep'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "editorParent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('editor'),
    __metadata("design:type", Object)
], EditorComponent.prototype, "editor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "parseTable", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "inputGrammar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], EditorComponent.prototype, "postMessage", void 0);
EditorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/components/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/editor/editor.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-countainer {\n    border-collapse: unset;\n    background-color: gray;\n    border-spacing: 15px;\n    table-layout: fixed !important;\n}\n\n.seprator {\n    background-color: darkgray;\n    /* border-bottom: 1px solid lightgray; */\n    /* border-bottom: 3px solid #00bfa5; */\n    height: 3px;\n    width: 100%;\n}\n\n.footer-countainer * {\n    color: white;\n}\n\n.footer-title {\n    border-bottom: 1px solid white;\n    display: block;\n    width: 100%;\n}\n\n.footer-end {\n    background: #424242;\n    color: white;\n    /* opacity: 0.5; */\n    padding: 10px 18px;\n}\n\nmi-git {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zd…0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=);\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n}\n\n.footer-item {\n    display: block;\n    height: 150px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"seprator\"></div>\n\n<table class=\"footer-countainer\">\n  <tbody>\n    <td>\n      <tbody class=\"footer-item\">\n        <tr style=\"display: block;\">\n          <span class=\"footer-title\">\n            <b>\n              TEAM\n            </b>\n          </span>\n        </tr>\n        <tr>\n          <a href=\"http://www.github.com/valakhosravi/\" target=\"_blank\">Vala Khosravi</a>\n        </tr>\n        <tr>\n          <a href=\"http://www.github.com/Mehrshid/\" target=\"_blank\">Mehrshid Fadaei-Nejad</a>\n        </tr>\n      </tbody>\n    </td>\n    <td>\n      <tbody class=\"footer-item\">\n        <tr style=\"display: block;\">\n          <span class=\"footer-title\">\n            <b>\n              ABOUT\n            </b>\n          </span>\n        </tr>\n        <tr>\n          <p style=\"\n          height: 100px;\n          overflow: hidden;\n          display: inline-block;\n          text-overflow: ellipsis;\n          margin: 0;\n            \">\n            <i>Compilerly</i> is a playground for students those have compiler course. Pseudo C++ grammer included on left side,\n            you can see Parse-Table of this grammar and type valid code of this language. It works on LL(1) parser.\n          </p>\n        </tr>\n      </tbody>\n    </td>\n    <td>\n      <tbody class=\"footer-item\">\n        <tr style=\"display: block;\">\n          <span class=\"footer-title\">\n            <b>\n              CONNECT\n            </b>\n          </span>\n        </tr>\n        <tr>\n          <!-- <i class=\"mi mi-git\"></i> -->\n          <a href=\"https://github.com/valakhosravi/compilerly\">github</a>\n        </tr>\n      </tbody>\n    </td>\n  </tbody>\n</table>\n<div class=\"seprator\"></div>\n<div class=\"footer-end\">Special thanks to\n  <b>Dr. Adel Hosseiny</b>\n  <span style=\"float: right;\">version 1.0</span>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/parse-table/parse-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#table-parent {\n    position: fixed;\n    display: block;\n    width: 80%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background-color: white;\n    z-index: 3;\n}\n\n#block {\n    position: fixed;\n    display: none;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 9;\n    cursor: pointer;\n}\n\n#hide-btn {\n    position: absolute;\n    right: 14px;\n    top: 6px;\n    color: white;\n    border: 1px solid white;\n    border-radius: 50%;\n    cursor: pointer;\n}\n\n.header {\n    width: 100%;\n    height: 10%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background: #1de9b6;\n    overflow: overlay;\n    padding: 6px 10px;\n}\n\n.header::-webkit-scrollbar {\n    display: none;\n}\n\n.title {\n    height: 100%;\n    margin: 0;\n    font-size: 3rem;\n    display: inline-block;\n    color: white;\n    vertical-align: middle;\n    text-align: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-decoration: none;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: #1de9b6;\n}\n\n.parse-table-cell {\n    margin: 0;\n    /* padding: 5px; */\n    text-align: center;\n}\n\n#parse-table {\n    table-layout: fixed;\n    border-collapse: collapse;\n}\n\n@media all and (orientation:portrait) {\n    #table-parent {\n        width: 100%;\n    }\n    #parse-table {\n        width: 200%;\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/parse-table/parse-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"table-parent\" [style.display]=\"displayStyle\" @moveState=\"state\"> -->\n<div id=\"table-parent\" class=\"z-depth-2\" [@moveState]=\"displayStyle\" style=\"z-index: 10 !important\">\n  <div class=\"header section z-depth-2 v-section\">\n    <h2 class=\"title\">\n      Parse Table\n      <a (click)=\"hideBlock()\">\n        <i id=\"hide-btn\" class=\"mi mi-chevron-left\"></i>\n      </a>\n    </h2>\n  </div>\n  <!-- <a href=\"\"></a> -->\n  <div style=\"height: 100%; position: relative; overflow-y: scroll\">\n    <table id=\"parse-table\">\n      <tbody>\n        <tr *ngFor=\"let j of parseTable\">\n          <td class=\"parse-table-cell\" *ngFor=\"let i of j\">\n            {{i}}\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div style=\"height: 100px\"></div>    \n  </div>\n</div>\n<a id=\"block\" [style.display]=\"displayStyle\" (click)=\"hideBlock()\"></a>"

/***/ }),

/***/ "../../../../../src/app/components/parse-table/parse-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParseTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParseTableComponent = (function () {
    function ParseTableComponent() {
        this.parseTableStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.postParseTable = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.displayStyle = 'none';
        this.parseTableCreator = {};
        this.test = new Set();
    }
    ParseTableComponent.prototype.ngOnInit = function () {
    };
    ParseTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.display) {
            if (this.display) {
                this.displayStyle = 'block';
            }
            else {
                this.displayStyle = 'none';
            }
        }
        if (changes.inputGrammar) {
            this.parseTable = this.makeParseTable(changes.inputGrammar.currentValue);
            this.postParseTable.emit(this.parseTable);
        }
    };
    ParseTableComponent.prototype.hideBlock = function () {
        this.parseTableStatus.emit(false);
    };
    ParseTableComponent.prototype.makeParseTable = function (inputGrammar) {
        var _this = this;
        var vLength = inputGrammar.variables.length;
        var tLength = inputGrammar.terminals.length;
        var parseTable = [];
        for (var j = 0; j < vLength + 1; j++) {
            parseTable[j] = [];
            for (var i = 0; i < tLength + 1; i++) {
                parseTable[j][i] = 0;
            }
        }
        parseTable[0][0] = '';
        for (var j = 1; j < vLength + 1; j++) {
            parseTable[j][0] = inputGrammar.variables[j - 1];
        }
        for (var i = 1; i < tLength + 1; i++) {
            parseTable[0][i] = inputGrammar.terminals[i - 1];
        }
        // console.log(this.calculateFirst1(this.inputGrammar, this.inputGrammar.productions[1], [], new Set()));
        var firstSets = [];
        this.inputGrammar.productions.forEach(function (p) {
            _this.calculateFirst1(_this.inputGrammar, p, [], new Set());
            var arr = [];
            _this.test.forEach(function (t) {
                arr.push(t);
            });
            for (var i = 0; i < _this.test.size; i++) {
                _this.test[i] = {
                    index: p.index,
                    value: arr[i]
                };
            }
            firstSets.push({
                variable: p.left,
                firstSet: _this.test
            });
            _this.test = new Set();
        });
        var array = [];
        firstSets.forEach(function (fs) {
            array.push(fs);
        });
        // compine found sets
        var temp = [];
        for (var j = 0; j < firstSets.length; j++) {
            var fs = [];
            var v = void 0;
            for (var i = 0; i < firstSets.length; i++) {
                if (firstSets[j].variable === firstSets[i].variable) {
                    v = firstSets[i].variable;
                    for (var z = 0; z < array[i].firstSet.size; z++) {
                        fs.push(array[i].firstSet[z]);
                    }
                }
            }
            temp.push({
                variable: v,
                firstSet: fs
            });
        }
        // remove repeated elements
        var clear = [];
        temp.forEach(function (t) {
            var flag = true;
            clear.forEach(function (c) {
                if (c.variable === t.variable) {
                    flag = false;
                }
            });
            if (flag) {
                clear.push(t);
            }
        });
        // console.log('clear', clear);
        // const temp2 = [];
        // const temp1 = this.calculateFollow(this.inputGrammar.productions[17], this.inputGrammar, clear);
        // inputGrammar.productions.forEach(p => {
        //   const temp1 = this.calculateFollow(p, inputGrammar, clear);
        //   temp2.push({
        //     variable: p.left,
        //     followSet: temp1
        //   });
        // });
        // console.log('temp2', temp2);
        // const clearf = [];
        // temp2.forEach(t => {
        //   let flag = true;
        //   clearf.forEach(c => {
        //     if (c.variable === t.variable) {
        //       flag = false;
        //     }
        //   });
        //   if (flag) {
        //     clearf.push(t);
        //   }
        // });
        // console.log('clearf', clearf);
        // this.inputGrammar.productions.forEach(p => {
        //   if (this.isNullAble(p)) {
        //     console.log(p.left);
        //   }
        // });
        // const temp1 = this.calculateFollow1(this.inputGrammar.productions[2], this.inputGrammar, clear);
        // console.log('temp1', temp1);
        var temp1 = [];
        this.inputGrammar.productions.forEach(function (p) {
            var temp2 = _this.calculateFollow1(p, _this.inputGrammar, clear);
            temp1.push({
                variable: p.left,
                followSet: temp2
            });
        });
        var clearf = [];
        temp1.forEach(function (t) {
            var flag = true;
            clearf.forEach(function (c) {
                if (c.variable === t.variable) {
                    flag = false;
                }
            });
            if (flag) {
                clearf.push(t);
            }
        });
        // console.log(clearf);
        temp1 = [];
        this.inputGrammar.productions.forEach(function (p) {
            _this.calculateFollow2(p, _this.inputGrammar, clearf);
        });
        // console.log('this.followSets', this.followSets);
        clear.forEach(function (c, index) {
            c.firstSet.forEach(function (fs) {
                if (fs.value === 'λ') {
                    var test1_1 = _this.findVariableIndex(c.variable);
                    _this.followSets[index].followSet.forEach(function (fls) {
                        var test = _this.findTerminalIndex(fls);
                        parseTable[test1_1 + 1][test + 1] = fs.index;
                    });
                }
            });
        });
        // put first set indexes in parse-table
        clear.forEach(function (c) {
            var j = _this.findVariableIndex(c.variable);
            c.firstSet.forEach(function (f) {
                if (f.value !== 'λ') {
                    var i = _this.findTerminalIndex(f.value);
                    parseTable[j + 1][i + 1] = f.index;
                }
            });
        });
        // sts
        // parseTable[2][5] = 3;
        // // E#
        parseTable[6][26] = 14;
        parseTable[6][25] = 14;
        // parseTable[6][14] = 14;
        // parseTable[6][3] = 14;
        // // T#
        parseTable[7][14] = 17;
        parseTable[7][15] = 17;
        parseTable[7][16] = 17;
        parseTable[7][17] = 17;
        parseTable[7][18] = 17;
        parseTable[7][26] = 17;
        parseTable[7][25] = 17;
        parseTable[7][3] = 17;
        // BT#
        parseTable[19][3] = 30;
        parseTable[19][14] = 30;
        // BF#
        parseTable[22][3] = 35;
        // #IFST#
        parseTable[17][5] = 41;
        // console.log('parseTable', parseTable);
        return parseTable;
    };
    ParseTableComponent.prototype.calculateFirst = function (inputGrammar, production, scaller, test) {
        var _this = this;
        var temp = production.right.split(' ');
        if (!test) {
            test = new Set();
        }
        if (this.isVariable(temp[0])) {
            inputGrammar.forEach(function (p) {
                if (temp[0] === p.left) {
                    return _this.calculateFirst(inputGrammar, p, scaller, test);
                }
            });
        }
        else {
            test.add({
                index: production.index,
                terminal: temp[0]
            });
            if (this.parseTableCreator[scaller]) {
                test.forEach(function (t) {
                    _this.parseTableCreator[scaller].push(t);
                });
            }
            else {
                this.parseTableCreator[scaller] = Object.assign([], test);
            }
        }
    };
    ParseTableComponent.prototype.calculateFirst1 = function (grammar, production, pathList, firstList) {
        var _this = this;
        var temp = production.right.split(' ');
        if (this.isVariable(temp[0])) {
            pathList.push(production);
        }
        grammar.productions.forEach(function (p) {
            if (_this.isVariable(temp[0])) {
                if (p.left === temp[0]) {
                    _this.calculateFirst1(grammar, p, pathList, firstList);
                }
            }
            else {
                firstList.add(temp[0]);
                if (pathList.length !== 0) {
                    // console.log(Object.assign([], pathList));
                }
                pathList.pop();
            }
        });
        // console.log(firstList);
        firstList.forEach(function (elem) {
            _this.test.add(elem);
        });
    };
    ParseTableComponent.prototype.isNullAble = function (input) {
        var flag = false;
        this.inputGrammar.productions.forEach(function (p) {
            if (input.left === p.left && p.right === 'λ') {
                flag = true;
            }
        });
        return flag;
    };
    ParseTableComponent.prototype.isVariable = function (input) {
        var flag = 0;
        this.inputGrammar.variables.forEach(function (v) {
            if (v === input && flag !== 1) {
                flag = 1;
            }
        });
        if (flag === 1) {
            return true;
        }
        else {
            return false;
        }
    };
    ParseTableComponent.prototype.findVariableIndex = function (variable) {
        for (var j = 0; j < this.inputGrammar.variables.length; j++) {
            if (this.inputGrammar.variables[j] === variable) {
                return j;
            }
        }
    };
    ParseTableComponent.prototype.findVariableIndex1 = function (firstSet, variable) {
        for (var j = 0; j < firstSet.length; j++) {
            if (firstSet[j].variable === variable) {
                return j;
            }
        }
    };
    ParseTableComponent.prototype.findTerminalIndex = function (terminal) {
        for (var i = 0; i < this.inputGrammar.terminals.length; i++) {
            if (this.inputGrammar.terminals[i] === terminal) {
                return i;
            }
        }
    };
    ParseTableComponent.prototype.calculateFollow = function (production, grammar, firstSets) {
        var _this = this;
        var temp = [];
        grammar.productions.forEach(function (p) {
            if (_this.containElement(production.left, p.right)) {
                temp.push(p);
            }
        });
        // console.log('temp', temp);
        var set = new Set();
        temp.forEach(function (t) {
            var str = t.right;
            set.add(str.substring(str.indexOf(production.left) + production.left.length + 1, str.length));
        });
        // console.log('set', set);
        var set1 = new Set();
        set.forEach(function (s) {
            firstSets.forEach(function (fs) {
                if (fs.variable === s) {
                    fs.firstSet.forEach(function (f) {
                        set1.add(f.value);
                    });
                }
            });
        });
        // console.log('set1', set1);
        temp = [];
        set1.forEach(function (s) {
            temp.push(s);
        });
        return temp;
    };
    ParseTableComponent.prototype.calculateFollow1 = function (production, grammar, firstSets) {
        var _this = this;
        // console.log(firstSets);
        var followSet = new Set();
        grammar.productions.forEach(function (p) {
            var i = _this.containElement(production.left, p.right);
            if (i !== -1) {
                var list = p.right.split(' ');
                var next = list[i + 1];
                if (next) {
                    if (_this.isVariable(next)) {
                        var variableIndex = _this.findVariableIndex1(firstSets, next);
                        // console.log(firstSets[variableIndex].variable);
                        if (variableIndex) {
                            firstSets[variableIndex].firstSet.forEach(function (fse) {
                                followSet.add(fse.value);
                            });
                        }
                    }
                    else {
                        followSet.add(next);
                    }
                }
            }
        });
        return followSet;
    };
    ParseTableComponent.prototype.calculateFollow2 = function (production, grammar, followSets) {
        var _this = this;
        var followSet = new Set();
        grammar.productions.forEach(function (p) {
            var list = p.right.split(' ');
            if (list.pop() === production.left) {
                var i_1 = _this.findVariableIndex1(followSets, production.left);
                var j = _this.findVariableIndex1(followSets, p.left);
                // console.log(followSets[j]);
                if (followSets[j].followSet.forEach) {
                    followSets[j].followSet.forEach(function (fse) {
                        // console.log('here');
                        followSets[i_1].followSet.add(fse);
                    });
                }
            }
        });
        // console.log(followSets);
        this.followSets = followSets;
        // return followSet;
    };
    ParseTableComponent.prototype.containElement = function (element, list) {
        // let flag: Boolean = false;
        var index = -1;
        list = list.split(' ');
        list.forEach(function (l, i) {
            if (l === element) {
                // flag = true;
                index = i;
            }
        });
        return index;
    };
    return ParseTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ParseTableComponent.prototype, "display", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ParseTableComponent.prototype, "inputGrammar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ParseTableComponent.prototype, "parseTableStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], ParseTableComponent.prototype, "postParseTable", void 0);
ParseTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-parse-table',
        template: __webpack_require__("../../../../../src/app/components/parse-table/parse-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/parse-table/parse-table.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('moveState', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('none', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translateX(-100%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translateX(0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('block => none', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('none => block', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in'))
            ])
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], ParseTableComponent);

//# sourceMappingURL=parse-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebox/production/production.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebox-production{\n    display: block;\n    margin: 10px 0px;\n    border-radius: 3px;\n}\n\n.sidebox-production-index{\n    background-color: #64ffda;\n    border-right: 1px solid #1de9b6;\n    margin: 0px 5px;\n    width: 30px;\n    text-align:center; \n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebox/production/production.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <table class=\"z-depth-1\" style=\"border-radius: 15px; margin-bottom: 15px; margin-top: 15px;\"> -->\n<table class=\"sidebox-production z-depth-1\">\n  <tbody>\n    <tr>\n      <td class=\"sidebox-production-index\">\n        <b>{{production.index}}</b>\n      </td>\n      <td>\n        <!-- <input [(ngModel)]=\"production.left\" type=\"text\" class=\"mi-input\" style=\"text-transform:uppercase;width: 40px\" /> -->\n        <span style=\"width: 40px; display: block;margin-left: 10px\">{{production.left}}</span>\n      </td>\n      <td>\n        <i class=\"mi mi-arrow-forward\" style=\"margin-left: 2px !important;\"></i>\n      </td>\n      <td>\n        <span style=\"display: block;width: 180px;margin-left: 10px\">{{production.right}}</span>\n        <!-- <input [(ngModel)]=\"production.right\" type=\"text\" class=\"mi-input\" /> -->\n      </td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebox/production/production.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_rule__ = __webpack_require__("../../../../../src/app/classes/rule.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductionComponent = (function () {
    function ProductionComponent() {
    }
    ProductionComponent.prototype.ngOnInit = function () {
    };
    return ProductionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__classes_rule__["a" /* Production */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__classes_rule__["a" /* Production */]) === "function" && _a || Object)
], ProductionComponent.prototype, "production", void 0);
ProductionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-production',
        template: __webpack_require__("../../../../../src/app/components/sidebox/production/production.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebox/production/production.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], ProductionComponent);

var _a;
//# sourceMappingURL=production.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebox/sidebox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#side-bottom {\n    background: #1de9b6;\n    margin-left: -25px;\n    position: absolute;\n    top: calc(50% + 95px);\n    left: 0;\n    /* IE 9 */\n    -webkit-transform: rotate(-90deg);\n    /* Safari */\n    transform: rotate(-90deg);\n    /* Standard syntax */\n    transform-origin: 0% 0%;\n    -ms-transform-origin: 0% 0%;\n    -webkit-transform-origin: 0% 0%;\n    -webkit-animation-name: firstAnim;\n    /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 5s;\n    /* Safari 4.0 - 8.0 */\n    animation-name: firstAnim;\n    animation-duration: 5s;\n    display: none;\n}\n\n#side-bottom:active {\n    background: #64ffda;\n}\n\n#side-bottom:hover {\n    margin-left: 0px;\n}\n\n@-webkit-keyframes firstAnim {\n    /* 0% {margin-left: -45px;} */\n    /* 0% {margin-left: 0px;} */\n    /* 100% {margin-left: -25px;} */\n}\n\n\n/* Standard syntax */\n\n@keyframes firstAnim {\n    /* 0% {margin-left: -25px;}\n    50% {margin-left: 0px;}\n    100% {margin-left: -25px;} */\n}\n\n@media all and (orientation:portrait) {\n    #side-bottom {\n        margin-left: 5%;\n        width: 20px;\n        height: 55px;\n        border-radius: 100px;\n        opacity: 0.8;\n        display: block;\n    }\n    #btn-text {\n        display: none;\n    }\n    .right {\n        top: 10px;\n        margin: 0 auto;\n        margin-right: -8px;\n    }\n    .btn-coutainer {\n        display: none;\n    }\n}\n\n.btn-coutainer {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: calc(30% - 1px);\n    background-color: white;\n    padding: 10px;\n    border-top: 1px solid #00bfa5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebox/sidebox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mi_header\">\n  <label>Grammar</label>\n</div>\n<a class=\"waves-effect waves-light btn\" id=\"side-bottom\" (click)=\"showParseTable()\">\n  <i class=\"mi mi-expand-more right\"></i>\n  <span id=\"btn-text\">Parse Table</span>\n</a>\n<div style=\"padding: 4px 10px 4px 10px;overflow-y: scroll;height:calc(100% - calc(100vh / 20));border-right: 1px solid #00bfa5\">\n  <app-production #cmp *ngFor=\"let production of productions\" [production]=\"production\"></app-production>\n  <div style=\"height: 55px\"></div>\n  <div class=\"btn-coutainer\">\n    <a class=\"waves-effect waves-light btn\" (click)=\"showParseTable()\">\n      <span id=\"btn-text\">Show Parse Table</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebox/sidebox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__test_grammars__ = __webpack_require__("../../../../../src/app/components/sidebox/test-grammars.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideboxComponent = (function () {
    function SideboxComponent() {
        this.parseTableStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.postRHST = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.counter = 1;
        this.productions = [];
    }
    SideboxComponent.prototype.ngOnInit = function () {
        this.productions = __WEBPACK_IMPORTED_MODULE_1__test_grammars__["a" /* SBUCSGrammar */].productions;
        this.productions = this.indexInputGrammar(this.productions);
        __WEBPACK_IMPORTED_MODULE_1__test_grammars__["a" /* SBUCSGrammar */].productions = this.productions;
        this.postRHST.emit(__WEBPACK_IMPORTED_MODULE_1__test_grammars__["a" /* SBUCSGrammar */]);
    };
    SideboxComponent.prototype.ngAfterViewInit = function () {
    };
    SideboxComponent.prototype.add = function () {
        this.productions.push({
            index: this.counter,
            left: '-' + this.counter,
            right: '+' + this.counter,
        });
        this.counter += 1;
    };
    SideboxComponent.prototype.showParseTable = function () {
        this.parseTableStatus.emit(true);
    };
    SideboxComponent.prototype.indexInputGrammar = function (productions) {
        for (var i = 0; i < this.productions.length; i++) {
            productions[i].index = i + 1;
            // productions[i].left = productions[i].left.replace(/(['"])/g, '#');
            // productions[i].right = productions[i].right.replace(/(['"])/g, '#');
        }
        return productions;
    };
    return SideboxComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChildren */])('cmp'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* QueryList */]) === "function" && _a || Object)
], SideboxComponent.prototype, "components", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], SideboxComponent.prototype, "parseTableStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _c || Object)
], SideboxComponent.prototype, "postRHST", void 0);
SideboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-sidebox',
        template: __webpack_require__("../../../../../src/app/components/sidebox/sidebox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebox/sidebox.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], SideboxComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebox.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebox/test-grammars.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SBUCSGrammar; });
var SBUCSGrammar = {
    terminals: [
        'main', '(', ')', '{', '}', 'id', 'num', 'int', 'float', 'char',
        'double', '+', '*', ';', '=', '==', '<=', '>=', '++', 'do', 'while',
        'for', 'if', 'else', '||', '&&', '$'
    ],
    variables: [
        'P', 'STS', 'ST', 'E', 'T', 'E#', 'T#', 'F', 'DWST',
        'WST', 'BE', 'BE#', 'AST', 'AST#', 'FST', 'IFST', 'IFST#', 'BT',
        'BT#', 'IST', 'BF', 'BF#'
    ],
    productions: [
        {
            left: 'P', right: 'main ( ) { STS }'
        },
        {
            left: 'STS', right: 'ST STS'
        },
        {
            left: 'STS', right: 'λ'
        },
        {
            left: 'ST', right: 'int id ;'
        },
        {
            left: 'ST', right: 'float id ;'
        },
        {
            left: 'ST', right: 'char id ;'
        },
        {
            left: 'ST', right: 'double id ;'
        },
        {
            left: 'ST', right: 'AST ;'
        },
        {
            left: 'AST', right: 'id = AST#'
        },
        {
            left: 'AST#', right: '= E'
        },
        {
            left: 'AST#', right: 'E'
        }
        // , {
        //     left: 'AST#', right: '
        // }
        ,
        {
            left: 'E', right: 'T E#'
        },
        {
            left: 'E#', right: '+ F E#'
        },
        {
            left: 'E#', right: 'λ'
        },
        {
            left: 'T', right: 'F T#'
        },
        {
            left: 'T#', right: '* F T#'
        },
        {
            left: 'T#', right: 'λ'
        },
        {
            left: 'F', right: '( E )'
        },
        {
            left: 'F', right: 'id'
        },
        {
            left: 'F', right: 'num'
        },
        {
            left: 'ST', right: 'WST'
        },
        {
            left: 'WST', right: 'while ( BE ) { STS }'
        },
        {
            left: 'ST', right: 'DWST'
        },
        {
            left: 'DWST', right: 'do { STS } while ( BE )'
        },
        {
            left: 'BE', right: 'BT BE#'
        },
        {
            left: 'BE#', right: '|| BT BE#'
        },
        {
            left: 'BE#', right: 'λ'
        },
        {
            left: 'BT', right: 'BF BT#'
        },
        {
            left: 'BT#', right: '&& BF BT#'
        },
        {
            left: 'BT#', right: 'λ'
        },
        {
            left: 'BF', right: 'E BF#'
        },
        {
            left: 'BF#', right: '== E'
        },
        {
            left: 'BF#', right: '<= E'
        }, {
            left: 'BF#', right: '>= E'
        },
        {
            left: 'BF#', right: 'λ'
        },
        {
            left: 'ST', right: 'FST'
        },
        {
            left: 'FST', right: 'for ( AST ; BE ; IST ) { STS }'
        },
        {
            left: 'ST', right: 'IFST'
        },
        {
            left: 'IFST', right: 'if ( BE ) { STS } IFST#'
        },
        {
            left: 'IFST#', right: 'else { STS }'
        },
        {
            left: 'IFST#', right: 'λ'
        },
        {
            left: 'IST', right: 'id ++'
        }
    ]
};
//# sourceMappingURL=test-grammars.js.map

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#logo {\n    height: 100%;\n    margin: 0;\n    font-size: 3rem;\n    display: inline-block;\n    color: #1de9b6;\n    vertical-align:middle;\n    text-align: center;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    text-decoration: none;\n    margin: 6px 10px;  \n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: white; \n    cursor: default; \n}\n\n#help-btn {\n    color: white;\n    position: absolute;\n    right: 0;\n    top: 2.5%;\n    /* border: 1px solid white; */\n}\n\n@keyframes spaceboots {\n\t0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }\n\t10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }\n\t20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }\n\t30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }\n\t40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }\n\t50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }\n\t60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }\n\t70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }\n\t80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }\n\t90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }\n\t100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@-webkit-keyframes spaceboots {\n\t0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }\n\t10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }\n\t20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }\n\t30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }\n\t40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }\n\t50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }\n\t60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }\n\t70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }\n\t80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }\n\t90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }\n\t100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }\n}\n.shake:hover,\n.shake:focus {\n\tanimation-name: spaceboots;\n\t-webkit-animation-name: spaceboots;\n\tanimation-duration: 0.8s;\n\t-webkit-animation-duration: 0.8s;\n\ttransform-origin:50% 50%;\n\t-webkit-transform-origin:50% 50%;\n\tanimation-iteration-count: infinite;\n\t-webkit-animation-iteration-count: infinite;\n\tanimation-timing-function: linear;\n\t-webkit-animation-timing-function: linear;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 id=\"logo\" class=\"shake\">\n  Compilerly\n</h2>\n<a class=\"waves-effect waves-teal btn-flat\" id=\"help-btn\" (click)=\"showHelp()\">Help</a>\n\n<div class=\"modal modal-fixed-footer\" [style.display]=\"helpDisplay\" style=\"z-index: 10 !important;\">\n  <div class=\"modal-content\">\n    <h4>Help</h4>\n    <p>A bunch of text</p>\n  </div>\n  <div class=\"modal-footer\">\n    <a class=\"modal-action modal-close waves-effect waves-green btn-flat \" (click)=\"hideHelp()\">OK</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.helpDisplay = 'none';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent.prototype.showHelp = function () {
        this.helpDisplay = 'block';
    };
    ToolbarComponent.prototype.hideHelp = function () {
        this.helpDisplay = 'none';
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/toolbar/toolbar.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map