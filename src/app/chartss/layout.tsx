import React from 'react'

export default function layout({lineChart, barChart, heatmap}: {
	lineChart: React.ReactNode,
	barChart: React.ReactNode,
	heatmap: React.ReactNode
}) {
  return (
	<div>
		<div>
			{lineChart}
		</div>
		<div>
			{barChart}
		</div>
		<div>
			{heatmap}
		</div>
	</div>
  )
}
