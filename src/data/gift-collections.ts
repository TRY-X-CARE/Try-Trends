export interface GiftCollection {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  occasionTag: string;
  products: string[];
}

export const giftCollections: GiftCollection[] = [
  {
    id: '1',
    title: 'Birthday Celebrations',
    slug: 'birthday-celebrations',
    description: 'Curated gifts to make birthdays extra special. From personalized items to luxury treats, find the perfect way to celebrate.',
    image: 'https://images.pexels.com/photos/796605/pexels-photo-796605.jpeg',
    occasionTag: 'birthday',
    products: ['12', '7', '9', '4'],
  },
  {
    id: '2',
    title: 'Wedding Essentials',
    slug: 'wedding-essentials',
    description: 'Thoughtful gifts for the newlyweds. Help them start their journey together with beautiful, practical items for their home.',
    image: 'https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg',
    occasionTag: 'wedding',
    products: ['1', '6', '10', '5'],
  },
  {
    id: '3',
    title: 'Housewarming Treasures',
    slug: 'housewarming-treasures',
    description: 'Welcome them to their new home with these carefully selected gifts that add warmth and personality to any space.',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    occasionTag: 'housewarming',
    products: ['1', '3', '5', '10', '11'],
  },
  {
    id: '4',
    title: 'Graduation Milestones',
    slug: 'graduation-milestones',
    description: 'Celebrate their achievement with gifts that inspire and prepare them for the next chapter of their journey.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    occasionTag: 'graduation',
    products: ['4', '8', '12'],
  },
  {
    id: '5',
    title: 'Self-Care Rituals',
    slug: 'self-care-rituals',
    description: 'Curated collection of gifts that promote relaxation, mindfulness, and well-being. Perfect for showing someone you care.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    occasionTag: 'self-care',
    products: ['5', '7'],
  },
  {
    id: '6',
    title: 'Travel Companions',
    slug: 'travel-companions',
    description: 'Practical and stylish gifts for the adventurer in your life. These items make travel more enjoyable and memorable.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg',
    occasionTag: 'travel',
    products: ['11', '4'],
  },
];