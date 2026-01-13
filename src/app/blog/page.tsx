import Image from 'next/image';
import Link from 'next/link';
import {
  Tag,
  MessageCircle,
  Search,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import Blogimg1 from '../../assets/images/blogimg/blogimg1.jpeg';
import Blogimg2 from '../../assets/images/blogimg/blogimg2.jpeg';
import Blogimg3 from '../../assets/images/blogimg/blogimg3.jpeg';

const blogPosts = [
  {
    image: Blogimg1,
    date: { day: '12', month: 'Dec' },
    category: 'Party',
    comments: 0,
    title: "HOCA-A Commits to Expanding Eldercare Training in 2025",
    excerpt:
      'In a landmark announcement, Home Care Alliance Africa (HOCA-A) has unveiled its strategic plan to significantly expand its caregiver training programs across the continent, aiming to certify over 5,000 new professionals by the end of 2025.',
    author: {
      name: 'By Hoca-A',
      role: 'Web Admin',
      avatar: '/images/ppictur.jpg',
    },
  },
  {
    image: Blogimg3,
    date: { day: '18', month: 'Nov' },
    category: 'Community',
    comments: 0,
    title: 'HOCA-A Commits to Expanding Eldercare Training in 2025',
    excerpt:
      'In a landmark announcement, Home Care Alliance Africa (HOCA-A) has unveiled its strategic plan to significantly expand its caregiver training programs across the continent, aiming to certify over 5,000 new professionals by the end of 2025.',
    author: {
      name: 'By Hoca-A',
      role: 'Web Admin',
      avatar: '/images/ppictur.jpg',
    },
  },
  {
    image: Blogimg2,
    date: { day: '25', month: 'Oct' },
    category: 'Policy',
    comments: 0,
    title: 'New Standards for Home-Based Care Announced',
    excerpt:
      'The Ministry of Health, in partnership with HOCA-A, has officially released a new set of comprehensive standards designed to professionalize and regulate the home-based care sector, ensuring safety and quality for all.',
    author: {
      name: 'By Hoca-A',
      role: 'Web Admin',
      avatar: '/images/ppictur.jpg',
    },
  },
];

const categories = [
  'All',
  'Caregiving',
  'Community',
  'Eldercare',
  'Policy',
  'Training',
  'Events',
];

const BlogPage = () => {
  return (
    <div className="bg-background text-foreground">
      <PageHero
        title="HOCA-A Blog"
        currentPage="Our Blog"
      // backgroundImage={ForCaregiversImg}
      />
      <div className="relative z-10 bg-background">
        <div className="container py-16 sm:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-2 grid gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border border-border overflow-hidden p-6"
                >
                  <div className="relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="w-full h-[30rem] object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-[#c39c1d] text-primary-foreground p-4 px-8 rounded-br-lg">
                      <p className="font-bold text-2xl">{post.date.day}</p>
                      <p className="text-sm">{post.date.month}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span>{post.category}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments} Comments</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold font-headline mb-4 text-foreground">
                      <Link href="#" className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.avatar} />
                          <AvatarFallback>
                            {post.author.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <Button asChild>
                        <Link href="#">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-gray-100 p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-bold mb-4 font-headline text-foreground">Search</h3>
                <div className="relative">
                  <Input placeholder="Search blog..." className="pr-10" />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="bg-gray-100 p-6 rounded-sm shadow-md">
                <h3 className="text-xl font-bold mb-4 font-headline text-foreground">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link
                        href="#"
                        className="flex justify-between items-center text-muted-foreground hover:text-primary transition-colors py-4 my-4  bg-white px-4 rounded-md"
                      >
                        <span>{category}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
