import React, { Component } from "react";
import { Card, SearchBox } from "../components";

import { connect } from "react-redux";
import { setSearchField } from "../actions";

// if you want to use the hard coded data
// import { data } from "../data";

const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class CardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    // fetch data from the internet
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ data: user, loading: false }));
  }

  render() {
    const { data } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredList = data.filter((data) => {
      return data.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <SearchBox searchChange={onSearchChange} />
        {this.state.loading ? (
          // if data is still loading
          <div class="loading d-flex justify-content-center m-5 p-5">
            <h2>Data is loading&ensp;</h2>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : filteredList.length > 0 ? (
          // if filtered list is not empty
          <div className="card-list row d-flex align-items-center justify-content-center">
            {filteredList.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
        ) : (
          // if filteredList has no user information or search comes out empty
          <div class="loading d-flex justify-content-center m-5 p-5">
            <h2>No data found...</h2>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
