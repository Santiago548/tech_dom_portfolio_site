import * as React from 'react'
import {
  container,
  footer  
} from './layout.module.css'

const Footer = () => {
  return (
    <div className={container}>
        <br />
        <footer class={footer}>
        <small><strong>&copy; 2021 Dominic Barajas</strong></small>
      </footer>
    </div>
  )
}
export default Footer