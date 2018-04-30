import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const STOCKS_QUERY = gql`
  query {
    stocks(type: EQTY, first: 10, skip: 0) {
      code
      name
    }
  }
`

export const AppComponent = ({ loading, error, data }) => {
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error :(</div>
  return (
    <div>
      Stocks :
      <ul>
        {data.stocks.map(stock => (
          <li key={stock.code}>
            {stock.code} {stock.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const App = () => (
  <Query query={STOCKS_QUERY}>{result => <AppComponent {...result} />}</Query>
)
