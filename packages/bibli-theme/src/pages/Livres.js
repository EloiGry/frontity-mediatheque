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




const Livres = ({state, libraries}) => {
    const [hover, setHover] = useState(-1)
    const [textInput, setTextInput] = useState("")
    const [textSelect, setTextSelect] = useState("")

    const Html2React = libraries.html2react.Component
    const media = state.source.attachment
    const genre = state.source.genre
    const arrayGenre = Object.values(state.source.genre)
    const allBooks = Object.values(state.source.livre)
    const filterBooks = allBooks.filter(item => 
        item.title.rendered.toLowerCase().includes(textInput.toLowerCase())
        || item.acf.author.toLowerCase().includes(textInput.toLowerCase())
    )
    const filterBooksGenre = allBooks.filter(item => 
        state.source.genre[item.genre[0]].name.toLowerCase().includes(textSelect.toLowerCase())
    )

    return (
        <>
        
            <Container 
                as={motion.div}
                variants={containerVariants}
                initial='initial'
                animate='animate'
            >
                <h2> 
                        Nos livres 
                </h2>

                <BarFilter >
                    <Input
                        type='text'
                        placeholder="Cherchez un livre ou un auteur &#128270;"
                        value= {textInput}
                        onChange= {e => {setTextInput(e.target.value)}}
                    />
                    <select value={textSelect} onChange={e => {setTextSelect(e.target.value)}} style={{borderRadius: '30px', cursor: 'pointer', border: 'none', outline: 'none'}}>
                        <option value="">Quel genre de livres recherchez vous ?</option>
                        {arrayGenre.map(item => 
                            <>
                                <option value= {item.name}>{item.name}</option>
                            </>
                        )}
                    </select>
                </BarFilter>

                {textInput.length > 1 ? 
                    <Flex>
                    {filterBooks.reverse().map((item) => {
                        const livre = state.source.livre[item.id];
                        return (
                                    <div onMouseEnter={() => setHover(item.id)} 
                                            onMouseLeave={() => setHover(-1)}
                                    >
                                        {hover === (item.id) ? 
                                        <BoxHover backgroundImage={media[livre.featured_media].source_url}> 
                                            <Link color='white' href={livre.link}>
                                                <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={livre.content.rendered} /> </Overflow>
                                                <Link color='white' textDecoration='underline' href={livre.link}> Voir plus</Link>
                                            </Link>
                                        </BoxHover> :
                                        <Box> 
                                            <Link href={livre.link}>
                                                <Image src={media[livre.featured_media].source_url} borderRadius = "20px 20px 0px 0px" />
                                                <h3> <Html2React html={livre.title.rendered} /> </h3>
                                                <p> <b> Auteur </b>: <Html2React html={livre.acf.author} /> </p>
                                                <p> <b> Genre </b>: <Html2React html={genre[livre.genre[0]].name} /></p>   
                                                {livre.acf.disponible ? 
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
                {filterBooksGenre.reverse().map((item) => {
                    const livre = state.source.livre[item.id]
                    return (
                                <div onMouseEnter={() => setHover(item.id)} 
                                        onMouseLeave={() => setHover(-1)}
                                >
                                    {hover === (item.id) ? 
                                    <BoxHover backgroundImage={media[livre.featured_media].source_url}> 
                                        <Link color='white' href={livre.link}>
                                            <Overflow> <b> Résumé : </b> <br/> <br/> <Html2React html={livre.content.rendered} /> </Overflow>
                                            <Link color='white' textDecoration='underline' href={livre.link}> Voir plus</Link>
                                        </Link>
                                    </BoxHover> :
                                    <Box> 
                                    <Link href={livre.link}>
                                        <Image src={media[livre.featured_media].source_url} borderRadius = "20px 20px 0px 0px" />
                                        <h3> <Html2React html={livre.title.rendered} /> </h3>
                                        <p> <b> Auteur </b>: <Html2React html={livre.acf.author} /> </p>
                                        <p> <b> Genre </b>: <Html2React html={genre[livre.genre[0]].name} /></p>   
                                        {livre.acf.disponible ? 
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
                {filterBooks.length < 1 && <p> Aucun résultat pour la recherche : <b> {textInput} </b> </p>}
            </Container>
            <Footer/>
        </>
    )     
};

const Flex = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 30px;
grid-row-gap: 0px;`

const Overflow = styled.p`
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


export default connect(Livres);