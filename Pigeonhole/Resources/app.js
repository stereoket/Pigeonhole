//All application functionality is namespaced here
var ph = {};
(function() {
	//application state variables are held in this namespace.  
	//Like the current app window, for instance, which is created in app.js
	ph.app = {};

	//Extend an object with the properties from another 
	//(thanks Dojo - http://docs.dojocampus.org/dojo/mixin)
	var empty = {};
	function mixin(/*Object*/ target, /*Object*/ source){
		var name, s, i;
		for(name in source){
			s = source[name];
			if(!(name in target) || (target[name] !== s && (!(name in empty) || empty[name] !== s))){
				target[name] = s;
			}
		};
		return target; // Object
	};
	ph.mixin = function(/*Object*/ obj, /*Object...*/ props){
		if(!obj){ obj = {}; }
		for(var i=1, l=arguments.length; i<l; i++){
			mixin(obj, arguments[i]);
		}
		return obj; // Object
	};

	//create a new object, combining the properties of the passed objects with the last arguments having
	//priority over the first ones
	ph.combine = function(/*Object*/ obj, /*Object...*/ props) {
		var newObj = {};
		for(var i=0, l=arguments.length; i<l; i++){
			mixin(newObj, arguments[i]);
		}
		return newObj;
	};

	//OS, Locale, and Density specific branching helpers adapted from the Helium library
	//for Titanium: http://github.com/kwhinnery/Helium
	var locale = Ti.Platform.locale;
	var osname = Ti.Platform.osname;
	ph.osname = osname;

	/*
		Branching logic based on locale
	*/
	ph.locale = function(/*Object*/ map) {
		var def = map.def||null; //default function or value
		if (map[locale]) {
			if (typeof map[locale] == 'function') { return map[locale](); }
			else { return map[locale]; }
		}
		else {
			if (typeof def == 'function') { return def(); }
			else { return def; }
		}
	};

	/*
		Branching logic based on OS
	*/
	ph.os = function(/*Object*/ map) {
		var def = map.def||null; //default function or value
		if (typeof map[osname] != 'undefined') {
			if (typeof map[osname] == 'function') { return map[osname](); }
			else { return map[osname]; }
		}
		else {
			if (typeof def == 'function') { return def(); }
			else { return def; }
		}
	};
})();

//Include additional namespaces
Ti.include(
	'/ui/ui.js',
	'/model/model.js',
	'/config/config.js'
);
<<<<<<< HEAD
// TODO Could use the splash screen fader
// ph.ui.createSplashView(); 
=======

Ti.Box = require("ti.box");
Ti.Box.apiKey ="7p7i0mc8pij6qktyvq756frr6cfi3rg1";
>>>>>>> cfa0f19ce10bc75b0979dd43e9453524d2eec196
