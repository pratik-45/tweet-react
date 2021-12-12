import React from "react";
import { connect } from "react-redux";
import "./homepage.css";
import { getAllFeed } from "../../store/actions/appActions";
import { Redirect } from "react-router-dom";
import profilePng from "./profile.png";
import moment from "moment-timezone";
class HomePage extends React.Component {
  componentDidMount() {
    this.props.getAllFeed();
  }
  handleListAdd = () => {
    this.props.addList();
  };
  timeFormat = (date) => {
    return moment(date).add('5:30').fromNow();
  }
  render() {
    const { user, tweets } = this.props;
    if (!user) return <Redirect to="/" />;
    console.log(this.props);
    return (
      <div>
      {!tweets.length && (<h2>Loading...</h2>  )}
        {tweets.map((tweet) => (
          <div className="container">
              <div className="col-md-12">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">
                            <img src={profilePng} width="50" height="50" alt="" />{tweet.name?tweet.name:'user Deleted'} <i>@{tweet.username}</i> </h6>
                        </div>
                    </div>
                    <div className="badge"> <span>{this.timeFormat(tweet.doc)}</span> </div>
                </div>
                <div className="">
                    <p className="heading">{tweet.text}</p>
                </div>
            </div>
            </div>
            </div>
            ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.app.tweets,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addList: () => dispatch(addList()),
    getAllFeed: () => dispatch(getAllFeed()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
