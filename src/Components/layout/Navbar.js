import { Link } from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css'
import SurtoLogo2 from '../../img/SurtoLogo2.png'

/*Icone do Login 

import { GoPerson } from 'react-icons/go'

*/

function Navbar() {
    return (
    <nav className={styles.navbar}>
        <Container>
        <Link to= '/'> <img className={styles.img} src={SurtoLogo2} alt='SURTO' />
        </Link>
        <ul className={styles.list}>
            <li className={styles.item}><Link to ='/'>HOME</Link></li>
            <li className={styles.item}><Link to ='/SHOP'>SHOP</Link></li>
            <li className={styles.item}><Link to ='/Lancamentos'>LANÇAMENTOS</Link></li>
            <li className={styles.item}><Link to ='/Quemsomos'>QUEM SOMOS?</Link></li>
            <li className={styles.item}><Link to ='/Login'>LOGIN</Link></li>
        </ul>
        </Container>
    </nav>
    )
}

export default Navbar;