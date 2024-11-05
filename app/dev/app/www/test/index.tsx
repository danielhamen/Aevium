import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom'
import Page, { GETParameters, HTTPResponse } from '@Aevium/Structs/Page/Page'

class App extends Page {
  GET(props: GETParameters): HTTPResponse {
    return {
      body: <div>Test!</div>,
    }
  }
}

export default App
