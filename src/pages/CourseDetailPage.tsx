import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, BookOpen, Download, Play, CheckCircle } from 'lucide-react';

const CourseDetailPage = () => {
  const { courseId } = useParams();

  // Mock course data - in a real app this would come from an API
  const course = {
    id: 'business-architecture-101',
    title: 'Business Architecture Fundamentals',
    description: 'Master the essentials of business architecture for successful digital transformation in agri-food organizations. This comprehensive course covers strategic planning, system design, and implementation best practices.',
    theme: 'Business Architecture',
    level: 'Beginner',
    format: 'Course',
    duration: '2 hours',
    students: 1250,
    rating: 4.8,
    lessons: 8,
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
    instructor: {
      name: 'Dr. Sarah van Berg',
      title: 'Lead Architect at WALABI',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Expert in business informatics with 15+ years in digital transformation.',
    },
    learningOutcomes: [
      'Understand core business architecture principles',
      'Design target architecture maps',
      'Create transformation roadmaps',
      'Identify risks and dependencies',
      'Apply architecture in agri-food contexts',
    ],
    syllabus: [
      {
        module: 'Introduction to Business Architecture',
        duration: '15 min',
        lessons: ['What is Business Architecture?', 'Key Components Overview'],
        completed: true,
      },
      {
        module: 'Strategic Alignment',
        duration: '20 min',
        lessons: ['Linking Strategy to Architecture', 'Value Stream Mapping'],
        completed: true,
      },
      {
        module: 'Architecture Mapping',
        duration: '25 min',
        lessons: ['Current State Assessment', 'Future State Design'],
        completed: false,
      },
      {
        module: 'Transformation Planning',
        duration: '20 min',
        lessons: ['Roadmap Development', 'Risk Assessment'],
        completed: false,
      },
      {
        module: 'Implementation Strategy',
        duration: '15 min',
        lessons: ['Change Management', 'Success Metrics'],
        completed: false,
      },
      {
        module: 'Agri-Food Applications',
        duration: '20 min',
        lessons: ['Case Studies', 'Industry Best Practices'],
        completed: false,
      },
      {
        module: 'Tools & Templates',
        duration: '15 min',
        lessons: ['Architecture Tools', 'Downloadable Resources'],
        completed: false,
      },
      {
        module: 'Assessment & Next Steps',
        duration: '10 min',
        lessons: ['Knowledge Check', 'Further Learning'],
        completed: false,
      },
    ],
    prerequisites: [
      'Basic understanding of business operations',
      'Familiarity with digital systems (helpful but not required)',
    ],
    downloads: [
      'Business Architecture Template',
      'Transformation Roadmap Worksheet',
      'Risk Assessment Checklist',
    ],
  };

  const getLevelColor = (level: string) => {
    const colors = {
      Beginner: 'bg-green-100 text-green-700',
      Intermediate: 'bg-yellow-100 text-yellow-700',
      Advanced: 'bg-red-100 text-red-700',
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const completedModules = course.syllabus.filter(module => module.completed).length;
  const progressPercentage = (completedModules / course.syllabus.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/academy"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Academy</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Course Header */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-blue-600 font-medium mb-2">{course.theme}</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">{course.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Course Progress</span>
                    <span className="text-sm text-gray-500">{completedModules}/{course.syllabus.length} modules</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Continue Learning</span>
                </button>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Syllabus</h2>
              <div className="space-y-4">
                {course.syllabus.map((module, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                      module.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        Module {index + 1}: {module.module}
                      </h3>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">{module.duration}</span>
                        {module.completed && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {module.lessons.map((lesson, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${module.completed ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Instructor */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Instructor</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={course.instructor.image}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{course.instructor.name}</h4>
                  <p className="text-sm text-blue-600">{course.instructor.title}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{course.instructor.bio}</p>
            </div>

            {/* Prerequisites */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prerequisites</h3>
              <ul className="space-y-2">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Downloads */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Resources</h3>
              <div className="space-y-3">
                {course.downloads.map((download, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 text-sm"
                  >
                    <span>{download}</span>
                    <Download className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* How to Apply */}
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border-2 border-blue-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How to Apply Knowledge</h3>
              <p className="text-sm text-gray-600 mb-4">
                Use the provided templates and frameworks immediately in your organization. Schedule a consultation to discuss implementation strategies.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Book Implementation Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;