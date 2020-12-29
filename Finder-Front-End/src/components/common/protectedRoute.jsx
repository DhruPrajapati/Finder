import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  render() {
    const { component: Component, render, user, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) => {
          if (!user)
            return (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: this.props.location.pathname,
                  },
                }}
              />
            );
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    );
  }
}

export default ProtectedRoute;
