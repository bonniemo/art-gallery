import BtnLocation from "./BtnLocation";

const Hero = () => {
  return (
    <article className="ls:grid ls:grid-cols-12 ls:grid-rows-4">
      <section className="ls:bg-colorDark ls:w-full ls:h-full col-start-1 col-end-5 row-start-1 row-end-5"></section>
      <section className="w-full ls:col-start-5 ls:col-end-9 m:col-start-1 m:col-end-7 row-start-1 row-end-5">
        <picture>
          <source
            srcSet="/desktop/image-hero.jpg"
            media="(min-width: 1024px)"
          />
          <source srcSet="/tablet/image-hero.jpg" media="(min-width: 768px)" />
          <img
            src="/mobile/image-hero.jpg"
            alt="Modern Art Gallery Hero"
            className="w-full h-full object-cover"
          />
        </picture>
      </section>
      <section className="ls:col-start-3 ls:col-end-11 m:col-start-6 m:col-end-11 row-start-2 row-end-4 ls:flex m:flex-col l:justify-between p-3 ls:p-0">
        <h1 className="l:text-colorLight l:mix-blend-difference mmb-8 uppercase">
          <span className="block">Modern</span> Art Gallery
        </h1>
        <section className="l:w-2/6">
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
