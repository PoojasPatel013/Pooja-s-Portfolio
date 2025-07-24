import Image from "next/image"

export default function Hero() {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10 h-screen">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full">
          {/* Left Section - Watercolor with Name */}
          <div className="relative flex items-center justify-center p-4 md:p-0">
            <Image
              src="/images/watercolor-with-name.png"
              alt="Pooja Patel watercolor background with name"
              fill
              className="object-cover"
              priority
            />
            <div className="relative z-10 text-center text-black font-script text-5xl md:text-6xl lg:text-7xl">
              <span className="sr-only">Pooja Patel</span>
            </div>
          </div>

          {/* Middle Section - Pooja's Photo */}
          <div className="relative flex items-center justify-center p-4 md:p-0 col-span-1 md:col-span-1">
            <div className="relative w-full h-96 md:h-full">
              <Image
                src="/images/pooja-photo.png"
                alt="Pooja Patel portrait photo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-10 text-center text-black">
              <span className="sr-only">Tech and All</span>
            </div>
          </div>

          {/* Right Section - Midpic1 (Hidden on small screens) */}
          <div className="relative items-center justify-center p-4 md:flex hidden">
            <Image
              src="/images/midpic1.png"
              alt="Tech and all text with cat silhouette and leaves"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
