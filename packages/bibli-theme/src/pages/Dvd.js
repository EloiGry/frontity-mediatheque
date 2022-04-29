import React from 'react';
import { connect } from 'frontity';
import { styled } from 'frontity';
import Image from '../components/Image';
import { Container } from '../components/Container';
import { motion } from "framer-motion"

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

const Dvd = ({state, libraries}) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component
    console.log(post);
    
        return (
            <Container
            as={motion.div}
            variants={containerVariants}
            initial='initial'
            animate='animate'
            >
                <FlexDvd> 
                    <Image 
                        src={state.source.attachment[post.featured_media].source_url} 
                        alt={state.source.attachment[post.featured_media].id}
                        height='400px'
                        width='300px'
                    />
                    <div style={{marginLeft: '40px'}}>
                        <h1 style={{margin: '10px'}}> <Html2React html={post.title.rendered}/> </h1>
                        <h4 style={{margin: '10px'}}> Auteur : <Html2React html={post.acf.author}/></h4>
                        <h4 style={{margin: '10px'}}> Genre : <Html2React html={state.source.categorie[post.categorie[0]].name}/> </h4>
                        <h4 style={{margin: '10px'}}> Acteurs : <Html2React html={post.acf.actors}/> </h4>
                        <p style={{margin: '10px'}}> <b> Détails : </b> <Html2React html={post.excerpt.rendered}/> </p>  
                        {post.acf.disponible ? 
                            <p> <b> Exemplaire(s) disponible(s)</b> : {post.acf.exemplaire} <span> &#9989; </span> </p> : 
                            <p> <b> Exemplaire(s) disponible(s)</b> : {post.acf.exemplaire} <span> &#10060; </span> </p>
                        }  
                    </div>
                </FlexDvd>
                <p style={{margin: "0px 70px"}}> <b> Résumé : </b> <Html2React html={post.content.rendered}/></p>
                
                
                
            </Container>
            
        );
};

const FlexDvd = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin : 20px 70px`


export default connect(Dvd);