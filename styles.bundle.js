webpackJsonp([2,4],{

/***/ 190:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(457);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(471)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../node_modules/postcss-loader/index.js!../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(190)();
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* CUSTOM h sizes */\nhtml {\n  /* Scroll bar remains in place, prevents content jumping left */\n  overflow-y: scroll; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0; }\n\nh1,\nh2 {\n  font-size: 3rem;\n  line-height: 3rem; }\n\nh3,\nh4 {\n  font-size: 2rem;\n  line-height: 2rem; }\n\nh5,\nh6 {\n  font-size: 1rem;\n  line-height: 1rem; }\n\nhr {\n  margin: 2rem 0;\n  height: 0rem;\n  border: 0; }\n\nhr:after {\n  display: block;\n  content: ' ';\n  height: 2px;\n  width: 100%;\n  background: #EEE; }\n\nbutton {\n  padding: 10px;\n  border: 0;\n  outline: 1px solid #DDD;\n  background: #EEE;\n  cursor: pointer;\n  font-weight: bold; }\n\ninput {\n  box-sizing: border-box;\n  padding-left: 0.4rem;\n  padding-right: 0.4rem; }\n\ntd,\nth {\n  box-sizing: border-box; }\n\n/*\n0 \n1 --\n2 -\n3\n4 --\n5 -\n6\n7 --\n8 -\n9\nA --\nB -\nC \nD --\nE -\nF\n*/\n#people header {\n  background: #FFF;\n  overflow: hidden;\n  position: relative;\n  border-bottom: 0.2rem solid #992929; }\n  #people header,\n  #people header th {\n    height: 3.5rem; }\n  #people header th .grp {\n    height: 100%; }\n  #people header .search {\n    display: block;\n    background: #FF4444;\n    color: white; }\n  #people header input,\n  #people header button {\n    height: 100%;\n    width: 100%;\n    outline: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    border: 0; }\n\n#people [role=\"radiogroup\"] input,\n#people [role=\"radiogroup\"] button {\n  text-align: left; }\n\n#people [role=\"search\"] {\n  background: #ff6969; }\n  #people [role=\"search\"] input {\n    background: #ffecec; }\n    #people [role=\"search\"] input::-webkit-input-placeholder {\n      color: #992929; }\n    #people [role=\"search\"] input::-moz-placeholder {\n      color: #992929; }\n    #people [role=\"search\"] input:-ms-input-placeholder {\n      color: #992929; }\n    #people [role=\"search\"] input::placeholder {\n      color: #992929; }\n  #people [role=\"search\"] .filter {\n    color: #ffecec;\n    background: transparent; }\n  #people [role=\"search\"] button {\n    color: #992929; }\n\n#people .toggle > [role=\"radiogroup\"],\n#people .toggle > [role=\"search\"] {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n#people [role=\"radiogroup\"],\n#people [role=\"search\"] {\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  -webkit-transition: -webkit-transform 200ms;\n  transition: -webkit-transform 200ms;\n  transition: transform 200ms;\n  transition: transform 200ms, -webkit-transform 200ms; }\n  #people [role=\"radiogroup\"] th:last-child > button,\n  #people [role=\"search\"] th:last-child > button {\n    width: 3.5rem;\n    position: absolute;\n    top: 0;\n    right: 0;\n    text-align: center; }\n\n#people header th:last-child,\n#people [role=\"table\"] td:last-child {\n  width: 7rem;\n  padding-right: 4rem; }\n\n#friends {\n  margin: 0 -1rem;\n  position: relative; }\n  #friends > div {\n    position: relative;\n    float: left;\n    width: 20%;\n    margin: 0 0 4rem;\n    background-size: cover;\n    background-position: center center; }\n    #friends > div:before {\n      content: '';\n      float: left;\n      padding-top: 100%; }\n    #friends > div:after {\n      content: '';\n      height: 100%;\n      width: 100%;\n      box-sizing: border-box;\n      position: absolute;\n      border: 1rem solid white; }\n    #friends > div > div {\n      border: 1rem solid transparent; }\n    #friends > div p {\n      background: white;\n      position: absolute;\n      padding: 0 1rem;\n      width: 100%;\n      box-sizing: border-box;\n      bottom: -4rem;\n      overflow: hidden; }\n      #friends > div p span {\n        float: left;\n        width: 0; }\n\n#crumbs {\n  position: absolute;\n  margin-top: -5rem; }\n\n@media only screen and (max-width: 480px) {\n  #friends > div {\n    width: 33.33%; } }\n\n.wrp {\n  padding: 4rem; }\n\n.edge {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 0 20px; }\n\n/* set root font size */\nbody {\n  margin: 6rem 0; }\n\nhtml,\nbody,\n.material-icons,\n.ft0 {\n  font-size: 14px;\n  line-height: 1.4rem; }\n\n.ft0 {\n  font-weight: normal; }\n\n.material-icons {\n  font-size: 18px;\n  width: 15px; }\n\n.float_title {\n  overflow: hidden; }\n\n.float_title > ._ {\n  float: left;\n  width: 0; }\n\nul {\n  padding-left: 0;\n  list-style-position: inside; }\n\n/* Suffixes \nXS,SM,MD,LG,XL\n*/\n.showMD,\n.showSM {\n  display: none; }\n\n@media only screen and (max-width: 992px) {\n  .bkLG- {\n    display: block; }\n  .bkLG- > div {\n    margin-bottom: 2rem; }\n  .bkLG- .vr {\n    height: 2px; } }\n\n@media only screen and (max-width: 768px) {\n  .bkMD- {\n    display: block; }\n  .bkMD- > div {\n    margin-bottom: 2rem; }\n  .bkMD- .vr {\n    height: 2px; }\n  .hideMD {\n    display: none; }\n  .showMD {\n    display: initial; } }\n\n@media only screen and (max-width: 480px) {\n  .bkSM- {\n    display: block; }\n  .bkSM- > div {\n    margin-bottom: 2rem; }\n  .bkSM- .vr {\n    height: 2px; }\n  table {\n    table-layout: fixed; }\n  .hideSM {\n    display: none; }\n  .showSM {\n    display: initial; }\n  #sticky-search th:last-child,\n  #sticky-body td:last-child {\n    width: 4rem; } }\n\ntable {\n  border-collapse: collapse;\n  table-layout: fixed;\n  width: 100%; }\n\ntd,\nth {\n  overflow: hidden;\n  white-space: nowrap;\n  /*line-height: 2rem;*/\n  padding: 0.4rem; }\n\ntd {\n  line-height: 3rem; }\n\ntr:nth-child(even) {\n  background: #EEE; }\n\ntr {\n  cursor: pointer; }\n\n/* Text colours */\n.tt-white {\n  color: white; }\n\n.tt-black {\n  color: black; }\n\n/* Text alignment */\n.tt-left {\n  text-align: left; }\n\n.tt-center {\n  text-align: center; }\n\n.tt-right {\n  text-align: right; }\n\n.tt-justify {\n  text-align: justify; }\n\n.tt-nowrap {\n  white-space: nowrap; }\n\n/* Text transformation */\n.tt-lowercase {\n  text-transform: lowercase; }\n\n.tt-uppercase {\n  text-transform: uppercase; }\n\n.tt-capitalize {\n  text-transform: capitalize; }\n\n/* Floats */\n.fl-left {\n  float: left !important; }\n\n.fl-right {\n  float: right !important; }\n\n/* Clearfix */\n.cf:before,\n.cf:after {\n  content: \".\";\n  display: block;\n  height: 0;\n  overflow: hidden; }\n\n.cf:after {\n  clear: both; }\n\n.cf {\n  zoom: 1;\n  /* IE < 8 */\n  clear: both; }\n\n/* Visibility */\n.show {\n  display: block !important; }\n\n.hide {\n  display: none !important; }\n\n/* Layout */\n.grp {\n  position: relative; }\n\n.grp button {\n  width: 100%; }\n\n.grp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 -1rem 2rem; }\n\n.grp > ._,\n.grp > div {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  margin: 0 1rem; }\n\n.grp > .vr {\n  display: block;\n  padding: 0 1px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0;\n          flex: 0; }\n\n.grp.left- {\n  float: left; }\n\n.grp.right- {\n  float: right; }\n\n.grp.pd0- {\n  margin: 0; }\n\n.grp.pd0- > div {\n  margin: 0; }\n\n/* PROJECT */\n.mg0 {\n  margin: 0; }\n\n.pd {\n  padding: 2rem; }\n\n.spc {\n  margin-bottom: 2rem; }\n\n.bg {\n  background-color: #EEE; }\n\n.bg_ > div {\n  background-color: #EEE; }\n\n/*\nButtons\nRESOURCE https://material.io/icons/\n*/\n.icn {\n  white-space: nowrap; }\n\n.icn span:first-child,\n.icn i:first-child {\n  margin-right: 0.2rem; }\n\nbutton > span,\nbutton > .material-icons,\nbutton > i {\n  line-height: 0;\n  display: inline-block;\n  vertical-align: middle; }\n\n.icn.glass- {\n  outline: 0;\n  padding-left: 0;\n  padding-right: 0;\n  background: transparent; }\n\n.nav-.icn {\n  border-bottom: 0.2rem #FF4444 solid; }\n  .nav-.icn i {\n    color: #FF4444; }\n\n.colA {\n  background: #FF4444; }\n\n/*.<i class=\"material-icons\">&#xE835;</i>*/\n.material-icons:after {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: inherit;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n  display: inline-block;\n  white-space: nowrap;\n  word-wrap: normal;\n  direction: ltr;\n  -webkit-font-feature-settings: 'liga';\n  -webkit-font-smoothing: antialiased; }\n\n.icn.check- .material-icons:after {\n  content: '\\E835'; }\n\n.icn.check-[aria-checked=\"true\"] .material-icons:after {\n  content: '\\E834'; }\n", ""]);

// exports


/***/ }),

/***/ 471:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[475]);
//# sourceMappingURL=styles.bundle.js.map