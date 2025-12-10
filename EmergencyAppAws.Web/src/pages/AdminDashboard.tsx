import { useEffect, useState } from 'react';
import { useApplicationService } from '../hooks/useApplicationService';
import { ApplicationSummary } from '../services/ApplicationService';

export default function AdminDashboard() {
    const { getApplications, approveApplication, loading, error } = useApplicationService();
    const [applications, setApplications] = useState<ApplicationSummary[]>([]);

    const fetchApplications = async () => {
        try {
            const data = await getApplications();
            setApplications(data);
        } catch (err) {
            // Error handled by hook
        }
    };

    useEffect(() => {
        fetchApplications();
    }, [getApplications]);

    const handleApprove = async (id: number) => {
        try {
            await approveApplication(id);
            // Refresh list
            fetchApplications();
        } catch (err) {
            // Error handled by hook
        }
    };

    if (loading && applications.length === 0) return <div className="p-8 text-center">Loading...</div>;
    if (error) return <div className="p-8 text-center text-red-600">Error: {error}</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
                <button onClick={fetchApplications} className="text-blue-600 hover:underline">Refresh</button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {applications.map((app) => (
                            <tr key={app.id}>
                                <td className="py-4 px-4 whitespace-nowrap">{app.id}</td>
                                <td className="py-4 px-4 whitespace-nowrap">{app.personal?.firstName} {app.personal?.lastName}</td>
                                <td className="py-4 px-4 whitespace-nowrap">{new Date(app.submissionDate).toLocaleDateString()}</td>
                                <td className="py-4 px-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${app.status === 1 ? 'bg-green-100 text-green-800' :
                                            app.status === 2 ? 'bg-red-100 text-red-800' :
                                                'bg-yellow-100 text-yellow-800'}`}>
                                        {app.status === 1 ? 'Approved' : app.status === 2 ? 'Rejected' : 'Pending'}
                                    </span>
                                </td>
                                <td className="py-4 px-4 whitespace-nowrap">
                                    {app.status === 0 && ( // Pending
                                        <button
                                            onClick={() => handleApprove(app.id)}
                                            className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                                        >
                                            Approve
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
