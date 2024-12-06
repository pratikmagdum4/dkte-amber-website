import { useLocation, useNavigate } from "react-router-dom"
//import Navbar from "../../pages/navbar/Navbar";
//import { StudentAchivements } from '../../../components/variables/variables';

function DepartmentListing() {
    const navigate = useNavigate();
    let location = useLocation();
    let departments = []
    const course = location.state && location.state.course
    departments = location.state && location.state.departments;
    console.log("indie listing")
    console.log("hi there " + location.state.departments);
    console.log("hi there " + location.state.course);

    function handleClick(item) {
        console.log("hi there " + location.state.departments);

        navigate('/clerk/home/studentachievement/courselist/listing/ranktables', {
            state: {
                department: item,
                course: course
            }
        });

    }
    return (
        <>
            <div>

                {departments.map((item) => (
                    <button key={item} onClick={() => handleClick(item)}>
                        {item}
                    </button>
                ))}
            </div>
        </>
    )
}

export default DepartmentListing;