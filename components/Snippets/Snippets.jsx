import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Snippets = ({ snippets }) => {
  return (
    <section id="snippets" className="mb-12">
      <SectionTitle title="Snippets" />

      <ul>
        {snippets.map((snippet) => {
          return (
            <li
              key={snippet.id}
              className="text-light-gray mb-2 hover:text-white transition-all"
            >
              <Link href={snippet.url} target="_blank">
                {snippet.description}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Snippets;
