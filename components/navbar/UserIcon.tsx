import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';
import { FaUserLarge } from 'react-icons/fa6';
const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <Image
        src={profileImage}
        width={100}
        height={100}
        alt="image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }
  return <FaUserLarge />;
};

export default UserIcon;
