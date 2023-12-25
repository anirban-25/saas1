import React from "react";

const Heading = ({ title, description, icon: Icon, iconColor, bgColor }) => {
  return (
    <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
      <div className={`p-2 w-fit rounded-md ${bgColor}`}>
        <Icon className={`w-10 h-10 ${iconColor}`} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
