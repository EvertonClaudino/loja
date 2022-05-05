import stylesC from './Shop.module.css';
import tshirt1 from '../../img/t-shirt/t-shirt1.png';
import tshirt2 from '../../img/t-shirt/t-shirt2.png';
import tshirt3 from '../../img/t-shirt/t-shirt3.png';
import tshirt4 from '../../img/t-shirt/t-shirt4.png';
import tshirt5 from '../../img/t-shirt/t-shirt5.png';

import ButtonComprar from '../buttonC/ButtonComprar'

import Arrow from '../../img/arrow/arrow.png';
import { useRef } from 'react';





function Shop() {

    const carousel = useRef(null)

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) =>{
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className={stylesC.containerCarousel}>
            <div className={stylesC.Carousel} ref={carousel}>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt1} alt='T-Shirt 1' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                        <span className={stylesC.infoPreco}>39,50&euro;</span>
                        <ButtonComprar name="Blusa Cinza com caimento" price={39.50} />                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt2} alt='T-Shirt 2' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                        <span className={stylesC.infoPreco}>35,90&euro;</span>
                        <ButtonComprar name="Blusa Cinza Euphoria" price={35.90} />
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt3} alt='T-Shirt 3' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                        <span className={stylesC.infoPreco}>50,80&euro;</span>
                        <ButtonComprar name="Jaqueta Preta Element" price={50.80} />
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt4} alt='T-Shirt 4' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                        <span className={stylesC.infoPreco}>28,99&euro;</span>
                        <ButtonComprar name="Blusa Manga Longa Preta" price={35.90} />
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt5} alt='T-Shirt 5' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Basica Branca</span>
                        <span className={stylesC.infoPreco}>9,99&euro;</span>
                        <ButtonComprar name="Blusa Basica Branca" price={9.99} />
                    </div>
                </div>
            </div>
            <div className={stylesC.buttons_scroll}>
            <button onClick={handleLeftClick}><img src={Arrow} alt='Seta'/></button>
            <button onClick={handleRightClick}><img src={Arrow} alt='Seta'/></button>
            </div>

        </div>

    )

}

export default Shop;