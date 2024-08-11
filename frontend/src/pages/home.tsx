import { useEffect, useState } from "react";
import { Workout } from "../types";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";

const Home = () => {
	const [workouts, setWorkouts] = useState<Workout[]>();

	useEffect(() => {
		const fetchWorkouts = async () => {
			try {
				const response = await fetch("http://localhost:4000/api/workouts");

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const contentType = response.headers.get("content-type");
				if (!contentType || !contentType.includes("application/json")) {
					const text = await response.text(); // Read the response as text
					console.error("Received non-JSON response:", text); // Log the response text
					throw new TypeError("Received non-JSON response");
				}

				const json = await response.json();
				console.log(json);
				setWorkouts(json);
			} catch (error) {
				console.error("Failed to fetch workouts:", error);
			}
		};
		fetchWorkouts();
	}, []);

	return (
		<>
			<div className="flex justify-between">
				<div className="w-[75%]">
					{workouts?.map((workout) => (
						<WorkoutDetails key={workout._id} {...workout} />
					))}
				</div>
				<WorkoutForm />
			</div>
		</>
	);
};

export default Home;
