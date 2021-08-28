import styled from 'styled-components';




export const ProductListContainer = styled.div`
    width: 100%;

    .container {
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 auto;
        /* background-color: red;
        border: 2px solid red;  */
    }

    .card {
        width: 220px;
        /* border: 2px solid red; */
    }

    .face {
        display: flex;
        justify-content: center;
    }

`;