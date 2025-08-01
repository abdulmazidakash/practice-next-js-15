import Link from 'next/link'
import React from 'react'

export default function Heatmap() {
  return (
	<div>Heatmap <Link className='bg-green-600 p-4 text-white' href={'/chartss/pie-chart'}>Pie Chart</Link> </div>
  )
}
