import { Toaster } from "react-hot-toast";

export const ToasterContainer = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{ duration: 3000 }}
    />
  );
};
