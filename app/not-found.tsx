import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-white">
      <AlertTriangle className="h-16 w-16 text-red-600" />
      <h1 className="text-6xl font-bold text-gray-800 mt-4">404</h1>
      <h2 className="mt-2 text-3xl font-semibold text-gray-700">Oops! Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-600">
        It seems the page you are looking for does not exist. 
        Please check the URL or return to the homepage.
      </p>
      <Button asChild className="mt-6">
        <Link href="/" className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg shadow-md transition duration-200">
          Go Back Home
        </Link>
      </Button>
    </div>
  );
} 