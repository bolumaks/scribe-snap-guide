import { cn } from "@/lib/utils";

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className }: LogoIconProps) {
  return (
    <div className={cn(
      "flex items-center justify-center rounded-lg bg-primary text-primary-foreground",
      "shadow-lg",
      className
    )}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1"
      >
        <path
          d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          fill="currentColor"
          opacity="0.3"
        />
        <polyline
          points="14,2 14,8 20,8"
          fill="currentColor"
        />
        <line
          x1="16"
          y1="13"
          x2="8"
          y2="13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="17"
          x2="8"
          y2="17"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="9"
          x2="8"
          y2="9"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}