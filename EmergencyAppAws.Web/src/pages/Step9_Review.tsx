import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';
import { useApplicationService } from '../hooks/useApplicationService';

export default function Step9_Review() {
    const { state } = useApplication();
    const navigate = useNavigate();
    const { submitApplication, loading, error } = useApplicationService();

    const handleSubmit = async () => {
        if (!window.confirm('Are you sure you want to submit your application?')) {
            return;
        }

        try {
            await submitApplication(state);
            navigate('/step/10');
        } catch (err) {
            // Error is handled by the hook and displayed below
        }
    };

    const Section = ({ title, data }: { title: string; data: Record<string, any> }) => (
        <div className="border-b border-gray-200 py-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium">{title}</h3>
                <button className="text-blue-600 text-sm hover:underline">Edit</button>
            </div>
            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                {Object.entries(data || {}).map(([key, value]) => (
                    <div key={key} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{String(value)}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">9. Review your application</h2>

            <div className="space-y-4">
                <Section title="1. Why you are applying" data={state.reason} />
                <Section title="2. About you" data={state.personal} />
                <Section title="3. Contact information" data={state.contact} />
                <Section title="4. Your family" data={state.family} />
                <Section title="5. Your finances" data={state.financial} />
                <Section title="6. Your housing situation" data={state.housing} />
                <Section title="7. Your work experience" data={state.work} />
                <Section title="8. Your bank details" data={state.bank} />
            </div>

            {error && <div className="bg-red-50 text-red-600 p-4 rounded">{error}</div>}

            <div className="pt-6 flex gap-4">
                <button type="button" onClick={() => navigate('/step/8')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                    {loading ? 'Submitting...' : 'Submit Application'}
                </button>
            </div>
        </div>
    );
}
