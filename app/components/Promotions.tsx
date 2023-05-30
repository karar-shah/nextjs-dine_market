import React from "react";

export default function Promotions() {
  return (
    <>
      <div className="grid grid-rows-6 grid-cols-4 w-full">
        {/* Box 1 */}
        <div className="bg-gray-400 col-span-4">
          <div className="font-semibold text-2xl leading-9">
            <div>GET UP TO </div>
            <span>60%</span>
          </div>
          <div>
            For the <span>summer</span> season
          </div>
        </div>
        {/* Box 2 */}
        <div className="bg-black col-span-4"></div>
        {/* Box 3 */}
        <div className="bg-purple-200 row-span-2 col-span-4"></div>
        {/* Box 4 */}
        <div className="bg-gray-400 row-span-2 col-span-4"></div>
      </div>
    </>
  );
}
