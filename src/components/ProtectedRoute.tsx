import { useLocation } from "preact-iso";
import pb from "../services/pb-client";
import { useEffect } from "preact/hooks";

export function ProtectedRoute({ children }) {
  const { route } = useLocation();
  useEffect(() => {
    route("/login");
  }, [route]);

  if (pb.authStore.isValid) {
    return children;
  } else {
    // TODO: Add proper loading UX here
    return <h1>I don't think you are supposed to be seeing this :p</h1>;
  }
}
