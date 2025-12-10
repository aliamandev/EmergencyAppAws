import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step4_Family() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.family });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('family', data);
        navigate('/step/5');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">4. Your family</h2>

            <div className="space-y-2">
                <label className="block font-medium">What is your marital status?</label>
                <select {...register('maritalStatus', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Common-law">Common-law</option>
                    <option value="Separated">Separated</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                </select>
                {errors.maritalStatus && <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">How many children are living with you?</label>
                <input type="number" {...register('childrenCount', { required: 'This field is required', min: { value: 0, message: 'Cannot be negative' } })} className="w-full border border-gray-300 rounded p-2" />
                {errors.childrenCount && <p className="text-red-500 text-sm">{errors.childrenCount.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/3')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
