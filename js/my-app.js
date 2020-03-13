// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App Coffee', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/coffee/',
    	url: 'coffee.html',
    	name: 'coffee',
  		},
		{
		path: '/promos/',
    	url: 'promos.html',
    	name: 'promos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

