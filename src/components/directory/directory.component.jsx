import React, { Component } from 'react';
import MenuItem  from '../menu-item/menu-item.component';
import './directory.styles.scss'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
class Directory extends React.Component {
    
    render (){
        const {sections} = this.props
        return (
            <div className="directory-menu">
                {
                    sections.map(({id, ...rest}) => { 
                        return(
                             <MenuItem key={id} {...rest} />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps,null)(Directory)