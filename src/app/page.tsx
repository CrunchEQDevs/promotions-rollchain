"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);

  const rollchainTerms = `Rollchain Rewards Terms & Conditions

1. Rollchain Rewards is the loyalty program for Rollchain.io, which offers 12% Rakeback
2. The Rollchain Rewards progress is a sum accumulated through your real-money bets on casino.
3. Rollchain Rewards is based on your casino denominated in USD according to the market exchange rates.
4. The level progress is unified and will be filled, regardless of the currency you use to play.
5. All available casino games are contributing equally to the level progress.
6. Rakeback is calculated in real-time
7. Rakeback is calculated according to this formula: Your bets x House Edge % x 12%.
8. Rollchain Rewards have zero wagering requirements attached.
9. Accounts that are disabled, suspended or in any way not deemed active and open will not be eligible for any Rollchain Rewards
10. Rollchain.io reserves the right to amend the level requirements and rewards at any given moment.
11. Rollchain.io reserves the right to ban players and seize any rewards who are deemed to be trying to abuse the program.
12. Rollchain.io reserves the right to withdraw the Rollchain Rewards program at any time.
13. In the event of technical issues, calculations for rewards during the previous period may be missing. If this occurs, we will re-calculate any unclaimed rewards once the technical issues have been resolved.
14. Rollchain.io General Terms and Conditions apply.

FAQ´s

How do I get rewarded with Rollchain Rewards?
Your Rakeback is updated instantly and available in the Rewards section. Simply click Claim and the Rakeback will be added to your balance.

Is there a limit to how much I can earn on Rollchain Rewards?
No, there's no limit to how much you can earn.

Does my Rollchain Rewards expire?
No. Your rewards are permanent and not subject to any change.

What games contribute to the rakeback on Rollchain Rewards?
Every game you find in the Casino section of the Rollchain.io website (including Live Casino) contributes to your Rollchain Rewards.

What kind of Rewards do I get?
12% Rakeback – updated in real-time

Are there any wagering requirements attached to the Rollchain Rewards?
No, Rollchain Rewards come with zero wagering requirements, ready to be cashed out!

Should I constantly claim my rewards, or can they be accumulated?
This is completely up to you. Some players like to build up a larger amount whilst others prefer smaller and more frequent pay-outs.`;

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Rollchain Rewards
          </h1>
          <p className="text-xl text-gray-300">
            Earn 12% Rakeback with zero wagering requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Rollchain Rewards</CardTitle>
              <CardDescription className="text-gray-400">
                12% Rakeback Program with Zero Wagering Requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 p-4 rounded-lg border border-cyan-800/30">
                  <h4 className="font-semibold text-cyan-300 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-cyan-100 space-y-1">
                    <li>• 12% Rakeback on all bets</li>
                    <li>• Real-time calculations</li>
                    <li>• Zero wagering requirements</li>
                    <li>• All casino games contribute</li>
                  </ul>
                </div>
                <div className="text-sm text-gray-300">
                  <p><strong className="text-white">Formula:</strong> Your bets × House Edge % × 12%</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <button
                onClick={() => setShowTerms(!showTerms)}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 rounded-md hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-medium"
              >
                {showTerms ? 'Hide Terms' : 'View Full Terms'}
              </button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50 opacity-70">
            <CardHeader>
              <CardTitle className="text-gray-400">Coming Soon</CardTitle>
              <CardDescription className="text-gray-500">
                Advanced AI-powered rewards system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded opacity-60"></div>
                  </div>
                  <p className="text-gray-500 text-sm">AI-Enhanced Promotions</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800/50 opacity-70">
            <CardHeader>
              <CardTitle className="text-gray-400">Coming Soon</CardTitle>
              <CardDescription className="text-gray-500">
                Premium tier exclusive benefits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-32">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded opacity-60"></div>
                  </div>
                  <p className="text-gray-500 text-sm">Elite Rewards Program</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {showTerms && (
          <div className="mt-8 max-w-4xl mx-auto">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Rollchain Rewards Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-sm text-gray-300 leading-relaxed">
                  {rollchainTerms}
                </pre>
              </CardContent>
              <CardFooter>
                <button
                  onClick={() => setShowTerms(false)}
                  className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
                >
                  Close Terms
                </button>
              </CardFooter>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
