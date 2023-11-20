import { useEffect } from 'react'
import { useState } from "react"
import { ResponsivePie } from '@nivo/pie'


const MyResponsivePie = ({ data }) => (
  <ResponsivePie
    data={data}
    colors={{ scheme: 'set3' }}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          0.2
        ]
      ]
    }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
      from: 'color',
      modifiers: [
        [
          'darker',
          2
        ]
      ]
    }}
  />
)

function Diagram(props) {

  const [type1, setType1] = useState(0)
  const [type2, setType2] = useState(0)
  const [type3, setType3] = useState(0)
  const [type4, setType4] = useState(0)
  const [type5, setType5] = useState(0)
  const [type6, setType6] = useState(0)
  const [type7, setType7] = useState(0)

  const { dataShow, showD } = props
  const filterDataShow = dataShow.filter(item => item.split('::')[1] === 'расход')

  useEffect(() => {
    for (let i = 0; i < filterDataShow.length; i++) {
      if (filterDataShow[i].split('::')[2] === "транспорт") setType1( +(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "рестораны") setType3( +(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "развлечение") setType5( +(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "счёт") setType4( +(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "путешествия") setType7( +(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "одежда") setType6(+(filterDataShow[i].split('::')[0]))
      if (filterDataShow[i].split('::')[2] === "продукты") setType2( +(filterDataShow[i].split('::')[0]))
    }
  }, [])
  return (
    <>
      <MyResponsivePie
        data={[
          {
            "id": "транспорт",
            "label": "транспорт",
            "value": type1,
            "color": "hsl(40, 70%, 50%)"
          },
          {
            "id": "продукты",
            "label": "продукты",
            "value": type2,
            "color": "hsl(112, 70%, 50%)"
          },
          {
            "id": "рестораны",
            "label": "рестораны",
            "value": type3,
            "color": "hsl(161, 70%, 50%)"
          },
          {
            "id": "Оплата счетов",
            "label": "Оплата счетов",
            "value": type4,
            "color": "hsl(228, 70%, 50%)"
          },
          {
            "id": "развлечение",
            "label": "развлечение",
            "value": type5,
            "color": "hsl(112, 70%, 50%)"
          },
          {
            "id": "одежда",
            "label": "одежда",
            "value": type6,
            "color": "hsl(228, 70%, 50%)"
          },
          {
            "id": "путешествия",
            "label": "путешествия",
            "value": type7,
            "color": "hsl(228, 70%, 50%)"
          }
        ].filter(item => item.value > 0)} />
    </>
  )
}

export default Diagram