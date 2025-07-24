"use client"

export function FloatingDoodleSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Clean watercolor background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/images/watercolor-clean.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: "rotate(45deg)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 flex justify-center items-center min-h-[400px]">
        <div className="relative w-full max-w-xl flex justify-center items-center">
          <img
            src="https://blush-design.imgix.net/collections/L9oIBvB7R7IjzZWxOfIu/1663be28-ecf6-439d-92f4-928d19264662.png?auto=compress&cs=srgb"
            // src="/images/floating-doodle.png" 
            alt="Floating doodle illustration"
            width={600}
            height={400}
            className="w-full h-auto object-contain animate-float-medium"
          />
          {/* Optional: Add some subtle text or elements around the doodle */}
          <div className="absolute top-1/4 left-1/7 text-black font-serif text-xl animate-float-slow">Dream</div>
          <div className="absolute bottom-1/4 right-1/4 text-black/60 font-serif text-xl animate-float-fast">
            Explore
          </div>
        </div>
      </div>
    </section>
  )
}
