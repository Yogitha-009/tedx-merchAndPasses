interface Checkout {
    personalInfo: {
        fullName: string;
        email: string;
        phone: string;
    };
    deliveryOption: "homeDelivery" | "hostelPickup";
    shippingAddress?: {
        addressLine1: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    hostelShippingAddress?: {
        hostelName: string;
        roomNumber: string;
    };
    paymentMethod: "card" | "paypal" | "upi";
}
export default Checkout;