import { Chart } from "react-google-charts";
import { Container, FlexGraficos } from "./styles";
export function Dashboard() {
  const dados = [
    ["Grupos", "Quantidade"],
    ["games", 20],
    ["animes", 10],
    ["Geek", 30],
    ["Mangás", 30],
  ]
  const dataVendas: any = [
    ["Dias", "Quantidade de vendas"],
  ]

  const date = new Date().getDate()
  for (let index = 1; index <= date; index++) {
    dataVendas.push([index.toString(), Math.floor(Math.random() * 1000 + 1)])
  }

  return (
    <Container>
      <FlexGraficos>
        <h1>Gráficos</h1>
        <Chart
          chartType="PieChart"
          data={dados}
          width="100%"
          height="400px"
        />
        <h3>Quantidade de vendas por dia</h3>
        <div>
          <Chart
            chartType="Bar"
            width="95%"
            height="450px"
            data={dataVendas}
          />
        </div>
      </FlexGraficos>
    </Container>
  )
}