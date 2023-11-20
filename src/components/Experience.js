import { ExperienceData } from '../data/ExperienceData/';

import Divider from './Divider';

const Experience = () => {
  return (
    <>
      <Divider id='Experience' text='Experience' />
      <div className='py-10 lg:p-10 dark:bg-slate-900'>
        {ExperienceData.map((experience, index) => {
          return (
            <div
              key={index}
              className='w-11/12 m-auto mb-10 flex flex-col lg:flex-row justify-between lg:items-center ring-offset-0 ring-0 shadow dark:shadow-slate-600'
            >
              <div className='flex flex-col flex-1 p-6'>
                <p className='text-xl font-semibold text-slate-900 dark:text-slate-50'>
                  {experience.role}
                </p>
                <p className='text-md text-slate-500 dark:text-slate-300'>
                  {experience.company}
                </p>
                <p className='text-sm text-slate-500 dark:text-slate-300'>
                  {experience.duration}
                </p>
              </div>
              <ul className='flex-[3] border-slate-100 p-10'>
                {experience.work.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className='mb-2 pl-6 list-disc text-slate-700 dark:text-slate-300'
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
