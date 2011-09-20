(function() {
	ph.model = {
		dbname:'pigeonhole.sqlite', //overwrite this before creating your first entity to change
		resLoc:'db/pigeonhole.sqlite'
	};
	
})();

	
	Ti.include(
		'/model/BoxData.js',
		'/model/Twitter.js',
		'/model/db.js'
	);