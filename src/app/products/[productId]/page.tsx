// 'use client'
// import { useRouter } from 'next/navigation';
// import { Metadata } from 'next';
// import React, { use } from 'react'
export const dynamicParams = false;
type Props = {params: Promise<{productId: string}>}

// export async function generateMetadata({params}: Props):Promise<Metadata>{
// 	const productId = (await params).productId;

// 	return {
// 		title: `Product ${productId}`,
// 		description: `product description`
// 	}
// }
export async function generateStaticParams(){
	return [
		{productId: '1'},
		{productId: '2'},
		{productId: '3'},
	]
}
export default async function ProductDetails({params}: Props) {
	const {productId} = await params;
	// const productId = use(params).productId;
	// const router = useRouter()

	// const handleBuyNow  = ()=>{
	// 	router.push('/')
	// }

  return (
	<div>
		<h2>Time: {new Date().toLocaleTimeString()}</h2>
		<h2>ProductDetails {productId} </h2>
		{/* <button onClick={handleBuyNow}>Buy Now</button> */}
	</div>
  )
}
