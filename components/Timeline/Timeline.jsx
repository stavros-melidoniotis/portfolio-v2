import Link from "next/link";
import { useEffect, useState } from "react";

import { motion } from "framer-motion";

const TimelineItem = ({ title, content, date, dotContent }) => {
  return (
    <motion.li
      className="mb-12 ml-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{
        margin: "-180px",
        once: true,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <span className="flex absolute -left-[7px] mt-5 justify-center items-center w-3 h-3 bg-orange-600 rounded-full ring-8 ring-white">
        {dotContent}
      </span>

      <div className="flex flex-col justify-between p-4 bg-dark-gray rounded-lg border border-light-gray shadow-sm">
        <div className="flex flex-wrap items-center justify-between">
          <h3 className="text-md font-normal">{title}</h3>

          <time className="text-xs font-normal text-light-gray">{date}</time>
        </div>

        <div className="font-light border-light-gray text-light-gray rounded-md md:w-4/5 mt-4">
          {content}
        </div>
      </div>
    </motion.li>
  );
};

const Timeline = () => {
  const [timeAlive, setTimeAlive] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateTimeFromDateBorn = () => {
    const currentDate = new Date().getTime();
    const birthdayDate = new Date("1998-07-15").getTime();
    const diff = currentDate - birthdayDate;

    const days = Math.floor(diff / (24 * 60 * 60 * 1000));
    const daysms = diff % (24 * 60 * 60 * 1000);

    const hours = Math.floor(daysms / (60 * 60 * 1000));
    const hoursms = diff % (60 * 60 * 1000);

    const minutes = Math.floor(hoursms / (60 * 1000));
    const minutesms = diff % (60 * 1000);

    const seconds = Math.floor(minutesms / 1000);

    return { days, hours, minutes, seconds };
  };

  const pluralize = (count, wordSingle, wordPlural) => {
    return count > 1 || count === 0
      ? `${count} ${wordPlural}`
      : `${count} ${wordSingle}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAlive(calculateTimeFromDateBorn());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ol className="relative border-l-2 border-[#FB5651]">
      <TimelineItem
        title="Hello world!"
        date="Jul 1998"
        content={
          <p className="mb-2">
            This is where my story begins, making me{" "}
            {pluralize(timeAlive.days, "day", "days")},{" "}
            {pluralize(timeAlive.hours, "hour", "hours")},{" "}
            {pluralize(timeAlive.minutes, "minute", "minutes")} and{" "}
            {pluralize(timeAlive.seconds, "second", "seconds")} old.
          </p>
        }
        dotContent="👶"
      />

      <TimelineItem
        title="Started studying at Harokopio University of Athens"
        date="Sep 2016"
        content={
          <>
            <p className="mb-2">
              Fast forward to 2016. This was the beginning of a very
              constructive period, where I got to meet lots of professors with
              great knowledge and start my programming journey. Some of the
              courses that I took include:
            </p>

            <ul className="list-disc columns-1 md:columns-2 pl-8">
              <li>Object-Oriented Programming</li>
              <li>Android Development </li>
              <li>Web Development </li>
              <li>Data Structures </li>
              <li>Distributed Systems </li>
              <li>Operating Systems </li>
              <li>Artificial Intelligence </li>
              <li>Data Mining</li>
              <li>Algorithms and Complexity </li>
              <li>Cryptography</li>
            </ul>
          </>
        }
        dotContent="🎓"
      />

      <TimelineItem
        title={
          <>
            Website Maintainer @{" "}
            <Link href="https://techville.gr" target="_blank">
              Techville
            </Link>
          </>
        }
        date="Sep 2019"
        dotContent="🧑‍💻"
        content={
          <>
            <p className="mb-2">
              While still studying for University I was able to land a freelance
              job at Techville, where I had the opportunity to put my knowledge
              into practice. My main responsibilities involve the error-free
              operation of the company&apos;s website, the implementation of new
              features and the creation of backups.
            </p>
          </>
        }
      />

      <TimelineItem
        title={
          <>
            Junior Software Engineer (Internship) @{" "}
            <Link href="https://threenitas.com" target="_blank">
              Threenitas
            </Link>
          </>
        }
        date="Jul 2020 - Sep 2020"
        dotContent="🧑‍💻"
        content={
          <>
            <p>
              During my final year at University I got accepted to an internship
              at Threenitas, where I had the chance to experience and understand
              the stages and workflow taken by a company, in order to deliver
              the final product to a client.
            </p>
          </>
        }
      />

      <TimelineItem
        title={
          <>
            Web Developer @{" "}
            <Link href="https://crowdpolicy.com" target="_blank">
              Crowdpolicy
            </Link>
          </>
        }
        date="Nov 2020"
        dotContent="🧑‍💻"
        content={
          <>
            <p>
              My first full-time job! This was my chance to make good use of all
              the skills that I&apos;ve gained during the previous years.
              I&apos;ve participated in numerous projects, either alone or as
              part of a team, and every single one of them has provided me with
              even more skills and experience. Apart from writing code I also
              train new co-workers and guide them through all the initial
              stages.
            </p>
          </>
        }
      />

      <TimelineItem
        title="Graduation! 🎉"
        date="Apr 2021"
        dotContent="🎓"
        content={
          <>
            <p>
              The time has come. My thesis project &quot;Develop a Facebook
              Messenger chatbot that will operate as Harokopio University&apos;s
              undergraduate student advisor&quot; was rated with 10/10, which
              allowed me to graduate from HUA with a GPA of 8.6/10, the highest
              grade at this specific graduation ceremony.
            </p>
          </>
        }
      />
    </ol>
  );
};

export default Timeline;
