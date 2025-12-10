import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step7_Work() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.work });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('work', data);
        navigate('/step/8');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">7. Your work experience</h2>

            <div className="space-y-2">
                <label className="block font-medium">What best describes your job situation in the past 6 months?</label>
                <select {...register('jobSituation', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Employed full-time">Employed full-time</option>
                    <option value="Employed part-time">Employed part-time</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="Student">Student</option>
                    <option value="Retired">Retired</option>
                    <option value="Other">Other</option>
                </select>
                {errors.jobSituation && <p className="text-red-500 text-sm">{errors.jobSituation.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/6')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
