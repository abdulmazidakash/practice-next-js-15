import React from 'react'

export default function layout({lineChart, barChart, heatmap, login}: {
	lineChart: React.ReactNode,
	barChart: React.ReactNode,
	heatmap: React.ReactNode,
	login: React.ReactNode
}) {

	const isUserLogin = false;
  return (
	<div>
		{isUserLogin ?
		<>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-4 shadow p-4 border border-gray-300'>
		<div className='border border-gray-300 p-4 rounded-lg'>
			{lineChart}
		</div>
		<div className='border border-gray-300 p-4 rounded-lg'>
			{barChart}
		</div>
		</div>
		<div className='grid grid-cols-1 md:grid-cols-1 shadow p-4 border border-gray-300 gap-4 mt-4'>
			{heatmap}
		</div>
		</>
		: 
		<div>
			{login}
		</div>
		}
	</div>
  )
}
