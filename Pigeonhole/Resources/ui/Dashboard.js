(function(){
	ph.ui.dashboard = function(){
		ph.ui.showDashboard();
		return;
	};
	
	ph.ui.showDashboard = function(){
		
		// Load twitter credentials
		ph.ui.twitter.init();
		
		var dashboardView = Ti.UI.createView({
			width: 320,
			height: 480,
			top: 10,
			left: 0,
			layout: 'horizontal'
		});
		
		var itemCircle1 = Ti.UI.createImageView({
			image: 'images/dashboardCircle1.png',
			hires: true,
			width: 80,
			height: 80,
			left: 20
		});
		
		
		
		var itemCircle2 = Ti.UI.createImageView({
			image: 'images/dashboardCircle2.png',
			hires: true,
			width: 80,
			height: 80,
			left: 20
		});
		
		var itemCircle3 = Ti.UI.createImageView({
			image: 'images/dashboardCircle3.png',
			hires: true,
			width: 80,
			height: 80,
			left: 20
		});
		
		dashboardView.add(itemCircle1);
		dashboardView.add(itemCircle2);
		dashboardView.add(itemCircle3);
		

		
		
		ph.app.dashboard.add(dashboardView);
		// create background colour

	}
	
})();