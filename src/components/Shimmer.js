const Shimmer = () => {
return (
<div className="min-h-screen bg-gray-50">
{/* Hero section placeholder */}
<div className="bg-linear-to-r from-orange-500 to-orange-400 px-5 py-12 sm:py-16">
  <div className="mx-auto max-w-xl animate-pulse">
    <div className="mb-4 h-8 w-64 rounded-lg bg-white/30" />
    <div className="mb-6 h-4 w-80 max-w-full rounded bg-white/20" />
      <div className="flex max-w-xl gap-3">
        <div className="h-12 flex-1 rounded-xl bg-white/70" />
        <div className="h-12 w-24 rounded-xl bg-white/40" />
      </div>
    </div>
  </div>

  {/* Restaurant cards placeholder */}
  <div className="mx-auto max-w-7xl px-5 py-10">
    <div className="mb-8 h-7 w-56 animate-pulse rounded-lg bg-gray-200" />
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm" >
          <div className="h-44 animate-pulse bg-gray-200 sm:h-48" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          </div>
        </div>
         <div className="overflow-hidden rounded-2xl bg-white shadow-sm" >
          <div className="h-44 animate-pulse bg-gray-200 sm:h-48" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          </div>
          </div>
         <div className="overflow-hidden rounded-2xl bg-white shadow-sm" >
          <div className="h-44 animate-pulse bg-gray-200 sm:h-48" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          </div>
          </div>
         <div className="overflow-hidden rounded-2xl bg-white shadow-sm" >
          <div className="h-44 animate-pulse bg-gray-200 sm:h-48" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-gray-100" />
          </div>
        </div>
    </div>
    
  </div>
</div>

);
};

export default Shimmer;