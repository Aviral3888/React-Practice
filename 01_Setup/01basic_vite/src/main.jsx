import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank'
  },
  children: `<h3>Click Me to visit Google</h3>`
}

const ActualReactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Click Me to visit Google'
)

// This works when used as <MyApp /> under render()
function MyApp() {
  return (
    <>
      <div>
        <h3>Custom App</h3>
      </div>
    </>
  )
}

// This also works when used directly as AnotherElement under render()
const AnotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
  <App />
  // <MyApp />
  // AnotherElement
  // ActualReactElement 
)
