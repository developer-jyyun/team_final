import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["Pretendard", "sans-serif"],
      serif: ["Pretendard", "serif"],
    },

    extend: {
      screens: {
        mo: "375px",
        web: "500px",
      },
      fontSize: {
        xxs: "10px",
        xxl: "28px",
      },
      colors: {
        black: "#000",
        "black-1": "#111",
        "black-2": "#222",
        "black-3": "#333",
        "black-4": "#444",
        "black-5": "#555",
        "black-6": "#666",
        "black-7": "#777",
        "black-8": "#888",
        "black-9": "#999",
        "grey-a": "#aaa",
        "grey-b": "#bbb",
        "grey-c": "#ccc",
        "grey-d": "#ddd",
        "grey-e": "#eee",
        "grey-transparent": "rgba(238, 238, 238, 0.4)",
        "grey-bar": "rgba(238, 238, 238, 0.6)",

        blue: "#0059E3",
        "blue-main": "#5C77FF",
        "blue-transparent": "rgba(1, 82, 207, 0.50)",
        "blue-1": "#F4F8FF",
        red: "#EE1439",
        "red-1": "#EE1616",
        orange: "#E67100",
        white: "#fff",
        "white-5": "#f5f5f5",
        brown: "#3D1200",
        green: "#03C75B",
        "lime-sub1": "#17D410",
        "lime-sub2": "#0EAD08",
        "lime-sub3": "#05B200",
        "lime-sub4": "#E8FFE7",
        pink: "#FF3D73",
        "pink-main": "#FF3478",
        "pink-sub1": "#FE546E",
        "pink-sub2": "#E42E5F",
        "pink-sub3": "#FE516F",
        "pink-transparent": "rgba(255, 239, 239, 0.6)",
        "pink-transparent-2": "rgba(255, 239, 239, 0.4)",
        "pink-1": "#FE516F",
        "pink-2": "#FFEFEF",
        "pink-3": "#FFF5F5",
        yellow: "#FFDB6D",
      },
      borderRadius: {
        md: "10px",
        lg: "12px",
        xl: "91px",
      },
      boxShadow: {
        dark: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      },
      backgroundImage: {
        "gradient-white":
          "linear-gradient(0deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 100%)",
        "gradient-red": "linear-gradient(270deg, #FF3D73 2.25%, #FF758A 100%);",
        "gradient-grey": "linear-gradient(270deg, #BBB -4.3%, #DDD 100%);",
        "custom-gradient-pink":
          "linear-gradient(122deg, #FF7B99 4.25%, #FF3478 104.25%)",
        "custom-gradient-pink-2":
          "linear-gradient(106deg, #FE546E 0%, #FF3478 100%)",
        "custom-gradient-pink-3":
          "linear-gradient(270deg, #FF3777 -4.3%, #FE526E 100%)",
        "custom-gradient-green":
          "linear-gradient(122deg, #17D510 4.25%, #0EAD08 104.25%)",
        "custom-gradient-green-2":
          "linear-gradient(290deg, #0DAA08 0%, #19DB12 108.81%)",
        "custom-gradient-green-3":
          "linear-gradient(270deg, #34DB2E -4.3%, #0EAF09 100%, #0EAE09 100%)",
      },
      keyframes: {
        // 약관 동의 애니메이션
        transparencyAnimation: {
          "0%": { backgroundColor: "transparent" },
          "100%": { backgroundColor: "rgba(0,0,0,0.6)" },
        },
        transparencyAnimationReverse: {
          "0%": { backgroundColor: "rgba(0,0,0,0.6)" },
          "100%": { backgroundColor: "transparent" },
        },
        positionTopAnimation: {
          "0%": { bottom: "-500px" },
          "100%": { bottom: "0" },
        },
        positionTopAnimationReverse: {
          "0%": { bottom: "0" },
          "100%": { bottom: "-500px" },
        },
      },
      animation: {
        transparencyAnimation:
          "transparencyAnimation 0.2s ease-in-out forwards",
        transparencyAnimationReverse:
          "transparencyAnimationReverse 0.2s ease-in-out forwards",
        positionTopAnimation: "positionTopAnimation 0.2s ease-in-out forwards",
        positionTopAnimationReverse:
          "positionTopAnimationReverse 0.2s ease-in-out forwards",
      },
      lineClamp: {
        2: "2",
      },
    },
  },
  plugins: [],
};
export default config;
