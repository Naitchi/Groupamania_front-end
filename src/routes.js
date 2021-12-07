import Carousel from "./components/Carousel";
import Main from "./view/Main";
import Profile from "./components/Profile";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Carousel,
  },
  { path: "/user", name: "user", component: Profile },
  { path: "/main", name: "main", component: Main },
];

export default routes;
