import { useState, useCallback } from 'react';
import { ApplicationService, ApplicationSummary } from '../services/ApplicationService';
import { ApplicationState } from '../contexts/ApplicationContext';

export function useApplicationService() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitApplication = useCallback(async (data: ApplicationState) => {
        setLoading(true);
        setError(null);
        try {
            await ApplicationService.submitApplication(data);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const getApplications = useCallback(async (): Promise<ApplicationSummary[]> => {
        setLoading(true);
        setError(null);
        try {
            const data = await ApplicationService.getApplications();
            return data;
        } catch (err: any) {
            setError(err.message || 'Failed to fetch applications');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const approveApplication = useCallback(async (id: number) => {
        setLoading(true);
        setError(null);
        try {
            await ApplicationService.approveApplication(id);
        } catch (err: any) {
            setError(err.message || 'Failed to approve application');
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        submitApplication,
        getApplications,
        approveApplication
    };
}
