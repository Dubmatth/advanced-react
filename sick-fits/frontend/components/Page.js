import React, { Component } from 'react'
import Header from './Header'
import Meta from './Meta'
import styled from 'styled-components'

const MyButton = styled.button`
  background-color: seagreen;
  color: white;
  font-size: 100px;
`

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton>Click me !</MyButton>
        {this.props.children}
      </div>
    )
  }
}
