import { motion } from "framer-motion";

const pathVariable = {
  false: {
    pathLength: 0,
    opacity: 0,
  },
  true: {
    pathLength: 1,
    opacity: 1,
  },
};

export const ListCheck = ({ ...props }) => {
  return (
    <svg
      width="19px"
      height="14px"
      viewBox="0 0 19 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        id="reservation"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <g
          id="Artboard"
          transform="translate(-77.000000, -85.000000)"
          stroke="#000000"
          stroke-width="2"
        >
          <motion.polyline
            variants={pathVariable}
            initial={String(props.toggle)}
            animate={String(props.toggle)}
            transition={{
              duration: props.toggle ? 0.4 : 0.1,
              ease: "easeInOut",
            }}
            points="78 92 84.375 98 95 86"
          ></motion.polyline>
        </g>
      </g>
    </svg>
  );
};
