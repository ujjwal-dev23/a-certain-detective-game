import { ProtectedRoute } from "../../components/ProtectedRoute";
export function Test() {
  return (
    <ProtectedRoute>
      <div class={"container flex justify-center"}>
        <h1 class={"text-2xl text-amber-400 text-center"}>Test Page</h1>
      </div>
    </ProtectedRoute>
  );
}
