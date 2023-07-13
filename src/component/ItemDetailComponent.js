import React from "react";
import TopBar from "./TopbarComponent";
import ItemsList from "./ItemsListComponent";
import { Link } from "react-router-dom";

const ItemDetail = (props) => {
  const item = props.item;
  console.log(item);
  return (
    <div>
      <div className="text-center mt-5">
        <h1>Item detail</h1>
      </div>
      <div className="col-md-6 mx-auto mt-5">
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">
              ID: {item.id}
            </strong>
            <h4 className="">{item.name}</h4>
            <div className="mb-1 text-dark">Price: {item.price}</div>
            <p className="card-text mb-auto">
              Description:
              <br />
              {item.description}
            </p>
            <div className="d-flex mt-2">
              <Link to={`/edit/${item.id}`}>
                <button className="btn btn-secondary mx-1">Edit</button>
              </Link>
              <button
                className="btn btn-danger mx-1"
                onClick={() => {
                  props.removeItem(item);
                  props.history.push("/");
                }}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
