import Link from "next/link"

export default function ProductsPage() {
	const productId = 4;
  return (
	<div>
		<ul>
			<Link href={`/products/1`}><li>page-1</li></Link>
			<Link href={`/products/2`}><li>page-2</li></Link>
			<Link href={`/products/3`}><li>page-3</li></Link>
			<Link href={`/products/${productId}`}><li>page-{productId}</li></Link>
		</ul>
	</div>
  )
}
