import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`


export default class Items extends Component {
  render() {
    return (
      <div>
        <p>Items !</p>
        <Query query={ALL_ITEMS_QUERY}>
          {({ data, error, loading }) => {
            console.log(data)
            console.log(error)
            console.log(loading)
            return <p>Hey i'm child of query</p>
          } }
        </Query>
      </div>
    )
  }
}
