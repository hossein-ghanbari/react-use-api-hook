import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const UseApi = (url, method, data = {}, options = {}) => {
  const [response, setResponse] = useState(null);
  const [responseError, setResponseError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    const req = await axios({ url, method, data, ...options });

    try {
      if (req.status < 200 || req.status > 200) {
        setResponseError(req);
      } else {
        setResponse(req.data);
      }
      setLoading(false);
    } catch (error) {
      setResponseError(error);

      setLoading(false);
    }
  });

  useEffect(() => {
    fetch();
  }, []);

  return [response, responseError, loading];
};

export default UseApi;
