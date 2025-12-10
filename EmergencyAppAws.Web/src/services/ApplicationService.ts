import { ApplicationState } from '../contexts/ApplicationContext';

const API_BASE_URL = 'http://localhost:5248/api';

export interface ApplicationSummary {
    id: number;
    submissionDate: string;
    status: number; // 0: Pending, 1: Approved, 2: Rejected
    personal: {
        firstName: string;
        lastName: string;
    };
}

export const ApplicationService = {
    async submitApplication(applicationData: ApplicationState): Promise<void> {
        // Transform frontend state to backend expected types
        const payload = {
            reason: {
                ...applicationData.reason,
                hasEnoughMoney: applicationData.reason.hasEnoughMoney === 'Yes',
                canGetOtherMoney: applicationData.reason.canGetOtherMoney === 'Yes',
            },
            personal: {
                firstName: applicationData.personal.firstName,
                lastName: applicationData.personal.lastName,
                dateOfBirth: applicationData.personal.dateOfBirth,
                sexAtBirth: applicationData.personal.sexAtBirth,
                sin: applicationData.personal.sin,
                healthCardNumber: applicationData.personal.healthCardNumber,
                statusInCanada: applicationData.personal.statusInCanada,
                isStudent: applicationData.personal.isStudent === 'Yes',
            },
            contact: {
                homeAddress: applicationData.contact.homeAddress,
                city: applicationData.contact.city,
                postalCode: applicationData.contact.postalCode,
                phoneNumber1: applicationData.contact.phoneNumber1,
                phoneNumber2: applicationData.contact.phoneNumber2,
                email: applicationData.contact.email,
                preferredLanguage: applicationData.contact.preferredLanguage,
            },
            family: {
                maritalStatus: applicationData.family.maritalStatus,
                childrenCount: Number(applicationData.family.childrenCount) || 0,
            },
            financial: {
                monthlyIncome: Number(applicationData.financial.monthlyIncome) || 0,
                assets: Number(applicationData.financial.assets) || 0,
                credit: Number(applicationData.financial.credit) || 0,
            },
            housing: {
                currentSituation: applicationData.housing.currentSituation,
                monthlyCost: Number(applicationData.housing.monthlyCost) || 0,
            },
            work: applicationData.work,
            bank: applicationData.bank
        };

        const response = await fetch(`${API_BASE_URL}/applications`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to submit application: ${errorText}`);
        }
    },

    async getApplications(): Promise<ApplicationSummary[]> {
        const response = await fetch(`${API_BASE_URL}/applications`);

        if (!response.ok) {
            throw new Error('Failed to fetch applications');
        }

        return await response.json();
    },

    async approveApplication(id: number): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/applications/${id}/approve`, {
            method: 'PUT',
        });

        if (!response.ok) {
            throw new Error('Failed to approve application');
        }
    }
};
