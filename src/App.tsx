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
          <ProgressBar />
          <RouterProvider router={router} />
        </MotionLazy>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
