// App configs
ph.config = {
	version: '0.1.1',
	copyright: 'Team Spirit',
	os: Ti.Platform.osname
};


Ti.App.Properties.setString("version", ph.config.version);
Ti.App.Properties.setString("copyright", ph.config.copyright);
Ti.App.Properties.setString("name",ph.config.festivalName);