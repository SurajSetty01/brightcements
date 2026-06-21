export function ContactInfo() {
  return (
    <div className="p-6 md:p-8 mb-8 flex-1">
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-800 font-medium text-base mb-2">Email:</h3>
          <a
            href="mailto:info@brightcements.com"
            className="text-[#5D187E] text-lg hover:underline"
          >
            info@brightcements.com
          </a>
        </div>
        <div>
          <h3 className="text-gray-800 font-medium text-base mb-2">
            Customer service:
          </h3>
          <a
            href="tel:9490877563"
            className="text-[#5D187E] text-lg hover:underline"
          >
            9743414666
          </a>
        </div>
        <div>
          <h3 className="text-gray-800 font-medium text-base mb-2">
            Corporate Address:
          </h3>
          <p className="text-[#5D187E] text-base">
            135, 7th Main Rd, 4th Block, Jayanagar,
            <br />
            Bengaluru, Karnataka 560011
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 font-medium text-base mb-2">
            Regional Office:
          </h3>
          <p className="text-[#5D187E] text-base">
            Aparna Green,Flat No. 105,
            <br />
            Nanakaramgudu Circle,Hyderabad- 32
          </p>
        </div>
        <div>
          <h3 className="text-gray-800 font-medium text-base mb-2">
            Project Location:
          </h3>
          <p className="text-[#5D187E] text-base">
            Raghunadhapalem village, Mattampally
            <br />
            Mandalam, Suryapet District, Telangana State.
          </p>
        </div>
      </div>
    </div>
  );
}
