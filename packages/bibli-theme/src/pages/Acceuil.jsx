import React from 'react';
import { connect } from 'frontity';
import { motion, useAnimation } from 'framer-motion';
import { styled } from 'frontity';
import Image from '../components/Image';
import Slider from '../components/Slider';
import { Container } from '../components/Container';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import {useEffect, useState} from 'react'
import CircleLoader from '../components/CircleLoader';

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

const IconVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity : [0.6,0,0.6,0,0.6,0],
        textShadow: "3px 0px 4px #293241",
        transition : {
            duration : 5,
        }
    }
}


const Acceuil = ({state, libraries}) => {
    const [value, setValue] = useState([])
    const controls = useAnimation();
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      useEffect(() => {
        if (state.source.actualites) {

            const actu = Object.values(state.source.actualites)
            setValue(actu)
        }

      }, [state.source.actualites])
      
      

    let arrayImage = []
    const attachment = Object.keys(state.source.attachment).map(Number)
    attachment.forEach(item => {
        if (arrayImage.length < 10) {
            arrayImage.push(state.source.attachment[item].source_url)
        }
        })
    const Html2React = libraries.html2react.Component
    
    
    if (!state.source.actualites) {
        return (
            <CircleLoader/>
        )
    }


    return (
        <motion.div
            variants={containerVariants}
            initial='initial'
            animate='animate'
        >
            <Slider/>
            <Container> 
            <h2 style={{margin: '20px 0px', color :"#121212", fontSize:'35px', fontStyle: 'italic'}}>
                Les actualités de la semaine  
            </h2>
                <Grid 
                as={motion.div}
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x:0 },
                  hidden: { opacity: 0, x: -200}
                }}>
                    {value.map(item => {
                        return (
                            <BoxLayout key={item.id}>
                                <Padding>
                                    <h4 style={{margin: '7px'}}> <Html2React html={item.title.rendered} /> </h4>
                                    <div style={{margin: '7px'}}>
                                        <Overflow> <Html2React html={item.content.rendered}/> </Overflow>
                                        <a textDecoration='underline' target="_blank" href={item.acf.lien}> Voir plus</a>
                                    </div>
                                    <EndBox style={{margin: '7px'}}>
                                        <Source> Lien :<a href={item.acf.lien} target="_blank">  <Html2React html={item.acf.lien}/> </a></Source>
                                        <Source> Source : <i> <Html2React html={item.acf.journal}/></i> </Source>
                                    </EndBox>
                                </Padding>
                            </BoxLayout>
                        )
                    })}
                </Grid>
            </Container>
            <Flex> 
                <h3 style={{fontSize:'35px', fontStyle: 'italic'}}> Nos nouveautés </h3>
                <TopIcon>
                    &#187; 
                </TopIcon>
            </Flex>
                <Carousel 
                as={motion.div}
                whileTap={{cursor: 'grabbing'}}>
                    <InnerCarousel 
                        as={motion.div}
                        drag='x'
                        dragConstraints={{right: 0, left: -1537}}
                    > 
                       {arrayImage.map(image => {
                           return (
                               <div key={image}>
                                <Item>
                                        <Image src={image} alt="image" height="300px" borderRadius='20px'/>
                                </Item>
                               </div>
                                
                                )
                            })} 
                    </InnerCarousel>
                    <Icon
                        as={motion.div}
                        variants={IconVariants}
                        initial='initial'
                        animate='animate'
                    >
                             &#187; </Icon>
                </Carousel>
                <Footer/>
                
        </motion.div>
    );
};

const Item = styled.div`
padding : 40px;
`
const Carousel = styled.div`
cursor: grab;
overflow: hidden;
position: relative;
background: rgb(38,70,83);
background: linear-gradient(0deg, rgba(38,70,83,1) 0%, rgba(255,255,255,1) 50%);
`
const InnerCarousel = styled.div`
display: flex;
`

const Icon = styled.div`
font-size: 70px;
font-weight: 700;
position: absolute;
top : 30%;
right: 60px;
color: #293241;`

const Flex = styled.div`
display: flex;
align-items: center;
justify-content: end;
margin-right : 20px;
color: #293241;
`
const TopIcon = styled.div`
font-weight: 700;
font-size: 35px;
font-style: italic;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 25px;
grid-row-gap: 25px;`

const BoxLayout = styled.div`
background-color: #e9ecef;
width: 100%;
height: 300px;
border-radius: 30px;
`
const Padding = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
align-content: space-between;`

const Overflow = styled.span`
font-size : 15px;
line-height: normal;
display: -webkit-box;
   -webkit-line-clamp: 6;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;`

const EndBox = styled.div`
display: flex;
justify-content: space-between`

const Source = styled.span`
width: 200px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis`

export default connect(Acceuil);