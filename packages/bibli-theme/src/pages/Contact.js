import React from 'react';
import { connect, styled } from 'frontity';
import Footer from '../components/Footer';


const Contact = ({state, libraries}) => {

    const Html2React = libraries.html2react.Component
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.items[0].id]
    return (
        <>
            <Styled>
                <Html2React html={post.content.rendered} />
            </Styled>
            <Footer/>
        </>
    );
};

const Styled = styled.div`
background-color : #264653;
color: white;
height: 80vh;
padding: 0px 30px;
`



export default connect(Contact);