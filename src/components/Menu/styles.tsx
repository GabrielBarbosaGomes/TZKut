import styled from 'styled-components'

export const MenuNav= styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: var(--background-nav);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;

    /* icone do menu */
    .icon {
        z-index: 4;
        right: 1%;
        width: fit-content;
        height: 44px;
        cursor:pointer;
        position: absolute;
    }
    .Hamburguer{
        top: 50%;
        right: 10%;
        width: 37px;
        height: 6px;
        background-color: #fff;
        position: relative;
        transition: 0.5s;
        border-radius: 5px;
        &:before{
            top: -12px;
            content: '';
            position: absolute;
            width: 37px;
            height: 6px;
            background-color: #fff;
            transition: 0.5s;
            border-radius: 5px;
        }
        &:after{
            top: 12px;
            content: '';
            position: absolute;
            width: 37px;
            height: 6px;
            background-color: #fff;
            transition: 0.5s;
            border-radius: 5px;
        }
    }

    /*animação icon menu*/

    .icon.iconActive .Hamburguer{
        background: var(--background-nav);
        box-shadow: 0 2px 5px var(--background-nav);
        z-index: 1001;
        &:after{
            top:0;
            background: var(--background-nav);
            transform: rotate(225deg);
        } 
        &:before{
            top:0;
            background: var(--background-nav);
            transform: rotate(135deg);
        }
    } 
    
    /*style do menu aberto*/

    .menu{
        display: none;
        width: 0px;
         @media (min-width: 768px){
            display: flex;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            justify-content: center;
            background-color: var(--background-nav);
            box-shadow: 0px -6px 20px black;
        }
    }

    .menu.menuOpen{
        min-width: 150px;
        min-height: 100vh;
        background: var(--background-defaut);
        box-shadow: 3px 0px 9px rgba(0, 0, 0, 0.15);
        border-radius: 24px 0px 0px 24px;
        display: block;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1000;
        width: max-content;
    }

    @media (min-width: 768px){
        .icon{
            display: none;
        }

        .Hamburguer{
            display: none;
        }
    }
`
export const Logo= styled.h1`
    background-color: #FFFFFF;
    color: #D81D99;
    border-radius: 26px;
    width: fit-content;
    padding: 10px 12px;
    font-weight: 400;
    @media (min-width: 768px){
        margin: 7px 0;
    }
`

export const ListItems = styled.div`
    display: flex;
    flex-direction: column;
    right: 1%;
    padding: 45px 0 0;
    flex-wrap: nowrap;
    color: #FFF;
    font-size:var(--font-size-sm);
    font-weight: 400;
    position: relative;
    @media (min-width: 768px){
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0;
        flex-direction: row;
        width: 100%;
        top: 0;
    }
`
export const List= styled.ul`
    padding: 0;
    list-style: none;
    @media (min-width: 768px){
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: var(--font-size-sm);
        position: relative;
        margin: 0;
    }
`
export const Item= styled.li`
    margin: 15px 0;
    cursor: pointer;
    
    &:hover{
        font-weight: 700;
    }

    div{
        color: var(--tertiary-Text);
        font-weight: 700;
    }

    a{
        color: var(--primary-text);
        text-decoration: none;
    }

    @media (min-width: 768px){
        border-right: 1px solid #5292C1;
        &:nth-child(6){
        border: none;
        }
        a{
            color: #fff;
            padding: 0 16px;
        }
    }
`
/*style da segunda parte dos itens do menu*/

export const ItemAfter= styled.div`
    display: flex;
    flex-direction: column;
    right: 1%;
    flex-wrap: nowrap;
    color: #FFF;
    font-size: var(--font-size-sm);
    font-weight: 400;
    position: relative;
    align-items: center;
    .iconSearch{
        position: absolute;
        left: 9px;
        font-size: 21px;
        top: 7px;
    }

    @media (min-width: 768px){
        padding-left: 151px;
        flex-direction: row;

        .lastBorder{
        border-right: none;
        border-left: 1px solid #5292C1;
        }

        .email{
            border: none;
        }
    }
`

export const SearchWrapper= styled.div`
    position: relative;
`

export const Search= styled.input`
    border: none;
    padding: 10px 34px 10px 42px;
    border-radius: 34px;
    background-color: var(--another-element);
    &::placeholder{
        color: #FFF;
    }
    @media (min-width: 768px){
        
    }
    
`