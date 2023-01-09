import React from 'react'

const students = [
  {
    id: 1,
    name: 'DYNO'
  },
  {
    id: 2,
    name: 'IU'
  },
  {
    id: 3,
    name: 'KAZUHA'
  }
]

function AttendanceBook() {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}

export default AttendanceBook