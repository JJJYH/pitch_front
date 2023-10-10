import MainPage from "./pages/MainPage";
import ManagePage from "./pages/ManagePage";
import AdminPage from "./pages/AdminPage";

const routes = [
    {
        path: '/main',
        component: MainPage
    },
    {
        path: '/manage',
        component: ManagePage
    },
    {
        path: '/admin',
        component: AdminPage
    },
];

export default routes