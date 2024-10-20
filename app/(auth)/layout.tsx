import React from 'react'

const Layout = ({children} : {children:React.ReactNode}) => {
  return (
    <main className="justify-content flex min-h-screen w-full items-center">
      {children}
    </main>
  )
}

export default Layout
