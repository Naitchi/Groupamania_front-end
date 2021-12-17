import Carousel from "./components/Carousel";
import Main from "./view/Main";
import Profile from "./components/Profile";
import Publication from "./components/Publication";
import Modify_Publication from "./components/Modify_Publication";

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
  { path: "/post", name: "publication", component: Publication },
  {
    path: "/modifyPublication",
    name: "modifyPublication",
    component: Modify_Publication,
  },
];

export default routes;
