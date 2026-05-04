import axios from "axios";
import { BookInfo } from "./book-info";
import { DataSource } from "./data-source";
import { UserInfo } from "./user-info";
import { CurrentUserLoader } from "./current-user-loader";
import { UserLoader } from "./user-loader";
import { ResouceLoader } from "./resource-loader";
import { DataSourceWithProps } from "./data-source-with-props";
import { DataSourceOld } from "./data-source-old";

const fetchData = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  //localStorage.setItem('test', "I'm from local storage");
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function AppDataSource() {
  return (
    // <CurrentUserLoader>
    //   <UserInfo />
    // </CurrentUserLoader>

    // <UserLoader userId={'1'}>
    //   <UserInfo />
    // </UserLoader>

    // <>
    //   <ResouceLoader resourceUrl={'/users/1'} resourceName={'user'}>
    //     <UserInfo />
    //   </ResouceLoader>

    //   <ResouceLoader resourceUrl={'/books/1'} resourceName={'book'}>
    //     <BookInfo />
    //   </ResouceLoader>
    // </>

    <>
      {/* <DataSourceOld getData={() => fetchData("/users/1")} resourceName={"user"}>
        <UserInfo />
      </DataSourceOld>

      <DataSourceOld resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </DataSourceOld> */}

      {/* <DataSourceWithProps
      getData={() => fetchData("/users/1")}
      render={resource => <UserInfo user={resource}/>}/> */}

      {/* <DataSource getData={() => getDataFromLocalStorage("test")} resourceName={"msg"}>
        <Message />
      </DataSource> */}

      <DataSource
        resources={{
          user: async() => await fetchData("/users/1"),
          role: "Admin",
        }}
      >
        <UserInfo />
      </DataSource>
      <DataSource
        resources={{
          book: "/books/1",
        }}
      >
        <BookInfo />
      </DataSource>
    </>
  );
}

export default AppDataSource;
