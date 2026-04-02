import AuthRoutes from "./AuthRoutes";
import DrawerRoutes from "./DrawerRoutes";


export default function AppRoutes() {
    const isAuthenticated = false; // Simulação de autenticação

    return isAuthenticated ? <DrawerRoutes /> : <AuthRoutes />;
}

// 