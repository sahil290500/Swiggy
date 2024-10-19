function Explore() {
  const city = [
    { cityName: "Mumbai" },
    { cityName: "Delhi" },
    { cityName: "Kolkata" },
    { cityName: "Chennai" },
    { cityName: "Bangalore" },
    { cityName: "Hyderabad" },
    { cityName: "Pune" },
    { cityName: "Jaipur" },
    { cityName: "Indore" },
    { cityName: "Lucknow" },
    { cityName: "Kanpur" },
    { cityName: "Nagpur" },
    { cityName: "Bhopal" },
    { cityName: "Udaipur" },
    { cityName: "Gorakhpur" },
    { cityName: "Ranchi" },
    { cityName: "Vadodara" },
    { cityName: "Surat" },
    { cityName: "Ahmedabad" },
    { cityName: "Bhavnagar" },
  ];
  const bestCuisines = [
    { cuisineName: "Indian" },
    { cuisineName: "Italian" },
    { cuisineName: "Chinese" },
    { cuisineName: "American" },
    { cuisineName: "Mexican" },
    { cuisineName: "Thai" },
    { cuisineName: "Fast Food" },
    { cuisineName: "Japanese" },
    { cuisineName: "Spanish" },
    { cuisineName: "French" },
    { cuisineName: "German" },
    { cuisineName: "Vegan" },
    { cuisineName: "Vegetarian" },
    { cuisineName: "Sushi" },
    { cuisineName: "Burger" },
    { cuisineName: "Pizza" },
  ];
  return (
    <div className="max-w-[1200px] mx-auto ">
      <h1 className="text-[25px] font-bold mb-5 ">
        Best Places to Eat Across Cities
      </h1>
      <div className="mb-9">
        <div className="grid grid-cols-4 gap-9 p-3">
          {city.map((city, index) => (
            <div
              key={index}
              className="p-3 text-[17px] font-semibold bg-[#f0f0f0] rounded-md text-center flex justify-center items-center"
            >
              {city.cityName}
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-[25px] font-bold mb-5 ">Best Cuisines Near Me</h1>
      <div className="mb-9">
        <div className="grid grid-cols-4 gap-9 p-3">
          {bestCuisines.map((item, index) => (
            <div
              key={index}
              className="p-3 text-[17px]  bg-[#f0f0f0] rounded-md text-center flex justify-center items-center"
            >
              {item.cuisineName} Restaurants Near Me
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
