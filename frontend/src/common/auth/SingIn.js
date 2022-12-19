import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginApi, registerApi } from "../../services/userApi/apiCall";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "./authSlice";

const SingIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [login, setLogin] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setInputs((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const register = async () => {
    if (inputs.name != "" && inputs.email != "" && inputs.password) {
      await registerApi(inputs);
      toast("You have registerd Sucessfully");
      window.location.reload();
    } else {
      toast("Please fill Form first");
    }
  };
  const auth = () => {
    if (inputs.email != "" && inputs.password) {
      loginApi(inputs).then((res) => {
        if (res.message == "Successfully Logged In") {
          history.push("/");
          toast(`${res.message}`);
          dispatch(userLogin(res.user));
        } else {
          toast(`${res}`);
        }
      });
    } else {
      toast("Please fill Form first");
    }
  };
  return (
    <>
      {/* Register */}
      {!login && (
        <>
          <div className="my-5 w-6/12 mx-auto">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-blue-50 px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                <from>
                  <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="name"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password"
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <button
                    onClick={() => {
                      register();
                    }}
                    className="w-full text-white bg-green-600 px-5 py-2 rounded-md"
                  >
                    Create Account
                  </button>
                  <div className="text-grey-dark mt-6">
                    Already have an account ?
                    <button
                      onClick={() => {
                        setLogin(true);
                      }}
                      className="hover:underline mx-2 hover:text-red-900 no-underline border-b border-blue text-blue"
                      href="../login/"
                    >
                      Log in
                    </button>
                  </div>
                </from>
              </div>
            </div>
          </div>
        </>
      )}

      {/* login */}

      {login && (
        <>
          {/* <div className="relative  min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl">
            <div className="flex justify-center bg-slate-400  self-center  z-10">
              <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
                <div className="mb-7">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Sign In{" "}
                  </h3>
                  <p className="text-gray-400">
                    Don't have an account?
                    <button
                      onClick={() => {
                        setLogin(false);
                      }}
                      className="text-sm text-purple-700 hover:underline hover:text-purple-700"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="">
                    <input
                      name="email"
                      required
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="relative" x-data="{ show: true }">
                    <input
                      name="password"
                      required
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      placeholder="Password"
                      type="password"
                      className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    />
                    <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        auth()
                      }}
                      className="bg-green-700 text-white font-bold px-10 w-full py-2 rounded-md"
                    >
                      Sign in
                    </button>
                  </div>
                
               
                  
                </div>
              </div>
            </div>
          </div> */}
          <div class="contain py-16">
            <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
              <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
              <p class="text-gray-600 mb-6 text-sm">welcome back customer</p>
              {/* <form action="#" method="post" autocomplete="off"> */}
                <div class="space-y-2">
                  <div>
                    <label for="email" class="text-gray-600 mb-2 block">
                      Email address
                    </label>
                    <input
                      type="email"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name="email"
                      class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                      placeholder="youremail.@domain.com"
                    />
                  </div>
                  <div>
                    <label for="password" class="text-gray-600 mb-2 block">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      name="password"
                      id="password"
                      class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                      placeholder="*******"
                    />
                  </div>
                </div>

                <div class="mt-4">
                  <button
                     onClick={() => {
                      auth()
                    }}
                    type="submit"
                    class="bg-black block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-gray-900 hover:text-primary transition uppercase font-roboto font-medium"
                  >
                    Login
                  </button>
                </div>
              {/* </form> */}

              <button  onClick={() => {
                        setLogin(false);
                      }} class="mt-4 text-center text-gray-600">
                Don't have account?
                  Register now
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingIn;
