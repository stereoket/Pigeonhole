//To start using this generated code .. simply include this file in your app.js
//Ti.include("your generated window file.js goes here");
//To create your generated window and get a reference to it do: 
//var win1=FUI.createWindow_1(); 
// This will create the window, create all components and attach them to the window, and return your window reference
// if(typeof FUI === "undefined"){FUI={};}
// (function(){
// FUI.dashboardWindow_1=function(_args){
// var view_1=createView_1(_args.view1);
// _args.window.add(view_1);
// 
// 
// var view_2=createView_2();
// _args.window.add(view_2);
// };
// var createView_2=function(){
// var view_2=Titanium.UI.createView({height:110,left:0,top:110,width:320,zIndex:0});
// var imageView_3=createImageView_3();
// view_2.add(imageView_3);
// return view_2;
// };
// var createImageView_3=function(){
// var imageView_3=Titanium.UI.createImageView({height:70,left:19,top:13,width:70});
// return imageView_3;
// };
// var createView_1=function(_args){
// var view_1=Titanium.UI.createView({height:110,left:0,top:0,width:320,zIndex:0});
// var imageView_1=createImageView_1();
// view_1.add(imageView_1);
// var label_1=createLabel_1(_args.label1);
// view_1.add(label_1);
// return view_1;
// };
// var createLabel_1=function(_args){
// 	
// var label_1=Titanium.UI.createLabel({text:_args.text,minimumFontSize:24,color:"#FFAA00",textAlign:"center",bottom:5,height:20,left:0,width:110,zIndex:10});
// return label_1;
// };
// var createImageView_1=function(){
// var imageView_1=Titanium.UI.createImageView({height:70,left:19,top:5,width:70,zIndex:10});
// return imageView_1;
// };
// })();
// 

if(typeof FUI === "undefined"){FUI={};}
(function(){


	// Dashboard View 
FUI.dashboardWindow_1=function(_args){
window1 = _args.window;

var view_1=createView_1(_args.view1);
window1.add(view_1);

var view_2=createView_2(_args.view2);
window1.add(view_2);

var view_3=createView_3(_args.view3);
window1.add(view_3);


var label_2=createFootLabel(_args.label2);
window1.add(label_2);
};

// First View
var createView_1=function(_args){
var view_1=Titanium.UI.createView({height:110,left:0,top:0,width:320,zIndex:0});
var imageView_1=createImageView_1();
view_1.add(imageView_1);
var label_1=createLabel_1(_args.label1);
var label_2=view1Label2();
view_1.add(label_1);
view_1.add(label_2);
return view_1;
};
var createImageView_1=function(_args){
var imageView_1=Titanium.UI.createImageView({image: 'images/dashStar.png', opacity: 0.4,  height:110,left:-1,top:-1,width:110,zIndex:10});
return imageView_1;
};
var createLabel_1=function(_args){
var label_1=Titanium.UI.createLabel({text:_args.text,minimumFontSize:24, font: {fontSize: 32}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:35,height:50,left:0,width:110,zIndex:10});
return label_1;
};
var view1Label2=function(_args){
var label_1=Titanium.UI.createLabel({text:'Favourites on twitter.com',font: {fontSize: 28}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:0,height:110,left:110,right: 5 ,zIndex:10});
return label_1;
};


// Second View
var createView_2=function(_args){
var view_2=Titanium.UI.createView({height:110,left:0,top:110,width:320,zIndex:0});
var imageView_2=createImageView_2();
view_2.add(imageView_2);
var label_1=createLabel_2(_args.label1);
var label_2=view2Label2();
view_2.add(label_1);
view_2.add(label_2);
return view_2;
};
var createImageView_2=function(_args){
var imageView_2=Titanium.UI.createImageView({image: 'images/dashFiling.png',  opacity: 0.4, height:110,left:-1,top:-1,width:110});
return imageView_2;
};
var createLabel_2=function(_args){
var label_1=Titanium.UI.createLabel({text:_args.text,minimumFontSize:24, font: {fontSize: 32}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:35,height:50,left:0,width:110,zIndex:10});
return label_1;
};
var view2Label2=function(_args){
var label_1=Titanium.UI.createLabel({text:'Faves Stored in Pigeonhole',font: {fontSize: 28}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:0,height:110,left:110,right: 5 ,zIndex:10});
return label_1;
};


// Third View
var createView_3=function(_args){
var view_3=Titanium.UI.createView({height:110,left:0,top:220,width:320});
var imageView_3=createImageView_3();
view_3.add(imageView_3);
var label_1=createLabel_3(_args.label1);
var label_2=view3Label2();
view_3.add(label_1);
view_3.add(label_2);
return view_3;
};
var createImageView_3=function(_args){
var imageView_3=Titanium.UI.createImageView({image: 'images/dashTags.png', opacity: 0.4, height:110,left:-1,top:-1,width:110});
return imageView_3;
};
var createLabel_3=function(_args){
var label_1=Titanium.UI.createLabel({text:_args.text,minimumFontSize:24, font: {fontSize: 32}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:35,height:50,left:0,width:110,zIndex:10});
return label_1;
};
var view3Label2=function(_args){
var label_1=Titanium.UI.createLabel({text:'Tweets Tagged',font: {fontSize: 28}, color: '#000', shadowOffset:{x:2,y:1}, shadowColor:"#fff",textAlign:"center",top:0,height:110,left:110,right: 5 ,zIndex:10});
return label_1;
};

var createFootLabel=function(_args){
var label_2=Titanium.UI.createLabel({text:"Last Synced with Twitter: 24th May 2011",height:23,left:11,top:336,width:244});
return label_2;
};

})();

