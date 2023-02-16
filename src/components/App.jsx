import React from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { fetchPhotosData } from 'servisies/Api.js';

export class App extends React.Component {
  state = {
    photos: null,
    loading: false,
    error: false,
    searchQuery: '',
  };

  handleSubmit = query => {
    this.setState({ searchQuery: query });
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery } = this.state;
    try {
      if (prevState.searchQuery !== searchQuery) {
        const result = await fetchPhotosData(searchQuery);
        this.setState({ photos: result });
        console.log(result);
      }
    } catch (error) {
      this.state({ error: error.message });
    } finally {
    }
  }

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.handleSubmit} />
      </>
    );
  }
}
