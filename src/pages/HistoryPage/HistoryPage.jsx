import { useEffect } from "react"

export default function HistoryPage() {
  useEffect(() => {
    document.title = "Calc.io | History"
  }, [])

  return (
    <h2>History Page</h2>
  )
}
