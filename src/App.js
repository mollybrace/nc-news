import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ArticleList from "./components/articlelist"
import ArticleElement from './components/articleelement';
import ErrorPage from './components/errorpage';
import { Routes, Route} from "react-router-dom"

function App() {

    return (
    <div className="App">
     <Header />
     <Routes>
     <Route path="/" element={<ArticleList />} />
     <Route path="/articles/:article_id" element={<ArticleElement />} />
     <Route path="*" element={ErrorPage} />
     </Routes>
    </div>
  )
}

export default App;
