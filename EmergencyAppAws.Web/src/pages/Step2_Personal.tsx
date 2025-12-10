import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step2_Personal() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.personal });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('personal', data);
        navigate('/step/3');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">2. About you</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-medium">First name</label>
                    <input type="text" {...register('firstName', { required: 'First name is required' })} className="w-full border border-gray-300 rounded p-2" />
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Last name</label>
                    <input type="text" {...register('lastName', { required: 'Last name is required' })} className="w-full border border-gray-300 rounded p-2" />
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Date of birth (YYYY-MM-DD)</label>
                <input type="date" {...register('dateOfBirth', { required: 'Date of birth is required' })} className="w-full border border-gray-300 rounded p-2" />
                {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Sex at birth</label>
                <select {...register('sexAtBirth', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Intersex">Intersex</option>
                </select>
                {errors.sexAtBirth && <p className="text-red-500 text-sm">{errors.sexAtBirth.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Social Insurance Number (SIN)</label>
                <input type="text" {...register('sin', { required: 'SIN is required', pattern: { value: /^\d{9}$/, message: 'SIN must be 9 digits' } })} className="w-full border border-gray-300 rounded p-2" placeholder="123456789" />
                {errors.sin && <p className="text-red-500 text-sm">{errors.sin.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Health card number</label>
                <input type="text" {...register('healthCardNumber')} className="w-full border border-gray-300 rounded p-2" />
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Status in Canada?</label>
                <select {...register('statusInCanada', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="Canadian citizen born in Canada">Canadian citizen born in Canada</option>
                    <option value="Permanent Resident">Permanent Resident</option>
                    <option value="Refugee">Refugee</option>
                    <option value="Other">Other</option>
                </select>
                {errors.statusInCanada && <p className="text-red-500 text-sm">{errors.statusInCanada.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Are you a full-time student enrolled in college or university?</label>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" value="Yes" {...register('isStudent', { required: 'This field is required' })} />
                        Yes
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" value="No" {...register('isStudent', { required: 'This field is required' })} />
                        No
                    </label>
                </div>
                {errors.isStudent && <p className="text-red-500 text-sm">{errors.isStudent.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/1')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
