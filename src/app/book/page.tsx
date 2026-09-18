import type { Metadata } from "next";
import { BookingFlow } from "@/components/booking/BookingFlow";

export const metadata: Metadata = {
  title: "Book a Court — ML Lifestyle Park",
  description:
    "Pick your sport, date, and hour, then pay to confirm your reservation at ML Lifestyle Park.",
};

export default function BookPage() {
  return <BookingFlow />;
}
