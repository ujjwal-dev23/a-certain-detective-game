import { Route } from "preact-iso";

export function Signup() {
  return (
    <main
      class={"container"}
      style={"display: grid; place-items: center; min-height: 100vh;"}
    >
      <article>
        <header>Sign Up</header>
        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          autocomplete="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          aria-label="Confirm Password"
        />
        <div
          class={"container"}
          style={
            "display: flex; flex-direction:column; justify-content: center; text-align: center;"
          }
        >
          Already have an account
          <a href="/test">Login</a>
        </div>
        <footer>
          <input type="button" value="Sign Up" />
        </footer>
      </article>
    </main>
  );
}
