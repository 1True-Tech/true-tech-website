"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Twitter,
  Linkedin,
  Instagram,
  Dribbble,
} from 'lucide-react';

const SocialIcons = () => {
    const socialLinks = [
        {
          name: 'Twitter',
          url: 'https://twitter.com/yourhandle',
          icon: <Twitter className="w-5 h-5" />,
          color: 'hover:text-[#1DA1F2]'
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/yourprofile',
          icon: <Linkedin className="w-5 h-5" />,
          color: 'hover:text-[#0A66C2]'
        },
        {
          name: 'Instagram',
          url: 'https://instagram.com/yourhandle',
          icon: <Instagram className="w-5 h-5" />,
          color: 'hover:text-[#E1306C]'
        },
        {
          name: 'Dribbble',
          url: 'https://dribbble.com/yourprofile',
          icon: <Dribbble className="w-5 h-5" />,
          color: 'hover:text-[#EA4C89]'
        }
      ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Connect With Us
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Follow us on social media for updates and news
        </p>
      </div>
      <div className="flex justify-center gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className={`flex items-center justify-center w-12 h-12 rounded-full 
                       bg-white dark:bg-gray-800 shadow-md hover:shadow-lg 
                       transition-all duration-300 ${link.color}
                       border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300`}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;