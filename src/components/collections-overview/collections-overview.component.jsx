import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss'
const CollectionsOverview = ({collections}) => {
    return(
        <div className="shop-page">
            {
                collections.map(collection => {
                    return (
                        <PreviewCollection key={collection.id}  {...collection}/>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
})
export default connect(mapStateToProps, null)(CollectionsOverview)