import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#282622] pt-10 pb-20 sm:pt-14 sm:pb-24 lg:pb-12 border-t border-[#DDD3C8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          {/* Social Media Links */}
          <h3 className="text-xs sm:text-sm font-medium font-body text-[#282622] uppercase tracking-wider mb-3 sm:mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-2.5">
            <a
              href="https://www.instagram.com/drpilatesbangalore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr Pilates on Instagram"
              className="w-10 h-10 rounded-lg bg-[#F7F3ED] text-[#282622] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] border border-[#DDD3C8] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/drpilatesbangalore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr Pilates on Facebook"
              className="w-10 h-10 rounded-lg bg-[#F7F3ED] text-[#282622] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] border border-[#DDD3C8] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@drpilatesbangalore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr Pilates on YouTube"
              className="w-10 h-10 rounded-lg bg-[#F7F3ED] text-[#282622] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] border border-[#DDD3C8] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/dr-pilates-bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dr Pilates on LinkedIn"
              className="w-10 h-10 rounded-lg bg-[#F7F3ED] text-[#282622] hover:bg-[#5C604E] hover:text-white hover:border-[#5C604E] border border-[#DDD3C8] flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-[#DDD3C8] text-center text-xs text-[#6E685E] font-normal font-body">
          <p>© 2026 Dr Pilates. All Rights Reserved. Bengaluru, Karnataka, India.</p>
        </div>
      </div>
    </footer>
  );
};
