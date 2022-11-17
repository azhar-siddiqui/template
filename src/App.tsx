import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Outlet } from "react-router-dom";
import { Header } from "./components/exports";
import { routeNames } from "./pages/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route
              path={routeNames.Home.name}
              element={<routeNames.Home.component />}
            />
            <Route
              path={routeNames.AboutUs.name}
              element={<routeNames.AboutUs.component />}
            />
            <Route
              path={routeNames.Solutions.name}
              element={<routeNames.Solutions.component />}
            >
              <Route
                path={routeNames.Solutions.nested.CloudSolutions.name}
                element={
                  <routeNames.Solutions.nested.CloudSolutions.component />
                }
              />
              <Route
                path={routeNames.Solutions.nested.WorkplaceModernization.name}
                element={
                  <routeNames.Solutions.nested.WorkplaceModernization.component />
                }
              />
              <Route
                path={routeNames.Solutions.nested.ManagedServices.name}
                element={
                  <routeNames.Solutions.nested.ManagedServices.component />
                }
              />
              <Route
                path={routeNames.Solutions.nested.AppAndData.name}
                element={<routeNames.Solutions.nested.AppAndData.component />}
              />
              <Route
                path={routeNames.Solutions.nested.CloudSecurity.name}
                element={
                  <routeNames.Solutions.nested.CloudSecurity.component />
                }
              />
            </Route>
            <Route
              path={routeNames.CloudPartners.name}
              element={<routeNames.CloudPartners.component />}
            />
            <Route
              path={routeNames.Careers.name}
              element={<routeNames.Careers.component />}
            />
            <Route
              path={routeNames.ContactUs.name}
              element={<routeNames.ContactUs.component />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
