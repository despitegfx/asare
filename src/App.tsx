import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { SizeChart } from './components/SizeChart';
import { ImageGallery } from './components/ImageGallery';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent } from './components/ui/card';
import { ArrowRight, MapPin, Phone, Mail, Instagram, Twitter, Facebook, Car, Zap, Users } from 'lucide-react';


export default function App() {
  const galleryImages = [
    "https://www.dropbox.com/scl/fi/ttmqoueulssgq8c9vq1ah/IMG_2253.JPG?rlkey=avkjhugu4puwmjpk1sz3sd95t&st=myaqkdis&dl=1",
    "https://www.dropbox.com/scl/fi/rncrlx52tmu3hpm3b3qll/IMG_2268.JPG?rlkey=whgnnl97jawacogbqa40xshfq&st=397u9uri&dl=1",
    "https://www.dropbox.com/scl/fi/pw4vqg4h23gsuvfvs9yco/IMG_2327.JPG?rlkey=lrw1eefkzug6as1se3wepl9em&st=oacy4b9u&dl=1",
    "https://www.dropbox.com/scl/fi/tz101b9jocw82lnxvijsa/IMG_2280.JPG?rlkey=bphy79633v904eikm1vhi1uvv&st=v9ae5jag&dl=1",
    "https://www.dropbox.com/scl/fi/caike5j5l3pxknv0um7bt/IMG_2254.JPG?rlkey=obdqpbwua86xwggmv974as6v6&st=ykyymihd&dl=1",
    "https://www.dropbox.com/scl/fi/2tymqboy6dajggj76yhen/IMG_2264.JPG?rlkey=13hzxyr0713iv6oriuhvu8ss2&st=5mkoycoj&dl=1",
    "https://www.dropbox.com/scl/fi/s946dkuok1da0sk4ob61s/IMG_2263.JPG?rlkey=je17847jh6aztf0sdqd5skdwd&st=x4qye57n&dl=1",
    "https://www.dropbox.com/scl/fi/g66zc1zuve7a6bgxgvmxl/IMG_2277.JPG?rlkey=oczkk9j3sbq0r19fc1ytgwt1u&st=ju4q7ta8&dl=1",
    "https://www.dropbox.com/scl/fi/gt5qx33j4s4pgu2sjl4oj/IMG_2346.JPG?rlkey=ay349oxwoug3dkzuz3zbz29ik&st=nhxtrjs3&dl=1",
    "https://www.dropbox.com/scl/fi/4s9yo9hqw72y26gwotfqt/IMG_2347.JPG?rlkey=n60zucgkkdcvvcclnjhd6ypmc&st=sv9e7pzo&dl=1",
    "https://www.dropbox.com/scl/fi/nwvnghbfq46u3f4d0seky/IMG_2343.JPG?rlkey=t89glcapnw347d902n6qxzui6&st=fbe4hved&dl=1",
    "https://www.dropbox.com/scl/fi/j85hem8txcabat9fmbxd1/IMG_2256.JPG?rlkey=a548n7i3prity5fg3enbnf3ed&st=whk3clsf&dl=1",

  ];

  const whoWeAreImages = [
    "https://www.dropbox.com/scl/fi/mapjcuy7pd7mb776p4bsk/SERVOFORM-COLLECTION-NOTES-.zip-1.png?rlkey=hp3xrkzbh6pegpvdiq3aensqx&st=knh6n9sn&dl=1",
    "https://www.dropbox.com/scl/fi/mhqtwozmtyuqx5nc3us8e/SERVOFORM-COLLECTION-NOTES-.zip-2.png?rlkey=0kc20mjmxsr2icghs1kdnminp&st=mjaoqj1g&dl=1"

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
      name: 'ASPHALT TECH PANTS',
      price: 'Gh¢300',
      vehicle: 'inspired by Land Rover Defender 90 build',
      image: "https://www.dropbox.com/scl/fi/7tfyb3rdh792wm56iyq0v/IMG_2265.JPG?rlkey=nscl9wt8sknw613i98br1fz4p&st=ug5375vd&dl=1"
    },
    {
      name: 'Driftline',
      price: 'Gh¢280',
      vehicle: 'inspired by Land Rover Defender 90 build',
      image: "https://www.dropbox.com/scl/fi/ddqyh4vvk0z2rxulz6aid/IMG_2274.JPG?rlkey=forfueu02amr4m3nzuepextiv&st=68b36cyu&dl=1"
    },
    {
      name: 'Heritage Tier Top with Ember tube',
      price: 'Gh¢320 + Gh¢180',
      vehicle: 'inspired by Land Rover Defender 90 Build',
      image: "https://www.dropbox.com/scl/fi/7ncb5u4fsr6plv7oo551n/IMG_2344.JPG?rlkey=bgv3fcdsfmht19ugfkb3o2555&st=jqtxm3si&dl=1"
    },
    {
      name: 'ASPHALT TECH SHORTS',
      price: 'Gh¢288',
      vehicle: 'inspired by Land Rover Defender 90 build',
      image: "https://www.dropbox.com/scl/fi/nwvnghbfq46u3f4d0seky/IMG_2343.JPG?rlkey=t89glcapnw347d902n6qxzui6&st=uxpfcgkb&dl=1"
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
            src="https://cdn.prod.website-files.com/6355c243d169187442c3bc57/64e3e38f6190e8e5e4d1b6ca_Arles_Blue_Posts_0101_Layer%2010.jpg"
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
                  <ImageGallery images={galleryImages} automate={true} />
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
            <div className="aspect-[4/5]  rounded-lg">
                    <ImageGallery images={whoWeAreImages} />
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
                <p className="text-sm text-muted-foreground mb-2">{item.vehicle}</p>
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
            <h2 className="text-4xl mb-4">visit us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              book a private styling session in our automotive-inspired collections. our stylists will help you find pieces that match
              your favorite vehicle's aesthetic from our available collections or from scratch
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
                {/* <div className="text-center"> */}
                  {/* <Car className="h-12 w-12 mx-auto mb-4 text-muted-foreground" /> */}
                  {/* <p className="text-muted-foreground"> */}
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.179745078547!2d-0.32297088776473665!3d5.540342833780275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x6b366972840fe108!2sGMRH%2B4RQ%2C%20Accra!5e0!3m2!1sen!2sgh!4v1763805356412!5m2!1sen!2sgh" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  {/* </p>  */}
                {/* </div> */}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p>Tettey Soler, 10 Weija</p>
                    <p className="text-muted-foreground"></p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>+233 54 251 9992</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>Hello@asarebrand.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl mb-6">showroom hours</h3>
              <div className="space-y-3 mb-8">
                {/* <div className="flex justify-between">
                  <span>monday - friday</span>
                  <span className="text-muted-foreground">10:00 am - 8:00 pm</span>
                </div>
                <div className="flex justify-between">
                  <span>saturday</span>
                  <span className="text-muted-foreground">10:00 am - 9:00 pm</span>
                </div> */}
                <div className="flex justify-between">
                  <span>sunday</span>
                  <span className="text-muted-foreground">2:00 pm - 6:00 pm</span>
                </div>
              </div>
              
              <h3 className="text-2xl mb-6">private consultations</h3>
              <p className="text-muted-foreground mb-6">
                book a private styling session with us. our stylists will help you find pieces that match your
                occasion, body type, and mood — from fit to finish, quietly intentional. <br/><br/>
                slots available. <br/><br/>
                hello@asarebrand.com to book.
              </p>
              <Button className="mb-8">book consultation</Button>
              
              <h3 className="text-2xl mb-6">vehicle design tours</h3>
              <p className="text-muted-foreground mb-6">
                join our bimonthly e-tours where we break down how specific vehicle elements shape our pieces <br/>
                — from interior textures to contour lines and bead placement. <br /><br />
                see the collection through the eyes of the vehicle.
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
                clothing pieces inspired by vehicles and automobiles
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