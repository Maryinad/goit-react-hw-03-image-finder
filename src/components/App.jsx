import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { fetchPhotosData } from '../servisies/Api.js';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button.jsx';
// import { GlobalStyle } from '../utils/GlobalStyles';
import { AppContainer } from './App.styled.js';

export class App extends Component {
  state = {
    searchQuery: '',
    photos: [],
    loading: false,
    error: false,
    currentPage: 1,
    perPage: 12,
  };

  handleSubmit = query => {
    this.setState({ searchQuery: query, currentPage: 1, photos: [] });
  };

  handleAddPhotos = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, currentPage } = this.state;
    try {
      //всегда нужна проверка, если что-то изменилось, тогда посылаем запрос
      if (
        prevState.searchQuery !== searchQuery ||
        prevState.currentPage !== currentPage
      ) {
        const result = await fetchPhotosData(searchQuery, currentPage);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...result],
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <AppContainer>
        <Searchbar handleSubmit={this.handleSubmit} />
        {this.state.photos !== null && (
          <ImageGallery photosData={this.state.photos} />
        )}
        <Button onClick={this.handleAddPhotos} />
        {/* <GlobalStyle /> */}
      </AppContainer>
    );
  }
}
