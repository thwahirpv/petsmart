import { Truck, ShoppingBag, Clock, Heart, Star, ShieldCheck, MapPin, Phone } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "PetSmart",
  tagline: "It’s all about pets",
  rating: 4.4,
  reviewCount: 65,
  phone: "099956 62670",
  address: "Thondiyil – Manjalampuram Rd, Chevadikunnu, Peravoor, Kerala 670673",
  plusCode: "VPXQ+H8 Peravoor, Kerala",
  hours: "9:00 AM - 9:00 PM",
  descriptionShort: "PetSmart is a trusted pet store in Peravoor offering a wide range of pets, food, accessories, and supplies. We provide grooming, exotic pets, and friendly guidance.",
  descriptionLong: "PetSmart is a chain-style pet shop featuring a range of pets, supplies, and food. Most locations also offer grooming, boarding, and other services. At this Peravoor store, customers can find a wide variety of pets, premium food, toys, cages, aquariums, and accessories — all supported by knowledgeable and friendly staff focused on pet well-being.",
};

export const SERVICES = [
  {
    id: 1,
    title: "In-store Shopping",
    icon: ShoppingBag,
    description: "Browse our wide collection of pets and supplies."
  },
  {
    id: 2,
    title: "Delivery",
    icon: Truck,
    description: "Home delivery available for pet food and accessories."
  },
  {
    id: 3,
    title: "Quick Visit",
    icon: Clock,
    description: "Efficient service for fast purchases."
  },
  {
    id: 4,
    title: "Pet Guidance",
    icon: Heart,
    description: "Expert advice on pet care and nutrition."
  }
];

export const CATEGORIES = {
  pets: [
    { id: 'p1', name: 'Puppies', image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80&w=800' },
    { id: 'p2', name: 'Birds', image: 'https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&q=80&w=800' }, // Updated Bird
    { id: 'p3', name: 'Fishes', image: 'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=800' }, // Updated Fish
    { id: 'p4', name: 'Exotic Pets', image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&q=80&w=800' } // Updated Exotic
  ],
  products: [
    { id: 'pr1', name: 'Food', image: 'https://images.unsplash.com/photo-1589924691195-41432c84c161?auto=format&fit=crop&q=80&w=800' },
    { id: 'pr2', name: 'Accessories', image: 'https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?auto=format&fit=crop&q=80&w=800' },
    { id: 'pr3', name: 'Aquariums', image: 'https://images.unsplash.com/photo-1520313847391-e45a95fc76ba?auto=format&fit=crop&q=80&w=800' }, // Updated Aquarium
    { id: 'pr4', name: 'Cages & Toys', image: 'https://images.unsplash.com/photo-1599581881850-c8ff4cb8fb7e?auto=format&fit=crop&w=800&q=80' } // Updated Cages
  ]
};

export const REVIEWS = [
  {
    id: 1,
    name: "Dhersh M Chacko",
    rating: 5,
    text: "I wanted to gift my brother a puppy while I was working in Germany. PetSmart arranged a healthy puppy and delivered it on time. I am very grateful for their excellent service and supportive staff."
  },
  {
    id: 2,
    name: "Johnson Thomas",
    rating: 5,
    text: "This is the best pet shop around. Good, knowledgeable proprietors and great products. Great customer service, wide selection of awesome products at a fair price, and my family loved it."
  },
  {
    id: 3,
    name: "Abija Venugopal",
    rating: 5,
    text: "I was really astonished by the collection and quality of all kinds of pets in the store and on their farm. I was impressed with their excellent customer service."
  },
  {
    id: 4,
    name: "Mohammad Nameer",
    rating: 5,
    text: "Good pet shop with a great collection of pets like fishes, birds, and more. Economical and nice collection, also has exotic pets."
  },
  {
    id: 5,
    name: "Akhil Benny",
    rating: 5,
    text: "Very good to customers. Nice shop for pet items."
  },
  {
    id: 6,
    name: "YAZ HOLIC",
    rating: 5,
    text: "Nice one, good collections. Variety of pet accessories available."
  }
];

export const FEATURES = [
  "Great collection and quality",
  "Exotic pets available",
  "Fair pricing",
  "Excellent customer service",
  "Trusted by locals",
  "International service support"
];
