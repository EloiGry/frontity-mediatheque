import React from 'react';
import { connect } from 'frontity';
import { motion } from 'framer-motion';
import { styled } from 'frontity';
import Image from '../components/Image';
import Slider from '../components/Slider';
import Actualites from '../components/Actualites';



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


const Acceuil = ({state}) => {
    let arrayImage = []
    const attachment = Object.keys(state.source.attachment).map(Number)
    attachment.forEach(item => arrayImage.push(state.source.attachment[item].source_url))

    return (
        <>
            <Slider/>
            <Actualites/>

            <Flex> 
                <h3> Nos nouveautés </h3>
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
                               <>
                                <Item>
                                        <Image src={image} alt="image" height="300px" borderRadius='20px'/>
                                </Item>
                               </>
                                
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
                
        </>
    );
};

const Item = styled.div`
padding : 40px;
`
const Carousel = styled.div`
cursor: grab;
overflow: hidden;
position: relative;
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
`


export default connect(Acceuil);