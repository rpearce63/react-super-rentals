import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setListFilter } from "../redux/actions";

class ListFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  async componentDidMount() {}

  handleFilterEntry(e) {
    this.setState({ value: e.target.value });
    this.props.setListFilter(e.target.value);
  }
  render() {
    return (
      <div className="list-filter">
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.handleFilterEntry(e)}
          className="light"
          placeholder="Filter By City"
        />
        {this.props.children}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setListFilter }, dispatch);
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListFilter);
