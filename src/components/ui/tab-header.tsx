import {
  PlusCircle,
  SortAscIcon,
  SortDescIcon,
  SquareKanban,
} from "lucide-react";

import { useModalStore } from "@/lib/zustand-store/modal-store";
import { useStatusTaskStore } from "@/lib/zustand-store/status-task";

import { initialStatusTask } from "@/data/initial-data";
import { useTasksStore } from "@/lib/zustand-store/tasks-store";

const TabHeader = () => {
  const { setIsModalOpen } = useModalStore((state) => state);
  const { setStatusTask } = useStatusTaskStore((state) => state);
  const { sortTasks, sortOrder } = useTasksStore((state) => state);

  return (
    <>
      <div className=" flex justify-between items-center border-b py-2">
        <div className="flex gap-x-4">
          <div className="flex gap-x-1 items-center">
            <SquareKanban className="md:w-5 md:h-5 h-4 w-4" />
            <p className="md:text-base text-sm">Board view</p>
          </div>
          <div className="md:flex gap-x-1 items-center text-gray-500 hidden">
            <PlusCircle className="md:w-5 md:h-5 h-4 w-4" />
            <p className="text-base">Add view</p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center">
          <button
            className="md:px-4 md:py-2 px-4 py-2 bg-black text-white rounded-3xl h-fit flex gap-x-2 items-center"
            onClick={() => {
              setIsModalOpen(true);
              setStatusTask(initialStatusTask[0]);
            }}
          >
            <p className="text-xs md:text-base">New task</p>
          </button>
          <button
            onClick={sortTasks}
            className="md:px-4 md:py-2 px-4 py-2 border text-black rounded-3xl h-fit flex gap-x-2 items-center"
          >
            {sortOrder === "asc" ? (
              <SortAscIcon className="w-3 h-3" />
            ) : (
              <SortDescIcon className="w-3 h-3" />
            )}
            <p className="text-xs md:text-base">Sort task</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default TabHeader;
