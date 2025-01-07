import React from 'react';

export default function Keymetrics() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        {
          title: "Total Revenue",
          value: "$124,567",
          percentage: "+15%",
          colors: "from-blue-500 to-blue-700",
        },
        {
          title: "Total Sales",
          value: "3,452",
          percentage: "+10%",
          colors: "from-green-500 to-green-700",
        },
        {
          title: "Average Order Value",
          value: "$120",
          percentage: "+5%",
          colors: "from-purple-500 to-purple-700",
        },
        {
          title: "Pending Orders",
          value: "47",
          percentage: "-3%",
          colors: "from-yellow-500 to-yellow-700",
        },
      ].map(({ title, value, percentage, colors }, index) => (
        <div
          key={index}
          className={`bg-gradient-to-r ${colors} text-white shadow-xl rounded-3xl p-4 flex flex-col items-start`}
        >
          <h3 className="text-lg font-semibold mb-4">{title}</h3>
          <p className="text-2xl font-extrabold">{value}</p>
          <p className="mt-2 text-sm text-opacity-80">{percentage}</p>
        </div>
      ))}
    </section>
  );
}
