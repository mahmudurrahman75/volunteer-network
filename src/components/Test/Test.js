import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import './Test.css';
// import riverClean from '../../images/photos/riverClean.png';

const Test = () => {


    const [info, setInfo] = useState(fakeData);
    console.log(info);


    return (
        <div className="row">
            {
                info.map(pb => 
                <div className="col-md-3">
                    
                    {/* <img src={require(`../../images/photos/${pb.pic}`)} alt=""/> */}
                    
                    <Link  to ="/register"><button className="testCard">Register Name <br/> {pb.name}</button></Link>
                    
                    
                </div>)
            }
            
        </div>
    );
};

export default Test;