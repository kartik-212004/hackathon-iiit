import Navbar from "./navbar"
import SurveillanceFeed from "./SurveillanceFeed"
import ReportForm from "./ReportForm"

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SurveillanceFeed />
        <ReportForm />
      </div>
    </div>
  )
}

export default App
