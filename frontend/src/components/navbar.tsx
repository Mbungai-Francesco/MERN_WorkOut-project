import { Link } from "react-router-dom"

const Navbar = () =>{
  return (
    <>
      <div className="w-full px-16 p-4 font-bold text-xl bg-white">
        <Link to="/">
          <h1>Workout buddy</h1>
        </Link>
      </div>
    </>
  )
} 

export default Navbar
