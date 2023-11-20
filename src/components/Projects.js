import { ProjectsData } from '../data/ProjectsData';

import Divider from './Divider';

const Projects = () => {
  return (
    <>
      <Divider id='Projects' text='Projects' />
      <div className='p-4 bg-white dark:bg-slate-900'>
        {ProjectsData.map((project, index) => {
          return (
            <div
              key={index}
              className='mb-4 bg-slate-50 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0 dark:bg-slate-900 justify-between'
            >
              <div className='mx-auto max-w-xl lg:mx-0 lg:flex lg:flex-col justify-center'>
                <h2 className='text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50'>
                  {project.title}
                </h2>
                <ul className='mt-6 text-lg leading-6 text-slate-600 dark:text-slate-300'>
                  {project.description.map((desc, descIndex) => {
                    return (
                      <li key={descIndex} className='p-2'>
                        {desc}
                      </li>
                    );
                  })}
                </ul>
                <div>
                  {project.technologies.map((tech, techIndex) => {
                    return (
                      <span
                        key={techIndex}
                        className='mt-3 mr-3 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
                <div className='mt-4 flex items-center justify-center gap-x-6'>
                  <a
                    target='_blank'
                    href={project.url}
                    className='text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
                  >
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='w-12 h-12'
                      aria-hidden='true'
                    >
                      <path d='M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z'></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className='mt-16 lg:mt-8 hidden lg:block'>
                <img
                  className='rounded-md bg-white/5 ring-1 ring-white/10'
                  src={project.image}
                  alt='App screenshot'
                  width={800}
                  height={400}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
