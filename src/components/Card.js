import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem"}}>
        <img src="https://recipes.timesofindia.com/photo/53281477.cms?imgsize=145285" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
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
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};
