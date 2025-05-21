import './App.css' 
import AppRoutes from './routes'
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <h1>Willam super legal! | ;p Guilherme, mostra entra nas "pages"  (Contatos, Sobre, Projetos)</h1>
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App
