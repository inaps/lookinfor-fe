export type Request = {
  id: string;
  name: string;
  category: string;
  contacts: string;
};

export type NewRequest = Omit<Request, "id">;
