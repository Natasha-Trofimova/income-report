import css from "../../../Styles/Local/StatisticsDisplayGraph.css"
import Diagram from "./Diagram"

const { SDGFormShowContainer } = css

function StatisticsDisplayGraph(props) {

  const { dataShow, showD } = props
  // const allFD =
  //   dataShow
  //     .reduce((summ, item) => {
  //       if (item.split('::')[1] === 'доход') {
  //         return summ = summ + (+(item.split('::')[0]))
  //       }
  //       else {
  //         return summ = summ - (+(item.split('::')[0]))
  //       }
  //     }, 0)

  return (
    <>
      {
        showD &&
        <SDGFormShowContainer style={{ height: "360px", width: "459px" }}>
          {/* <div>
            <span>Всего:</span> <br />
            <div> {allFD} рублей </div>
          </div> */}

          <div style={{ height: "80%", width: "100%" }} >
            <Diagram dataShow={dataShow} />
          </div>
        </SDGFormShowContainer>
      }
    </>
  )
}

export default StatisticsDisplayGraph