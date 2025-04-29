import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Layout } from "@/widgets/Layout/ui"
import PostsManagerPage from "@/pages/PostsManagerPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsManagerPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
