import Navbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { useAuthContextValue } from "./context/AuthContext";
import ResumeBuilderStep from "./pages/ResumeBuilderStep/ResumeBuilderStep";

function App() {
  const { authUser } = useAuthContextValue();
  /* React Router Configuration */
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "signIn",
      element: authUser ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "signUp",
      element: authUser ? <Navigate to="/" /> : <Signup />,
    },
    {
      path: "steps",
      element: <ResumeBuilderStep />,
    },
  ]);
  return (
    <>
      {/* Passing all data router objects to this component to render the app and enable the rest of the data APIs */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
