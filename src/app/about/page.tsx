import { Metadata } from 'next'
import { cookies } from 'next/headers'
import React from 'react'

export const metadata:Metadata = {
  title: 'About',
  description: 'About description'
}
export default async function AboutPage() {
  const cookieData = await cookies();
  console.log(cookieData.get('abcd'));
  return (
	<div>
    About page { new Date().toLocaleTimeString()}
  </div>
  )
}
