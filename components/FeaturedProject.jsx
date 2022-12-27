import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeFork } from "@fortawesome/free-solid-svg-icons";

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
      className="rounded-lg w-full bg-gradient-to-r p-1 from-[#FF0F7B] via-[#FB5651] to-[#F89B29] hover:scale-110 transition-all duration-500 ease-in-out"
      href={link}
      target="_blank"
    >
      <div className="bg-dark-gray rounded-md p-6 h-full">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h4 className="text-lg font-medium w-full text-gray-100 mb-4">
              {title}
            </h4>

            <p className="font-light text-light-gray mb-6"> {description} </p>
          </div>

          <div className="flex gap-4 text-light-gray">
            {language}
            {stars > 0 ? (
              <span>
                <FontAwesomeIcon icon={faStar} /> {stars}
              </span>
            ) : null}
            {forks > 0 ? (
              <span>
                <FontAwesomeIcon icon={faCodeFork} /> {forks}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedProject;
