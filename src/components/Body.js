import React from 'react'

const Body = ({themeName}) => {
  return (
    <div className={`${themeName === "Dark" ? "bg-black text-white" : "bg-white text-black"} pt-4`}>
        <h1>This is the body</h1>
    </div>
  )
}

export default Body