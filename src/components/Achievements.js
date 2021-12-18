import React from "react";
import { UsersIcon } from "@heroicons/react/solid";
import { GrAchievement } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience and achievements
        </h1>
        <div className="flex flex-wrap m-4">
          {achievements.map((achievement) => (
            <div className="p-4 md:w-1/2 w-full flex">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded flex flex-col items-center">
                  {achievement.isAchievement
                  ?
                  <GrAchievement className="block w-8 h-8 py-1 bg-green-500 mb-4 rounded my-1"/>
                  :
                  <MdWorkOutline className="block w-8 h-8 py-1 bg-green-500 mb-4 rounded text-black my-1"/>
                  }
               
                <p className="text-2xl text-white my-1">{achievement.organization}</p>
                <div className="flex text-sm w-9/12 my-1 flex-col">
                    <span>{achievement.role}</span>
                    <span> {achievement.tenure}</span>
                </div>
                <div className="text-sm text-white my-1">
                    {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}