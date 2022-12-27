import Link from "next/link";
import { useEffect, useState } from "react";

const TimelineItem = ({ title, content, date, dotContent }) => {
  return (
    <li className="mb-10 ml-6">
      <span className="flex absolute -left-[7px] mt-5 justify-center items-center w-3 h-3 bg-orange-600 rounded-full ring-8 ring-white">
        {dotContent}
      </span>

      <div className="flex flex-col justify-between p-4 bg-dark-gray rounded-lg border border-light-gray shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-md font-normal">{title}</h3>

          <time className="text-xs font-normal text-light-gray">{date}</time>
        </div>

        <div className="text-sm font-light border-light-gray text-light-gray rounded-md w-4/5 mt-4">
          {content}
        </div>
      </div>
    </li>
  );
};

const Timeline = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentDate = new Date();
  const birthdayDate = new Date(
    `${
      currentDate.getMonth() > 6
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    }-07-15`
  );

  // console.log(new Date(birthdayDate));

  useEffect(() => {

  }, [])

  return (
    <ol className="relative border-l-2 border-[#FB5651]">
      <TimelineItem
        title="Hello world!"
        date="Jul 1998"
        content={
          <p className="mb-2">
            This is where my story begins. Don't forget to send me your wishes
            in
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
              This was the beginning of a very constructive period, where I got
              to meet lots of professors with great knowledge and start my
              programming journey. Some of the courses that I took include:
            </p>

            <ul className="list-disc columns-2 pl-8">
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
              into practise. My main responsibilities involve the error-free
              operation of the company's website, the implementation of new
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
              the skills that I've gained during the previous years. I've
              participated in numerous projects, either alone or as part of a
              team, and every single one of them has provided me with even more
              skills and experience. Apart from writing code I also train new
              co-workers and guide them through all the initial stages.
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
              The time has come. My thesis project "Develop a Facebook Messenger
              chatbot that will operate as Harokopio University's undergraduate
              student advisor" was rated with 10/10, which allowed me to
              graduate from HUA with a GPA of 8.6/10, the highest grade at this
              specific graduation ceremony.
            </p>
          </>
        }
      />
    </ol>
  );
};

export default Timeline;
