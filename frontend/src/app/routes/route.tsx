// import { createBrowserRouter } from "react-router-dom";
// import App from "~app/App";
// import FilmDetails from "~pages/details";
// import Main from "~pages/main";
// import { getFilmById } from "~shared/api/films/films";
// import Login from "~pages/login";
// import Registration from "~pages/registration";

import { RootRoute, Route, Router } from "@tanstack/react-router";
import App from "~app/App";
import Login from "~pages/login";
import Main from "~pages/main";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Main />,
//       },
//       {
//         path: "/film/:filmId",
//         element: <FilmDetails />,
//         loader: async ({ params }) => {
//           const film = await getFilmById(params.filmId);
//           return { film };
//         },
//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "registration",
//         element: <Registration />,
//       },
//     ],
//   },
// ]);

const rootRoute = new RootRoute({
  component: App,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Main,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
