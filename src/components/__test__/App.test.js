import React from 'react'
import { mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { STOCKS_QUERY, App } from '../App'
import { wait } from 'dom-testing-library'

it('renders welcome message', async () => {
  const data = { stocks: [{ code: '0001.HK', name: '0001' }] }
  const mocks = [
    {
      request: { query: STOCKS_QUERY },
      result: { data }
    }
  ]
  const tree = mount(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  )

  await wait(() => {
    tree.update()
    return expect(tree.find('#stocks')).toHaveLength(1)
  })

  expect(tree.find('#stocks')).toMatchSnapshot()
})
