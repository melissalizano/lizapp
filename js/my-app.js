// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
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
		path: '/materiales/',
    	url: 'materiales.html',
    	name: 'materiales',
  		},
		{
		path: '/servicios/',
    	url: 'servicios.html',
    	name: 'servicios',
  		},
		
		{
		path: '/productos/',
    	url: 'productos.html',
    	name: 'productos',
  		},
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

