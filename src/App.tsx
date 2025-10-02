import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { SizeChart } from './components/SizeChart';
import { ImageGallery } from './components/ImageGallery';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Car, Zap, Users } from 'lucide-react';
import { log } from 'console';

export default function App() {
  const galleryImages = [
    "https://images.unsplash.com/photo-1697914584244-26e5d58eda67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjczOTM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1610643981357-8b6a16ae2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwamFja2V0JTIwbGVhdGhlcnxlbnwxfHx8fDE3NTY3MzkzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1605868752262-58f35d6ef92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBzdWl0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY3Mzk0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1729040268167-b89ff6b163c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzM5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const categories = [
    { name: 'Casual', description: 'Inspired by daily drives and comfort' },
    { name: 'Smart Casual', description: 'Sophisticated automotive elegance' },
    { name: 'Business/Workwear', description: 'Executive precision meets performance' },
    { name: 'Evening/Formal', description: 'Luxury car sophistication' },
    { name: 'Party/Statement', description: 'Bold supercar energy' },
    { name: 'Avant-Garde', description: 'Futuristic vehicle concepts' },
    { name: 'Streetwear', description: 'Urban motorcycle culture' },
    { name: 'Athleisure', description: 'Racing performance wear' },
    { name: 'Minimalist', description: 'Clean automotive lines' },
    { name: 'Luxury/High-Fashion', description: 'Premium car craftsmanship' },
    { name: 'Resort/Vacation', description: 'Convertible summer vibes' },
    { name: 'Loungewear', description: 'Comfort meets automotive luxury' }
  ];

  const collections = [
    {
      name: 'tesla model s blazer',
      price: '$450',
      vehicle: 'tesla model s',
      image: "https://images.unsplash.com/photo-1697914584244-26e5d58eda67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjczOTM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'porsche 911 leather jacket',
      price: '$650',
      vehicle: 'porsche 911',
      image: "https://images.unsplash.com/photo-1610643981357-8b6a16ae2521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwamFja2V0JTIwbGVhdGhlcnxlbnwxfHx8fDE3NTY3MzkzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'ferrari f1 racing suit',
      price: '$850',
      vehicle: 'ferrari f1',
      image: "https://images.unsplash.com/photo-1605868752262-58f35d6ef92b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBzdWl0JTIwZmFzaGlvbnxlbnwxfHx8fDE3NTY3Mzk0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'range rover executive coat',
      price: '$720',
      vehicle: 'range rover',
      image: "https://images.unsplash.com/photo-1729040268167-b89ff6b163c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzM5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  const jobOpenings = [
    {
      title: 'Senior Fashion Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'Automotive Trend Researcher',
      department: 'Design',
      location: 'Los Angeles, CA',
      type: 'Full-time'
    },
    {
      title: 'Pattern Maker',
      department: 'Production',
      location: 'New York, NY',
      type: 'Contract'
    },
    {
      title: 'Brand Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  let year = new Date();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Landing Page Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1697914584244-26e5d58eda67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBmYXNoaW9ufGVufDF8fHx8MTc1NjczOTM5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="asarē hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative w-full px-4 pb-2">
          <div className="container mx-auto">
            {/* Hero Content */}
            <div className="text-center text-white mb-16">
              <h1 className="text-6xl md:text-8xl mb-6">asarē</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                asarē is an afro-innovative fashion brand, rooted in avant-garde form and playful construction. our
                layered, voluminous silhouettes are mapped by the parts and pieces of vehicles — made for those who
                feel alien in the ordinary.
              </p>
            </div>
            
            {/* Main Layout - Size Chart Left, Gallery Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Size Chart - Left Side */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <SizeChart />
                </div>
              </div>
              
              {/* Image Gallery - Right Side */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <ImageGallery images={galleryImages} />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100">
                explore collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl mb-6">who we are</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                asarē is a revolutionary fashion house that draws inspiration from the world's most iconic
                vehicles and automobiles. from the sleek curves of a Ferrari to the rugged elegance of a
                spaceship, or a bicycle, or even a skateboard, we translate automotive and vehicle design
                language into wearable afro cyber-art.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                founded by African automotive enthusiasts and fashion creative visionaries, our collections
                celebrate the marriage of engineering precision and visual craft. each piece embodies the spirit
                of innovation, performance, and luxury that defines the automotive world.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                our design philosophy centers on the belief that fashion, like automotive design, should push
                boundaries while maintaining functionality and style. every stitch, every line, every detail is
                crafted with the same attention to detail found in the world's finest vehicles.
              </p>
              <Button>discover our vision</Button>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1729040268167-b89ff6b163c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzM5NDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="about asarē"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">system catalog</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              each category mirrors a facet of automotive culture, from everyday utility to high-performance
              engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Collection */}
      <section id="collection" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">current collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
             in this collection, our designs are mapped by the function-first philosophy of the land rover
              defender, 90s build, and its contrasting color panels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((item) => (
              <div key={item.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">inspired by {item.vehicle}</p>
                <p className="">{item.price}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              view full collection
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">visit our flagship store</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              book a private styling session in our automotive-inspired fitting rooms. our stylists will help you
              find pieces that match your favorite vehicle's aesthetic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                <div className="text-center">
                  <Car className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">interactive showroom map</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p>456 automotive way</p>
                    <p className="text-muted-foreground">detroit, mi 48201</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+1 (313) 555-asarē</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>hello@asarebrand.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl mb-6">showroom hours</h3>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between">
                  <span>monday - friday</span>
                  <span className="text-muted-foreground">10:00 am - 8:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>saturday</span>
                  <span className="text-muted-foreground">10:00 am - 9:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>sunday</span>
                  <span className="text-muted-foreground">12:00 am - 6:00 pm</span>
                </div>
              </div>
              
              <h3 className="text-2xl mb-6">private consultations</h3>
              <p className="text-muted-foreground mb-6">
                book a private styling session in our automotive-inspired fitting rooms. 
                Our stylists will help you find pieces that match your favorite vehicle's aesthetic.
              </p>
              <Button className="mb-8">book consultation</Button>
              
              <h3 className="text-2xl mb-6">vehicle design tours</h3>
              <p className="text-muted-foreground mb-6">
                join our monthly tours where we showcase how specific vehicle designs 
                inspired our latest collections.
              </p>
              <Button variant="outline">schedule tour</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Vacancies Section */}
      {/* <section id="careers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">join our team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              be part of the team that's revolutionizing fashion through automotive inspiration. 
              Drive innovation in the intersection of design and engineering.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="h-4 w-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Don't see the perfect role? We're always looking for talented individuals 
                who share our passion for automotive design and fashion innovation.
              </p>
              <Button variant="outline" size="lg">
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-4">stay in the fast lane</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            subscribe to our newsletter and be the first to know about new vehicle-inspired 
            collections, exclusive collaborations, and behind-the-scenes design insights.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="enter your email"
              className="flex-1"
            />
            <Button>subscribe</Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            by subscribing, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl mb-4">asarē</h3>
              <p className="text-primary-foreground/80 mb-4">
                fashion inspired by automotive excellence.
              </p>
              <div className="flex gap-4">
                <Instagram className="h-5 w-5 cursor-pointer hover:text-primary-foreground/80" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-primary-foreground/80" />
                <Facebook className="h-5 w-5 cursor-pointer hover:text-primary-foreground/80" />
              </div>
            </div>
            
            <div>
              <h4 className="mb-4">collections</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground">luxury cars</a></li>
                <li><a href="#" className="hover:text-primary-foreground">sports cars</a></li>
                <li><a href="#" className="hover:text-primary-foreground">motorcycles</a></li>
                <li><a href="#" className="hover:text-primary-foreground">vintage</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">support</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground">size guide</a></li>
                <li><a href="#" className="hover:text-primary-foreground">shipping</a></li>
                <li><a href="#" className="hover:text-primary-foreground">returns</a></li>
                <li><a href="#" className="hover:text-primary-foreground">contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-4">company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground">about</a></li>
                <li><a href="#" className="hover:text-primary-foreground">careers</a></li>
                <li><a href="#" className="hover:text-primary-foreground">collaborations</a></li>
                <li><a href="#" className="hover:text-primary-foreground">press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; {year.getFullYear()} asarē. all rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}