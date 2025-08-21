"use client";
import { motion } from "framer-motion";
import { Clock, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ComingSoon = ({ title = "Coming Soon", description = "This feature is coming soon!", showBackButton = true }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-accent rounded-full opacity-50"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-6"
      >
        {/* Icon */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              variants={sparkleVariants}
              animate="animate"
              className="absolute -top-2 -right-2"
            >
              <Sparkles className="w-6 h-6 text-accent" />
            </motion.div>
            <Clock className="w-20 h-20 text-accent mx-auto" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-foreground mb-4"
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted mb-8 max-w-md mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Progress indicator */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-64 h-2 bg-muted/20 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
          <p className="text-sm text-muted mt-2">Development in progress...</p>
        </motion.div>

        {/* Back button */}
        {showBackButton && (
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 rounded-lg text-accent hover:bg-accent/20 transition-colors duration-200 backdrop-blur-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ComingSoon;
