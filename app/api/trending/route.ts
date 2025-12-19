import { NextResponse } from 'next/server'

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  const trendingTopics = [
    {
      topic: 'AI Tools That Will Replace Your Job (and how to use them)',
      description: 'Show how AI tools like ChatGPT, Midjourney are changing work - but position it as opportunity to learn',
      category: 'Technology',
      viralScore: 9,
      hashtags: ['#AI', '#Technology', '#Future', '#AITools']
    },
    {
      topic: 'रोज़ ₹1000 कमाएं - 5 आसान तरीके',
      description: 'Real passive income methods: affiliate marketing, content creation, freelancing, online tutoring',
      category: 'Business/Finance',
      viralScore: 10,
      hashtags: ['#PassiveIncome', '#MoneyMaking', '#SideHustle']
    },
    {
      topic: 'હનુમાન ચાલીસા - વિજ્ઞાન શું કહે છે?',
      description: 'Blend devotion with science - explain frequency, vibrations, mental peace scientifically',
      category: 'Devotional',
      viralScore: 8,
      hashtags: ['#Devotional', '#Hanuman', '#Science', '#Spirituality']
    },
    {
      topic: '5 સવારની આદતો - સફળતા માટે',
      description: '5 AM club, exercise, meditation, reading, journaling - show transformations',
      category: 'Motivation',
      viralScore: 9,
      hashtags: ['#Motivation', '#MorningRoutine', '#Success', '#Habits']
    },
    {
      topic: 'Stock Market for Beginners - સાદી ભાષામાં',
      description: 'Explain basics: what are stocks, how to start with ₹500, SIP, mutual funds in simple language',
      category: 'Finance',
      viralScore: 8,
      hashtags: ['#StockMarket', '#Investing', '#Finance', '#MoneyTips']
    },
    {
      topic: 'ChatGPT Prompts That Will Blow Your Mind',
      description: 'Show actual useful prompts: content creation, learning, productivity, business ideas',
      category: 'Technology',
      viralScore: 9,
      hashtags: ['#ChatGPT', '#AI', '#Productivity', '#TechTips']
    },
    {
      topic: 'Instagram Reels વાયરલ કેવી રીતે કરવી?',
      description: 'Hook, trending audio, captions, posting time, hashtags - complete viral formula',
      category: 'Social Media',
      viralScore: 10,
      hashtags: ['#Instagram', '#Reels', '#Viral', '#SocialMedia']
    },
    {
      topic: 'Healthy થવું છે? આ 5 ખોરાક ખાઓ',
      description: 'Simple, affordable Indian foods: dal, sabzi, fruits, nuts, water - with science',
      category: 'Health',
      viralScore: 7,
      hashtags: ['#Health', '#Nutrition', '#HealthyLiving', '#Fitness']
    },
    {
      topic: 'Free AI Tools for Content Creators',
      description: 'Show tools: Canva, CapCut, ChatGPT, Eleven Labs, InVideo - with demos',
      category: 'Content Creation',
      viralScore: 9,
      hashtags: ['#ContentCreation', '#AITools', '#Free', '#CreatorTips']
    },
    {
      topic: 'भगवद गीता - जीवन के 5 सबक',
      description: 'Practical lessons from Gita applicable to modern life: karma, dharma, detachment',
      category: 'Devotional/Philosophy',
      viralScore: 8,
      hashtags: ['#BhagavadGita', '#Philosophy', '#LifeLessons', '#Wisdom']
    }
  ]

  return NextResponse.json({
    date: today,
    topics: trendingTopics
  })
}
