import "./home.css";
import { Link } from "react-router-dom"

export default function Home(){
    return(<>
    <body>
    <div className="min-w-full flex flex-col justify-center items-center  min-h-screen">
        <h1 className="Tour  text-5xl text-black">let's Explore the India Together</h1>
        <p className="text-black text-center text-xl">India is full of large cities with modern tourist attracts,smaller towns. <br></br>Its attracts millions of tourist every year and considered one of the most popular tourist destination in the world.</p>
       <Link to="/explore"><button className="text-black border-2 rounded-lg p-2 mt-2">Explore</button>
       </Link> 
    </div>
    </body>
    </>)
}