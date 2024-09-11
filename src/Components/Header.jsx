import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[16vmin] lg:h-[12vmin] w-[100vw] border-[2px] bg-[#4399d6] flex">
        <div className="flex gap-x-3  justify-center items-center">
          <div className="imageHolder w-[12vmin] h-[13vmin] lg:h-[10vmin] mt-1 ml-2">
            <img
              src={require("../assets/newsIcon.png")}
              className="max-w-full max-h-full object-contain"
            ></img>
          </div>

          <p className="text-[#ffffff] text-[4.5vmin] font-extrabold">
            Apna News
          </p>
        </div>

        <div className="holder w-[40vmin]"></div>

        <div className="hidden lg:block holder text-white ">
          <div className="holder h-[16vmin] lg:h-[12vmin] flex gap-x-8 justify-center items-center text-[2.6vmin] font-medium">
            <p>Login</p>
            <p>Signup</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
