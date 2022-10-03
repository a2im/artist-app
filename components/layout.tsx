import Meta from './meta'
import React, { useState } from 'react';


export default function Layout({ children }) {

return (
  <>
  <main className="pt-20 min-h-screen px-4">
  <Meta />
    {children}
    </main>
  </>
)
  
}