import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  linkUrl: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withRouter(MenuItem);
