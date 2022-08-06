import styled from "styled-components";

export const SidebarComponent= styled.aside`
    max-width: fit-content;
    border-radius: 8px;
    background-color: #FFF;
    margin-top: 5%;
    position: relative;
    padding: 0 9px;
    display: flex;
    flex-direction: column;

    @media(max-width: 768px){
        max-width: 100vw;
        padding-top: 10%;
    }
`

export const Perfil= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid 1px var(--background-defaut);
    padding: 8px 0;

    h2{
        color: var(--primary-text);
    }

    span{
        color: var(--gray3);
    }
`

export const LinksNav= styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid 1px var(--background-defaut);
    padding-bottom: 8px;
    position: relative;

    img{
        padding-right: 8px;
    }

    .links{
        padding: 8px 0;
        display: flex;
        align-items: center;
        p{
            margin: 0;
        }
    }

    .styleLink{
        text-decoration: none;
        color: var(--primary-text);
    }

    .float{
        position: absolute;
        top: 8px;
        right: 15px;
    }
`