import React from 'react';
import { connect } from 'frontity';
import { styled } from 'frontity';

const Link = ({href, actions, children, color, margin, fontSize, hoverColor, textDecoration}) => {
    return (
        <StyledLink
            href={href}
            onClick={ event => {
                event.preventDefault();
                actions.router.set(href)
            }}
            color={color}
            margin={margin}
            fontSize={fontSize}
            hoverColor={hoverColor}
            textDecoration={textDecoration}
        >
           {children} 
        </StyledLink>
    );
};

const StyledLink = styled.a`
color : ${(props) => props.color ? props.color : 'black'};
margin : ${(props) => props.margin ? props.margin : null};
font-size : ${(props) => props.fontSize ? props.fontSize : null};
text-decoration : ${(props) => props.textDecoration ? props.textDecoration : 'none'};
cursor : pointer;
&:hover {
        color:  ${(props) => props.hoverColor ? props.hoverColor : null};
    }`

export default connect(Link);