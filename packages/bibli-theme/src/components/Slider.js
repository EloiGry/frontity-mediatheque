import React from 'react';
import { connect } from 'frontity';
import { motion, AnimatePresence } from 'framer-motion';
import {useState} from 'react'
import Image from './Image';
import { styled } from 'frontity';


const Slider = ({state}) => {
    const [page, setPage] = useState(0)
    let arrayImage = []
    const attachment = Object.keys(state.source.attachment).map(Number)
    attachment.forEach(item => arrayImage.push(state.source.attachment[item].source_url))


    const handlePlusPage = (num) => {
        if (page < arrayImage.length-1) {
            setPage(page + num)
        }
    }

    const handleMinusPage = (num) => {
        if (page > 0) {
            setPage(page + num)
        }
    }

    return (
        <Background> 
            <AnimatePresence
                initial={false}
            >
                <h2 style={{textAlign: 'center'}}> Nos recommendations du mois </h2>
                <Display> 
                    <motion.button
                        whileHover={{scale : 1.2, transition : { duration : 0.5}}}
                        whileTap={{scale:0.9}}
                        onClick={() => handleMinusPage(-1)}
                        style={{background : 'none', cursor: 'pointer'}}
                    >
                        <span style={{fontSize : "60px"}}> &#x1F838; </span>
                    </motion.button>

                    <motion.div
        
                        initial={{opacity: 0}} 
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{x : {type: 'spring', stifness:300, damping: 300}, opacity: {duration :1} }}
                        drag="x"
                        dragConstraints={{left:0, right:0}}
                        dragElastic={0.9}
                    >
                        <Image 
                            src={arrayImage[page]}    
                            height='300px'
                        />
                    </motion.div>
                    
                    <motion.button
                        whileHover={{scale : 1.3, transition : { duration : 0.5}, color : 'white'}}
                        whileTap={{scale:0.9}}
                        onClick={() => handlePlusPage(1)}
                        style={{background : 'none', cursor: 'pointer'}}
                    >
                        <span style={{fontSize : "60px"}}>  &#x1F83A;</span>	
                        
                    </motion.button>  
                </Display>
            </AnimatePresence>
        </Background>
    );
};

const Background = styled.div`
/* background: rgb(156,102,68);
background: linear-gradient(0deg, rgba(156,102,68,1) 0%, rgba(176,137,104,1) 100%); */
background-color: transparent;
height: 70vh;`

const Display = styled.div`
display : flex;
align-items: center;
justify-content: space-between;
padding: 40px 15px;`

export default connect(Slider);