import Card from "./Card";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function TopRest() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (data.length - 4 == slide) return false;
    setSlide(slide + 4);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 4);
  };
  const [data, setData] = useState([]);
  // fetch data from API
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto    overflow-hidden ">
        <div className="my-5 flex items-center justify-between">
          <div className="text-[25px] font-bold  "> Top Restaurant in City</div>
          <div className="flex">
            <div
              className=" cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex   gap-8 duration-1000"
            style={{
              transform: `translateX(-${slide * 10}%)`,
            }}
          >
            {data.map((d, i) => {
              return <Card {...d} key={i} />;
            })}
          </div>
        </div>
      <hr className="my-6 border-[2px]" />
      </div>
    </>
  );
}

export default TopRest;
