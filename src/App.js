import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./containers/Home";
import { AddStudent } from "./containers/AddStudent";
import routes from "./routes";

function App() {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
