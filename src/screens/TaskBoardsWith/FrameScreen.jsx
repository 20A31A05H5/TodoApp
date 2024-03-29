import React from 'react'
import { Pframe } from '../../pagecomponents/Frame'
import { Calendar2 } from '../../pageicons/Calendar2'
import { ChevronDown1 } from '../../pageicons/ChevronDown1'

export const FrameScreen = () => {
  return (
    <div className="bg-green">
      <Pframe
        cardState="unfilled"
        formFieldTextFieldIcon={
          <Calendar2 className="!relative !w-[20px] !h-[20px]" />
        }
        formFieldTextFieldIcon1={
          <ChevronDown1 className="!relative !w-[20px] !h-[20px]" />
        }
        override={<Calendar2 className="!relative !w-[20px] !h-[20px]" />}
      />
    </div>
  )
}
