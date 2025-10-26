import './css/App.css'
import Home from './pages/home.jsx'
import { DrinkProvider } from './contexts/DrinkContexts'
import {Routes, Route} from 'react-router-dom'

//* Here I simply prepared the routing structure for future scalability.
//* Wrapping the application in DrinkProvider provides drink data context to all components.

function App() {
  return (
    <DrinkProvider>
    <main className="main-container">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add routes to other pages here */}
      </Routes>
    </main>
    </DrinkProvider>
  );
}
export default App
