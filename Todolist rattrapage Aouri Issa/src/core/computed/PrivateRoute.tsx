import React, { useMemo, Component } from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

interface IPrivateRoute {
  path: string;
  component: any;
  exact: boolean;
}

function PrivateRoute({ component: PropsComponent, ...props }: IPrivateRoute) {
  // get autenticate state from redux store
  const isAuthenticated: boolean = useSelector(
    (state: any) => state.userReducer.isAuthenticated
  );

  // console.log("re-render me");

  return useMemo(
    () => (
      <Route
        {...props}
        render={() => {
          return isAuthenticated ? (
            <PropsComponent />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    ),
    [isAuthenticated]
  );
}

export default PrivateRoute;
