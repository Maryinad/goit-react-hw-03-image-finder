import { Component } from 'react';
import { Modal } from '../Modal/Modal.jsx';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  // console.log(children);
  state = {
    isOpenModal: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    return (
      <GalleryItem onClick={this.handleToggleModal}>
        <GalleryImg src={this.props.smallPhoto} alt={this.props.alt} />
        {this.state.isOpenModal && (
          <Modal data={this.props.info} closeModal={this.handleToggleModal} />
        )}
      </GalleryItem>
    );
  }
}
