import { useNavigate } from "react-router";
import { Checkout_Button } from "./Checkout_Button";
import { Checkout_inputBox } from "./Checkout_inputBox";
import { Checkout_Line } from "./Checkout_Line";
import axios from "axios";
export const Checkout_Body = () => {
  const address = async () => {
    const message = await axios.post(
      "https://eclypse-y4mn.onrender.com/api/address"
    );
    console.log(message);
    navigate("/");
  };

  const Place_order = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  return (
    <div className="mt-[70px] ml-[55px] relative">
      {/* Header with back arrow and title */}
      <div className="flex items-center space-x-4 w-auto mb-8 ">
        <svg
          onClick={() => navigate("/")}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[38px] h-[38px] cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <div className="font-['Helvetica Neue'] font-normal text-[25px] leading-[100%]">
          Shipping Address
        </div>
      </div>

      {/* Main content container with flex layout */}
      <div className="flex gap-6">
        {/* Left section - Address Form */}
        <div className="relative w-[731px] h-[625px] rounded-[9px] border-[3px] border-[#C3C3C3]">
          {/* Add New Address section */}
          <div className="absolute flex items-center top-[32px] left-[45px]">
            <div className="w-[39.84px] h-[39.84px] border-[1px] rounded-full border-[#F63030] flex items-center justify-center">
              <div className="w-[16px] h-[16px] rounded-full bg-[#F63030]"></div>
            </div>
            <div className="ml-[20px] w-[203px] h-[30px] font-[Helvetica\ Neue] font-normal text-[25px] leading-[100%] tracking-[0]">
              Add New Address
            </div>
          </div>

          {/* Input fields row 1 */}
          <div className="absolute top-[98px] left-[45px] flex gap-[35px]">
            <Checkout_inputBox
              width="303px"
              left="0px"
              label="First Name"
              top="30px"
              labelTop="0px"
            />
            <Checkout_inputBox
              left="338px"
              width="303px"
              label="Last Name"
              top="30px"
              labelTop="0px"
            />
          </div>

          <div className="absolute top-[221px] left-[45px]">
            <Checkout_inputBox
              label="Street Address"
              left="0px"
              width="641px"
              top="30px"
              labelTop="0px"
            />
          </div>

          <div className="absolute top-[344px] left-[45px] flex gap-[16px]">
            <Checkout_inputBox
              label="Apt Number"
              top="30px"
              left="0px"
              width="203px"
              labelTop="0px"
            />
            <Checkout_inputBox
              label="State"
              top="30px"
              left="230px"
              width="203px"
              labelTop="0px"
            />
            <Checkout_inputBox
              label="Zip"
              top="30px"
              left="450px"
              width="203px"
              labelTop="0px"
            />
          </div>

          <div className="absolute bottom-[77px] left-[45px] flex gap-[28px]">
            <Checkout_Button
              onClick={() => {}}
              width="203px"
              top="1px"
              left="-70px"
              borderColor="black"
              text="cancel"
              backgroundColor="transparent"
              color="black"
            />
            <Checkout_Button
              onClick={address}
              width="410px"
              top="0px"
              left="231px"
              borderColor="black"
              text="Save This Address"
              backgroundColor="#000000"
              color="white"
            />
          </div>
        </div>

        {/* Right section - Order Summary */}
        <div className="relative w-[572px] h-[625px] rounded-[9px] bg-[#F0F0F0] shadow-[0px_0px_4px_0px_#00000040]">
          <div className="absolute w-[479px] h-[54px] top-[26px] left-[40px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[151%] tracking-[0]">
            By placing your order, you agree to our company,
            <span className="font-[Helvetica\ Neue] font-normal text-[18px] leading-[151%] tracking-[0]">
              Privacy policy
            </span>
            and Conditions of use.
          </div>

          <div className="absolute top-[108px] left-[37px] w-[497px]">
            <Checkout_Line
              width="497px"
              top="0px"
              left="0px"
              borderColor="#B0B0B0"
            />
          </div>

          {/* Order Summary Title */}
          <div className="absolute w-[178px] h-[30px] top-[136px] left-[40px] font-[Helvetica\ Neue] font-normal text-[25px] leading-[100%] tracking-[0]">
            Order Summary
          </div>

          {/* Order items */}
          <div className="absolute top-[211px] left-[40px] w-[497px] flex justify-between">
            <div className="text-[#575757] w-[327px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0]">
              Items - Silhouette No. 1 – Vermilion
            </div>
            <div className="text-[#575757] w-[207px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0] text-right">
              7,999
            </div>
          </div>

          {/* Shipping */}
          <div className="absolute top-[250px] left-[40px] w-[497px] flex justify-between">
            <div className="text-[#575757] w-[207px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0]">
              Shipping and handling:
            </div>
            <div className="text-[#575757] w-[207px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0] text-right">
              200
            </div>
          </div>

          {/* Before tax */}
          <div className="absolute top-[289px] left-[40px] w-[497px] flex justify-between">
            <div className="text-[#575757] w-[97px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0]">
              Before tax:
            </div>
            <div className="text-[#575757] w-[207px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0] text-right">
              6,599
            </div>
          </div>

          {/* Tax */}
          <div className="absolute top-[328px] left-[40px] w-[497px] flex justify-between">
            <div className="text-[#575757] w-[129px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0]">
              Tax Collected:
            </div>
            <div className="text-[#575757] w-[207px] h-[21px] font-[Helvetica\ Neue] font-normal text-[18px] leading-[100%] tracking-[0] text-right">
              1,400
            </div>
          </div>

          {/* Divider line */}
          <div className="absolute top-[421px] left-[31px] w-[497px]">
            <Checkout_Line
              width="497px"
              top="0px"
              borderColor="#B0B0B0"
              left="0px"
            />
          </div>

          {/* Order Total */}
          <div className="absolute top-[441px] left-[40px] w-[497px] flex justify-between">
            <div className="w-[131px] h-[30px] font-[Helvetica\ Neue] font-normal text-[25px] leading-[100%] tracking-[0]">
              Order Total:
            </div>
            <div className="w-[63px] h-[30px] font-[Helvetica\ Neue] font-normal text-[25px] leading-[100%] tracking-[0] text-right">
              8,199
            </div>
          </div>

          {/* Place Order Button */}
          <div className="absolute bottom-[77px] left-[81px]">
            <Checkout_Button
              onClick={Place_order}
              width="410px"
              top="0px"
              left="0px"
              text="Place Order"
              color="white"
              backgroundColor="black"
              borderColor="black"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
