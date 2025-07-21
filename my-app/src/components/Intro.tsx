import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="text-4xl font-bold">Prapti's here!
        </h1>
        <p className="text-base text-gray-700">
          Fullstack Engineer with 5+ years in coding. Open source and Web3 is my current niche.
        </p>
      </div>
      <div className="w-3/12 flex-1">
        <Image
          src="/images/profile.jpeg"
          alt="prapti's image"
            width={100}
            height={100}
          className="rounded-sm border border-gray-100 w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Intro;
