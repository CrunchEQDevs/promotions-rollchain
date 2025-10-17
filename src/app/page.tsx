"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import TelegramButton from "../components/TelegramButton";

interface Promotion {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  terms: string;
  gradient: string;
  bgGradient: string;
  image: string;
  ended?: boolean;
}

export default function Home() {
  const [selectedPromotion, setSelectedPromotion] = useState<Promotion | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'details'>('home');
  const [isTermsOpenMobile, setIsTermsOpenMobile] = useState(false);


  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    setIsTermsOpenMobile(false);
  }, [selectedPromotion]);

const promotions = [
  {
    id: 1,
    type: "ROLLCHAIN REWARDS",
    title: "Earn Unlimited 12% Rakeback in Real-Time!",
    subtitle: "Your loyalty, your rewards — no limits!",
    description:
      "Join Rollchain Rewards and earn 12% Rakeback instantly from all your casino games — no wagering, no limits, just pure rewards.",
details: "1. How do I get rewarded with Rollchain Rewards?\n" +
      "Your Rakeback is updated instantly and available in the Rewards section. Simply click Claim and the Rakeback will be added to your balance.\n\n" +
      "2. Is there a limit to how much I can earn on Rollchain Rewards?\n" +
      "No, there's no limit to how much you can earn.\n\n" +
      "3. Does my Rollchain Rewards expire?\n" +
      "No. Your rewards are permanent and not subject to any change.\n\n" +
      "4. What games contribute to the rakeback on Rollchain Rewards?\n" +
      "Every game you find in the Casino section of the Rollchain.io website (including Live Casino) contributes to your Rollchain Rewards.\n\n" +
      "5. What kind of Rewards do I get?\n" +
      "12% Rakeback – updated in real-time.\n\n" +
      "6. Are there any wagering requirements attached to the Rollchain Rewards?\n" +
      "No, Rollchain Rewards come with zero wagering requirements, ready to be cashed out!\n\n" +
      "7. Should I constantly claim my rewards, or can they be accumulated?\n" +
      "This is completely up to you. Some players like to build up a larger amount whilst others prefer smaller and more frequent pay-outs.",
    terms:
      "1. Rollchain Rewards is the loyalty program for Rollchain.io, which offers 12% Rakeback\n" +
      "2. The Rollchain Rewards progress is a sum accumulated through your real-money bets on casino.\n" +
      "3. Rollchain Rewards is based on your casino denominated in USD according to the market exchange rates.\n" +
      "4. The level progress is unified and will be filled, regardless of the currency you use to play.\n" +
      "5. All available casino games are contributing equally to the level progress.\n" +
      "6. Rakeback is calculated in real-time.\n" +
      "7. Rakeback is calculated according to this formula: Your bets x House Edge % x 12%.\n" +
      "8. Rollchain Rewards have zero wagering requirements attached.\n" +
      "9. Accounts that are disabled, suspended or in any way not deemed active and open will not be eligible for any Rollchain Rewards.\n" +
      "10. Rollchain.io reserves the right to amend the level requirements and rewards at any given moment.\n" +
      "11. Rollchain.io reserves the right to ban players and seize any rewards who are deemed to be trying to abuse the program.\n" +
      "12. Rollchain.io reserves the right to withdraw the Rollchain Rewards program at any time.\n" +
      "13. In the event of technical issues, calculations for rewards during the previous period may be missing. If this occurs, we will re-calculate any unclaimed rewards once the technical issues have been resolved.\n" +
      "14. Rollchain.io General Terms and Conditions apply: https://rollchain.io/doc/general-terms-and-conditions",
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-900/90 via-pink-900/80 to-purple-800/90",
    image: "/banner-provisorio.jpg",
  },
    {
      id: 2,
      type: "BREEDING RACE",
      title: "$8,000 FIRST PRIZE",
      subtitle: "+ 5,000 Free Spins",
      description: "$8,000 + 5,000 Free Spins – October Wagering Race",
      details: "There are some points that have the rules that qualify. The October 24 spaces off about $8,000 and $8,000 free spins in maximum. Twofold: Rolling first place. Coin bought in X Debut. minimal, be race",
      terms: "Breeding Race Terms & Conditions\n\n1. Race runs from October 1-31\n2. Minimum bet $1 required\n3. Top 100 players receive prizes\n4. Real money bets only\n5. Leaderboard updated in real-time",
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-600 to-purple-800",
      image: "/banner-provisorio.jpg"
    },
    {
      id: 3,
      type: "WEEKLY FREEBIES",
      title: "GET UP TO 500 FREE SPINS",
      subtitle: "EVERY WEEK IN FREE SPINS",
      description: "Up to 500 Spins Every Week!",
      details: "Get rewarded every single week with free spins and climb your way up new games every day with no extra cost. The last freebies activity offers along spins for big chances reachers enjoying requirements. Fill red reserved code.",
      terms: "Weekly Freebies Terms & Conditions\n\n1. Free spins awarded every Monday\n2. Valid on selected slots only\n3. No deposit required\n4. Winnings have 40x wagering requirement\n5. Expires 7 days after issue",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-600 to-blue-800",
      image: "/banner-provisorio.jpg"
    },
    {
      id: 4,
      type: "DAILY CASHBACK",
      title: "UP TO 20% CASHBACK",
      subtitle: "EVERY SINGLE DAY",
      description: "20% Back, Every Single Day!",
      details: "Every day THE categories are you that some users can get bets if one gets deposited you'll get paid right back completely before money balance when users today and getting earning to set an entire back hours get the same.",
      terms: "Daily Cashback Terms & Conditions\n\n1. Cashback calculated on net losses\n2. Available every 24 hours\n3. Maximum cashback $1,000 per day\n4. No wagering requirements\n5. Credited automatically",
      gradient: "from-cyan-600 to-teal-600",
      bgGradient: "from-cyan-600 to-cyan-800",
      image: "/banner-provisorio.jpg"
    },
    {
      id: 5,
      type: "BREEDING RACE",
      title: "$11,500 + 12,000 Free Spins",
      subtitle: "August Wagering Race - ENDED",
      description: "Three gst-profit Baggends before has canceled",
      details: "The Agogo 3rd players can over $11,500 and $8,500+ free spins Spins. Twofolds: Racing first place. Considerable in X debut minimal, se race!",
      terms: "Ended Race Terms & Conditions\n\n1. This promotion has ended\n2. Winners have been contacted\n3. Prizes were distributed\n4. Next race starts soon\n5. Stay tuned for updates",
      gradient: "from-red-600 to-pink-600",
      bgGradient: "from-red-600 to-red-800",
      ended: true,
      image: "/banner-provisorio.jpg"
    },
    {
      id: 6,
      type: "VIP REWARDS",
      title: "EXCLUSIVE VIP BENEFITS",
      subtitle: "For High Rollers Only",
      description: "Premium rewards for our VIP members",
      details: "Get access to exclusive tournaments, personal account managers, higher withdrawal limits, and special bonuses designed for serious players.",
      terms: "VIP Program Terms & Conditions\n\n1. Invitation only program\n2. Minimum monthly deposit $10,000\n3. Personal account manager assigned\n4. Enhanced customer support\n5. Special withdrawal limits",
      gradient: "from-yellow-600 to-orange-600",
      bgGradient: "from-yellow-600 to-orange-800",
      image: "/banner-provisorio.jpg"
    }
  ];

  const handleReadMore = (promotion: Promotion) => {
    setSelectedPromotion(promotion);
    setCurrentPage('details');
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedPromotion(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ fontFamily: '"Exo 2", sans-serif' }}>
      {/* Background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 py-8 px-4">

      {currentPage === 'home' && (

      <div className="max-w-full md:max-w-10/12 mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
           
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
          </motion.p>
        </motion.div>

        {/* First Card - 3 Column Layout (1 content + 2 image) */}
        <motion.div
          className="mb-8 relative z-10"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-900/95 border border-gray-700/50 hover:border-blue-500/70 transition-all duration-500 relative overflow-hidden backdrop-blur-sm rounded-lg animated-card">
              <div className="card-border-top"></div>
              <div className="card-border-right"></div>
              <div className="card-border-bottom"></div>
              <div className="card-border-left"></div>
              {/* Mobile Layout - Same as other cards */}
              <div className="block lg:hidden">
                {/* Image Area */}
                <div className="relative overflow-hidden">
                  <Image
                    src={promotions[0].image}
                    alt={promotions[0].title}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-blue-600 text-white">
                      ● {promotions[0].type}
                    </span>
                  </div>
                  <h3 className="text-xl text-white font-bold min-h-[3.5rem] flex items-center mb-2">
                    {promotions[0].title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium min-h-[2.5rem] flex items-center mb-3">
                    {promotions[0].subtitle}
                  </p>
                  <p className="text-gray-300 text-sm mb-3 font-medium min-h-[2.5rem]">
                    {promotions[0].description}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed min-h-[4rem] overflow-hidden mb-4 line-clamp-6 md:line-clamp-none">
                    {promotions[0].details}
                  </p>
                  <button
                    onClick={() => handleReadMore(promotions[0])}
                    className="animated-glassmorphism-button w-full"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="button-text">Read more</span>
                  </button>
                </div>
              </div>

              {/* Desktop Layout - 3 columns */}
              <div className="hidden lg:block">
                <div className="overflow-hidden bg-gray-900/95 border border-gray-700/50 hover:border-purple-500/70 relative backdrop-blur-sm transition-all duration-500 rounded-lg animated-card">
                  <div className="card-border-top"></div>
                  <div className="card-border-right"></div>
                  <div className="card-border-bottom"></div>
                  <div className="card-border-left"></div>
                  <div className="grid grid-cols-3 gap-0 h-full">
                    {/* Left Column - Content */}
                    <div className="px-4 py-4 relative z-10 col-span-1 flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-blue-600 text-white mb-3">
                          ● {promotions[0].type}
                        </span>
                        <h2 className="text-2xl font-bold text-white mb-3 leading-tight">
                          {promotions[0].title}
                        </h2>
                        <p className="text-blue-100 mb-4 leading-relaxed text-sm">
                          Receive the world&apos;s biggest welcome and experience the ultimate gaming experience!
                        </p>
                      </div>
                      <button
                        onClick={() => handleReadMore(promotions[0])}
                        className="animated-glassmorphism-button"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="button-text">Read more</span>
                      </button>
                    </div>

                    {/* Right 2 Columns - Image (Define a altura do card) */}
                    <div className="col-span-2 relative">
                      <Image
                        src="/banner-provisorio.jpg"
                        alt="Promotion Banner"
                        width={800}
                        height={400}
                        className="w-full h-auto block"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Grid of Vertical Cards - 3 per row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {promotions.slice(1, 4).map((promotion) => (
            <motion.div
              key={promotion.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card className="bg-gray-900/95 border border-gray-700/50 hover:border-purple-500/70 transition-all duration-500 relative overflow-hidden backdrop-blur-sm h-full flex flex-col animated-card">
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>
                {/* Header Image Area - Natural Size */}
                <div className="relative overflow-hidden">
                  <Image
                    src={promotion.image}
                    alt={promotion.title}
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />


                  {promotion.ended && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="transform rotate-12">
                        <div className="bg-red-600 border-4 border-red-800 text-white px-4 py-2 font-bold text-xl tracking-wider shadow-xl">
                          ENDED
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-2 flex-shrink-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${
                      promotion.ended ? 'bg-red-600' :
                      promotion.type.includes('BREEDING') ? 'bg-purple-600' :
                      promotion.type.includes('WEEKLY') ? 'bg-blue-600' :
                      promotion.type.includes('DAILY') ? 'bg-cyan-600' :
                      'bg-yellow-600'
                    } text-white`}>
                      ● {promotion.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-white font-bold min-h-[3.5rem] flex items-center">
                    {promotion.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-sm font-medium min-h-[2.5rem] flex items-center">
                    {promotion.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex-grow">
                  <p className="text-gray-300 text-sm mb-3 font-medium min-h-[2.5rem]">
                    {promotion.description}
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed min-h-[4rem] overflow-hidden">
                    {promotion.details}
                  </p>
                </CardContent>

                <CardFooter className="pt-2 flex-shrink-0">
                  <button
                    onClick={() => handleReadMore(promotion)}
                    className="animated-glassmorphism-button w-full"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="button-text">Read more</span>
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
      )}

      {currentPage === 'details' && selectedPromotion && (
        <div className="max-w-full md:max-w-10/12 mx-auto">
          {/* Back Button Top - Left aligned */}
          <motion.div
            className="mb-8 flex justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={handleBack}
              className="back-button"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="button-text">← BACK</span>
            </button>
          </motion.div>

          {/* Header with Image */}
          <motion.div
            className="mb-8 bg-gray-900/95 border border-gray-700/50 rounded-lg overflow-hidden animated-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card-border-top"></div>
            <div className="card-border-right"></div>
            <div className="card-border-bottom"></div>
            <div className="card-border-left"></div>

            <div className="relative">
              <Image
                src={selectedPromotion.image}
                alt={selectedPromotion.title}
                width={1200}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden md:block"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 hidden md:block">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {selectedPromotion.title}
                </h1>
                <p className="text-xl text-white/90">
                  {selectedPromotion.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Promotion Details */}
              <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-6 animated-card">
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>

                <h2 className="text-3xl font-bold text-white mb-4">Promotion Details</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  {selectedPromotion.description}
                </p>
                <pre className="whitespace-pre-wrap text-gray-400 leading-relaxed">
                  {selectedPromotion.details}
                </pre>
              </div>

              {/* Terms & Conditions */}
              <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg animated-card">
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>

                {/* Desktop - always open */}
                <div className="hidden md:block p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Terms & Conditions</h3>
                  <pre className="whitespace-pre-wrap text-gray-400 leading-relaxed">
                    {selectedPromotion.terms}
                  </pre>
                </div>

                {/* Mobile - accordion */}
                <div className="block md:hidden">
                  <button
                    onClick={() => setIsTermsOpenMobile(!isTermsOpenMobile)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors duration-200 rounded-lg"
                  >
                    <h3 className="text-2xl font-bold text-white">Terms & Conditions</h3>
                    <motion.div
                      animate={{ rotate: isTermsOpenMobile ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-xl"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isTermsOpenMobile && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <pre className="whitespace-pre-wrap text-gray-400 leading-relaxed">
                            {selectedPromotion.terms}
                          </pre>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* How to Participate */}
              <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-6 animated-card">
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>

                <h4 className="text-xl font-bold text-white mb-3">How to Participate</h4>
                <p className="text-gray-300">Follow the instructions in the terms and conditions to qualify for this amazing promotion.</p>
              </div>

              {/* Need Help */}
              <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-6 animated-card">
                <div className="card-border-top"></div>
                <div className="card-border-right"></div>
                <div className="card-border-bottom"></div>
                <div className="card-border-left"></div>

                <h4 className="text-xl font-bold text-white mb-3">Need Help?</h4>
                <p className="text-gray-300 mb-4">Contact our support team if you have any questions about this promotion.</p>

                <TelegramButton />
              </div>

              {/* Promotion Type */}

            </motion.div>
          </div>

          {/* Back Button Bottom - Centered */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={handleBack}
              className="back-button"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="button-text">← BACK</span>
            </button>
          </motion.div>
        </div>
      )}

      </div>
    </div>
  );
}
