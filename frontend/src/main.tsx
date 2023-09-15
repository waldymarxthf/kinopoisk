import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "~app/routes/route";

ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
