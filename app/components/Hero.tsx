import BtnLocation from "./BtnLocation";

const Hero = () => {
  return (
    <article className="larger-screens:grid larger-screens:grid-cols-12 larger-screens:grid-rows-4">
      <section className="laptop:bg-colorDark laptop:w-full laptop:h-full col-start-1 col-end-5 row-start-1 row-end-5"></section>
      <section className="w-full laptop:col-start-5 laptop:col-end-9 tablet:col-start-1 tablet:col-end-7 row-start-1 row-end-5">
        <picture>
          <source
            srcSet="/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          <source srcSet="/tablet/image-hero.jpg" media="(min-width: 768px)" />
          <img
            src="/mobile/image-hero.jpg"
            alt="Modern Art Gallery Hero"
            className="w-full"
          />
        </picture>
      </section>
      <section className="laptop:col-start-3 laptop:col-end-11 tablet:col-start-6 tablet:col-end-11 row-start-2 row-end-4 larger-screens:flex tablet:flex-col laptop:justify-between p-3 larger-screens:p-0">
        <h1 className="laptop:text-colorLight laptop:mix-blend-difference tablet:mb-8 uppercase">
          <span className="block">Modern</span> Art Gallery
        </h1>
        <section className="laptop:w-2/6">
          <p className="mb-8 text-colorDark max-w">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <BtnLocation />
        </section>
      </section>
    </article>
  );
};

export default Hero;
