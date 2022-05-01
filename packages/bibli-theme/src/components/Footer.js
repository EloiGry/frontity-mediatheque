import React from 'react';
import { connect, styled } from 'frontity';
import Horaire from './Horaire';
import Link from './Link';

const Footer = () => {

    return (
        <Background>
            <div>
                <p> <Link href='/' color='white' margin="0px 10px"> Acceuil </Link></p>
                <p> <Link href='/livres' color='white' margin="0px 10px"> Livres </Link> </p>
                <p> <Link href='/dvds' color='white' margin="0px 10px"> DVDs </Link></p>
                <p> <Link href='/cds' color='white' margin="0px 10px"> CDs </Link></p>
                <p> <Link href='/forms' color='white' margin="0px 10px"> Contact </Link></p>
  
            </div>
            <Horaire/>
            <Plan>
                <p> <b> Accès </b></p>
                <br/>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.671076578411!2d3.9913249149971333!3d48.19368865523126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ee906bb707d23d%3A0x42fce8397bf06b38!2sImp.%20de%20la%20M%C3%A9diath%C3%A8que%2C%2010320%20Bouilly%2C%20France!5e0!3m2!1sfr!2sar!4v1651274655778!5m2!1sfr!2sar" 
                width="200" height="150" style={{borderRadius: "20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <br/>
                <p> Adresse : Impasse de la Médiathèque </p>
            </Plan>
        </Background>
    );
};

const Background = styled.div`
background: #264653;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 80px`

const Plan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default connect(Footer);