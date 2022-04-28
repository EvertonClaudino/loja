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
function Lancamentos() {
    var storage = []

    function buy(name, price) {
        try {
            storage = JSON.parse(localStorage.getItem("cart"))
            if (!storage) {
                var firstItem = { name, price }
                localStorage.setItem("cart", JSON.stringify([firstItem]))
            } else {
                storage.push({ name, price })
                localStorage.setItem("cart", JSON.stringify(storage))
            }

        } catch {

        }
    }
    return (

        <div className={stylesC.lacamento_container}>
                <h1>Lançamentos</h1>
            <div className={stylesC.lacamento_lacamento}>


                <div className={stylesC.lacamentos}>
                    <img src={tshirt1} alt="Primeiro item" />
                    <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                    <span className={stylesC.infoPreco}>39,50&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt2} alt="Segundo item" />
                    <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                    <span className={stylesC.infoPreco}>35,90&euro;</span>
                    <ButtonComprar />
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={tshirt3} alt="Terceiro item" />
                    <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                    <span className={stylesC.infoPreco}>50,80&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt4} alt="Quarto item" />
                    <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                    <span className={stylesC.infoPreco}>28,99&euro;</span>
                    <ButtonComprar />
                </div>
            </div>

            <h1>Camisas</h1>
            <div className={stylesC.lacamento_lacamento}>


                <div className={stylesC.lacamentos}>
                    <img src={tshirt1} alt="Primeiro item" />
                    <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                    <span className={stylesC.infoPreco}>39,50&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt2} alt="Segundo item" />
                    <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                    <span className={stylesC.infoPreco}>35,90&euro;</span>
                    <ButtonComprar />                
                    
                    </div>

                <div className={stylesC.lacamentos}>
                    <img src={tshirt3} alt="Terceiro item" />
                    <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                    <span className={stylesC.infoPreco}>50,80&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt4} alt="Quarto item" />
                    <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                    <span className={stylesC.infoPreco}>28,99&euro;</span>
                    <ButtonComprar />
                </div>
            </div>

            <h1>Calças</h1>
            <div className={stylesC.lacamento_lacamento}>


                <div className={stylesC.lacamentos}>
                    <img src={calca1} alt="Primeiro item" />
                    <span className={stylesC.infoName}>Calça Colorida Riders</span>
                    <span className={stylesC.infoPreco}>21,99&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={calca2} alt="Segundo item" />
                    <span className={stylesC.infoName}>Calça Cargo Preta</span>
                    <span className={stylesC.infoPreco}>23,98&euro;</span>
                    <ButtonComprar />
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={calca3} alt="Terceiro item" />
                    <span className={stylesC.infoName}>Calça Areia</span>
                    <span className={stylesC.infoPreco}>22,39&euro;</span>
                    <ButtonComprar />
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={calca4} alt="Quarto item" />
                    <span className={stylesC.infoName}>Calça Cargo Cinza</span>
                    <span className={stylesC.infoPreco}>33,87&euro;</span>
                    <ButtonComprar />
                </div>
            </div>

        </div>
    )

}

export default Lancamentos;