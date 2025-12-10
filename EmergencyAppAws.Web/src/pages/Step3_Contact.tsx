import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useApplication } from '../contexts/ApplicationContext';

export default function Step3_Contact() {
    const { state, updateSection } = useApplication();
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: state.contact });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateSection('contact', data);
        navigate('/step/4');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">3. Contact information</h2>

            <div className="space-y-2">
                <label className="block font-medium">Home address</label>
                <input type="text" {...register('homeAddress', { required: 'Address is required' })} className="w-full border border-gray-300 rounded p-2" placeholder="123 Main St" />
                {errors.homeAddress && <p className="text-red-500 text-sm">{errors.homeAddress.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-medium">City</label>
                    <input type="text" {...register('city', { required: 'City is required' })} className="w-full border border-gray-300 rounded p-2" />
                    {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Postal Code</label>
                    <input type="text" {...register('postalCode', { required: 'Postal Code is required', pattern: { value: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, message: 'Invalid Postal Code' } })} className="w-full border border-gray-300 rounded p-2" placeholder="M1R 2V2" />
                    {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="block font-medium">Phone number 1</label>
                    <input type="tel" {...register('phoneNumber1', { required: 'Phone number is required' })} className="w-full border border-gray-300 rounded p-2" />
                    {errors.phoneNumber1 && <p className="text-red-500 text-sm">{errors.phoneNumber1.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="block font-medium">Phone number 2 (Optional)</label>
                    <input type="tel" {...register('phoneNumber2')} className="w-full border border-gray-300 rounded p-2" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="block font-medium">Email address</label>
                <input type="email" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} className="w-full border border-gray-300 rounded p-2" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <label className="block font-medium">What language should we use to contact you?</label>
                <select {...register('preferredLanguage', { required: 'This field is required' })} className="w-full border border-gray-300 rounded p-2">
                    <option value="">Select an option</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                </select>
                {errors.preferredLanguage && <p className="text-red-500 text-sm">{errors.preferredLanguage.message}</p>}
            </div>

            <div className="pt-4 flex gap-4">
                <button type="button" onClick={() => navigate('/step/2')} className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">Back</button>
                <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Next</button>
            </div>
        </form>
    );
}
