'use client'

import React, { createContext, useContext } from 'react'

type User ={
	name: string;
	email: string;
	age: number;
}

const userData: User = {
	name: 'John Doe',
	email: 'abc@gmail.com',
	age: 30,
}

const RootContext = createContext<User>(userData);

export const RootProvider = ({children}: {children: React.ReactNode}) => {
	return (
		<RootContext value={userData}>
			{children}
		</RootContext>
	)
}

export const useRootContext = () => useContext(RootContext);
