import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">


      <div className="flex">
        <div className="flex-grow">
          {children}
        </div>
      </div>
    </div>
  );
}
