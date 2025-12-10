import { createContext, useContext, useReducer, ReactNode } from 'react';

export interface ReasonInfo {
    situation: string;
    hasEnoughMoney: string; // "Yes" | "No"
    durationNeeded: string;
    canGetOtherMoney: string; // "Yes" | "No"
    otherInfo?: string;
}

export interface PersonalInfo {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    sexAtBirth: string; // Form uses sexAtBirth
    sin: string; // Form uses sin
    healthCardNumber: string;
    statusInCanada: string;
    isStudent: string; // "Yes" | "No"
}

export interface ContactInfo {
    homeAddress: string;
    city: string;
    postalCode: string;
    phoneNumber1: string;
    phoneNumber2: string;
    email: string; // Form uses email
    preferredLanguage: string;
}

export interface FamilyInfo {
    maritalStatus: string;
    childrenCount: number | string; // Input might be string initially
}

export interface FinancialInfo {
    monthlyIncome: number | string;
    assets: number | string;
    credit: number | string;
}

export interface HousingInfo {
    currentSituation: string;
    monthlyCost: number | string;
}

export interface WorkInfo {
    jobSituation: string;
}

export interface BankInfo {
    bankName: string;
    branchNumber: string;
    institutionNumber: string;
    accountNumber: string;
}

export interface ApplicationState {
    reason: Partial<ReasonInfo>;
    personal: Partial<PersonalInfo>;
    contact: Partial<ContactInfo>;
    family: Partial<FamilyInfo>;
    financial: Partial<FinancialInfo>;
    housing: Partial<HousingInfo>;
    work: Partial<WorkInfo>;
    bank: Partial<BankInfo>;
}

interface ApplicationContextType {
    state: ApplicationState;
    updateSection: <K extends keyof ApplicationState>(section: K, data: ApplicationState[K]) => void;
    resetApplication: () => void;
}

const initialState: ApplicationState = {
    reason: {},
    personal: {},
    contact: {},
    family: {},
    financial: {},
    housing: {},
    work: {},
    bank: {},
};

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

type Action =
    | { type: 'UPDATE_SECTION'; section: keyof ApplicationState; data: any }
    | { type: 'RESET' };

function applicationReducer(state: ApplicationState, action: Action): ApplicationState {
    switch (action.type) {
        case 'UPDATE_SECTION':
            return {
                ...state,
                [action.section]: { ...state[action.section], ...action.data },
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export function ApplicationProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(applicationReducer, initialState);

    const updateSection = <K extends keyof ApplicationState>(section: K, data: ApplicationState[K]) => {
        dispatch({ type: 'UPDATE_SECTION', section, data });
    };

    const resetApplication = () => {
        dispatch({ type: 'RESET' });
    };

    return (
        <ApplicationContext.Provider value={{ state, updateSection, resetApplication }}>
            {children}
        </ApplicationContext.Provider>
    );
}

export function useApplication() {
    const context = useContext(ApplicationContext);
    if (context === undefined) {
        throw new Error('useApplication must be used within an ApplicationProvider');
    }
    return context;
}
