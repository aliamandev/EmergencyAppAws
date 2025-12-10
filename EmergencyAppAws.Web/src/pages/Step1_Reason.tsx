import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step1_Reason() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.reason });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('reason', data);
        navigate('/step/2');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">1. Why you are applying</h2>

            <div className="space-y-2">
                <label className="block font-medium">What best describes your situation?</label>
                <select {...register('situation', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Evicted from home">Evicted from home</option>
                    <option value="Fleeing abuse">Fleeing abuse</option>
                    <option value="Refugee claimant">Refugee claimant</option>
                    <option value="Other">Other</option>
                </select>
                {errors.situation && <p className="text-red-500 text-sm">{errors.situation.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Do you have enough money to pay for things like food and a place to live?</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" value="Yes" {...register('hasEnoughMoney', { required: 'This field is required' })} />
                        Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" value="No" {...register('hasEnoughMoney', { required: 'This field is required' })} />
                        No
                    </label>
                </div>
                {errors.hasEnoughMoney && <p className="text-red-500 text-sm">{errors.hasEnoughMoney.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">How long will you need financial support?</label>
                <select {...register('durationNeeded', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Less than 48 days">I just need money for a short time (less than 48 days)</option>
                    <option value="More than 48 days">I need money for a longer time</option>
                </select>
                {errors.durationNeeded && <p className="text-red-500 text-sm">{errors.durationNeeded.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Are you able to get money from any other sources, including savings, investments like Guaranteed Investment Certificates (GICs) or other sources like a line of credit?</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" value="Yes" {...register('canGetOtherMoney', { required: 'This field is required' })} />
                        Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" value="No" {...register('canGetOtherMoney', { required: 'This field is required' })} />
                        No
                    </label>
                </div>
                {errors.canGetOtherMoney && <p className="text-red-500 text-sm">{errors.canGetOtherMoney.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Is there anything else you think we should know about your situation? (Max 400 characters)</label>
                <textarea
                    {...register('otherInfo', { maxLength: { value: 400, message: 'Maximum 400 characters allowed' } })}
                    className="w-full border border-gray-300 rounded p-2 h-24"
                    placeholder="Optional"
                    maxLength={400}
                ></textarea>
                {errors.otherInfo && <p className="text-red-500 text-sm">{errors.otherInfo.message}</p>}
            </div>

            <div className="pt-4">
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
