const Gallery = () => {
  return (
    <div className="p-3 ls:p-6 mt-28 ls:grid ls:grid-cols-12 ls:gap-4">
      <picture className="ls:col-start-6 ls:col-end-13 ls:row-start-1 ls:row-end-2">
        <source
          srcSet="/desktop/image-grid-1.jpg"
          media="(min-width: 1000px)"
        />
        <source srcSet="/tablet/image-grid-1.jpg" media="(min-width: 700px)" />
        <img
          src="/mobile/image-grid-1.jpg"
          alt="Gallery Grid 1"
          className="w-full h-full object-cover"
        />
      </picture>

      <section className="py-8 ls:col-start-1 ls:col-end-6 ls:row-start-1 ls:row-end-2">
        {/* correct block for larger screens */}
        <h2 className="uppercase">
          <span className="block lsinline">Your day </span>at the gallery
        </h2>
        <p>
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </section>

      <picture className="ls:col-start-1 ls:col-end-8 ls:row-start-2 ls:row-end-4">
        <source
          srcSet="/desktop/image-grid-2.jpg"
          media="(min-width: 1000px)"
        />
        <source srcSet="/tablet/image-grid-2.jpg" media="(min-width: 700px)" />
        <img
          src="/mobile/image-grid-2.jpg"
          alt="Gallery Grid 2"
          className="mb-4 w-full h-full object-cover"
        />
      </picture>

      <picture className="ls:col-start-8 ls:col-end-13 ls:row-start-2 ls:row-end-3">
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
          className="mb-4 w-full h-full object-cover"
        />
      </picture>

      <section className="bg-colorDark text-colorLight px-6 py-8 mb-28 ls:col-start-8 ls:col-end-13 ls:row-start-3 ls:row-end-4 ls:h-full">
        <h2 className="uppercase">Come &amp; be inspired</h2>
        <p>
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </section>
    </div>
  );
};

export default Gallery;
