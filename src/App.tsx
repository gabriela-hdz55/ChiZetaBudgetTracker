import './App.css'
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { Dashboard } from './pages/dashboard';

function App() {

  return (
      <div className="app-container">
        <FinancialRecordsProvider>
        <Dashboard />
        </FinancialRecordsProvider>
        
      </div>
  )
}

export default App
