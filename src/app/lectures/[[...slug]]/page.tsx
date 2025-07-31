import React from 'react'

export default async function Lectures({params}: {params: Promise<{slug: string[]}>}) {
	const {slug} = await params;
	console.log('slug name:--->',slug);

	if(slug?.length == 2){
		return <h2>Lecture 1</h2>
	}

	if(slug?.length == 3){
		return <h2>Lecture 3</h2>
	}


  return (
	<div>Lectures</div>
  )
}
