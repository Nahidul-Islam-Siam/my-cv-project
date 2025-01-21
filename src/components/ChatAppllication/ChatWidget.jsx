import { useState } from "react";
import { BiMessageDots } from "react-icons/bi";
import ChatInterface from "./ChatInterface";

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleCloseChat = () => {
    setIsChatOpen(false); // Toggles chat visibility
  };

  return (
    <>
      {/* Chat Icon */}
      <div
        className={`fixed bottom-5 z-50 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 
                    transition-opacity duration-300 ease-in-out ${
                      isChatOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
        onClick={() => setIsChatOpen(true)}
        aria-label="Open chat"
      >
        <BiMessageDots size={28} />
      </div>

      {/* Chat Application */}
      {isChatOpen && (
        <ChatInterface onClose={handleCloseChat} />
      )}
    </>
  );
};

export default ChatWidget;
