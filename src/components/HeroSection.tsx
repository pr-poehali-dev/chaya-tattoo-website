import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900/20 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            Chaya
            <span className="text-red-500"> Tattoo</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed px-0 mx-28">
            Качественная работа • Быстрое выполнение • Любые стили
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Записаться в Telegram
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-red-500 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-300"
            >
              <Icon name="Image" size={20} className="mr-2" />
              Посмотреть работы
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Быстро</h3>
              <p className="text-gray-400">Оперативное выполнение заказов</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Качественно
              </h3>
              <p className="text-gray-400">Профессиональный подход к работе</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Palette" size={32} className="text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Любые стили
              </h3>
              <p className="text-gray-400">От минимализма до реализма</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-red-400" />
      </div>
    </section>
  );
}
