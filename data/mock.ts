export interface TourPackage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  duration: string;
  type: 'wildlife' | 'cultural' | 'adventure';
  highlights: string[];
  image: string;
  included: string[];
  tier: 'standard' | 'premium';
  itinerary?: { day: number; title: string; description: string; }[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: 'sigiriya',
    name: 'Sigiriya Rock Fortress',
    description: 'Climb the ancient rock fortress rising 200 meters above the surrounding jungle. Marvel at centuries-old frescoes.',
    image: '/images/sigiriya_rock_1789731969018.png',
    tags: ['Cultural', 'Heritage', 'Hiking'],
  },
  {
    id: 'ella',
    name: 'Ella',
    description: 'A charming hill-country village surrounded by tea plantations, misty peaks, and the iconic Nine Arches Bridge.',
    image: '/images/ella_tea_1789732031029.png',
    tags: ['Nature', 'Trekking', 'Scenic'],
  },
  {
    id: 'yala',
    name: 'Yala National Park',
    description: 'Sri Lanka\'s premier wildlife sanctuary, home to leopards, elephants, and over 200 bird species.',
    image: '/images/yala_safari_1789732000321.png',
    tags: ['Wildlife', 'Safari', 'Nature'],
  },
  {
    id: 'galle',
    name: 'Galle Fort',
    description: 'A UNESCO World Heritage Site, this 16th-century colonial fort blends Dutch architecture with ocean-front charm.',
    image: '/images/hero_banner_1789731915028.png',
    tags: ['Cultural', 'Coastal', 'Heritage'],
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: 'cultural-heritage-standard',
    title: 'Cultural Heritage Trail',
    subtitle: 'Discover ancient kingdoms and sacred temples',
    description: 'Journey through Sri Lanka\'s UNESCO World Heritage Sites, from the ancient city of Anuradhapura to the rock fortress of Sigiriya.',
    price: 60,
    duration: '5 days',
    type: 'cultural',
    tier: 'standard',
    highlights: ['Sigiriya Rock Fortress', 'Temple of the Tooth', 'Polonnaruwa', 'Traditional Dance', 'Village Homestay'],
    image: '/images/sigiriya_rock_1789731969018.png',
    included: ['Professional guide', 'Transport', 'Entrance fees', 'Breakfast', 'Hotel'],
    itinerary: [
      { day: 1, title: 'Arrival & Colombo City Tour', description: 'Arrive at Bandaranaike International Airport, meet your guide, and explore the vibrant capital city.' },
      { day: 2, title: 'Sigiriya Rock Fortress', description: 'Early morning climb of the ancient Sigiriya rock fortress, followed by a traditional village tour.' },
      { day: 3, title: 'Polonnaruwa Ancient City', description: 'Cycle through the ancient ruins of Polonnaruwa, exploring royal palaces and magnificent Buddha statues.' },
      { day: 4, title: 'Kandy & Temple of the Tooth', description: 'Travel to Kandy, visit the sacred Temple of the Tooth Relic, and enjoy a traditional cultural dance show.' },
      { day: 5, title: 'Departure', description: 'Transfer back to the airport for your departure flight, carrying unforgettable memories.' },
    ],
  },
  {
    id: 'wildlife-safari-premium',
    title: 'Ultimate Wildlife Expedition',
    subtitle: 'Luxury safari with exclusive park access',
    description: 'A premium wildlife experience featuring private safari vehicles, expert naturalist guides, and luxury eco-lodges.',
    price: 120,
    duration: '5 days',
    type: 'wildlife',
    tier: 'premium',
    highlights: ['Private leopard tracking', 'Luxury tented camp', 'Night safari', 'Whale watching', 'Photography guide'],
    image: '/images/yala_safari_1789732000321.png',
    included: ['Naturalist guide', 'Exclusive vehicle', 'Park fees', 'Gourmet meals', 'Eco-lodge stays'],
    itinerary: [
      { day: 1, title: 'Arrival & Transfer to Yala', description: 'VIP airport pickup and private transfer to a luxury tented camp on the border of Yala National Park.' },
      { day: 2, title: 'Leopard Tracking Safari', description: 'Full-day private safari with an expert naturalist focusing on leopard tracking and wildlife photography.' },
      { day: 3, title: 'Udawalawe Elephant Transit Home', description: 'Visit the elephant transit home for feeding time, then enjoy an afternoon safari in Udawalawe.' },
      { day: 4, title: 'Mirissa Whale Watching', description: 'Early morning private boat charter for blue whale watching off the southern coast.' },
      { day: 5, title: 'Galle Fort & Departure', description: 'Explore the historic Galle Fort before a scenic drive back to the airport.' },
    ],
  },
  {
    id: 'adventure-peaks-standard',
    title: 'Adventure Peaks',
    subtitle: 'Conquer scenic trails and hidden waterfalls',
    description: 'Challenge yourself with Sri Lanka\'s most breathtaking hikes and outdoor experiences in the central highlands.',
    price: 60,
    duration: '6 days',
    type: 'adventure',
    tier: 'standard',
    highlights: ['Adam\'s Peak sunrise', 'Ella Rock', 'Knuckles Mountain', 'Bambarakanda waterfall', 'White-water rafting'],
    image: '/images/ella_tea_1789732031029.png',
    included: ['Trekking guide', 'Transfers', 'Equipment', 'Meals', 'Eco-lodge'],
    itinerary: [
      { day: 1, title: 'Arrival & Kitulgala Adventure', description: 'Arrive and transfer to Kitulgala for an afternoon of exhilarating white-water rafting.' },
      { day: 2, title: 'Adam\'s Peak Night Hike', description: 'Rest during the day, then begin the midnight ascent of sacred Adam\'s Peak to catch a breathtaking sunrise.' },
      { day: 3, title: 'Train Ride to Ella', description: 'Board the famous blue train for one of the most scenic rail journeys in the world to Ella.' },
      { day: 4, title: 'Ella Rock & Nine Arches', description: 'Hike to the summit of Ella Rock, then visit the iconic Nine Arches Bridge surrounded by tea fields.' },
      { day: 5, title: 'Bambarakanda Falls', description: 'Trek to Sri Lanka\'s highest waterfall before heading back to Colombo.' },
      { day: 6, title: 'Departure', description: 'Morning at leisure before transferring to the airport.' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'London, UK',
    text: 'An absolutely magical experience! The attention to detail and luxury touches made our honeymoon unforgettable.',
    avatar: 'https://picsum.photos/seed/face1/200/200',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Weber',
    location: 'Berlin, Germany',
    text: 'The wildlife safari exceeded all expectations. We spotted leopards and stayed in an incredible luxury camp.',
    avatar: 'https://picsum.photos/seed/face2/200/200',
    rating: 5,
  },
];

export const trustBadges = [
  { icon: 'shield-check', label: 'Licensed Tour Operator' },
  { icon: 'leaf', label: 'Eco-Certified Guide' },
  { icon: 'star', label: '5-Star Luxury Rated' },
  { icon: 'calendar', label: '10+ Years Experience' },
];
