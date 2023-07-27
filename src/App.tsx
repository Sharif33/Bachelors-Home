import { RouterProvider } from "react-router-dom";
import MotionLazy from "./components/animate/motion-lazy";
import ProgressBar from "./components/progress-bar/progress-bar";
import CustomThemeProvider from "./features/theme";
import router from "./routes/routes";

function App() {
  return (
    <div>
      <CustomThemeProvider>
        <MotionLazy>
          <RouterProvider router={router} />
          <ProgressBar />
        </MotionLazy>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
