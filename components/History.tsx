const History: React.FC = () => { 
    const styles = {
        
    }

    return (
        <div className="grid grid-cols-1 pt-5 pl-5 pr-5">
            <h3 className="font-blinker text-blue text-6xl ml-20">
                NUESTRA
            </h3>
            <h2 className="font-porter text-7xl ml-20 text-pink">
                HISTORIA
            </h2>
            <div className="mx-40 grid gap-3 font-podkova mt-5">
                <h5>
                Somos una marca mexicana creada por una mujer emprendedora apasionada por la moda, la sustentabilidad y las artesanías.
                </h5>
                <h5>
                Por esto creó una marca de piezas únicas creadas por ella las cuales te ayudarán a potenciar tu esencia personal que te hace único.
                </h5>
                <h5>
                    Impulsa tu esencia usando MARAKAS
                </h5>
            </div>
        </div>
    );
}

export default History;