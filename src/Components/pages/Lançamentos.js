import tshirt1 from '../../img/t-shirt/t-shirt1.png';
import tshirt2 from '../../img/t-shirt/t-shirt2.png';
import tshirt3 from '../../img/t-shirt/t-shirt3.png';
import tshirt4 from '../../img/t-shirt/t-shirt4.png';
import tshirt5 from '../../img/t-shirt/t-shirt5.png';
import tshirt6 from '../../img/t-shirt/t-shirt6.png';
import calca1 from '../../img/calca/calca1.png';
import calca2 from '../../img/calca/calca2.png';
import calca3 from '../../img/calca/calca3.png';
import calca4 from '../../img/calca/calca4.png';
import stylesC from './Lancamentos.module.css';

import ButtonComprar from '../buttonC/ButtonComprar'
import { useRef } from 'react';
import Arrow from '../../img/arrow/arrow.png';
function Lancamentos() {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return (


        <div className={stylesC.lacamento_container}>
            <h1>Lançamentos</h1>
            
            <div className={stylesC.Carousel} ref={carousel}>
            <div className={stylesC.lacamento_lacamento}>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt1} alt="Primeiro Item" />
                    <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                    <span className={stylesC.infoPreco}>39,50&euro;</span>
                    <ButtonComprar name="Blusa Cinza com caimento" price={39.50} />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt2} alt="Segundo Item" />
                    <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                    <span className={stylesC.infoPreco}>35,90&euro;</span>
                    <ButtonComprar name="Blusa Cinza Euphoria" price={35.90} />
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={tshirt3} alt="Terceiro Item" />
                    <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                    <span className={stylesC.infoPreco}>50,80&euro;</span>
                    <ButtonComprar name="Jaqueta Preta Element" price={50.80} />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt4} alt="Quarto Item" />
                    <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                    <span className={stylesC.infoPreco}>28,99&euro;</span>
                    <ButtonComprar name="Blusa Manga Longa Preta" price={28.99} />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt5} alt="Quinto Item" />
                    <span className={stylesC.infoName}>Blusa Branca</span>
                    <span className={stylesC.infoPreco}>13,99&euro;</span>
                    <ButtonComprar name="Blusa Manga Longa Preta" price={13.99} />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt6} alt="Sexto Item" />
                    <span className={stylesC.infoName}>Blusa Preta</span>
                    <span className={stylesC.infoPreco}>13,29&euro;</span>
                    <ButtonComprar name="Blusa Manga Longa Preta" price={13.29} />
                </div>

            </div>
            <div className={stylesC.buttons_scroll}>
                <button onClick={handleLeftClick}><img src={Arrow} alt='Seta' /></button>
                <button onClick={handleRightClick}><img src={Arrow} alt='Seta' /></button>
            </div>
            </div>
                
                <h1>Camisas</h1>
                <div className={stylesC.lacamento_lacamento}>


                    <div className={stylesC.lacamentos}>
                        <img src={tshirt1} alt="Primeiro item" />
                        <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                        <span className={stylesC.infoPreco}>39,50&euro;</span>
                        <ButtonComprar name="Blusa Cinza com caimento" price={39.50} />
                    </div>
                    <div className={stylesC.lacamentos}>
                        <img src={tshirt2} alt="Segundo item" />
                        <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                        <span className={stylesC.infoPreco}>35,90&euro;</span>
                        <ButtonComprar name="Blusa Cinza Euphoria" price={35.90} />

                    </div>

                    <div className={stylesC.lacamentos}>
                        <img src={tshirt3} alt="Terceiro item" />
                        <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                        <span className={stylesC.infoPreco}>50,80&euro;</span>
                        <ButtonComprar name="Jaqueta Preta Element" price={50.80} />
                    </div>
                    <div className={stylesC.lacamentos}>
                        <img src={tshirt4} alt="Quarto item" />
                        <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                        <span className={stylesC.infoPreco}>28,99&euro;</span>
                        <ButtonComprar name="Blusa Manga Longa Preta" price={28.99} />
                    </div>
                </div>

                <h1>Calças</h1>
                <div className={stylesC.lacamento_lacamento}>


                    <div className={stylesC.lacamentos}>
                        <img src={calca1} alt="Primeiro item" />
                        <span className={stylesC.infoName}>Calça Colorida Riders</span>
                        <span className={stylesC.infoPreco}>21,99&euro;</span>
                        <ButtonComprar name="Calça Colorida Riders" price={21.99} />
                    </div>
                    <div className={stylesC.lacamentos}>
                        <img src={calca2} alt="Segundo item" />
                        <span className={stylesC.infoName}>Calça Cargo Preta</span>
                        <span className={stylesC.infoPreco}>23,98&euro;</span>
                        <ButtonComprar name="Calça Cargo Preta" price={23.98} />
                    </div>

                    <div className={stylesC.lacamentos}>
                        <img src={calca3} alt="Terceiro item" />
                        <span className={stylesC.infoName}>Calça Areia</span>
                        <span className={stylesC.infoPreco}>22,39&euro;</span>
                        <ButtonComprar name="Calça Areia" price={22.39} />
                    </div>
                    <div className={stylesC.lacamentos}>
                        <img src={calca4} alt="Quarto item" />
                        <span className={stylesC.infoName}>Calça Cargo Cinza</span>
                        <span className={stylesC.infoPreco}>33,87&euro;</span>
                        <ButtonComprar name="Calça Cargo Cinza" price={33.87} />
                    </div>
                </div>
                <div className={stylesC.back_top}>
                    <button className={stylesC.back_top_btn}>Voltar Ao Topo</button>
                </div>

            </div>
            );

}

            export default Lancamentos;