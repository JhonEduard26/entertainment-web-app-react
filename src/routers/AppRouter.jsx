import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "../App"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/series" element='' />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
