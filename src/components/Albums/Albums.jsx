import axios from "axios";

import { Component } from "react";

class Albums extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
  };
  async componentDidMount() {
    this.fetchAlbums();
  }
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchAlbums();
    }
  }
  showMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };
  async fetchAlbums() {
    const { page } = this.state;
    this.setState({ loading: true });

    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?page=${page}&_limit=10`
      );

      this.setState((prevState) => {
        return {
          items: [...prevState.items, ...data],
          loading: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { items, loading } = this.state;
    const { showMore } = this;

    const elements = items.map(({ id, title }) => <li key={id}>{title}</li>);
    return (
      <>
        <div className="container">
          {Boolean(items.length) && (
            <>
              <ul>{elements}</ul>
              {loading && <p>Loading...</p>}
              <button type="button" onClick={showMore}>
                Show More
              </button>
            </>
          )}
        </div>
      </>
    );
  }
}

export default Albums;
