import Header from "../../components/header";
import Footer from "../../components/footer";

function Home() {
     return (
     <section className='container'>
     <div className='apresentacao'>
     <p>Olá, sou <br/>
     <span>Almeida e Píres</span> <br/>
     Devs Full Stack
     </p>
       <button className='btn btn-red'>
         Saiba mais sobre nós!
       </button>
     </div>
     <figure>
       <img className='img-home' src="/imagem 1 baixada no undraw.co" alt="Imagem da home" />
     </figure>
     </section>
     )
}

export default Home