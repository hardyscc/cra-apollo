import React from 'react'
import renderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { App, AppComponent, STOCKS_QUERY } from '../App'

const data = {
  stocks: [
    { code: '0001.HK', name: '長和' },
    { code: '0002.HK', name: '中電控股' }
  ]
}
const mocks = [
  {
    request: { query: STOCKS_QUERY },
    result: { data }
  }
]

describe('App', () => {
  it('render', () => {
    const output = renderer.create(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    )
    expect(output).toMatchSnapshot()
  })
})

describe('AppComponent', () => {
  it('handles a loading state', () => {
    const output = renderer.create(<AppComponent loading />)
    expect(output).toMatchSnapshot()
  })
  it('handles an error state', () => {
    const output = renderer.create(<AppComponent error />)
    expect(output).toMatchSnapshot()
  })
  it('returns markup for array of stocks', () => {
    const output = renderer.create(<AppComponent data={data} />)
    expect(output).toMatchSnapshot()
  })
})
