import React from 'react';
import { connect } from 'react-redux';
import { getSinglePortfolio } from '../store';

export default connect(
  (state) => ({
    user: state.user,
    singlePortfolio: state.portfolio.singlePortfolio,
  }),

  (dispatch) => ({
    getSinglePortfolio: (id) => dispatch(getSinglePortfolio(id)),
  })
)(
  class SinglePortfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
      this.props.getSinglePortfolio(this.props.match.params.id);
    }

    render() {
      console.log(this.props);
      return (
        <div className='mainPage'>
          <div className='singlePortfolio'>
            <h1> {this.props.singlePortfolio.portfolioName} </h1>
            <div>SINGLE PORTFOLIO VIEW</div>
          </div>
        </div>
      );
    }
  }
);
