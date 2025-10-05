import { Poppins } from 'next/font/google';
import { CheckCircle } from "lucide-react";

// Load Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const revalidate = 0; 

// Fetch data server-side and pick a random value
async function getRandomPerformance() {
  const res = await fetch(
    "https://68e0325593207c4b4793f202.mockapi.io/api/seo/performance",
    { cache: "no-store" } 
  );
  if (!res.ok) throw new Error("Failed to fetch performance data");
  const data = await res.json();
  const random = data[Math.floor(Math.random() * data.length)];
  return random.data;
}

export default async function Home() {
  const value = await getRandomPerformance();

  // Determine rating
  let rating = "";
  if (value < 50) rating = "Great A";
  else if (value < 500) rating = "Good B";
  else rating = "Bad C";

  return (
    <main
      className={`flex items-center justify-center h-screen bg-[#f3f6f9] ${poppins.className}`}
    >
      <div
        className="flex flex-col p-4 shadow-md"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #DFE3E7",
          width: "248px",
          height: "122px",
          borderRadius: "15px",
        }}
      >
        <h1
          className="text-xl flex justify-between items-center w-full"
          style={{ color: "#495652" }}
        >
          Performance
          <CheckCircle className="w-5 h-5" style={{ color: "#56B2F8" }} />
        </h1>
        <p
          className="mt-2 font-bold"
          style={{ color: "#42647E", fontSize: "20px" }}
        >
          {value}
        </p>
        <p
          className="mt-1"
          style={{ color: "#4AD1CE", fontSize: "16px" }}
        >
          {rating}
        </p>
      </div>
    </main>
  );
}
