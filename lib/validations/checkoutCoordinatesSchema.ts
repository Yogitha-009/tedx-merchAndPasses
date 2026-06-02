import {z} from "zod";

export const checkoutCoordinatesSchema = z.object({
    ExplorerDesignation: z.string().min(1, { message: "Name is required" }),
    commLink: z.string().email({ message: "Invalid email address" }),
    priorityFrequency: z.string().regex(/^\d{10}$/, { message: "Invalid phone number" }),
});

export type CheckoutCoordinatesData = z.infer<typeof checkoutCoordinatesSchema>;