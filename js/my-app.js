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
		
		{
		path: '/feria/',
    	url: 'feria.html',
    	name: 'feria',
  		},
		{
		path: '/tutorias/',
    	url: 'tutorias.html',
    	name: 'tutorias',
  		},
		{
		path: '/papeleria/',
    	url: 'papeleria.html',
    	name: 'papeleria',
  		},
		{
		path: '/lapices/',
    	url: 'lapices.html',
    	name: 'lapices',
  		},
		{
		path: '/plasticinas/',
    	url: 'plasticinas.html',
    	name: 'plasticinas',
  		},
		{
		path: '/tutores/',
    	url: 'tutores.html',
    	name: 'tutores',
  		},
		{
		path: '/mena/',
    	url: 'mena.html',
    	name: 'mena',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/form/',
    	url: 'form.html',
    	name: 'form',
  		},
		
			{
		path: '/pago/',
    	url: 'pago.html',
    	name: 'pago',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

