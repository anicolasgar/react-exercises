
import React from 'react';

export default function ContactList({participants}){

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
