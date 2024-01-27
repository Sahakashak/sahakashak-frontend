"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { Card, CardHeader } from "@nextui-org/react";

export default function GenderRatioChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if ((chartRef.current as any).chart) {
        (chartRef.current as any).chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context as CanvasRenderingContext2D, {
        type: "doughnut",
        data: {
          labels: ["Male", "Female", "Other"],
          datasets: [
            {
              label: "Gender",
              data: [64, 34, 23],
              backgroundColor: [
                "rgb(0, 200, 255, 0.2)", // Brighter Blue for Male
                "rgb(255, 120, 120, 0.2)", // Brighter Pink/Red for Female
                "rgb(255, 255, 120, 0.2)", // Brighter Yellow for Other
              ],
              borderColor: [
                "rgb(0, 200, 255)", // Brighter Blue for Male
                "rgb(255, 120, 120)", // Brighter Pink/Red for Female
                "rgb(255, 255, 120)", // Brighter Yellow for Other
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
        },
      });

      (chartRef.current as any).chart = newChart;
    }
  }, []);

  return (
    <Card className="w-[350px] py-3 ">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-xl font-medium pb-5">Crime Gender Ratio</h1>
          <div style={{ width: "87%", height: "87%" }}>
            <canvas ref={chartRef} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
