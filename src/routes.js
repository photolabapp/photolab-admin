import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, LogoutLayout } from "./layouts";

// Route Views
import Overview from "./views/Overview";
import UserProfileLite from "./views/UserProfileLite";
import Login from "./views/Login";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Orders from "./views/Orders";
import OrderDetail from "./views/OrderDetail";
import BlogPosts from "./views/BlogPosts";
import ListCollaborator from "./views/Collaborator/ListCollaborator";
import CreateCollaborator from "./views/Collaborator/CreateCollaborator";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/orders" />
  },
  {
    path: "/login",
    layout: LogoutLayout,
    component: Login
  },
  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/edit-user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/collaborators",
    layout: DefaultLayout,
    component: ListCollaborator
  },
  {
    path: "/collaborator/:id",
    layout: DefaultLayout,
    component: CreateCollaborator
  },
  {
    path: "/orders",
    layout: DefaultLayout,
    component: Orders
  },
  {
    path: "/order/:id",
    layout: DefaultLayout,
    component: OrderDetail
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
