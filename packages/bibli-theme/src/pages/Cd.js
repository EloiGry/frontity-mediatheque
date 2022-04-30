import React from 'react';
import { connect } from 'frontity';
import { styled } from 'frontity';
import Image from '../components/Image';
import { Container } from '../components/Container';
import { motion } from "framer-motion"
import Footer from '../components/Footer';

const containerVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity : 1,
        transition : {
            duration: 0.2,
            ease: 'easeOut'
        }
    }
}

const Cd = ({state, libraries}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component

        return (
            <>
                <Container
                as={motion.div}
                variants={containerVariants}
                initial='initial'
                animate='animate'
                >
                    <FlexCd> 
                        <Image 
                            src={state.source.attachment[post.featured_media].source_url} 
                            alt={state.source.attachment[post.featured_media].id}
                            height='400px'
                            width='300px'
                        />
                        <div style={{marginLeft: '40px'}}>
                            <h1 style={{margin: '10px'}}> <Html2React html={post.title.rendered}/> </h1>
                            <h4 style={{margin: '10px'}}> Auteur : <Html2React html={post.acf.author}/></h4>
                            <h4 style={{margin: '10px'}}> Genre : <Html2React html={state.source.style[post.style[0]].name}/> </h4>
                            <p style={{margin: '10px'}}> <b> Détails </b>: <Html2React html={post.excerpt.rendered}/> </p> 
                            {post.acf.disponible ? 
                                <p> <b> Exemplaire(s) disponible(s)</b> : {post.acf.exemplaire} <span> &#9989; </span> </p> : 
                                <p> <b> Exemplaire(s) disponible(s)</b> : {post.acf.exemplaire} <span> &#10060; </span> </p>
                            }                            
                        </div>
                    </FlexCd>
                    <p style={{margin: "0px 70px"}}> <b> Résumé : </b> <Html2React html={post.content.rendered}/></p>
                    
                    
                    
                </Container>
                <Footer/>
            </>
            
        );
};

const FlexCd = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin : 20px 70px`


export default connect(Cd);