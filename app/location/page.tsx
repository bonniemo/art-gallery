import BtnGoHome from "../components/BtnGoHome";

const location = () => {
  return (
    <article>
      <section className="grid grid-cols-12 grid-rows-2">
        <picture className="col-start-1 col-end-13 row-start-1 row-end-3">
          <source srcSet="/desktop/image-map.png" media="(min-width: 1024px)" />
          <source srcSet="/tablet/image-map.png" media="(min-width: 768px)" />
          <img
            src="/mobile/image-map.png"
            alt="Modern Art Gallery Hero"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="col-start-1 row-start-1 l:col-start-2 col-end-4 flex justify-end">
          <BtnGoHome />
        </div>
      </section>
    </article>
  );
};

export default location;
