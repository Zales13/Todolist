import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { personCircle, calendar, home, keyOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "./redux/actions/user.action";
import JwtService from "./core/services/jwt/jwt.service";
import PrivateRoute from "./core/computed/PrivateRoute";
import Home from "./pages/screens/Home/Home";
import TodoList from "./pages/screens/TodoList/TodoList";
import About from "./pages/screens/About/About";
import Login from "./pages/screens/Login/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  // select user state from redux store
  const rxUser = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("App Effect");

    setTimeout(() => {
      // Suppose, the token has exist to set logined
      JwtService.getToken().then((token) => {
        if (token) {
          dispatch(userActions.setLogin({ username: "" }));
        }
      });
    }, 300);
  }, [rxUser.isAuthenticated]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <PrivateRoute path="/home" component={Home} exact={true} />
            <PrivateRoute path="/todolist" component={TodoList} exact={true} />
            <PrivateRoute path="/about" component={About} exact={true} />
            <Route path="/login" component={Login} exact={true} />

            <Route
              path="/"
              render={() => <Redirect to="/home" />}
              exact={true}
            />
            <Route component={() => <div>Not found</div>} />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Accueil</IonLabel>
            </IonTabButton>

            <IonTabButton tab="TodoList" href="/todolist">
              <IonIcon icon={calendar} />
              <IonLabel>Todo List</IonLabel>
              <IonBadge>0</IonBadge>
            </IonTabButton>

            <IonTabButton tab="todo" href="/about">
              <IonIcon icon={personCircle} />
              <IonLabel>A propos</IonLabel>
            </IonTabButton>
            
            {!rxUser.isAuthenticated && (
              <IonTabButton tab="login" href="/login">
                <IonIcon icon={keyOutline} />
                <IonLabel>Connexion</IonLabel>
              </IonTabButton>
            )}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
