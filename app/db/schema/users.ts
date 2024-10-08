
import { varchar, pgTable, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: varchar('id', { length: 200 }).primaryKey(),
  firstName: varchar('first_name', { length: 120 }).notNull(),
  lastName: varchar('last_name', { length: 120 }).notNull(),
  email: varchar('email', { length: 120 }).notNull().unique(),
  joined: timestamp('joined').notNull().defaultNow()
});


export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;