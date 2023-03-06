import styled from "styled-components";
import * as colors from '../../config/colors';

export const Title = styled.h1`

`;

export const Form = styled.form`
    input{
        display: none;
    }

    label {
        margin-top: 20px;
        width: 180px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;

        background: #eee;
        border: 2px dashed ${colors.primaryColor};
        cursor: pointer;
        border-radius: 50%;
        overflow: hidden;
    }

    img {
        width: 180px;
        height: 180px;
    }
`;