import type { AppEvent } from "../../../lib/types";
import EventAttendees from "./EventAttendees";

type Props = {
    event: AppEvent;
}

export default function EventCard({event}: Props) {
    const host = event.attendees.find(x => x.id === event.hostUid);
    return (
        <div className="card card-border w-full bg-white border-neutral-200">
            <div className="card-body">
                <div className="flex gap-4">
                    <figure className="card-figure w-14 rounded-lg">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img 
                                    src={host?.photoURL || '/user.png'}
                                    alt="user avatar" />
                            </div>
                        </div>
                    </figure>
                    <div>
                        <h2 className="card-title">{event.title}</h2>
                        <p className="text-sm text-neutral">Hosted by {host?.displayName}</p>
                    </div>
                </div>

                <div className="bg-base-200 -mx-6 my-3 border-y border-neutral-300">
                    <EventAttendees attendees={event.attendees}/>
                </div>

                <div className="card-actions flex">
                    <div className="flex flex-1">
                        Description
                    </div>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}