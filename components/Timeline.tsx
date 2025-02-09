import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const TimelineSection = () => {
  const [selectedYear, setSelectedYear] = useState(2023);

  const eventData = {
    2021: {
      title: "The Beginning of FEEL",
      description: "Our first event brought together 1,000+ people, introducing art therapy and mental wellness workshops to Hyderabad.",
      stats: {
        attendees: "1,000+",
        workshops: "5",
        speakers: "8"
      },
      media: [
        { type: "image", url: "/api/placeholder/400/300", caption: "Opening Ceremony" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Art Therapy Session" },
        { type: "video", url: "/api/placeholder/400/300", caption: "Highlights" }
      ]
    },
    2022: {
      title: "Expanding Horizons",
      description: "FEEL grew to welcome 2,000+ attendees, featuring international speakers and expanded workshop offerings.",
      stats: {
        attendees: "2,000+",
        workshops: "8",
        speakers: "12"
      },
      media: [
        { type: "video", url: "/api/placeholder/400/300", caption: "Event Highlights" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Group Session" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Evening Performance" }
      ]
    },
    2023: {
      title: "Creating Community",
      description: "Our biggest year yet with 3,000+ participants and the introduction of specialized therapy tracks.",
      stats: {
        attendees: "3,000+",
        workshops: "12",
        speakers: "15"
      },
      media: [
        { type: "image", url: "/api/placeholder/400/300", caption: "Main Stage" },
        { type: "video", url: "/api/placeholder/400/300", caption: "Workshop Recap" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Community Circle" }
      ]
    },
    2024: {
      title: "A Global Movement",
      description: "In 2024, FEEL became an international platform, reaching over 5,000 attendees and incorporating global wellness practices and virtual events.",
      stats: {
        attendees: "5,000+",
        workshops: "20",
        speakers: "30"
      },
      media: [
        { type: "video", url: "/api/placeholder/400/300", caption: "Global Keynote" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Virtual Event" },
        { type: "image", url: "/api/placeholder/400/300", caption: "Group Workshop" }
      ]
    }
  };


  // Get the range of years
  const years = Object.keys(eventData).map(year => parseInt(year));
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);

  // Calculate the progress of the timeline bar
  const progressPercentage = Math.max(0.4, Math.min(((selectedYear - minYear) / (maxYear - minYear)) * 100, 100));

  return (
    <div className="min-h-screen bg-white py-20">
      {/* Year selector */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-500">Our Journey</h2>

        <div className="flex justify-center items-center space-x-8">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`relative px-8 py-4 text-xl font-semibold rounded-full transition-all
                ${selectedYear === year
                  ? 'bg-purple-600 text-white shadow-lg scale-110'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {year}
              {selectedYear === year && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-purple-600 rotate-45" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar Below the Years */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Event content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Event header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">{eventData[selectedYear].title}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {eventData[selectedYear].description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {Object.entries(eventData[selectedYear].stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{value}</div>
                <div className="text-gray-600 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Media gallery */}
          <div className="grid grid-cols-4 gap-6">
            {eventData[selectedYear].media.map((item, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-lg aspect-video bg-gray-100">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-600 text-center">{item.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
