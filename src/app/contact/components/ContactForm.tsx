"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

// Contact form
export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const recipient = "info@gompass.com";
        const subject = encodeURIComponent(`Packages enquiry - ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        // Open Gmail in new tab with prefilled mail
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
        window.open(gmailUrl, "_blank");
    };

    return (
        <form
            className="col-span-1 space-y-5 lg:col-span-2"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center gap-5">
                <Input
                    placeholder="Name"
                    className="bg-[#f3f3f3] p-6 border-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <Input
                    placeholder="Email"
                    className="bg-[#f3f3f3] p-6 border-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                />
            </div>
            <Textarea
                placeholder="Message"
                className="h-55 bg-[#f3f3f3] p-6 border-none resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            />
            <Button className="w-full p-6 text-base cursor-pointer" type="submit">
                Submit
            </Button>
        </form>
    );
}
