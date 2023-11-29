import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate()

  useEffect(() => {
    const time = setTimeout(() => {
      navigate(-1)
    }, 3000);

    return () => {
      clearTimeout(time)
    }
  })

  return (
    <div id="error-page">
      <button onClick={() => {
        navigate(-1)
      }}>go back</button>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
