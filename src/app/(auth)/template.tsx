'use client';

import Link from 'next/link'
import React, { useState } from 'react'

const navigations = [
	{title: 'Login', href: '/login'},
	{title: 'Register', href: '/register'},
]
export default function AuthLayout({children}: {children: React.ReactNode}) {
	const [inputVal, setInputVal] = useState('');

  return (
	<div>
		<div className='p-3 bg-orange-800'>
			{navigations.map(nav => {
				return ( 
					<Link className='mr-4 font-semibold' key={nav.title} href={nav.href}>{nav.title}</Link>
				)
			})}
		</div>
		<div className=''>
			<input className='border border-gray-300 p-4 rounded-lg' placeholder='write text' onChange={(e)=> setInputVal(e.target.value)} value={inputVal} type="text" name="" id="" />
		</div>
		<div>
			{children}
		</div>
	</div>
  )
}
