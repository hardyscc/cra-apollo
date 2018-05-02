import React from 'react'
import { mount } from 'enzyme'
import { createWaitForElement } from '@oskarer/enzyme-wait'
import { MockedProvider } from 'react-apollo/test-utils'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { STOCKS_QUERY, App } from '../App'

describe('App', () => {
  const request = { query: STOCKS_QUERY }
  const data = { stocks: [{ code: '0001.HK', name: '0001' }] }

  it('render', async () => {
    const mocks = [
      {
        request,
        result: { data }
      }
    ]
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    )
    const component = await createWaitForElement('#success')(wrapper)
    expect(component).toMatchSnapshot()
  })

  it('error', async () => {
    const mocks = [
      {
        request: { query: STOCKS_QUERY },
        error: new Error('Something went wrong')
      }
    ]

    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    )
    const component = await createWaitForElement('#error')(wrapper)
    expect(component).toMatchSnapshot()
  })
})
