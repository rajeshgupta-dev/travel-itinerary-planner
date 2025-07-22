import { useState } from "react";

const useButton = ({ initialText = "Submit", loadingText = "Submitting..." }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState(initialText);

  const handleClick = async (action) => {
    setIsLoading(true);
    setButtonText(loadingText);
    try {
      await action();
      setButtonText("Done!");
    } catch (error) {
      setButtonText("Error!", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setButtonText(initialText);
      }, 1500);
    }
  };

  return {
    isLoading,
    buttonText,
    handleClick,
  };
};

export default useButton;
