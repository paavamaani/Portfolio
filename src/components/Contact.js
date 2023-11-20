import ContactData from '../data/ContactData';

import Divider from './Divider';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <>
      <Divider id='Contact' text='Contact' />
      <div className='flex flex-col lg:flex lg:flex-row items-center justify-center dark:bg-slate-900'>
        <div className='lg:max-w-xl lg:mr-20 px-10'>
          <h1 className='mt-2 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-slate-50'>
            Get in Touch
          </h1>
          <div className='mt-6 leading-6 text-slate-700 dark:text-slate-200'>
            Feel free to get in touch with me for any inquiries, potential
            collaborations, or exciting opportunities. I'm always ready to
            connect and explore new possibilities.
          </div>
          <div className='mt-4 leading-6 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
              class='mr-1 w-6 h-6 text-slate-500 dark:text-slate-400'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              ></path>
            </svg>
            <a
              className='text-slate-500 dark:text-slate-400'
              href='mailto:paavamaanimanchala@gmail.com'
            >
              paavamaanimanchala@gmail.com
            </a>
          </div>
          <div className='mt-4 leading-6 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              aria-hidden='true'
              class='mr-1 w-6 h-6 text-slate-500 dark:text-slate-400'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
              ></path>
            </svg>
            <span className='text-slate-500 dark:text-slate-400'>
              +1-(408)-461-0414
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
