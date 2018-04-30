import React from 'react'
import { render } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { STOCKS_QUERY, App } from '../App'

it('renders welcome message', () => {
  const data = { stocks: [{ code: '0001.HK', name: '0001' }] }
  const mocks = [
    {
      request: { query: STOCKS_QUERY },
      result: { data }
    }
  ]
  const tree = render(
    <MockedProvider mocks={mocks}>
      <App data={data} />
    </MockedProvider>
  )
  expect(tree).toMatchSnapshot()
})
