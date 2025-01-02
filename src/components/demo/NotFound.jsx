import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "6rem",
        marginBottom: "6rem",
      }}
    >
      <h1>404: Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: "blue" }}>
        Go to Home{" "}
      </Link>
    </div>
  );
}
