import { useNavigate, useRouteError } from 'react-router';

const Error = () => {
    const err=useRouteError();
    const navigate=useNavigate();

  return (
    <div className='min-h-screen flex flex-col gap-3 items-center justify-center bg-slate-50'>
      <title>404 : Page Not Found</title>
      <h1 className=' text-2xl font-bold text-slate-800'>Oops!!! This page isn't available!</h1>
      <p className='text-xl text-slate-700'>{err.status} :{ err.statusText}</p>
      <button onClick={()=>navigate("/")} className='font-bold text-orange-500 rounded-lg p-2 border-2 cursor-pointer'>Redirect to 🏠Homepage</button>
    </div>
  )
}

export default Error;
