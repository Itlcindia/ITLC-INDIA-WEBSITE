
import Image from 'next/image';

export default function MegaImageSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="relative w-full h-[60vh] min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1550751827-41378a3d34ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cybersecurity infrastructure"
            fill
            className="object-cover"
            data-ai-hint="cybersecurity network"
          />
           <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl">
              Securing Your Digital Frontier
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              We provide enterprise-grade security solutions to protect your assets and data from evolving threats.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
