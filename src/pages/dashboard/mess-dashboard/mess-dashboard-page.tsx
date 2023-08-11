import { USERS } from "../../../features/faker/fake-user";

const MessDashboardPage = () => {
  console.log("Users", USERS);
  return (
    <div>
      {USERS.map((user) => (
        <div key={user._id}>
          {user.firstName} {user.lastName}
          <img src={user.avatar} height={50} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MessDashboardPage;
