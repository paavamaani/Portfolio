import { HomeData } from '../data/HomeData';

const Home = () => {
  const { title, tagline, resume, profiles } = HomeData;

  return (
    <section
      id='Home'
      className='relative isolate overflow-hidden flex items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-900'
    >
      <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.slate.900),white)]' />
      <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-slate-900' />
      <div className='mx-auto max-w-2xl lg:max-w-4xl'>
        <div className='text-center text-slate-900 dark:text-slate-300'>
          <p className='text-2xl leading-2 md:text-8xl my-5'>{title}</p>
          <p className='md:text-4xl my-5'>{tagline}</p>
          <div className='mt-14'>
            <a
              target='_blank'
              href={resume}
              className='bg-sky-500 hover:bg-sky-700 p-3 rounded-full text-white'
            >
              Resume
            </a>
          </div>
          <div className='flex justify-between items-center mt-12'>
            {profiles.map((profile, index) => {
              return (
                <a
                  key={index}
                  href={profile.url}
                  className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
                  target='_blank'
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
      </div>
    </section>
  );
};

export default Home;
