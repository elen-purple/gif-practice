import { Component } from "react";
import { Button, Form, Input } from "./GifSearchStyled";

export class GifSearch extends Component {
  state = {
    value: this.props.search,
  };

  changeValue = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.props.changeSearch}>
        <Input
          type="text"
          name="usersearch"
          onChange={this.changeValue}
          value={this.state.value}
          placeholder="Cat"
          required
        />
        {this.state.value ? (
          <Button type="submit">Search</Button>
        ) : (
          <Button disabled type="submit">
            Search
          </Button>
        )}
      </Form>
    );
  }
}
