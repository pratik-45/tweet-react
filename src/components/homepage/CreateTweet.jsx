import React, { Component } from "react";
import { connect } from "react-redux";
import { postTweet } from "../../store/actions/appActions";
import { Redirect } from "react-router-dom";

class CreateTweet extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
      debugger
    e.preventDefault();
    e.target.disabled = true;
    this.props.postTweet(this.state);
  };
  render() {
    const {authError,user,tweetCreated} = this.props;
    if(tweetCreated) return <Redirect to="/home" />;
    return (
      <div>
      <div className="container">
        <h3 id="title">Post a Tweet</h3>
        <form onSubmit={this.handleSubmit}>
        <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          <br />
          <textarea
            className="form-control"
            placeholder="What's happening..."
            name="tweet"
            id="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="button"
            className="form-control"
            onClick={this.handleSubmit}
            value="Post Tweet"
            id="btn"
          />
        </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    user: state.auth.user,
    tweetCreated: state.app.tweetCreated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postTweet: (creds) => dispatch(postTweet(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTweet);
