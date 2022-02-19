import React from "react";
import styled from "styled-components";
import Image from '../../Assets/images/profilelg.jpg'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
   height: 2.5rem;
   margin: 0 1rem;
   cursor: pointer;
   border-radius: 30px;
`;

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray};
    font-size: 27px;
    cursor: pointer;
`;



const Nav = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
            <ProfileImg src={Image}/>
        </Container>
    )
};

export default Nav