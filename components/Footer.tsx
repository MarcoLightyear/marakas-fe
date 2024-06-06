import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { subtle } from "crypto";


const Footer : React.FC = () => {
    const styles = {
        "containerStyles" : "grid bg-blue p-5",
        "termsContainerStyles" : "grid grid-rows-1 grid-cols-3  font-fredoka text-white mx-48",
        "termsStyles" : "text-center content-center text-xs",
        "socialStyles" : "flex flex-row grid-rows-1 justify-center p-5 gap-3 text-white text-4xl mb-4",
        "actionsContainerStyles" : "grid grid-rows-1 grid-cols-3 justify-center content-center  font-bungee text-white mb-8",
        "actionsStyles" : "text-center",
        "connectContainerStyles" : "grid grid-cols-1 grid-rows-1 justify-center content-center",
        "connectStyles" : "font-fredoka text-center text-dark-yellow"
    }

    return (
        <div className={styles.containerStyles}>
            <div className={styles.actionsContainerStyles}>
                <h2 className={styles.actionsStyles}>
                    SERVICIO AL <br/>CLIENTE
                </h2>
                <h2 className={`${styles.actionsStyles} text-dark-yellow`}>
                    RASTREA TU <br/> PEDIDO
                </h2>
                <h2 className={styles.actionsStyles}>
                    SOBRE <br/> NOSOTROS
                </h2>
             </div>
             <div className={styles.connectContainerStyles}>
                <h2 className={styles.connectStyles}>
                    CONECTAR
                </h2>
             </div>
             <div className={styles.socialStyles}>
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faEnvelope} />
             </div>
             <div className={styles.termsContainerStyles}>
                <h2 className={styles.termsStyles}>
                    TÉRMINOS Y<br/>CONDICIONES
                </h2>
                <h2 className={styles.termsStyles}>
                    POLÍTICAS
                </h2>
                <h2 className={styles.termsStyles}>
                    AVISO DE <br/> PRIVACIDAD
                </h2>
             </div>
        </div>
        
    )
}
export default Footer;