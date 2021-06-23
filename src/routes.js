import Nav from "./components/Nav";
import News from "./components/News";
import Carousel from "./components/Carousel";

const routes = [
  { path: "/Entry", component: Carousel },
  { path: "/Main", component: Nav },
  { path: "/Main", component: News },
];

export default routes;
