// Initialization steps
import {
	CategoryScale,
	Chart,
	ChartData,
	ChartOptions,
	LineElement,
	LinearScale,
	PointElement,
	Tooltip
} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
	Tooltip
)

export default function LineChart<Key>(props: { data: [Key, number][], yAxis?: string }): JSX.Element {
	const yAxis = props.yAxis ?? 'y'

	const opts: ChartOptions<'line'> = {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		borderColor: 'rgba(255, 255, 255, 255)',
		color: '#748aad',
		font: {
			size: 20
		},
		maintainAspectRatio: false,
		responsive: false,
		scales: {
			x: {
				grid: {
					display: false
				},
				border: {
					display: false
				},
				ticks: {
					padding: 20,
					font: {
						size: 25
					}
				}
			},
			y: {
				grid: {
					color: '#273449',
					lineWidth: 3,
				},
				border: {
					display: false
				},
				ticks: {
					padding: 20,
					maxTicksLimit: 4,
					font: {
						size: 25
					}
				},
			}
		}
	}

	const pt = '#b5cdf5'

	const data: ChartData<'line'> = {
		labels: Array.from(props.data.values()).map(([key, val]) => key),
		datasets: [
			{
				label: props.yAxis,
				data: Array.from(props.data.values()).map(([key, val]) => val),
				pointBackgroundColor: pt,
				pointBorderColor: pt,
				pointRadius: 8,
				pointHoverRadius: 12,
				borderWidth: 7,
				borderColor: pt
			}
		]
	}

	return (<>

		<div className='flex justify-center'>
			<Line options={opts} data={data} width={1000 /* This is SO hacky ew */} height={550 /* Same with this */} />
		</div>
	</>)
}
