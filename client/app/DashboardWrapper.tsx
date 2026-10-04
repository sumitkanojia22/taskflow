import Navbar from "@/components/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full">
      {/* sidebar */}
      sidebar
      <main className={`flex flex-col w-full md:pl-24`}>
        {/* navbar */}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
