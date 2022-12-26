import Link from "next/link";

const FeaturedProject = ({
  title,
  description,
  link,
  stars,
  forks,
  language,
}) => {
  return (
    <Link
      className="rounded-lg w-full bg-gradient-to-r p-1 from-[#FF0F7B] via-[#FB5651] to-[#F89B29] hover:scale-110 transition-all duration-300 ease-in-out"
      href={link}
      target="_blank"
    >
      <div className="bg-[#0c0c0c] rounded-md p-6 h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="text-lg font-medium w-full text-gray-100 mb-4">
              {title}
            </h4>

            <p className="font-light text-light-gray mb-6"> {description} </p>
          </div>

          <div className="flex gap-4 text-light-gray">
            {language}
            {stars > 0 ? <span>Stars {stars}</span> : null}
            {forks > 0 ? <span>Forks {forks} </span> : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
