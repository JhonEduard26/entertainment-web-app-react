import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"
import "./styles/styles.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
)
