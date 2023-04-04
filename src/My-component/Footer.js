import React from 'react'

export const Footer = (props) => {
  const size=props.size;
  let footerStyle={
    position: "relative",
    top: size,
    width:"100%"
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      Copyright &copy; Life-Matrix.com
    </footer>
  )
}
