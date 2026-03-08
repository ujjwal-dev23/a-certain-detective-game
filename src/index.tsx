import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import "@picocss/pico";

import { Home } from "./pages/Home/index.jsx";
import { Test } from "./pages/Test/index.jsx";
import { Signup } from "./pages/Signup/index.jsx";
import { NotFound } from "./pages/_404.jsx";

export function App() {
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/test" component={Test} />
          <Route path="/signup" component={Signup} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
