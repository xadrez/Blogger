import { Link } from "react-router-dom"


const Test = () => {
  return (
    <div className=''>
        <h1>Test</h1>
        <Link to='/singlepage'>
        <button className="py-2 px-4 bg-blue-800 rounded-3xl text-white">Back</button>
        </Link>
    </div>
  )
}

export default Test