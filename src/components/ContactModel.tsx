import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import clsx from 'clsx';
import { useAppContext } from '../context/useAppContext';
import { useTranslation } from 'react-i18next';

interface ContactFormData {
    name: string;
    email: string;
    messageType: string;
    message: string;
}

interface ContactModelProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModel: React.FC<ContactModelProps> = ({ isOpen, onClose }) => {
    const { theme } = useAppContext();
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // EmailJS configuration - you'll need to replace these with your actual IDs
            const serviceId = 'service_ykv1e38';
            const templateId = 'template_fefw2pf';
            const publicKey = 'p5hvrTJHMKlHpbRVr';

            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                message_type: data.messageType,
                message: data.message,
                to_email: 'mohmmadbaqiro31@gmail.com',
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);

            setSubmitStatus('success');
            reset();
            setTimeout(() => {
                onClose();
                setSubmitStatus('idle');
            }, 2000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-30">
            <div
                className={clsx(
                    "relative w-full max-w-md mx-4 p-6 rounded-lg shadow-lg",
                    theme === "dark" ? "bg-[#161513] text-white" : "bg-white text-[#161513]"
                )}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl hover:opacity-70 cursor-pointer"
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-4 text-center">
                    {t('contact_form.title')}
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('contact_form.name')}
                        </label>
                        <input
                            {...register('name', { required: true })}
                            type="text"
                            className={clsx(
                                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                theme === "dark"
                                    ? "bg-[#2a2a2a] border-gray-600 text-white focus:ring-[#FF8660]"
                                    : "bg-white border-gray-300 text-black focus:ring-[#9A33FF]"
                            )}
                        />
                        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('contact_form.email')}
                        </label>
                        <input
                            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                            type="email"
                            className={clsx(
                                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                theme === "dark"
                                    ? "bg-[#2a2a2a] border-gray-600 text-white focus:ring-[#FF8660]"
                                    : "bg-white border-gray-300 text-black focus:ring-[#9A33FF]"
                            )}
                        />
                        {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('contact_form.message_type')}
                        </label>
                        <select
                            {...register('messageType', { required: true })}
                            className={clsx(
                                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                theme === "dark"
                                    ? "bg-[#2a2a2a] border-gray-600 text-white focus:ring-[#FF8660]"
                                    : "bg-white border-gray-300 text-black focus:ring-[#9A33FF]"
                            )}
                        >
                            <option value="">{t('contact_form.other')}</option>
                            <option value="job_request">{t('contact_form.job_request')}</option>
                            <option value="question">{t('contact_form.question')}</option>
                            <option value="collaboration">{t('contact_form.collaboration')}</option>
                        </select>
                        {errors.messageType && <span className="text-red-500 text-sm">Please select a message type</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            {t('contact_form.message')}
                        </label>
                        <textarea
                            {...register('message', { required: true })}
                            rows={4}
                            className={clsx(
                                "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2",
                                theme === "dark"
                                    ? "bg-[#2a2a2a] border-gray-600 text-white focus:ring-[#FF8660]"
                                    : "bg-white border-gray-300 text-black focus:ring-[#9A33FF]"
                            )}
                        />
                        {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
                    </div>

                    <div className="flex justify-between px-4 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className={clsx(
                                "px-4 py-2 rounded-md transition duration-200 cursor-pointer",
                                theme === "dark"
                                    ? "bg-gray-600 text-white hover:bg-gray-400"
                                    : "bg-gray-300 text-black hover:bg-gray-600"
                            )}
                        >
                            {t('contact_form.close')}
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={clsx(
                                "px-4 py-2 rounded-md transition duration-200 cursor-pointer",
                                "bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-white",
                                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
                            )}
                        >
                            {isSubmitting ? t('contact_form.sending') : t('contact_form.send')}
                        </button>
                    </div>
                </form>

                {submitStatus === 'success' && (
                    <div className="mt-4 text-green-500 text-center">
                        {t('contact_form.success')}
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="mt-4 text-red-500 text-center">
                        {t('contact_form.error')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModel;
