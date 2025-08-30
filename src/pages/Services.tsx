import React from 'react';
import { Building, GraduationCap, Users, BarChart3, Code, Database, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'College Internships',
      description: 'Comprehensive internship programs for college students to gain real-world experience in technology and data science.',
      features: [
        '3-6 month structured programs',
        'Industry-relevant projects',
        'Mentorship from experts',
        'Certificate of completion',
        'Potential job opportunities'
      ],
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '3-6 months',
      participants: '200+ students',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'School Internships',
      description: 'Early exposure programs for high school students to explore technology careers and build foundational skills.',
      features: [
        'Age-appropriate curriculum',
        'Basic programming concepts',
        'Technology awareness sessions',
        'Career guidance',
        'Project-based learning'
      ],
      icon: Users,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '2-4 weeks',
      participants: '150+ students',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Contractual Technical Training',
      description: 'Customized training programs for organizations to upskill their workforce in emerging technologies.',
      features: [
        'Customized curriculum design',
        'On-site or remote training',
        'Flexible scheduling',
        'Progress tracking & assessment',
        'Post-training support'
      ],
      icon: Building,
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: 'Flexible',
      participants: '50+ companies',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'Data Analytics Projects',
      description: 'End-to-end data analytics solutions for businesses to make data-driven decisions and optimize operations.',
      features: [
        'Data collection & cleaning',
        'Statistical analysis',
        'Interactive dashboards',
        'Predictive modeling',
        'Business insights & recommendations'
      ],
      icon: BarChart3,
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '1-6 months',
      participants: '30+ projects',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  const technologies = [
    { name: 'Python', icon: Code },
    { name: 'Data Science', icon: Database },
    { name: 'Machine Learning', icon: TrendingUp },
    { name: 'Web Development', icon: Building },
    { name: 'Power BI', icon: BarChart3 },
    { name: 'Django', icon: Code }
  ];

  const clientLogos = [
    'TCS', 'Infosys', 'Wipro', 'Accenture', 'IBM', 'Microsoft'
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Future Key provides comprehensive services to unlock career opportunities for individuals and organizations through education, training, and data-driven solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-300">
                      <span className="bg-black/50 px-3 py-1 rounded-full">
                        Duration: {service.duration}
                      </span>
                      <span className="bg-black/50 px-3 py-1 rounded-full">
                        {service.participants}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technologies We Work With */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white font-medium text-sm">{tech.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We've partnered with top companies to deliver exceptional training and analytics solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 flex items-center justify-center"
              >
                <span className="text-gray-300 font-semibold text-lg">{client}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Future Key be the key to unlock your organization's potential. Contact us to discuss your specific requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
            >
              Contact Us
            </Link>
            <Link
              to="/courses"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;