import React from "react";
import { Card, LineChart, Title } from "@tremor/react";

const crimeData = [
  {
    date: "2022-01-25",
    numberOfCrimes: 20,
  },
  {
    date: "2022-01-26",
    numberOfCrimes: 8,
  },
  {
    date: "2022-01-27",
    numberOfCrimes: 3,
  },
  {
    date: "2022-01-28",
    numberOfCrimes: 6,
  },
  {
    date: "2022-01-29",
    numberOfCrimes: 2,
  },
  {
    date: "2022-01-30",
    numberOfCrimes: 7,
  },
  {
    date: "2022-01-31",
    numberOfCrimes: 4,
  },
];

const formatCrimeDataForChart = (crimeData: any) => {
  return crimeData.map((data: any) => ({
    year: new Date(data.date).getDate(),
    "Number of Crimes": data.numberOfCrimes,
  }));
};

const WeekChart = () => {
  const formattedCrimeData = formatCrimeDataForChart(crimeData);

  return (
    <Card className="bg-primary_light">
      <Title>Crime Data for the Last 7 Days</Title>
      <LineChart
        className="mt-6"
        data={formattedCrimeData}
        index="year"
        categories={["Number of Crimes"]}
        colors={["red"]}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default WeekChart;
