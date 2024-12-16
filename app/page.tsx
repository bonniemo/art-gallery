import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <article className="larger-screens:grid larger-screens:grid-cols-12 larger-screens:grid-rows-4">
        <section className="laptop:bg-colorDark laptop:w-full laptop:h-full col-start-1 col-end-5 row-start-1 row-end-5"></section>
        <section className="w-full laptop:col-start-5 laptop:col-end-9 tablet:col-start-1 tablet:col-end-7 row-start-1 row-end-5">
          <picture>
            <source
              srcSet="/desktop/image-hero.jpg"
              media="(min-width: 1024px)"
            />
            <source
              srcSet="/tablet/image-hero.jpg"
              media="(min-width: 768px)"
            />
            <img
              src="/mobile/image-hero.jpg"
              alt="Modern Art Gallery Hero"
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </section>
        <section className="laptop:col-start-3 laptop:col-end-11 tablet:col-start-6 tablet:col-end-11 row-start-2 row-end-4 larger-screens:flex tablet:flex-col laptop:justify-between">
          <h1 className="laptop:text-colorLight laptop:mix-blend-difference tablet:mb-8 uppercase">
            <span className="block">Modern</span> Art Gallery
          </h1>
          <section className="laptop:w-2/6">
            <p className="mb-8 text-colorDark">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <button className="flex items-center w-52 h-16">
              <div className="bg-colorDark h-full w-full flex justify-center items-center">
                <p className="uppercase text-colorLight">Our location</p>
              </div>
              <div className="bg-colorAccent h-full flex items-center px-2">
              <IoIosArrowForward className="text-2xl text-colorLight" />
              </div>
            </button>
          </section>
        </section>
      </article>
    </>
  );
};

export default Home;
