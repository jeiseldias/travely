import styled from 'styled-components'

export const Content = styled.div`
    display:flex;
    justify-content:center;

    padding:48px 0;

    width:100%;
    height:auto;
`

export const Form = styled.div`
    width:80%;
    height:255px;

    padding:32px;

    border-radius:12px;

    background:url('/images/deck.jpg');
    background-size:cover;
    background-position:center;
    background-color:blue;

    span {
        font-family:"Degular";
        font-size:2.5em;

        color:#FFFFFF;
    }
`

export const FormGroup = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width:40%;

    margin-top:24px;
    padding:8px 8px 8px 16px;
    gap:8px;

    border-radius:64px;

    background-color:white;

    button {
        background:linear-gradient(#ffa118, #ff6e32);

        border:0;
        border-radius:32px;
        
        padding:8px 32px;

        font-family:"Degular";
        font-size:1em;
        color:#FFFFFF;
    }

    input {
        flex:1;

        border:0;
        outline:0;

        padding:8px 0;

        font-family:"Gilroy Light";
        font-size:1em;
        color:#9e9e9e;
    }
`