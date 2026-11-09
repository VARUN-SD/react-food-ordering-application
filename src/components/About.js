


const About = () => {
  const features = [
    {
      icon: "🍽️",
      title: "Curated Restaurants",
      description:
        "Discover restaurants and explore a variety of cuisines for every craving.",
    },
    {
      icon: "📍",
      title: "Easy Discovery",
      description:
        "Find your next favorite meal with a simple and enjoyable browsing experience.",
    },
    {
      icon: "⭐",
      title: "Explore Ratings",
      description:
        "Use restaurant ratings and menu details to help decide what to eat.",
    },
    {
      icon: "❤️",
      title: "Food for Everyone",
      description:
        "From everyday favorites to new cuisines, there is always something to explore.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <title>About Us Page</title>
      {/* Hero section */}
      <section className="bg-linear-to-r from-amber-100 via-orange-50 to-amber-100">
        <div className="mx-auto grid max-w-7xl items-center px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-3 font-semibold tracking-widest text-orange-600">
              OUR STORY
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              About Us
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              We believe great food brings people together. Our goal is to
              make discovering restaurants simple, enjoyable, and exciting.
              Explore menus, discover new cuisines, and find your next
              favorite meal — all in one place.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="flex h-64 w-64 items-center justify-center rounded-full bg-orange-100 text-8xl shadow-inner sm:h-80 sm:w-80 sm:text-9xl">
              🍲
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold text-orange-600">Why Choose Us?</p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Made for Food Lovers </h2>

          <p className="mt-4 leading-7 text-gray-600">
            A simple way to explore restaurants, browse menus, and decide what
            to enjoy next.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-orange-100 bg-white p-7 text-center 
                                            shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center 
                   justify-center rounded-2xl bg-orange-50 text-3xl"> {feature.icon} </div>

              <h3 className="mt-5 text-lg font-bold text-gray-900"> {feature.title} </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600"> {feature.description} </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 rounded-3xl bg-orange-50 p-8 sm:p-12 md:flex-row">
          <div className="text-6xl sm:text-7xl">👨‍🍳</div>

          <div>
            <p className="font-semibold text-orange-600">Our Mission</p>

            <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl"> Better Food, Better Moments </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              We are building a convenient restaurant discovery experience
              that helps people explore food with confidence. Because great
              food is not just about eating — it is about creating memories.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;