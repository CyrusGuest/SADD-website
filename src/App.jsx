import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Club from './pages/Club'
import Initiatives from './pages/Initiatives'
import SafeDriving from './pages/SafeDriving'
import Sources from './pages/Sources'

function App() {
  return (
    <>    
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="club" element={<Club />} />
        <Route path="initiatives" element={<Initiatives />} />
        <Route path="safe-driving" element={<SafeDriving />} />
        <Route path="sources" element={<Sources />} />
      </Routes>
    </>
  )
}

export default App
