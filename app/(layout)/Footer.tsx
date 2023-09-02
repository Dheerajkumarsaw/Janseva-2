import React from "react";
import "@/app/components/style.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-img relative bg-blueGray-200 pt-8 pb-6 bg-red-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700 text-white">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-white">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-8">
                <a href="https://www.twitter.com/">
                  <button
                    className=" text-lightBlue-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img
                      src="/images/socials/twitter.svg"
                      alt="logo"
                      className="w-[90%]"
                    />
                  </button>
                </a>
                <a href="https://www.facebook.com/">
                  <button
                    className=" text-lightBlue-600 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img
                      src="/images/socials/facebook.svg"
                      alt="logo"
                      className="w-[80%]"
                    />
                  </button>
                </a>
                <a href="https://www.youtube.com/">
                  <button
                    className=" text-pink-400 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img src="/images/socials/youtube.svg" alt="logo" />
                  </button>
                </a>
                <a href="https://www.instagram.com/">
                  <button
                    className=" text-blueGray-800  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    <img
                      src="/images/socials/instagram.svg"
                      alt="logo"
                      className="w-[80%]"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-md font-bold mb-2 text-white">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Medical Aid
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Student Education
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Training Programs
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <hr className="my-3 w-2/3 lg:hidden" />
                  <span className="block uppercase text-blueGray-500 text-md font-semibold mb-2 text-white">
                    Contact Us
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        jansevaa31@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm text-white"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        +91-9968966660
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-white">
                Copyright ©{" "}
                <span id="get-current-year">
                  2023 Jan Sevaa. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
