// @import dependencies
import { useState, useRef, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// @import files
import Pager from "../generalComponents/Pager";
import { TabItem, Slider } from "../generalComponents/TabStyle";

// @import components
import UploadProfilePhoto from "./modals/UploadProfilePhoto";
import constants from "../../json/constants.json";
import BlockConfirmation from "./modals/BlockConfirmation";
import ShowReportUser from "./modals/ShowReportUser";
import ShowConfirmation from "./modals/ShowConfirmation";
import ShowPretend from "./modals/ShowPretend";
import ShowPretendSearch from "./modals/ShowPretendSearch";
import SocialLinks from "../generalComponents/SocialLinks";
import OpenMenu from "./modals/OpenMenu";

export default function Profile() {
  const navigate = useNavigate();
  const [cookies] = useCookies();

  // Refs
  const tabListRef = useRef();
  const childRefs = useRef(new Map());

  // State variables
  const [value, setValue] = useState(0);
  const [slider, setSlider] = useState({ left: 0, right: 0 });

  const [tab, setTab] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [openUploadProfile, setOpenUploadProfile] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [showBlockConfirmation, setShowBlockConfirmation] = useState(false);
  const [showReportUser, setShowReportUser] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPretend, setShowPretend] = useState(false);
  const [showPretendSearch, setShowPretendSearch] = useState(false);

  // tabs array
  const tabs = [constants.POSTS, constants.LINEAGE];

  const [profileValue, setProfilevalue] = useState(
    cookies[constants.COOKIES.PROFILEVALUE]
      ? cookies[constants.COOKIES.PROFILEVALUE]
      : 0
  ); // For demo purpose

  const handleSetProfileImage = (image) => {
    setProfileImage(image);
  };
  const imgArray = [
    "/assets/png/Rectangle 17802.png",
    "/assets/png/Rectangle 17794.png",
    "/assets/png/Rectangle 17795.png",
    "/assets/png/Rectangle 17797.png",
    "/assets/png/Rectangle 17796.png",
    "/assets/png/Rectangle 17798.png",
    "/assets/png/Rectangle 17800.png",
    "/assets/png/Rectangle 17801.png",
    "/assets/png/Rectangle 17799.png",
  ];
  const handleTab1 = () => {
    setTab(1);
  };
  const handleTab2 = () => {
    setTab(2);
  };
  const handleShare = () => {
    navigate("/reportuser");
  };
  const handleFollowers = () => {
    navigate("/followers");
  };

  // measure our elements
  useEffect(() => {
    const target = childRefs.current.get(value);
    const container = tabListRef.current;
    if (target) {
      const cRect = container.getBoundingClientRect();
      if (cRect.width === 0) {
        return;
      }
      const tRect = target.getBoundingClientRect();
      const left = tRect.left - cRect.left;
      const right = cRect.right - tRect.right;
      setSlider({
        hasValue: true,
        left: left + 8,
        right: right + 8,
      });
    }
  }, [value]);
  return (
    <>
      <div
        onClick={() => {
          if (openMenu) setOpenMenu(false);
        }}
        className="justify-center items-center flex flex-col"
      >
        <div className="w-[1000px] overflow-y-auto">
          <div className="w-[999px] h-[223px] rounded-t-[16px] mt-[92px]">
            <div className="group relative flex justify-center ">
              <img src="/assets/png/Rectangle 1907.png" className="" />
              {profileValue === 0 && (
                <div className="hidden group-hover:flex absolute w-[190px] h-[32px] bottom-4 right-4 rounded-full backdrop-blur-3xl bg-[#2525254D] text-[#FAFBFC]  items-center p-3 text-sm space-x-2 cursor-pointer">
                  <img src="/assets/svg/camera1.svg" />
                  <p>Change Cover Photo</p>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-b-[16px] profile-shadow mb-[16px]">
            <div className="bg-[#141517] w-[999px] rounded-b-[16px] border-[1px] border-[#4D4E504D] flex flex-col">
              <div className="flex flex-row mb-[32px] justify-between px-[20px]">
                <div className="flex">
                  <div className="group w-[104px] h-[104px] ml-[20px] mt-[40px]  relative">
                    {profileImage ? (
                      <img
                        src={URL.createObjectURL(profileImage)}
                        className="w-[104px] h-[104px] rounded-full"
                      />
                    ) : (
                      <img
                        src="/assets/svg/Ellipse 1406.svg"
                        className="w-[104px] h-[104px]"
                      />
                    )}
                    {profileValue === 0 && (
                      <img
                        onClick={() => setOpenUploadProfile(true)}
                        src="/assets/svg/Frame 593.svg"
                        className="hidden group-hover:block absolute cursor-pointer w-[28px] h-[28px] ml-[75px] -mt-[30px]"
                      />
                    )}
                  </div>
                  <div className="relative w-[230px] h-[98px] mt-[42px] ml-[32px] text-[#FAFBFC]">
                    <div className="flex justify-center items-center w-full h-[22px] py-[12px] profile-gradient-border rounded-full">
                      <p className="flex justify-center items-center  h-[22px] bg-[#141517] px-[10px] text-[12px] font-normal rounded-full">
                        Pro Esports Athelete At Gamersback
                      </p>
                    </div>
                    <p className="font-semibold text-[20px] leading-7  h-[28px] flex flex-row w-[230px] mt-[16px]">
                      Wade Warren
                      <p className="text-[#B5B9BD] font-normal text-[14px] leading-5 text-right ml-[8px] flex items-center">
                        @warren1994
                      </p>
                    </p>
                    <p
                      onClick={handleFollowers}
                      className="w-[195px] h-[20px] text-[14px] text-[#7D8185] font-normal leading-5 mt-[12px]"
                    >
                      <span className="font-bold cursor-pointer text-[#FAFBFC]">
                        234
                      </span>{" "}
                      Followers
                      <span className="ml-[12px] cursor-pointer font-bold text-[#FAFBFC]">
                        48
                      </span>{" "}
                      Following
                    </p>
                  </div>
                </div>
                <div className="relative h-[32px] mt-[65px] flex flex-row space-x-2 px-4">
                  {/* <p className="bg-[#2B2E30] rounded-md text-[14px] font-normal text-[#FFFFFF] flex justify-center items-center w-[66px] h-[32px]">
                    Lobby
                    </p>
                    <p className="bg-[#2B2E30] rounded-md text-[14px] font-normal text-[#FFFFFF] flex justify-center items-center w-[84px] h-[32px]">
                    Message
                  </p> */}
                  {profileValue !== 0 && (
                    <p
                      className={`bg-typo-blue rounded-md text-[14px] font-normal text-[#FFFFFF] flex justify-center items-center w-[66px] h-[32px]`}
                    >
                      Follow
                    </p>
                  )}
                  <div>
                    <p
                      onClick={() => {
                        setOpenMenu(!openMenu);
                      }}
                      className={`bg-[#2B2E30] rounded-md text-[14px] cursor-pointer font-normal text-[#FFFFFF] flex justify-center items-center  w-[36px] h-[32px]`}
                    >
                      {openMenu ? (
                        <img src="/assets/svg/profieMoreButton.svg" />
                      ) : (
                        <img src="/assets/svg/profileMoreBtn.svg" />
                      )}
                    </p>
                    {openMenu && (
                      <OpenMenu
                        profileValue={profileValue}
                        setShowBlockConfirmation={setShowBlockConfirmation}
                        setShowReportUser={setShowReportUser}
                        handleShare={handleShare}
                      />
                    )}
                  </div>
                </div>
              </div>
              {profileValue !== 2 && (
                <div className="w-[918px] border-b-[1px] border-[#4D4E504D] ml-[40px] mb-[24px]"></div>
              )}
              {profileValue !== 2 && <SocialLinks />}
            </div>
          </div>

          {/* <div className="w-[999px] h-[184px] mt-[18px] bg-[#25252566] rounded-[16px]">
          <div className=" w-[157px] h-[24px] mt-[18px] ml-[24px]   flex flex-row justify-between items-center">
            <img
              src="/assets/svg/Group (6).svg"
              className="w-[24px] h-[24px] mt-[24px]"
            />
            <p className="text-[#FAFBFC] font-semibold mt-[24px] text-[16px] leading-4">
              Story Highlights
            </p>
          </div>
          <div className="flex flex-row space-x-4 justify-center items-center mt-[20px]">
            <img
              src="/assets/svg/Frame 1135.svg"
              className="mt-[23px] ml-[15px]"
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Stories.svg"
              className="mt-[20px] ml-[4px] "
            />
            <img
              src="/assets/svg/Frame 1134.svg"
              className="mt-[23px] ml-[888px] "
            />
          </div>
        </div> */}

          {/* Tabs */}
          <div className="relative border-line mt-[24px]" ref={tabListRef}>
            {tabs.map((tab, i) => (
              <TabItem
                key={tab}
                isActive={i === value}
                transition={{ duration: 0.1 }}
                ref={(el) => childRefs.current.set(i, el)}
                onClick={() => setValue(i)}
              >
                {tab}
              </TabItem>
            ))}
            {slider.hasValue && (
              <Slider
                positionTransition={{
                  bounceDamping: 5,
                }}
                initial={false}
                style={{
                  left: slider.left,
                  right: slider.right,
                }}
              />
            )}
          </div>
          {/* {profileValue === 0 ? ( */}
          <Pager value={value}>
            {tabs.map((tab, i) => (
              <div key={tab} className="w-full h-auto px-3">
                {/* General */}
                {i === 0 && (
                  <div className="bg-[#141517] border-t-[1px] border-l-[1px] border-[#4D4E504D] w-[999px] h-[424px] mt-[16px] rounded-[16px] flex justify-center items-center flex-col mb-[70px]">
                    <img
                      src="/assets/svg/Group 47383 (2).svg"
                      className="w-[121px] h-[64px] "
                    />
                    <h3 className="text-[#FAFBFC] w-[287px] h-[32px] mt-[24px] font-semibold text-[24px] leading-[32px] text-center">
                      There is no post to Show
                    </h3>
                    <p className="text-[#B5B9BD]  w-[287px] h-[40px] mt-[12px] font-normal text-[14px] leading-5 text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    {profileValue === 0 && (
                      <button className="flex flex-row bg-[#2E9BFA] mt-[48px] w-[111px] h-[44px] rounded-[16px] text-[#FFFFFF] justify-center items-center text-[16px] font-semibold leading-6 text-right ">
                        <img
                          src="/assets/svg/Component 14.svg "
                          className="text-[#B5B9BD] m-1"
                        />
                        Upload
                      </button>
                    )}
                  </div>
                )}
                {i == 1 && (
                  <div className="bg-[#141517] border-t-[1px] border-l-[1px] border-[#4D4E504D] w-[999px] h-[424px] rounded-[16px] mb-[70px]">
                    <div className="w-[999px] h-[424px] flex justify-center items-center flex-col">
                      <img
                        src="/assets/svg/Group 47943 (1).svg"
                        className="w-[121px] h-[64px] "
                      />
                      <h3 className="text-[#FAFBFC] w-[287px] h-[32px] mt-[24px] font-semibold text-[24px] leading-[32px] text-center">
                        Account is private
                      </h3>
                      <p className="text-[#B5B9BD]  w-[287px] h-[40px] mt-[12px] font-normal text-[14px] leading-5 text-center">
                        Follow to see their photos & videos
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Pager>

          {/* ) : (
            <div className="flex bg-[#141517] border-t-[1px] border-l-[1px] border-[#4D4E504D] w-[999px] mt-[16px] rounded-[16px] mb-[70px] justify-center items-center py-[20px]">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                className="w-[935px] h-[896px]"
              >
                <Masonry columnsCount={3} gutter="12px">
                  {imgArray.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                      alt=""
                      // onClick={() => setIsPostViewModalOpen(true)}
                    />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          )} */}
        </div>
      </div>

      {/* Models */}
      {openUploadProfile && (
        <UploadProfilePhoto
          onClose={() => setOpenUploadProfile(false)}
          done={(image) => {
            handleSetProfileImage(image);
            setOpenUploadProfile(false);
          }}
        />
      )}

      {showBlockConfirmation && (
        <BlockConfirmation
          setShowBlockConfirmation={setShowBlockConfirmation}
        />
      )}

      {showReportUser && (
        <ShowReportUser
          setShowReportUser={setShowReportUser}
          setOpenMenu={setOpenMenu}
          setShowConfirmation={setShowConfirmation}
          setShowPretend={setShowPretend}
        />
      )}

      {showConfirmation && (
        <ShowConfirmation setShowConfirmation={setShowConfirmation} />
      )}

      {showPretend && (
        <ShowPretend
          setShowPretend={setShowPretend}
          setShowReportUser={setShowReportUser}
          setShowPretendSearch={setShowPretendSearch}
        />
      )}

      {showPretendSearch && (
        <ShowPretendSearch
          setShowPretendSearch={setShowPretendSearch}
          setShowPretend={setShowPretend}
        />
      )}
    </>
  );
}
