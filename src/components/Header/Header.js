import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return <> 
    <h1 className="header" data-testid='header-1'>{title}</h1>
<button> test</button>
<h2 title='Test Header' className='header'> Test </h2>

    </>
}