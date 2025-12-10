import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step8_Bank() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.bank });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('bank', data);
        navigate('/step/9');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">8. Your bank details</h2>

            <div className="space-y-2">
                <label className="block font-medium">Bank name</label>
                <input type="text" {...register('bankName', { required: 'Bank name is required' })} className="w-full border border-gray-300 rounded p-2" />
                {errors.bankName && <p className="text-red-500 text-sm">{errors.bankName.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="block font-medium">Branch/transit number</label>
                    <input type="text" {...register('branchNumber', { required: 'Branch number is required', pattern: { value: /^\d{5}$/, message: 'Must be 5 digits' } })} className="w-full border border-gray-300 rounded p-2" placeholder="12345" />
                    {errors.branchNumber && <p className="text-red-500 text-sm">{errors.branchNumber.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Institution number</label>
                    <input type="text" {...register('institutionNumber', { required: 'Institution number is required', pattern: { value: /^\d{3}$/, message: 'Must be 3 digits' } })} className="w-full border border-gray-300 rounded p-2" placeholder="001" />
                    {errors.institutionNumber && <p className="text-red-500 text-sm">{errors.institutionNumber.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Account number</label>
                    <input type="text" {...register('accountNumber', { required: 'Account number is required', pattern: { value: /^\d{7,12}$/, message: 'Invalid account number' } })} className="w-full border border-gray-300 rounded p-2" />
                    {errors.accountNumber && <p className="text-red-500 text-sm">{errors.accountNumber.message}</p>}
                </div>
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/7')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
