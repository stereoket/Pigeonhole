(function() {
	var platformWidth = Ti.Platform.displayCaps.platformWidth;
	
	Titanium.UI.iPhone.statusBarStyle= Titanium.UI.iPhone.StatusBar.OPAQUE_BLACK;
	
	ph.ui.createAppTabGroup= function(_args) {
		var tabGroup = Ti.UI.createTabGroup(_args);
		return 	tabGroup;		
	};
	
	ph.ui.createAppTab= function(_args) {
		var tab = Ti.UI.createTab(ph.combine(_args, $$.Tab));
		return 	tab;		
	};
	
	//create the main application window
	ph.ui.createAppWindow = function(_args) {	
		var win = Ti.UI.createWindow(ph.combine(_args, $$.Window));
		return win;
	}
	ph.ui.createButton = function(_args) {
		var button = Ti.UI.createButton(ph.combine(_args, $$.Button));
		return button;
	};

	ph.app.MainPigeon = ph.ui.createAppWindow({
		title: 'PigeonHole', 
		titleid: 'winPigeonHole', 
		orientationModes: [Titanium.UI.PORTRAIT]
	});
	
	// Create New tab group before adding individual tabs
	ph.ui.tabGroup = Ti.UI.createTabGroup({
		id: 'firstTabGroup', 
		tabBarVisible: false, 
		bottom: -50	
	});
	try {
	// Create the individual tabs with titles and icons
	var tab1 = ph.ui.createAppTab({
	    window:ph.app.dashboard,
		id:'winSched',
		icon:'images/tabgroups/' +ph.ui.tabImage('dfd'),
		title:"Dashboard"
	});
	var tab2 = ph.ui.createAppTab({
		id:'winVen',
		icon:'images/tabgroups/' +ph.ui.tabImage('dfdf') ,
		title:"Tags",
	    window:ph.app.tags
	});

	var tab3 = ph.ui.createAppTab({
		id:'winNews',
		icon:'images/tabgroups/' +ph.ui.tabImage('dfd'),
		title:"Faves",
	    window:ph.app.faves
	});

	var tab4 = ph.ui.createAppTab({
		id:'winFav',
		icon:'images/tabgroups/' +ph.ui.tabImage('dfd'),
		title:"About",
	    window:ph.app.about
	});
	var tab5 = ph.ui.createAppTab({
		id:'winAbout',
		icon:'images/tabgroups/' +ph.ui.tabImage('sdfds'),
		title:"Settings",
	    window:ph.app.settings
	});
	} catch (e) {
	Ti.API.error(e.message);


	}
	ph.ui.tabGroup.addTab(tab1);
	ph.ui.tabGroup.addTab(tab2);
	ph.ui.tabGroup.addTab(tab3);
	ph.ui.tabGroup.addTab(tab4);
	ph.ui.tabGroup.addTab(tab5);

	ph.ui.tabGroup.addEventListener('focus', function(e)
		{
		// Ti.API.info(e.index);


		ph.ui.tabGroup._activeTab = e.tab;
		    ph.ui.tabGroup._activeTabIndex = e.index;
		    if ( ph.ui.tabGroup._activeTabIndex == -1) {return;}
		    // Ti.API.info(ph.ui.tabGroup._activeTabIndex.id);
		    // Ti.API.info(ph.ui.tabGroup._activeTab.title);

		    // create property in Ti namespace
		    Ti.API._activeTab = ph.ui.tabGroup._activeTab;
		    Ti.API.info(Ti.API._activeTab.title);

		switch(e.index){
			case 0:
			ph.ui.festivalCategories();
			break;
			case 1:
			ph.ui.venuePage();
			break;
			case 2:
	
			ph.ui.winLatest();
	
			break;
			case 3:
			if(ph.ui.osname !== 'android'){
			ph.ui.favourites();
			} else {
				ph.ui.aboutPage();
			}
			break;
			case 4:
			ph.ui.aboutPage();
			break;
		}
	});
	ph.ui.toggleTabGroup = function(tabgroup){
		// Ti.API.debug(tabgroup + ' is being toggled');
		// 	Ti.API.debug(tabgroup.activeTab);
		setTimeout(function(e){
		    // create variable to keep track of visibility
		    if (tabgroup.tabBarVisible === true) {
		        tabgroup.animate({bottom:-50,duration:500});
		        tabgroup.tabBarVisible = false;
				tabgroup.open();
				// Ti.API.debug('Tab Group position: '+tabgroup.bottom);

		    } else {

		        tabgroup.animate({bottom:0,duration:500});
		        tabgroup.tabBarVisible = true;
				// Ti.API.debug('Tab Group position: '+tabgroup.bottom);
		    }

		}, 1000);
	};
	// Load Splash page with animation and load tabgroup
	ph.ui.tabGroup.open();
})();