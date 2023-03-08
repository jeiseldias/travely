import styled from 'styled-components'

export const Benefit = styled.div`
    display:flex;

    gap:16px;

    width:100%;
    height:auto;

    padding:16px;
    margin-top:16px;

    border-radius:8px;

    background-color:#FFFFFF;
`

export const Box = styled.div`
    display:flex;

    gap:16px;    

    width:80%;
    height:auto;
`

export const Content = styled.div`
    display:flex;
    justify-content:center;

    padding:48px 0;

    width:100%;
    height:auto;
`

export const Description = styled.div`
    display: flex;
    flex-direction:column;

    h2 {
        font-family:"Gilroy";
        font-size:1.2em;

        color:#372e2d;

        margin-bottom:8px;
    }

    small {
        font-family:"Gilroy Light";
        font-size:1em;

        color:#9e9e9e;
    }
`

export const Icon = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width:48px;
    height:48px;

    border-radius:48px;

    background-color:#FFF2EC;
`

export const Thumb1 = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width:60%;
    height:300px;

    background:url(${props => props.background});
    background-size:cover;
    background-position:center;

    border:5px solid #FFFFFF;
    border-radius:8px;

    z-order:1;
`

export const Thumb2 = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;

    width:60%;
    height:300px;

    background:url(${props => props.background});
    background-size:cover;
    background-position:center;

    border:5px solid #FFFFFF;
    border-radius:8px;
    
    z-order:2;
`

export const Thumbs = styled.div`
    position: relative;

    display:flex;
    justify-content:center;

    width:50%;
`

export const Topics = styled.div`
    width:50%;

    h1{
        font-family: "Degular";
        font-size:2.0em;

        color:#372e2d;

        margin-bottom:8px;
    }

    span {
        font-family: "Gilroy Light";
        font-size:1em;

        color:#9e9e9e;

        margin-bottom:32px;
    }
`