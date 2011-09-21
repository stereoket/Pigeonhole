(function(){
	
		ph.ui.settings = function(){
			 var foo={
	 timeid:new Date().getTime(),
	 title:'Foo'
 };
 function downloadFile(){
	 ph.boxData.fetchFromBoxNet(null,null);
 };
 function uploadFile(){
	 ph.boxData.postToBoxNet(foo,downloadFile,null);
	
 };
 if(!ph.boxData.isLoggedIn){
	 ph.boxData.login(uploadFile,null);
 };
		return;
	};
})();