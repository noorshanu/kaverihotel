export const site = {
  name: "Kaveri Palace",
  tagline: "Wedding Venue & Events",
  hindiTagline: "Where Every Dream Comes True",
  phone: "+918521531153",
  phoneDisplay: "+91 85215 31153",
  phoneAlt: "+917856815038",
  phoneAltDisplay: "+91 78568 15038",
  email: "kaveripalace8@gmail.com",
  addressLine:
    "Gandhi Nagar, Jaridih Upper Bazar, Kalali Road, Jaridih Bazar",
  addressDetail:
    "Near Jaradih Railway Station · Landmark: Amar Art · Bokaro, Jharkhand 829114, India",
  addressFull:
    "Kaveri Palace, Gandhi Nagar, Jaridih Upper Bazar, Kalali Road, Jaridih Bazar, Near Jaradih Railway Station (Landmark: Amar Art), Bokaro, Jharkhand 829114, India",
  whatsapp: "917856815038",
  city: "Bokaro",
  state: "Jharkhand",
} as const;

export const owner = {
  name: "Suraj Saw",
  role: "Owner, Kaveri Palace",
  image: "/images/banner/PHOTO-2026-10-13-15-59-19.jpg",
} as const;

export const aboutQuote =
  "No daughter's dream wedding should remain unfinished because of financial difficulty — every celebration deserves to be historic and unforgettable.";

export const aboutInitiatives = [
  {
    title: "50% Grand Discount",
    description:
      "A special flat 50% discount on daughter's wedding bookings — our way of supporting families on a sacred occasion.",
    icon: "discount" as const,
  },
  {
    title: "Easy Installment Plans",
    description:
      "Pay in comfortable EMIs with flexible installments — a first-of-its-kind payment ease at a wedding venue in the region.",
    icon: "emi" as const,
  },
  {
    title: "Historic Celebrations",
    description:
      "More than a hall — we help you create a timeless, dignified wedding your family will cherish for generations.",
    icon: "celebration" as const,
  },
  {
    title: "Where Dreams Come True",
    description:
      "Rooms, banquet, lawn, and on-site support under one roof in Jaridih, Bokaro — hospitality with heart.",
    icon: "palace" as const,
  },
] as const;

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
    description: "Extra space for families and small groups visiting Bokaro.",
  },
  {
    name: "Dormitory",
    price: "500",
    image: null,
    description: "Budget-friendly shared accommodation for groups and guests.",
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
    src: "/images/banquite/PHOTO-2026-10-10-15-48-29.jpg",
    alt: "Kaveri Palace marriage lawn and banquet setup",
  },
  {
    src: "/images/banquite/PHOTO-2026-10-10-15-48-37.jpg",
    alt: "Kaveri Palace banquet hall celebration view",
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
      "Clean rooms, helpful staff, and a convenient location in Bokaro. Perfect for our family function.",
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
