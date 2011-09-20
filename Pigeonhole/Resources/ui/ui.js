(function() {
	ph.ui = {};
		
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
Ti.include(
	'/ui/styles.js',
	'/ui/MainWindow.js'
);