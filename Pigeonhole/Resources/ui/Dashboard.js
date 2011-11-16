(function(){
	ph.ui.dashboard = {};
	ph.ui.dashboard.stats = {};
	
	ph.ui.showDashboard = function(){
	if(ph.ui.activePage === 'dashboard') return false;
	ph.ui.activePage = 'dashboard';
		// create background colour
	// Create a second chart view to contain the pie chart
// var chart2 = charts.createChart({
	// top:10,
	// left:10,
	// right: 10,
// 	
	// height:100,
	// orientationModes: [
		// Ti.UI.PORTRAIT
	// ],
// 
    // // Configure the title for the chart
	// title: {
		// text:'Pie Chart',
		// color: '#900',
		// font: {fontSize:18, fontWeight:'bold', fontStyle:'italic' },
		// location: charts.LOCATION_TOP,
		// offset: { x: 0.0, y: 26.0 }
	// },
// 	
	// // Configure the external padding -- the area between the view edge and the plot area frame
	// padding: {
		// top:52,
		// left:20,
		// right:20,
		// bottom:20
	// },
// 	
	// // Configure the plot area -- the area where the chart is drawn
	// plotArea: {
		// borderRadius: 5.0,
		// borderColor: '#48C',
		// borderWidth: 2.0,
		// backgroundGradient: {
			// startColor: '#00F',
			// endColor: '#004',
			// angle: -45.0
		// }
	// },
// 	
	// // Use the dark-gradient theme
	// theme: charts.THEME_SLATE,
	// // Disable user interaction -- defaults to true
	// userInteraction: true
// });
// 		
	// ph.app.dashboard.add(chart2);
// 	
	// var pie1 = chart2.createPiePlot(
	// {
	// name: 'pie chart',
	// lineColor: 'yellow',
	// lineWidth: 1.0,
	// lineOpacity: 0.4,
	// startAngle: 0.0,
	// direction: charts.DIRECTION_COUNTERCLOCKWISE,
	// radius:60.0,
	// explodeOffset: 10.0,
	// labels:{
		// offset: 1.0,
		// angle: 0.0,
		// color: 'white',
		// font: { fontFamily:'Helvetica', fontSize:12 }		
	// },
	// data: [ 1030,200,50 ]
// });
// 
// pie1.addEventListener('dataClicked',function(e) {
	// Ti.API.info('pie ' + e.name + ' clicked: index= ' + e.index + ' value= ' + e.value);
// 	
	// // Explode every pie slice that is not the first slice
	// if (e.index > 0) {
		// pie1.explode = [ e.index ];
	// } else {
		// // Clear all of the exploded slices
		// pie1.explode = null;
// 		
		// // Change the data for the pie plot. In this case, set the data to an array
		// // of mixed values (dictionary and flot values). Since a dictionary is included
		// // as a data item we have to set the 'dataKey' property of the pie chart
		// pie1.dataKey = 'value';
		// pie1.data = [ 
			// { name: 'a', value:5.0 },
			// { name: 'b', value:17.0 },
			// { name: 'c', value:8.5 },
			// 9.2
			// ];
// 			
		// // Also, grow the pie size by 10 until it has a radius bigger than or equal to 80
		// if (pie1.radius < 80.0) {
			// pie1.radius = pie1.radius + 10;
		// }
	// }
// });
ph.ui.cacheData = ph.db.checkCache({apiName: 'verify_credentials'});
if(!ph.ui.cacheData){
	// check if stats exist.
ph.ui.twitter.init();
ph.ui.twitter.fetchProfile(ph.ui.addDashboardTweetData);
} else {
	ph.ui.addDashboardTweetData(JSON.parse(ph.ui.cacheData));
};


	
	}

ph.ui.addDashboardTweetData = function(rData){
	
	(!ph.ui.cacheData)? ph.db.insertJSON({response: JSON.stringify(rData), apiName: 'verify_credentials'}): ph.ui.cacheData = null;
	// check for local db stats
	ph.db.checkDashboardStats();
	
	
// 	
	// var tweetInfoView = Ti.UI.createView({
		// left: 10,
		// right: 10,
		// height: 250,
		// top: 100,
		// layout: 'horizontal'
	// });
// 	
	// var favCount = Ti.UI.createLabel({
		// text: rData.favourites_count,
		// minimumFontSize:24,
		// color:"#FFAA00",
		// textAlign:"center",
		// bottom:5,
		// height:20,
		// left:0,
		// width:110,
		// zIndex:10
	// });
// 	
	// Titanium.UI.createLabel({text:"3426"});
	// var screenName = Ti.UI.createLabel({
		// text: rData.screen_name,
		// width: 300,
		// height: 40
	// });
// 
	// var accountCreate = Ti.UI.createLabel({
		// text: rData.created_at,
		// width: 300,
		// height: 40
	// });
	// var statusesCount = Ti.UI.createLabel({
		// text: rData.statuses_count,
		// width: 300,
		// height: 40
	// });
// 	
// 	
	// tweetInfoView.add(favCount);
	// tweetInfoView.add(screenName);
	// tweetInfoView.add(accountCreate);
	// tweetInfoView.add(statusesCount);
	// ph.app.dashboard.add(tweetInfoView);
	// alert(ph.ui.dashboard.stats);
	FUI.dashboardWindow_1({
			window: ph.app.dashboard, 
			view1: {
				label1: {text: rData.favourites_count}
			},
			view2: {
				label1: {text: ph.ui.dashboard.stats.filed}
			},
			view3: {
				label1: {text: ph.ui.dashboard.stats.tagged}
			},
			label2: {}
		});
	
}
	
})();