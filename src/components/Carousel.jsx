import { useState, useEffect  , ref} from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


const Carsousel = () => {

        const [index, setIndex] = useState(0);
        const [images, setImages] = useState([]);
        
        useEffect(() => {
            
        }, []);
        
        const handleNext = () => {
            setIndex((prevIndex) => prevIndex + 1);
        };
        
        const handlePrev = () => {
            setIndex((prevIndex) => prevIndex - 1);
        };
    
    return (
        <div className="bg-gray-500 max-w-[300px] min-w-full  relative h-[400px]  carousel bg-[url(../public/assets/arduino_programming.png)] rounded " >
            <button className="absolute  left-0 bottom-0 top-0 opacity-50 hover:opacity-100 " onClick={handlePrev}>
                <ChevronLeftIcon className="w-8 h-8" />
            </button>
            <button className="absolute  right-0 bottom-0 top-0 opacity-50 hover:opacity-100" onClick={handleNext}>
                <ChevronRightIcon className="w-8 h-8" />
            </button>
            {/* dots */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
            {/* title */}
            <div className="p-2 flex flex-col justify-items-center content-around h-full outline-red-500">
                <div className="text-3xl text-yellow-500 drop-shadow-md text-center mt-4">Temperature regulation System</div>

                <p>
                    this is a temperature regulation system that controls the temperature of a room by turning on and off a fan and a heater
                </p>

                <button className="bg-yellow-500 rounded ">
                    view
                </button>
            </div>

        </div>
    );
}

export default Carsousel

