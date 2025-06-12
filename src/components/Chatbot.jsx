import  { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, MinusCircle } from 'lucide-react';

const responses = {
    greetings: [
      'مرحباً', 'السلام عليكم', 'اهلا', 'هلا', 'هاي', 'صباح الخير', 'مساء الخير', 'أهلاً وسهلاً'
    ],
    products: [
      'منتجاتكم', 'وش عندكم', 'ايش توفرون', 'تفصيل', 'مطبخ', 'مطابخ', 'خزائن', 'خزانة', 'اكسسوارات', 'دواليب',
      'غرف مطبخ', 'دواليب مطبخ', 'مطابخ جاهزة', 'مطابخ تفصيل', 'منتجات المطبخ'
    ],
    pricing: [
      'كم السعر', 'كم يكلف', 'بكم', 'السعر', 'التكلفة', 'عرض سعر', 'كم قيمة', 'سعر المتر', 'الاسعار', 'غالية', 'رخيصة'
    ],
    contact: [
      'تواصل', 'اتصال', 'العنوان', 'الموقع', 'رقم', 'رقمكم', 'كيف اتواصل', 'واتساب', 'جوال', 'هاتف', 'البريد', 'الايميل'
    ],
    thanks: [
      'شكرا', 'شكر', 'مشكور', 'يعطيكم العافية', 'الله يعطيكم العافية', 'ممتازين', 'تعامل رائع', 'أشكركم'
    ],
    complaint: [
      'شكوي','شكوى', 'مشكلة', 'عندي مشكلة', 'مو راضي', 'تأخير', 'تأخرتوا', 'ما وصل', 'في خطأ', 'طلب متأخر', 'خدمة سيئة'
    ],
    time: [
      'متى تفتحون', 'الدوام', 'أوقات العمل', 'ساعات الدوام', 'متى تشتغلون', 'اوقات دوامكم', 'الدوام اليوم'
    ],
    delivery: [
      'توصيل', 'متى يوصل', 'خدمة التوصيل', 'شحن', 'التوصيل خارج جدة', 'تركيب', 'تركبون', 'كم ياخذ تنفيذ'
    ],
    location: [
      'فين موقعكم', 'وينكم', 'وين موقعكم', 'عنوانكم', 'موقع الفرع', 'اين انتم'
    ],
    quality: [
      'الجودة', 'مضمون', 'ممتاز', 'خامات', 'افضل', 'هل هو جيد', 'هل مضمون', 'هل فيه ضمان'
    ],
    dev:['المطور','المبرمج','المهندس','مين المهندس','مين المهندس اللي طور الموقع']
  };
  
  const botResponses = {
    greetings: 'مرحباً بك في شركة ماس آسيا! 👋 كيف يمكنني مساعدتك اليوم؟',
    products: 'نقدم مجموعة من منتجات المطابخ:\n- خزائن حسب الطلب\n- الاكسسوارات\n- الأجهزة المنزلية\n- الألمنيوم\nهل تود معرفة تفاصيل أكثر؟',
    pricing: 'أسعارنا تعتمد على التصميم والمساحة والخامة. يسعدنا نقدم لك عرض سعر مخصص إذا زودتنا ببعض التفاصيل.',
    contact: '📞 تواصل معنا عبر:\n0508575471 – 0126595572\n📧 البريد:\nmas.asya1975@gmail.com\nasya-trading@hotmail.com\n📍 العنوان:\nجدة – حي المنار – شارع قيس بن زهير',
    thanks: 'العفو! وجودك معنا يسعدنا 😊 لا تتردد في التواصل معنا بأي وقت.',
    complaint: 'نعتذر عن أي إزعاج، أرسل لنا رقم الطلب أو المشكلة بالتفصيل، وسنقوم بخدمتك فوراً. رضاك يهمنا!',
    time: '⏰ أوقات الدوام:\nالأحد إلى الخميس: 9 صباحاً – 5 مساءً\nالجمعة والسبت: إجازة',
    delivery: '🚚 نعم، نوفر التوصيل والتركيب حسب الموقع. مدة التنفيذ تختلف حسب التصميم، غالباً بين 7 – 14 يوم.',
    location: '📍 موقعنا في جدة – حي المنار – شارع قيس بن زهير. تقدر تطلب الموقع على الخريطة.',
    quality: 'نستخدم خامات عالية الجودة ونوفر ضمان على التصنيع والتركيب. هدفنا رضاك وثقتك في منتجاتنا.',
    default: 'عذرًا لم أفهم استفسارك بدقة.\nاختر من الآتي:\n- المنتجات\n- الأسعار\n- التواصل\n- التوصيل\n- أوقات العمل\n- تقديم شكوى',
    dev:'المبرمج؟ ده شغل محمد دياب – اللي بيخلي الأكواد تغني 😄💻'
  };
  
  
const findResponseType = (message) => {
  const lowercaseMessage = message.toLowerCase();
  
  for (const [key, keywords] of Object.entries(responses)) {
    if (keywords.some(keyword => lowercaseMessage.includes(keyword))) {
      return key;
    }
  }
  
  return 'default';
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          text: botResponses.greetings,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    setTimeout(() => {
      const responseType = findResponseType(inputText);
      const botMessage = {
        text: botResponses[responseType],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#8B4513] text-white p-4 rounded-full shadow-lg hover:bg-[#A0522D] transition-colors duration-300 flex items-center gap-2 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
            تحدث معنا
          </span>
        </button>
      )}

      {isOpen && (
        <div
          className={`bg-[#FDF5E6] rounded-lg shadow-xl w-96 transition-all duration-300 ${
            isMinimized ? 'h-14' : 'h-[600px]'
          }`}
        >
          <div className="bg-[#8B4513] text-[#FDF5E6] p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">المساعد الآلي</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-[#DEB887] transition-colors"
                aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
              >
                <MinusCircle className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-[#DEB887] transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="h-[480px] overflow-y-auto p-4 bg-[#FAEBD7]">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isBot
                          ? 'bg-white text-[#8B4513] shadow-sm'
                          : 'bg-[#8B4513] text-[#FDF5E6]'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                      <span className="text-xs opacity-75 mt-1 block">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-[#DEB887]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 px-4 py-2 border border-[#DEB887] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] bg-white text-[#8B4513]"
                    dir="rtl"
                  />
                  <button
                    onClick={handleSend}
                    className="bg-[#8B4513] text-white p-2 rounded-lg hover:bg-[#A0522D] transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;