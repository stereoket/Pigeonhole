(function(){	
	ph.ui.twitter = {};
	
	ph.ui.twitter.init = function (){
	// Include the oAuth lib files
		Ti.include(
			'lib/sha1.js',
			'lib/oauth.js',
			'lib/oauth_adapter.js',
			'lib/twitter_api.js'
		);
	};

	ph.ui.twitter.fetchProfile = function(callback){
		if (oa.TokensPresent === true) {	
			oa.oAuthAdapter.send({
				url:'https://api.twitter.com/1/account/verify_credentials.json?include_entities=t&skip_status=t', 
				parameters:[
				],
				method:'GET',
				onSuccess:function(response){			
					//Ti.API.info(rText);	
					//ph.ui.twitter.addFaves(rText);
					//alert(response.successMessage);				
					callback(JSON.parse(response.responseText));
				}
			});	
		} else {
			oa.twitterAuth();
		}		
	};
	
	ph.ui.twitter.fetchFavs = function(callback){
		if (oa.TokensPresent === true) {	
			oa.oAuthAdapter.send({
				url:'http://api.twitter.com/1/favorites.json?count=25', 
				parameters:[
				],
				method:'GET',
				onSuccess:function(response){			
					rText = JSON.parse(response.responseText);
					//Ti.API.info(rText);	
					//ph.ui.twitter.addFaves(rText);
					//alert(response.successMessage);				
					callback(rText);
				}
			});	
		}		
	};
	
	ph.ui.twitter.addFaves = function(pData){
		Ti.API.info('pData Length: '+pData.length);
	    for(var i=0;i<pData.length;i++){
	        var obj = pData[i];
			var dataValues = [];

	        for(var key in obj){
	            var attrName = key;
	            var attrValue = obj[key];	        	
	        }
			
		}
		
		//ph.db.insertTweet();
		
	};
	
	
})();
