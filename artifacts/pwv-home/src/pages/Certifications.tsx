import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { IapmoBadge } from "@/components/IapmoBadge";

const certPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Smart Valve Certifications",
  "url": "https://perfectwatervalve.com/certifications",
  "about": {
    "@type": "Product",
    "name": "Smart Valve™",
    "brand": { "@type": "Brand", "name": "Flow Dynamics" },
    "hasCertification": [
      {
        "@type": "Certification",
        "name": "NSF/ANSI/CAN 61-2023",
        "certificationBody": {
          "@type": "Organization",
          "name": "IAPMO Research and Testing, Inc.",
          "url": "https://www.iapmort.org"
        },
        "url": "https://myplc.iapmo.org/certificate#/18017"
      },
      {
        "@type": "Certification",
        "name": "NSF/ANSI/CAN 372-2024",
        "certificationBody": {
          "@type": "Organization",
          "name": "IAPMO Research and Testing, Inc.",
          "url": "https://www.iapmort.org"
        },
        "url": "https://myplc.iapmo.org/certificate#/18017"
      }
    ]
  }
};

const CERTIFIED_MODELS = [
  { model: "11550", size: '0.75"', name: "Smart Valve-G2" },
  { model: "11540", size: '1.0"',  name: "Smart Valve-G2" },
  { model: "10395", size: '1.5"',  name: "Smart Valve-G2" },
  { model: "10227", size: '2.0"',  name: "Smart Valve-G2" },
  { model: "11685", size: '3.0"',  name: "Smart Valve-G2" },
  { model: "12045", size: '4.0"',  name: "Smart Valve-G2" },
  { model: "11995", size: '6.0"',  name: "Smart Valve-G2" },
  { model: "12150", size: '8.0"',  name: "Smart Valve-G2" },
  { model: "12375", size: '10"',   name: "Smart Valve-G2" },
  { model: "12285", size: '12"',   name: "Smart Valve-G2" },
];

const CERT_61_DETAILS = [
  { field: "Certifying Body",    detail: "IAPMO Research and Testing, Inc." },
  { field: "Standard",           detail: "NSF/ANSI/CAN 61-2023" },
  { field: "File Number",        detail: "N-8904" },
  { field: "Certificate Number", detail: "18017" },
  { field: "Valid Through",      detail: "September 2029" },
];

const CERT_372_DETAILS = [
  { field: "Certifying Body", detail: "IAPMO Research and Testing, Inc." },
  { field: "Standard",        detail: "NSF/ANSI/CAN 372-2024" },
  { field: "File Number",     detail: "8905" },
  { field: "Valid Through",   detail: "November 2029" },
  { field: "Legal Basis",     detail: "Federal Safe Drinking Water Act Section 1417(d) + California Health & Safety Code Section 116875" },
];

const PATENTS = [
  {
    number: "US8707981B2",
    title: "System for Increasing the Efficiency of a Water Meter",
    status: "Granted",
    url: "https://patents.google.com/patent/US8707981B2",
  },
  {
    number: "US12486917B2",
    title: "Hydrostatically Adjustable Valve and Associated System",
    status: "Granted December 2025",
    url: "https://patents.google.com/patent/US12486917B2",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Helmet>
        <title>Smart Valve Certifications | NSF/ANSI/CAN 61 | IAPMO Certified | Perfect Water Valve</title>
        <meta
          name="description"
          content="The Smart Valve™ by Flow Dynamics is independently certified to NSF/ANSI/CAN 61-2023 and NSF/ANSI/CAN 372-2024 by IAPMO Research and Testing. View our full certification documentation."
        />
        <link rel="canonical" href="https://perfectwatervalve.com/certifications" />
        <script type="application/ld+json">{JSON.stringify(certPageSchema)}</script>
      </Helmet>
      <Navbar />

      {/* PAGE HEADER */}
      <section
        className="pt-40 pb-16 lg:pt-52 lg:pb-20 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-5">
            <a href="/" className="text-sm hover:underline" style={{ color: "#0374A7" }}>Home</a>
            <span className="text-sm" style={{ color: "#9CA3AF" }}>/</span>
            <span className="text-sm font-medium" style={{ color: "#0A1F3A" }}>Certifications</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-[1.1]" style={{ color: "#0A1F3A" }}>
            Smart Valve™ Certifications &amp; Compliance
          </h1>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "#4A7085" }}>
            The Smart Valve™ (manufactured by Flow Dynamics LLC) holds independent third-party certifications verifying safety and compliance for commercial water distribution systems across North America and Europe.
          </p>
        </div>
      </section>

      {/* SECTION 1 — NSF/ANSI/CAN 61 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "#0A1F3A" }}>
            NSF/ANSI/CAN 61 — Potable Water Safety
          </h2>

          <div className="mb-10">
            <IapmoBadge size="large" />
          </div>

          <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#4A7085" }}>
            NSF/ANSI/CAN 61 is the North American standard for drinking water system components. Products certified to this standard have been independently tested to ensure they do not leach harmful contaminants into potable water. This certification is required or recognized by plumbing codes in all 50 U.S. states and is the benchmark for potable water safety compliance in commercial buildings.
          </p>

          <div className="rounded-2xl overflow-hidden border mb-8" style={{ borderColor: "#C5D8E8" }}>
            <table className="w-full text-sm">
              <tbody>
                {CERT_61_DETAILS.map(({ field, detail }, i) => (
                  <tr key={field} style={{ backgroundColor: i % 2 === 0 ? "#F4F8FC" : "#ffffff" }}>
                    <td className="px-6 py-4 font-semibold w-44" style={{ color: "#0A1F3A" }}>{field}</td>
                    <td className="px-6 py-4" style={{ color: "#4A7085" }}>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://myplc.iapmo.org/certificate#/18017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#0374A7" }}
            >
              View Official IAPMO Listing →
            </a>
            <a
              href="https://thesmartvalve.com/wp-content/uploads/2026/02/N-8904_02-09-2026_Certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
              style={{ color: "#0374A7", borderColor: "#0374A7" }}
            >
              Download Certificate PDF →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2 — NSF/ANSI/CAN 372 */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ backgroundColor: "#F4F8FC", borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "#0A1F3A" }}>
            NSF/ANSI/CAN 372-2024 — Lead-Free Compliance
          </h2>

          <div className="mb-10">
            <IapmoBadge size="large" />
          </div>

          <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#4A7085" }}>
            NSF/ANSI/CAN 372 establishes lead content requirements for drinking water system components under the Federal Safe Drinking Water Act. Compliance is required in all 50 U.S. states and is specifically enforced under California Health &amp; Safety Code Section 116875. The Smart Valve™ is certified lead-free under this standard, making it compliant for installation in hospitals, schools, and any facility subject to lead-free mandates.
          </p>

          <div className="rounded-2xl overflow-hidden border mb-8" style={{ borderColor: "#C5D8E8" }}>
            <table className="w-full text-sm">
              <tbody>
                {CERT_372_DETAILS.map(({ field, detail }, i) => (
                  <tr key={field} style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#F4F8FC" }}>
                    <td className="px-6 py-4 font-semibold w-44 align-top" style={{ color: "#0A1F3A" }}>{field}</td>
                    <td className="px-6 py-4" style={{ color: "#4A7085" }}>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="https://thesmartvalve.com/wp-content/uploads/2026/02/N-8904_02-09-2026_Certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
            style={{ color: "#0374A7", borderColor: "#0374A7" }}
          >
            Download NSF 372 Certificate PDF →
          </a>
        </div>
      </section>

      {/* SECTION 3 — CE DECLARATION */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#0A1F3A" }}>
            CE Declaration of Conformity
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#4A7085" }}>
            The Smart Valve™ carries a CE Declaration of Conformity, demonstrating compliance with applicable European Union directives for pressure equipment used in water distribution systems.
          </p>
          <a
            href="https://thesmartvalve.com/technical-specs/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all hover:opacity-80"
            style={{ color: "#0374A7", borderColor: "#0374A7" }}
          >
            View CE Declaration →
          </a>
        </div>
      </section>

      {/* SECTION 4 — CERTIFIED MODELS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b" style={{ borderColor: "#C5D8E8", backgroundColor: "#F4F8FC" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8" style={{ color: "#0A1F3A" }}>
            Certified Models
          </h2>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#C5D8E8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0374A7" }}>
                  <th className="px-6 py-3 text-left font-semibold text-white">Model Number</th>
                  <th className="px-6 py-3 text-left font-semibold text-white">Size</th>
                  <th className="px-6 py-3 text-left font-semibold text-white">Product Name</th>
                </tr>
              </thead>
              <tbody>
                {CERTIFIED_MODELS.map(({ model, size, name }, i) => (
                  <tr key={model} style={{ backgroundColor: i % 2 === 0 ? "#F4F8FC" : "#ffffff" }}>
                    <td className="px-6 py-3 font-mono" style={{ color: "#0A1F3A" }}>{model}</td>
                    <td className="px-6 py-3" style={{ color: "#4A7085" }}>{size}</td>
                    <td className="px-6 py-3" style={{ color: "#4A7085" }}>{name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5 — U.S. PATENTS */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8" style={{ borderColor: "#C5D8E8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: "#0A1F3A" }}>
            U.S. Patents
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-8" style={{ color: "#4A7085" }}>
            The Smart Valve™ technology is protected by multiple U.S. patents issued by the United States Patent and Trademark Office, including the patents listed below. Patent protection confirms that the underlying technology has been independently reviewed and found to be novel and non-obvious by federal patent examiners.
          </p>
          <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#C5D8E8" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0374A7" }}>
                  <th className="px-6 py-3 text-left font-semibold text-white">Patent Number</th>
                  <th className="px-6 py-3 text-left font-semibold text-white">Title</th>
                  <th className="px-6 py-3 text-left font-semibold text-white">Status</th>
                </tr>
              </thead>
              <tbody>
                {PATENTS.map(({ number, title, status, url }, i) => (
                  <tr key={number} style={{ backgroundColor: i % 2 === 0 ? "#F4F8FC" : "#ffffff" }}>
                    <td className="px-6 py-4 font-mono whitespace-nowrap" style={{ color: "#0A1F3A" }}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                        style={{ color: "#0374A7" }}
                      >
                        {number}
                      </a>
                    </td>
                    <td className="px-6 py-4" style={{ color: "#4A7085" }}>{title}</td>
                    <td className="px-6 py-4 whitespace-nowrap" style={{ color: "#4A7085" }}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
