import React from 'react';
import AskButton from './askBtn';

export default function AskQstns() {
  return (
    <div className="flex flex-col items-center justify-between py-8 bg-yellow-300 text-center w-100% mb-[-35px] gap-5">
      <h2 className='text-4xl font-bold'>Got questions?</h2>
      <h3>Don't know where to start? We are here for you.</h3>
      <AskButton />
    </div>
  );
}
