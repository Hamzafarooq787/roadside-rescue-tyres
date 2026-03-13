'use client';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#8AE600] opacity-75 animate-ping"></span>
        
        {/* Button */}
        <a
          href="https://wa.me/+447415733992"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-[#8AE600] text-white rounded-full shadow-lg hover:bg-[#72BE00] transition transform hover:scale-110 animate-float-icon"
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.59 4.13 1.71 5.88L2 22l4.32-1.8c1.7.98 3.66 1.5 5.72 1.5 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.01 18.16c-1.73 0-3.43-.47-4.91-1.36l-.35-.21-2.57 1.07.69-2.5-.23-.37c-.99-1.52-1.52-3.3-1.52-5.12 0-4.73 3.85-8.58 8.58-8.58s8.58 3.85 8.58 8.58-3.85 8.59-8.58 8.59zm4.7-6.44c-.26-.13-1.52-.75-1.76-.83-.24-.09-.41-.13-.58.13-.17.25-.66.83-.81 1-.15.17-.3.19-.56.07-.26-.13-1.09-.4-2.07-1.28-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.47.13-.16.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.58-1.4-.8-1.92-.21-.52-.42-.45-.58-.46-.15-.01-.33-.01-.51-.01-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.14.19 1.94 2.96 4.7 4.16 2.76 1.2 2.76.8 3.26.75.5-.05 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.26-.17-.52-.3z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
