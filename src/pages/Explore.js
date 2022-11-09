import { height, style } from "@mui/system";
import { useState, useEffect } from "react";
import { data } from "../utility/products";


export const Explore = () => {

    // const [hover, setHover] = useState(false);

    // const changeBackground = (e) => {
    //     e.target.style.backgroundColor = 'red';
    // }

return (
    <div>
        <h1> Categories </h1>
        <div style={{...mystyle.categoryContainer}}>
            

            {data.map((el) => {
                
                return (
                    <div key={el.id} 
                    style={{...mystyle.category }}>
                                {el.category}
                            </div>
                        ) 
                    })
                }       
        </div>
    </div>
  );
};


const mystyle = {
    
    categoryContainer: {
        width: '100vh',
        height: '100vh',
        display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between'    

    },
    
    category: {
        width: "35%", 
        height: "140px", 
        display: 'flex', 
        border: '1px solid black',
        borderRadius: '5px',
        margin: '5px',
        textAlign: 'center',

    },

    hover: {
        width: "50%",
        backgroundColor: 'orange'

    }

}