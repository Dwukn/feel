// Hero.tsx
const Hero = () => {
    return (
      <section className="bg-blue-500 text-white py-32 text-center h-[90vh]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg mb-6">
            We provide innovative solutions to help you grow your business. Let’s make something great together.
          </p>
          <button className="bg-white text-blue-500 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </section>
    );
  };

  export default Hero;
