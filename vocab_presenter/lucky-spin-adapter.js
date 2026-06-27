const VocabLuckySpinAdapter = (() => {
  const DATA = {
    "5:3": {
      initial: [
        { prompt: "Tell two items people wear on their heads.", points: 10 },
        { prompt: "Tell three accessories women often wear.", points: 15 },
        { prompt: "Tell two items you wear on rainy days.", points: 10 },
        { prompt: "Tell one item of clothing only women wear.", points: 5 },
        { prompt: "Tell two clothing items you wear only in cold weather.", points: 10 },
        { prompt: "Tell three items of clothing you wear on your feet.", points: 15 },
        { prompt: "Tell two clothing items you wear only in hot weather.", points: 10 },
        { prompt: "Tell two clothing items or accessories you put on your hands.", points: 10 }
      ],
      extra: [
        { prompt: "Tell two items you can wear on your head.", points: 10 },
        { prompt: "Tell two items you can wear on your feet.", points: 10 },
        { prompt: "Tell three accessories.", points: 15 },
        { prompt: "Tell two items you wear in winter.", points: 10 },
        { prompt: "Tell two items you wear in summer.", points: 10 },
        { prompt: "Tell one item you wear around your neck.", points: 5 },
        { prompt: "Tell one item you wear on your finger.", points: 5 },
        { prompt: "Tell one item only women often wear.", points: 5 },
        { prompt: "Tell two items people wear at a costume party.", points: 10 },
        { prompt: "Tell two clothes you wear on your legs.", points: 10 },
        { prompt: "Tell two clothes you wear on your upper body.", points: 10 },
        { prompt: "Tell one item you wear when it is sunny.", points: 5 },
        { prompt: "Tell one item you wear when it is rainy.", points: 5 },
        { prompt: "Tell one thing you wear over a shirt.", points: 5 },
        { prompt: "Tell one thing you wear under shoes.", points: 5 },
        { prompt: "Tell two items you can wear at a party.", points: 10 }
      ]
    }
  };

  function decorate(items, key, group) {
    return (items || []).map((item, index) => ({
      id: `${key}:${group}:${index + 1}`,
      label: String(index + 1),
      ...item
    }));
  }

  function getInitial(grade, unit) {
    const key = `${grade}:${unit}`;
    return decorate(DATA[key]?.initial, key, "initial");
  }

  function getExtra(grade, unit) {
    const key = `${grade}:${unit}`;
    return decorate(DATA[key]?.extra, key, "extra");
  }

  function get(grade, unit) {
    return getInitial(grade, unit);
  }

  return { get, getInitial, getExtra };
})();
