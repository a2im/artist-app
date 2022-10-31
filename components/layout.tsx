import Meta from './meta'
import React, { useState } from 'react';


export default function Layout({ children }) {

return (
  <>
  <main className="bg-black pt-10 min-h-screen">
  <Meta />
    {children}
    </main>
  </>
)
  
}