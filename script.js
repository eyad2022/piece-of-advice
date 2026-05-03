// تحديد العناصر من صفحة HTML
const adviceIdElement = document.getElementById('adviceId');
const adviceTextElement = document.getElementById('adviceText');
const generateBtn = document.getElementById('generateBtn');

// رابط الـ API الذي يعطينا النصائح
const apiUrl = 'https://api.adviceslip.com/advice';

// دالة لجلب البيانات من الإنترنت
async function fetchAdvice() {
    try {
        // إضافة رقم عشوائي في نهاية الرابط لمنع المتصفح من حفظ النتيجة (Cache)
        const response = await fetch(`${apiUrl}?t=${Math.random()}`);
        const data = await response.json();
        
        // استخراج رقم النصيحة والنص نفسه
        const adviceId = data.slip.id;
        const adviceText = data.slip.advice;

        // وضع البيانات الجديدة في الصفحة
        adviceIdElement.textContent = adviceId;
        adviceTextElement.textContent = `"${adviceText}"`;
    } catch (error) {
        // في حال حدوث خطأ في الاتصال بالإنترنت
        adviceTextElement.textContent = `"Oops! Something went wrong. Try checking your connection."`;
        console.error("Error fetching advice:", error);
    }
}

// تنفيذ الدالة عند الضغط على الزر
generateBtn.addEventListener('click', fetchAdvice);
