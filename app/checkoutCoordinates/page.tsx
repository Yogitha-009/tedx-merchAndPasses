import Link from "next/link";

export default function CheckoutCoordinates() {
    return (
        <div>
            <h1>Transmission Details</h1>
            <h2>Please identify yourself for the expedition log.</h2>
            <h1>Explorer Designation</h1>
            <input type="text" name="Full Name" placeholder="Enter your full name" />
            <h1>Comm Link</h1>
            <input type="text" name="Comm Link" placeholder="Enter your Email Address" />
            <h1>Priority Frequency</h1>
            <input type="text" name="Priority Frequency" placeholder="Enter your phone number" />
            <Link href="/collectionRoute">Continue</Link>
        </div>
    );
}