import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

it('renders welcome message', () => {
  const wrapper = mount(<App />)
  expect(wrapper).toMatchSnapshot()
  const welcome = <h1 className="App-title">Welcome to React</h1>
  expect(wrapper).toContainReact(welcome)
})
