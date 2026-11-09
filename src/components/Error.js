import { useRouteError } from 'react-router';

const Error = () => {
    const err=useRouteError();

  return (
    <div className='min-h-screen flex items-center justify-center text-center bg-slate-50'>
      <h1 className=' text-2xl font-bold text-slate-800'>Oops!!! Something is Wrong Broo!</h1>
      <h2 className='text-xl text-slate-500'>{err.status} :{ err.statusText}</h2>
    </div>
  )
}

export default Error;
