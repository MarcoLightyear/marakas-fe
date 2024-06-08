import Image from "next/image";
import marakasLogo from "../public/look_and_feeling/marakas_pink.svg"
import Button from "./Button";

const styles = {
    "imageWidth" : 550,
    "imageHeight" : 500,
    "containerStyles" : "grid grid-cols-2 grid-rows-1 font-francois-one p-5",
    "menuStyles" : "grid grid-cols-3 font-bold text-blue tracking-widest justify-center",
    "buttonStyles" : "bg-pink text-yellow rounded-3xl drop-shadow-md mx-7 text-xl",
    "linksStyles" : "content-center text-center"
}

const NavigationHeader: React.FC = () => {
    return (
        <div className={styles.containerStyles}>
            <Image
                src={marakasLogo}
                alt="Marakas Logo"
                width={styles.imageWidth}
                height={styles.imageHeight}
            />
            <div className={styles.menuStyles}>
                <h2 className={styles.linksStyles}>
                    <a href="">NOSOTROS</a>
                </h2>
                <h2 className={styles.linksStyles}>
                    <a href="">COLECCIONES</a>
                </h2>
                <Button styles={styles.buttonStyles} text="COMPRAR" redirectTo="/collections"/>
            </div>
        </div>
    );
};

export default NavigationHeader;