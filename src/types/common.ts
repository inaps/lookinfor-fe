export type Request = {
  id: string;
  name: string;
  category: string;
};

export type NewRequest = Omit<Request, "id">;
