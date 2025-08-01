import React from "react"

function getError(count: number){
	return Math.floor(Math.random() * count)
}

export default function ProductLayout({children}: {children: React.ReactNode}) {
  return (
	<div>
		{children}
		<h3>Featured Products</h3>
	</div>
  )
}
