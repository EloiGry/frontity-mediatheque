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


const Dvds = ({state, libraries}) => {
    const [hover, setHover] = useState(-1)
    const [textInput, setTextInput] = useState("")
    const [textSelect, setTextSelect] = useState("")

    const Html2React = libraries.html2react.Component
    const media = state.source.attachment
    const genre = state.source.categorie
    const arrayGenre = Object.values(state.source.categorie)
    const allDvds = Object.values(state.source.dvd)

    const filterDvds = allDvds.filter(item => 
        item.title.rendered.toLowerCase().includes(textInput.toLowerCase())
        || item.acf.author.toLowerCase().includes(textInput.toLowerCase())
    )

    const filterDvdsGenre = allDvds.filter(item => 
        state.source.categorie[item.categorie[0]].name.toLowerCase().includes(textSelect.toLowerCase())
    )

    return (
        <>
            <Container 
            as={motion.div}
            variants={containerVariants}
            initial='initial'
            animate='animate'>
                <h2> Nos DVDs </h2>
                <BarFilter> 
                <Input
                type='text'
                placeholder="Cherchez un DVD ou un réalisateur &#128270;"
                value= {textInput}
                onChange= {e => {setTextInput(e.target.value)}}
                />
                <select value={textSelect} onChange={e => {setTextSelect(e.target.value)}} style={{borderRadius: '30px', cursor: 'pointer', border: 'none', outline: 'none'}}>
                        <option value="">Quel genre de films souhaitez vous voir ?</option>
                        {arrayGenre.map(item => 

                                <option key={item.id} value= {item.name}>{item.name}</option>
                        )}
                    </select>
                </BarFilter>
                {textInput.length > 1 ?
                    <Flex>
                    {filterDvds.reverse().map(item => {
                        const dvd = state.source.dvd[item.id]
                        return (
                            <div onMouseEnter={() => setHover(item.id)} 
                                onMouseLeave={() => setHover(-1)}
                                key={item.id}>
                                {hover === (item.id) ? 
                                    <BoxHover backgroundImage={media[dvd.featured_media].source_url}> 
                                        <Link color='white' href={dvd.link}>
                                            <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={dvd.content.rendered} /> </Overflow>
                                            <p style={{textDecoration:'underline'}}> Voir plus</p>
                                        </Link>
                                    </BoxHover> :
                                    <Box> 
                                        <Link href={dvd.link}>
                                            <Image src={media[dvd.featured_media].source_url} borderRadius = "20px 20px 0px 0px" />
                                            <h3> <Html2React html={dvd.title.rendered} /> </h3>
                                            <p> <b> Réalisateur </b>: <Html2React html={dvd.acf.author} /> </p>
                                            <p> <b> Genre </b>: <Html2React html={genre[dvd.categorie[0]].name} /></p> 
                                            {dvd.acf.disponible ? 
                                                <p>Disponible <span> &#9989; </span> </p> : 
                                                <p>Non disponible <span> &#10060; </span> </p>
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
                    {filterDvdsGenre.reverse().map(item => {
                        const dvd = state.source.dvd[item.id]
                        return (
                            <div onMouseEnter={() => setHover(item.id)} 
                            onMouseLeave={() => setHover(-1)}
                            key={item.id}>
                                {hover === (item.id) ? 
                                    <BoxHover backgroundImage={media[dvd.featured_media].source_url}> 
                                        <Link color='white' href={dvd.link}>
                                            <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={dvd.content.rendered} /> </Overflow>
                                            <p style={{textDecoration:'underline'}}> Voir plus</p>
                                        </Link>
                                    </BoxHover> :
                                    <Box> 
                                    <Link href={dvd.link}>
                                        <Image src={media[dvd.featured_media].source_url} borderRadius = "20px 20px 0px 0px" />
                                        <h3> <Html2React html={dvd.title.rendered} /> </h3>
                                        <p> <b> Réalisateur </b>: <Html2React html={dvd.acf.author} /> </p>
                                        <p> <b> Genre </b>: <Html2React html={genre[dvd.categorie[0]].name} /></p> 
                                        {dvd.acf.disponible ? 
                                            <p>Disponible <span> &#9989; </span> </p> : 
                                            <p>Non disponible <span> &#10060; </span> </p>
                                        }                                 
                                    </Link>
                                </Box> 
                                    }
                            </div>
                        )
                    })}
                </Flex>
                }  
                {filterDvds.length < 1 && <p> Aucun résultat pour la recherche : <b> {textInput} </b> </p>}
            </Container>
            <Footer/>
        </>
        
    );
};

const Flex = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 30px;
grid-row-gap: 0px;`

const Overflow = styled.span`
font-size : 18px;
line-height: normal;
display: -webkit-box;
   -webkit-line-clamp: 14;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;`

const BarFilter = styled.div`
display : flex;
justify-content : space-around;`

export default connect(Dvds);