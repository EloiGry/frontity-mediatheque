import React from 'react';
import { connect, styled } from 'frontity';

const BoxHover = ({children, backgroundImage, width, height}) => {
    return (
        <HoverMove backgroundImage={backgroundImage}  width={width} height={height}>
            {children}
        </HoverMove>
    );
};

const HoverMove = styled.div`

    background-image : linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${(props) => props.backgroundImage ? props.backgroundImage : null});
    background-repeat: no-repeat;
    background-size : contain;
    width : ${(props) => props.width ? props.width : "200px"};
    height : ${(props) => props.height ? props.height : "400px"};
    border-radius: 20px;
    margin : 20px;
    padding: 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color : white;
    cursor : pointer;
    `

export default connect(BoxHover);