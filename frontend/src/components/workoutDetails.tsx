import { Workout } from "../types"

// Date: 03/20/2021
const WorkoutDetails = ({...workout} : Workout) =>{
  return (
    <>
      <div className=" w-full bg-white mb-4 p-4">
        <p className="font-bold text-primary mb-2">{workout.title}</p>
        <p className="opacity-80"><span className="font-bold text-black">Load (kg)</span>: {workout.load}</p>
        <p className="opacity-80"><span className="font-bold text-black">Reps:</span> {workout.reps}</p>
        <p className="opacity-80">{workout.createdAt.slice(0,10)}</p>
      </div>
    </>
  )
} 

export default WorkoutDetails
