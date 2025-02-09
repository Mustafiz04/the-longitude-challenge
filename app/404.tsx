import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button onClick={() => router.push("/")} className="mt-6">
        Go Back Home
      </Button>
    </div>
  );
} 