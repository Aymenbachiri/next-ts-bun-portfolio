export default function ChevronDoubleUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="text-[#5651e5]"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 11l7-7 7 7M5 19l7-7 7 7"
      ></path>
    </svg>
  );
}
