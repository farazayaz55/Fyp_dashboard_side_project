import { type NextPage } from "next";
import Head from "next/head";
import { FormEvent, useState } from "react";
import Alert from "~/Components/alert";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import {useEffect} from 'react'


const Home: NextPage = () => {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const checkUser =  () => {
    const user = Cookies.get("User");
    if (user) {
      void router.replace("/Dashboard");
    }
  };

  useEffect(() => {
    void checkUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = event?.target as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (email === "awais@gmail.com" && password === "12345678") {

      Cookies.set("User",email)
      void router.push("/Dashboard")
    } else {
      if (email !== "awais@gmail.com") {
        setErrorMessage("Email is wrong");
        setShowWarning(true);
      } else {
        setErrorMessage("Password is wrong");
        setShowWarning(true);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Awais FYP</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]" id="DBPage">
        {/* warning message */}

        {showWarning && (
          <Alert
            showWarning={showWarning}
            setShowWarning={setShowWarning}
            errorMessage={errorMessage}
          />
        )}

        {/* warning message end */}
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="label-text text-white  ">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input-bordered input-primary input w-full"
                  name="email"
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-bordered input-primary input w-full"
                  name="password"
                />
              </div>
              <a
                href="#"
                className="text-xs text-gray-600 hover:text-blue-600 hover:underline"
              >
                Forget Password?
              </a>
              <div>
                <button className="btn-primary btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
