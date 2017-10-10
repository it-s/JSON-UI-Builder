"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},UIBuilderHelpers=function(){function e(){classCallCheck(this,e)}return createClass(e,null,[{key:"isDefined",value:function(e){return void 0!=e}},{key:"isObject",value:function(e){return this.isDefined(e)&&"object"==(void 0===e?"undefined":_typeof(e))}},{key:"isArray",value:function(e){return this.isDefined(e)&&"object"==(void 0===e?"undefined":_typeof(e))&&void 0!==e.length}},{key:"isString",value:function(e){return this.isDefined(e)&&"string"==typeof e}},{key:"printf",value:function(e,t){var n=/\{\{(\w+)\}\}/g,r=e,i=void 0,s=void 0,o=void 0;if(!this.isObject(t))return e;for(;null!==(o=n.exec(e));)i=o[0],s=t[o[1]],this.isDefined(s)&&(r=r.replace(i,s));return r}}]),e}(),UIComponent=function(){function e(t,n,r){classCallCheck(this,e),t&&(this.tg=t),n&&UIBuilderHelpers.isObject(n)&&this.map(n),r&&(this.cn=r)}return createClass(e,[{key:"map",value:function(t){if(t)for(var n in t)this[e.attributes[n]]=t[n]}}]),e}();UIComponent.SVG_NS_ATTR="http://www.w3.org/2000/svg",UIComponent.attributes={id:"id",ns:"ns",className:"cl",style:"st",attributes:"ar",html:"tx",data:"dt",scope:"sc",actions:"ac"};var SVGUIComponent=function(e){function t(){var e,n,r,i;classCallCheck(this,t);for(var s=arguments.length,o=Array(s),u=0;u<s;u++)o[u]=arguments[u];return n=r=possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.ns=UIComponent.SVG_SIGNATURE,i=n,possibleConstructorReturn(r,i)}return inherits(t,UIComponent),t}(),UIBuilder=function(){function e(t){classCallCheck(this,e),this._defaults={baseName:"UI",autoID:!1,nestedStyles:!1},this._attrs={tg:"div",id:"",ns:!1,cl:[],st:{},ar:{},dt:{},tx:"",ac:{},sc:{}},this._style=[],Object.assign(this,this._defaults,t),this._elementCount=this._lvl=0}return createClass(e,[{key:"_parseStyle",value:function(e,t){}},{key:"_buildElement",value:function(e,t){try{var n=Object.assign({},this._attrs,e);this.autoID&&""===n.id&&(n.id=this.getNextID()),UIBuilderHelpers.isString(e)&&(n.tg="span",n.tx=e.valueOf());var r=n.ns?document.createElementNS(n.ns,n.tg):document.createElement(n.tg);return""!==n.id&&(r.id=n.id),function(e){return UIBuilderHelpers.isObject(e)?e:e.split(" ")}(n.cl).forEach(function(e){return r.classList.add(e)}),Object.keys(n.ar).forEach(function(e){return r.setAttribute(e,n.ar[e])}),Object.keys(n.dt).forEach(function(e){return r.setAttribute("data-"+e,n.ar[e])}),Object.assign(r.style,n.st),Object.keys(n.ac).forEach(function(e){return r.addEventListener(e,n.ac[e].bind(n.sc))}),r.innerHTML=UIBuilderHelpers.printf(n.tx,n.sc),t&&UIBuilderHelpers.isObject(t)&&t.appendChild(r),r}catch(e){throw new Error("UIBuilder._buildElement internal error. Details: "+e)}}},{key:"_build",value:function(e,t){var n=this,r=void 0,i=function(e){var i=e.cn;r=n._buildElement(e,t),i&&UIBuilderHelpers.isDefined(i)&&n._build(i,r)}.bind(this);this._lvl++;try{switch(!0){case UIBuilderHelpers.isArray(e):for(var s=0;s<e.length;s++)i(e[s]);break;case UIBuilderHelpers.isObject(e):i(e)}return this._lvl--,t||r||new HTMLElement}catch(e){throw new Error("UIBuilder._build internal error. Details: "+e)}}},{key:"getElementCount",value:function(){return this._elementCount}},{key:"getNextID",value:function(){return this.baseName+"-"+this._elementCount++}},{key:"getBaseName",value:function(){return this.baseName}},{key:"build",value:function(e,t){var n=this;if(!UIBuilderHelpers.isObject(e))throw new TypeError("UIBuilder.build(spec, parent): spec must be an array");return this._lvl=0,new Promise(function(r,i){try{r(n._build(e,t))}catch(e){i(e)}})}}]),e}();exports.UIComponent=UIComponent,exports.SVGUIComponent=SVGUIComponent,exports.UIBuilder=UIBuilder;
//# sourceMappingURL=uibuilder.js.map
