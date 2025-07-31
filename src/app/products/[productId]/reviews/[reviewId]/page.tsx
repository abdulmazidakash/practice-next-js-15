import { notFound } from 'next/navigation';
import React from 'react'

export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string}>}) {
	const {productId, reviewId} = await params;

	if(reviewId > '50'){
		notFound()
	}
  return (
	<div>Product Id: {productId} | Review Id: {reviewId}</div>
  )
}
