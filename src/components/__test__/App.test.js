import React from 'react'
import { mount } from 'enzyme'
import { createWaitForElement } from '@oskarer/enzyme-wait'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { STOCKS_QUERY, App } from '../App'

it('renders welcome message', async () => {
  const data = { stocks: [{ code: '0001.HK', name: '0001' }] }
  const mocks = [
    {
      request: { query: STOCKS_QUERY },
      result: { data }
    }
  ]
  const wrapper = mount(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  )
  const component = await createWaitForElement('#stocks')(wrapper)
  expect(component).toMatchSnapshot()
})
