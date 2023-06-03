"use client"

import axios from 'axios';
import { Check, UserPlus, X } from 'lucide-react';
import {FC, useState} from 'react'

interface FriendRequestsProps {
    incomingFriendRequests: IncomingFreindRequest[];
    sessionId: string;
  }

const FreindRequests: FC<FriendRequestsProps> = ({ incomingFriendRequests, sessionId}) => {
    

    const [friendRequests, setFreindRequests] = useState<IncomingFreindRequest[]>(incomingFriendRequests)

    const acceptRequest = async (senderId: string) => {

        await axios.post('/api/request/accept', {id: senderId})
    }
    
  return (
   <>
    {friendRequests.length === 0 ? (
        <p className='text-sm text-zinc-500'>Nothing to show here...</p>
      ) : (
        friendRequests.map((request) => (
          <div key={request.senderId} className='flex gap-4 items-center'>
            <UserPlus className='text-black' />
            <p className='font-medium text-lg'>{request.senderEmail}</p>
            <button
            //   onClick={() => acceptFriend(request.senderId)}
              aria-label='accept friend'
              className='w-8 h-8 bg-indigo-600 hover:bg-indigo-700 grid place-items-center rounded-full transition hover:shadow-md'>
              <Check className='font-semibold text-white w-3/4 h-3/4' />
            </button>

            <button
            //   onClick={() => denyFriend(request.senderId)}
              aria-label='deny friend'
              className='w-8 h-8 bg-red-600 hover:bg-red-700 grid place-items-center rounded-full transition hover:shadow-md'>
              <X className='font-semibold text-white w-3/4 h-3/4' />
            </button>
          </div>
        ))
      )}
   </>
  )
}

export default FreindRequests
