const Divider = ({ id, text }) => {
  return (
    <div
      id={id}
      className='flex items-center px-10 pt-20 pb-5 lg:pt-20 dark:bg-slate-900'
    >
      <div className='w-1/2 h-0.5 bg-slate-300'></div>
      <div className='mx-4 text-3xl text-slate-900 font-semibold dark:text-slate-200'>
        {text}
      </div>
      <div className='w-1/2 h-0.5 bg-slate-300'></div>
    </div>
  );
};

export default Divider;
