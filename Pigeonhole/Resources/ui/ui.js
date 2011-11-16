(function() {
	ph.ui = {};
	
	var device = {
			density: Ti.Platform.displayCaps.density,
			platformHeight: Ti.Platform.displayCaps.platformHeight,
			platformWidth: Ti.Platform.displayCaps.platformWidth,
			dpi: Ti.Platform.displayCaps.dpi
		};
	
		ph.ui.device  = device;
		
	
	ph.ui.tabImage = function(_args) { // makes android icons look better by adjusting icon size.
		var img = _args;
		if (ph.osname === 'android' && ph.ui.device.platformHeight > 400){
			var retImg = img + '@2x.png';
		} else {
			retImg = img + '.png';
		}
		return retImg;
	}

})();

//Include major UI components and styling properties
// TODO the includes here should be checked on demand - sort.
Ti.include(
	'/ui/styles.js',
	'/ui/Dashboard_FUI.js',
	'/ui/Dashboard.js',
	'/ui/Faves.js',
	'/ui/Tags.js',
	'/ui/About.js',
	'/ui/MainWindow.js',
	'/ui/Settings.js'
);