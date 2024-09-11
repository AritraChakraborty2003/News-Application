import React, { useEffect, useState } from "react";
import axios from "axios";
const Search = () => {
  const [data, setData] = useState("");
  const [response, setResponse] = useState([]);
  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await axios.get("https://api.quizdrobe.online/");
      console.log(response.data);
      setResponse(response.data);
    } catch {
      console.log("Error occured");
    }
  };

  useEffect(() => {
    if (data === "") {
      console.log("Fetch Data ignored");
    } else {
      const timer = setTimeout(() => {
        fetchData();
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [data]);
  return (
    <div className="mt-[5vmin] w-[100vw] flex justify-center items-center">
      <form className="w-[75vw] lg:w-[52vw] border-[1px]  h-[12vmin] lg:h-[8vmin]">
        <input
          type="text"
          name="news"
          className="w-[90vw] lg:w-[50vw]  h-[11vmin] lg:h-[7vmin] p-3"
          id="news"
          onChange={(e) => {
            console.log(e.target.value);
            setData(e.target.value);
          }}
          placeholder="Whats on your mind to Search..."
        />
      </form>
      <div className="searchHolder bg-[#4399d6] border-[1px] h-[12vmin] lg:h-[8vmin] w-[15vmin] p-2 lg:w-[12vmin] flex justify-center items-center">
        <img
          src={require("../assets/newicon.png")}
          className="max-w-full max-h-full object-contain"
          alt="Search"
        />
      </div>
    </div>
  );
};

export default Search;
