import { Component } from "react";
import axios from "axios";
import { GifItem } from "../GifItem/GifItem";
import { GifButton } from "../GifButton/GifButton";
import { Div, List } from "./GifListStyled";

axios.defaults.baseURL = "https://api.giphy.com/v1/gifs";

export class GifList extends Component {
  state = {
    gifs: [],
    isLoading: false,
    page: 1,
    error: null,
    isNext: true,
  };

  getGifs = async (scroll) => {
    this.setState({ isLoading: true });
    try {
      const request = await axios.get(
        `/search?api_key=baLPvNmErrLk1GelWZvuxcNxkefEt3fn&q=${
          this.props.search
        }&limit=${
          this.state.page * 12
        }&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const next = await axios.get(
        `/search?api_key=baLPvNmErrLk1GelWZvuxcNxkefEt3fn&q=${
          this.props.search
        }&limit=${
          (this.state.page + 1) * 12
        }&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      if (next.data.data.length === (this.state.page + 1) * 12) {
        this.setState({ isNext: true });
      } else {
        this.setState({ isNext: false });
      }
      this.setState({
        gifs: request.data.data,
      });
      setTimeout(() => {
        window.scrollTo({
          top: scroll,
          left: 0,
        });
      }, 100);
    } catch (e) {
      this.setState({ error: e });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = async () => {
    await this.getGifs(0);
  };

  getSnapshotBeforeUpdate = () => {
    return window.scrollY;
  };

  componentDidUpdate = async (prevProps, prevState, scroll) => {
    if (
      JSON.stringify(prevProps.search) !== JSON.stringify(this.props.search) ||
      prevState.page !== this.state.page
    ) {
      await this.getGifs(scroll);
    }
  };

  changePage = () => {
    this.setState((p) => {
      return { page: p.page + 1 };
    });
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : this.state.error ? (
          <p>You have an error: {this.state.error}</p>
        ) : this.state.gifs.length ? (
          <>
            <Div>
              <List>
                {this.state.gifs.map(
                  ({
                    id,
                    images: {
                      original: { url },
                    },
                  }) => (
                    <GifItem key={id} id={id} url={url} />
                  )
                )}
              </List>
            </Div>
            {this.state.isNext ? (
              <GifButton changePage={this.changePage} />
            ) : (
              <></>
            )}
          </>
        ) : (
          <p>Try something different</p>
        )}
      </>
    );
  }
}
