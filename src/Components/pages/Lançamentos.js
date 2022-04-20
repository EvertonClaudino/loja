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
function Lancamentos() {
    return (

        <div className={stylesC.lacamento_container}>
            <h1>Lançamentos</h1>
            <div className={stylesC.lacamento_lacamento}>
                

                <div className={stylesC.lacamentos}>
                    <img src={tshirt1} alt="Primeiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                <img src={tshirt2} alt="Segundo item" />
                <button>Comprar</button>
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={tshirt3} alt="Terceiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt4} alt="Quarto item" />
                    <button>Comprar</button>    
                </div>
            </div>

            <h1>Camisas</h1>
            <div className={stylesC.lacamento_lacamento}>
                

                <div className={stylesC.lacamentos}>
                    <img src={tshirt1} alt="Primeiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                <img src={tshirt2} alt="Segundo item" />
                <button>Comprar</button>
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={tshirt3} alt="Terceiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={tshirt4} alt="Quarto item" />
                    <button>Comprar</button>    
                </div>
            </div>

            <h1>Calças</h1>
            <div className={stylesC.lacamento_lacamento}>
                

                <div className={stylesC.lacamentos}>
                    <img src={calca1} alt="Primeiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                <img src={calca2} alt="Segundo item" />
                <button>Comprar</button>
                </div>

                <div className={stylesC.lacamentos}>
                    <img src={calca3} alt="Terceiro item" />
                    <button>Comprar</button>
                </div>
                <div className={stylesC.lacamentos}>
                    <img src={calca4} alt="Quarto item" />
                    <button>Comprar</button>    
                </div>
            </div>

        </div>
    )

}

export default Lancamentos;