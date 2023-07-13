import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

function RenderItem({ item, removeItem }) {
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        <Link to={`/edit/${item.id}`}>
          <button className="btn btn-secondary mx-1">Edit</button>
        </Link>
        <button
          className="btn btn-danger mx-1"
          onClick={() => {
            removeItem(item);
          }}
        >
          Remove
        </button>
        <Link to={`/detail/${item.id}`}>
          <button className="btn btn-info mx-1">Detail</button>
        </Link>
      </td>
    </tr>
  );
}
const ItemsList = (props) => {
  const menu = props.items.map((item) => {
    return (
      <RenderItem key={item.id} item={item} removeItem={props.removeItem} />
    );
  });

  return (
    <div>
      <h1 className="text-center mt-5">Item List</h1>
      <div className="w-75 p-3 mx-auto">
        <Table bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th className="w-25 ">Action</th>
            </tr>
          </thead>
          <tbody>{menu}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default ItemsList;
