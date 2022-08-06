import { LinksNav, Perfil, SidebarComponent } from "./styles";
import user from "../../assets/icon/user.png";
import book from '../../assets/icon/book.png';
import camera from '../../assets/icon/camera.png';
import videoCamera from '../../assets/icon/videoCamera.png';
import sunny from '../../assets/icon/sunny.png';
import plus from '../../assets/icon/plus.png';
import list from '../../assets/icon/toDoList.png';
import up from '../../assets/icon/update.png';
import settings from '../../assets/icon/settings.png'
import { useState } from "react";

export function Sidebar(){
    const [widthScreen, useWidthScreen] = useState(innerWidth)


    const mobile= ()=> {
        if(widthScreen >= 768){
            return(false)
        }
        return(true)
    }
    
    return(
        <>
        {mobile ? ('') : (
            <SidebarComponent className="container">
            <Perfil>
                <h2>Gabriel barbosa</h2>
                <span>masculino</span>
                <span>solteiro(a)</span>
                <span>Brasil</span>
            </Perfil>
            <LinksNav>
                <div>
                    <div className="links"><img src={user} /><a className="styleLink" href="#">Perfil</a></div>
                    <div className="links"><img src={book} /><a className="styleLink" href="#">Recados</a></div>
                    <div className="links"><img src={camera} /><a className="styleLink" href="#">Fotos</a></div>
                    <div className="links"><img src={videoCamera} /><a className="styleLink" href="#">Vídeos</a></div>
                    <div className="links"><img src={sunny} /><a className="styleLink" href="#">Depoimentos</a></div>
                </div>

                <a className="styleLink float">Editar</a>                
            </LinksNav>
            <LinksNav>
                <h3>Apps</h3>
                <div className="links">
                    <img src={plus} />
                    <p>Adicionar apps</p>
                </div>
            </LinksNav>

            <LinksNav>
                <div className="links">
                    <img src={list} />
                    <p>Listas</p>
                </div>

                <div className="links">
                    <img src={up} />
                    <p>Atualizações</p>
                </div>

                <div className="links">
                    <img src={settings} />
                    <p>Configurações</p>
                </div>
            </LinksNav>
        </SidebarComponent>
        )}
        </>
    )
}