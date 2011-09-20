(function() {	
	//Globally available theme object to hold theme colors/constants
	ph.ui.theme = {
		textColor:'#ffffff',
		grayTextColor:'#888888',
		headerColor:'#000',
		lightBlue:'#006cb1',
		darkBlue:'#0093AB',
		backgroundColor: '#000',
		selectedTab: '#FFA531', //TODO  when the button is depressed, should be added to style guides.
		backgroundTabColor : '#FFA531',
		fontFamily: ph.os({
			iphone:'Helvetica Neue',
			android:'Droid Sans'
		})
	};

	//All shared property sets are declared here.
	ph.ui.properties = {
		//grab platform dimensions only once to save a trip over the bridge
		platformWidth: Ti.Platform.displayCaps.platformWidth,
		platformHeight: Ti.Platform.displayCaps.platformHeight,

		//we use these for default components
		Button: {
			backgroundImage:'none',
			height:55,
			width:250,
			color:'#000',
			borderRadius: 7,
			backgroundColor: '#fff',
			font: {
				fontSize:18,
				fontWeight:'bold'
			}
		},
		Label: {
			color:ph.ui.theme.textColor,
			font: {
				fontFamily:ph.ui.theme.fontFamily,
				fontSize:12
			},
			height:'auto'
		},
		Window: {
			backgroundImage: 'images/background.png',
			backgroundColor: ph.ui.theme.backgroundColor,
			barColor: '#000',
			touchEnabled:true,
			softInputMode:(Ti.UI.Android) ? Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE : ''
		},
		Tab: {
			backgroundColor: ph.ui.theme.backgroundTabColor,
			backgroundSelectedColor: ph.ui.theme.selectedTab	
		},
		TableView: {
			// backgroundImage:'images/sflWindowBg.png',
			separatorStyle:Ti.UI.iPhone.TableViewSeparatorStyle.NONE
		},
		TableViewRow: {
			// backgroundImage:'images/tweet_bg.png',
			selectedColor: ph.ui.theme.darkBlue, //I know, this is dumb, but it's currently inconsistent x-platform
			backgroundSelectedColor: ph.ui.theme.darkBlue,
			//height:110,
			className:'tvRow'
		},
		topRightButton: {
			top:5,
			right:5,
			height:30,
			width:38
		},
		headerText: {
			top:8,
			height:'auto',
			textAlign:'center',
			color:ph.ui.theme.headerColor,
			font: {
				fontFamily:ph.ui.theme.fontFamily,
				fontSize:18,
				fontWeight:'bold'
			}
		},
		headerView: {
			backgroundImage:'images/header_bg.png',
			height:40
		},
		smallText: {
			color:ph.ui.theme.grayTextColor,
			font: {
				fontFamily:ph.ui.theme.fontFamily,
				fontSize:10
			},
			height:'auto'
		},

	};
})();

//global shortcut for UI properties, since these get used A LOT. polluting the global
//namespace, but for a good cause (saving keystrokes)
var $$ = ph.ui.properties;