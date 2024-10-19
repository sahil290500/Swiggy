import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function Category() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (category.length - 8 == slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };
  const [category, setCategory] = useState([]);
  // fetch data from API
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="max-w-[1200px] mx-auto  ">
        <div className="my-3 flex items-center justify-between">
          <div className="text-[25px] font-bold  ">
            {" "}
            What`s on your mind ???
          </div>
          <div className="flex">
            <div
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {category.map((item, index) => (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              className="w-[150px] shrink-0 duration-700"
            >
              <img
                key={index}
                src={"http://localhost:5000/images/" + item.image}
                alt="Image"
              />
            </div>
          ))}
        </div>
      <hr className="my-6 border-[2px]"/>
      </div>
    </>
  );
}

export default Category;
