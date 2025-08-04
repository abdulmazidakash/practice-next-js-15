'use client'
import React, { useEffect, useState } from 'react'
import { useRootContext } from '../components/UserContext';

export default function ClientPage() {
	console.log('client component');
	const [value, setValue] = useState('');
	const rootUser = useRootContext();

	useEffect(()=>{
		setValue('Hello Next.js')
	}, []);

	console.log('Client Component', value);
  return (
	<div>
		ClientPage.....
		<h2>{rootUser.name}</h2>
	</div>
  )
}
