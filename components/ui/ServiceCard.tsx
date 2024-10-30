import { LucideFactory } from 'lucide-react';
import React from 'react'

type Props = {}

const ServiceCard = ({ text = "Mining Services", icon: Icon = LucideFactory }) => (
    <div className='flex flex-col justify-between bg-lime-200 text-lime-700 text-xl leading-[0.9em] rounded-3xl aspect-square p-4 md:p-8'>
      <div><Icon className='h-8 w-8' /></div>
      <div>{text}</div>
    </div>
  );

export default ServiceCard