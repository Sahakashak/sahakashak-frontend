import React from "react";
import { Card, Text, Metric } from "@tremor/react";
import { LuPcCase } from "react-icons/lu";
export default function DashboardHeader() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card
        className="max-w-xs mx-auto bg-primary_light flex justify-between items-center"
        decoration="top"
        decorationColor="blue"
      >
        <div>
          <Text>Total Cases</Text>
          <Metric>500</Metric>
        </div>
        <div className="p-4 bg-blue-200 text-blue-500 rounded-2xl">
          <LuPcCase className="text-xl" />
        </div>
      </Card>
      <Card
        className="max-w-xs mx-auto bg-primary_light flex justify-between items-center"
        decoration="top"
        decorationColor="green"
      >
        <div>
          <Text>Total Arrests</Text>
          <Metric>100</Metric>
        </div>
        <div className="p-4 bg-green-200 text-green-500 rounded-2xl">
          <LuPcCase className="text-xl" />
        </div>
      </Card>
      <Card
        className="max-w-xs mx-auto bg-primary_light flex justify-between items-center"
        decoration="top"
        decorationColor="yellow"
      >
        <div>
          <Text>Opened Cases</Text>
          <Metric>170</Metric>
        </div>
        <div className="p-4 bg-yellow-200 text-yellow-500 rounded-2xl">
          <LuPcCase className="text-xl" />
        </div>
      </Card>
      <Card
        className="max-w-xs mx-auto bg-primary_light flex justify-between items-center"
        decoration="top"
        decorationColor="red"
      >
        <div>
          <Text>Pending Cases</Text>
          <Metric>230</Metric>
        </div>
        <div className="p-4 bg-red-200 text-red-500 rounded-2xl">
          <LuPcCase className="text-xl" />
        </div>
      </Card>
    </div>
  );
}
