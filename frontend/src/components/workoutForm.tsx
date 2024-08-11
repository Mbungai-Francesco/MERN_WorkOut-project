import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () =>{
  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('')	
  const [load, setLoad] = useState('')
  const [error, setError] = useState(false)

  const { dispatch } = useWorkoutsContext();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const workout = {title, reps, load}

    const response = await fetch("http://localhost:4000/api/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    })
    const json = await response.json()

    if(!response.ok) {
      setError(true)
    }
    else{
      setTitle('')
      setReps('')
      setLoad('')
      setError(false)
      dispatch({type: 'ADD_WORKOUT', payload: json});
      console.log('new workout added', json);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h3 className="font-bold">Add a new workout</h3>
        <label className="mb-3">
          <p>Excersice title:</p>
          <input type="text" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}/>
        </label>
        <label className="mb-3">
          <p>Reps number:</p>
          <input type="number" 
          onChange={(e) => setReps(e.target.value)}
          value={reps}/>
        </label>
        <label className="mb-3">
          <p>Load (in kg):</p>
          <input type="text" 
          onChange={(e) => setLoad(e.target.value)}
          value={load}/>
        </label>
        <input type="submit" value="Add Workout" className="bg-primary text-white w-fit p-2 text-sm "/>
        <p className={error ? "text-error" : "hidden"}>Error occured in adding workout!</p>
      </form>
    </>
  )
} 

export default WorkoutForm
