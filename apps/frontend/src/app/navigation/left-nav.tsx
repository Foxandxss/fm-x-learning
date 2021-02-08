import React from 'react';

export function LeftNav() {
  return (
    <nav className="flex h-full min-h-screen ">
      <div className="bg-green-200">
        <span className="flex border-black border-b border-t">
          Part Settings
        </span>
        <span className="flex border-black border-b">Pitch / Filter</span>
        <span className="flex border-black border-b">Effect</span>
        <span className="flex border-black border-b">Arpeggio</span>
        <span className="flex border-black border-b">Motion Seq</span>
        <span className="flex border-black border-b">Mod / Control</span>
      </div>
      <div className="bg-blue-400">
        <span className="flex border-black border-b border-t">General</span>
        <span className="flex border-black border-b">Algorithm</span>
        <span className="flex border-black border-b">Zone Settings</span>
        <span className="flex border-black border-b">Zone Transmit</span>
      </div>
    </nav>
  );
}
