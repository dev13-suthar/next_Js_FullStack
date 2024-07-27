import {z} from "zod";


export const AddmoneySchema = z.object({
    amount:z.number(),
    title:z.string(),
    category:z.string(),
});

export type AddmoneyResponse = z.infer<typeof AddmoneySchema>;


export const SpendmoneySchema = z.object({
    amount:z.number(),
    title:z.string(),
    category:z.string(),
});

export type SpendMoneyResponse = z.infer<typeof SpendmoneySchema>;

export interface transactionResponse{
    id: number,
    account_no: number,
    amount: number,
    type: "Credit"|"Debit",
    title: string,
    category_id: number,
    createdAt: Date|string,
}
