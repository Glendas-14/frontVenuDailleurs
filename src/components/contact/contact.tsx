import emailjs from "@emailjs/browser";
import { useState, useEffect } from 'react'
import BigTitle from '../Title/bigTitle';

export const ContactSection = () => {

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const [userName, setUserName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        if (!userName || !emailAddress || !message) {
            setIsFormValid(false);
            setErrorMessage('Tous les champs sont requis.');
        } else if (!validateEmail(emailAddress)) {
            setIsFormValid(false);
            setErrorMessage('Veuillez entrer une adresse e-mail valide.');
        } else {
            setIsFormValid(true);
            setErrorMessage('');
        }
    };

    useEffect(() => {
        validateForm();}, [userName, emailAddress, message]);
    
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailAddress(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid) {
            return;
        }
        emailjs.sendForm(serviceId, templateId, e.target as HTMLFormElement, publicKey)
            .then(
                (result) => {
                    console.log('Message envoyé avec succès', result.text);
                    setShowPopup(true);
                },
                (error) => {
                    console.error('Erreur lors de l\'envoi du message', error.text);
                }
            );

        setUserName('');
        setEmailAddress('');
        setMessage('');
    };

    return (
        <div id="writeUs" className="bg-mixedGradient w-full h-auto flex flex-col px-4 sm:px-6 pt-8 sm:pt-12">
            <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8 md:mb-12">
                <BigTitle id="contact">Contactez nous</BigTitle>
            </div>
            <div id="content" className="w-full h-auto flex flex-col lg:flex-row gap-10 sm:gap-15 md:gap-20 items-center justify-center">
                <form className="w-full lg:w-1/2 h-full p-4 sm:p-6 md:p-10 flex flex-col gap-6 sm:gap-8 md:gap-10" onSubmit={handleSendEmail}>
                    
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl -mt-4 sm:-mt-6 md:-mt-8 font-normal'>Faites-nous part de vos préoccupations et nous tâcherons de vous repondre</p>
                    <div id="content" className='w-full h-auto flex flex-col gap-4 sm:gap-5'>
                        <div id='userName'>
                            <input className='bg-black/10 w-full h-10 sm:h-11 md:h-12 p-3 sm:p-4 md:p-5 outline-none rounded-md text-black font-normal text-sm sm:text-base md:text-lg lg:text-xl placeholder:text-slate-900' placeholder='Votre nom' type="text" name='userName' value={userName} onChange={handleNameChange}/>
                        </div>
                        <div id='emailAddress'>
                            <input className='bg-black/10 w-full h-10 sm:h-11 md:h-12 p-3 sm:p-4 md:p-5 outline-none rounded-md text-black font-normal text-sm sm:text-base md:text-lg lg:text-xl placeholder:text-slate-900' placeholder='Votre adresse email' type="email" name='emailAddress' value={emailAddress} onChange={handleEmailChange}/>
                        </div>
                        <div id='message'>
                            <textarea className='bg-black/10 w-full h-32 sm:h-36 md:h-44 p-3 sm:p-4 md:p-5 outline-none rounded-md text-black font-normal text-sm sm:text-base md:text-lg lg:text-xl placeholder:text-slate-900' placeholder='Votre message' name='message' value={message} onChange={handleMessageChange}/>
                        </div>
                        {errorMessage && <p className="text-red-500 text-sm sm:text-base">{errorMessage}</p>}
                        <input className={`bg-darkBlue w-full h-10 sm:h-11 md:h-12 text-white font-bold hover:cursor-pointer hover:text-blue-950 hover:border-blue-950 border-2 hover:bg-transparent hover:shadow-lg rounded-xl shadow-black text-sm sm:text-base ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" value="Envoyer" disabled={!isFormValid} />
                    </div>
                </form>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
                    <div className="bg-white p-4 sm:p-6 rounded-md shadow-md max-w-sm w-full">
                        <h2 className="text-lg sm:text-xl font-bold mb-4">Message envoyé avec succès</h2>
                        <button className="bg-mainGradient text-white px-4 py-2 rounded-md w-full sm:w-auto" onClick={() => setShowPopup(false)}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
};