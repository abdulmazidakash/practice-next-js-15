import { Metadata } from 'next';
import React from 'react'
type Props = {params: Promise<{productId: string}>}

export async function generateMetadata({params}: Props):Promise<Metadata>{
	const productId = (await params).productId;

	return {
		title: `Product ${productId}`,
		description: `product description`
	}
}
export default async function ProductDetails({params}: Props) {
	const productId = (await params).productId;

  return (
	<div>ProductDetails {productId} </div>
  )
}
