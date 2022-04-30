import React from 'react';
import { connect } from 'frontity';
import { Container } from '../components/Container';
import Box from '../components/Box';
import { styled } from 'frontity';
import Link from '../components/Link';
import Image from '../components/Image';
import BoxHover from '../components/BoxHover';
import {useState} from 'react'
import { motion } from "framer-motion"
import Input from '../components/Input';
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



const Cds = ({state, libraries}) => {
    const [hover, setHover] = useState(-1)
    const [textInput, setTextInput] = useState("")
    const [textSelect, setTextSelect] = useState("")

    const Html2React = libraries.html2react.Component
    const media = state.source.attachment
    const genre = state.source.style
    const arrayGenre = Object.values(state.source.style)
    const allCds = Object.values(state.source.cd)
    const filterCds = allCds.filter(item => 
        item.title.rendered.toLowerCase().includes(textInput.toLowerCase())
        || item.acf.author.toLowerCase().includes(textInput.toLowerCase())
    )

    const filterCdsGenre = allCds.filter(item => 
        state.source.style[item.style[0]].name.toLowerCase().includes(textSelect.toLowerCase())
    )

    return (
        <>
        <Container 
            as={motion.div}
            variants={containerVariants}
            initial='initial'
            animate='animate'
        >
            <h2> Nos CDs </h2>
            <BarFilter> 
                <Input 
                type='text'
                placeholder="Cherchez un CD ou un artiste &#128270;"
                value= {textInput}
                onChange= {e => {setTextInput(e.target.value)}}
                />
                <select value={textSelect} onChange={e => {setTextSelect(e.target.value)}} style={{borderRadius: '30px', cursor: 'pointer', border: 'none', outline: 'none'}}>
                        <option value="">Quel genre musical recherchez vous ?</option>
                        {arrayGenre.map(item => 
                            <>
                                <option value= {item.name}>{item.name}</option>
                            </>
                        )}
                </select>
            </BarFilter>

            {textInput.length > 1 ? 
                <Flex>
                {filterCds.reverse().map(item => {
                    const cd = state.source.cd[item.id]
                    return (
                        <div onMouseEnter={() => setHover(item.id)} 
                            onMouseLeave={() => setHover(-1)}
                            key={item.id}>
                            {hover === (item.id) ? 
                                <BoxHover backgroundImage={media[cd.featured_media].source_url}  width='250px' height='300px'> 
                                    <Link color='white' href={livre.link}>
                                        <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={cd.content.rendered} /> </Overflow>
                                        <Link color='white' textDecoration='underline' href={livre.link}> Voir plus</Link>
                                    </Link>
                                </BoxHover> :
                                <Box width='250px' height='300px'> 
                                <Link>
                                    <Image src={media[cd.featured_media].source_url} borderRadius = "20px 20px 0px 0px" width='250px' />
                                    <h3 style={{fontSize : '20px'}}> <Html2React html={cd.title.rendered} /> </h3>
                                    <p> <b> Artiste </b>: <Html2React html={cd.acf.author} /> </p>
                                    <p> <b> Genre </b>: <Html2React html={genre[cd.style[0]].name} /></p>  
                                    {cd.acf.disponible ? 
                                        <p>Disponible<span> &#9989; </span> </p> : 
                                        <p>Non disponible<span> &#10060; </span> </p>
                                     }                             
                                </Link>
                            </Box> 
                                }
                        </div>
                    )
                })}
                </Flex>
            :
                <Flex>
                {filterCdsGenre.reverse().map(item => {
                    const cd = state.source.cd[item.id]
                    return (
                        <div onMouseEnter={() => setHover(item.id)} 
                        onMouseLeave={() => setHover(-1)}
                        key={item.id}>
                            {hover === (item.id) ? 
                                <BoxHover backgroundImage={media[cd.featured_media].source_url}  width='250px' height='300px'> 
                                    <Link color='white' href={cd.link}>
                                        <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={cd.content.rendered} /> </Overflow>
                                        <Link color='white' textDecoration='underline' href={cd.link}> Voir plus</Link>
                                    </Link>
                                </BoxHover> :
                                <Box width='250px' height='300px'> 
                                    <Link>
                                        <Image src={media[cd.featured_media].source_url} borderRadius = "20px 20px 0px 0px" width='250px' />
                                        <h3 style={{fontSize : '20px'}}> <Html2React html={cd.title.rendered} /> </h3>
                                        <p> <b> Artiste </b>: <Html2React html={cd.acf.author} /> </p>
                                        <p> <b> Genre </b>: <Html2React html={genre[cd.style[0]].name} /></p>  
                                        {cd.acf.disponible ? 
                                            <p>Disponible<span> &#9989; </span> </p> : 
                                            <p>Non disponible<span> &#10060; </span> </p>
                                         }                             
                                    </Link>
                                </Box> 
                                }
                        </div>
                    )
                })}
                </Flex>
            }
            {filterCds.length < 1 && <p> Aucun résultat pour la recherche : <b> {textInput} </b> </p>}
        </Container>
        <Footer/>
        </>
        
    );
};

const Flex = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 30px;
grid-row-gap: 0px;`

const Overflow = styled.p`
font-size : 18px;
line-height: normal;
display: -webkit-box;
   -webkit-line-clamp: 10;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;`

const BarFilter = styled.div`
display : flex;
justify-content : space-around;`


export default connect(Cds);