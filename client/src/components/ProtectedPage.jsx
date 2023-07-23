import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import { SetLoader } from "../Redux/LoaderSlice";
import { SetUser } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../ApiCall/users";

const ProtectedPage = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateToken = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetCurrentUser();
      if (response.success) {
        dispatch(SetLoader(false));
        dispatch(SetUser(response.data));
      } else {
        navigate("/login");
      }
    } catch (error) {
      dispatch(SetLoader(false));
      navigate("/login");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default ProtectedPage;
