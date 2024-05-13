import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(" rounded-md bg-sky-50 animate-in", className)}
      {...props}
    />
  );
}

export { Skeleton };
