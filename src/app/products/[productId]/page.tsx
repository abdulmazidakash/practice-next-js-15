'use client'
import { useRouter } from 'next/navigation';
// import { Metadata } from 'next';
import React, { use } from 'react'
type Props = {params: Promise<{productId: string}>}

// export async function generateMetadata({params}: Props):Promise<Metadata>{
// 	const productId = (await params).productId;

// 	return {
// 		title: `Product ${productId}`,
// 		description: `product description`
// 	}
// }
export default function ProductDetails({params}: Props) {
	const productId = use(params).productId;
	const router = useRouter()

	const handleBuyNow  = ()=>{
		router.push('/')
	}

  return (
	<div>
		<h2>ProductDetails {productId} </h2>
		<button onClick={handleBuyNow}>Buy Now</button>
	</div>
  )
}
