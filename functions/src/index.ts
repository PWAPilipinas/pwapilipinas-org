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
import * as admin from 'firebase-admin';

const { routes } = require('./routes');
const { injectRoutes } = require('./helpers/route');

admin.initializeApp();
const app = express();

// Setup templating engine
nunjucks.configure('src/views', { autoescape: true, express: app });

// Middlewares
app.use(cors({ origin: true }));
app.use('/assets', express.static('src/assets'));

injectRoutes(app, routes);

exports.site = functions.https.onRequest(app);
