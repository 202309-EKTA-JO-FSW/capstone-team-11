import { Button } from "../../../app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { Calendar } from "@/app/components/ui/calendar";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/app/components/ui/select";
export default function EventDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Event Name</h1>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Tickets
        </Button>
      </div>
      <div className="mt-8 mb-12">
        <h2 className="text-5xl font-bold text-center">Event Details</h2>
      </div>
      <p className="mb-8 text-lg">
        Get ready to experience a day filled with inspiring talks, informative
        sessions, and networking
      </p>
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <CalendarIcon className="text-gray-500" />
          <span className="text-lg font-medium">Date</span>
          <Badge variant="secondary">2</Badge>
          <span className="text-sm text-gray-500">No Date Selected</span>
        </div>
        <Calendar className="rounded-md border" />
      </div>
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <UsersIcon className="text-gray-500" />
          <span className="text-lg font-medium">Number of Attendees</span>
        </div>
        <Select>
          <SelectTrigger id="attendees">
            <SelectValue placeholder="1" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <ClockIcon className="text-gray-500" />
          <span className="text-lg font-medium">Time</span>
        </div>
        <Select>
          <SelectTrigger id="time">
            <SelectValue placeholder="10 AM" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="10 AM">10 AM</SelectItem>
            <SelectItem value="11 AM">11 AM</SelectItem>
            <SelectItem value="12 PM">12 PM</SelectItem>
            <SelectItem value="1 PM">1 PM</SelectItem>
            <SelectItem value="2 PM">2 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="text-center">
        <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Book Now
        </Button>
      </div>
      <footer className="mt-12 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
        <div>EventMaster</div>
        <div>Your Ultimate Event Experience Since 1997</div>
        <div>Updated in 2022</div>
      </footer>
    </div>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
