import { EducationData } from '../data/EducationData';
import Divider from './Divider';

const Education = () => {
  return (
    <>
      <Divider id='Education' text='Education' />
      <div className='flex flex-col lg:flex-row lg:justify-around dark:bg-slate-900'>
        {EducationData.map((education, index) => (
          <div
            key={index}
            className='m-10 p-10 rounded-sm shadow-sm shadow-slate-400'
          >
            <p className='text-2xl text-slate-900 dark:text-slate-50'>
              {education.name}
            </p>
            <p className='text-lg text-slate-700 dark:text-slate-300'>
              {education.degree}
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              {education.duration}
            </p>
            <p className='text-sm text-slate-500 dark:text-slate-400'>
              CGPA - {education.cgpa}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
