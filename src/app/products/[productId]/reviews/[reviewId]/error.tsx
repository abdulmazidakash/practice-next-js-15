'use client'

export default function ReviewError({error, reset}: {error: Error, reset: ()=> void}) {
  return (
	<div>
		<h2>Error: {error.message}</h2>
		<button onClick={reset}>Refresh</button>

	</div>
  )
}
