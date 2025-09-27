import { Component } from "react";
import { GifList } from "./components/GifList/GifList";
import { GifButton } from "./components/GifButton/GifButton";
import { GifSearch } from "./components/GifSearch/GifSearch";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Main } from "./AppStyled";

class App extends Component {
  state = {
    search: "Cat",
  };

  changeSearch = (e) => {
    e.preventDefault();
    this.setState({ search: e.currentTarget.children.usersearch.value });
  };

  render() {
    return (
      <Main>
        <GlobalStyle />
        <GifSearch
          search={this.state.search}
          changeSearch={this.changeSearch}
        />
        <GifList search={this.state.search} />
      </Main>
    );
  }
}

export default App;
