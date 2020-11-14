/**
 * PWA Pilipinas
 * 2020
 * 
 * All Rights Reserved
 */
import * as functions from 'firebase-functions';
import * as express from 'express';
import * as nunjucks from 'nunjucks';
import * as cors from 'cors';
const { injectRoutes } = require('./helpers/route');
const { controllers } =  require('./controllers');
// import * as stripHtml from 'string-strip-html';

const app = express();

// Setup templating engine
nunjucks.configure('src/views', { autoescape: true, express: app });

// Middlewares
app.use(cors({ origin: true }));
app.use('/assets', express.static('src/assets'));

// Routes
const routes: Array<RouteObject> = [
    { path: '/', template: 'index.html' },
    { path: '/event/:id', handler: controllers.eventController },
    { path: '/code-of-conduct', template: 'codeofconduct.html' },
    { path: '/privacy-policy', template: 'privacypolicy.html' },
    { path: '*', template: '404.html' } // always keep this last
];

injectRoutes(app, routes);


exports.site = functions.https.onRequest(app);
