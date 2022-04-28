import { type } from '@testing-library/user-event/dist/type';
import stylesC from './ButtonComprar.module.css';


function ButtonComprar() {
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
   return(
    <button className={stylesC.comprar_btn} onClick={(event) => buy("", Number )}>Comprar</button>
   )
}

export default ButtonComprar;