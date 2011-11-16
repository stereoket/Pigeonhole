//Sample to run

 // var foo={
	 // timeid:new Date().getTime(),
	 // title:'Foo'
 // };
 // function downloadFile(){
	 // ph.boxData.fetchFromBoxNet(null,null);
 // };
 // function uploadFile(){
	 // ph.boxData.postToBoxNet(foo,downloadFile,null);
 // };
 // if(!ph.boxData.isLoggedIn){
	 // ph.boxData.login(uploadFile,null);
 // };

ph.boxData =(function (context) {
	context.isLoggedIn = false;
	
	context.fetchFromBoxNet=function(timeId,onSuccess,onError){
		function processData(myData){
			var iLength = myData.length;
			var returnObject = [];
			for (var iLoop=0; iLoop < iLength; iLoop++) {
				if(parseFloat(myData[iLoop].timeId)>timeId){
					returnObject.push(myData[iLoop]);
				}
			}
			onSuccess(returnObject);
		};
		var myBoxData = context.getDataFromBoxNet(processData,onError);
	};

	context.postToEmail=function(holeObject){
        var emailDialog = Ti.UI.createEmailDialog();
        if (!emailDialog.isSupported()) {
        	Ti.UI.createAlertDialog({
        		title:'Information',
        		message:'Email not available'
        	}).show();
        	return;
        }
        emailDialog.setSubject("You've been pigeonholed");
        var emailTemplate = "I've pigeonholed your tweet";
        emailTemplate += "\n" + holeObject.name + ' (' + holeObject.screen_name + ')';
        emailTemplate += "\n" + holeObject.text;
        emailTemplate += "\n" + holeObject.created_at;
        emailTemplate += "\n\nhttp://pigeonhole.it/"+holeObject.id;
        emailTemplate += "\nWhy don't you pigeonhole.it too!";

        emailDialog.setMessageBody(emailTemplate);            
        emailDialog.open();		
	};	
	context.getDataFromBoxNet=function(onSuccess,onError){

		var dir = Ti.Box.retrieveFolder();     
		var fileId = null;
        for (var i = 0, l = dir.objectsInFolder.length; i < l; i++) {
            var current = dir.objectsInFolder[i];
            if(current.objectName==='pigeon_storage.json'){
            	fileId=current.objectId;
            	break;
            }
        }
        
        var downloadTo = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'pigeon_download.json');
	    if(downloadTo.exists()){
	      	downloadTo.deleteFile();
	     }   
	      
        Ti.Box.download({
            objectId: fileId,
            fileURL: downloadTo.nativePath,
            success: function() {
            	var myFile = downloadTo.nativePath.split('/').pop();
            	var f = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,myFile);
            	var contents = f.read();
            	var myData = JSON.parse(contents);
            	onSuccess(myData);
            },
            error: function(evt) {
	        	if((onError!==undefined)&&(onError!==null)){
	          		onError(evt.error);	        		
	        	}	
            }
        });		
	};
	context.postToBoxNet=function(myData,onSuccess,onError){

    	var dir = Ti.Box.retrieveFolder();
    	//Ti.API.info('folder name=' + dir.objectName);
    	//Ti.API.info('folder objectId=' + dir.objectId);
       
       var uploadFrom = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'pigeon_storage.json');
       if(uploadFrom.exists()){
       		uploadFrom.deleteFile();
       }
       var foo =JSON.stringify(myData);
       uploadFrom.write(foo);
     
            Ti.Box.upload({
                parentId: dir.objectId,
                fileURL: uploadFrom.nativePath,
                success: function() {
			        if(uploadFrom.exists()){
			       		uploadFrom.deleteFile();
			        }                	
		        	if((onSuccess!==undefined)&&(onSuccess!==null)){
		          		onSuccess();	        		
		        	}
                },
                error: function(evt) {
		        	if((onError!==undefined)&&(onError!==null)){
		          		onError(evt.error);	        		
		        	}	
                }
            });          				
	};
	

	context.login=function(onSuccess,onError){
		var win = Ti.UI.createWindow();
	    var view = Ti.Box.createLoginView({
	        backgroundColor: '#fff',
	        left:0,right:0,top:0,bottom:0
	    });
	    
	    Ti.Box.login({
	        view: view,
	        success: function() {             
	        	context.isLoggedIn=true;
	        	if((onSuccess!==undefined)&&(onSuccess!==null)){
	          		onSuccess(onSuccess,onError);	        		
	        	}
	        },
	        error: function(evt) {
	        	context.isLoggedIn=false;
	        	if((onError!==undefined)&&(onError!==null)){
	          		onError(evt.error);	        		
	        	}	        	
	        }
	    });
	    
	    win.add(view);
	    win.open();
	};
	
	return context;
}(ph.boxData || {}));
