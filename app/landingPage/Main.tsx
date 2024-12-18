const Main = () => {
  return (
    <div className="p-3 mt-28">
      <picture>
        <source
          srcSet="/desktop/image-grid-1.jpg"
          media="(min-width: 1000px)"
        />
        <source srcSet="/tablet/image-grid-1.jpg" media="(min-width: 700px)" />
        <img
          src="/mobile/image-grid-1.jpg"
          alt="Gallery Grid 1"
          style={{ width: "100%", height: "100%" }}
        />
      </picture>

      <section className="py-8">
        {/* correct block for larger screens */}
        <h2 className="uppercase">
          <span className="block larger-screens:inline">Your day </span>at the
          gallery
        </h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </section>

      <picture>
        <source
          srcSet="/desktop/image-grid-2.jpg"
          media="(min-width: 1000px)"
        />
        <source srcSet="/tablet/image-grid-2.jpg" media="(min-width: 700px)" />
        <img
          src="/mobile/image-grid-2.jpg"
          alt="Gallery Grid 2"
          className="mb-4 w-full"
        />
      </picture>

      <picture>
        <source
          srcSet="/desktop/image-grid-3@2x.jpg"
          media="(min-width: 1000px)"
        />
        <source
          srcSet="/tablet/image-grid-3@2x.jpg"
          media="(min-width: 700px)"
        />
        <img
          src="/mobile/image-grid-3@2x.jpg"
          alt="Gallery Grid 3"
          className="mb-4 w-full"
        />
      </picture>

      <section className="bg-colorDark text-colorLight px-6 py-8 mb-28">
        <h2 className="uppercase">Come &amp; be inspired</h2>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </section>
    </div>
  );
};

export default Main;
