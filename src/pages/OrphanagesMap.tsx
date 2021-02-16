import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi';
import {MapContainer, TileLayer } from 'react-leaflet';


import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/OrpanagesMap.css'
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="marcador de mapa happy" />
                    <h2> Escolha um orfanato no mapa </h2>
                    <p> Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong> Bom Jesus do Galho </strong>
                    <span>Minas Gerais</span>

                </footer>


            </aside>

            <MapContainer
                center={[-19.8356366, -42.3226726]}
                zoom={15}
                style={{width:'100%', height:'100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />s
            </MapContainer>




            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>

        
    )
}

export default OrphanagesMap;