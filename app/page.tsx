import Dashboard from "@/components/dashboard/dashboard";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col my-4">
      <div className="lg:w-4/5 mx-auto w-full  bg-white rounded-lg shadow-2xs px-4 py-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Your Timesheets</h1>
        <div className="flex-1">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
