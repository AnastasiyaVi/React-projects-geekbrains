import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/error", { replace: true });
  }, [navigate]);

  return (
    <div>
      <p>This is the Error Page</p>
    </div>
  );
}

export default Error;
