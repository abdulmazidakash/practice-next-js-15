import { 
	// notFound, 
	redirect 
} from 'next/navigation';
import React from 'react'

export default async function ReviewDetails({params}: {params: Promise<{productId: string, reviewId: string}>}) {
	const {productId, reviewId} = await params;

	if(reviewId > '50'){
		// notFound()
		redirect('/')
	}

	if(reviewId == '40'){
		throw new Error('Error in ReviewDetails')
	}
  return (
	<div>Product Id: {productId} | Review Id: {reviewId}</div>
  )
}
