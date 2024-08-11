import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WorkoutProvider } from "./context/workoutContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<WorkoutProvider>
			<App />
		</WorkoutProvider>
	</StrictMode>
);
