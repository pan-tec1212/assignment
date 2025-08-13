import clsx from "clsx";
export const Sample = ({ className }: { className?: string }) => {
  return (
    <div className={clsx("", className)}>
      <div>sample</div>
    </div>
  );
};
