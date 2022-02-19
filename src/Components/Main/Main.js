import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import NewDepositsBtn from "./NewDepositsBtn";
import Deposits from "./Deposits/Deposits";
import depositData from '../../DepositData';

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`;

const Main = () => {
    return (
        <Container>
            <Nav/>
            <NewDepositsBtn/>
            <Deposits title="Active Deposits" count={2} data={depositData.active} />
            <Deposits title="Closed Deposits" count={8} data={depositData.closed} />
            <Deposits title="Open Deposits" count={10} data={depositData.active} />
        </Container>
    )
};

export default Main