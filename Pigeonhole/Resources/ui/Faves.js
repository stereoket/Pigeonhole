(function(){
	ph.ui.faves = function(){
		//alert('Faves Page');
		// Call the fetchFavs() function from here to test
		ph.ui.twitter.init();
		ph.ui.twitter.fetchFavs(ph.ui.faves.displayTable);
		return;
	};
	
	ph.ui.faves.displayTable = function(){
		Ti.API.info('argument length: '+arguments[0].length);
		
		var data = arguments[0];
		var tweetData = [];
	    for(var i=0;i<data.length;i++){
			strTtitle = i+1 + ' ' + data[i].text;
			tweetData[i] = Titanium.UI.createTableViewRow({title:strTtitle});

	        //Ti.API.info(data[i].text);
			
		}
		
		var tblFaves = Ti.UI.createTableView({data:tweetData});
		
		ph.app.faves.add(tblFaves);
		
	};
	
})();