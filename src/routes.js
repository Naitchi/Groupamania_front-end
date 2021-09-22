import Carousel from "./components/Carousel";
import Main from "./view/Main";

const routes = [
  {
    path: "/login",
    name:"login",
    component: Carousel,
  },
  {
    path: "/",
    redirect: "/login"
  },
  { path: "/main", component: Main },
];

export default routes;
