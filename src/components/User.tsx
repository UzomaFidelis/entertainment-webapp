import Image from "next/image";

const User = () => {
  return (
    <div className="rounded-full border border-white">
      <Image
        src="/assets/user.png"
        alt=""
        width={22}
        height={22}
        className="md:w-[1.85rem] md:h-[1.85rem] lg:w-[2.1rem] lg:h-[2.1rem]"
      />
    </div>
  );
};

export default User;
