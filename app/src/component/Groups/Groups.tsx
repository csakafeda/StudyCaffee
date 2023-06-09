import React from 'react';
import {StudyGroups} from './StudyGroups';
import bgbooks from "../../pictures/background/books.jpg";

const Groups: React.FC = () => {
    const randomNumber = () => {
        return Math.floor(Math.random() * 10);
    };

    return (
        <div className=" font-serif bg-image-container bg-cover min-h-screen"
             style={{backgroundImage: `url(${bgbooks})`, backgroundRepeat: "repeat", height: "100%"}}>
            <div className="mr-2 ml-2
            md:mr-12 md:ml-12
            lg:mr-24 lg:ml-24
            xl:mr-32 xl:ml-32">
                <h2 className="rounded-lg bg-sand text-center text-2xl font-bold p-5 bg-opacity-95 shadow-lg">
                    Study Groups
                </h2>
                <div className="p-8 flex justify-center items-center mb-4">
                    <div className="flex gap-2 flex-wrap justify-center">
                        {StudyGroups.map((group) => (
                            <div key={group.id}
                                 className="w-80 rounded-lg bg-opacity-95 bg-sand">
                                <h3 className="text-xl font-semibold py-4 px-6 bg-camel bg-opacity-60 ">
                                    {group.name}
                                </h3>
                                <div className={"mb-2 py-2 px-6"}>
                                <p className="text-gray-600">{group.description}</p>
                                <p className="text-gray-500">Members: {group.members}</p>
                                {randomNumber() === 0 ? (
                                    <p className="text-red-500">No seats left</p>
                                ) : (
                                    <div className="flex justify-between items-center">
                                        <p>{randomNumber()} seats left</p>
                                        <button
                                            className="bg-nav-bar hover:bg-camel text-white font-bold py-2 px-6 rounded">
                                            Join us
                                        </button>
                                    </div>
                                )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Groups;
