import styles from "./UserInfo.module.css";

const UserInfo = ({ name, email, password }) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{email}</li>
      <li>{password}</li>
    </ul>
  );
};

export default UserInfo;
