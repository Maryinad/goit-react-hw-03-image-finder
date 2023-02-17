import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { fetchPhotosData } from '../servisies/Api.js';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { Button } from './Button/Button.jsx';
// import { GlobalStyle } from '../utils/GlobalStyles';
import { AppContainer } from './App.styled.js';
import { Loader } from './Loader/Loader.jsx';

export class App extends Component {
  state = {
    searchQuery: '',
    photos: [],
    loading: false,
    error: false,
    currentPage: 1,
    perPage: 12,
    totalHits: 0,
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
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.currentPage !== currentPage
    ) {
      try {
        //всегда нужна проверка, если что-то изменилось, тогда посылаем запрос

        this.setState({ loading: true });
        const result = await fetchPhotosData(searchQuery, currentPage);
        this.setState(prevState => ({
          photos: [...prevState.photos, ...result],
          totalHits: result.totalHits,
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    // const totalPage = Math.round(this.state.totalHits / this.state.perPage);
    return (
      <AppContainer>
        <Searchbar handleSubmit={this.handleSubmit} />
        {this.state.loading && <Loader />}
        {this.state.photos !== null && (
          <ImageGallery photosData={this.state.photos} />
        )}
        {this.state.photos.length !== 0 && (
          // totalPage - 1 &&
          // totalPage
          <Button onClick={this.handleAddPhotos} />
        )}
        {/* <GlobalStyle /> */}
      </AppContainer>
    );
  }
}
