import LandingPage from "../pages/LandingPage";
import Agenda from "../pages/Agenda";

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
];

export default routeConfig;
