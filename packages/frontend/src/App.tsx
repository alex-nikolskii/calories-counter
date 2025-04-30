import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage } from './pages/AuthPage';
import { SetupPage } from './pages/SetupPage';
import { SummaryPage } from './pages/SummaryPage';
import { AddMealPage } from './pages/AddMealPage';
import { RecipesPage } from './pages/RecipesPage';
import { SettingsPage } from './pages/SettingsPage';

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/dashboard" element={<SummaryPage />} />
                <Route path="/add-meal" element={<AddMealPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </Router>
    );
}
