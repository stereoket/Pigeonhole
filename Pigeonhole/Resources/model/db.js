(function(){
	ph.db = {};
	
	// Check for the existance of DB.
	// TODO: create error if not found check
	var db = Ti.Database.install('db/pigeonhole.sqlite','pigeonhole');
	
	db.close();
	


	ph.db.retrieveTweets = function( _args ){
		var db = Ti.Database.open('pigeonhole');
		var rows = db.execute('SELECT * FROM tweets WHERE id = ?', _args);
		
		var data = [];
		
		while(rows.isValidRow()){
		
			data.push({
				id:rows.fieldByName('id'),
				favorited:rows.fieldByName('favorited'),
				text:rows.fieldByName('text'),
				retweet_count:rows.fieldByName('retweet_count'),
				retweeted:rows.fieldByName('retweeted'),
				user_id:rows.fieldByName('user_id'),
				user_name:rows.fieldByName('user_name'),
				profile_image_url:rows.fieldByName('profile_image_url'),
				location:rows.fieldByName('location'),
				user_followers_count:rows.fieldByName('user_followers_count'),
				user_time_zone:rows.fieldByName('user_time_zone'),
				user_screen_name:rows.fieldByName('user_screen_name')
			});
			rows.next();
		}
		rows.close();
		db.close();		
		
		return data;	
	};

	ph.db.insertTweet = function( _args ){
		var db = Ti.Database.open('pigeonhole');
		Ti.API.info('Adding Tweet: '+_args);
		try{
			db.execute("INSERT INTO tweets(id, favorited, text, retweet_count, retweeted, user_id, user_name, profile_image_url, location, user_followers_count, user_time_zone, user_screen_name) VALUES(?,?,?,?,?,?,?,?,?,?)", _args);
		} catch(e){
	        // Found error. Return false
	        Ti.API.error('ph.db.insertTweet: '+e.message);
	        return false;			
		}
		db.close();	
		Ti.App.fireEvent("databaseUpdated");	
	};
	
	ph.db.updateTweet = function( _args ){
		var db = Ti.Database.open('pigeonhole');
		
		try{
			db.execute('UPDATE tweets id = ?, favorited = ?, text = ?, retweet_count = ?, retweeted = ?, user_id = ?, user_name = ?, profile_image_url = ?, location = ?, user_followers_count = ?, user_time_zone = ?, user_screen_name = ? WHERE id = ?',  _args);
		} catch(e){
	        // Found error. Return false
	        Ti.API.error('ph.db.updateTweet: '+e.message);
	        return false;			
		}
		db.close();	
		Ti.App.fireEvent("databaseUpdated");
	};	


})();