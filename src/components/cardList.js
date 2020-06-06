import React, { Component } from "react";
// import { data } from "../data";
import { Card, SearchBox } from "../components";

export default class cardList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredList: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState({ data: user, filteredList: user, loading: false })
      );
  }

  onSearchChange = (event) => {
    let searchField = event.target.value;
    const filteredList = this.state.data.filter((data) => {
      return data.name.toLowerCase().includes(searchField.toLowerCase());
    });
    this.setState({ filteredList });
  };

  render() {
    return (
      <div>
        <SearchBox searchChange={this.onSearchChange} />
        {this.state.loading ? (
          <div class="loading d-flex justify-content-center m-5 p-5">
            <h2>Data is loading&ensp;</h2>
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : this.state.filteredList.length > 0 ? (
          <div className="card-list row d-flex align-items-center justify-content-center">
            {this.state.filteredList.map((card) => (
              <Card key={card.id} info={card} />
            ))}
          </div>
        ) : (
          <div class="loading d-flex justify-content-center m-5 p-5">
            <h2>No data found...</h2>
          </div>
        )}
      </div>
    );
  }
}
