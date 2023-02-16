import { createPortal } from 'react-dom';
import { Component } from 'react';

import { Overlay, ModalContainer } from './modal.styled';

export class Modal extends Component {
  //   const { largeImageURL, tags } = data;
  //   console.log('data', data.largeImageURL);

  onEscapePress = event => {
    // console.log(event.code === 'Escape');
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  render() {
    const { largeImageURL, tags } = this.props.data;
    // console.log(largeImageURL, tags);
    return createPortal(
      <Overlay>
        <ModalContainer>
          <img src={largeImageURL} alt={tags} />
        </ModalContainer>
      </Overlay>,
      document.getElementById('modal')
    );
  }
}
