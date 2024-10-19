import Card from "./Card";
const navData = [
  { name: "Filters" },
  { name: "Popularity" },
  { name: "Price" },
  { name: "Rating" },
  { name: "Nearby" },
  { name: "Sort By" },
  { name: "Special Offers" },
  { name: "Menu" },
  { name: "Contact" }, 
];
import { useState, useEffect, useRef } from "react";

export default function OnlineDelivery() {
  const [isAtTop, setIsAtTop] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (myRef.current) {
        const rect = myRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [data, setData] = useState([]);
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
      <div
        ref={myRef}
        className="max-w-[1200px] mx-auto mt-9   overflow-hidden "
      >
        <div className="my-5 flex  items-center justify-between">
          <div className="text-[25px] font-bold  ">
            Restaurants with online food delivery in Nagpur
          </div>
        </div>

        <div
          className={
            isAtTop ? "fixed top-0 z-[999999] w-full left-0 bg-white" : ""
          }
        >
          <div className="max-w-[1200px] mx-auto flex my-4 justify-between  ">
            { navData.map((item,index)=>
            (<div key={index} className="rounded p-3 m-1 text-center shadow-md ">   {item.name} </div>)
            )}  
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-4 gap-8  ">
            {data.map((d, i) => {
              return <Card {...d} key={i} />;
            })}
          </div>
        </div>
        <hr className="border-[2px] my-6" />
      </div>
    </>
  );
}
