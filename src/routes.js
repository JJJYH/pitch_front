import MainPage from "./pages/MainPage";
import ManagePage from "./pages/ManagePage";
import AdminPage from "./pages/AdminPage";
import SortingMainPage from "./pages/sorting/SortingMainPage";
import ApplicantDetailPage from "./pages/sorting/ApplicantDetailPage";


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
        path: '/sorting',
        component: SortingMainPage
    },
    {
        path: '/sorting/detail',
        component: ApplicantDetailPage
    },
];

export default routes