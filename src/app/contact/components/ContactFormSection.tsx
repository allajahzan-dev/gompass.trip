import { fetchContacts } from "@/app/utils/fetchContacts";
import { Mail, Map, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

// Contact form section
export default async function ContactFormSection() {
    // Contacts
    const { contact } = await fetchContacts();

    return (
        <section
            className="h-auto px-5 py-16 flex flex-col gap-16
            md:px-10 xl:px-24 md:py-24"
        >
            <div
                className="grid grid-cols-1 gap-16
                lg:grid-cols-3 lg:gap-20"
            >
                {/* Contact form */}
                <ContactForm/>

                {/* Details */}
                <div className="flex flex-col gap-5">
                    {/* Phone number */}
                    <div className="flex items-center gap-5 p-5 border border-black rounded-2xl">
                        <div className="p-4 border border-black rounded-full">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div className="space-y-2 ">
                            <p className="font-semibold">Phone Number</p>
                            <p>+91 {contact?.phone || "8157905882"}</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-5 p-5 border border-black rounded-2xl">
                        <div className="p-4 border border-black rounded-full">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="space-y-2 ">
                            <p className="font-semibold">Email Address</p>
                            <p>info@gompass.online</p>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-5 p-5 border border-black rounded-2xl">
                        <div className="p-4 border border-black rounded-full">
                            <Map className="w-5 h-5" />
                        </div>
                        <div className="space-y-2 ">
                            <p className="font-semibold">Address</p>
                            <p>
                                {contact?.address ||
                                    "5th mile, Mananthavady, Kellur, Kerala 670645"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
