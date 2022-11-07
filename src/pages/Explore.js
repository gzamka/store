import { data } from "../utility/products";

export const Explore = () => {

return (
    <div>

        <h1> Explore </h1>
        {data.map((el) => {

                return (
                    <div>
                        <h2> {el.category} </h2>
                    </div>
                    ) 
            })
        }       
    </div>
  );
};
