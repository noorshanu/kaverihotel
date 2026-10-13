export const site = {
  name: "Kaveri Palace",
  tagline: "Wedding Venue & Events",
  hindiTagline: "Stay Close to Tradition",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "info@kaveripalace.com",
  address:
    "Near Ram Mandir Corridor, Ayodhya, Uttar Pradesh 224123, India",
  whatsapp: "919876543210",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Gallery", href: "#gallery" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const heroSlides = [
  {
    src: "/images/banner/Kaveri Palace Wedding Venue Banner.png",
    alt: "Kaveri Palace wedding venue decorated for celebrations",
  },
  {
    src: "/images/banner/Comfortable Stay_ Luxury Room Collection.png",
    alt: "Luxury hotel rooms at Kaveri Palace",
  },
] as const;

export const rooms = [
  {
    name: "Deluxe Room",
    price: "1,500",
    image: null as string | null,
    description: "Spacious AC room with attached bath, ideal for couples.",
  },
  {
    name: "Economy Room",
    price: "1,300",
    image: null,
    description: "Comfortable stay with essential amenities at great value.",
  },
  {
    name: "Family Room",
    price: "2,000",
    image: null,
    description: "Extra space for families and small groups visiting Ayodhya.",
  },
  {
    name: "Dormitory",
    price: "500",
    image: null,
    description: "Budget-friendly shared accommodation for pilgrims & groups.",
  },
] as const;

export const serviceCategories = [
  {
    title: "Front Desk & Guest Support",
    icon: "bell" as const,
    items: [
      "24/7 Front Desk Assistance",
      "Express Check-in & Check-out",
      "Taxi & Cab Booking Support",
      "Travel & Local Guidance",
    ],
  },
  {
    title: "Room & Comfort Services",
    icon: "bed" as const,
    items: [
      "Daily Housekeeping",
      "Clean Linen & Towels",
      "Room Service on Request",
      "Extra Bed on Request",
    ],
  },
  {
    title: "Connectivity & Utilities",
    icon: "wifi" as const,
    items: [
      "Free High-Speed Wi-Fi",
      "Power Backup",
      "Lift Access",
      "Air-Conditioned Rooms",
    ],
  },
  {
    title: "Safety & Security",
    icon: "shield" as const,
    items: [
      "CCTV Surveillance",
      "Fire Safety Measures",
      "Secure Entry & Staff Presence",
      "Well-Lit Parking & Walkways",
    ],
  },
  {
    title: "Business & Events",
    icon: "users" as const,
    items: [
      "Marriage Lawn & Banquet Hall",
      "Family Functions & Gatherings",
      "Group & Corporate Bookings",
      "On-Site Event Support",
    ],
  },
  {
    title: "Parking & Accessibility",
    icon: "car" as const,
    items: [
      "On-Site Parking",
      "Secure Parking Area",
      "Easy Vehicle Access",
      "Lift Access for Guests",
    ],
  },
] as const;

export const banquetSlides = [
  {
    src: "/images/banner/Kaveri Palace Wedding Venue Banner.png",
    alt: "Banquet hall festive decoration",
  },
  {
    src: "/images/banner/Comfortable Stay_ Luxury Room Collection.png",
    alt: "Event space setup",
  },
] as const;

export const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding Reception",
    quote:
      "Our reception at Kaveri Palace was flawless. The team handled décor, seating, and guest comfort beautifully.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    event: "Family Stay",
    quote:
      "Clean rooms, helpful staff, and a peaceful location near the temple. Perfect for our Ayodhya pilgrimage.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    event: "Anniversary Function",
    quote:
      "The banquet hall looked royal and spacious. Food service and parking were well organized for our guests.",
    rating: 5,
  },
] as const;

export const galleryPlaceholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Gallery ${i + 1}`,
}));
