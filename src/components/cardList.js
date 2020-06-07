import React, { Component } from "react";
import { Card, SearchBox } from "../components";

import { connect } from "react-redux";
import { setSearchField, requestData } from "../actions";

// if you want to use the hard coded data
// import { data } from "../data";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchContact.searchField,
    data: state.onRequestData.data,
    isPending: state.onRequestData.isPending,
    error: state.onRequestData.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestData: () => dispatch(requestData()),
  };
};

class CardList extends Component {
  componentDidMount() {
    // fetch data from the internet using reducer
    this.props.onRequestData();
  }

  render() {
    const { searchField, onSearchChange, data, isPending } = this.props;
    const filteredList = data.filter((data) => {
      return data.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div>
        <SearchBox searchChange={onSearchChange} />
        {isPending ? (
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
          <div className="loading d-flex justify-content-center m-5 p-5">
            <h2>No data found...</h2>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
