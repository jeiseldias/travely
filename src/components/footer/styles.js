import styled from 'styled-components'

export const Column = styled.div`
    display:flex;
    flex-direction:column;

    flex:1;

    h2 {
        font-family:"Gilroy Light";
        font-size:1.1em;

        color:#9e9e9e;

        margin-bottom:24px;
    }

    li {
        font-family:"Gilroy Light";
        font-size:0.8em;

        margin-bottom:12px;

        color:#9e9e9e;
    }
`

export const Copy = styled.div`
    width:80%;

    border-top:1px solid #9e9e9e;

    padding:16px 0;

    font-family:"Gilroy Light";
    font-size:0.8em;

    margin-bottom:12px;

    color:#9e9e9e;

    a {
        text-decoration:none;

        color:#9e9e9e;

        cursor:pointer;
    }
`

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    padding:48px 0 0 0;

    width:100%;
    height:auto;

    background-color:#372e2d;
`

export const Links = styled.div`
    display:flex;

    width:80%;
    margin-bottom:24px;

    gap:16px;
`

export const Logo = styled.div`
    display:flex;
    align-items:center;

    padding:0;

    h2 {
        margin:0;
        margin-left:8px;
        padding:0;

        font-family: "Degular";
        font-size: 30px;

        color:#FFFFFF;
    }
`

export const SearchButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width:32px;
    height:32px;

    border-radius:32px;

    background:linear-gradient(#ffa118, #ff6e32);
`

export const Social = styled.div`
    margin-top:48px;
`