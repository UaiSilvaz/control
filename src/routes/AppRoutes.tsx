import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";


export default function AppRoutes() {
    const isAuthenticated = true; // Simulação de autenticação

    return isAuthenticated ? <DrawerRoutes /> : <AuthRoutes />;
}

// 