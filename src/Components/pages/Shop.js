import stylesC from './Shop.module.css';
import FundoS from '../../img/Fundo2.png'
import tshirt1 from '../../img/t-shirt/t-shirt1.png';
import tshirt2 from '../../img/t-shirt/t-shirt2.png';
import tshirt3 from '../../img/t-shirt/t-shirt3.png';
import tshirt4 from '../../img/t-shirt/t-shirt4.png';
import tshirt5 from '../../img/t-shirt/t-shirt5.png';
import tshirt6 from '../../img/t-shirt/t-shirt6.png';
import Seta from '../../img/Seta.png'

function Shop() {
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
        <div className={stylesC.containerCarousel}>
            <div className={stylesC.carousel}>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt1} alt='T-Shirt 1' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Cinza com caimento</span>
                        <span className={stylesC.infoPreco}>39,50EUR</span>
                        <button className={stylesC.btn} onClick={(event) => buy("Blusa Cinza", 39.50)}>clique aqui</button>
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt2} alt='T-Shirt 2' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Cinza Euphoria</span>
                        <span className={stylesC.infoPreco}>35,90EUR</span>
                        <button onClick={(event) => buy("Blusa Cinza Euphoria", 35.90)}>clique aqui</button>
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt3} alt='T-Shirt 3' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Jaqueta Preta Element</span>
                        <span className={stylesC.infoPreco}>50,80EUR</span>
                        <button onClick={(event) => buy("Jaqueta Preta Element", 50.80)}>clique aqui</button>
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt4} alt='T-Shirt 4' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Manga Longa Preta</span>
                        <span className={stylesC.infoPreco}>28,99EUR</span>
                        <button onClick={(event) => buy("Blusa Manga Longa Preta", 28.99)}>clique aqui</button>
                    </div>
                </div>
                <div className={stylesC.item_Carousel}>
                    <div className={stylesC.image}>
                        <img src={tshirt5} alt='T-Shirt 5' />
                    </div>
                    <div className={stylesC.info}>
                        <span className={stylesC.infoName}>Blusa Basica Branca</span>
                        <span className={stylesC.infoPreco}>9,99EUR</span>
                        <button onClick={(event) => buy("Blusa Basica Branca", 9.99)}>clique aqui</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Shop;