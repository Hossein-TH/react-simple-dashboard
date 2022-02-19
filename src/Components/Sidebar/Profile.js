import React from "react";
import styled from "styled-components";
import Image from '../../Assets/images/Logo.png';


const Container = styled.div`
    margin-top: 3rem;
`;

const ProfileImg = styled.img`
    height: 10rem;
    margin-right: 20px;
    border-radius: 40px;
`;


const Profile = () => {
    return (
        <Container>
            <ProfileImg src={Image}/>
        </Container>
    )
};

export default Profile