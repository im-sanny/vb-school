import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  Users,
  Trophy,
  Award,
  BookOpen,
  Medal,
} from 'lucide-react';

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4); // Easing function

      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div ref={countRef} className="font-bold text-4xl text-blue-600">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
};

const QuickStats = () => {
  const stats = [
    {
      icon: GraduationCap,
      title: 'Years of Excellence',
      value: 25,
      suffix: '+',
      description: 'Providing quality education',
    },
    {
      icon: Users,
      title: 'Total Students',
      value: 2500,
      suffix: '+',
      description: 'Current enrollment',
    },
    {
      icon: BookOpen,
      title: 'Faculty Members',
      value: 150,
      suffix: '+',
      description: 'Experienced educators',
    },
    {
      icon: Trophy,
      title: 'Academic Achievements',
      value: 95,
      suffix: '%',
      description: 'Board exam success rate',
    },
    {
      icon: Medal,
      title: 'Sports Achievements',
      value: 100,
      suffix: '+',
      description: 'State & national medals',
    },
    {
      icon: Award,
      title: 'Extra-curricular Wins',
      value: 50,
      suffix: '+',
      description: 'Competition victories',
    },
  ];

  return (
    <section className="pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            School at a Glance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our achievements and milestones that showcase our commitment to
            excellence in education
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-xl"></div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 text-blue-600 rounded-lg">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-gray-600 text-lg mb-2">{stat.title}</h3>
                <Counter
                  end={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                />
                <p className="text-gray-500 mt-2 text-sm">{stat.description}</p>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-200 transition-colors pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Additional Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            *Statistics updated as of November 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
