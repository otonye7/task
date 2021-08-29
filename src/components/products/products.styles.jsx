import styled from 'styled-components';




export const ProductsContainer = styled.div`
    width: 90%;
    margin: 0 auto;

    .preview {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 550px;
        text-align: center;
        overflow: auto;
        overflow-x: hidden;
    }
`;