import { useParams } from "react-router";
import { useState, useEffect } from "react";import { Link } from "react-router-dom";
// import axios from "axios";
import { BookCard } from "../BookCard/BookCard";
import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";
import styled from "styled-components";
// import axios from "axios";
// import { useParams} from "react-router";
// import {useEffect,useState} from "react"

import axios from "axios";
import { Div, Div2 } from "../../style";


export const Section = () => {
  // you will receive section name from URL here.
  // Get books for only this section and show
  //   Everything else is same as Home page
  const data = useParams()
  const[Data,SetData] = useState([])
  console.log('Data in page', Data);
  console.log('data', data);
  let ID = data.section.split(":")[1]
  console.log('ID', ID);
  // const Main = styled.div`
  //   /* Same as Homepage */
  // `;
  useEffect(()=>{
    axios.get(`http://localhost:8080/products?section=${ID}`).then((res)=>{
      console.log('res', res.data);
      SetData(res.data)
      
    })
  },[])


  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        {
          //   Show section name here
          ID
        }
      </h2>
      <SortAndFilterButtons handleSort={"give sorting function to component"} />

      <Div2 className="sectionContainer">
        {/* SHow same BookCard component here, just like homepage but with books only belong to this Section */}
        {Data.map((ele)=>{
          return <Div>
          <Link to={`/bookdetailspage/:${ele.id}`}>
          
            <img src={ele.imageUrl} alt="image" />
            
            <h2>{ele.title}</h2>
            <p>{ele.price}</p>
          
          </Link>
        </Div>
        })}
      </Div2>
    </>
  );
};
