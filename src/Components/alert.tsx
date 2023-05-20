import React, { useEffect } from 'react';

interface AlertProps {
    showWarning: boolean;
    errorMessage: string;
    setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
  }
  

const Alert: React.FC<AlertProps> = ({
    showWarning,
    errorMessage,
    setShowWarning,
}) => {

      //to hide warning message after 5 seconds
  useEffect(() => {
    if (showWarning) {
      const timeoutId = setTimeout(() => {
        setShowWarning(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showWarning]);
  return (
    <div className="absolute right-4 top-4">
            <div className="alert alert-warning shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>{errorMessage}</span>
              </div>
            </div>
          </div>
  );
};

export default Alert;
