import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div className='p-10 m-10 rounded-lg shadow-md dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
      <p className='mb-6 text-center text-slate-900 font-semibold dark:text-slate-50'>
        You can reach out to me directly using this form.
      </p>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col text-slate-900 dark:text-slate-50'>
          <label
            className='text-slate-900 dark:text-slate-50 font-semibold leading-8'
            htmlFor='email'
          >
            Your Email Address
          </label>
          <input
            className='p-1 rounded-md border-2 border-slate-300'
            type='email'
            id='email'
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='mt-6 flex flex-col text-slate-900 dark:text-slate-50'>
          <label
            className='text-slate-900 dark:text-slate-50 font-semibold leading-8'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='p-1 rounded-md border-2 border-slate-300'
            id='message'
            placeholder='Type your message here'
            value={message}
            onChange={handleMessageChange}
          ></textarea>
        </div>
        <button
          className='mt-4 bg-sky-500 hover:bg-sky-700 px-2 py-1 rounded-full text-white'
          type='submit'
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
