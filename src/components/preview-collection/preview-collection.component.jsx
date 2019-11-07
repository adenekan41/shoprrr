import React from 'react'
import './preview-collection.styles.scss'
import PreviewItem from '../preview-item/preview-item.component'

const PreviewCollection = ({title, items}) => {
    return (
        <React.Fragment>
        {/* <h1 className="title">{title.toUpperCase()}</h1> */}
        <div className="collection-preview">
            <div className="preview">
                {
                    items
                    .filter((item,index) => index < 4)
                    .map((item) => {
                        return (
                            <PreviewItem key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </div>
        </React.Fragment>
    )
}

export default PreviewCollection