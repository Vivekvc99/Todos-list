import React from 'react'

export const Footer = ()=> {
  let footerStyle = {
    position: "absolute",
    top: "92vh",
    width: "100%"
    
  }

  return (
    <footer className=" bg-dark text-light py-3" style=
      {footerStyle} >
      <p className="text-center">
        Copyright &copy; MyTododsList.com
      </p>
    </footer>
  )
}


