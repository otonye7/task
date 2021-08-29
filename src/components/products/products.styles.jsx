import styled from 'styled-components';

export const ProductsContainer = styled.div`
    width: 100%;

    .preview {
        width: 98%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        height: 450px;
        text-align: center;
        overflow: auto;
        overflow-x: hidden;
    }

   
`;