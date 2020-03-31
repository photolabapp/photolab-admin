import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import withTracker from "./withTracker";
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.css";

export default ({ store }) => (
    <Provider store={store}>
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <div>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={withTracker(props => {
                                console.log("PROPSSS --------- " + JSON.stringify(props))
                                return (
                                    <route.layout {...props}>
                                        <route.component {...props} />
                                    </route.layout>
                                );
                            })}
                        />
                    );
                })}
            </div>
        </Router>
    </Provider>
    
);
