import React from 'react';
import { connect, styled } from 'frontity';

const Horaire = () => {
    return (
        <Box>
            <p><b> Les horaires : </b></p>
            <p> Mardi : 12h - 21h</p>
            <p> Mercredi : 10h - 21h</p>
            <p> Jeudi: 10h - 21h</p>
            <p> Vendredi : 10h - 19h</p>
            <p> Samedi : 10h - 19h</p>
        </Box>
    );
};

const Box = styled.div`
color : white`



export default connect(Horaire);