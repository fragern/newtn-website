import Image from "next/image";

const ContactUs = () => {
  return (
    <section className="relative flex w-full flex-col gap-16 bg-secondary px-10 py-32 lg:flex-row lg:items-center">
      <div className="absolute bottom-0 right-0 h-[549px] w-[551px]">
        <div className="relative h-full w-full">
          <Image
            src="/assets/images/squares-triangles-white-outline.svg"
            alt="A triangle made out of outlines of squares and triangles"
            fill
            className="object-fit h-full w-full"
          />
        </div>
      </div>

      <div className="z-10 flex max-w-screen-sm flex-col gap-4">
        <h1 className="text-6xl font-bold text-primary">
          LET&apos;S BRING YOUR IDEAS TO LIFE.
        </h1>
        <p className="max-w-[400px] text-2xl text-black">
          Tell us a bit about your project, and we&apos;ll get back to yous
          soon!
        </p>
      </div>

      <div className="z-10 flex flex-1 items-center justify-center">
        <form
          action=""
          className="flex w-full flex-col gap-8 lg:max-w-screen-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row">
            <input
              type="text"
              placeholder="Your Name..."
              className="flex-1 rounded-2xl bg-background p-4 font-medium"
            />
            <input
              type="text"
              placeholder="Your Email..."
              className="flex-1 rounded-2xl bg-background p-4 font-medium"
            />
          </div>
          <div>
            <textarea
              rows={5}
              placeholder="Your Message..."
              className="w-full resize-none rounded-2xl bg-background p-4 font-medium"
            />
          </div>
          <div>
            <button className="rounded-full bg-primary px-8 py-4 font-medium text-white hover:bg-white hover:text-primary">
              Send Your Idea
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
