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
			tweetData[i] = Titanium.UI.createTableViewRow({title:strTtitle,fullData:data[i]});

	        //Ti.API.info(data[i].text);
			
		}
		
		var tblFaves = Ti.UI.createTableView({data:tweetData});
		
		tblFaves.addEventListener('click', function(e){
			ph.ui.faves.displayTweet(e.rowData);
		});

		ph.app.faves.add(tblFaves);
		
	};
	
	ph.ui.faves.displayTweet = function(){
		var data = arguments[0].fullData;
		//alert(data.user.name);
		
		ph.app.displayTweet = ph.ui.createAppWindow({
			// title: 'Faves', 
			barImage: 'images/faveImageTitle.png',
			orientationModes: [Titanium.UI.PORTRAIT]
		});	
		var b = Titanium.UI.createButton({title:'Back'});
		ph.app.displayTweet.leftNavButton = b;
		b.addEventListener('click', function(){
		   ph.app.displayTweet.close();
		});
		
		var viewTweet = Ti.UI.createView({
			borderRadius: 10,
			borderWidth: 0,
			backgroundColor:'#966228',
			height: 200,
			width: 300,
			left: 10,
			top: 10
		});
			
		ph.app.displayTweet.add(viewTweet);
		
		var avatar = Ti.UI.createImageView({
			top: 25,
			left: 25,
			width: 72,
			height: 72,
			image: data.user.profile_image_url
			
		});
		
		ph.app.displayTweet.add(avatar);
		
		var tweetText = Ti.UI.createLabel({
			left: 105,
			top: 15,
			text: data.text,
			height: 120,
			width: 195
		});
		ph.app.displayTweet.add(tweetText);
		
		ph.app.displayTweet.open({modal: true})
	};
	

	
	
})();