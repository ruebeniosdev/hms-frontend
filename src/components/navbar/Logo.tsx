export const Logo = () => (
 <div className="flex items-center gap-2">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-600"
    >
      {/* Medical Cross with Pulse Line */}
      <rect
        x="16"
        y="8"
        width="8"
        height="24"
        rx="1"
        fill="currentColor"
      />
      <rect
        x="8"
        y="16"
        width="24"
        height="8"
        rx="1"
        fill="currentColor"
      />
      
      {/* Circular Background */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      />
      
      {/* Heartbeat/Pulse Line */}
      <path
        d="M4 20 L10 20 L12 16 L14 24 L16 20 L36 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
    
    <div className="flex flex-col">
      <span className="text-xl font-bold text-foreground leading-none">
        HealthSync
      </span>
      <span className="text-xs text-muted-foreground">
        Hospital Management
      </span>
    </div>
  </div>
);
