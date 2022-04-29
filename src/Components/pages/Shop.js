import stylesC from './Shop.module.css';
import FundoS from '../../img/Fundo2.png'
import tshirt1 from '../../img/t-shirt/t-shirt1.png';
import tshirt2 from '../../img/t-shirt/t-shirt2.png';
import tshirt3 from '../../img/t-shirt/t-shirt3.png';
import tshirt4 from '../../img/t-shirt/t-shirt4.png';
import tshirt5 from '../../img/t-shirt/t-shirt5.png';
import tshirt6 from '../../img/t-shirt/t-shirt6.png';

import Carousel from '../carousel/Carousel'

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
        <Carousel />
       
    )

}

export default Shop;