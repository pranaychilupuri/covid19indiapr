import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import SearchInput from './components/SearchInput'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

import './App.css'

const App = () => (
  <div className="app-container">
      <Header />
      <SearchInput />

      <div>
        <Switch>
          <Route exact path="/" component={Home} stateList={statesList} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
  </div>
)

export default App
