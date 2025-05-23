import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[7.5rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black-100 dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 overflow-hidden",
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col justify-center">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200 text-center">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-3xl">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-m dark:text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};
