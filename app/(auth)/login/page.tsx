import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full h-full flex text-white">
      <LoginForm />

      <div className="bg-blue-600  basis-1/2  flex-col justify-center gap-3 px-10 hidden md:flex">
        <h1 className="text-4xl font-semibold">ticktock</h1>
        <p className="leading-normal">
          Introducing ticktock, our cutting-edge timesheet web application
          designed to revolutionize how you manage employee work hours. With
          ticktock, you can effortlessly track and monitor employee attendance
          and productivity from anywhere, anytime, using any internet-connected
          device.
        </p>
      </div>
    </div>
  );
}
