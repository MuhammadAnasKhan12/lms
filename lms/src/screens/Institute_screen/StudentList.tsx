import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { fbAdd, fbGet } from '../../config/firebase/fbmethods'
import Tablee from '../../components/table';
function StudentList() {
  const [student, setStudent] = useState([]);
  useEffect(() => {
    fbGet("Students").then((res: any) => {
      setStudent(res)
      console.log(res)
    }).catch((err) => { console.log(err) })
  },[])

  return (
    <>
      <h1>Course List</h1>
      <div className="Table">
        <Tablee
          data={student}
          col={[
            {
              heading: "Student Name",
              key: "studentName",
            },
            {
              heading: "Father Name",
              key: "fatherName",
            },
            {
              heading: "Course",
              key: "course",
            },
            
          ]}
        ></Tablee>
      </div>
    </>
  );
}

export default StudentList