import React from "react";
import { connect } from "react-redux";
import Home from "./HomeComponent";
import { Switch, Route, withRouter } from "react-router-dom";
import Login from "./LoginComponent";
import {
  addUser,
  removeUser,
  removeItem,
  editItem,
} from "../redux/actionCreater";
import ItemDetail from "./ItemDetailComponent";
import TopBar from "./TopbarComponent";
import EditItem from "./EditItemComponent";
import Footer from "./Footer";

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
  removeUser: () => dispatch(removeUser()),
  removeItem: (item) => dispatch(removeItem(item)),
  editItem: (item) => dispatch(editItem(item)),
});

class Main extends React.Component {
  render() {
    const itemWithId = ({ match }) => {
      return (
        <ItemDetail
          history={this.props.history}
          item={
            this.props.items.filter(
              (item) => item.id === parseInt(match.params.id)
            )[0]
          }
          editItem={this.props.editItem}
          removeItem={this.props.removeItem}
        />
      );
    };
    const editWithId = ({ match }) => {
      return (
        <EditItem
          history={this.props.history}
          item={
            this.props.items.filter(
              (item) => item.id === parseInt(match.params.id)
            )[0]
          }
          editItem={this.props.editItem}
        />
      );
    };

    return (
      <div>
        <TopBar user={this.props.user} removeUser={this.props.removeUser} />

        <Switch location={this.props.location}>
          <Route
            exact
            path="/"
            component={() => (
              <Home
                user={this.props.user}
                items={this.props.items}
                removeUser={this.props.removeUser}
                removeItem={this.props.removeItem}
              />
            )}
          ></Route>
          <Route
            path="/login"
            component={() => (
              <Login
                history={this.props.history}
                addUser={this.props.addUser}
              />
            )}
          ></Route>
          <Route path="/detail/:id" component={itemWithId}></Route>
          <Route path="/edit/:id" component={editWithId}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
