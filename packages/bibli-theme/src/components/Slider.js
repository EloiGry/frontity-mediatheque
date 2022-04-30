import React from 'react';
import { connect } from 'frontity';
import { motion } from 'framer-motion';
import {useState} from 'react'
import Image from './Image';
import { styled } from 'frontity';


const Slider = ({state}) => {
    const [page, setPage] = useState(0)
    let arrayImage = []
    const attachment = Object.keys(state.source.attachment).map(Number)
    attachment.forEach(item => {
        if(arrayImage.length < 5) {
            arrayImage.push(state.source.attachment[item].source_url)
        }
    } )


    const handlePlusPage = (num) => {
        if (page < arrayImage.length-1) {
            setPage(page + num)
        } else {
            setPage(0)
        }
    }

    const handleMinusPage = (num) => {
        if (page > 0) {
            setPage(page + num)
        } else {
            setPage(arrayImage.length-1)
        }
    }

    return (
        <Background> 
                <h2 style={{textAlign: 'center', color: 'white', fontSize:'35px', fontStyle: 'italic'}}> Nos recommendations du mois </h2>
                <Display> 
                    <motion.button
                        whileHover={{scale : 1.3, color : 'white' }}
                        whileTap={{scale:0.9}}
                        onClick={() => handleMinusPage(-1)}
                        style={{background : 'none', cursor: 'pointer'}}
                    >
                        <span style={{fontSize : "60px"}}> &#x1F838; </span>
                    </motion.button>

                    <motion.div
                        drag="x"
                        dragConstraints={{left:0, right:0}}
                        dragElastic={0.9}
                    >
                        <Image 
                            src={arrayImage[page]}    
                            height='300px'
                            as={motion.img}
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{
                                duration: 0.7,
                                ease: 'easeOut'
                            }}
                        />
                    </motion.div>
                    
                    <motion.button
                        whileHover={{scale : 1.3, color : 'white' }}
                        whileTap={{scale:0.9}}
                        onClick={() => handlePlusPage(1)}
                        style={{background : 'none', cursor: 'pointer'}}
                    >
                        <span style={{fontSize : "60px"}}>  &#x1F83A;</span>	
                        
                    </motion.button>  
                </Display>
        </Background>
    );
};

const Background = styled.div`
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(38,70,83,1) 70%);
height: 85vh;`

const Display = styled.div`
display : flex;
align-items: center;
justify-content: space-between;
padding: 40px 15px;`

export default connect(Slider);