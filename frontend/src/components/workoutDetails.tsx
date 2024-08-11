import { useEffect } from "react";
import { Workout } from "../types"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Date: 03/20/2021
const WorkoutDetails = ({...workout} : Workout) =>{

  const { dispatch } = useWorkoutsContext();

  useEffect(() => {
		const deleteWorkout = async () => {
			try {
				const response = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

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
				dispatch({type: 'REMOVE_WORKOUT', payload: json});
			} catch (error) {
				console.error("Failed to delete workouts:", error);
			}
		};
		deleteWorkout();
	}, []);
  
  return (
    <>
      <div className=" w-full bg-white mb-4 p-4 flex justify-between">
        <div>
          <p className="font-bold text-primary mb-2">{workout.title}</p>
          <p className="opacity-80"><span className="font-bold text-black">Load (kg)</span>: {workout.load}</p>
          <p className="opacity-80"><span className="font-bold text-black">Reps:</span> {workout.reps}</p>
          <p className="opacity-80">{workout.createdAt.slice(0,10)}</p>
        </div>
        <input 
          onClick={() => console.log(workout._id)}
          type="button" 
          value="Delete" 
          className="self-end bg-red-600 text-white p-2 text-sm rounded-md"
        />
      </div>
    </>
  )
} 

export default WorkoutDetails
