import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";

import styles from "./App.module.css";
import { REPO_NAME } from "@constants/repo";

const App = () => {
  return (
    <>
      <HashRouter>
        <div className={styles.wrapper}>
          <Header />

          <Routes>
            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </HashRouter>
    </>
  );
};

export default App;
