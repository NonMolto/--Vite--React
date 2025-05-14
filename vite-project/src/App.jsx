import 'public/src/App.css' 
import AppRoutes from 'public/src/routes'
import Header from 'public/src/components/header'
import Footer from 'public/src/components/footer'

function App() {
  return (
    <>
      <h1>Willam super legal!</h1>
      <AppRoutes />
      <Footer />
      <Header /> 
    </>
  )
}

export default App