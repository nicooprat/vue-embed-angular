import Home from "./components/Home";
import About from "./components/About";
import IframeAngular from "./components/IframeAngular";

export const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/iframe-home",
    component: IframeAngular,
    meta: {
      iframe: "/"
    }
  },
  {
    path: "/iframe-about",
    component: IframeAngular,
    meta: {
      iframe: "/about"
    }
  }
];
