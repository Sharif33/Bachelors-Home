import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MotionLazy from "./components/animate/motion-lazy";
import ProgressBar from "./components/progress-bar/progress-bar";
import CustomThemeProvider from "./features/theme";
import router from "./routes/routes";

function App() {
  return (
    <div>
      <CustomThemeProvider>
        <MotionLazy>
          <ToastContainer />
          <ProgressBar />
          <RouterProvider router={router} />
        </MotionLazy>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
