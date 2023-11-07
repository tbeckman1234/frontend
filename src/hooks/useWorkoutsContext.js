import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    // checks if a component accessing this function is a child wrapped by the context provider 
    if (!context) {
        throw Error('useWorkoutsContext must be used inside a WorkoutscontextProvider')
    }

    return context
}