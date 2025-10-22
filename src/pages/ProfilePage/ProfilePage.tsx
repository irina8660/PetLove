import { useSelector } from "react-redux";
import UserCard from "../../components/UserCard/UserCard";
import { selectCurrentUserFull } from "../../redux/users/selectors";

const ProfilePage = () => {
  const user = useSelector(selectCurrentUserFull);
  console.log(user);

  return (
    <div>
      <UserCard user={user} />
    </div>
  );
};

export default ProfilePage;
