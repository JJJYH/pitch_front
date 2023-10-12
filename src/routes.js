import MainPage from "./pages/MainPage";
import ManagePage from "./pages/ManagePage";
import AdminPage from "./pages/AdminPage";
import JobPage from "./pages/JobPage";
import CVPage from "./pages/CVPage";

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
    {
        path: '/job',
        component: JobPage
    },
    {
        path: "/CV",
        component: CVPage,
    },

];

export default routes;
