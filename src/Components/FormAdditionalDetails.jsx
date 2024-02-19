import React, { useState } from "react";
import "../Styles/FormAdditionalDetails.css";
import InputImg from "../assets/Input1.png";
import InputImg2 from "../assets/Input.png";
import Swal from "sweetalert2";

const SocialMediaContainer = ({
  platform,
  onChange,
  platformClassName,
  formData,
}) => {
  const [haveChecked, setHaveChecked] = useState(false);
  const [wantChecked, setWantChecked] = useState(false);

  const handleHaveChange = () => {
    setHaveChecked(!haveChecked);
    if (!wantChecked) {
      onChange({
        target: {
          name: `platform['${platform}']['have']`,
          type: "checkbox",
          checked: !haveChecked,
        },
      });
    }
  };

  const handleWantChange = () => {
    setWantChecked(!wantChecked);
    if (!haveChecked) {
      onChange({
        target: {
          name: `platform['${platform}']['want']`,
          type: "checkbox",
          checked: !wantChecked,
        },
      });
    }
  };

  const getPlatformIcon = () => {
    const platformData = formData.platform[platform];
    return (
      <div className="platform-icon-container">
        {platformData.icon && (
          <>
            <div className="platform-icon">{platformData.icon}</div>
            <h3 className={`${platform.toLowerCase()}-name platform-name`}>
              {platform}
            </h3>
          </>
        )}
      </div>
    );
  };

  return (
    <div className={`${platformClassName}-container platform-container`}>
      {getPlatformIcon()}
      <label>
        <input
          type="checkbox"
          name={`platform['${platform}']['have']`}
          checked={haveChecked}
          onChange={handleHaveChange}
          style={{ display: "none" }}
        />
        {haveChecked ? (
          <img
            className="additional-checkbox-input"
            src={InputImg2}
            alt="Checked Image"
          />
        ) : (
          <img
            className="additional-checkbox-input"
            src={InputImg}
            alt="Unchecked Image"
          />
        )}
      </label>
      <label>
        <input
          type="checkbox"
          name={`platform['${platform}']['want']`}
          checked={wantChecked}
          onChange={handleWantChange}
          style={{ display: "none" }}
        />
        {wantChecked ? (
          <img
            className="additional-checkbox-input"
            src={InputImg2}
            alt="Checked Image"
          />
        ) : (
          <img
            className="additional-checkbox-input"
            src={InputImg}
            alt="Unchecked Image"
          />
        )}
      </label>
      <input
        placeholder="Paste here"
        className={`add-text-input ${platformClassName}-text-input`}
        type="text"
        name={`platform['${platform}']['link']`}
        onChange={onChange}
      />
    </div>
  );
};

function FormAdditionalDetails({
  bestAgencyForm,
  ChangeIsValid,
  setIsFormSubmitted,
}) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [formData, setFormData] = useState({
    platform: {
      Facebook: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M24 11.9923C23.9999 9.70044 23.3427 7.45661 22.1063 5.52644C20.8698 3.59628 19.1058 2.06061 17.0231 1.10126C14.9405 0.141904 12.6264 -0.200961 10.3548 0.113254C8.08319 0.42747 5.94925 1.38561 4.20562 2.87423C2.46199 4.36285 1.18168 6.31962 0.516267 8.51286C-0.149144 10.7061 -0.171786 13.044 0.45102 15.2497C1.07383 17.4554 2.316 19.4365 4.03047 20.9586C5.74495 22.4807 7.85992 23.4799 10.125 23.838V15.4582H7.077V11.9923H10.125V9.35089C10.125 6.35273 11.925 4.68575 14.658 4.68575C15.5625 4.6976 16.4649 4.77576 17.358 4.91961V7.8698H15.858C14.358 7.8698 13.902 8.79324 13.902 9.74365V11.9923H17.202L16.671 15.4582H13.875V23.853C16.7001 23.4064 19.2727 21.9659 21.1291 19.7913C22.9855 17.6166 24.0037 14.8508 24 11.9923Z"
              fill="url(#paint0_linear_1_797)"
            />
            <path
              d="M16.6709 15.458L17.2019 11.9921H13.8749V9.74345C13.8749 8.79303 14.3399 7.8696 15.8309 7.8696H17.3309V4.9194C16.4378 4.77556 15.5354 4.6974 14.6309 4.68555C11.8889 4.68555 10.0979 6.34353 10.0979 9.35069V11.9921H7.0769V15.458H10.1249V23.8528C11.3672 24.0487 12.6326 24.0487 13.8749 23.8528V15.458H16.6709Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_797"
                x1="3.516"
                y1="3.51347"
                x2="20.4736"
                y2="20.4815"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5171B7" />
                <stop offset="0.23" stopColor="#4D68B2" />
                <stop offset="0.62" stopColor="#4350A3" />
                <stop offset="1" stopColor="#353191" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      Instagram: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="url(#paint0_linear_1_812)"
            />
            <path
              d="M15.7259 7.46094C15.5627 7.46094 15.4032 7.50932 15.2675 7.59998C15.1319 7.69063 15.0261 7.81947 14.9637 7.97022C14.9012 8.12097 14.8849 8.28685 14.9167 8.44689C14.9486 8.60692 15.0271 8.75392 15.1425 8.8693C15.2579 8.98468 15.4049 9.06325 15.5649 9.09509C15.725 9.12692 15.8908 9.11058 16.0416 9.04814C16.1923 8.9857 16.3212 8.87995 16.4118 8.74428C16.5025 8.60861 16.5509 8.44911 16.5509 8.28594C16.5509 8.06713 16.464 7.85729 16.3092 7.70257C16.1545 7.54786 15.9447 7.46094 15.7259 7.46094Z"
              fill="white"
            />
            <path
              d="M12.057 8.51685C11.3717 8.51685 10.7018 8.72006 10.132 9.1008C9.56217 9.48154 9.11806 10.0227 8.8558 10.6558C8.59354 11.289 8.52492 11.9857 8.65862 12.6578C8.79232 13.33 9.12233 13.9474 9.60692 14.432C10.0915 14.9166 10.7089 15.2466 11.3811 15.3803C12.0532 15.514 12.7499 15.4453 13.383 15.1831C14.0162 14.9208 14.5573 14.4767 14.9381 13.9069C15.3188 13.3371 15.522 12.6672 15.522 11.9818C15.5205 11.0634 15.1549 10.1829 14.5054 9.53347C13.8559 8.884 12.9755 8.51843 12.057 8.51685ZM12.057 14.2168C11.618 14.2168 11.1888 14.0866 10.8237 13.8427C10.4586 13.5988 10.1741 13.2521 10.006 12.8464C9.838 12.4408 9.79404 11.9944 9.8797 11.5637C9.96536 11.1331 10.1768 10.7375 10.4873 10.4271C10.7977 10.1166 11.1933 9.90516 11.6239 9.8195C12.0546 9.73384 12.5009 9.77781 12.9066 9.94583C13.3123 10.1139 13.659 10.3984 13.9029 10.7635C14.1468 11.1286 14.277 11.5578 14.277 11.9968C14.2723 12.5828 14.0364 13.1431 13.6207 13.5561C13.2049 13.969 12.643 14.2011 12.057 14.2018V14.2168Z"
              fill="white"
            />
            <path
              d="M14.8081 19.017H9.19209C8.07178 19.0162 6.99754 18.571 6.20508 17.7791C5.41263 16.9873 4.96668 15.9133 4.96509 14.793V9.17402C4.96588 8.0532 5.41148 6.9785 6.20403 6.18596C6.99657 5.39341 8.07126 4.94782 9.19209 4.94702H14.8081C15.9289 4.94782 17.0036 5.39341 17.7962 6.18596C18.5887 6.9785 19.0343 8.0532 19.0351 9.17402V14.793C19.0335 15.9133 18.5876 16.9873 17.7951 17.7791C17.0026 18.571 15.9284 19.0162 14.8081 19.017ZM9.19209 6.27302C8.42474 6.27698 7.69009 6.58418 7.14833 7.12762C6.60657 7.67106 6.30166 8.40667 6.30009 9.17402V14.793C6.30008 15.5614 6.60429 16.2986 7.14622 16.8433C7.68815 17.388 8.42371 17.6961 9.19209 17.7H14.8081C15.5765 17.6961 16.312 17.388 16.854 16.8433C17.3959 16.2986 17.7001 15.5614 17.7001 14.793V9.17402C17.6985 8.4046 17.3919 7.66718 16.8476 7.1234C16.3032 6.57961 15.5655 6.27381 14.7961 6.27302H9.19209Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_812"
                x1="20.484"
                y1="3.516"
                x2="3.516"
                y2="20.484"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFE187" />
                <stop offset="0.21" stopColor="#FDB944" />
                <stop offset="0.38" stopColor="#F05577" />
                <stop offset="0.52" stopColor="#ED3995" />
                <stop offset="0.74" stopColor="#8E509F" />
                <stop offset="1" stopColor="#5E5DA9" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      Linkedin: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1_829)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="url(#paint0_linear_1_829)"
              />
              <path
                d="M6.96896 9.76496H9.29996V17.232H6.96896V9.76496ZM8.12996 6.05396C8.39637 6.05396 8.6568 6.13296 8.87831 6.28097C9.09983 6.42898 9.27248 6.63935 9.37443 6.88548C9.47638 7.13162 9.50305 7.40245 9.45108 7.66375C9.39911 7.92504 9.27082 8.16505 9.08243 8.35343C8.89405 8.54181 8.65404 8.6701 8.39275 8.72208C8.13146 8.77405 7.86062 8.74738 7.61449 8.64542C7.36836 8.54347 7.15798 8.37082 7.00997 8.14931C6.86196 7.9278 6.78296 7.66737 6.78296 7.40096C6.78257 7.22396 6.81714 7.04862 6.88469 6.88502C6.95224 6.72141 7.05145 6.57276 7.17661 6.4476C7.30177 6.32244 7.45042 6.22324 7.61402 6.15569C7.77762 6.08813 7.95296 6.05356 8.12996 6.05396Z"
                fill="white"
              />
              <path
                d="M10.749 9.76489H12.975V10.7999H13.005C13.2288 10.4204 13.551 10.1085 13.9376 9.89722C14.3242 9.68596 14.7608 9.58322 15.201 9.59989C17.55 9.59989 17.985 11.1479 17.985 13.1579V17.2319H15.666V13.6019C15.666 12.7349 15.648 11.6219 14.466 11.6219C13.284 11.6219 13.074 12.5639 13.074 13.5389V17.2319H10.749V9.76489Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_829"
                x1="20.484"
                y1="3.516"
                x2="3.516"
                y2="20.484"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#007CB7" />
                <stop offset="1" stopColor="#325AA9" />
              </linearGradient>
              <clipPath id="clip0_1_829">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      Google: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="12" fill="#E1ECFF" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 15 14"
              fill="none"
            >
              <g clipPath="url(#clip0_1_847)">
                <path
                  d="M13.3572 3.64575H1.93126C1.65978 3.64575 1.4397 3.87173 1.4397 4.1505V12.6685C1.4397 12.9473 1.65978 13.1733 1.93126 13.1733H13.3572C13.6287 13.1733 13.8488 12.9473 13.8488 12.6685V4.1505C13.8488 3.87173 13.6287 3.64575 13.3572 3.64575Z"
                  fill="#4989F5"
                />
                <path
                  d="M13.2137 3.57422H2.06086C1.71537 3.57422 1.44653 6.31967 1.44653 6.67441L7.55418 13.1733H13.2137C13.5603 13.1723 13.8409 12.8841 13.8419 12.5283V4.21911C13.8409 3.86333 13.5602 3.57519 13.2137 3.57422Z"
                  fill="url(#paint0_linear_1_847)"
                />
                <path
                  d="M4.27319 5.2415H7.81865V0.463379H4.80408L4.27319 5.2415Z"
                  fill="#3C4BA6"
                />
                <path
                  d="M11.3641 5.2415H7.8186V0.463379H10.8332L11.3641 5.2415ZM13.8488 1.36913L13.8532 1.38542C13.8521 1.37967 13.85 1.37433 13.8488 1.36913Z"
                  fill="#7BABF7"
                />
                <path
                  d="M13.8533 1.38517L13.8489 1.36889C13.7365 0.840367 13.2809 0.463477 12.7541 0.463135H10.8333L11.3637 5.24139H14.9092L13.8533 1.38517Z"
                  fill="#3F51B5"
                />
                <path
                  d="M1.78833 1.36914L1.78394 1.38543C1.785 1.37968 1.78713 1.37434 1.78833 1.36914Z"
                  fill="#7BABF7"
                />
                <path
                  d="M1.78387 1.38517L1.78827 1.36889C1.90067 0.840367 2.35624 0.463477 2.88309 0.463135H4.80403L4.27275 5.24139H0.727295L1.78387 1.38517Z"
                  fill="#7BABF7"
                />
                <path
                  fillRule="evenodd"
                  d="M4.27905 5.24023C4.27905 6.24496 3.48582 7.05947 2.50732 7.05947C1.52883 7.05947 0.735596 6.24496 0.735596 5.24023H4.27905Z"
                  fill="#709BE0"
                />
                <path
                  fillRule="evenodd"
                  d="M7.82251 5.24023C7.82251 6.24496 7.02927 7.05947 6.05078 7.05947C5.07229 7.05947 4.27905 6.24496 4.27905 5.24023H7.82251Z"
                  fill="#3C4BA6"
                />
                <path
                  fillRule="evenodd"
                  d="M11.366 5.24023C11.366 6.24496 10.5727 7.05947 9.59424 7.05947C8.61575 7.05947 7.82251 6.24496 7.82251 5.24023H11.366Z"
                  fill="#709BE0"
                />
                <path
                  fillRule="evenodd"
                  d="M14.9092 5.24023C14.9092 6.24496 14.1159 7.05947 13.1375 7.05947C12.159 7.05947 11.3657 6.24496 11.3657 5.24023H14.9092Z"
                  fill="#3C4BA6"
                />
                <path
                  d="M13.1375 10.169C13.1313 10.0824 13.1209 10.0033 13.1061 9.90227H11.1734C11.1734 10.1798 11.1734 10.4827 11.1723 10.7604H12.292C12.2682 10.8898 12.2197 11.0131 12.1494 11.1233C12.079 11.2334 11.9882 11.3282 11.8821 11.4021C11.8821 11.4021 11.8821 11.3973 11.8813 11.3972C11.7443 11.4896 11.5899 11.5515 11.4281 11.5788C11.2659 11.6093 11.0997 11.6085 10.9377 11.5766C10.7733 11.5417 10.6177 11.4724 10.4804 11.3731C10.2779 11.2256 10.1216 11.0206 10.0309 10.7832C10.0239 10.7648 10.0175 10.7462 10.011 10.7273V10.7252L10.0127 10.7238C9.92465 10.4584 9.92441 10.1705 10.0121 9.90487C10.0738 9.71854 10.1754 9.54878 10.3094 9.40806C10.6238 9.07413 11.0935 8.94853 11.5266 9.0826C11.6927 9.1349 11.8444 9.22661 11.9695 9.3503L12.3473 8.96244C12.4139 8.89332 12.4831 8.8264 12.5472 8.75495C12.3557 8.57151 12.1308 8.42855 11.8856 8.33424C11.4392 8.16803 10.9508 8.16364 10.5016 8.32179C10.486 8.32726 10.4704 8.33297 10.455 8.33889C9.97039 8.52595 9.57174 8.89281 9.33776 9.367C9.25514 9.53484 9.19497 9.71337 9.15889 9.89775C8.94494 10.9895 9.59372 12.0642 10.6412 12.3531C10.9836 12.4472 11.3476 12.4449 11.6927 12.3644C12.0062 12.2917 12.2961 12.137 12.5343 11.9154C12.7827 11.6806 12.9608 11.3679 13.0541 11.0358C13.1321 10.7543 13.1604 10.4607 13.1375 10.169Z"
                  fill="white"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_1_847"
                  x1="1.44653"
                  y1="4460.77"
                  x2="13190"
                  y2="4460.77"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03" stopColor="#4079D8" />
                  <stop offset="1" stopColor="#4989F5" />
                </linearGradient>
                <clipPath id="clip0_1_847">
                  <rect
                    width="14.1818"
                    height="12.7273"
                    fill="white"
                    transform="translate(0.727295 0.45459)"
                  />
                </clipPath>
              </defs>
            </svg>
          </svg>
        ),
      },
      "X/Twitter": {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect width="24" height="24" rx="12" fill="black" />
            <path
              fillRule="evenodd"
              d="M5.08572 5.11949C5.13287 5.18521 6.22489 6.73767 7.51244 8.56938C8.79999 10.4011 9.99085 12.0951 10.1588 12.3337C10.3268 12.5724 10.4642 12.7725 10.4642 12.7783C10.4642 12.7842 10.4016 12.8595 10.3252 12.9457C10.2488 13.0319 10.0335 13.2759 9.84677 13.4879C9.66007 13.6999 9.34534 14.0572 9.14737 14.2819C8.94941 14.5067 8.60114 14.9021 8.37342 15.1608C8.14572 15.4194 7.73625 15.8844 7.46348 16.1941C6.61985 17.152 6.49811 17.2904 5.85591 18.0209C5.513 18.411 5.18418 18.784 5.1252 18.8498C5.06622 18.9155 5.01796 18.9763 5.01796 18.9847C5.01796 18.9946 5.23335 19 5.6248 19H6.23162L6.89876 18.2406C7.26569 17.823 7.62765 17.4119 7.70311 17.3271C7.86629 17.1437 9.11071 15.7295 9.21531 15.6085C9.25536 15.5622 9.31353 15.4963 9.34459 15.4621C9.37565 15.4278 9.62048 15.15 9.88866 14.8447C10.1568 14.5394 10.3836 14.2822 10.3926 14.273C10.4016 14.2639 10.5435 14.1026 10.7081 13.9145C10.8726 13.7265 11.0123 13.5727 11.0185 13.5727C11.0247 13.5727 11.8698 14.7678 12.8966 16.2285C13.9233 17.6892 14.7817 18.9102 14.8041 18.9419L14.8448 18.9993L16.9264 18.9997C18.6381 18.9999 19.0065 18.9964 18.9999 18.9798C18.993 18.9621 17.9957 17.5413 15.4372 13.9042C13.5954 11.2859 13.3505 10.934 13.3575 10.9162C13.3643 10.8988 13.6152 10.6122 15.2645 8.73771C15.5474 8.41617 15.9374 7.97269 16.1312 7.7522C16.3249 7.53172 16.5205 7.30969 16.5659 7.25881C16.6112 7.20793 16.8496 6.93733 17.0957 6.65749C17.3417 6.37764 17.7599 5.90214 18.0251 5.60081C18.2903 5.29949 18.517 5.04104 18.5289 5.02647C18.5493 5.00154 18.5146 5 17.9342 5H17.3178L17.0437 5.31222C16.6788 5.72775 16.0192 6.47708 15.832 6.68882C15.7492 6.78238 15.646 6.89996 15.6026 6.9501C15.5592 7.00024 15.4735 7.09715 15.4122 7.16545C15.351 7.23376 15.0422 7.58453 14.7261 7.94493C14.41 8.30534 14.147 8.60369 14.1417 8.60793C14.1364 8.61217 14.0687 8.68891 13.9912 8.77847C13.8557 8.93513 13.7177 9.09193 13.0851 9.80849C12.8074 10.123 12.7932 10.1365 12.7698 10.1076C12.7563 10.091 11.9426 8.935 10.9615 7.53883L9.17762 5.00032L7.08881 5.00015L5 5L5.08572 5.11949ZM6.716 5.95197C6.73169 5.97536 7.12196 6.52181 7.58328 7.1663C8.45819 8.38862 11.8963 13.1947 14.1073 16.2863C14.8139 17.2743 15.4006 18.0913 15.4111 18.102C15.4262 18.1172 15.6319 18.1205 16.3724 18.1174L17.3145 18.1134L14.8492 14.6674C13.4932 12.7721 11.5301 10.028 10.4866 8.56938L8.5893 5.9174L7.6384 5.91342L6.68751 5.90945L6.716 5.95197Z"
              fill="white"
            />
          </svg>
        ),
      },
      YouTube: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1_889)">
              <path
                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                fill="url(#paint0_linear_1_889)"
              />
              <path
                d="M18.426 10.254C18.426 9.87556 18.3514 9.50082 18.2065 9.1512C18.0616 8.80159 17.8492 8.48397 17.5814 8.2165C17.3136 7.94902 16.9958 7.73695 16.646 7.59239C16.2963 7.44783 15.9215 7.37363 15.543 7.37403H8.17499C7.79653 7.37363 7.42171 7.44783 7.07194 7.59239C6.72218 7.73695 6.40434 7.94902 6.13659 8.2165C5.86883 8.48397 5.65643 8.80159 5.51151 9.1512C5.36658 9.50082 5.29199 9.87556 5.29199 10.254V13.683C5.29199 14.4476 5.59574 15.1809 6.1364 15.7216C6.67707 16.2623 7.41037 16.566 8.17499 16.566H15.543C16.3076 16.566 17.0409 16.2623 17.5816 15.7216C18.1222 15.1809 18.426 14.4476 18.426 13.683V10.254ZM14.1 12.228L10.8 13.86C10.671 13.932 10.23 13.836 10.23 13.689V10.335C10.23 10.185 10.674 10.092 10.803 10.167L13.965 11.886C14.1 11.961 14.226 12.153 14.1 12.228Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_889"
                x1="20.484"
                y1="3.516"
                x2="3.516"
                y2="20.484"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EE2E2F" />
                <stop offset="1" stopColor="#9C1C1F" />
              </linearGradient>
              <clipPath id="clip0_1_889">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      Pinterest: {
        have: false,
        want: false,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clipPath="url(#clip0_1_904)">
              <path
                d="M16.5918 23.0863C22.7147 20.5501 25.6223 13.5305 23.0861 7.40752C20.5499 1.28459 13.5303 -1.62303 7.40735 0.91317C1.28442 3.44937 -1.6232 10.469 0.913002 16.5919C3.44921 22.7149 10.4688 25.6225 16.5918 23.0863Z"
                fill="url(#paint0_linear_1_904)"
              />
              <path
                fillRule="evenodd"
                d="M11.0759 14.6099L11.0429 14.7209C10.5089 16.8209 10.4429 17.2829 9.8999 18.2579C9.63296 18.7196 9.33213 19.1608 8.9999 19.5779C8.9639 19.6259 8.9309 19.6859 8.8559 19.6709C8.7809 19.6559 8.7689 19.5809 8.7599 19.5179C8.66806 18.8823 8.62993 18.24 8.6459 17.5979C8.6729 16.7609 8.77489 16.4729 9.8459 11.9339C9.85864 11.87 9.85022 11.8036 9.8219 11.7449C9.55325 11.0671 9.52362 10.3179 9.73789 9.62093C10.2269 8.07293 11.9819 7.95593 12.2879 9.23393C12.4769 10.0229 11.9879 11.0579 11.5949 12.5849C11.2769 13.8479 12.7619 14.7449 14.0309 13.8239C15.2009 12.9749 15.6539 10.9379 15.5669 9.49793C15.4229 6.62093 12.2699 5.99993 10.2689 6.92693C7.97389 7.98593 7.45189 10.8269 8.4899 12.1289C8.6189 12.2939 8.7209 12.3929 8.6789 12.5609C8.6099 12.8219 8.5529 13.0829 8.4809 13.3439C8.47159 13.3867 8.45233 13.4268 8.42468 13.4607C8.39703 13.4947 8.36177 13.5217 8.32175 13.5395C8.28173 13.5574 8.23807 13.5655 8.19432 13.5633C8.15056 13.5611 8.10794 13.5487 8.0699 13.5269C7.69512 13.3732 7.36574 13.1264 7.11289 12.8099C6.23389 11.7209 5.98189 9.56693 7.1459 7.74293C8.43289 5.72393 10.8299 4.90493 13.0169 5.15393C15.6299 5.45393 17.2799 7.23593 17.5919 9.26093C17.7329 10.1849 17.6309 12.4589 16.3349 14.0609C14.8349 15.9089 12.4349 16.0319 11.3159 14.8979C11.2308 14.8063 11.1507 14.7101 11.0759 14.6099Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_904"
                x1="20.4833"
                y1="3.51523"
                x2="3.51529"
                y2="20.4832"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F0524A" />
                <stop offset="1" stopColor="#ED1940" />
              </linearGradient>
              <clipPath id="clip0_1_904">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    const inputValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      platform: {
        ...prevData.platform,
        [name.split("['")[1].split("']")[0]]: {
          ...prevData.platform[name.split("['")[1].split("']")[0]],
          [name.split("']")[1].split("']")[0]]: inputValue,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsFormSubmitted(false);

    bestAgencyForm({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "Subject",
    });

    setButtonClicked(true);
    Swal.fire({
      title: "Your Form was sent",
      text: "Thanks for contacting us!",
      icon: "success",
      confirmButtonText: "Done",
      didClose: () => {
        ChangeIsValid(false);
      },
      customClass: {
        confirmButton: "sweet-alert-btn",
      },
    });
  };

  // Main Conatainer

  return (
    <div
      style={{ display: buttonClicked && "none" }}
      className="additional-details-container"
    >
      <div className="additional-top-container">
        <h1>Additional Details</h1>
        <p>What’s the best date and time to give you a call?</p>
      </div>
      <form onSubmit={handleSubmit} className="additional-form">
        <select
          className="looking-for-select"
          defaultValue={1}
          name="looking-for"
        >
          <option value="1" disabled>
            What Are You Looking For?
          </option>
          <option>Grow Followers</option>
          <option>Increase Leads</option>
          <option>Strengthen Engagement</option>
          <option>Built Brand Awareness</option>
          <option>Learn More About Social Media</option>
          <option>Basic Presence</option>
        </select>
        <p>
          Which platforms are you currently using and which platforms would you
          like to target?
        </p>
        <div className="additional-headers">
          <h2 className="platform">Platform</h2>
          <h2 className="have">Have</h2>
          <h2 className="want">Want</h2>
          <h2 className="handel">Handel/Link</h2>
        </div>
        <div className="additional-social-options">
          {Object.keys(formData.platform).map((platform, index) => (
            <SocialMediaContainer
              key={index}
              platform={platform}
              platformClassName={`${platform.toLowerCase()}`}
              onChange={handleInputChange}
              formData={formData}
            />
          ))}
        </div>
        <textarea
          name="looking-for-textbox"
          placeholder="What Are You Looking For?"
          className="additional-text-area"
        ></textarea>
        <button>Send Additional Details</button>
      </form>
    </div>
  );
}

export default FormAdditionalDetails;
