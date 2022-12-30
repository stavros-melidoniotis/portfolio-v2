import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../SectionTitle/SectionTitle";

import cityworks from "../../assets/images/works/cityworks.png";
import o2hub from "../../assets/images/works/o2hub.png";
import greeklit from "../../assets/images/works/greeklit.png";
import adaptivegreecehub from "../../assets/images/works/adaptivegreecehub.png";
import crowdParticipation from "../../assets/images/works/crowdparticipation.png";
import visitSymi from "../../assets/images/works/visitsymi.png";
import eservices from "../../assets/images/works/eservices.png";

const Work = ({ title, description, technologies, thumbnail, link }) => {
  const technologiesContent = technologies.map((tech, index) => {
    return (
      <div key={index} className="text-sm">
        {tech}
      </div>
    );
  });

  return (
    <div className="bg-dark-gray p-6 rounded-lg flex gap-4">
      <div className="flex flex-col justify-between">
        <div>
          {link ? (
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-4 mb-2"
            >
              <h3 className="text-2xl">{title}</h3>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          ) : (
            <h3 className="text-2xl mb-2">{title}</h3>
          )}

          <p className="text-light-gray">{description}</p>
        </div>

        <div className="mt-8 text-light-gray text-sm flex gap-3">
          {technologiesContent}
        </div>
      </div>

      <Image
        width="300"
        src={thumbnail}
        alt={title}
        className="rounded-xl object-cover"
      />
    </div>
  );
};

const Works = () => {
  const projects = [
    {
      title: "O2hub",
      description:
        "Digital platform for the distribution of Open Data and Open APIs from the subsidiary companies of HCAP.",
      technologies: ["Wordpress", "CKAN", "JavaScript", "PHP", "Python"],
      link: "https://data.hcap.gr/",
      thumbnail: o2hub,
    },
    {
      title: "Cityworks",
      description:
        "Modern geographic information system for the efficient management and visualization of the projects and actions of a Municipality or Region.",
      technologies: ["React", "Next.js", "tailwindcss", "Strapi"],
      thumbnail: cityworks,
    },
    {
      title: "Greeklit",
      description:
        "Website for the promotion of dynamic Greek book production and the promotion of Greek authors abroad through the translation program, but also through continuous information on actions and news about Greek Letters.",
      technologies: ["Wordpress", "PHP", "JavaScript", "Bootstrap"],
      link: "https://greeklit.gr/",
      thumbnail: greeklit,
    },
    {
      title: "Adaptivegreece Hub",
      description:
        "Online tool for mapping climate change predictions in a simple and understandable way using maps and graphs.",
      technologies: ["React", "QGIS", "Geoserver", "Leaflet"],
      link: "https://geo.adaptivegreecehub.gr/s",
      thumbnail: adaptivegreecehub,
    },
    {
      title: "CrowdParticipation",
      description:
        "Online platform for the organization and realization of Public Consultation on the projects and actions of the City, Municipality or Region, combined with evaluation and prioritization.",
      technologies: ["Wordpress", "JavaScript", "PHP", "Bootstrap"],
      link: "https://egov.crowdapps.net/participation-delfoi/",
      thumbnail: crowdParticipation,
    },
    {
      title: "VisitSymi",
      description:
        "Promote tourist and cultural points of Symi island, alternative forms of tourism and alternative tours, the local identity as well as the local entrepreneurship.",
      technologies: ["Wordpress", "Openweathermap", "PHP", "Bootstrap"],
      link: "https://visitsymi.gr/",
      thumbnail: visitSymi,
    },
    {
      title: "e-services",
      description:
        "Digital platform through which citizens can submit requests remotely for certifications or other services of their Municipality, following required methodologies and submitting the necessary supporting documents.",
      technologies: ["Wordpress", "TaxisNet", "PHP", "Bootstrap"],
      link: "https://egov.crowdapps.net/haidari/",
      thumbnail: eservices,
    },
  ].map((project, index) => {
    return (
      <Work
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        thumbnail={project.thumbnail}
        link={project.link}
      />
    );
  });

  return (
    <section id="works" className="min-h-screen">
      <SectionTitle title="Works" />

      <div className="flex flex-col gap-8"> {projects} </div>
    </section>
  );
};

export default Works;
