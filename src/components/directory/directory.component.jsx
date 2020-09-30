import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

//this will be a class component because it stores the state
//value of the menu items that we want to pass and create the
//menu items with

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                  title: 'smartphones',
                  imageUrl: 'https://colorlib.com/wp/wp-content/uploads/sites/2/iphone-11-mockups.jpg',
                  id: 1,
                  linkUrl: 'smartphones'
                },
                {
                  title: 'hardware',
                  imageUrl: 'https://cdn.mos.cms.futurecdn.net/MsgWv4cQznKqM4MjgaX4TD-1920-80.jpg.webp',
                  id: 2,
                  linkUrl: 'shop/hardware'
                },
                {
                  title: 'accessories',
                  imageUrl: 'https://cdn.mos.cms.futurecdn.net/kbpt9fYfJbKbJ5WrHKRhrS-1920-80.jpg.webp',
                  id: 3,
                  linkUrl: 'shop/accessories'
                },
                {
                  title: 'laptops',
                  imageUrl: 'https://images.anandtech.com/doci/13893/asus-rog-mothership-678_678x452.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/laptops'
                },
                {
                  title: 'PCs',
                  imageUrl: 'https://news-cdn.softpedia.com/images/news2/asus-reveals-the-rog-g11-gaming-desktop-491165-2.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/pcs'
                }]
        }
    }

    render() {
        return (
            <div className = 'directory-menu'>
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;