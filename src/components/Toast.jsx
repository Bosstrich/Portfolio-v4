import { useEffect } from 'react';

const Toast = ({ message, showToast, onClose }) => {
    console.log('inside toast!')
    console.log('Show Toast:', showToast)
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [showToast, onClose]);

  return (
    <>
      {showToast && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-md shadow-lg flex items-center space-x-3 z-50">
          <span>{message}</span>
          <button
            className="ml-4 text-white font-bold"
            onClick={onClose}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Toast;
