import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ApplicationProvider } from './contexts/ApplicationContext';
import Layout from './components/layout/Layout';
import Step1_Reason from './pages/Step1_Reason';
import Step2_Personal from './pages/Step2_Personal';
import Step3_Contact from './pages/Step3_Contact';
import Step4_Family from './pages/Step4_Family';
import Step5_Finances from './pages/Step5_Finances';
import Step6_Housing from './pages/Step6_Housing';
import Step7_Work from './pages/Step7_Work';
import Step8_Bank from './pages/Step8_Bank';
import Step9_Review from './pages/Step9_Review';
import Step10_Submit from './pages/Step10_Submit';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <ApplicationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/step/1" replace />} />
            <Route path="step/1" element={<Step1_Reason />} />
            <Route path="step/2" element={<Step2_Personal />} />
            <Route path="step/3" element={<Step3_Contact />} />
            <Route path="step/4" element={<Step4_Family />} />
            <Route path="step/5" element={<Step5_Finances />} />
            <Route path="step/6" element={<Step6_Housing />} />
            <Route path="step/7" element={<Step7_Work />} />
            <Route path="step/8" element={<Step8_Bank />} />
            <Route path="step/9" element={<Step9_Review />} />
            <Route path="step/10" element={<Step10_Submit />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApplicationProvider>
  );
}

export default App;
