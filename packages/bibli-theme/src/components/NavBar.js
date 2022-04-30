import React from 'react';
import { connect } from 'frontity';
import Link from './Link';
import { styled } from 'frontity';

const NavBar = ({state}) => {
    console.log("menu" ,state.theme.menu);
    return (
        <Menu>
            <Link href='/' color='white' margin="0px 10px" fontSize="20px"> Acceuil </Link>
            <Link href='/livres' color='white' margin="0px 10px" fontSize="20px"> Livres </Link>
            <Link href='/dvds' color='white' margin="0px 10px" fontSize="20px"> DVDs </Link>
            <Link href='/cds' color='white' margin="0px 10px" fontSize="20px"> CDs </Link>
        </Menu>

    );
};

const Menu = styled.div`
display : flex;
justify-content : center;
align-items : center;
background-color : #264653;
color : white;
height: 20vh;`

export default connect(NavBar);