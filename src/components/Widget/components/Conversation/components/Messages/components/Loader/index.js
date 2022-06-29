import React from 'react'; 
import PropTypes from 'prop-types';

import './styles.scss';

const Loader = props => 
<div className={`rcw-loader ${props.typing && 'active'}`}>
  <div className="rcw-loader-container">
    <span className="rcw-loader-dots"></span>
    <span className="rcw-loader-dots"></span>
    <span className="rcw-loader-dots"></span>
  </div>
</div>;

Loader.propTypes = {
  typing: PropTypes.bool,
};

export default Loader; 
