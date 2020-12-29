import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/protectedRoute";
import { getCurrentUser } from "./services/authServices";
import Login from "./components/login";
import Logout from "./components/logout";
import ReportEdit from "./components/reportEdit";
import MainContain from "./components/mainContain";
import MissingReport from "./components/missingReport";
import Notification from "./components/notification";
import SignUp from "./components/signUp";
import FoundChild from "./components/foundChild";
import FoundList from "./components/foundList";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Gallary from "./components/gallary";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoute
            path="/MissingReport"
            component={MissingReport}
            user={user}
          />
          <Route
            path="/foundchild"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <FoundChild {...props} />;
            }}
          />
          <Route
            path="/Notification"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <Notification {...props} />;
            }}
          />
          <Route
            path="/reportEdit"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <ReportEdit {...props} />;
            }}
          />
          <Route
            path="/foundlist"
            render={(props) => {
              if (!user) return <Redirect to="/login" />;
              return <FoundList {...props} />;
            }}
          />
          <Route
            path="/gallary"
            render={(props) => {
              return <Gallary {...props} />;
            }}
          />
          <Route
            path="/"
            render={(props) => (
              <MainContain {...props} user={this.state.user} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
