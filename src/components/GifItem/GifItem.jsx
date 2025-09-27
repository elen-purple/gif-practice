import { Component } from "react";
import { Image } from "./GifItemStyled";

export class GifItem extends Component {
  render() {
    return (
      <li id={this.props.id}>
        <Image src={this.props.url} alt="gif" />
      </li>
    );
  }
}
