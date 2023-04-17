import "./home.css";

export default function Home(){
    return(<>
    <body>
    <div className="min-w-full flex flex-col justify-center items-center  min-h-screen">
        <h1 className="Tour  text-5xl text-black">let's Explore the India Together</h1>
        <p className="text-black text-center text-xl">india is full of large cities with modern tourist attracts,smaller towns. <br></br>its attracts millions of tourist every year and considered one of the most popular tourist destination in the world.</p>
        <button className="text-black border-2 rounded-lg p-2 mt-2">Explore</button>
    </div>
    </body>
    </>)
}