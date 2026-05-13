import Footer from './components/Footer'
import Header from './components/Header'
import Question from './components/Question'
import './App.css'
import QuestionContextProvider from './context/QuestionProvider'

function App() {
  return (<QuestionContextProvider>
       <Header />
       <Question />
       <Footer />
     </QuestionContextProvider>)
  
}

export default App
