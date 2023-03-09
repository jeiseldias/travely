import styled from 'styled-components'

export const Bar = styled.div`
    display:flex;
    justify-content:space-between;

    padding: 32px 56px;

    width:100vw;
`

export const Content = styled.div`
    display:flex;

    flex-direction:column;
    align-items:center;

    width:100vw;
    height:700px;

    background-color:#F00;
    background-image:url('/images/mainbg.jpg');
    background-size:cover;
    background-position:center;
`

export const Highlights = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;

    width:80%;
    height:640px;

    padding-top:48px;

    h2 {
        font-family:"Degular";
        font-size:3em;
        margin-bottom:16px;
        color:#FFFFFF;
    }

    span {
        font-family:"Gilroy Light";
        font-size:1.3em;
        
        margin-bottom:56px;
        
        text-align:center;
        color:#FFFFFF;

        line-height:1.5em;
    }
`

export const Logo = styled.div`
    display:flex;
    align-items:center;    

    width:250px;
    height:60px;

    h2 {
        margin-left:8px;

        font-family: "Degular";
        font-size: 40px;

        color:#FFFFFF;
    }
`

export const Menu = styled.div`
    display:flex;
    align-items:center;

    width:auto;
    height:60px;

    font-family: "Degular";

    img {
        width:16px;
        height:16px;
     
        margin: 0 8px;

        border-radius:16px;
    }

    ul {
        list-style-type:none;
        margin-right:56px;
    }

    li {
        float: left;
    }
      
    li a {
        display: block;

        padding: 0 20px;
        
        color: white;
        text-align: center;
        text-decoration: none;
    }
      
    li a:hover {
        background-color: #111111;
    }

    span {
        color:#FFFFFF;
    }
`
export const Profile = styled.div`
    display:flex;

    justify-content:space-between;
    align-items:center;

    width:70px;
    height:32px;

    padding:0 8px;
    margin-left:24px;

    border-radius:16px;

    background-color:white;

    img {
        width:24px;
        height:24px;
        
        margin:0;
    }
`

export const Search = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;

    width:80%;
    height:80px;

    padding:0 48px;

    border-radius:80px;

    background-color:#FFFFFF;

    div {
        display:flex;
        align-items:center;
    }

    label {
        display:flex;
        flex-direction:column;
        align-items:start;
        
        margin-left:8px;

        span {
            display:flex;
            align-items:center;

            font-family:"Degular";
            font-size:0.9em;

            margin:0;
            
            text-align:center;
            color:#8C8C8C;
        }

        small {
            font-family:"Degular";
            font-size:1em;
        }
    }
`

export const SearchButton = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width:48px;
    height:48px;

    border-radius:48px;

    background:linear-gradient(#ffa118, #ff6e32);
`