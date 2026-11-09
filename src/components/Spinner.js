import React from 'react'

const Spinner = () => {
  return (
    <div className=" p-3 animate-spin drop-shadow-2xl bg-linear-to-bl from-amber-600 via-white to-amber-600
                 md:w-32 md:h-32 h-24 w-24 rounded-full place-self-center mt-44">
        <div className="rounded-full h-full w-full bg-slate-100" ></div>
    </div>
  )
}

export default Spinner;
