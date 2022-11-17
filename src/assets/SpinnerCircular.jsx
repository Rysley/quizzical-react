import { SpinnerCircular } from "spinners-react";

export default function LoadingSpinner(props) {
  return (
    <div className="spinner">
      <SpinnerCircular
        size={120}
        thickness={200}
        speed={151}
        color="rgba(57, 143, 172, 1)"
        secondaryColor="rgba(57, 172, 150, 0.26)"
        enabled={props.enabled}
      />
    </div>
  );
}
