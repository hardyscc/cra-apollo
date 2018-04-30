import React from 'react'
import { render, Simulate, wait } from 'react-testing-library'
import 'dom-testing-library/extend-expect'
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
  it('render', async () => {
    const { container, getByText } = render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    )
    await wait(() => getByText('Stocks'))
    expect(container).toMatchSnapshot()
  })
})

describe('AppComponent', () => {
  it('handles a loading state', () => {
    const { container } = render(<AppComponent loading />)
    expect(container).toMatchSnapshot()
  })
  it('handles an error state', () => {
    const { container } = render(<AppComponent error />)
    expect(container).toMatchSnapshot()
  })
})
