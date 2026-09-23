import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    window.location.href =
      "https://m3jf8wkn-8080.inc1.devtunnels.ms/oauth2/authorization/google";
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("accessToken");
    const refreshToken = params.get("refreshToken");
    const userId = params.get("userId");
    const role = params.get("role");

    if (token) {
      localStorage.setItem("token", token);
      if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
      if (userId) localStorage.setItem("userId", userId);
      if (role) localStorage.setItem("role", role);

      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#17120D]">
      <img
        src="/homeImage.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#17120D]/55 via-[#1C1410]/25 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#17120D]/25 via-transparent to-transparent"></div>

      <div className="relative z-10 min-h-screen flex items-start">
        <div className="w-full px-6 pt-10 pb-12 sm:px-10 md:px-14 lg:px-20">
          <div className="flex flex-col gap-4">
            <div className="max-w-lg flex flex-col items-start text-left gap-6">
              <p className="font-['Fraunces',_serif] italic text-[#D9B168] text-base sm:text-lg drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                Where every meal tells a story
              </p>

              <div>
                <h1 className="font-['Fraunces',_serif] text-[#F3EAD9] leading-[1.05] drop-shadow-[0_3px_10px_rgba(0,0,0,0.55)]">
                  <span className="block text-2xl sm:text-3xl font-medium tracking-wide text-[#EFE6D3]">
                    Welcome to
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-6xl italic font-semibold mt-1">
                    Taaj Restaurant & food Delivery!
                  </span>
                </h1>
                <p className="font-['Manrope',_sans-serif] mt-4 text-[#F0E7D6] text-sm sm:text-base max-w-sm leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                  Slow-cooked Mughlai classics, warm hospitality, and a table
                  that's always waiting for you.
                </p>
              </div>
            </div>

            <div className="w-full flex justify-center -mt-24">
              <div className="w-full max-w-[400px]">
                <div className="relative rounded-[25px] border border-[#D9B168] bg-[#FBF6EC] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="h-[3px] w-full bg-[#C89B3C]"></div>

                  <div className="px-7 py-8 sm:px-8 sm:py-9">
                    {/* Icon */}
                    <div className="mb-6 flex justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#6B1E23]/20 bg-[#6B1E23]">
                        <svg
                          className="h-6 w-6 text-[#F3EAD9]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v20" />
                          <path d="M5 9h14" />
                          <path d="M7 9c0 4 2 7 5 7s5-3 5-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="mb-7 text-center">
                      <h2 className="font-['Manrope',_sans-serif] text-2xl font-bold text-[#241B12]">
                        Welcome back
                      </h2>
                      <p className="mt-1.5 font-['Manrope',_sans-serif] text-sm text-[#8A7A63]">
                        Sign in to continue to your account
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleGoogleLogin}
                      className="group flex w-full items-center justify-between rounded-[10px] border border-[#E4DAC5] bg-white px-5 py-3.5 font-['Manrope',_sans-serif] text-sm sm:text-base font-semibold text-[#241B12] transition-colors duration-200 hover:border-[#C89B3C] hover:bg-[#FDF9F0]"
                    >
                      <div className="flex items-center gap-3">
                        <svg className="h-5 w-5" viewBox="0 0 48 48">
                          <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.3-.4-3.5z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.3 6.1 29.4 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M24 44c5.1 0 9.9-2 13.4-5.2l-6.2-5.2C29.4 35.1 26.8 36 24 36c-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.3 16.2 44 24 44z"
                          />
                          <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.7 5.7-6.9 6.9l6.2 5.2C38.2 36.9 44 31.1 44 24c0-1.3-.1-2.3-.4-3.5z"
                          />
                        </svg>
                        <span>Continue with Google</span>
                      </div>

                      <svg
                        className="h-4 w-4 text-[#B3A488] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#C89B3C]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>

                    <p className="mt-5 text-center font-['Manrope',_sans-serif] text-xs text-[#B3A488]">
                      By continuing, you agree to our Terms and Privacy Policy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
