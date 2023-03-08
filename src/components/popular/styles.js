import styled from 'styled-components'

export const City = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:end;

    width:25%;
    height:400px;

    border-radius:16px;

    background:url(${props => props.background});
    background-size:cover;
    background-position:center;

    padding:16px;

    h2{
        font-family:"Gilroy Light";
        font-size:1.1em;
        color:#FFFFFF;
    }

    small {
        font-family:"Gilroy Light";
        font-size:0.8em;
        color:#FFFFFF;
    }
`

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:100vw;
    height:auto;

    padding:48px 0;

    button {
        background:linear-gradient(#ffa118, #ff6e32);

        border:0;
        border-radius:32px;
        
        padding:16px 48px;

        font-family:"Degular";
        font-size:1.2em;
        color:#FFFFFF;
    }

    h1{
        font-family: "Degular";
        font-size:2.5em;

        color:#372e2d;

        margin-bottom:8px;
    }

    span {
        font-family: "Gilroy Light";
        font-size:1.1em;

        color:#9e9e9e;

        margin-bottom:32px;
    }
`

export const Places = styled.div`
    display:flex;

    gap:8px;

    width:80%;
    height:auto;

    margin-bottom:36px;
`