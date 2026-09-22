import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

type Member = {
  name: string;
  position: string;
  details?: string;
};

type CardProps = {
  member: Member;
  variant: "leadership" | "directory";
  index: number;
  isLast: boolean;
};

const Card: React.FC<CardProps> = ({ member, variant, index, isLast }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`group flex w-full flex-col justify-between text-left ${
            member.details ? "cursor-pointer" : "cursor-default"
          } ${
            variant === "leadership"
              ? `min-h-[250px] py-6 ${isLast ? "" : "md:border-r md:border-slate-900/15 md:pr-8"} ${index > 0 ? "md:pl-8" : ""}`
              : "min-h-0 border-b border-slate-900/15 py-5 pr-5"
          }`}
          onClick={() => member.details && setOpen(true)}
        >
          <div>
            {variant === "leadership" && <p className="text-xs uppercase tracking-[0.18em] text-main">0{index + 1}</p>}
            <h3 className={`${variant === "leadership" ? "mt-10 text-3xl tracking-[-0.03em]" : "text-lg tracking-[-0.02em]"} font-medium text-blu`}>
              {member.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{member.position}</p>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            {member.details && (
              <span className="inline-flex items-center gap-2 border-b border-transparent pb-1 text-sm text-main transition-colors group-hover:border-main group-hover:text-blu">
                {variant === "leadership" ? "View profile" : "Profile"} <span aria-hidden="true">→</span>
              </span>
            )}
          </div>
        </button>
      </DialogTrigger>

      {member.details && (
        <DialogContent className="max-h-[calc(100vh-2rem)] max-w-3xl overflow-y-auto border-slate-900/10 p-7 text-blu sm:rounded-sm md:p-10">
          <DialogHeader className="border-b border-slate-900/10 pb-6 pr-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">Leadership profile</p>
            <DialogTitle className="pt-2 text-3xl font-semibold tracking-[-0.03em]">{member.name}</DialogTitle>
            <DialogDescription className="pt-2 text-base text-slate-600">{member.position}</DialogDescription>
          </DialogHeader>
          <p className="pt-6 text-base leading-7 text-slate-700 md:text-lg md:leading-8">{member.details}</p>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Card;
