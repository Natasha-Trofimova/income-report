// контральный файл в котором собирается всё
import { useState } from 'react'
import MainPag from './Components/Pages/MainPag'
import StatPag from './Components/Pages/StatPag'
import Footer from './Components/View/Global/Footer'
import Header from './Components/View/Global/Header'


function App() {
  const [showPages, setShowPages] = useState('main')
  const [dataShow, setDataShow] = useState([])


  return (
    <>
      <Header actions={setShowPages}> </Header>

      {
        showPages === 'main'
          ? <MainPag action={setDataShow} /> :
          showPages === 'stat'
            ?
            <StatPag showDataStat={dataShow} />
            :
            showPages === 'plan' ? <div>PlanPages</div> : <div>fals</div>
      }
 

      <Footer />
    </>
  )
}

export default App