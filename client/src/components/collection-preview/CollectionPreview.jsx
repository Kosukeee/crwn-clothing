import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import { CollectionPreviewContainer, Title, PreviewDiv } from './CollectionPreview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <Title>{title.toUpperCase()}</Title>
    <PreviewDiv>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewDiv>
  </CollectionPreviewContainer>
);

export default CollectionPreview;