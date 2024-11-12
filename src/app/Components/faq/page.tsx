"use client"; // This is required to use `useState` in Next.js App Router

import { useState } from 'react';

export default function Faq() {
    // State to manage which question is open
    const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({
        question1: false,
        question2: false,
        question3: false,
    });

    // Toggle function to open/close each question
    const toggleAnswer = (question: string) => {
        setOpenQuestions((prevState) => ({
            ...prevState,
            [question]: !prevState[question],
        }));
    };

    return (
      <div className="w-full flex min-h-screen items-center justify-center bg-green-500">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-green-700 mb-2">Sahabat Lingkungan</h1>
          <p className="text-center text-gray-600 mb-6">Pertanyaan yang Sering Diajukan</p>
          
          {/* FAQ Section */}
          <div>
            {/* Question 1 */}
            <div className="mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer('question1')}
              >
                <h2 className="text-lg font-semibold text-gray-700">Apa itu Sahabat Lingkungan?</h2>
                <span className="text-gray-600">{openQuestions.question1 ? '▲' : '▼'}</span>
              </div>
              {openQuestions.question1 && (
                <p className="text-gray-600 mt-1">
                  Sahabat Lingkungan adalah komunitas yang peduli terhadap lingkungan dan berfokus pada edukasi dan aksi nyata untuk menjaga kelestarian alam.
                </p>
              )}
            </div>

            {/* Question 2 */}
            <div className="mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer('question2')}
              >
                <h2 className="text-lg font-semibold text-gray-700">Bagaimana cara bergabung?</h2>
                <span className="text-gray-600">{openQuestions.question2 ? '▲' : '▼'}</span>
              </div>
              {openQuestions.question2 && (
                <p className="text-gray-600 mt-1">
                  Anda dapat bergabung dengan mengisi formulir pendaftaran yang tersedia di halaman Daftar, atau menghubungi kami langsung.
                </p>
              )}
            </div>

            {/* Question 3 */}
            <div className="mb-4">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer('question3')}
              >
                <h2 className="text-lg font-semibold text-gray-700">Apa kegiatan utama komunitas ini?</h2>
                <span className="text-gray-600">{openQuestions.question3 ? '▲' : '▼'}</span>
              </div>
              {openQuestions.question3 && (
                <p className="text-gray-600 mt-1">
                  Kami melakukan berbagai kegiatan seperti pembersihan lingkungan, kampanye peduli lingkungan, dan edukasi tentang pentingnya menjaga alam.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}
