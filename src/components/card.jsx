import { Card } from "flowbite-react"

export default function Flowcard(){
    return (<>
    <div className="flex flex-wrap justify-evenly text-justify">
    <div className="max-w-sm m-3 p-3">
  <Card imgSrc="Images/bus.jpg">
    
    <h5 className="text-2xl font-bold tracking-tight text-black-600 dark:text-white">
      Buses
    </h5>
     <button className="bg-blue-500 text-white rounded-full p-1 m-1">Book Now</button>
  </Card>
</div>

<div className="max-w-sm m-3 p-3">
  <Card imgSrc="Images/traveller.jpg">
    
    <h5 className="text-2xl font-bold tracking-tight text-black-600 dark:text-white">
      Traveller
    </h5>
    <button className="bg-blue-500 text-white rounded-full m-1 p-1">Book Now</button>
  </Card>
</div>
    
<div className="max-w-sm m-3 p-3">
  <Card imgSrc="Images/Suv.jpg">
    
    <h5 className="text-2xl font-bold tracking-tight text-black-500 dark:text-white p-4">
      Suv Car
    </h5>
    <button className="bg-blue-500 text-white rounded-full m-1 p-1">Book Now</button>
  </Card>
</div>

<div className="max-w-sm m-3 p-3">
  <Card imgSrc="Images/sedan2.jpg">
    
    <h5 className="text-2xl font-bold tracking-tight text-black-600 dark:text-white">
     Sedan Car
    </h5>
    <button className="bg-blue-500 text-white rounded-full m-1 p-1">Book Now</button>
  </Card>
</div>

<div className="max-w-sm m-3 p-3">
  <Card imgSrc="Images/bike.jpg">
    
    <h5 className="text-2xl font-bold tracking-tight text-black-500 dark:text-white">
     Travel Bikes
    </h5>
    <button className="bg-blue-500 text-white rounded-full m-1 p-1">Book Now</button>
  </Card>
</div>
</div>
    </>)
}
