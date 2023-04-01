import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <>
      <div>
        <h1>You have either entered wrong url or service unavailable</h1>
      </div>
    </>
  );
}

export default Error;
