import { Loader2Icon, BookOpen, Star } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/utils/index"

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }

// Magic Book Spinner
function ThemedSpinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("relative flex items-center justify-center w-32 h-32", className)} {...props}>
      {/* Central Book Icon - Floating Animation */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          rotate: [-3, 3, -3]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        className="z-10 text-primary drop-shadow-md"
      >
        <BookOpen className="w-14 h-14 sm:w-16 sm:h-16 text-white" fill="currentColor" fillOpacity={0.2} strokeWidth={2} />
      </motion.div>

      {/* Twinkling Stars */}

      {/* Star 1 - Red - Upper Left */}
      <motion.div
        className="absolute top-0 left-0 text-[#FA5252]"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.6, 1, 0.6],
          rotate: [0, 15, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 0
        }}
      >
        <Star className="w-5 h-5 fill-current" />
      </motion.div>

      {/* Star 2 - Cyan - Right */}
      <motion.div
        className="absolute top-1/2 -right-2 -translate-y-1/2 text-[#54E6ED]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.7],
          rotate: [0, -20, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <Star className="w-6 h-6 fill-current" />
      </motion.div>

      {/* Star 3 - Yellow - Bottom Left */}
      <motion.div
        className="absolute bottom-0 left-2 text-[#EFE242]"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Star className="w-4 h-4 fill-current" />
      </motion.div>

      {/* Magical Aura/Glow behind */}
      <motion.div
        className="absolute inset-0 bg-[#54E6ED]/10 rounded-full blur-2xl -z-10"
        animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </div>
  )
}

function LoadingSpinner({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center justify-center w-full h-full min-h-[inherit]", className)} {...props}>
      <ThemedSpinner className="size-16 sm:size-20" />
    </div>
  )
}

export { LoadingSpinner, ThemedSpinner }
