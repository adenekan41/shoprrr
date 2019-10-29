import React from 'react';

/**
 * @params [SCSS] // without styled components
 */
// import './hompage.styles.scss'


import Directory from '../../components/directory/directory.component';
import { HomepageContainer } from './hompage.styles';

const Homepage = () => {
    return (
        <HomepageContainer>
            <Directory />
        </HomepageContainer>
    )
}

export default Homepage