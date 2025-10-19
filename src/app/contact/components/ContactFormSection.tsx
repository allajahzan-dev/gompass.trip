import { fetchContacts } from "@/app/utils/fetchContacts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Map, Phone } from "lucide-react";

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
                <form
                    className="col-span-1 space-y-5
                    lg:col-span-2"
                >
                    <div className="flex items-center gap-5">
                        <Input
                            placeholder="Name"
                            className="bg-[#f3f3f3] p-6 border-none"
                        />
                        <Input
                            placeholder="Name"
                            className="bg-[#f3f3f3] p-6 border-none"
                        />
                    </div>
                    <Textarea
                        placeholder="Message"
                        className="h-55 bg-[#f3f3f3] p-6 border-none resize-none"
                    />
                    <Button className="w-full p-6 text-base cursor-pointer">
                        Submit
                    </Button>
                </form>

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
