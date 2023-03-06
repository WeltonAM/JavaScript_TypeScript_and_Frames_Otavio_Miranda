import styled from "styled-components";

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    
    input{
        margin-bottom: 20px;
        height: 40px;
        padding: 0 10px;
        font-size: 18px;
        border-radius: 3px;
        border: 1px solid #ddd;
    }
`;

export const ProfilePicture = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 20px;
    position: relative;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    a{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        position: absolute;

        bottom: 0;
    }
`;