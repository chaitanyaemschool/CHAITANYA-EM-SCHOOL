/** Canonical outbound links for the school. */
export const SOCIAL = {
  phone: "+919491371708",
  email: "chaitanyaemschool27@gmail.com",
  whatsapp: "919491371708",
  youtube: "https://www.youtube.com/@chaitanyaschoolchekkapalli",
  facebook: "https://www.facebook.com/search/top?q=Nagaraju%20Maridhu",
  instagram: "https://www.instagram.com/maridhu.nagaraju",
} as const;

/** Partner / developer credit link shown in the footer. */
export const DREAM_TEAM_URL = "https://www.thedreamteamservices.com/";

/** Professional pre-filled WhatsApp enquiry message. */
export const WA_ENQUIRY_MESSAGE = `Hello Chaitanya EM School,

I visited your website and would like to know more about admissions.

Please assist me.

Thank you.`;

export const MAIL_SUBJECT = "Admission Enquiry";
export const MAIL_BODY = `Hello Chaitanya EM School,

I would like to know more about admissions.

Regards,`;

export const telHref = (phone?: string) => `tel:${(phone || SOCIAL.phone).replace(/[^+\d]/g, "")}`;

export const mailHref = (email?: string) =>
  `mailto:${email || SOCIAL.email}?subject=${encodeURIComponent(MAIL_SUBJECT)}&body=${encodeURIComponent(MAIL_BODY)}`;

export const waHref = (num?: string, text: string = WA_ENQUIRY_MESSAGE) => {
  const n = (num || SOCIAL.whatsapp).replace(/\D/g, "") || SOCIAL.whatsapp;
  return `https://wa.me/${n}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
};
