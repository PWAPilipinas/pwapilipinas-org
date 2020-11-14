const injectRoutes = (app: any, routes: Array<RouteObject>) => {
    routes.forEach(route => {
        if (!route.method) {
            if(route.handler) app.all(route.path, route.handler);
            if(route.template) app.all(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
        } else {
            switch (route.method) {
                case('get'):
                    if(route.handler) app.get(route.path, route.handler);
                    if(route.template) app.get(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
                default:
                    if(route.handler) app.all(route.path, route.handler);
                    if(route.template) app.all(route.path, (req: any, res: any) => { res.render(`${route.template}`); });
                    break;
            }
        }
    });
};

exports.injectRoutes = injectRoutes;