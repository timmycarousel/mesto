(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.data,r=t.userId,o=t.templateSelector,i=t.handleCardClick,u=t.handleDeleteConfirm,l=t.handleLike,c=t.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=n,this._name=n.name,this._link=n.link,this._alt=n.name,this._cardId=n._id,this._userId=r,this._templateSelector=o,this._handleCardClick=i,this._ownerId=n.owner._id,this._likes=n.likes,this._handleDeleteConfirm=u,this._handleLike=l,this._deleteLike=c}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;return this._element=this._getTemplate(),this._elementImg=this._element.querySelector(".element__img"),this._likeButton=this._element.querySelector(".element__like-button"),this._likeCount=this._element.querySelector(".element__counter-like"),this._likeCount.textContent=this._likes.length,this._elementImg.src=this._link,this._elementImg.alt=this._name,this._buttonTrash=this._element.querySelector(".element__trash"),this._element.querySelector(".element__text").textContent=this._name,this._data.likes.forEach((function(t){t._id===e._userId?e._likeButton.classList.add("element__like-button_active"):e._likeButton.classList.remove("element__like-button_active")})),this._setEventListener(),this._hideDeleteButton(),this._element}},{key:"_openImgPopup",value:function(){this._handleCardClick(this._link,this._name)}},{key:"setLikes",value:function(){this._likeCount.textContent=this._data.likes.length}},{key:"setNewLikes",value:function(e){this._data.likes=e.likes}},{key:"removeCard",value:function(){this._element.remove(),this._element=null}},{key:"getId",value:function(){return this._cardId}},{key:"_hideDeleteButton",value:function(){this._ownerId!==this._userId&&(this._buttonTrash.style.display="none")}},{key:"_setEventListener",value:function(){var e=this;this._element.querySelector(".element__trash").addEventListener("click",(function(){e._handleDeleteConfirm()})),this._likeButton.addEventListener("click",(function(){var t=e._data.likes.some((function(t){return t._id===e._userId||t._id===e._userId&&void 0}));0===e._data.likes.length?e._handleLike(e._cardId,e._likeCount):t?e._deleteLike(e._cardId,e._likeCount):e._handleLike(e._cardId,e._likeCount)})),this._element.querySelector(".element__img").addEventListener("click",(function(){e._openImgPopup()}))}},{key:"toggleLike",value:function(){this._likeButton.classList.toggle("element__like-button_active")}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._submitButton=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){var e=this;this._formElement.addEventListener("submit",this._disableSubmit),this._formElement.addEventListener("input",(function(){e._toggleButton()})),this._toggleButton(),this._formElement.addEventListener("reset",(function(){setTimeout((function(){e._toggleButton()}),0)})),this._addInputListeners()}},{key:"_disableSubmit",value:function(e){e.preventDefault()}},{key:"_toggleButton",value:function(){var e=this._formElement.checkValidity();this._submitButton.disabled=!e,this._submitButton.classList.toggle(this._inactiveButtonClass,!e)}},{key:"_addInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._handleFormInput(t)}))}))}},{key:"_handleFormInput",value:function(e){var t=e.target,n=t.id,r=this._formElement.querySelector("#".concat(n,"-error"));t.validity.valid?(t.classList.remove(this._inputErrorClass),r.textContent=" "):(t.classList.add(this._inputErrorClass),r.textContent=t.validationMessage)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=o,this._container=document.querySelector(n),this._renderedItems=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"prependItem",value:function(e){this._container.prepend(e)}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,f(r.key),r)}}function f(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}var p=function(){function e(t){var n,r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,o=function(e){"Escape"===e.key&&i.close()},(r=f(r="_handleEscClose"))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this._selector=t,this._container=document.querySelector(t),this._closeButton=this._container.querySelector(".popup__close-icon")}var t,n;return t=e,(n=[{key:"open",value:function(){this._container.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._container.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._container.addEventListener("click",(function(t){e._clickOverlayClosePopup(t)})),this._closeButton.addEventListener("click",(function(){e.close()}))}},{key:"_clickOverlayClosePopup",value:function(e){e.target===e.currentTarget&&this.close()}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImg=t._container.querySelector(".popup__img"),t._popupHeading=t._container.querySelector(".popup__heading"),t}return t=u,(n=[{key:"open",value:function(e,t){d(v(u.prototype),"open",this).call(this),this._popupImg.src=e,this._popupImg.alt=t,this._popupHeading.textContent=t}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===_(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===_(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._form=t._container.querySelector(".popup__field"),t._handleFormSubmit=r,t._inputList=t._form.querySelectorAll(".field"),t}return t=u,(n=[{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"close",value:function(){S(w(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._inputList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;S(w(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(e._getInputValues()),t.preventDefault(),e.close()}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._info=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._info.textContent=e.info}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,info:this._info.textContent}}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C={formSelector:".popup__field",inputSelector:".field",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"field_type_error",errorClass:"popup__span_error_visible"};function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t.url,this.headers=t.headers}var t,n;return t=e,(n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка:"+e.status)}},{key:"getUserData",value:function(){var e=this;return fetch(this.url+"/users/me",{headers:this.headers}).then((function(t){return e._handleResponse(t)}))}},{key:"getCardsFromServer",value:function(){var e=this;return fetch(this.url+"/cards",{headers:this.headers}).then((function(t){return e._handleResponse(t)}))}},{key:"patchUserData",value:function(e){var t=this;return fetch(this.url+"/users/me",{method:"PATCH",headers:this.headers,body:JSON.stringify({about:e.info,name:e.name})}).then((function(e){return t._handleResponse(e)}))}},{key:"changeAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse())}},{key:"addNewCard",value:function(e){var t=this;return fetch(this.url+"/cards",{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){return fetch(this.url+"/cards/"+e,{method:"DELETE",headers:this.headers}).then(this._handleResponse)}},{key:"addLike",value:function(e){var t=this;return fetch(this.url+"/cards/"+e+"/likes",{method:"PUT",headers:this.headers}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch(this.url+"/cards/"+e+"/likes",{method:"DELETE",headers:this.headers}).then((function(e){return t._handleResponse(e)}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function R(e){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==R(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function D(e,t){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},D(e,t)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var F,V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&D(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===R(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._form=t._container.querySelector(".popup__field"),t}return t=u,(n=[{key:"submitDeletion",value:function(e){this._handleFormSubmit=e}},{key:"close",value:function(){q(x(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListeners",value:function(){var e=this;q(x(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleFormSubmit(),t.preventDefault()}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(p),U=document.querySelector(".page"),N=U.querySelector(".profile__edit-button"),A=U.querySelector("#nameValue"),H=U.querySelector("#infoValue"),J=U.querySelector(".profile__add-button"),z=U.querySelectorAll(".popup__field"),M=new T({url:"https://nomoreparties.co/v1/cohort-64",headers:{authorization:"a0d61060-a9a4-4380-95cd-b58bf32a5ce6","Content-Type":"application/json"}});M.getUserData().then((function(e){G.setUserInfo({name:e.name,info:e.about}),F=e._id})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}));var G=new P(".profile-info__name",".profile-info__text"),K=new E({popupSelector:".popup_type_user",handleFormSubmit:function(e){M.patchUserData(e).then((function(e){G.setUserInfo({info:e.about,name:e.name})})).then(K.close()).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}))}});K.setEventListeners();var Q=new E({popupSelector:".popup_type_card",handleFormSubmit:function(e){M.addNewCard(e).then((function(e){var t=new c({items:e,renderer:function(e){t.addItem(X(e,Y))}},".elements"),n=X(e,Y);return t.prependItem(n),X({_id:e._id,name:e.name,link:e.link,likes:e.likes},Y)})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}))}});Q.setEventListeners(),J.addEventListener("click",(function(){Q.open()}));var W=new V(".popup_type_delete");function X(e,t){var r=new n({data:e,userId:F,templateSelector:".card-template",handleCardClick:t,handleDeleteConfirm:function(){W.open(),W.submitDeletion((function(){M.deleteCard(r.getId()).then((function(){r.removeCard(),W.close()})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}))}))},handleLike:function(){M.addLike(r.getId()).then((function(e){r.setNewLikes(e)})).then((function(){return r.toggleLike()})).then((function(){r.setLikes()})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}))},deleteLike:function(){M.deleteLike(r.getId()).then((function(e){r.setNewLikes(e)})).then((function(){return r.toggleLike()})).then((function(){r.setLikes()})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){}))}});return r.generateCard()}W.setEventListeners(),M.getCardsFromServer().then((function(e){var t=new c({items:e,renderer:function(e){t.addItem(X(e,Y))}},".elements");t.renderItems()})).catch((function(e){console.log("Error: ".concat(e))})).finally((function(){})),N.addEventListener("click",(function(){var e=G.getUserInfo(),t=e.name,n=e.info;A.value=t,H.value=n,K.open()})),z.forEach((function(e){new i(C,e).enableValidation()}));var Y=function(e,t){Z.open(e,t)},Z=new b(".popup_type_img");Z.setEventListeners()})();