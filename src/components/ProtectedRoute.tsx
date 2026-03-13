import { useLocation } from "preact-iso";
import pb from "../services/pb-client";
import { useEffect } from "preact/hooks";

export function ProtectedRoute({ children }) {
  if (pb.authStore.isValid) {
    return children;
  } else {
    const { route } = useLocation();
    useEffect(() => {
      route("/login");
    }, [route]);
  }
}
