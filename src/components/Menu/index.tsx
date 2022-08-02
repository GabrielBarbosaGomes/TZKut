import { Icon } from '@iconify/react'
import { useState } from "react"
import { Item, ItemAfter, List, ListItems, Logo, MenuNav, Search, SearchWrapper } from './styles'

export function Menu() {
    const [isOpen, setOpen] = useState(false)

    function toggleMode() {
        setOpen(!isOpen);
    }

    return (
        <>
            <MenuNav className='paddingContainer'>
                <Logo >TZKut</Logo>
                <div className={isOpen ? 'icon iconActive' : 'icon'} onClick={toggleMode} >
                    <div className='Hamburguer HamburguerIcon'></div>
                </div>
                <div className={isOpen? 'menu menuOpen paddingContainer' : 'menu paddingContainer'}>
                    <ListItems>
                        <List>
                            <Logo >TZKut</Logo>
                            <Item><a href='#'>Inicio</a></Item>
                            <Item><a href='#'>Perfil</a></Item>
                            <Item><a href='#'>Página de recados</a></Item>
                            <Item><a href='#'>Amigos</a></Item>
                            <Item><a href='#'>Comunidades</a></Item>
                        
                            <ItemAfter>
                                <Item><div>gabryel122crf@gmail.com</div></Item>
                                <Item className='lastBorder'><a href='#'>Sair</a></Item>
                                <SearchWrapper>
                                    <Search type="text" placeholder='pesquisar no TZKut' />
                                    <Icon className='iconSearch' icon="majesticons:search-line" color="white" />
                                </SearchWrapper>
                            </ItemAfter>
                        </List>
                    </ListItems>
                </div>
            </MenuNav>
        </>
    )
}