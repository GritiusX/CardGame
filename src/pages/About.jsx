import React from 'react'
import Test from '../components/test/Test'
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <div>
     <Test/>
     <Link to="/">ir a home</Link>
    </div>
  )
}
