import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ContactSection() {
  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-montserrat">
              <span className="text-red-500">Контакты</span> и запись
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Готовы к новой татуировке? Свяжитесь со мной для консультации и
              записи
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-600/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                    <Icon
                      name="MessageCircle"
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Запись через Telegram
                    </h3>
                    <p className="text-gray-400">Быстро и удобно</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  Напишите мне в Telegram для консультации, обсуждения эскиза и
                  записи на сеанс
                </p>

                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  <Icon name="Send" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Локация</p>
                    <p className="text-gray-400">Будет указана при записи</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">График работы</p>
                    <p className="text-gray-400">По предварительной записи</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center">
                    <Icon name="Shield" size={20} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Безопасность</p>
                    <p className="text-gray-400">Стерильные инструменты</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Icon name="Info" size={24} className="text-red-400 mr-3" />
                  Как проходит запись
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Консультация</p>
                      <p className="text-gray-400 text-sm">
                        Обсуждаем идею, размер и стиль
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Эскиз</p>
                      <p className="text-gray-400 text-sm">
                        Создание индивидуального дизайна
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Запись</p>
                      <p className="text-gray-400 text-sm">
                        Выбираем удобное время
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <p className="text-white font-medium">Сеанс</p>
                      <p className="text-gray-400 text-sm">
                        Качественное и быстрое выполнение
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
