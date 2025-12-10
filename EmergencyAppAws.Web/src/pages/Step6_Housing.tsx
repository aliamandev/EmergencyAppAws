import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step6_Housing() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.housing });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('housing', data);
        navigate('/step/7');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">6. Your housing situation</h2>

            <div className="space-y-2">
                <label className="block font-medium">What is your current housing situation?</label>
                <select {...register('currentSituation', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="I pay rent, my meals are not included">I pay rent, my meals are not included</option>
                    <option value="I pay rent, my meals are included">I pay rent, my meals are included</option>
                    <option value="I own my home">I own my home</option>
                    <option value="I live with family/friends">I live with family/friends</option>
                    <option value="Homeless">Homeless</option>
                    <option value="Other">Other</option>
                </select>
                {errors.currentSituation && <p className="text-red-500 text-sm">{errors.currentSituation.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">How much do you pay for housing every month?</label>
                <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input type="number" step="0.01" {...register('monthlyCost', { required: 'This field is required', min: { value: 0, message: 'Cannot be negative' } })} className="w-full border border-gray-300 rounded p-2 pl-8" placeholder="0.00" />
                </div>
                {errors.monthlyCost && <p className="text-red-500 text-sm">{errors.monthlyCost.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/5')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
