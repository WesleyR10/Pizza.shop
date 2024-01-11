import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 800 },
  { date: '12/12', revenue: 900 },
  { date: '13/12', revenue: 400 },
  { date: '14/12', revenue: 2300 },
  { date: '15/12', revenue: 800 },
  { date: '16/12', revenue: 640 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      {/* Ocupar 3 colunas */}
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            {/* Gráfico de linha */}
            <XAxis // Eixo X
              dataKey="date" // Informação que vai ser mostrada no eixo X (Nome do campo)
              axisLine={false} // Remove a linha do eixo
              tickLine={false} // Remove a linha dos ticks
              dy={16} // Distância do eixo X para o gráfico
            />
            <YAxis // Eixo Y
              stroke="#888"
              axisLine={false} // Remove a linha do eixo
              tickLine={false} // Remove a linha dos ticks
              width={80}
              tickFormatter={(
                value: number, // Formata o valor para moeda
              ) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <CartesianGrid // Grade do gráfico
              vertical={false} // Remove as linhas verticais
              className="stroke-muted"
            />

            <Line // Linha do gráfico
              stroke={colors.violet[500]} // Cor da linha
              type="linear"
              strokeWidth={2} // Grossura da linha
              dataKey="revenue" // Qual informação vai fazer a linha subir e descer
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
