import MyNavbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import routeConfig from "./components/RouteConfig";
import { runInContext } from "lodash";

const App = () => {
  return (
    <>
      <Routes>
        {routeConfig.map((ruta) => {
          return <Route path={ruta.path} element={ruta.component} />;
        })}
      </Routes>
    </>
  );
};

export default App;
