import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'https://portfolios.now.sh/' })

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <AppComponent />
  </ApolloProvider>
)

render(ApolloApp(App), document.getElementById('root'))
registerServiceWorker()
