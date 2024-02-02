import DashboardHeader from "@/components/DashboardHeader";
import GenderChart from "@/components/GenderChart";
import WeekChart from "@/components/WeekChart";

export default function Page() {
  return (
    <div>
      <DashboardHeader />
      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className=" col-span-2">
          <WeekChart />
        </div>
        <GenderChart />
      </div>
    </div>
  );
}
