import React from 'react';
import { connect } from 'frontity';
import { styled } from 'frontity';

const Image = ({width, height, objectFit, borderRadius, src, alt, cursor}) => {
    return (
        <Img 
        width={width} 
        height={height} 
        objectFit={objectFit} 
        borderRadius={borderRadius} 
        src={src} 
        alt={alt}
        cursor={cursor}
        />
    );
};

const Img = styled.img`
    width: ${(props) => props.width ? props.width : "200px"};
    height: ${(props) => props.height ? props.height : "70%"};
    object-fit: ${(props) => props.objectFit ? props.objectFit : "fill"};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : "0px"};
    pointer-events: none;
    cursor: ${(props) => props.cursor ? props.cursor : null};
`

export default connect(Image);