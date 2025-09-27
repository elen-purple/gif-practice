import { Component } from "react";
import { Button } from "./GifButtonStyled";

export class GifButton extends Component {
  render() {
    return (
      <>
        {
          <Button type="button" onClick={this.props.changePage}>
            Load more
          </Button>
        }
      </>
    );
  }
}
