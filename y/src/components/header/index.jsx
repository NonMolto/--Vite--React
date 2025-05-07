import styles from './header.module.css'
function Header() {
return (
<header className={styles.header}>
    <span/> Almeida Queiroz Pires <span/>
    <nav>
    <a href="">Home</a>
    <a href="">Sobre</a>
    <a href="">Projetos</a>
    <a href="">Contatos</a>
    </nav>
    </header>
    )
}
export default Header