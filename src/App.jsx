import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import DiagnosisHistory from './components/diagnosisHistory/diagnosisHistory'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Sidebar />
        <DiagnosisHistory />
      </main>
    </div>
  )
}

export default App
