export default function Projects({ className }) {
  return (
    <div
      className={
        "bg-[#090d1f] h-[1133px] relative overflow-hidden " + className
      }
    >
      <div className="bg-[#090d1f] pt-[30px] pb-[30px] flex flex-col gap-16 items-center justify-center w-[1440px] absolute left-0 top-[1049px]">
        <div className="flex flex-row gap-3.5 items-start justify-start shrink-0 w-[1216px] relative">
          <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
            © 2023{" "}
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start shrink-0 relative">
            <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
              Twitter{" "}
            </div>
            <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
              LinkedIn{" "}
            </div>
            <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
              Email{" "}
            </div>
            <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
              RSS feed{" "}
            </div>
            <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
              Add to Feedly{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[30px] pb-[30px] flex flex-col gap-16 items-center justify-start w-[1440px] absolute left-0 top-[125px]">
        <div className="pr-8 pl-8 flex flex-col gap-8 items-start justify-start shrink-0 w-[1280px] relative">
          <div className="flex flex-col gap-10 items-center justify-start self-stretch shrink-0 relative">
            <div className="flex flex-col gap-6 items-center justify-start self-stretch shrink-0 relative">
              <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                <div className="text-primary-600 text-center font-textmd-semibold-font-family text-textmd-semibold-font-size leading-textmd-semibold-line-height font-textmd-semibold-font-weight relative self-stretch">
                  Newlatters{" "}
                </div>
                <div className="text-[#ffffff] text-center font-displaylg-semibold-font-family text-displaylg-semibold-font-size leading-displaylg-semibold-line-height font-displaylg-semibold-font-weight relative self-stretch">
                  Stories and interviews{" "}
                </div>
              </div>
              <div className="text-[#c0c5d0] text-center font-textxl-normal-font-family text-textxl-normal-font-size leading-textxl-normal-line-height font-textxl-normal-font-weight relative w-[768px]">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.{" "}
              </div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-start shrink-0 relative">
              <div className="flex flex-col gap-0 items-start justify-start self-stretch shrink-0 w-[360px] relative">
                <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative">
                  <div className="flex flex-col gap-1.5 items-start justify-start self-stretch shrink-0 relative">
                    <div
                      className="bg-white rounded-lg border-solid border-gray-300 border pt-3 pr-3.5 pb-3 pl-4 flex flex-row gap-2 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
                      style={{
                        boxShadow:
                          "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-start flex-1 relative">
                        <div className="text-gray-500 text-left font-textmd-normal-font-family text-textmd-normal-font-size leading-textmd-normal-line-height font-textmd-normal-font-weight relative flex-1">
                          Enter your email{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <div
                  className="bg-primary-600 rounded-lg border-solid border-primary-600 border pt-3 pr-5 pb-3 pl-5 flex flex-row gap-2 items-center justify-center shrink-0 relative overflow-hidden"
                  style={{
                    boxShadow:
                      "var(--shadow-xs-box-shadow,  0px 1px 2px 0px rgba(16, 24, 40, 0.05))",
                  }}
                >
                  <div className="text-white text-left font-textmd-medium-font-family text-textmd-medium-font-size leading-textmd-medium-line-height font-textmd-medium-font-weight relative">
                    Subscribe{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-[#090d1f] pt-[30px] pb-[30px] flex flex-col gap-16 items-center justify-start w-[1440px] absolute left-0 top-[481px]">
        <div className="pr-8 pl-8 flex flex-col gap-[30px] items-start justify-start shrink-0 w-[1280px] relative">
          <div className="flex flex-col gap-8 items-start justify-start shrink-0 w-[1216px] relative">
            <div className="text-[#ffffff] text-left font-displayxs-semibold-font-family text-displayxs-semibold-font-size leading-displayxs-semibold-line-height font-displayxs-semibold-font-weight relative self-stretch">
              All blog posts{" "}
            </div>
            <div className="flex flex-col gap-12 items-start justify-start self-stretch shrink-0 relative">
              <div className="flex flex-row gap-8 items-start justify-center self-stretch shrink-0 relative">
                <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
                  <img
                    className="self-stretch shrink-0 h-60 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="image0.png"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-[#6941c6] text-left font-textsm-semibold-font-family text-textsm-semibold-font-size leading-textsm-semibold-line-height font-textsm-semibold-font-weight relative self-stretch">
                        Sunday , 1 Jan 2023{" "}
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-[#ffffff] text-left font-displayxs-semibold-font-family text-displayxs-semibold-font-size leading-displayxs-semibold-line-height font-displayxs-semibold-font-weight relative flex-1">
                          Bill Walsh leadership lessons{" "}
                        </div>
                        <div className="pt-1 flex flex-col gap-0 items-start justify-start shrink-0 relative">
                          <svg
                            className="shrink-0 w-6 h-6 relative overflow-visible"
                            style={{}}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-[#c0c5d0] text-left font-textmd-normal-font-family text-textmd-normal-font-size leading-textmd-normal-line-height font-textmd-normal-font-weight relative self-stretch">
                        Like to know the secrets of transforming a 2-14 team
                        into a 3x Super Bowl winning Dynasty?{" "}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#f9f5ff] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#6941c6] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Leadership{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#f8f9fc] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#363f72] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Management{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-pink-50 rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-pink-700 text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Presentation{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
                  <img
                    className="self-stretch shrink-0 h-60 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="image1.png"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-[#6941c6] text-left font-textsm-semibold-font-family text-textsm-semibold-font-size leading-textsm-semibold-line-height font-textsm-semibold-font-weight relative self-stretch">
                        Sunday , 1 Jan 2023{" "}
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-[#ffffff] text-left font-displayxs-semibold-font-family text-displayxs-semibold-font-size leading-displayxs-semibold-line-height font-displayxs-semibold-font-weight relative flex-1">
                          PM mental models{" "}
                        </div>
                        <div className="pt-1 flex flex-col gap-0 items-start justify-start shrink-0 relative">
                          <svg
                            className="shrink-0 w-6 h-6 relative overflow-visible"
                            style={{}}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-[#c0c5d0] text-left font-textmd-normal-font-family text-textmd-normal-font-size leading-textmd-normal-line-height font-textmd-normal-font-weight relative self-stretch">
                        Mental models are simple expressions of complex
                        processes or relationships.{" "}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#f0f9ff] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#026aa2] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Product{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#eef4ff] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#3538cd] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Research{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#fff6ed] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#c4320a] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Frameworks{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start flex-1 relative">
                  <img
                    className="self-stretch shrink-0 h-60 relative overflow-hidden"
                    style={{ objectFit: "cover" }}
                    src="image2.png"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
                      <div className="text-[#6941c6] text-left font-textsm-semibold-font-family text-textsm-semibold-font-size leading-textsm-semibold-line-height font-textsm-semibold-font-weight relative self-stretch">
                        Sunday , 1 Jan 2023{" "}
                      </div>
                      <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 relative">
                        <div className="text-[#ffffff] text-left font-displayxs-semibold-font-family text-displayxs-semibold-font-size leading-displayxs-semibold-line-height font-displayxs-semibold-font-weight relative flex-1">
                          What is Wireframing?{" "}
                        </div>
                        <div className="pt-1 flex flex-col gap-0 items-start justify-start shrink-0 relative">
                          <svg
                            className="shrink-0 w-6 h-6 relative overflow-visible"
                            style={{}}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-[#c0c5d0] text-left font-textmd-normal-font-family text-textmd-normal-font-size leading-textmd-normal-line-height font-textmd-normal-font-weight relative self-stretch">
                        Introduction to Wireframing and its Principles. Learn
                        from the best in the industry.{" "}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 relative">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#f9f5ff] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#6941c6] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Design{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-[#eef4ff] rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-[#3538cd] text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Research{" "}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <div className="bg-pink-50 rounded-2xl pt-0.5 pr-2.5 pb-0.5 pl-2.5 flex flex-row gap-0 items-center justify-center shrink-0 relative">
                          <div className="text-pink-700 text-center font-textsm-medium-font-family text-textsm-medium-font-size leading-textsm-medium-line-height font-textsm-medium-font-weight relative">
                            Presentation{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-[#090d1f] pt-[30px] pr-28 pb-[30px] pl-28 flex flex-col gap-2.5 items-start justify-start sticky left-0 top-0">
        <div className="pt-2.5 pb-2.5 flex flex-row items-center justify-between shrink-0 w-[1216px] relative">
          <div className="text-[#ffffff] text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-6 font-semibold relative">
            Your Name{" "}
          </div>
          <div className="flex flex-row gap-3.5 items-start justify-start shrink-0 relative">
            <div className="p-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
              <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
                Blog{" "}
              </div>
            </div>
            <div className="p-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
              <div className="flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
                  Projects{" "}
                </div>
              </div>
            </div>
            <div className="p-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
              <div className="text-[#ffffff] text-left font-['Inter-Regular',_sans-serif] text-xl leading-6 font-normal relative">
                About{" "}
              </div>
            </div>
            <div className="p-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
              <div className="border-solid border-[#ffffff] border-b pb-[5px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <div className="text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-xl leading-6 font-bold relative">
                  Newsletter{" "}
                </div>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-[29px] pt-2 pr-4 pb-2 pl-4 flex flex-row gap-4 items-start justify-start shrink-0 relative">
              <div className="bg-[#090d1f] rounded-[20px] shrink-0 w-6 h-6 relative">
                <svg
                  className="h-[auto] absolute right-[0%] left-[0%] w-[100%] bottom-[0%] top-[0%] h-[100%] overflow-visible"
                  style={{}}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z"
                    fill="#090D1F"
                  />
                  <path
                    d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z"
                    fill="#090D1F"
                  />
                </svg>
              </div>
              <div className="rounded-[20px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <svg
                  className="shrink-0 w-6 h-6 relative overflow-visible"
                  style={{}}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9794 22.241L11.9794 22.2409L11.9723 22.2406C6.62041 22.0017 2.15041 17.686 1.77876 12.4447L1.77872 12.4442C1.45435 7.94125 4.05841 3.72964 8.26292 1.9614C8.81553 1.73167 9.19107 1.72373 9.4307 1.77165C9.67013 1.81954 9.81779 1.93194 9.90031 2.01741L9.90025 2.01746L9.90646 2.02367C9.99122 2.10843 10.0995 2.25509 10.1442 2.48454C10.1888 2.71296 10.1793 3.06939 9.95184 3.58991L9.95134 3.59107C9.46363 4.71491 9.21956 5.91384 9.23002 7.1434C9.25182 11.8463 13.1487 15.8185 17.8985 16.0097C18.5887 16.0414 19.2653 15.9881 19.9174 15.8724L19.9195 15.872C20.5024 15.7661 20.8652 15.8384 21.0845 15.9351C21.3035 16.0317 21.4219 16.1714 21.4846 16.2729C21.5494 16.3777 21.6233 16.5483 21.6141 16.7885C21.605 17.0286 21.511 17.3863 21.1582 17.8625L21.1564 17.865C19.1319 20.6343 15.9129 22.2501 12.46 22.2501C12.2876 22.2501 12.1323 22.25 11.9794 22.241ZM2.27119 12.4044L2.27128 12.4057C2.62975 17.4243 6.89952 21.5182 11.987 21.7396C15.4443 21.9073 18.7243 20.3307 20.7433 17.5757L20.7433 17.5757L20.7469 17.5707C20.9192 17.3294 21.0111 17.1411 21.0582 17.0157L21.2838 16.4141L20.6452 16.3432C20.514 16.3286 20.3032 16.3182 19.9974 16.3787C19.3055 16.5016 18.5833 16.549 17.87 16.5205L17.8699 16.5205C12.8529 16.321 8.74922 12.1062 8.72001 7.15865C8.7202 5.84669 8.97651 4.58694 9.49652 3.40409C9.62394 3.1228 9.65274 2.91939 9.66615 2.81213L9.7364 2.25011H9.17001C9.00018 2.25011 8.77391 2.2891 8.46583 2.41936C4.46093 4.1015 1.97638 8.11911 2.27119 12.4044Z"
                    stroke="#090D1F"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
