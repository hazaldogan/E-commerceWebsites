import { Redirect } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedPage = ({ pageComponent: PageComponent, fromURL, ...rest }) => {
  const isLoggedIn = () => {
    if (localStorage.getItem("token")) {
      return <PageComponent {...rest} />;
    } else {
      toast.warning("Bu sayfaya devam edebilmek için login olmalısınız!..");
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: fromURL },
          }}
        />
      );
    }
  };

  return isLoggedIn();
};

export default ProtectedPage;
