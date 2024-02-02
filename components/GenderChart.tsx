"use client";
import { Card, DonutChart, Legend, Title } from "@tremor/react";

const cities = [
  {
    name: "Male",
    number: 68,
  },
  {
    name: "Female",
    number: 32,
  },
];

const valueFormatter = (number: number) =>
  `${Number(number).toLocaleString()} Arrests`;

export default function GenderChart() {
  return (
    <Card className="max-w-lg bg-primary_light">
      <Title>Gender Ratio</Title>
      <DonutChart
        className="my-14 scale-125"
        data={cities}
        category="number"
        index="name"
        valueFormatter={valueFormatter}
        colors={["blue", "red"]}
      />
      <Legend
        className="mt-3 text-center"
        categories={["Male Criminals", "Female Criminals"]}
        colors={["blue", "red"]}
      />
    </Card>
  );
}
