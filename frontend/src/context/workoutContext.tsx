import { createContext, ReactNode, useReducer } from "react";
import { Workout } from "../types";


interface WorkoutState {
  workouts: Workout[]
}

interface WorkoutAction {
  type: string,
  payload: Workout
}

export const WorkoutContext = createContext<{ state: WorkoutState; dispatch: React.Dispatch<WorkoutAction> } | null>(null);

export const workoutsReducer = (state : WorkoutState, action : WorkoutAction) => {
  switch (action.type) {
    case 'SET_WORKOUT':
      return {
        ...state,
        workouts: action.payload
      }
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, action.payload]
      }
    case 'REMOVE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
      }
    case 'UPDATE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.map(workout => workout._id === action.payload._id ? action.payload : workout)
      }
    default:
      return state;
  }
}

export const WorkoutProvider = ({ children } : {children :ReactNode}) => {
  let workouts: Workout[] = [];
  const [ state, dispatch] = useReducer(workoutsReducer, {workouts});


  return (
    <WorkoutContext.Provider value={{state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  );
}

