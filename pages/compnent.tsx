import Alert from "react-bootstrap/Alert";

export default function ComponentPage() {
  return (
    <div>
      <h1>ComponentPage</h1>

      <h2>Alert</h2>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark"
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </div>
  );
}
