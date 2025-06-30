import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              О <span className="text-red-500">мастере</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-red-900/30 to-gray-800/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="User"
                    size={80}
                    className="text-red-400 mx-auto mb-4"
                  />
                  <p className="text-gray-400 text-lg">Фото мастера Полины</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-white" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white font-montserrat">
                Полина
              </h3>
              <p className="text-xl text-red-400 font-medium">
                Мастер татуировки
              </p>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  Тату-мастер с страстью к искусству на коже. Специализируется
                  на создании уникальных работ в любых стилях.
                </p>
                <p>
                  Главные принципы работы — качество и скорость выполнения.
                  Каждая татуировка создается с особым вниманием к деталям.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-red-600/10 rounded-lg border border-red-600/20">
                  <Icon
                    name="Clock"
                    size={32}
                    className="text-red-400 mx-auto mb-2"
                  />
                  <p className="text-white font-semibold">Быстрое выполнение</p>
                  <p className="text-gray-400 text-sm">Оперативная работа</p>
                </div>

                <div className="text-center p-4 bg-red-600/10 rounded-lg border border-red-600/20">
                  <Icon
                    name="Star"
                    size={32}
                    className="text-red-400 mx-auto mb-2"
                  />
                  <p className="text-white font-semibold">Высокое качество</p>
                  <p className="text-gray-400 text-sm">
                    Профессиональный подход
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
