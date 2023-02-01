import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@vue-mfe/navbar",
  app: () => System.import("@vue-mfe/navbar"),
  activeWhen: ()=>true
});

registerApplication({
  name: "@vue-mfe/app1",
  app: () => System.import("@vue-mfe/app1"),
  activeWhen: ["/app1"]
});

registerApplication({
  name: "@vue-mfe/app2",
  app: () => import(
    /* webpackIgnore: true */
    'http://localhost:3000/src/main.js'
  ),
  activeWhen: ["/app2"]
});

start({
  urlRerouteOnly: true,
});