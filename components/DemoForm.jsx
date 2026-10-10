"use client";

import { submitLead } from "@/app/_actions/submit-lead";

// "Book your free demo" form. On submit it saves the request in the database
// (you see it in /admin/leads) and opens WhatsApp with the details pre-filled.
// All texts come in through the "texts" prop (edited in admin > Pages > Home > Demo form).
export default function DemoForm({ whatsappNumber = "971555515475", texts }) {
  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      texts.whatsappMessage + "\n" +
      "Name: " + f.get("name") + "\n" +
      "Company: " + f.get("company") + "\n" +
      "WhatsApp: " + f.get("phone") + "\n" +
      "Interest: " + f.get("interest");
    // Open WhatsApp first (browsers block pop-ups that open after a delay)
    window.open("https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text), "_blank");
    // Then save the request. We do not wait for it.
    submitLead({
      name: f.get("name"),
      company: f.get("company"),
      phone: f.get("phone"),
      interest: f.get("interest"),
    });
  }

  return (
    <form id="demo-form" className="bg-white rounded-3xl p-6 md:p-7 shadow-2xl rv rv-d2" onSubmit={handleSubmit}>
      <b className="display text-xl">{texts.title}</b>
      <p className="text-sm text-[#6B7C8C] mt-1">{texts.subtitle}</p>
      <div className="grid sm:grid-cols-2 gap-3 mt-5">
        <input required name="name" placeholder={texts.namePlaceholder} className="rounded-xl border border-[#E6ECF0] px-4 py-3 outline-none focus:border-[#0FAF7A]" />
        {" "}
        <input required name="company" placeholder={texts.companyPlaceholder} className="rounded-xl border border-[#E6ECF0] px-4 py-3 outline-none focus:border-[#0FAF7A]" />
        {" "}
        <input required name="phone" type="tel" placeholder={texts.phonePlaceholder} className="rounded-xl border border-[#E6ECF0] px-4 py-3 outline-none focus:border-[#0FAF7A]" />
        {" "}
        <select name="interest" className="rounded-xl border border-[#E6ECF0] px-4 py-3 outline-none focus:border-[#0FAF7A] bg-white text-[#33475B]">
          <option>{texts.interestDefault}</option>
          <option>{texts.interest1}</option>
          <option>{texts.interest2}</option>
          <option>{texts.interest3}</option>
          <option>{texts.interest4}</option>
          <option>{texts.interest5}</option>
        </select>
      </div>
      <button className="btn btn-primary w-full justify-center mt-4">
        {texts.button}{" "}
        <svg width="18" height="18">
          <use href="#i-arrow" />
        </svg>
      </button>
      <p className="text-[11px] text-[#6B7C8C] mt-3 text-center">{texts.note}</p>
    </form>
  );
}
