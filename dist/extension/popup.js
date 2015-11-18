/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(22);


/***/ },

/***/ 22:
/***/ function(module, exports) {

	'use strict';

	var label = document.querySelector("label[for='status']");
	var checkbox = document.getElementById('status');

	label.addEventListener('click', function () {
	  chrome.tabs.query({ active: true,
	    currentWindow: true }, function (tabs) {
	    chrome.tabs.sendMessage(tabs[0].id, {
	      action: "toggle",
	      content: checkbox.checked
	    }, function (response) {
	      console.log(response);
	      checkbox.checked = response.content;
	    });
	  });
	});

	chrome.runtime.onMessage.addListener(function (msg) {
	  if (msg.action === 'status') checkbox.checked = msg.content;
	});

	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, { action: "whatsup" }, function (response) {
	    checkbox.checked = response.content;
	  });
	});

/***/ }

/******/ });