import React from 'react';

export function SmallPortfolio(props) {
  if (props.userId === props.user.id) {
    return (
      <a href={`/portfolio/${props.id}`}>
        <div className='smallPortfolio'>
          <h4>{props.portfolioName}</h4>
        </div>
      </a>
    );
  } else return <></>;
}
