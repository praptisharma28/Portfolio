import Image from "next/image";

const Intro = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-4 w-9/12">
        <h1 className="text-4xl font-bold">Hi! I am Yatharth</h1>
        <p className="text-base text-gray-700">
          Seasoned Fullstack Engineer with 4+ years in startups. I excel in building applications from scratch to production-ready. My expertise spans across frontend, backend, and full-stack development, with a knack for system design and scalability.
        </p>
      </div>
      <div className="w-4/12 flex-1">
        <Image
          src="/images/praptiprofile.jpeg"
          alt="Yatharth"
            width={100}
            height={100}
          className="rounded-full w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Intro;
