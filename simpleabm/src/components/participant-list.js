
import React from 'react';

export default function ParticipantList({participants}){

  const list = () => {
    return participants.map(participant => {
      return (
        <li key={participant._id}>{participant.usuario}: {participant.equipo} </li>
      )
    })
  }

  return (
    <div>
      <ul>
        { list() }
      </ul>
    </div>
  )
}
