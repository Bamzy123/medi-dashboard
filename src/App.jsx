import Header from './components/header/header'
import Sidebar from './components/sidebar/sidebar'
import DiagnosisHistory from './components/diagnosisHistory/diagnosisHistory'
import Profile from './components/profile/Profile'
import DiagnosticList from './components/diagnosisList/DiagnosisList'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Sidebar />
        <DiagnosisHistory />
        <Profile />
      </main>
      <div style={{ padding: '30px', background: '#f0f4f8' }}>
        <DiagnosticList />
      </div>
    </div>
  )
}

export default App
