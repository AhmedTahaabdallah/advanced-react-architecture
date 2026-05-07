import { BookInfo } from "./book-info";
import { UserInfo } from "./user-info";

function AppCustomHooks() {
  return (
    <>
      <UserInfo userId={"1"}/>
      <BookInfo bookId={"2"}/>
    </>
  );
}

export default AppCustomHooks;
