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
/******/ 	__webpack_require__.p = "./";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	/*
	* @Author: Administrator
	* @Date:   2017-08-15 15:50:25
	 * @Last Modified by: mikey.zhaopeng
	 * @Last Modified time: 2017-10-26 16:04:50
	*/
	function render(data) {
	    var liTemp = '';
	    var ulTemp = '';
	    for (var i = data.length - 1; i > -1; i--) {
	        liTemp = '';
	        for (var j = 0; j < data[i].link.length; j++) {
	            liTemp += '<li class="bgPic"><a data-fancybox="images" data-caption="' + data[i].text[j] + '" href="http://ountlr0uu.bkt.clouddn.com/' + data[i].link[j] + '"><img class="lazy" src="http://ountlr0uu.bkt.clouddn.com/' + data[i].link[j] + '"/></a></li>';
	        }
	        ulTemp += '<section class="archives album"><h1 class="year">' + data[i].date + '</h1><ul class="img-box-ul">' + liTemp + '</ul></section>';
	    }
	    document.querySelector('.instagram').innerHTML = '<div class="photos">' + ulTemp + '</div>' + '<p>呀，已经到底了！</p>';
	}
	function errSet() {
	    setTimeout(function () {
	        $('.bgPic').each(function () {
	            $(this).css("background", "url(../assets/img/loadErr.png) no-repeat center");
	        });
	    }, 6000);
	}
	function init() {
	    $.getJSON("./list.json", function (data) {
	        render(data);
	    });
	    errSet();
	}
	init();
	window.onload = function () {
	    $("[data-fancybox]").fancybox({ infobar: true, buttons: ['fullScreen', 'thumbs'], idleTime: 4 });
	};

/***/ })
/******/ ]);