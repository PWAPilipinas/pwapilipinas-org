const injectRoutes = (app: any, routes: Array<RouteObject>) => {
    routes.forEach(route => {
        if (!route.method) {
            if(route.handler) app.all(route.path, route.handler);
            if(route.redirect) app.all(route.path, (req: any, res: any) => { res.redirect(route.redirect) });
            if(route.template) app.all(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
        } else {
            switch (route.method) {
                case('get'):
                    if(route.handler) app.get(route.path, route.handler);
                    if(route.redirect) app.get(route.path, (req: any, res: any) => { res.redirect(route.redirect) });
                    if(route.template) app.get(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
                case('post'):
                    if(route.handler) app.post(route.path, route.handler);
                    if(route.redirect) app.post(route.path, (req: any, res: any) => { res.redirect(route.redirect) });
                    if(route.template) app.post(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
                case('put'):
                    if(route.handler) app.put(route.path, route.handler);
                    if(route.redirect) app.put(route.path, (req: any, res: any) => { res.redirect(route.redirect) });
                    if(route.template) app.put(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
                default:
                    if(route.handler) app.all(route.path, route.handler);
                    if(route.redirect) app.all(route.path, (req: any, res: any) => { res.redirect(route.redirect) });
                    if(route.template) app.all(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
            }
        }
    });
};

exports.injectRoutes = injectRoutes;