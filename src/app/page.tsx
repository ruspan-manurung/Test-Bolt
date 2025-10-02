import { Phone, Mail, MapPin, Scale, Shield, Award, Users, ChevronRight, Star, CheckCircle, Download, Calendar, Waves } from 'lucide-react'
import { LeadCaptureForm } from '@/components/forms/LeadCaptureForm'
import { NewsletterForm } from '@/components/forms/NewsletterForm'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Waves className="h-12 w-12 text-yellow-500" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-black tracking-wider leading-none">ORCA</span>
                <span className="text-sm font-light text-gray-600 tracking-widest -mt-1">LEGAL</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-black font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-black font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-black font-medium transition-colors">Testimonials</a>
              <Button variant="primary">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Protecting Your Rights.
                <span className="text-yellow-400"> Fighting For Justice.</span>
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                With over 25 years of experience, Orca Legal delivers exceptional legal representation across corporate law, personal injury, and family matters. We don't just practice law—we protect your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg">
                  Get Free Consultation
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                  Call (555) 123-4567
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-gray-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>No Fee Unless We Win</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Case Evaluation</h3>
                <LeadCaptureForm source="hero_form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal solutions tailored to protect your interests and achieve the best possible outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-yellow-500" />,
                title: "Personal Injury",
                description: "Maximum compensation for accidents, medical malpractice, and wrongful death cases.",
                features: ["Auto Accidents", "Slip & Fall", "Medical Malpractice", "Wrongful Death"]
              },
              {
                icon: <Scale className="h-12 w-12 text-yellow-500" />,
                title: "Corporate Law",
                description: "Strategic business legal counsel for companies of all sizes.",
                features: ["Contract Negotiation", "Business Formation", "Mergers & Acquisitions", "Compliance"]
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-500" />,
                title: "Family Law",
                description: "Compassionate representation for your family's most important matters.",
                features: ["Divorce", "Child Custody", "Adoption", "Prenuptial Agreements"]
              },
              {
                icon: <Award className="h-12 w-12 text-yellow-500" />,
                title: "Criminal Defense",
                description: "Aggressive defense strategies to protect your rights and freedom.",
                features: ["DUI Defense", "Drug Crimes", "White Collar", "Appeals"]
              },
              {
                icon: <MapPin className="h-12 w-12 text-yellow-500" />,
                title: "Real Estate Law",
                description: "Complete legal support for all your property transactions and disputes.",
                features: ["Property Transactions", "Title Issues", "Landlord/Tenant", "Construction"]
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-yellow-500" />,
                title: "Estate Planning",
                description: "Secure your legacy with comprehensive estate planning services.",
                features: ["Wills & Trusts", "Probate", "Asset Protection", "Tax Planning"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" className="w-full">
                  Learn More & Get Help
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority/Credentials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Orca Legal?</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">$50M+</div>
              <div className="text-gray-600">Recovered for Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">1000+</div>
              <div className="text-gray-600">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications & Awards</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>Super Lawyers Recognition</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>AV Preeminent Rating</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span>Best Lawyers in America</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Affiliations</h3>
              <div className="space-y-3">
                <div>American Bar Association</div>
                <div>State Trial Lawyers Association</div>
                <div>International Association of Defense Counsel</div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-3">
                <div>Harvard Law School, J.D.</div>
                <div>Yale University, B.A.</div>
                <div>Admitted to Practice in Multiple States</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results, real testimonials</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                case: "Personal Injury",
                rating: 5,
                text: "Orca Legal fought tirelessly for my case. Their expertise and dedication resulted in a settlement that exceeded my expectations. I couldn't have asked for better representation.",
                result: "$1.2M Settlement"
              },
              {
                name: "Robert Chen",
                case: "Corporate Law",
                rating: 5,
                text: "The team's strategic approach to our merger was exceptional. They navigated complex negotiations and ensured our interests were protected throughout the entire process.",
                result: "Successful $50M Merger"
              },
              {
                name: "Maria Rodriguez",
                case: "Family Law",
                rating: 5,
                text: "During the most difficult time of my life, Orca Legal provided compassionate yet aggressive representation. They secured a favorable custody arrangement for my children.",
                result: "Full Custody Awarded"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.case} Client</div>
                  <div className="text-green-600 font-semibold mt-2">{testimonial.result}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Start Your Success Story Today
            </Button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Free Legal Guide: "10 Critical Mistakes That Could Destroy Your Case"
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Download our comprehensive guide and discover insider secrets that could make or break your legal case. Learn what insurance companies don't want you to know.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Common mistakes that can cost you thousands",
                  "What to do immediately after an accident",
                  "How to deal with insurance companies",
                  "When to hire an attorney",
                  "Questions to ask potential lawyers"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="text-center mb-6">
                <Download className="h-16 w-16 text-black mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Guide</h3>
                <p className="text-gray-600">No cost, no obligation - just valuable insights</p>
              </div>
              
              <NewsletterForm />
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                We respect your privacy. Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black mb-6">
            Don't Wait - Your Case Has a Deadline
          </h2>
          <p className="text-xl text-black mb-8">
            Every day you wait could jeopardize your case. Get experienced legal representation working for you today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
          
          <p className="text-black">
            Available 24/7 • Free Consultation • No Fee Unless We Win
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="h-10 w-10 text-yellow-500" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white tracking-wider leading-none">ORCA</span>
                  <span className="text-sm font-light text-gray-300 tracking-widest -mt-1">LEGAL</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Protecting your rights and fighting for justice since 1998.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <span>info@orcalegal.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-yellow-500" />
                  <span>123 Legal Street, City, State 12345</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Personal Injury</a></li>
                <li><a href="#" className="hover:text-white">Corporate Law</a></li>
                <li><a href="#" className="hover:text-white">Family Law</a></li>
                <li><a href="#" className="hover:text-white">Criminal Defense</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Free Consultation</a></li>
                <li><a href="#" className="hover:text-white">Legal Guides</a></li>
                <li><a href="#" className="hover:text-white">Case Results</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <p className="text-gray-400 mb-4">Available 24/7 for urgent legal matters</p>
              <Button variant="primary" className="w-full">
                Call Now: (555) 123-4567
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Orca Legal. All rights reserved. | Attorney Advertising</p>
          </div>
        </div>
      </footer>
    </div>
  )
}