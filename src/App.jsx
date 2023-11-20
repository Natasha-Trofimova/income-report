import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPag from './Components/Pages/MainPag'
import StatPag from './Components/Pages/StatPag'
import Footer from './Components/View/Global/Footer'
import Header from './Components/View/Global/Header'
import PlanPages from './Components/Pages/PlanPag'

function App() {
  const [, setShowPages] = useState('main')
  const [dataShow, setDataShow] = useState([])

  return (
    <>
      <Header actions={setShowPages}> </Header>
      <Routes>
        <Route
          path='/main'
          element={<MainPag action={setDataShow} />}
        />
        <Route
          path='/stat/:viewType'
          element={<StatPag showDataStat={dataShow} />}
        />
        <Route
          path='/plan'
          element={<PlanPages />}
        />
        {/* заглушка  */}
        <Route
          path='*'
          element={<MainPag action={setDataShow} />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App