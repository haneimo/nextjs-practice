import { Alert } from "../node_modules/react-bootstrap/esm/index";
import AlertDismissibleExample from "../components/AlertDismissibleExample";
import AlertDismissible from "../components/AlertDismissible";

export default function ComponentPage() {
  return (
    <>
      <h1>{<>ComponentPage</>}</h1>

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

      <h2>Alert Link</h2>  
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert with{' '}
          <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
          you like.
        </Alert>
      ))}
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>        

      <AlertDismissibleExample/>
      <AlertDismissible/>
    </>

  );
}
