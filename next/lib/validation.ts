import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z.string().min(5, {
    message: "description must be at least 50 characters.",
  }),
  id: z.string().optional(),
});

export type PostValues = z.infer<typeof postSchema>;
