import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  handleInput = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <header class="searchbar">
          <form class="form" onSubmit={this.handleInput}>
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              name="name"
              value={this.state.name}
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}
