export default function About() {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-20 px-20 py-32 lg:flex-row lg:items-center lg:justify-center lg:gap-40 lg:px-32">
        <div className="flex flex-col gap-5 text-4xl">
          <p className="font-semibold">We are</p>
          <p className="text-8xl font-black">Newtn.</p>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-medium text-primary">Our Story</h1>
          <p className="text-base text-primary">
            <span className="font-bold">Newtn</span> was born from a shared
            passion for innovation and creativity. We are a team of talented
            developers and designers who crossed paths at the Apple Developer
            Academy. After graduation, we knew we wanted to stay together and
            create something meaningful. Inspired by the iconic story of Isaac
            Newton and the falling apple—a symbol of curiosity and discovery—we
            embraced the spirit of turning ideas into reality. That&apos;s how
            Newtn came to life, blending our skills and vision to build
            impactful digital solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
