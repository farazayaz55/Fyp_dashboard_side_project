import Head from "next/head";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useRouter } from "next/router";
const data = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 100 },
  { name: "Mar", value: 80 },
  { name: "Apr", value: 120 },
  { name: "May", value: 90 },
];

const Dashboard: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = Cookies.get("User");
    if (!user) {
      router.replace("/");
    }
  }, []);

  const handleSignOut = () => {
    Cookies.remove("User");
    router.replace("/");
  };

  return (
    <>
      <Head>
        <title>Awais Dashboard</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <LineChart width={500} height={300} data={data}>
              <XAxis dataKey="name" tick={{ fill: "#fff" }} />
              <YAxis tick={{ fill: "#fff" }} />
              <CartesianGrid strokeDasharray="3 3" stroke="#fff" />
              <Tooltip
                contentStyle={{ color: "#000" }}
                labelStyle={{ color: "#000" }}
                itemStyle={{ color: "#000" }}
              />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#fff" />
            </LineChart>
          </div>
        </div>
        <button
          className="fixed top-4 right-4 px-4 py-2 rounded bg-red-500 text-white"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </main>
    </>
  );
};

export default Dashboard;
