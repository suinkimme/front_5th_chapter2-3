import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { worker } from "@/shared/api/msw"
import { QueryProvider } from "./providers/QueryProvider.tsx"

async function main() {
  await worker.start({
    serviceWorker: {
      url: "/front_5th_chapter2-3/mockServiceWorker.js",
    },
  })

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    </StrictMode>,
  )
}

main()
