import React from "react";
import { Control, Form } from "react-redux-form";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(value) {
    this.props.addItem(value);
    this.props.history.push("/");
  }

  render() {
    const item = this.props.item;
    return (
      <div>
        <h1 className="text-center">Add Item</h1>
        <Form
          model="itemFormAdd"
          style={{ width: "50%", margin: "auto", padding: "auto 50px" }}
          onSubmit={(item) => this.handleSubmit(item)}
        >
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              Name
            </label>
            <Control.text model=".name" className="form-control" />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Price
            </label>
            <Control.text model=".price" className="form-control" />
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Description
            </label>
            <Control.text model=".description" className="form-control" />
          </div>
          <div className="text-center">
            <button type="Submit" class="btn btn-primary mb-4 ">
              Save
            </button>
          </div>
        </Form>
      </div>
    );
  }
}
export default AddItem;
