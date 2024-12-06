import React from 'react'; import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { FacultyAchivements } from '../../../components/variables/variables';
import { Groupdiscussionbro1 } from '../../../assets';

const FacultyAchievementLists = () => {
    const navigate = useNavigate();
    function handleClick(option) {
        navigate(`/login/clerk/deptlist/deptlogin/home/facultyachievement/${option}`)
    }
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-900">
            <Navbar links={FacultyAchivements} />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-2xl font-bold mb-8">Faculty</h1>
                <div className="space-y-4 w-full max-w-md">
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("paperjournalpub")}>
                        Paper /Journal Publication
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("bookspublish")}>
                        Books Publication
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("paperpresentation")}>
                        Paper Presentation/Conference
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("patentgrant")}>
                        Patent Grant
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("workshop")}>
                        Workshop/STTP/FDP
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("otherspecial")}>
                        OTHER Special
                    </button>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg w-full" onClick={() => handleClick("trainingprogram")}>
                        Training Program
                    </button>
                </div>
                <img src={Groupdiscussionbro1}alt="Group of students" className="mt-8" />
            </main>
        </div>
    );
};
export default FacultyAchievementLists;
