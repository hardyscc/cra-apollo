import React from 'react'
import renderer from 'react-test-renderer'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import App, { GET_STOCKS } from '../App'

it('renders welcome message', () => {
  const mocks = [
    {
      request: { query: GET_STOCKS },
      result: { data: { stocks: [{ code: '0001.HK', name: '0001' }] } }
    }
  ]
  const tree = renderer.create(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  )

  expect(tree).toMatchSnapshot()
})
