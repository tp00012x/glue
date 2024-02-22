const Thumbnail = () => {
  return (
    <figure className="m-0 grid grid-rows-[1fr_auto]">
      <img
        className="block max-w-full row-span-full col-start-1 col-end-1 rounded-sm"
        alt="Title"
        src="https://via.placeholder.com/600/3a3059"
      />
      <figcaption className="row-start-2 row-end-2 col-start-1 col-end-1 py-1 px-2 max-h-full max-w-full truncate justify-self-start bg-white/50">
        Title
      </figcaption>
    </figure>
  );
};

export default Thumbnail;
