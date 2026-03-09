export function Login() {
  return (
    <main
      class={"container"}
      style={"display: grid; place-items: center; min-height: 100vh;"}
    >
      <article>
        <header>Login</header>
        <input
          type="text"
          name="username"
          placeholder="Username"
          aria-label="username"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          aria-label="Password"
        />
        <div
          class={"container"}
          style={
            "display: flex; flex-direction:column; justify-content: center; text-align: center; align-items: center;"
          }
        >
          Create an account
          <a href="/signup">Sign Up</a>
        </div>
        <footer>
          <input type="button" value="Sign Up" />
        </footer>
      </article>
    </main>
  );
}
