"use client";

export default function TermServicePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-3xl bg-[#AFFFD5] p-6 rounded-2xl shadow-md mb-6">
        <h1 className="text-2xl font-bold text-black text-center">ข้อกำหนดและเงื่อนไขการใช้บริการ</h1>
      </div>

    
      <div className="w-full max-w-3xl bg-[#AFFFD5] p-6 rounded-2xl shadow-md overflow-auto">
        <p className="text-black mb-4">
          [ชื่อแอปพลิเคชัน] (“แอปฯ”) ให้บริการนัดหมายแพทย์และสั่งยาผ่านร้านขายยาที่ได้รับอนุญาต
          โดยการใช้งานถือว่าผู้ใช้ (“คุณ”) ยอมรับเงื่อนไขดังต่อไปนี้
        </p>

        <ol className="list-decimal list-inside space-y-2 text-black">
          <li>
            <strong>การใช้งาน:</strong> คุณต้องลงทะเบียนด้วยข้อมูลที่ถูกต้อง และรับผิดชอบต่อบัญชีของตน
            ห้ามใช้แอปฯ ในทางที่ผิดกฎหมายหรือให้ข้อมูลเท็จ
          </li>
          <li>
            <strong>การนัดหมายและสั่งยา:</strong> การนัดหมายขึ้นอยู่กับตารางของแพทย์
            ยาจะจัดส่งโดยร้านขายยาที่ได้รับอนุญาตเท่านั้น
            คุณควรปฏิบัติตามคำแนะนำของแพทย์/เภสัชกร
          </li>
          <li>
            <strong>ค่าบริการ:</strong> ค่าใช้จ่ายจะแสดงก่อนยืนยันการทำรายการ
            การชำระเงินทำผ่านช่องทางที่กำหนด และไม่สามารถคืนเงินได้ ยกเว้นกรณีระบบผิดพลาด
          </li>
          <li>
            <strong>ข้อมูลส่วนบุคคล:</strong> ข้อมูลของคุณจะถูกเก็บและใช้ตามนโยบายความเป็นส่วนตัว
            ผู้ให้บริการใช้มาตรการรักษาความปลอดภัย แต่ไม่สามารถรับประกันได้ 100%
          </li>
          <li>
            <strong>ข้อจำกัดความรับผิด:</strong> ผู้ให้บริการไม่รับผิดชอบต่ออาการไม่พึงประสงค์จากการใช้ยาผิดวิธี
            ไม่รับผิดชอบต่อความผิดพลาดจากบุคคลที่สาม เช่น ร้านขายยา แพทย์ หรือผู้ส่งยา
          </li>
          <li>
            <strong>กฎหมายที่ใช้บังคับ:</strong> เงื่อนไขนี้อยู่ภายใต้กฎหมายของประเทศไทย
          </li>
        </ol>
      </div>
      <div className="w-full max-w-3xl bg-green-700 p-6 rounded-2xl shadow-md mt-6 cursor-pointer hover:scale-105 transition-transform">
        <p className="text-white text-center text-xl font-bold">
        <a  href="/landing_page">  
          การใช้แอปฯ ถือว่าคุณยอมรับข้อกำหนดและเงื่อนไขนี้
        </a>
        </p>      
      </div>
      <div className="w-full max-w-3xl bg-red-600 p-6 rounded-2xl shadow-md mt-6 cursor-pointer hover:scale-105 transition-transform">
        <p className="text-white text-center text-xl font-bold">
          หากคุณไม่ยอมรับเงื่อนไขนี้ กรุณาอย่าใช้แอปฯ
        </p>      
      </div>
    </div>
  );
}
