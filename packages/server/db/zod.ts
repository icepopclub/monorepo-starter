import { createInsertSchema } from "drizzle-zod"
import { users } from "./schema"

export const zInsertUser = createInsertSchema(users)
