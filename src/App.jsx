import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditRoom from './components/room/EditRoom'
import Home from './components/home/Home'
import ExistingRooms from './components/room/ExistingRooms'



function App() {
  return <>
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-room/:roomId" element={<EditRoom />} />
          <Route path="/existing-rooms" element={<ExistingRooms />} />
        </Routes>
      </Router>
    </main>
  </>
}
export default App
