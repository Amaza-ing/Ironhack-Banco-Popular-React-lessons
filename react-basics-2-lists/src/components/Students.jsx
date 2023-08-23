const students = ["Marc", "Lucy", "Anna"];

const HTMLStudents = students.map(student => {
  return <p key={student}>{student}</p>
})

function Students() {
  return (
    <div className="list">
      <h2>Student List</h2>
      {HTMLStudents}
    </div>
  )
}

export default Students;