import React from "react";

export const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options)
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem"}}>
        <img src={props.imgSrc} className="card-img-top" alt="..." style = {{height:"120px" , objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">some Imortant text</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (key, value) => {
                return (
                  <option key={value + 1} value={value + 1}>
                    {value + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
             {priceOptions.map((data)=>{
              return <option key = {data} value = {data}>{data}</option>
             })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
