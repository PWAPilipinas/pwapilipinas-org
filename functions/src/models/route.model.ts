interface RouteObject {
    method?: string;
    path?: string;
    handler?: (arg0: any, arg1: any) => any;
    template?: string;
    redirect?: string;
};