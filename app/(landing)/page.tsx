import React from "react";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div>LandingPage</div>
      <div className="flex gap-2">
        <Link href="/sign-in">
          <div className="bg-white border-2 border-gray-300 text-gray-700 w-16 rounded-md items-center justify-center hover:bg-gray-200 hover:text-black">Sign in</div>
        </Link>
        <Link href="/sign-up">
          <div className="bg-white border-2 border-gray-300 text-gray-700 w-16 rounded-md items-center justify-center hover:bg-gray-200 hover:text-black">Register</div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
