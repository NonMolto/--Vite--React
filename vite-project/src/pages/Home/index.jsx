import Header from "public/src/components/header";
import Footer from "public/src/components/footer";
import Link from "pages/Sobre";


function Home() {
     return (
     <section className='container'>
     <div className='apresentacao'>
     <p>Olá, sou <br/>
     <span>Almeida e Pires</span> <br/>
     Devs Full Stack
     </p>
       <Link to="pages/Sobre" className='btn btn-red'>
         Saiba mais sobre nós!
       </Link>
     </div>
     <figure>
       <img className='img-home' src="public/Phone.svg" alt="Imagem da home" />
     </figure>
     </section>
     )
}

export default Home