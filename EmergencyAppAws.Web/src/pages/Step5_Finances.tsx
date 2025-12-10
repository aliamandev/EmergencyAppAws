import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step5_Finances() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.financial });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('financial', data);
        navigate('/step/6');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">5. Your finances</h2>

            <div className="space-y-2">
                <label className="block font-medium">How much money do you expect to get this month, from all sources, including from a job, a pension, the government, etc.?</label>
                <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input type="number" step="0.01" {...register('monthlyIncome', { required: 'This field is required', min: { value: 0, message: 'Cannot be negative' } })} className="w-full border border-gray-300 rounded p-2 pl-8" placeholder="0.00" />
                </div>
                {errors.monthlyIncome && <p className="text-red-500 text-sm">{errors.monthlyIncome.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">How much money do you have in assets that you can get to quickly?</label>
                <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input type="number" step="0.01" {...register('assets', { required: 'This field is required', min: { value: 0, message: 'Cannot be negative' } })} className="w-full border border-gray-300 rounded p-2 pl-8" placeholder="0.00" />
                </div>
                {errors.assets && <p className="text-red-500 text-sm">{errors.assets.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">How much money do you have in credit that you can get to quickly?</label>
                <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input type="number" step="0.01" {...register('credit', { required: 'This field is required', min: { value: 0, message: 'Cannot be negative' } })} className="w-full border border-gray-300 rounded p-2 pl-8" placeholder="0.00" />
                </div>
                {errors.credit && <p className="text-red-500 text-sm">{errors.credit.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/4')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
