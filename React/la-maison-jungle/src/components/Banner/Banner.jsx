import styles from './Banner.module.css'
import banner from '../../assets/banner.svg'

const Banner = () => {
    return (
        <header className={styles.banner}>
            <h1 className={styles.title}><img src={banner} width="64" height="64" />La maison jungle</h1>
        </header>
    )
}

export default Banner