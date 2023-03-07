import React from "react";
import newsone from "../assets/newsone.jpg";
import DetailNews from "./DetailNews";
import { useNavigate } from "react-router-dom";

const Card = ({ news }) => {
  const nevigate = useNavigate()
  const sendDetail = (ele) =>{   
    nevigate('/detailnews',{ state: { ele: ele}})    
  }
  return (
    <>
      {news.map((ele) => {
        return ( 
          <div key={ele.number} onClick={() => sendDetail(ele)} className="flex my-1 cursor-pointer shadow-lg rounded-lg">
            <img
              className="md:h-44 md:w-80 sm:h-40 sm:w-72 h-24 w-40"
              src={ele.image}
              alt="image"
            />
            <div className="md:px-3 sm:px-3 px-1 hover:bg-slate-50">
              <div className="md:text-md sm:text-lg text-sm">{ele.heading}</div>
              <div className="text-md md:block sm:block hidden">{ele.subHeadind}</div>  
              <button className="sm:text-sm text-xs text-blue-500 hover:text-blue-600">read more</button>        
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
