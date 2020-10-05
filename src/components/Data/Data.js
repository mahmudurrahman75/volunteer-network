import React, { useEffect, useState } from 'react';
import './Data.css';

const Data = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/register')
        .then(res => res.json())
        .then(data => setData(data));
    }, [])

    return (
        <div>
            <h3 style={{textAlign:"center", margin:"30px"}}>The Registered Quantity: {data.length}</h3>
            
            {
                data.map(pd => 
                

                    <div class="container">
                        <div class="row">
                            
                            <li class="col">{pd.name}</li>
                            <li class="col">{pd.email}</li>
                            <li class="col">{pd.date}</li>
                            <li class="col">{pd.OrganizeLibrary}</li>
                            <button>Delete</button>
                        </div>
                        
                    </div>

                )
            }



        </div>
    );
};

export default Data;