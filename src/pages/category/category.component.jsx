import React from 'react'
// import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import {selectCollection } from '../../redux/shop/shop.selectors'
import PreviewItem from '../../components/preview-item/preview-item.component'

import './category.styles.scss'
const CategoryPage = ({ match,category }) => {
    const {title, items} = category
    console.log(match)
    return(
        <div className="collection-page">
            <h2 className="title">{title} </h2>

            <div className="items">
                {
                    items.map(item => (
                        <PreviewItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
} 
const mapStateToProps = (state, ownProps) => ({
     category: selectCollection(ownProps.match.params.categoryId)(state)
})
export default connect(mapStateToProps)(CategoryPage)