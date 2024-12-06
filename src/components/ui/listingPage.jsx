import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../pages/navbar/Navbar';
import { FacultyAchivements } from '../variables/variables'; 
import { Groupdiscussionbro1 } from '../../assets';

const ListingComponent = ({ buttonNames, url, title,handleClick }) => {
    // const navigate = useNavigate();
    // function handleClick(option) {
    //     navigate(`${url}/${option}`)
    // }
   
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={FacultyAchivements} />

            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">{title}</h1>
                <div className="space-y-4 w-full max-w-md">
                    {buttonNames.map((btnName) => (
                        <button
                            key={btnName.id}
                            className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full"
                            onClick={() => handleClick(btnName.option)}
                        >
                            {btnName.label}
                        </button>
                    ))}
                </div>
                <img src={Groupdiscussionbro1} alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};

export default ListingComponent;
