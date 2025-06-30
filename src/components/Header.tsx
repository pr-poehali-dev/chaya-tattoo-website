import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-red-600/20 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <Icon name="Zap" size={20} className="text-white" />
          </div>
          <span className="text-2xl font-bold text-white font-montserrat">
            Chaya Tattoo
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-red-400 transition-colors font-medium"
          >
            Главная
          </a>
          <a
            href="#works"
            className="text-gray-300 hover:text-red-400 transition-colors font-medium"
          >
            Работы
          </a>
          <a
            href="#contacts"
            className="text-gray-300 hover:text-red-400 transition-colors font-medium"
          >
            Контакты
          </a>
        </nav>

        <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
          Записаться
        </Button>

        <button className="md:hidden text-white">
          <Icon name="Menu" size={24} />
        </button>
      </div>
    </header>
  );
}
