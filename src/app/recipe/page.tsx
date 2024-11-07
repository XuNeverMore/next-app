interface Recipe {
  description: string;
}
interface Menu {
  day: string;
  breakfast: Recipe;
  lunch: Recipe;
  dinner: Recipe;
}
const weeklyMenu: Array<Menu> = [
  {
    day: "周一",
    breakfast: {
      description: "牛奶 250 毫升、全麦面包 50 克、水煮鸡蛋 1 个。",
    },
    lunch: {
      description:
        "糙米米饭 100 克、清炒西蓝花（西蓝花 200 克）、番茄牛肉（牛肉 100 克、番茄 150 克）。",
    },
    dinner: {
      description:
        "玉米窝头 80 克、凉拌豆芽（豆芽 200 克）、清蒸鱼（鱼 100 克）。",
    },
  },
  {
    day: "周二",
    breakfast: {
      description: "燕麦粥 30 克、山药 50 克、小番茄 5 颗。",
    },
    lunch: {
      description:
        "红豆米饭 100 克、虾仁冬瓜（虾仁 50 克、冬瓜 200 克）、清炒时蔬（各种绿叶蔬菜 200 克）。",
    },
    dinner: {
      description:
        "紫薯 80 克、豆腐汤（豆腐 100 克、青菜 50 克）、香煎鸡胸肉（鸡胸肉 80 克）。",
    },
  },
  {
    day: "周三",
    breakfast: {
      description: "豆浆 250 毫升、玉米饼 50 克、黄瓜半根。",
    },
    lunch: {
      description:
        "黑米饭 100 克、胡萝卜炒肉丝（胡萝卜 100 克、瘦肉 80 克）、蚝油生菜（生菜 200 克）。",
    },
    dinner: {
      description:
        "糙面馒头 70 克、菠菜蛋花汤（菠菜 100 克、鸡蛋 1 个）、卤牛腱（牛腱 50 克）。",
    },
  },
  {
    day: "周四",
    breakfast: {
      description: "蔬菜煎蛋饼（鸡蛋 1 个、蔬菜 50 克）、小米粥 30 克。",
    },
    lunch: {
      description:
        "荞麦面条 100 克、凉拌鸡丝（鸡肉 80 克）、清炒豆角（豆角 200 克）。",
    },
    dinner: {
      description:
        "红薯 80 克、番茄豆腐煲（番茄 100 克、豆腐 80 克）、炒虾仁（虾仁 50 克）。",
    },
  },
  {
    day: "周五",
    breakfast: {
      description: "酸奶 100 毫升、全麦馒头 50 克、苹果半个。",
    },
    lunch: {
      description:
        "玉米饭 100 克、芹菜炒豆干（芹菜 150 克、豆干 50 克）、清蒸虾（虾 100 克）。",
    },
    dinner: {
      description:
        "南瓜 80 克、青菜汤（青菜 100 克）、炒瘦肉丝（瘦肉 70 克）。",
    },
  },
  {
    day: "周六",
    breakfast: {
      description: "鸡蛋羹（鸡蛋 1 个）、黑麦面包 40 克、无糖豆浆 200 毫升。",
    },
    lunch: {
      description:
        "糙米饭 100 克、彩椒炒鸡丁（彩椒 100 克、鸡肉 80 克）、清炒白菜（白菜 200 克）。",
    },
    dinner: {
      description:
        "紫薯粥（紫薯 50 克、大米 20 克）、凉拌海带丝（海带丝 100 克）、香煎三文鱼（三文鱼 80 克）。",
    },
  },
  {
    day: "周日",
    breakfast: {
      description:
        "牛奶燕麦片（牛奶 200 毫升、燕麦 30 克）、水煮玉米半根、橙子半个。",
    },
    lunch: {
      description:
        "二米饭（大米、小米各 50 克）、西兰花炒虾仁（西兰花 150 克、虾仁 80 克）、炒芦笋（芦笋 150 克）。",
    },
    dinner: {
      description:
        "玉米发糕 80 克、冬瓜肉丸汤（冬瓜 150 克、肉丸 50 克）、炒鸡蛋（鸡蛋 1 个）。",
    },
  },
];
export default function Page() {
  return (
    <div className="w-full flex justify-center h-screen p-4">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Recipe方法 渲染weeklyMenu数组 */}
        {weeklyMenu.map((menu) => (
          <Recipe key={menu.day} menu={menu} />
        ))}
      </div>
    </div>
  );
}

function Recipe({ menu }: { menu: Menu }) {
  return (
    <div className="">
      <h2 className="text-center font-bold">{menu.day}</h2>
      <p className="py-2">
        <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">
          早
        </span>
        {menu.breakfast.description}
      </p>
      <p className="py-2">
        <span className="bg-orange-500 text-white px-2 py-1 rounded-md mr-2">
          中
        </span>
        {menu.lunch.description}
      </p>
      <p className="py-2">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
          晚
        </span>
        {menu.dinner.description}
      </p>
    </div>
  );
}
