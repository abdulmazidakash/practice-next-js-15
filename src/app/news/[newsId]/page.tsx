'use client'

import { use } from 'react'

export default function News({params, searchParams}: {
	params: Promise<{newsId: string}>, 
	searchParams: Promise<{cat: string, type: string}>
}) {

	const {newsId} = use(params);
	const {cat, type} = use(searchParams)
  return (
	<div>News Id: {newsId} {cat} {type}</div>
  )
}
