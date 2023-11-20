import { FooterData } from '../data/FooterData';

const Footer = () => {
  const { text, profiles } = FooterData;

  return (
    <div className='p-4 flex justify-around items-center bg-gradient-to-r from-gray-100 to-gray-200 text-slate-900 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900 dark:text-slate-50 shadow-md'>
      <p> {text}</p>
      <div className='flex justify-between items-center'>
        {profiles.map((profile, index) => {
          return (
            <a
              key={index}
              href={profile.url}
              className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 transition duration-300 ease-in-out'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                className='w-12 h-12'
                aria-hidden='true'
              >
                <path d={profile.icon}></path>
              </svg>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
