import * as AuthPage from "./pages/Auth";
import DashboardPage from "./pages/Dashboard";
import TasksPage from "./pages/Tasks";
import CreateTasksPage from "./pages/Tasks/containers/Create";
import UpdateTasksPage from "./pages/Tasks/containers/Update";
import PlansPage from "./pages/Plans";
import CreatePlansPage from "./pages/Plans/containers/Create";
import UpdatePlansPage from "./pages/Plans/containers/Update";
import AdsPage from "./pages/Ads";
import AdsDataPage from "./pages/AdsData";
import SEOPage from "./pages/SEO";
import SEMPage from "./pages/SEM";
import ProfilePage from "./pages/Settings/Profile";
import AccsessPage from "./pages/Settings/Accsess";
import SocialNetworkPage from "./pages/Settings/Social-network";
import SMMPage from "./pages/SMM";
import CardPage from "./pages/SMM/CardPage";
import AddPage from "./pages/SMM/AddPage";

export const publicRoutes = [
  {
    name: "Sign In",
    path: "/login",
    component: AuthPage.SignIn,
  },
  {
    name: "Sign up",
    path: "/register",
    component: AuthPage.SignUp,
  },
  {
    name: "Forgot",
    path: "/forgot",
    component: AuthPage.Forgot,
  },
];

export const privateRoutes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    component: DashboardPage,
  },
  {
    name: "Tasks",
    path: "/tasks",
    component: TasksPage,
  },
  {
    name: "Create Tasks",
    path: "/tasks/create",
    component: CreateTasksPage,
  },
  {
    name: "Update Tasks",
    path: "/tasks/update/:id",
    component: UpdateTasksPage,
  },

  {
    name: "Plans",
    path: "/plans",
    component: PlansPage,
  },
  {
    name: "Create Plans",
    path: "/plans/create",
    component: CreatePlansPage,
  },
  {
    name: "Update Plans",
    path: "/plans/update/:id",
    component: UpdatePlansPage,
  },

  {
    name: "Ads",
    path: "/ads",
    component: AdsPage,
  },
  {
    name: "Ads Data",
    path: "/ads-data",
    component: AdsDataPage,
  },

  {
    name: "SEO",
    path: "/seo",
    component: SEOPage,
  },

  {
    name: "SEM",
    path: "/sem",
    component: SEMPage,
  },

  {
    name: "SMM",
    path: "/smm",
    component: SMMPage,
  },

  {
    name: "CardPage",
    path: "/smm/cardpage",
    component: CardPage,
  },

  {
    name: "AddPage",
    path: "/smm/addpage",
    component: AddPage,
  },

  {
    name: "Profile",
    path: "/settings/profile",
    component: ProfilePage,
  },
  {
    name: "Access",
    path: "/settings/accsess",
    component: AccsessPage,
  },
  {
    name: "Social-network",
    path: "/settings/networks",
    component: SocialNetworkPage,
  },
];
