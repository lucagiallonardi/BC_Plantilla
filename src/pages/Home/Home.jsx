import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from './Home.module.css';
import { IconBulb, IconLeaf, IconSunElectricity,IconChartBar } from '@tabler/icons-react';
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
                <div className={styles.titleDivServices}>
                    <div className={styles.titleLine}></div><h2>Nuestros servicios</h2><div className={styles.titleLine}></div></div>
                <h3>Soluciones energéticas a tu alcance: Te ayudamos a transformar tu negocio con nuestros servicios especializados</h3>
                <div className={styles.gridServices}>
                        <div className={styles.serviceItem}>
                        <div className={styles.circleIconService}></div>
                        <IconBulb className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Consultoría Especializada en Automatización y Control</h3>
                            <h4>Nuestro equipo de expertos ofrece servicios de consultoría especializados en automatización y control en el mercado eléctrico. Trabajamos para proporcionar soluciones efectivas y personalizadas que optimicen la eficiencia y la seguridad en el sector energético.</h4>
                        </div>
                    </div>
                    <div className={styles.serviceItem}>
                    <div className={styles.circleIconService}></div>
                        <IconLeaf className={styles.serviceIcon}/>
                        
                        <div className={styles.serviceDesc}>
                            <h3>Desarrollo de Estrategias de Conciencia Situacional</h3>
                            <h4>Nos destacamos en el desarrollo de estrategias de conciencia situacional en empresas. Ayudamos a nuestros clientes a identificar y abordar los desafíos actuales y futuros, permitiéndoles tomar decisiones informadas y mantenerse a la vanguardia en un entorno competitivo.</h4>
                        </div>
                    </div>
                    <div className={styles.serviceItem}>
                    <div className={styles.circleIconService}></div>
                    <IconChartBar className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Transformación Empresarial y Organizacional</h3>
                            <h4>Trabajamos codo a codo con nuestros clientes para implementar cambios significativos que impulsen el crecimiento y la innovación en sus operaciones.</h4>
                        </div>
                    </div>
                        <div className={styles.serviceItem}>
                        <div className={styles.circleIconService}></div>
                        <IconSunElectricity className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Optimización de Eficiencia Energética</h3>
                            <h4>Nuestros expertos ayudan a identificar oportunidades de mejora en el uso y la gestión de la energía, contribuyendo así a reducir costos y minimizar el impacto ambiental.</h4>
                        </div>
                    </div>
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
