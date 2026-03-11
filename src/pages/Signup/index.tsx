import type { TargetedEvent } from "preact";
// import { useState } from "preact/hooks";

import pb from "../../services/pb-client";

export function Signup() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const onSubmit = async (e: TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (!password || !confirmPassword) {
      alert("Please fill in all password fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // setUsername(formData.get("username") as string);
    // setEmail(formData.get("email") as string);
    // setPassword(formData.get("password") as string);

    const userData = {
      email: email,
      emailVisibility: false,
      username: username,
      password: password,
      passwordConfirm: confirmPassword,
    };

    // console.log(userData);

    // Create a new record in the users collection
    try {
      const record = await pb.collection("users").create(userData);
      console.log(`Signed Up`);
      formElement.reset();
    } catch (err) {
      console.error(err.data.data);
    }
  };

  return (
    <main class={"container"}>
      <section style={"display: grid; place-items: center; min-height: 100vh;"}>
        <form onSubmit={onSubmit}>
          <article>
            <header>Sign Up</header>
            <input
              type="text"
              name="username"
              placeholder="Username"
              aria-label="username"
            />
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
                "display: flex; flex-direction:column; justify-content: center; text-align: center; align-items: center;"
              }
            >
              Already have an account ?
              <a href="/login" style={"align"}>
                Login
              </a>
            </div>
            <footer>
              <input type="submit" value="Sign Up" />
            </footer>
          </article>
        </form>
      </section>
      {/*<section>
        <article>
          <h1> Input Test </h1>
          {username && <p>Username : {username}</p>}
          {email && <p>Email : {email}</p>}
          {password && <p>Password : {password}</p>}
        </article>
      </section>*/}
    </main>
  );
}
