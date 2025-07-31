import type { Attendee } from "../../../lib/types"

type Props = {
  attendees: Attendee[];
}

export default function EventAttendees({ attendees }: Props) {
  return (
    <div className="avatar-group -space-x-6 bg-gray-100 px-4">
      {attendees.map(attendee => (
        <div className="avatar" key={attendee.id}>
          <div className="w-12">
            <img src={attendee.photoURL || '/user.png'} alt="attendees avatar" />
          </div>
        </div>
      ))}
    </div>
  )
}