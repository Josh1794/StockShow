import React from 'react';
import { connect } from 'react-redux';
import { SmallPortfolio } from './smallPortfolio';
import { getAllPortfolios, postPortfolio } from '../store';

export default connect(
  (state) => ({
    user: state.user,
    portfolio: state.portfolio,
  }),

  (dispatch) => ({
    getAllPortfolios: (userId) => dispatch(getAllPortfolios(userId)),
    // postPortfolio: (name, userId) => dispatch(postPortfolio(name, userId)),
  })
)(
  class Portfolio extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        // portfolioName: '',
      };

      // this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.props.getAllPortfolios(this.props.user.id);
    }

    // handleChange(event) {
    //   const target = event.target;
    //   const value = target.value;
    //   const name = target.name;

    //   this.setState({
    //     [name]: value,
    //   });
    // }

    // async handleSubmit() {
    //   const name = this.state.portfolioName;
    //   const userId = this.props.user.id;

    //   this.props.postPortfolio(name, userId);
    // }

    render() {
      return (
        <div className='mainPage'>
          <h2>Your Portfolios</h2>
          <br />
          <div className='portfolioSection'>
            <div className='smallPortfolioSection'>
              {this.props.portfolio.portfolios.map((portfolios) => (
                <SmallPortfolio
                  key={portfolios.id}
                  {...portfolios}
                  user={this.props.user}
                  portfolios={this.props.portfolio.portfolios}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
);
