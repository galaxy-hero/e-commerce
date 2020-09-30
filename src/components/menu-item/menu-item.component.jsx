import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'; //higher order component
// a function that takes a comp as an arg and returns a modified comp

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className = {`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className = 'background-image' style={{
            backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className = 'content'>
            <h1 className = 'title'>{title.toUpperCase()}</h1>
            <span className = 'subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
//withrouter will return a superpowered menu item comp with access to history