import { RouterProvider } from "react-router";
import { router } from "./app.routes.jsx";
import "./features/shared/styles/global.scss";

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
