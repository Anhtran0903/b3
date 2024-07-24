import React, { useEffect, useState } from 'react'
import axios from 'axios'




export default function API() {


    const [data, setData] = useState([])
    const fetchApi = () => {
        const url = "https://66a0a2837053166bcabc1470.mockapi.io/students"
        axios.get(url)
            .then(function (response) {
                setData(response.data)
                console.log(response);
                console.log("aa", data);
            })
            .catch(function (error) {
                console.log(error)
            })


    }
    useEffect(() => {
        fetchApi();

    }, [])

    return (
        <div>API


            {
         

                data.map((index,item) => {
                    <div key={index}>  {item.name}</div>
                 
                })

            
            }
        
      
        </div>
    )
}
