import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from './Home.module.css';
import { IconTool, IconLeaf, IconSunElectricity,IconChartBar } from '@tabler/icons-react';
import ClientCard from "../../components/ClientCard/ClientCard";
import GalleryCard from "../../components/GalleryCard/GalleryCard";
import imgCover from '../../img/BCH_PORTADA_FB_AF.jpg';
import {Link} from 'react-router-dom'; 
import imgAbout from '../../img/about.jpg';


const Home = ()=>{
    return(
        <div>
            <NavBar/>
            <div className={styles.homeContainer}>
            <div className={styles.homeCover}>
                <img src={imgCover} alt="imagen portada" className={styles.imgCover1}/>
            </div>


            {/* ABOUT */}
            <div id="quienes-somos" className={styles.aboutContainer}>
                <div className={styles.aboutImgDiv}><img src={imgAbout} alt="foto de paneles solares"/></div>
                <div className={styles.aboutDivDesc}>
                <h4>¿Quienes Somos?</h4>
                <h2>Servicio profesional de asesoría</h2>
                <h3>Para empresas de energía</h3>
                <p>En BIGCHOICE, nos especializamos en proporcionar servicios de consultoría para soluciones de automatización y control en el mercado eléctrico, así como en el desarrollo de estrategias de conciencia situacional en empresas. Nuestra misión es transformar empresas de energía convirtiéndolas en organizaciones ágiles, competitivas, resilientes y sustentables.</p>
                <div className={styles.buttonAbout}>Contactanos</div>
                </div>
            </div>


            {/* SERVICIOS */}
            <div id='servicios' className={styles.homeServices}>
                <h2>Servicios</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, provident.</h3>
                <div className={styles.gridServices}>
                    <Link to={'/servicios'}>
                        <div className={styles.serviceItem}>
                        <IconTool className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div></Link>
                    <Link to={'/servicios'}>
                    <div className={styles.serviceItem}>
                        <IconLeaf className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div></Link>
                    <Link to={'/servicios'}>
                    <div className={styles.serviceItem}>
                        <IconSunElectricity className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/servicios'}>
                        <div className={styles.serviceItem}>
                        <IconChartBar className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div></Link>
                </div>
            </div>


            {/* GALERIA */}
            <div id='galeria' className={styles.homeGallery}>
                <h2>Galeria</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum.</h3>
                <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                 <div className="carousel-item active">
                    <div className={styles.carouselItem}>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    </div>
                    <div className={styles.carouselItem}>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    </div>
                 </div>
                 <div className="carousel-item">
                 <div className={styles.carouselItem}>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                </div>
                <div className={styles.carouselItem}>
                    <GalleryCard/>
                    <GalleryCard/>
                    <GalleryCard/>
                    </div>
                 </div>
                 </div>
                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                 </button>
                 <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>



            {/* CLIENTES */}
            <div id='clientes' className={styles.homeClients}>
                <h2>Clientes</h2>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, praesentium.</h3>
            <div className={styles.clientsGrid}>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            <ClientCard/>
            </div>
            </div>


            <div id="socios" className={styles.homeSocios}>Socios</div>
            <div id="contacto" className={styles.homeContact}>Contacto</div>
            </div>
        </div>
    );
}

export default Home;