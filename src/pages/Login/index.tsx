import type { TargetedEvent } from "preact";

import pb from "../../services/pb-client";

export function Login() {
  const onSubmit = async (e: TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    // console.log(data);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(data.identity as string, data.password as string);

      console.log(`Login was successful - ${pb.authStore.isValid}`);
      formElement.reset();
    } catch (err) {
      // TODO: Improve error handling
      console.error(err.data.data);
    }
  };
  return (
    <main
      class={"container"}
      style={"display: grid; place-items: center; min-height: 100vh;"}
    >
      <form onSubmit={onSubmit}>
        <article>
          <header>Login</header>
          <input
            type="text"
            name="identity"
            placeholder="Username/Email"
            aria-label="identity"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="password"
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
            <input type="submit" value="Login" />
          </footer>
        </article>
      </form>
    </main>
  );
}
