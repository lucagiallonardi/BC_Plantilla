import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from './Home.module.css';
import { IconTool, IconLeaf, IconSunElectricity,IconChartBar } from '@tabler/icons-react';
import ClientCard from "../../components/ClientCard/ClientCard";
import GalleryCard from "../../components/GalleryCard/GalleryCard";


const Home = ()=>{
    return(
        <div>
            <NavBar/>
            <div className={styles.homeContainer}>
            <div className={styles.homeCover}>Welcome</div>


            {/* SERVICIOS */}
            <div className={styles.homeServices}>
                <h2>Servicios</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, provident.</h3>
                <div className={styles.gridServices}>
                    <div className={styles.serviceItem}>
                        <IconTool className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div>
                    <div className={styles.serviceItem}>
                        <IconLeaf className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div>
                    <div className={styles.serviceItem}>
                        <IconSunElectricity className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div>
                    <div className={styles.serviceItem}>
                        <IconChartBar className={styles.serviceIcon}/>
                        <div className={styles.serviceDesc}>
                            <h3>Descripcion</h3>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, maxime?</h4>
                        </div>
                    </div>
                </div>
            </div>


            {/* GALERIA */}
            <div className={styles.homeGallery}>
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
            <div className={styles.homeClients}>
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


            <div className={styles.homeSocios}>Socios</div>
            <div className={styles.homeContact}>Contacto</div>
            </div>
        </div>
    );
}

export default Home;