import { LucideIcon } from "lucide-react";

export enum Priority {
  Urgent,
  High,
  Medium,
  Low,
}

export type Label = {
  id: string;
  value: string;
  name: string;
  color?: string;
};

export type Status = {
  id: string;
  value: string;
  name: string;
  icon: LucideIcon;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  labels: Label[];
  startDate: Date;
  endDate: Date;
};

export type Category = {
  id: string;
  name: string;
  value: string;
  icon: LucideIcon;
  tasks: Task[];
};
