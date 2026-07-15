import { RouterProvider } from "react-router-dom";

import router from "./routes";

function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}

export default function Providers() {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}