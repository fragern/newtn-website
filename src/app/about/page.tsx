export default function About() {
  return (
    <div className="relative flex flex-col items-center">
      <img
        src="/assets/images/snowflake.svg"
        className="absolute left-0 top-16 -z-10"
        alt="Snowflake"
      />

      <section className="flex flex-col gap-20 px-10 py-64 lg:flex-row lg:items-center lg:justify-between lg:gap-40">
        <div className="flex w-fit flex-none flex-col gap-5 text-4xl">
          <p className="text-4xl font-semibold text-primary">We are</p>
          <img
            src="/assets/logos/newtn/text/navy.svg"
            className="w-80"
            alt="Text Logo"
          />
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <p className="text-2xl text-primary">
            Newtn was founded by a team of passionate developers and designers
            driven by innovation. Inspired by Newton&apos;s apple—a symbol of
            curiosity and discovery—we turn ideas into reality, creating
            impactful digital solutions.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-semibold text-primary">
          Newtn Talents
        </h1>

        <div className=""></div>
      </section>
    </div>
  );
}
