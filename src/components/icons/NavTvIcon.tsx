const NavTvIcon = ({ active }: { active?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className="w-4 group md:w-5"
    aria-hidden
  >
    <path
      className={`${active ? "fill-white" : "group-hover:fill-white/60"}  transition-colors duration-300`}
      fill="#5A698F"
      d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
    />
  </svg>
);
export default NavTvIcon;
