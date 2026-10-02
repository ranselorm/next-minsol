import { Icon } from "@iconify/react";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Reveal from "@/components/Reveal";

const services = [
  "Technical and Engineering",
  "Operational Training",
  "Manufacturing and Distribution",
  "Tenement Administration",
  "Logistics and Transportation",
  "Product enquiry",
  "General enquiry",
];

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });

  useEffect(() => {
    const requestedService = router.query.service;
    if (typeof requestedService === "string" && services.includes(requestedService)) {
      setFormData((current) => ({ ...current, service: requestedService }));
    }
  }, [router.query.service]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = formData.service ? `${formData.service} enquiry from ${formData.name}` : `Enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || "Not specified"}\n\n${formData.message}`;
    window.location.href = `mailto:operationsgh@minsolltd.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <section className="border-b border-slate-900/10 bg-accent py-16 md:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Contact Minsol</p>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-blu md:text-6xl">Let&apos;s talk about what your operation needs.</h1>
          </Reveal>
          <Reveal delay={90} className="border-l border-slate-900/15 pl-6 md:pl-8">
            <p className="max-w-xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">Whether you need technical support, products, training, or logistics capability, our team is ready to start the right conversation.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Speak with us</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-blu md:text-4xl">Accra office.</h2>
            <div className="mt-8 space-y-6 border-t border-slate-900/10 pt-7 text-base text-slate-600">
              <a href="mailto:operationsgh@minsolltd.com" className="group flex items-start gap-4 transition-colors hover:text-main"><Icon icon="mdi:email-outline" width="21" className="mt-0.5 shrink-0 text-main" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Email</span>operationsgh@minsolltd.com</span></a>
              <a href="tel:+233302543667" className="group flex items-start gap-4 transition-colors hover:text-main"><Icon icon="mdi:phone-outline" width="21" className="mt-0.5 shrink-0 text-main" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Phone</span>+233 30 254 3667</span></a>
              <div className="flex items-start gap-4"><Icon icon="mdi:map-marker-outline" width="21" className="mt-0.5 shrink-0 text-main" /><span><span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Office</span>4 Apple Avenue<br />East Legon, Accra</span></div>
            </div>
            <p className="mt-10 max-w-sm border-l border-secondary pl-4 text-sm leading-6 text-slate-600">Use the form for a project or product enquiry. It opens a pre-filled email to our operations team, so you retain a copy of your request.</p>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="border-t border-slate-900/15 pt-7 md:pt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block text-sm font-medium text-blu">Your name<input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} className="mt-2 h-12 w-full rounded-md border border-slate-900/15 bg-white px-4 text-base text-blu outline-none transition-colors placeholder:text-slate-400 focus:border-main" placeholder="Full name" /></label>
                <label className="block text-sm font-medium text-blu">Email address<input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-2 h-12 w-full rounded-md border border-slate-900/15 bg-white px-4 text-base text-blu outline-none transition-colors placeholder:text-slate-400 focus:border-main" placeholder="you@company.com" /></label>
              </div>
              <label className="mt-6 block text-sm font-medium text-blu">What can we help with?<select value={formData.service} onChange={(event) => setFormData({ ...formData, service: event.target.value })} className="mt-2 h-12 w-full rounded-md border border-slate-900/15 bg-white px-4 text-base text-blu outline-none transition-colors focus:border-main"><option value="">Select an area</option>{services.map((service) => <option key={service} value={service}>{service}</option>)}</select></label>
              <label className="mt-6 block text-sm font-medium text-blu">Tell us about your requirement<textarea required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="mt-2 min-h-40 w-full resize-y rounded-md border border-slate-900/15 bg-white p-4 text-base leading-7 text-blu outline-none transition-colors placeholder:text-slate-400 focus:border-main" placeholder="A short overview of the project, product, or support you need." /></label>
              <button type="submit" className="mt-7 inline-flex items-center gap-3 rounded-md bg-main px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blu">Send enquiry <span aria-hidden="true">→</span></button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
