import React from 'react';
import { Target, Eye, Users, Award, BookOpen, Lightbulb, Sparkles, Briefcase, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Kailas Manickam',
      role: 'Founder & Lead Instructor',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: '2+ years in software development and education with a passion for teaching.',
      specialties: ['Python', 'Data Structures', 'Algorithms']
    },
    {
      name: 'Kayalvizhi N',
      role: 'Managing Director',
      image: 'https://images.pexels.com/photos/1761612/pexels-photo-1761612.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 3+ years of experience in strategic planning and business development. Passionate about innovation and growth.',
      specialties: ['Business Strategy', 'Financial Planning', 'Operations']
    },
    {
      name: 'Prof. Karthick',
      role: 'Data Science Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'B.Tech in Engineering, 3+ years in data science. Published researcher and industry consultant.',
      specialties: ['Machine Learning', 'Statistics', 'Data Analysis']
    },
    {
      name: 'Abhishek C',
      role: 'Digital Marketing Expert',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Marketing strategist with 4+ years experience. Helped 100+ businesses grow their online presence.',
      specialties: ['SEO', 'Social Media', 'Content Strategy']
    },
    {
      name: 'Prasanth',
      role: 'UI/UX Developer',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Senior developer with expertise in modern web technologies. Built applications for Fortune 500 companies.',
      specialties: ['React', 'Node.js', 'Cloud Architecture']
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Learn by Doing',
      description: 'We believe in hands-on learning with real-world projects that prepare you for actual job scenarios.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Join a supportive community of learners and mentors who help each other succeed.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously update our curriculum to match industry trends and emerging technologies.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality education ensures you receive the best learning experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              {' '}Future Key
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your virtual space to unlock dream career opportunities. We provide the key to open doors to your professional future through quality education and hands-on learning.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Founded in 2025, Future Key emerged from a simple yet powerful vision: to create a virtual space where anyone can unlock their dream career opportunities. Our founders, experienced professionals from tech giants and prestigious universities, recognized the gap between traditional education and industry needs.
                </p>
                <p>
                  We named our platform "Future Key" because we believe education is the master key that unlocks doors to unlimited career possibilities. In our virtual learning space, every course is designed to be a key that opens new opportunities and transforms professional futures.
                </p>
                <p>
                  Today, we've helped over 10,000 students worldwide transition into fulfilling careers, with our graduates working at top companies like Google, Microsoft, Amazon, and innovative startups across the globe.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-400/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl mr-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To create a virtual space where quality education serves as the key to unlock dream career opportunities, making professional success accessible to everyone regardless of their background or location.
            </p>
          </div>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl mr-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the world's most trusted virtual learning space where every student can find the key to unlock their dream career and build a successful future in the rapidly evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape our approach to education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn from industry professionals with proven track records and passion for teaching.
            </p>
          </div>

          {/* Corrected grid for 5 team members on one line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-2xl mx-auto mb-4 object-cover border-4 border-emerald-500"
                  />
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-emerald-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400 font-medium">Specialties:</div>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-700 text-emerald-400 text-xs rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300">
              Real results that speak for our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Students Graduated' },
              { number: '6+', label: 'Expert Instructors' },
              { number: '10+', label: 'Courses Available' },
              { number: '98%', label: 'Job Placement Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;