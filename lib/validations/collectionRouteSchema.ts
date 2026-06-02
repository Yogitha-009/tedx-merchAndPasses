import {z} from "zod";

export const collectionRouteSchema = z.object({
    routeType:z.enum(["inCampus","outCampus"]),

    hostel:z.string().optional(),
    roomCoordinate:z.string().optional(),

    address:z.string().optional(),
    postalCode:z.string().optional(),
    collectionNotes:z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.routeType === "inCampus") {
    if (!data.hostel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["hostel"],
        message: "Hostel is required",
      });
    }

    if (!data.roomCoordinate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["roomCoordinate"],
        message: "Room/Coordinate is required",
      });
    }
  }

  if (data.routeType === "outCampus") {
    if (!data.address) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["address"],
        message: "Address is required",
      });
    }

    if (!data.postalCode) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["postalCode"],
        message: "Postal Code is required",
      });
    }
  }
});

export type CollectionRouteData =
  z.infer<typeof collectionRouteSchema>;