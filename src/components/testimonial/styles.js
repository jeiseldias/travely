import styled from 'styled-components'

export const Avatar = styled.img`
    width:64px;
    height:64px;

    border-radius:64px;

    margin-right:16px;
`

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    padding:48px 0;

    width:100%;
    height:auto;

    h2{
        font-family: "Degular";
        font-size:2.0em;

        color:#372e2d;

        margin-bottom:8px;
    }

    span {
        font-family: "Gilroy Light";
        font-size:1em;

        color:#9e9e9e;

        margin-bottom:48px;
    }
`

export const InfoHeader = styled.div`
    display:flex;
    align-items:center;

    margin-bottom:24px;
`

export const Infos = styled.div`
    display:flex;

    gap:16px;

    width:80%;
    height:auto;
`

export const Map = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width:55%;
    height:auto;
`

export const Name = styled.div`
    display:flex;
    flex-direction:column;

    span {
        font-family: "Gilroy Light";
        font-size:1.5em;

        color:#372e2d;

        margin:0;
    }

    small {
        font-family:"Gilroy Light";
        font-size:0.8em;
        color:#9e9e9e;
    }
`

export const Quote = styled.div`
    width:45%;
    height:auto;

    padding:16px;
`

export const Rate = styled.div`
    display:flex;
    justify-content:space-between;

    span {
        display:flex;
        align-items:center;

        font-family:"Degular";
        font-size:1.2em;

        color:#372e2d;
    }
`

export const Speak = styled.div`
    font-family:"Gilroy Light";
    font-size:1em;

    color:#9e9e9e;

    line-height:2em;

    margin-bottom:32px;
`