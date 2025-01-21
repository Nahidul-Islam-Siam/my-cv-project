import { useState, useRef, useEffect } from "react";
import { BiSearch, BiPaperclip, BiSend, BiX } from "react-icons/bi";

const Sidebar = ({ contacts, isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                  md:translate-x-0 fixed md:static w-80 h-full bg-white border-r border-gray-200 
                  transition-transform duration-300 ease-in-out z-30`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BiSearch className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100%-73px)]">
        {contacts.map((contact) => (
          <div key={contact.id} className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {contact.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900">{contact.name}</h3>
                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-400">{contact.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ChatInput = ({ newMessage, setNewMessage, handleSendMessage }) => (
  <div className="p-4 border-t border-gray-200 bg-white">
    <div className="flex items-end space-x-2">
      <button className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none" aria-label="Attach file">
        <BiPaperclip size={24} />
      </button>
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-32 resize-none"
        rows={1}
        onKeyPress={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
          }
        }}
      />
      <button
        onClick={handleSendMessage}
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Send message"
      >
        <BiSend size={24} />
      </button>
    </div>
  </div>
);

const ChatInterface = ({ onClose }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const contacts = [
    { id: 1, name: "John Doe", lastMessage: "Hey, how are you?", timestamp: "09:30 AM", online: true, avatar: "https://via.placeholder.com/40" },
  ];

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sent: true,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div
      className="fixed right-0 bottom-0 w-80 h-[70vh] bg-white border border-gray-200 shadow-lg 
                 rounded-t-lg overflow-hidden flex flex-col z-50"
    >
      {/* Header with Close Icon */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-800">Chat</h3>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="p-2 text-gray-500 hover:text-gray-700"
        >
          <BiX size={24} />
        </button>
      </div>
      <Sidebar contacts={contacts} isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-100">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg ${
                  message.sent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs mt-1 text-gray-400">{message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        <ChatInput newMessage={newMessage} setNewMessage={setNewMessage} handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatInterface;
