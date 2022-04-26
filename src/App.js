import { Switch, Route, Redirect } from "react-router-dom";

import * as Layouts from "./layouts";
import { publicRoutes, privateRoutes } from "./routes";
import useAuth from "./module/auth/hooks/useAuth";
import Loading from "./components/Loading";

const App = () => {
  const { isAuthenticated, isFetched } = useAuth();

  if (!isFetched) {
    return <Loading/>
  }

  if (!isAuthenticated) {
    return (
      <Layouts.Auth>
        <Switch>
          {publicRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact
                render={(props) => <route.component {...props} />}
              />
            );
          })}
          <Redirect to="/login" />
        </Switch>
      </Layouts.Auth>
    );
  }
  return (
    <Layouts.Base>
      <Switch>
        {privateRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact
              render={(props) => <route.component {...props} />}
            />
          );
        })}
        <Redirect to="/dashboard" />
      </Switch>
    </Layouts.Base>
  );
};

export default App;
