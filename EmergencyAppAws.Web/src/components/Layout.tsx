import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
    const location = useLocation();
    const isStep = location.pathname.startsWith('/step');
    const stepNumber = isStep ? parseInt(location.pathname.split('/')[2]) : 0;
    const totalSteps = 9; // Step 10 is success, so 9 input steps

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            <header className="bg-white border-b border-gray-200 py-4">
                <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Ontario.svg" alt="Ontario Logo" className="h-8 w-12 object-cover border border-gray-200" />
                        <h1 className="text-xl font-bold text-gray-900">Emergency Assistance</h1>
                    </div>
                    {isStep && stepNumber <= totalSteps && (
                        <div className="text-sm text-gray-500">
                            Step {stepNumber} of {totalSteps}
                        </div>
                    )}
                </div>
            </header>

            <main className="flex-grow py-8 px-4">
                <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                    <Outlet />
                </div>
            </main>

            <footer className="bg-gray-100 py-6 border-t border-gray-200 mt-auto">
                <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Government of Ontario
                </div>
            </footer>
        </div>
    );
}
