import iapmoSrc from "@assets/Screenshot_2026-04-06_at_12.19.15_PM_1775499561043.png";

const CERT_URL = "https://myplc.iapmo.org/certificate#/18017";

export function IapmoBadge({ size }: { size: "large" | "medium" | "small" }) {
  if (size === "large") {
    return (
      <div className="flex items-start gap-6">
        <a
          href={CERT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IAPMO R&T Certified — NSF/ANSI/CAN 61"
          className="shrink-0"
        >
          <img
            src={iapmoSrc}
            alt="IAPMO R&T Certified"
            style={{ width: 120, height: "auto", objectFit: "contain" }}
          />
        </a>
        <div>
          <div className="font-bold text-base mb-1" style={{ color: "#0A1F3A" }}>
            NSF/ANSI/CAN 61-2023 Certified
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{ color: "#4A7085" }}>
            Independently certified by IAPMO Research and Testing, Inc. — the recognized authority for drinking water system components.{" "}
            <a
              href={CERT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: "#0374A7" }}
            >
              View Official Listing →
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (size === "medium") {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <a
          href={CERT_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IAPMO R&T Certified — NSF/ANSI/CAN 61"
        >
          <img
            src={iapmoSrc}
            alt="IAPMO R&T Certified"
            style={{ width: 80, height: "auto", objectFit: "contain" }}
          />
        </a>
        <span className="text-xs text-center text-slate-500">
          NSF/ANSI/CAN 61 Certified | File No. N-8904
        </span>
      </div>
    );
  }

  return (
    <a
      href={CERT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="IAPMO R&T Certified — NSF/ANSI/CAN 61"
      className="block opacity-80 hover:opacity-100 transition-opacity"
    >
      <img
        src={iapmoSrc}
        alt="IAPMO R&T Certified"
        style={{ width: 40, height: "auto", objectFit: "contain" }}
      />
    </a>
  );
}
