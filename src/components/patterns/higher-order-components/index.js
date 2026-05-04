import styled from "styled-components";
import { BookInfoForm } from "./book-form";
// import { checkProps } from "./check-props";
// import { includeUser } from "./include-user";
import { UserInfoForm } from "./user-form";
// import { UserInfo } from "./user-info";

// const UserInfoWrapper = checkProps(UserInfo);
// const UserInfoLoadingWrapper = includeUser(UserInfo, '2');

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  align-items: flex-start;
`;

function AppHigherOrderComponents() {
  return (
    <AppContent>
      {/* <UserInfoWrapper test='test23' a='3' b='4'/> */}

      {/* <UserInfoLoadingWrapper/> */}

      <UserInfoForm />
      <BookInfoForm />
    </AppContent>
  );
}

export default AppHigherOrderComponents;
