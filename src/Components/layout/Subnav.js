import styles from './Subnav.module.css'
import { GrDeliver } from 'react-icons/gr'
import { FaRegCreditCard } from 'react-icons/fa'
import {GoShield} from 'react-icons/go'
function Subnav(){
    return(

        <div className={styles.subnav}>
            <p className={styles.p_Sub}> <GrDeliver /> <strong>FRETE GRÁTIS</strong> NAS COMPRAS ACIMA DE 150&#8364; </p>
            <p className={styles.p_Sub}><FaRegCreditCard /> <strong>PARCELE EM ATE 2X</strong> SEM JUROS</p>
            <p className={styles.p_Sub}><GoShield /> <strong>SITE SEGURO</strong></p>
        </div>
    )
}


export default Subnav;