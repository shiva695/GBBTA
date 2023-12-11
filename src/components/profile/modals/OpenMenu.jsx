import PropTypes from "prop-types";

const OpenMenu = ({
  profileValue,
  setShowBlockConfirmation,
  setShowReportUser,
  handleShare,
}) => {
  return (
    <div className="absolute bg-gradient-to-tl from-[#252525] me-[30px] from-[70%] to-gray-600 rounded-[16px] mt-[8px] -ml-[185px]">
      <div className="bg-[#252525] bg-opacity-[100%] ml-[1px] mt-[1px]  rounded-[16px]">
        <div className="flex flex-col rounded-[16px] bg-[url('/assets/svg/Noise.svg')] bg-no-repeat bg-cover bg-center">
          <div className="w-[222px] flex flex-col py-[14px]">
            {profileValue === 0 ? (
              <div>
                <div className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center ">
                  <img
                    src="/assets/svg/Single,-User,-Info 1 (1).svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="text-white my-[8px] mx-[12px]">About Account</p>
                </div>
                <div className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center ">
                  <img
                    src="/assets/svg/Qr-code 1.svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="text-white my-[8px] mx-[12px]">QR Code</p>
                </div>
                <div className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center ">
                  <img
                    src="/assets/svg/Group 47346.svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="text-white my-[8px] mx-[12px] cursor-pointer">
                    Share Profile
                  </p>
                </div>
                {/* <div className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center ">
                                    <img
                                      src="/assets/svg/user-profile-time-clock 1 (1).svg"
                                      className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                                    />
                                    <p className="text-white my-[8px] mx-[12px]">
                                      Activity Log
                                    </p>
                                  </div> */}
              </div>
            ) : (
              <div>
                <div
                  onClick={() => {
                    setShowBlockConfirmation(true);
                  }}
                  className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center "
                >
                  <img
                    src="/assets/svg/Group 47346 (2).svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="cursor-pointer text-white my-[8px] mx-[12px]">
                    Block
                  </p>
                </div>
                <div
                  onClick={() => {
                    setShowReportUser(true);
                  }}
                  className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center "
                >
                  <img
                    src="/assets/svg/Group 47346 (3).svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="cursor-pointer text-white my-[8px] mx-[12px]">
                    Report
                  </p>
                </div>
                <div
                  onClick={handleShare}
                  className="flex flex-row w-[206px] h-[40px] mx-[8px] hover:bg-[#2B2E30] rounded-lg items-center "
                >
                  <img
                    src="/assets/svg/Group 47346 (1).svg"
                    className="w-[24px] h-[24px] my-[10px] mx-[12px]"
                  />
                  <p className="text-white my-[8px] mx-[12px] cursor-pointer">
                    Share Profile
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

OpenMenu.propTypes = {
  profileValue: PropTypes.number,
  setShowBlockConfirmation: PropTypes.func,
  setShowReportUser: PropTypes.func,
  handleShare: PropTypes.func,
};

export default OpenMenu;
