import Footer from "@/components/footer";
import Header from "@/components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1 flex flex-col  px-4 py-4 lg:px-0   bg-gray-100">
        <div className="lg:w-4/5 mx-auto w-full  bg-white rounded-lg shadow-2xs px-4 py-6 flex flex-col">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
