import React from 'react';
import './preview-collection.styles.scss';
import PreviewItem from '../preview-item/preview-item.component';
import PropTypes from 'prop-types';

const PreviewCollection = ({ items }) => {
  return (
    <React.Fragment>
      <div className="collection-preview">
        <div className="preview">
          {items
            .filter((item, index) => index < 4)
            .map(item => {
              return <PreviewItem key={item.id} item={item} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

PreviewCollection.propTypes = {
  items: PropTypes.array,
};

export default PreviewCollection;
