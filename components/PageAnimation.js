export const PageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const NavAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};