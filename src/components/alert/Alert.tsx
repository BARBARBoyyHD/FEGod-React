import React, { useEffect, useState } from "react";

type AlertProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Alert({ isOpen, onClose }: AlertProps) {
  if (!isOpen) return null;

  const [visible, setVisible] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100); // 100% progress bar

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setProgress(100); // Reset progress bar when opened

      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onClose, 300);
      }, 3000);

      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 1.67, 0)); // Decrease smoothly
      }, 50);

      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed top-4 right-5 border border-black p-3 w-[190px] rounded-md bg-green-400 text-white font-bold transition-all duration-300 ease-in-out  ${
        visible ? "scale-100 opacity-100" : "scale-50 opacity-0"
      }`}
    >
      Loggin Success
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 mt-2 rounded-md overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-50"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
