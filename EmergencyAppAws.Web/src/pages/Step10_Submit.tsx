import { Link } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';
import { useEffect } from 'react';

export default function Step10_Submit() {
    const { resetApplication } = useApplication();

    useEffect(() => {
        // Reset the form state when reaching success page
        resetApplication();
    }, [resetApplication]);

    return (
        <div className="text-center space-y-6 py-12">
            <div className="flex justify-center">
                <div className="bg-green-100 p-4 rounded-full">
                    <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Application Submitted!</h2>
            <p className="text-lg text-gray-600">Thank you for submitting your application for Emergency Assistance.</p>
            <p className="text-gray-500">Your application ID has been recorded.</p>

            <div className="pt-8">
                <Link to="/" className="text-blue-600 hover:underline font-medium">Return to Home</Link>
            </div>
        </div>
    );
}
