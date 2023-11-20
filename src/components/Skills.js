import { SkillsData } from '../data/SkillsData';
import Divider from './Divider';

const Skills = () => {
  return (
    <>
      <Divider id='Skills' text='Skills' />
      {Object.entries(SkillsData).map(([category, items]) => (
        <div className='bg-white py-4 dark:bg-slate-900'>
          <div className='mx-auto max-w-7xl px-6 lg:px-8'>
            <h2 className='text-xl font-semibold leading-8 text-slate-900 dark:text-slate-50'>
              {category}
            </h2>
            <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8'>
              {items.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
                      src={item.image}
                      alt={item.name}
                      width='40'
                      height='40'
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
