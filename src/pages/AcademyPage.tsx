import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Users, Star, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const themes = ['All', 'Business Architecture', 'Digital Trends', 'Interoperability', 'Smart Systems'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const formats = ['All', 'Course', '2-Pager', 'Template', 'Checklist'];

  const courses = [
    {
      id: 'business-architecture-101',
      title: 'Business Architecture Fundamentals',
      description: 'Learn the essentials of business architecture for digital transformation in agri-food.',
      theme: 'Business Architecture',
      level: 'Beginner',
      format: 'Course',
      duration: '2 hours',
      students: 1250,
      rating: 4.8,
      lessons: 8,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    },
    {
      id: 'data-interoperability-guide',
      title: 'Data Interoperability Starter Kit',
      description: 'Practical templates and checklists for implementing data sharing standards.',
      theme: 'Interoperability',
      level: 'Intermediate',
      format: '2-Pager',
      duration: '30 min',
      students: 890,
      rating: 4.9,
      lessons: 1,
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg',
    },
    {
      id: 'ai-trends-2025',
      title: 'AI in Agriculture: 2025 Trends',
      description: 'Comprehensive analysis of artificial intelligence applications and future opportunities.',
      theme: 'Digital Trends',
      level: 'Advanced',
      format: 'Course',
      duration: '3 hours',
      students: 2100,
      rating: 4.7,
      lessons: 12,
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg',
    },
    {
      id: 'smart-systems-checklist',
      title: 'Smart Information Systems Checklist',
      description: 'Step-by-step implementation guide for intelligent agricultural systems.',
      theme: 'Smart Systems',
      level: 'Intermediate',
      format: 'Checklist',
      duration: '45 min',
      students: 670,
      rating: 4.6,
      lessons: 1,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    },
    {
      id: 'digital-transformation-roadmap',
      title: 'Digital Transformation Roadmap Template',
      description: 'Ready-to-use template for planning your organization\'s digital journey.',
      theme: 'Business Architecture',
      level: 'Beginner',
      format: 'Template',
      duration: '1 hour',
      students: 1500,
      rating: 4.8,
      lessons: 1,
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    },
    {
      id: 'dataspace-readiness',
      title: 'Dataspace Readiness Assessment',
      description: 'Evaluate your organization\'s preparedness for data collaboration ecosystems.',
      theme: 'Interoperability',
      level: 'Advanced',
      format: '2-Pager',
      duration: '20 min',
      students: 540,
      rating: 4.9,
      lessons: 1,
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
    },
  ];

  const learningPaths = [
    {
      title: 'Interoperability Mastery Path',
      description: 'From basics to advanced data sharing implementation',
      courses: ['Data Standards 101', 'Semantic Modeling', 'Dataspace Integration'],
      duration: '8 hours',
      students: 420,
    },
    {
      title: 'Digital Architecture Journey',
      description: 'Complete business architecture transformation',
      courses: ['Architecture Fundamentals', 'System Design', 'Implementation Strategy'],
      duration: '12 hours',
      students: 680,
    },
    {
      title: 'Smart Agriculture Systems',
      description: 'Build intelligent information systems for farming',
      courses: ['IoT Foundations', 'Data Analytics', 'AI Applications'],
      duration: '10 hours',
      students: 310,
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTheme = selectedTheme === 'All' || course.theme === selectedTheme;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    const matchesFormat = selectedFormat === 'All' || course.format === selectedFormat;
    
    return matchesSearch && matchesTheme && matchesLevel && matchesFormat;
  });

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-700',
      Intermediate: 'bg-yellow-100 text-yellow-700',
      Advanced: 'bg-red-100 text-red-700',
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const getFormatIcon = (format: string) => {
    const icons = {
      Course: <Play className="h-4 w-4" />,
      '2-Pager': <BookOpen className="h-4 w-4" />,
      Template: <BookOpen className="h-4 w-4" />,
      Checklist: <BookOpen className="h-4 w-4" />,
    };
    return icons[format as keyof typeof icons] || <BookOpen className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">WALABI Academy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Short, practical lessons and templates to apply digital in agri-food—faster. Learn by theme, follow a learning path, or download our 2-pager kits to use at work today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Browse Lessons
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200">
                Download Starter Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl border-2 border-transparent hover:border-blue-200 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.description}</p>
                <div className="space-y-2 mb-4">
                  {path.courses.map((course, idx) => (
                    <div key={idx} className="text-sm text-gray-500">• {course}</div>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{path.duration}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{path.students} students</span>
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses and resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedTheme}
                onChange={(e) => setSelectedTheme(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>

              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {formats.map(format => (
                  <option key={format} value={format}>{format}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              All Resources ({filteredCourses.length})
            </h2>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <Filter className="h-5 w-5" />
              <span>Sort by: Newest</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                key={course.id}
                to={`/academy/${course.id}`}
                className="group bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
                    {getFormatIcon(course.format)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{course.theme}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;