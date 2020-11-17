const { controllers } =  require('./controllers');

// Routes
const routes: Array<RouteObject> = [
    { path: '/', template: 'index.html' },
    { path: '/event/:id', handler: controllers.eventController },
    { path: '/resource/:name', handler: controllers.resourceController },
    { path: '/code-of-conduct', template: 'codeofconduct.html' },
    { path: '/privacy-policy', template: 'privacypolicy.html' },
    { path: '/talk', redirect: '/' },
    { path: '/talk/:name', handler: controllers.talkController },
    { path: '*', template: '404.html' } // always keep this last
];

exports.routes = routes;