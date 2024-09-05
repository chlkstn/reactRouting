import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams();

  return (
    <>
      <p> UseProfile: {id}</p>
    </>
  );
};

export default UserProfile;
