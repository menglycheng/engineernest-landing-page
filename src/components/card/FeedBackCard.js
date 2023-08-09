import Image from "next/image";
const FeedBackCard = () => {
  return (
    <div className="flex-none hover:drop-shadow-lg my-2 w- md:w-96 h-32 sm:h-40 mt-5 rounded-lg bg-gray p-5 hover:bg-blue hover:text-white">
      <div className="flex justify-start gap-3 items-center">
        <Image
          className="rounded-full w-11 h-11 object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1400&q=60"
          width={80}
          height={80}
          alt=""
        />
        <div>
          <h3 className="text-sm sm:text-base font-bold ">Mengly Cheng</h3>
          <p className="text-xs sm:text-sm">Chief Manager</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm mt-3">
        Connected with a brilliant software engineer effortlessly
      </p>
    </div>
  );
};

export default FeedBackCard;
