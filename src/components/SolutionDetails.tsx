import { useModal } from "@/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  selectedItem: any;
}

const SolutionDetails: React.FC<Props> = ({ selectedItem: item }) => {
  const { isOpen, closeSheet, openModal } = useModal();

  if (!item) {
    return null;
  }

  const handleDiscussion = () => {
    closeSheet();
    window.setTimeout(openModal, 150);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(state) => !state && closeSheet()}>
      <DialogContent className="max-h-[calc(100vh-2rem)] max-w-3xl gap-0 overflow-y-auto border-slate-900/10 p-0 text-blu sm:rounded-sm">
        <div className="relative h-48 w-full shrink-0 overflow-hidden md:h-60">
          <img
            src={item.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101c25]/75 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-secondary md:left-8">
            Service overview
          </p>
        </div>
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6 pr-8">
            <DialogTitle className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-blu md:text-4xl">
              {item.title}
            </DialogTitle>
            <DialogDescription className="pt-2 text-sm leading-6 text-slate-600">
              Learn how Minsol can support your operation from planning through delivery.
            </DialogDescription>
          </DialogHeader>
          <div className="border-t border-slate-900/10 pt-6">
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-[1.0625rem] md:leading-8">
              {item.details}
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-slate-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600">Have a project in mind?</p>
            <button
              type="button"
              onClick={handleDiscussion}
              className="inline-flex w-fit items-center gap-2 rounded-sm bg-main px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#51362a]"
            >
              Discuss this solution <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SolutionDetails;
