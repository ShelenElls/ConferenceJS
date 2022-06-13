import React from 'react'


export default function AttendeesList(props) {
  return (
    <div>
      <table className = "table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
        { props.attendees && props.attendees.length ? props.attendees.map(attendee => {
          return (
            <tr key={ attendee.href }>
              <td>{ attendee.name }</td>
              <td>{ attendee.conference }</td>
            </tr>
          );
        }): null }
        </tbody>
      </table>
    </div>
  )
}


