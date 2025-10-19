import Image from "next/image";

// Contact Indicator
export default function ContactIndicator() {
    return (
        <a
            href="https://wa.me/+918157905882"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed z-50 bottom-5 right-5"
        >
            <Image
                src="/svgs/whatsapp.svg"
                alt="whatsapp"
                width={1000}
                height={1000}
                className="w-12"
            />
        </a>
    );
}
