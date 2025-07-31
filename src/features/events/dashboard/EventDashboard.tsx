import { useEffect, useState } from "react";
import { events } from "../../../lib/data/SampleData";
import EventForm from "../form/EventForm";
import EventCard from "./EventCard";
import type { AppEvent } from "../../../lib/types";
import { AnimatePresence, motion } from 'framer-motion';


type Props = {
  formOpen: boolean;
  setFormOpen: (isOpen: boolean) => void;
}

export default function EventDashboard({ formOpen, setFormOpen }: Props) {

  const [appEvents, setAppEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setAppEvents(events);

    return () => {
      setAppEvents([]);
    }
  }, []);

  return (
    <>
      <div className="flex flex-row w-full gap-6">
        <div className="w-3/5">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
                type: 'tween'
              }}
            >
              <div className=" flex flex-col gap-4 text-black">
                {appEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
        <div className="w-2/5 text-black">
          <AnimatePresence>
            {formOpen && (
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  type: 'tween'
                }}
              >
                <EventForm setFormOpen={setFormOpen} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}