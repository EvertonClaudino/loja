import React from "react";
import { Carousel } from "react-bootstrap"
import { Link } from "react-router-dom";

import Fundo1 from '../../img/Fundo1.png'
import Fundo2 from '../../img/Fundo2.png'
import Fundo3 from '../../img/Fundo3.png'
import styles from './Home.module.css'

export default function Home() {
    return (
        
        <div className={styles.home_container}>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block" src={Fundo1} alt="First slide"/>
                    <Carousel.Caption>
                    <Link to ='/Shop'><button className={styles.home_container_btn}>SHOP</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block" src={Fundo2} alt="Second slide" />
                    <Carousel.Caption>
                    <Link to ='/Lancamentos'><button className={styles.home_container_btn}>Lançamentos</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={Fundo3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <Link to ='/Quemsomos'><button className={styles.home_container_btn}>Quem Somos?</button></Link>                   
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>          
        </div>
    )

}