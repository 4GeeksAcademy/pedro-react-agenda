import LandingPage from "../pages/LandingPage";
import Agenda from "../pages/Agenda";
import List from "../pages/List";

const routeConfig = [
  {
    name: "Landing",
    path: "/",
    component: <LandingPage />,
  },
  {
    name: "Agenda",
    path: "/agenda",
    component: <Agenda />,
  },
  {
    name: "List",
    path: "/list/:slug",
    component: <List />,
  },
];

export default routeConfig;
