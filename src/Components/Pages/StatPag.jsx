import './App.css'
import { useParams } from 'react-router-dom'
import FormShow from '../View/Local/FormShow'
import { useState } from 'react'
import StatisticsDisplayGraph from '../View/Local/StatisticsDisplayGraph'

function StatPag(props) {
  const { viewType } = useParams()
  const { showDataStat } = props
  const [diagramShow, setDiagramShow] = useState(false)
  return (
    <>
      <div className="StatDiv">
        <FormShow viewType={viewType} setShowD={setDiagramShow} dataShow={showDataStat} />
        <StatisticsDisplayGraph viewType={viewType} showD={diagramShow} dataShow={showDataStat} />
      </div>
    </>
  )
}

export default StatPag