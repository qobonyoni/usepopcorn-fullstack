import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('./routes/movies/layout.tsx', [
        index("routes/homepage.tsx"),
        
    ]),
    layout('./routes/auth/layout.tsx', [
        route('/login', './routes/auth/Login.tsx'),
        route('/signup','./routes/auth/SignUp.tsx')
        
        
    ])
    
  
    
] satisfies RouteConfig;
