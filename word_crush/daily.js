window.WordCrushDailyTasks = {
  easy: [
    { id: "easy_complete_level", title: "Complete 1 level", type: "completedLevels", target: 1, reward: 500 },
    { id: "easy_correct_5", title: "Match 30 words correctly", type: "correctAnswers", target: 30, reward: 500 },
    { id: "easy_earn_star", title: "Earn 5 star", type: "stars", target: 5, reward: 500 },
    { id: "easy_score_3000", title: "Score 3000 points in a run", type: "runScore", target: 3000, reward: 500 }
  ],
  medium: [
    { id: "medium_complete_2", title: "Complete 2 levels", type: "completedLevels", target: 2, reward: 1000 },
    { id: "medium_earn_3_stars", title: "Earn 3 stars total", type: "stars", target: 3, reward: 1000 },
    { id: "medium_correct_12", title: "Match 12 words correctly", type: "correctAnswers", target: 12, reward: 1000 },
    { id: "medium_streak_5", title: "Reach a 5 combo chain", type: "bestStreak", target: 5, reward: 1000 },
    { id: "medium_campaign_level", title: "Complete 1 campaign level", type: "campaignLevels", target: 1, reward: 1000 }
  ],
  hard: [
    { id: "hard_three_star", title: "Earn 3 stars on a level", type: "threeStarLevels", target: 1, reward: 2000 },
    { id: "hard_no_mistake", title: "Complete a level with no mistakes", type: "noMistakeLevels", target: 1, reward: 2000 },
    { id: "hard_combo_8", title: "Reach an 8 combo chain", type: "bestStreak", target: 8, reward: 2000 },
    { id: "hard_complete_3", title: "Complete 3 levels", type: "completedLevels", target: 3, reward: 2000 }
  ]
};
