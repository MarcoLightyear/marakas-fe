import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";


const Footer : React.FC = () => {
    const styles = {
        "containerStyles" : "grid grid-cols-3 grid-rows-3",
        "footerActionsStyles" : "font"
    }

    return (
        <div className="grid bg-blue p-5">
            <div className="grid grid-rows-1 grid-cols-3 justify-center content-center  font-bungee text-white mb-8">
                <h2 className="text-center">
                    SERVICIO AL <br/>CLIENTE
                </h2>
                <h2 className="text-center text-dark-yellow">
                    RASTREA TU <br/> PEDIDO
                </h2>
                <h2 className="text-center">
                    SOBRE <br/> NOSOTROS
                </h2>
             </div>
             <div className="grid grid-cols-1 grid-rows-1 justify-center content-center">
                <h2 className="font-fredoka text-center text-dark-yellow">
                    CONECTAR
                </h2>
             </div>
             <div className="flex flex-row grid-rows-1 justify-center p-5 gap-3 text-white text-4xl mb-4">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faEnvelope} />
             </div>
             <div className="grid grid-rows-1 grid-cols-3  font-fredoka text-white mx-48">
                <h2 className="text-center content-center text-xs">
                    TÉRMINOS Y<br/>CONDICIONES
                </h2>
                <h2 className="text-center content-center text-xs">
                    POLÍTICAS
                </h2>
                <h2 className="text-center content-center text-xs">
                    AVISO DE <br/> PRIVACIDAD
                </h2>
             </div>
        </div>
        
    )
}
export default Footer;